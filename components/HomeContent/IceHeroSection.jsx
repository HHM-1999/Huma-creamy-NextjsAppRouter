"use client";
import React from 'react';
import Image from 'next/image';

const images = [
  { slider: '/heroAds/slider1.jpg', alt: 'Strawberry Dream' },
  { slider: '/heroAds/slider2.jpg', alt: 'Chocolate Heaven' },
  { slider: '/heroAds/slider3.jpg', alt: 'Vanilla Bliss' },
];

export default function IceHeroSection() {
  return (

      <div id="iceCreamCarousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
        <div className="carousel-inner shadow-lg">
          {images.map((img, index) => (
            <div
              className={`carousel-item ${index === 0 ? 'active' : ''}`}
              key={index}
            >
              <Image
                src={img.slider}
                alt={img.alt}
                className=" slide-image img-fluid"
                width={1200}
                height={600}
                priority
              />
              {/* <div className="carousel-caption d-none d-md-block">
                <h5>{img.alt}</h5>
              </div> */}
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#iceCreamCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#iceCreamCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
        </button>
      </div>
  
  );
}
