<?php

namespace App\Http\Controllers;

use App\Repositories\CancerTypeParamRepository;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class CancerTypeParamController extends Controller
{
    public function index(CancerTypeParamRepository $cancerTypeParamRepository): JsonResponse
    {
        return response()->json($cancerTypeParamRepository->getAllCancerTypeParams());
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return JsonResponse
     */
    public function create(): JsonResponse
    {
        //
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
     * @param CancerTypeParamRepository $cancerTypeParamRepository
     * @return JsonResponse
     */
    public function show(CancerTypeParamRepository $cancerTypeParamRepository): JsonResponse
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param CancerTypeParamRepository $cancerTypeParamRepository
     * @return JsonResponse
     */
    public function edit(CancerTypeParamRepository $cancerTypeParamRepository): JsonResponse
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param CancerTypeParamRepository $cancerTypeParamRepository
     * @return JsonResponse
     */
    public function update(Request $request, CancerTypeParamRepository $cancerTypeParamRepository): JsonResponse
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param CancerTypeParamRepository $cancerTypeParamRepository
     * @return JsonResponse
     */
    public function destroy(CancerTypeParamRepository $cancerTypeParamRepository): JsonResponse
    {
        //
    }
}
