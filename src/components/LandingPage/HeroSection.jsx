import React from "react";
// import bghero from '../../assets/bghero.svg'
export default function HeroSection() {
  return (
    <section className="container mx-auto xl:px-48 absolute top-1/3">
      <div className="container grid grid-cols-1 md:grid-cols-2 mx-auto items-center">
        <div className="order-2 md:order-1">
          <h1 className="text-4xl font-bold mb-4 text-white px-10 top-0">
            IDSS<br></br> (Intelligent Distributed Surveillance and Security)
          </h1>
        </div>
      </div>
    </section>
  );
}
