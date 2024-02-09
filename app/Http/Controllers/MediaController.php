<?php

namespace App\Http\Controllers;

use App\Models\Vehicle;
use Illuminate\Http\Request;
use Inertia\Response;
use App\Models\Spot;
use Illuminate\Http\JsonResponse;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use App\Traits\UploadAble;


class MediaController extends Controller
{
    use UploadAble;
    public function save(Request $request)
    {
        $image = request()->file('file');
        if(!$image)
            return response()->json(['error', 'image is required'], 400); 
        $disk = config('filesystems.image_storage_disk');
        $thumbnail = $this->uploadThumbnail($image, 'users', $disk);
        $image_url = config('filesystems.disks.contabo.url') . $thumbnail;
        
        $spot = new Spot();
        $spot->title = "ttitleest";
        $spot->desc = "desc";
        $spot->body = $thumbnail;
        $spot->cover = "cover";
        $spot->data = "null";
        $spot->author_id = 1;
        $spot->dies_on = '2023/11/12';
        $spot->meta_data = "";
        $spot->score = "10";
        $spot->views = 0;
        $spot->likes = 0;
        $spot->status = "CREATED";
        $spot->save();

        $responseData = [
            'image_url' => $image_url,
            'spot' => $spot,
        ];
    
        // Return the array as JSON response
        return response()->json($responseData);
    }


}