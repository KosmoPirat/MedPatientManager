<?php

namespace App\Http\Controllers;

use App\Repositories\CancerCodeParamRepository;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class CancerCodeParamController extends Controller
{
    public function index(CancerCodeParamRepository $cancerCodeParamRepository): JsonResponse
    {
        return response()->json($cancerCodeParamRepository->getAllCancerCodeParams());
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
     * @param CancerCodeParamRepository $cancerCodeParamRepository
     * @return JsonResponse
     */
    public function show(CancerCodeParamRepository $cancerCodeParamRepository): JsonResponse
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param CancerCodeParamRepository $cancerCodeParamRepository
     * @return JsonResponse
     */
    public function edit(CancerCodeParamRepository $cancerCodeParamRepository): JsonResponse
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param CancerCodeParamRepository $cancerCodeParamRepository
     * @return JsonResponse
     */
    public function update(Request $request, CancerCodeParamRepository $cancerCodeParamRepository): JsonResponse
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param CancerCodeParamRepository $cancerCodeParamRepository
     * @return JsonResponse
     */
    public function destroy(CancerCodeParamRepository $cancerCodeParamRepository): JsonResponse
    {
        //
    }
}
