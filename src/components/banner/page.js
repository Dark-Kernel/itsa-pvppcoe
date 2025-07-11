"use client";

import React, { useState, useEffect } from "react";
import dynamic from 'next/dynamic';  // Use dynamic import for third-party libraries that don't need to be SSR'd
import Image from 'next/image';       // Use Next.js Image component for optimized image loading
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
// UPCOMING EVENTS COMPONENT
import UpcomingEvents from '../../components/upcomingevent/page';
import TG_banner from '../../components/techgyanathonbanner/page';
// NEWSLETTER COMPONENT
import Newsletter from '../../components/newsletter/page';
// REGISTRATION BANNER
import ITSAregistration from "../registerBanner/page";

const TrackVisibility = dynamic(() => import('react-on-screen'), { ssr: false });

const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Team", "Dev"];
  const period = 2000;

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="pt-[100px] lg:pt-[120px] bg-[url('/img/banner-bg-extended-vertical.png')] bg-top bg-cover bg-no-repeat" id="home">
      <ITSAregistration />
      <div className="container mx-auto px-4">
        
        <div className="flex flex-wrap items-center">
          <div className="w-full md:w-1/2 xl:w-7/12">
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  
                  <span className="text-white inline-block font-bold text-xl tracking-wide py-2 px-2.5 mb-4 bg-gradient-to-r from-[rgba(170,54,124,0.5)] to-[rgba(74,47,189,0.5)] border border-white border-opacity-50">
                    Welcome to ITSA website
                  </span>
                  <h1 className="text-white text-[55px] lg:text-[65px] font-bold tracking-wide leading-none mb-5 block">
                    {`Hi! We're ITSA`}{" "}
                    <span
                      className="txt-rotate"
                      dataPeriod="1000"
                      data-rotate='["Team", "Community", "Innovative"]'
                    >
                      <span className="wrap border-r-[0.08em] border-[#666]">
                        {text}
                      </span>
                    </span>
                  </h1>
                  <p className="text-gray-200 text-sm lg:text-lg tracking-wide leading-relaxed w-[96%]">
                    We are thrilled to introduce the Information Technology Students Association (ITSA), a vibrant student 
                    organization dedicated to fostering collaboration, creativity, and professional growth within the Information 
                    Technology department. Our diverse teams—Technical, Documentation, Creativity, Publicity, and Infrastructure—work 
                    seamlessly together to create a dynamic environment where students can thrive.
                    Join us in our mission to empower the next generation of IT professionals and make 
                    a lasting impact on our community. Together, we can inspire, innovate, and achieve greatness!
                  </p>
                  <button
                    onClick={() => (window.location.href = "/letsconnect")}
                    className="text-white font-bold text-xl mt-[20px] tracking-wide flex items-center mb-6"
                  >
                    Let's Connect{" "}
                    <ArrowRightCircle
                      size={25}
                      className="ml-2.5 transition-all duration-300 ease-in-out hover:ml-6"
                      href="/letsconnect"
                    />
                  </button>
                </div>
              )}
            </TrackVisibility>
          </div>
          <div className="w-full md:w-1/2 xl:w-5/12">
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <Image
                    src="/img/header-img.svg"
                    alt="Header Img"
                    width={500} // Set appropriate width
                    height={500} // Set appropriate height
                    className="animate-updown"
                    priority // Priority for loading optimization
                  />
                </div>
              )}
            </TrackVisibility>
          </div>
        </div>
      </div>

        {/* UpcomingEvents component call */}
        {/* <hr/>
        <UpcomingEvents /> */}

        {/* techgyanathon banner component call */}
        <hr />
        <TG_banner />

        {/* Newsletter component call */}
        <hr />
        <Newsletter />

    </section>
  );
};

export default Banner;
