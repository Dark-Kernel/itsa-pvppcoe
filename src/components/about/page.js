function AboutPage() {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-transparent">
      <div
        className="container mx-auto p-4 md:p-8 lg:p-12"
        style={{
          backdropFilter: "blur(50px)",
          WebkitBackdropFilter: "blur(50px)",
        }}
      >
        <div className="max-w-md mx-auto p-4 lg:p-12">
          <h1 className="text-3xl font-bold mb-4 text-center">About Us</h1>
          <div className="flex justify-center mb-8">
            <img
              src="./img/itsa.png"
              alt="Logo 1"
              className="w-24 h-24 rounded-full mr-4 border-2 border-solid"
            />
            <img
              src="./img/itsa.png"
              alt="Logo 2"
              className="w-24 h-24 rounded-full border-2 border-solid"
            />
          </div>
          <p className="text-lg text-gray-600 text-center mb-12">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
            amet nulla auctor, vestibulum magna sed, convallis ex.
          </p>
        </div>

        <div className="max-w-2xl mx-auto p-4 lg:p-12">
          <h2 className="text-2xl font-bold mb-4 text-center">
            Our Working Bodies
          </h2>
          <div className="flex flex-wrap justify-center mb-8">
            <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-6">
              <div className="flex flex-col items-center">
                <img
                  src="./img/itsa.png"
                  alt="Logo 3"
                  className="w-32 h-32 rounded-full mb-4 border-2 border-solid"
                />
                <div className="text-center">
                  <h3 className="text-lg font-bold">Body 1</h3>
                  <h3 className="text-lg font-bold">Body 1.1</h3>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-6">
              <div className="flex flex-col items-center">
                <img
                  src="./img/itsa.png"
                  alt="Logo 4"
                  className="w-32 h-32 rounded-full mb-4 border-2 border-solid"
                />
                <div className="text-center">
                  <h3 className="text-lg font-bold">Body 2</h3>
                  <h3 className="text-lg font-bold">Body 2.2</h3>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-6">
              <div className="flex flex-col items-center">
                <img
                  src="./img/itsa.png"
                  alt="Logo 5"
                  className="w-32 h-32 rounded-full mb-4 border-2 border-solid"
                />
                <div className="text-center">
                  <h3 className="text-lg font-bold">Body 3</h3>
                  <h3 className="text-lg font-bold">Body 2.2</h3>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2 md:w-1/2 xl:w-1/4 p-6">
              <div className="flex flex-col items-center">
                <img
                  src="./img/itsa.png"
                  alt="Logo 6"
                  className="w-32 h-32 rounded-full mb-4 border-2 border-solid"
                />
                <div className="text-center">
                  <h3 className="text-lg font-bold">Body 4</h3>
                  <h3 className="text-lg font-bold">Body 2.2</h3>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="flex flex-wrap justify-center mb-8">
            <div className="w-full md:w-1/2 lg:w-1/3 p-4">
              <div
                className="bg-white rounded-lg shadow-lg p-8"
                style={{
                  backdropFilter: "blur(50px)",
                  WebkitBackdropFilter: "blur(50px)",
                }}
              >
                <h3 className="text-lg font-bold text-center mb-4 text-gray-600">
                  Institute Vision & Mission
                </h3>
                <ul className="text-lg text-gray-600 text-center list-disc">
                  <li>Point 1</li>
                  <li>Point 2</li>
                  <li>Point 3</li>
                </ul>
              </div>
            </div>
            <div className="w-full md:w-1/2 lg:w-1/3 p-4">
              <div
                className="bg-white rounded-lg shadow-lg p-8"
                style={{
                  backdropFilter: "blur(50px)",
                  WebkitBackdropFilter: "blur(50px)",
                }}
              >
                <h3 className="text-lg font-bold text-center mb-4 text-gray-600">
                  Department Vision & Mission
                </h3>
                <ul className="text-lg text-gray-600 text-center list-disc">
                  <li>Point 1</li>
                  <li>Point 2</li>
                  <li>Point 3</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;

