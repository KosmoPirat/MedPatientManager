<?php

namespace App\Http\Controllers;

use App\Repositories\RoleRepository;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class RoleController extends Controller
{
    public function index(RoleRepository $roleRepository): JsonResponse
    {
        return response()->json($roleRepository->getAllRoles());
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
     * @param RoleRepository $roleRepository
     * @return JsonResponse
     */
    public function show(RoleRepository $roleRepository): JsonResponse
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param RoleRepository $roleRepository
     * @return JsonResponse
     */
    public function edit(RoleRepository $roleRepository): JsonResponse
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param RoleRepository $roleRepository
     * @return JsonResponse
     */
    public function update(Request $request, RoleRepository $roleRepository): JsonResponse
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param RoleRepository $roleRepository
     * @return JsonResponse
     */
    public function destroy(RoleRepository $roleRepository): JsonResponse
    {
        //
    }
}
