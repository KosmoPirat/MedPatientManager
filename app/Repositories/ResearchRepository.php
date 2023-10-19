<?php

namespace App\Repositories;

use App\Http\Resources\ResearchResource;
use App\Models\Research as Model;
use App\Models\ResearchSpecification;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;


/**
 * Class RoleRepository
 *
 * @package App\Repositories
 */

class ResearchRepository extends CoreRepository
{
    protected function getModelClass(): string
    {
        return Model::class;
    }

    public function getAllResearches(): AnonymousResourceCollection
    {
        $records = Model::with([
            'researchSpecification.cancerCode',
            'researchSpecification.cancerCodeParam',
            'researchSpecification.cancerType',
            'researchSpecification.cancerTypeParam',
            'researchManager:id,name',
        ])->get();
        return ResearchResource::collection($records);
    }

    public function getResearchByRequest($id): ?AnonymousResourceCollection
    {
        $record = Model::with([
            'researchSpecification',
            'researchSpecification.cancerCode',
            'researchSpecification.cancerCodeParam',
            'researchSpecification.cancerType',
            'researchSpecification.cancerTypeParam',
            ])
            ->where('active', '1')
            ->whereHas('researchSpecification', function($q) use ($id) {
                $q->where('cancer_code_id', $id);
            })->get();
        return ResearchResource::collection($record);
    }

    public function checkResearch(Request $request): ?AnonymousResourceCollection
    {
        $data = $request->json()->all();
        $record = Model::with([
            'hospital:id,name,phone',
            'researchSpecification',
            'researchSpecification.cancerCode',
            'researchSpecification.cancerCodeParam',
            'researchSpecification.cancerType',
            'researchSpecification.cancerTypeParam',
        ])
        ->where('active', '1')
        ->whereHas('researchSpecification', function($q) use ($data) {
            if ($data['cancerCodeParamId'] == null) {
                $q->where('cancer_code_id', $data['cancerCodeId'])
                  ->where('cancer_type_id', $data['cancerTypeId'])
                  ->where('cancer_type_param_id', $data['cancerTypeParamId']);
            } else{
                $q->where('cancer_code_id', $data['cancerCodeId'])
                  ->whereHas('cancerCodeParam', function($q) use ($data) {
                      $q->whereIn('cancer_code_param_id', $data['cancerCodeParamId']);
                  })->where('cancer_type_id', $data['cancerTypeId'])
                    ->where('cancer_type_param_id', $data['cancerTypeParamId']);
            }
        })->get();

        if ($data['cancerCodeParamId'] == null) {
            $record = $record->filter(function ($value) {
                return count($value->researchSpecification->cancerCodeParam->toArray()) == 0;
            });
        }

//        if (count($record)) $cancerParamCount = count($record[0]->researchSpecification->cancerCodeParam);
//        else return null;
//        if($data['cancerCodeParamId'] == null ) ResearchResource::collection($record);
//        elseif(count($data['cancerCodeParamId']) !== $cancerParamCount) return null;
        return ResearchResource::collection($record);
    }

    public function createResearch(Request $request): ResearchResource
    {
        $newResearchRecord = Model::create([
            'name' => $request->name,
            'research_manager_id' => $request->manager,
            'hospital_id' => $request->hospital,
            'active' => $request->active,
        ]);

        $newResearchSpecification = ResearchSpecification::create([
            'research_id' => $newResearchRecord->id,
            'cancer_code_id' => $request->cancerCode,
            'cancer_type_id' => $request->cancerType,
            'cancer_type_param_id' => $request->cancerTypeParam,
        ]);

        if($request->cancerCodeParams) {
            $newResearchSpecification->cancerCodeParam()->sync(explode(",", $request->cancerCodeParam));
        }
        return new ResearchResource($newResearchRecord);
    }

    public function updateResearch(Request $request): ResearchResource
    {
        $researchToUpdate = Model::find($request->id);

        $researchToUpdate->name = $request->name;
        $researchToUpdate->research_manager_id = $request->manager;
        $researchToUpdate->hospital_id = $request->hospital;
        $researchToUpdate->active = $request->active;


        $researchSpecification = ResearchSpecification::find($request->id);

        $researchToUpdate->save();

        $researchSpecification->cancer_code_id = $request->cancerCode;
        $researchSpecification->cancer_type_id = $request->cancerType;
        $researchSpecification->cancer_type_param_id = $request->cancerTypeParam;
        if (gettype($request->cancerCodeParams) === 'array') {
            $researchSpecification->cancerCodeParam()->sync($request->cancerCodeParams);
        } else {
            $researchSpecification->cancerCodeParam()->sync(explode(",", $request->cancerCodeParams));
        }
        $researchSpecification->save();

        return new ResearchResource($researchToUpdate);
    }

    public function deleteResearch($id): int
    {
        Model::destroy($id);

        return $id;
    }


}
