<?php

namespace App\Http\Controllers;

use App\Models\ResearchManager;
use App\Repositories\ResearchManagerRepository;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;

class ResearchManagerController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param ResearchManagerRepository $researchManagerRepository
     * @return JsonResponse
     */
    public function index(ResearchManagerRepository $researchManagerRepository): JsonResponse
    {
        return response()->json($researchManagerRepository->getAllManagers());
    }

    /**
     * Show the form for creating a new resource.
     *
     * @param Request $request
     * @param ResearchManagerRepository $researchManagerRepository
     * @return JsonResponse
     */
    public function create(Request $request, ResearchManagerRepository $researchManagerRepository): JsonResponse
    {
        $newManager = response()->json($researchManagerRepository->createManager($request));
        return response()->json([
            'data' => $newManager->original,
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
     * @param ResearchManager $researchManager
     * @return Response
     */
    public function show(ResearchManager $researchManager)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param ResearchManager $researchManager
     * @return Response
     */
    public function edit(ResearchManager $researchManager)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param ResearchManagerRepository $researchManagerRepository
     * @return JsonResponse
     */
    public function update(Request $request, ResearchManagerRepository $researchManagerRepository): JsonResponse
    {
        return response()->json([
            'data' => $researchManagerRepository->updateManager($request),
            'status' => true,
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @param ResearchManagerRepository $researchManagerRepository
     * @return JsonResponse
     */
    public function destroy(ResearchManagerRepository $researchManagerRepository, int $id): JsonResponse
    {
        return response()->json($researchManagerRepository->deleteManager($id));
    }
}
