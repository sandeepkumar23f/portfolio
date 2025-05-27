const AboutPage = () => {
  return (
    <section className="bg-white min-h-screen flex items-center w-full">
      <div className="w-full flex flex-col lg:flex-row items-center justify-between lg:gap-12">
        {/* Left Content - Text */}
        <div className="lg:w-1/2 text-center lg:text-left px-6 lg:px-12 order-2 lg:order-1">
          <h2 className="text-4xl font-bold text-cyan-800 mb-6">About Me</h2>
          <p className="text-lg sm:text-2xl text-gray-600">
            I'm a passionate developer with experience in building web applications 
            using modern technologies. I love solving problems and creating 
            efficient, user-friendly solutions.
          </p>
          <p className="text-lg sm:text-2xl text-gray-600 mt-4">
            When I'm not coding, you can find me exploring new technologies, 
            contributing to open source, or enjoying outdoor activities.
          </p>
        </div>

        {/* Right Content - Image */}
        <div className="lg:w-1/2 w-full flex justify-center order-1 lg:order-2 lg:ml-16">
          <div className="bg-cyan-50 p-6 rounded-lg shadow-md max-w-md">
  <h3 className="text-xl font-semibold text-cyan-800 mb-2">My Mission</h3>
  <p className="text-gray-700 text-base">
    To create clean, accessible, and efficient software that impacts real-world problems. Always learning, always building.
  </p>
</div>

        </div>
      </div>
    </section>
  );
};

export default AboutPage;
