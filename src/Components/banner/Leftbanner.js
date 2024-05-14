import React from "react";

import { Link } from "react-router-dom";

const Leftbanner = () => {
  return <>

   <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
    <div className="p-4 relative z-10 w-full text-center" >
      <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">Latest News Updates</h1>
      <p className="mt-6 font-normal text-base md:text-lg text-neutral-300 max-w-lg mx-auto">Stay informed with our latest news articles covering a wide range of topics. Explore breaking news, insightful analyses, and in-depth reports to stay ahead of the curve..</p>
        </div>
        <div className="flex justify-center mt-4">
                    <Link to={"#scroll"}>
                    <button className="bg-gray-600 text-white hover:text-red-700 text-white font-bold py-2 px-4 rounded-full"
                    >
                        Explore More
                    </button>
                    </Link>
                </div>
    </div>
                    
  </>
   
  
};

export default Leftbanner;
