import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { X } from 'lucide-react';
import img from '../assets/bgimg.jpeg';
import './css/Gallery.css'

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const galleryItems = [
    {
      id: 1,
      title: "Event Title 1",
      description: "Description of the first event or image",
      imageUrl: img,
      date: "March 15, 2024"
    },
    {
      id: 2,
      title: "Event Title 2",
      description: "Description of the second event or image",
      imageUrl: img,
      date: "March 16, 2024"
    },
    {
      id: 3,
      title: "Event Title 3",
      description: "Description of the third event or image",
      imageUrl: img,
      date: "March 17, 2024"
    },
    {
      id: 4,
      title: "Event Title 4",
      description: "Description of the fourth event or image",
      imageUrl: img,
      date: "March 18, 2024"
    },
    {
      id: 5,
      title: "Event Title 5",
      description: "Description of the fifth event or image",
      imageUrl: img,
      date: "March 19, 2024"
    },
    {
      id: 6,
      title: "Event Title 6",
      description: "Description of the sixth event or image",
      imageUrl: img,
      date: "March 20, 2024"
    }
  ];

  return (
    <div className="min-h-screen bg-[#fff9e6]">
      {/* Header with Parallax */}
      <header className="header">
        <div className="header-background"></div>
        <div className="header-content">
          <h1>Our Gallery</h1>
          <p className="subtitle">Explore our collection of memorable moments and inspiring events</p>
        </div>
      </header>

      {/* Gallery Grid */}
      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-lg bg-gray-100 shadow-md transition-all hover:-translate-y-1 hover:shadow-lg"
              onClick={() => setSelectedImage(item)}
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-1 text-sm text-gray-300">{item.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle>{selectedImage?.title}</DialogTitle>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100"
            >
              <X className="h-4 w-4" />
              <span className="sr-only">Close</span>
            </button>
          </DialogHeader>
          <div className="mt-4">
            <img
              src={selectedImage?.imageUrl}
              alt={selectedImage?.title}
              className="h-full w-full rounded-lg object-cover"
            />
            <div className="mt-4">
              <p className="text-sm text-gray-500">{selectedImage?.date}</p>
              <p className="mt-2 text-gray-700">{selectedImage?.description}</p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Gallery;