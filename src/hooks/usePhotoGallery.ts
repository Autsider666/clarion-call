import {Camera, CameraResultType} from '@capacitor/camera';
import Compressor from 'compressorjs';
import {asyncFunction} from "../utilities/asyncFunction.ts";

export function usePhotoGallery() {
    const takePhoto = asyncFunction(async (callback: (file: string) => void) => {
        const photo = await Camera.getPhoto({
            resultType: CameraResultType.Uri,
            // source: CameraSource.Prompt,
            quality: 100,


            webUseInput: true,
        });

        callback(await base64FromPath(photo.webPath!));
    });

    const takePhotos = asyncFunction(async (callback: (file: string) => void) => {
        const {photos} = await Camera.pickImages({
            height: 100,
            width: 100,
        });

        for (const photo of photos) {
            callback(await base64FromPath(photo.webPath));
        }
    });

    return {
        takePhoto,
        takePhotos,
    };
}

export async function base64FromPath(path: string): Promise<string> {
    const response = await fetch(path);
    const blob = await response.blob();

    return base64FromBlob(blob);
}

export async function base64FromBlob(blob: Blob): Promise<string> {


    return new Promise((resolve, reject) => {
        new Compressor(blob, {
            maxWidth: 500,
            maxHeight: 500,
            success(file: File | Blob) {
                const reader = new FileReader();
                reader.onerror = reject;
                reader.onload = () => {
                    if (typeof reader.result === 'string') {
                        resolve(reader.result);
                    } else {
                        reject(new Error('method did not return a string'));
                    }
                };

                reader.readAsDataURL(file);
            }
        });
    });
}