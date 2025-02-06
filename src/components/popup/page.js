"use client";
import React, { useState, useEffect } from "react";
import { X } from "lucide-react";
import Image from "next/image";

const PopupMessage = ({ imageUrl, message }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Open the popup when the component mounts
    setIsOpen(true);
  }, []);

  const closePopup = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black opacity-50 backdrop-blur-sm"></div>
      <div className="bg-white rounded-lg shadow-xl z-10 max-w-md w-full mx-4">
        <div className="relative">
          <Image
            width={500}
            height={500}
            src={imageUrl}
            alt="Popup"
            className="w-full h-auto rounded-t-lg"
          />
          <button
            onClick={closePopup}
            className="absolute top-2 right-2 bg-white rounded-full p-1 hover:bg-gray-200 transition"
          >
            <X size={24} />
          </button>
        </div>
        <div className="p-6">
          <p className="text-gray-800">{message}</p>
        </div>
      </div>
    </div>
  );
};

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-4xl font-bold mb-4">Welcome to Our Website</h1>
      <p className="text-xl">This is the main content of the page.</p>

      <PopupMessage
        imageUrl="/images/abc.jpg"
        message="ITSA wishes you a very Happy Ganesh Chaturthi."
      />
    </div>
  );
};

export default HomePage;
