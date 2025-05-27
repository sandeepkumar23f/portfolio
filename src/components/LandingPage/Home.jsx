import TypewriterText from "./TypewriterText";

const Home = () => {
  return (
    <section className="bg-white min-h-screen flex items-center w-full">
      <div className="w-full flex flex-col lg:flex-row items-center justify-between">
        {/* Left Content - Text */}
        
        <div className="lg:w-1/2 text-center lg:text-left px-6 lg:px-12 order-2 lg:order-1">
          
          <TypewriterText />
          
          {/* ↓ Reduce vertical space here ↓ */}
          <p className="mt-2 text-lg sm:text-2xl text-gray-600">
            Passionate about building modern, responsive UIs using React. I’m a CSE (IoT) student with a strong foundation in DSA, having solved over 300 problems on LeetCode & GFG.
          </p>
          <br />
          <div className="text-amber-300 text-2xl">
            <a href="https://www.linkedin.com/in/sandeep-kumar-b9674829a/" className="">LinkedIn</a>
            <a href="https://www.instagram.com/_san_deep_yadav__" className="ml-8">Instagram</a>
            <a href="https://github.com/sandeepkumar23f/" className="ml-12">GitHub</a>
          </div>
        </div>
        
        {/* Right Content - Image */}
        <div className="lg:w-1/2 w-full flex justify-center order-1 lg:order-2 lg:ml-16">
          <div className="relative w-full h-full">
            <img
              src="img.jpg"
              alt="Sandeep Kumar"
              className="rounded-full w-48 h-48 sm:w-64 sm:h-64 lg:w-96 lg:h-96 object-cover border-4 border-blue-100 shadow-xl mx-auto lg:mx-0"
            />
            <div className="absolute inset-0 rounded-full border-4 border-transparent animate-pulse opacity-10 pointer-events-none"></div>
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Home;
