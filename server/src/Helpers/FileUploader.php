<?php

namespace App\Helpers;

use Symfony\Component\HttpFoundation\File\UploadedFile;

class FileUploader
{




    public static function uploadImage($file, $directory)
    {
        $authorizeTypeMime = [
            "image/png",
            "image/jpeg",
            "image/jpg"
        ];
        $maxSize=1024*1024*2;
        if(!$file){
            return null;
        }

        if ($file->isFile() && in_array($file->getClientMimeType(), $authorizeTypeMime) && $file->getSize()<$maxSize ) {

            $fileExtension = $file->guessClientExtension();
            $filename=uniqid().".".$fileExtension;

            $file->move($directory,$filename);
           

            
            return  $filename;
        }

        return null;
        
    }
}
