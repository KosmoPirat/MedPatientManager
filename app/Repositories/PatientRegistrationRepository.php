<?php

namespace App\Repositories;

use App\Http\Resources\PatientRegistrationResource;
use App\Models\PatientRegistration as Model;
use App\Models\PatientFile;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Support\Facades\File;


/**
 * Class PatientRegistrationRepository
 *
 * @package App\Repositories
 */

class PatientRegistrationRepository extends CoreRepository
{
    protected function getModelClass(): string
    {
        return Model::class;
    }

    protected function saveFiles($files, $record): void
    {
        foreach ($files as $key => $file)
        {
            $dt = now()->format("Y-m-d_His");
            $downloadName = $key ."_". $dt;
            $fileName = explode(".", $file->getClientOriginalName())[0];
            $ext = $file->getClientOriginalExtension();
            if ($file->move('download_user_data', $downloadName.".".$ext))
            {
                PatientFile::create([
                    //'patient_id' => $model->id,
                    'patient_registration_id' => $record->id,
                    'file_name' => $fileName,
                    'download_file_name' => $downloadName.".".$ext,
                ]);
            }
        }
    }

    public function getAllRegistrationRecords(): AnonymousResourceCollection
    {
        $records = Model::with([
            'cancerCode:id,name',
            'cancerCodeParams:id,name',
            'cancerType:id,name',
            'cancerTypeParam:id,name',
            'hospitals:id,name,phone',
            'user:id,name',
            'files',
            'status:id,name',
        ])->get();

        return PatientRegistrationResource::collection($records);
    }

    public function getRegistrationRecordsByUser($id): AnonymousResourceCollection
    {
        $records = Model::with([
            'cancerCode',
            'cancerCodeParams:id,name',
            'cancerType',
            'cancerTypeParam',
            'hospitals:id,name,phone',
            'user:id,name',
            'files',
            'status:id,name',
        ])->whereHas('user', function($q) use ($id) { $q->where('id', $id);})
          ->latest('updated_at')
          ->get();
        return PatientRegistrationResource::collection($records);
    }

    public function addNewRegistrationByDoctor($request): PatientRegistrationResource
    {
        $newRegistrationRecord = Model::create([
            'research_name' => $request->researchName,
            'cancer_code_id' => $request->cancerCodeId,
            'cancer_type_id' => $request->cancerTypeId,
            'cancer_type_param_id' => $request->cancerTypeParamId,
            'patient_name' => $request->name,
            'patient_phone' => $request->phone,
            'user_id' => $request->userId,
            'status_id' => 4,
        ]);
        if ($request->files) $this->saveFiles($request->files, $newRegistrationRecord);
        if($request->cancerCodeParamId) {
            $newRegistrationRecord->cancerCodeParams()->attach(explode(",", $request->cancerCodeParamId));
        }
        $newRegistrationRecord->hospitals()->attach(explode(",", $request->hospitalId));

        return new PatientRegistrationResource($newRegistrationRecord);
    }
    
    public function addNewRegistrationByPatient($request): PatientRegistrationResource
    {
        $newRegistrationRecord = Model::create([
            'research_name' => $request->researchName,
            'cancer_code_id' => $request->cancerCodeId,
            'cancer_type_id' => $request->cancerTypeId,
            'cancer_type_param_id' => $request->cancerTypeParamId,
            'patient_name' => $request->name,
            'patient_phone' => $request->phone,
            'status_id' => 4,
        ]);
        if ($request->files) $this->saveFiles($request->files, $newRegistrationRecord);
        if($request->cancerCodeParamId) {
            $newRegistrationRecord->cancerCodeParams()->attach(explode(",", $request->cancerCodeParamId));
        }
        $newRegistrationRecord->hospitals()->attach(explode(",", $request->hospitalId));

        return new PatientRegistrationResource($newRegistrationRecord);
    }

    public function updateRegistration($request): PatientRegistrationResource
    {
        $registrationToUpdate = Model::find($request->id);
        $registrationToUpdate->research_name = $request->researchName;
        $registrationToUpdate->cancer_code_id = $request->cancerCode;
        $registrationToUpdate->cancer_type_id = $request->cancerType;
        $registrationToUpdate->cancer_type_param_id = $request->cancerTypeParam;
        $registrationToUpdate->patient_name = $request->name ?: null;
        $registrationToUpdate->patient_phone = $request->phone ?: null;
        $registrationToUpdate->user_id = $request->user ?: null;
        $registrationToUpdate->cancer_type_param_id = $request->cancerTypeParam;
        $registrationToUpdate->status_id = $request->status;

        if ($request->cancerCodeParams) {
            $registrationToUpdate->cancerCodeParams()->sync($request->cancerCodeParams);
        }

        $registrationToUpdate->hospitals()->sync($request->hospital);

        $registrationToUpdate->save();

        return new PatientRegistrationResource($registrationToUpdate);
    }

    public function deleteRegistration($id): int
    {
        $record = Model::find($id);
        $files = $record->files;
        $fileNames = [];
        foreach ($files as $file) {
            array_push($fileNames, $file->download_file_name);
        }
        Model::destroy($id);
        foreach ($fileNames as $fileName) {
            if(File::exists(public_path('download_user_data/'.$fileName))){
                File::delete(public_path('download_user_data/'.$fileName));
            }
        }
        return $id;
    }

}
