<?php

namespace App\Http\Controllers;

use App\Models\Research;
use App\Repositories\PatientRegistrationRepository;
use App\Repositories\ResearchRepository;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;


class ResearchController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param ResearchRepository $researchRepository
     * @return JsonResponse
     */
    public function index(ResearchRepository $researchRepository): JsonResponse
    {
        return response()->json($researchRepository->getAllResearches());
    }

    /**
     * Show the form for creating a new resource.
     *
     * @param ResearchRepository $researchRepository
     * @param Request $request
     * @return JsonResponse
     */
    public function create(ResearchRepository $researchRepository, Request $request): JsonResponse
    {
        return response()->json([
            'data' => $researchRepository->createResearch($request),
            'status' => true,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return Response
     */
    public function store(Request $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param ResearchRepository $researchRepository
     * @param int $id
     * @return JsonResponse
     */
    public function show(ResearchRepository $researchRepository, int $id): JsonResponse
    {
        $researches = $researchRepository->getResearchByRequest($id);
        if (!$researches->resource) return response()
            ->json(['data' => null, 'status' => false]);
        return response()->json([
            'data' => $researches,
            //'message' => 'Найдено исследований: ' .count($researches->resource). '. Если необходимо, введите дополнительную информацию']);
            'status' => false]);
    }

    /**
     * Display the specified checked resource .
     *
     * @param ResearchRepository $researchRepository
     * @param Request $request
     * @return JsonResponse
     */

    public function showChecked(ResearchRepository $researchRepository, Request $request): JsonResponse
    {
        $researches = $researchRepository->checkResearch($request);

        if ($researches->resource->isEmpty()) return response()
            ->json([
                'data' => [],
                'status' => false,
                'notFoundStatus' => true,
                ]);
        return response()->json([
            'data' => $researches,
            'status' => true,
            'notFoundStatus' => false,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param Research $oncResearch
     * @return Response
     */
    public function edit(Research $oncResearch)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param ResearchRepository $researchRepository
     * @param Request $request
     * @return JsonResponse
     */
    public function update(ResearchRepository $researchRepository, Request $request): JsonResponse
    {
        return response()->json([
            'data' => $researchRepository->updateResearch($request),
            'status' => true,
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @param ResearchRepository $researchRepository
     * @return JsonResponse
     */
    public function destroy(int $id, ResearchRepository $researchRepository): JsonResponse
    {
        return response()->json($researchRepository->deleteResearch($id));
    }

}
