'use client';

import { useState } from 'react';

interface GalleryProps {
    images: string[];
}

export default function Gallery({ images }: GalleryProps) {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    return (
        <>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-sm">
                {images.map((img, index) => (
                    <div
                        key={index}
                        className="relative aspect-[4/3] overflow-hidden rounded-sm cursor-pointer group"
                        onClick={() => setSelectedImage(img)}
                    >
                        <div
                            className="w-full h-full bg-cover bg-center transition-transform duration-300 group-hover:scale-105"
                            style={{ backgroundImage: `url(${img})` }}
                        />
                    </div>
                ))}
            </div>

            {selectedImage && (
                <div
                    className="fixed top-0 left-0 w-screen h-screen bg-black/90 z-[1000] flex items-center justify-center cursor-zoom-out"
                    onClick={() => setSelectedImage(null)}
                >
                    <img src={selectedImage} alt="Full size" className="max-w-[90vw] max-h-[90vh] object-contain" />
                </div>
            )}
        </>
    );
}
