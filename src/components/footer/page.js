
const Footer = () => {
  return (
    <footer className="pb-[25px] pt-[25px] bg-[url('/img/footer-bg.png')] bg-center bg-cover bg-no-repeat border-t-2 border-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center">
          <div className="w-full sm:w-1/2">
            <section>
              <a
                href="#"
                className="text-[#B8B8B8] hover:text-white font-semibold text-lg"
              >
                ITSA<br/> 
              </a>
               <p className="font-sans text-white"> Vasantdada Patil Pratisthan's College of Engineering <br/>
                Sion, Mumbai, 400022. </p>
            </section>
          </div>
          <div className="w-full sm:w-1/2 text-center sm:text-right">
            {/* <div className="social-icon">
              <a href="#" className="inline-block mr-2">
                <img src="/img/nav-icon1.svg" alt="Icon" />
              </a>
              <a href="mailto:techgyanothon@pvppcoe.ac.in" className="inline-block mr-2">
                <img src="/img/nav-icon2.svg" alt="Icon" />
              </a>
              <a href="https://www.instagram.com/itsa_vppcoe/" className="inline-block">
                <img src="/img/nav-icon3.svg" alt="Icon" />
              </a>
            </div> */}
            <p className="font-normal text-sm text-[#B8B8B8] tracking-wider mt-5">
              Copyright 2026. All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
