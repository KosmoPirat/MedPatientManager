<?php

namespace App\Http\Controllers;

use App\Repositories\CancerTypeRepository;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class CancerTypeController extends Controller
{
    public function index(CancerTypeRepository $cancerTypeRepository): JsonResponse
    {
        return response()->json($cancerTypeRepository->getAllCancerTypes());
    }
    /**
     *
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
     * @param CancerTypeRepository $cancerTypeRepository
     * @return JsonResponse
     */
    public function show(CancerTypeRepository $cancerTypeRepository): JsonResponse
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param CancerTypeRepository $cancerTypeRepository
     * @return JsonResponse
     */
    public function edit(CancerTypeRepository $cancerTypeRepository): JsonResponse
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param CancerTypeRepository $cancerTypeRepository
     * @return JsonResponse
     */
    public function update(Request $request, CancerTypeRepository $cancerTypeRepository): JsonResponse
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param CancerTypeRepository $cancerTypeRepository
     * @return JsonResponse
     */
    public function destroy(CancerTypeRepository $cancerTypeRepository): JsonResponse
    {
        //
    }
}
