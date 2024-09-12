"use client";
import React from "react";

const About = () => {
  return (
    <>

      {/* Main Section */}
      <section className="pt-[180px] pb-[100px] bg-[url('/img/about-bg.png')] bg-cover bg-no-repeat bg-center">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-white text-6xl font-bold mb-5">
              About ITSA
            </h1>
            <p className="text-[#B8B8B8] text-lg leading-relaxed max-w-4xl mb-8">
              ITSA (Information Technology Student Association) is an initiative by students of the Information Technology Department, Vansant Dada Patil Pratisthan's College of Engineering. We aim to foster a community where technology enthusiasts collaborate, learn, and grow. ITSA has been instrumental in organizing events, seminars, and hackathons, providing hands-on experience to students and encouraging innovation.
            </p>
            <p className="text-[#B8B8B8] text-lg leading-relaxed max-w-4xl mb-8">
              Our mission is to empower students with the technical skills and professional exposure they need to succeed in the ever-changing world of technology. By hosting numerous workshops, competitions, and talks, ITSA helps bridge the gap between academics and the industry.
            </p>
            <p className="text-[#B8B8B8] text-lg leading-relaxed max-w-4xl">
              Join us in our journey to create a vibrant community of future technologists and innovators.
            </p>
          </div>
        </div>
      </section>

    </>
  );
};

export default About;

