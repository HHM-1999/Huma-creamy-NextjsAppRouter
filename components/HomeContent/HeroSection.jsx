"use client";

import React from "react";
import IceCreamAnimate from './IceCreamAnimate'

export default function Hero() {
  return (
    <section className="container-fluid bg-light py-5">
      <div className="row align-items-center">
        <div className="col-lg-6 text-center text-lg-start px-5">
          <h1 className="display-4 fw-bold">Delicious Ice Cream</h1>
          <p className="lead mt-3">
            Cool off with our handmade, creamy treats in every flavor imaginable.
          </p>
          <button className="btn btn-primary btn-lg mt-3">Order Now</button>
        </div>
        <div className="col-lg-6">
          <IceCreamAnimate />
        </div>
      </div>
    </section>
  );
}
