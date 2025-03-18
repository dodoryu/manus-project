import React from 'react';

const Hero = () => {
  return (
    <section className="relative bg-[#4CAF50] text-white">
      <div className="container mx-auto px-4 py-16 md:py-24 flex flex-col md:flex-row items-center">
        {/* Text Content */}
        <div className="md:w-1/2 z-10 mb-8 md:mb-0">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            鹿児島県の相続不動産なら<br />株式会社さいはらへ
          </h1>
          <p className="text-lg md:text-xl mb-8">
            相続や不動産のお悩みを解決します
          </p>
          <a
            href="/contact"
            className="inline-block bg-[#FFCDD2] text-[#424242] px-8 py-3 rounded-md text-lg font-medium hover:bg-opacity-90 transition-colors shadow-lg"
          >
            無料相談はこちら
          </a>
          
          {/* Company Stats */}
          <div className="mt-10 bg-white bg-opacity-20 p-4 rounded-lg backdrop-blur-sm">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <p className="text-sm">相続相談実績</p>
                <p className="text-2xl font-bold">1,200+</p>
              </div>
              <div className="text-center">
                <p className="text-sm">不動産取引実績</p>
                <p className="text-2xl font-bold">850+</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Illustration/Image */}
        <div className="md:w-1/2 relative">
          <div className="w-full h-64 md:h-96 relative">
            {/* This would be replaced with an actual image in production */}
            <div className="absolute inset-0 bg-[#8BC34A] bg-opacity-30 rounded-lg flex items-center justify-center">
              <p className="text-lg font-medium">イラスト/画像がここに表示されます</p>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#FFCDD2] rounded-full opacity-70"></div>
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#B3E5FC] rounded-full opacity-70"></div>
          </div>
        </div>
      </div>
      
      {/* Wave Shape Divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden">
        <svg
          className="relative block w-full h-16 md:h-24"
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-white"
          ></path>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
