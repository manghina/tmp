<?php

namespace App\Http\Controllers;

use App\Models\Vehicle;
use Illuminate\Http\Request;
use Inertia\Response;
use Illuminate\Http\JsonResponse;

class VehicleController extends Controller
{
    public function search(Request $request)
    {
        return Vehicle::where($request->get("field"), 'like', '%'.$request->get("value").'%')->get();
    }


}