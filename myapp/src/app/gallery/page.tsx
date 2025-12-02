"use client";
import Image from "next/image";
import { photos } from "@/app/data/photos";


export default function GalleryPage() {
  return (
   
      <div className="min-h-screen bg-white-100 py-10">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Gallery
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-6">
          {photos.map((photo) => (
            <div
              key={photo.id}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group"
            >
              <div className="relative w-full h-56 overflow-hidden">
                <Image
                  src={photo.src}
                  alt={photo.desc}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  placeholder="blur"
                  blurDataURL="/images/placeholder.png"
                />
              </div>

              <div className="p-4 text-center">
                <p className="text-gray-700 font-medium group-hover:text-blue-600 transition-colors duration-300">
                  {photo.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
   
  );
}
