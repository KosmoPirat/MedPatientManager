<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Repositories\UserRepository;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Validation\ValidationException;


class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param UserRepository $userRepository
     * @return JsonResponse
     */
    public function index(UserRepository $userRepository): JsonResponse
    {
        return response()->json($userRepository->getAllUsers());
    }

    /**
     * Show Auth user.
     *
     * @param Request $request
     * @param UserRepository $userRepository
     * @return JsonResponse
     */

    public function showAuth(Request $request, UserRepository $userRepository): JsonResponse
    {
        return response()->json($userRepository->getAuthUsers($request));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @param Request $request
     * @param UserRepository $userRepository
     * @return JsonResponse
     * @throws ValidationException
     */
    public function create(Request $request, UserRepository $userRepository): JsonResponse
    {
        $newUser = response()->json($userRepository->createUser($request));
        return response()->json([
            'data' => $newUser->original,
            'message' => 'Пользователь успешно создан',
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
     * @param User $user
     * @return Response
     */
    public function show(User $user)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param User $user
     * @return Response
     */
    public function edit(User $user)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param UserRepository $userRepository
     * @return JsonResponse
     */
    public function update(Request $request, UserRepository $userRepository): JsonResponse
    {

        return response()->json([
            'data' => $userRepository->updateUser($request),
            'status' => true,
        ]);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @param UserRepository $userRepository
     * @return JsonResponse
     */
    public function destroy(int $id, UserRepository $userRepository): JsonResponse
    {
        return response()->json($userRepository->deleteUser($id));
    }


}
