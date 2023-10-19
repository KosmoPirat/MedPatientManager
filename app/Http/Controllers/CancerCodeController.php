<?php

namespace App\Http\Controllers;

use App\Repositories\CancerCodeRepository;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class CancerCodeController extends Controller
{
    public function index(CancerCodeRepository $cancerCodeRepository): JsonResponse
    {
        return response()->json($cancerCodeRepository->getAllCancerCodes());
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
     * @param CancerCodeRepository $cancerCodeRepository
     * @return JsonResponse
     */
    public function show(CancerCodeRepository $cancerCodeRepository): JsonResponse
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param CancerCodeRepository $cancerCodeRepository
     * @return JsonResponse
     */
    public function edit(CancerCodeRepository $cancerCodeRepository): JsonResponse
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param CancerCodeRepository $cancerCodeRepository
     * @return JsonResponse
     */
    public function update(Request $request, CancerCodeRepository $cancerCodeRepository): JsonResponse
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param CancerCodeRepository $cancerCodeRepository
     * @return JsonResponse
     */
    public function destroy(CancerCodeRepository $cancerCodeRepository): JsonResponse
    {
        //
    }
}
