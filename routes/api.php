<?php

use App\Http\Controllers\CancerCodeController;
use App\Http\Controllers\CancerCodeParamController;
use App\Http\Controllers\CancerTypeController;
use App\Http\Controllers\CancerTypeParamController;
use App\Http\Controllers\HospitalController;
use App\Http\Controllers\ResearchController;
use App\Http\Controllers\ResearchManagerController;
use App\Http\Controllers\PatientRegistrationController;
use App\Http\Controllers\RoleController;
use App\Http\Controllers\StatusController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use Laravel\Fortify\Http\Controllers\AuthenticatedSessionController;

// Authentication...
Route::group(['middleware' => config('fortify.middleware', ['web'])], function () {
    $enableViews = config('fortify.views', true);
    $limiter = config('fortify.limiters.login');

    if ($enableViews) {
        Route::get('/login', [AuthenticatedSessionController::class, 'create'])
            ->middleware(['guest:' . config('fortify.guard')])
            ->name('login');
    }


    Route::post('/login', [AuthenticatedSessionController::class, 'store'])
        ->middleware(array_filter([
            'guest:' . config('fortify.guard'),
            $limiter ? 'throttle:' . $limiter : null,
        ]));

    Route::post('/logout', [AuthenticatedSessionController::class, 'destroy'])
        ->name('logout');

    //Cancer Type routs
    Route::get('cancer-types', [CancerTypeController::class, 'index']);

    //Cancer Type Param routs
    Route::get('cancer-type-params', [CancerTypeParamController::class, 'index']);

    //Cancer Code routs
    Route::get('cancer-codes', [CancerCodeController::class, 'index']);

    //Cancer Code Param routs
    Route::get('cancer-code-params', [CancerCodeParamController::class, 'index']);

    //Research routs
    Route::post('check-research', [ResearchController::class, 'showChecked']);
    Route::get('research/{id}', [ResearchController::class, 'show']);

    //PatientRegistration routs
    Route::post('create-report-data', [PatientRegistrationController::class, 'create']);

    //Routs for auth request
    Route::middleware('auth:sanctum')->group(function () {
        //User routs
        Route::get('auth-user', [UserController::class, 'showAuth']);
        Route::get('users', [UserController::class, 'index']);
        Route::post('user', [UserController::class, 'create']);
        Route::put('user', [UserController::class, 'update']);
        Route::delete('user/{id}', [UserController::class, 'destroy']);

        //Research routs
        Route::get('researches', [ResearchController::class, 'index']);
        Route::post('research', [ResearchController::class, 'create']);
        Route::put('research', [ResearchController::class, 'update']);
        Route::delete('research/{id}', [ResearchController::class, 'destroy']);

        //Roles routs
        Route::get('roles', [RoleController::class, 'index']);

        //Statuses routs
        Route::get('statuses', [StatusController::class, 'index']);

        //Hospital routs
        Route::get('hospitals', [HospitalController::class, 'index']);
        Route::post('hospital', [HospitalController::class, 'create']);
        Route::put('hospital', [HospitalController::class, 'update']);
        Route::delete('hospital/{id}', [HospitalController::class, 'destroy']);

        //PatientRegistration routs
        Route::get('report-data', [PatientRegistrationController::class, 'index']);
        Route::get('report-data/{id}', [PatientRegistrationController::class, 'show']);
        Route::post('update-report-data', [PatientRegistrationController::class, 'update']);
        Route::delete('delete-report-data/{id}', [PatientRegistrationController::class, 'destroy']);

        //ResearchManager routs
        Route::get('managers', [ResearchManagerController::class, 'index']);
        Route::post('manager', [ResearchManagerController::class, 'create']);
        Route::put('manager', [ResearchManagerController::class, 'update']);
        Route::delete('manager/{id}', [ResearchManagerController::class, 'destroy']);
    });
});
