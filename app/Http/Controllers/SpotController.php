<?php

namespace App\Http\Controllers;

use App\Models\Spot;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class SpotController extends Controller
{
    public function create(Request $request, $id)
    {
        $spot = Spot::find($id);
    
        if (!$spot) {
            return response()->json(['error' => 'Spot not found'], 404);
        }
    
   
        $files = $request->file('file');
    
        $files = is_array($files) ? $files : [$files];
        $images = [];
    
        foreach ($files as $i => $file) {
            $pro_fileExt = $file->getClientOriginalExtension();
            $pro_fileNameToStore = time() . '_' . $i . '.' . $pro_fileExt;
    
            $pro_pathToStore = 'images'; 
            $path = $file->storeAs($pro_pathToStore, $pro_fileNameToStore);
    
            $profile_ph = '/images/' . $pro_fileNameToStore;
            $images[] = $profile_ph;
        
        }
    
        $body = $request->except('file');
    
        $body['images'] = $images ?? [];
    
        $spot->data = json_encode($body);
        $spot->save();
    
        return response()->json($spot);
    }
    
}
