<?php

namespace App\Http\Controllers;


use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use App\Repositories\PatientRegistrationRepository;

class PatientRegistrationController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param PatientRegistrationRepository $patientRegistrationRepository
     * @return JsonResponse
     */
    public function index(PatientRegistrationRepository $patientRegistrationRepository): JsonResponse
    {
        return response()->json($patientRegistrationRepository->getAllRegistrationRecords());
    }

    /**
     * Show the form for creating a new resource.
     *
     * @param Request $request
     * @param PatientRegistrationRepository $patientRegistrationRepository
     * @return JsonResponse
     */
    public function create(
        Request $request,
        PatientRegistrationRepository $patientRegistrationRepository): JsonResponse
    {
        $inputs = $request->all();
        if (array_key_exists('userId', $inputs))
        {
            $research = $patientRegistrationRepository->addNewRegistrationByDoctor($request);

        } else {
            $research = $patientRegistrationRepository->addNewRegistrationByPatient($request);
        }

        if (!$research->resource) return response()
            ->json([
                'data' => null,
                'status' => false,
            ]);
        return response()->json([
            'data' => $research,
            'status' => true,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return JsonResponse
     */
    public function store(Request $request): JsonResponse
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param PatientRegistrationRepository $patientRegistrationRepository
     * @param int $id
     * @return JsonResponse
     */
    public function show(PatientRegistrationRepository $patientRegistrationRepository, int $id): JsonResponse
    {
        return response()->json($patientRegistrationRepository->getRegistrationRecordsByUser($id));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param PatientRegistrationRepository $patientRegistrationRepository
     * @return JsonResponse
     */
    public function edit(PatientRegistrationRepository $patientRegistrationRepository): JsonResponse
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param PatientRegistrationRepository $patientRegistrationRepository
     * @return JsonResponse
     */
    public function update(Request $request, PatientRegistrationRepository $patientRegistrationRepository): JsonResponse
    {
        $reportData = $patientRegistrationRepository->updateRegistration($request);
        if (!$reportData->resource) return response()
            ->json([
                'data' => null,
                'status' => false,
            ]);
        return response()->json([
            'data' => $reportData,
            'status' => true,
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @param PatientRegistrationRepository $patientRegistrationRepository
     * @return JsonResponse
     */
    public function destroy(int $id, PatientRegistrationRepository $patientRegistrationRepository): JsonResponse
    {
        return response()->json($patientRegistrationRepository->deleteRegistration($id));
    }
}
