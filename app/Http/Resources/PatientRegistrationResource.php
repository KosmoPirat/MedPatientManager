<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;


class PatientRegistrationResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  Request  $request
     */
    public function toArray($request): array
    {
        $files = [];
        if($this->files) {
            $fileData = $this->files;
            foreach($fileData as $value){
                array_push($files, (object)[
                    'id' => $value->id,
                    'name' => $value->file_name,
                    'link' => $value->download_file_name,
                ]);
            };
        }
        $hospitals = [];
        if($this->hospitals) {
            $hospitalDta = $this->hospitals;
            foreach($hospitalDta as $hospital){
                array_push($hospitals, (object)[
                    'id' => $hospital->id,
                    'name' => $hospital->name,
                    'phone' => $hospital->phone,
                ]);
            };
        }
        return [
            'id' => $this->id,
            'updatedAt' => $this->updated_at,
            'research' => [
                'id' => $this->research_id == null ? null : $this->research->id,
                'researchName' => $this->research_name == null ? null : $this->research_name,
                'cancerCode' => [
                    'id' => $this->cancerCode->id,
                    'name' => $this->cancerCode->name,
                ],
                'cancerCodeParams' => $this->cancerCodeParams,
                'cancerType' => [
                    'id' => $this->cancerType->id,
                    'name' => $this->cancerType->name,
                ],
                'cancerTypeParam' => [
                    'id' => $this->cancerTypeParam->id,
                    'name' => $this->cancerTypeParam->name,
                ],
            ],
            'patient' => [
                'name' => $this->patient_name == null ? null : $this->patient_name,
                'phone' => $this->patient_phone == null ? null : $this->patient_phone,
                'files' => $files,
            ],
            'user' => [
                'id' => $this->user == null ? null : $this->user->id,
                'name' => $this->user == null ? null : $this->user->name,
            ],
            'hospital' => $hospitals,
            'status' => [
                'id' => $this->status->id,
                'name' => $this->status->name,
            ],
        ];
    }
}
