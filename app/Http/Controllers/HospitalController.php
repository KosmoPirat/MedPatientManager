<?php

namespace App\Http\Controllers;

use App\Repositories\HospitalRepository;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class HospitalController extends Controller
{
    public function index(HospitalRepository $hospitalRepository): JsonResponse
    {
        return response()->json($hospitalRepository->getAllHospitals());
    }

    /**
     * Show the form for creating a new resource.
     *
     * @param Request $request
     * @param HospitalRepository $hospitalRepository
     * @return JsonResponse
     */
    public function create(Request $request, HospitalRepository $hospitalRepository): JsonResponse
    {
        $newHospital = response()->json($hospitalRepository->createHospital($request));
        return response()->json([
            'data' => $newHospital->original,
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
     * @param HospitalRepository $hospitalRepository
     * @return JsonResponse
     */
    public function show(HospitalRepository $hospitalRepository): JsonResponse
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param HospitalRepository $hospitalRepository
     * @return JsonResponse
     */
    public function edit(HospitalRepository $hospitalRepository): JsonResponse
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param HospitalRepository $hospitalRepository
     * @return JsonResponse
     */
    public function update(Request $request, HospitalRepository $hospitalRepository): JsonResponse
    {
        return response()->json([
            'data' => $hospitalRepository->updateHospital($request),
            'status' => true,
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param HospitalRepository $hospitalRepository
     * @param int $id
     * @return JsonResponse
     */
    public function destroy(HospitalRepository $hospitalRepository, int $id): JsonResponse
    {
        return response()->json($hospitalRepository->deleteHospital($id));
    }
}
