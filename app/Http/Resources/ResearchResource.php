<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ResearchResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  Request  $request

     */
    public function toArray($request): ?array
    {
        $rsParam = array();
        $rs = $this->researchSpecification->cancerCodeParam;
        foreach($rs as $key => $value){
            array_push($rsParam, (object)[
                'id' => $value->id,
                'name' => $value->name,
            ]);
        };
        if($this->researchSpecification->cancerTypeParam == null) $cancerTypeParam = null;
        else {
            $cancerTypeParam = (object)[
                'id' => $this->researchSpecification->cancerTypeParam->id,
                'name' => $this->researchSpecification->cancerTypeParam->name];
            }

        return [
            'id' => $this->id,
            'name' => $this->name,
            'active' => $this->active,
            'hospital' => (object)[
                'id' => $this->hospital->id,
                'name' => $this->hospital->name,
                'phone' => $this->hospital->phone],
            'researchManager' => (object)[
                'id' => $this->researchManager->id,
                'name' => $this->researchManager->name],
            'cancerCode' => (object)[
                'id' => $this->researchSpecification->cancerCode->id,
                'name' => $this->researchSpecification->cancerCode->name],
            'cancerCodeParams' => $rsParam,
            'cancerType' => (object)[
                'id' => $this->researchSpecification->cancerType->id,
                'name' => $this->researchSpecification->cancerType->name],
            'cancerTypeParam' => $cancerTypeParam,
            ];
    }
}
