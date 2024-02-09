<?php

namespace App\Traits;

use Illuminate\Http\UploadedFile;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

use Intervention\Image\ImageManager;
use Intervention\Image\Drivers\Imagick\Driver;
use Intervention\Image\Interfaces\EncodedImageInterface;
use Intervention\Image\Encoders\JpegEncoder;
/**
* Trait UploadAble
* @package App\Traits
*/
trait UploadAble
{
    /**
    * @param UploadedFile $file
    * @param null $folder
    * @param string $disk
    * @param null $filename
    * @return false|string
    */
    public function uploadFile(UploadedFile $file, $folder = null, $disk = 'public', $filename = null) {
        $name = !is_null($filename) ? $filename : Str::random(25);

        $path = $file->storeAs(
            $folder,
            $name . "." . $file->getClientOriginalExtension(),
            $disk
        );
        return "/$path";
    }

    /**
    * @param UploadedFile $file
    * @param null $folder
    * @param string $disk
    * @param null $filename
    * @return false|string
    */
    public function uploadImage(UploadedFile $file, $folder = null, $disk = 'public', $filename = null) {

        $manager = new ImageManager(new Driver());
        $imageUpload = $manager->read($file);

        if ($imageUpload->height() > 900) {
            $imageUpload->resize(null, 900, function ($constraint) {
                $constraint->aspectRatio();
                $constraint->upsize();
            });
        }
        if ($imageUpload->width() > 1200) {
            $imageUpload->resize(null, 1200, function ($constraint) {
                $constraint->aspectRatio();
                $constraint->upsize();
            });
        }

        // $imageUpload->toJpeg(60);
        $pointer = $imageUpload->encode(new JpegEncoder(quality: 65))->toFilePointer();

        $name = !is_null($filename) ? $filename : Str::random(25);
        $fileHashName = $name . "." . $file->getClientOriginalExtension();
        $filePath = "/$folder/$fileHashName";

        Storage::disk($disk)->put($filePath, $pointer, 'public');

        return $filePath;
    }

    /**
    * @param UploadedFile $file
    * @param null $folder
    * @param string $disk
    * @param null $filename
    * @return false|string
    */
    public function uploadThumbnail(UploadedFile $file, $folder = null, $disk = 'public', $filename = null) {
        $manager = new ImageManager(new Driver());
        $imageUpload = $manager->read($file);

        if ($imageUpload->height() > 170) {
            $imageUpload->resize(null, 170, function ($constraint) {
                $constraint->aspectRatio();
                $constraint->upsize();
            });
        }

        // $imageUpload->toJpeg(60);
        $pointer = $imageUpload->encode(new JpegEncoder(quality: 65))->toFilePointer();

        $name = !is_null($filename) ? $filename : Str::random(25);
        $fileHashName = $name . "." . $file->getClientOriginalExtension();
        $filePath = "/$folder/$fileHashName";

        Storage::disk($disk)->put($filePath, $pointer, 'public');

        return $filePath;
    }

    /**
    * @param null $path
    * @param string $disk
    */
    public function deleteFile($path = null, $disk = 'public') {
        Storage::disk($disk)->delete($path);
    }

    /**
    * @param null $path
    * @param string $disk
    */
    public function fileExists($path = null, $disk = 'public') {
        return Storage::disk($disk)->exists($path);
    }
}
