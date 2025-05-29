import TypewriterText from "./TypewriterText";

const Home = () => {
  return (
    <section className="bg-white min-h-screen flex items-center w-full px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-7xl mx-auto w-full flex flex-col lg:flex-row items-center justify-between gap-8">
        
        {/* Left - Text */}
        <div className="lg:w-1/2 text-center lg:text-left order-2 lg:order-1">
          <TypewriterText />
          <p className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed">
            Passionate about building modern, responsive UIs using React. I'm a CSE (IoT) student with a strong foundation in DSA, having solved over 300 problems on LeetCode & GFG.
          </p>

          <div className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4 sm:gap-6 lg:gap-8">
            <a 
              href="https://www.linkedin.com/in/sandeep-kumar-b9674829a/" 
              className="text-amber-600 hover:text-amber-700 text-lg sm:text-xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a 
              href="https://www.instagram.com/_san_deep_yadav__" 
              className="text-amber-600 hover:text-amber-700 text-lg sm:text-xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
            <a 
              href="https://github.com/sandeepkumar23f/" 
              className="text-amber-600 hover:text-amber-700 text-lg sm:text-xl"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Right - Image */}
        <div className="lg:w-1/2 flex justify-center order-1 lg:order-2">
          <div className="relative">
            <img
              src="img.jpg"
              alt="Sandeep Kumar"
              className="rounded-full w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 object-cover border-4 border-blue-100 shadow-lg hover:shadow-xl transition-shadow duration-300"
            />
            <div className="absolute inset-0 rounded-full border-4 border-transparent animate-pulse opacity-10 pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
