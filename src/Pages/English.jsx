import { IoIosArrowDroprightCircle } from "react-icons/io";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const English = () => {
 const url = "https://growmoreglobalvisa.com/english-test";
   return (
     <>
       <Helmet>
         <title>English Test for Australian Visa</title>
 
         <meta
           name="description"
           content="Expert visa assistance for individuals: Skilled Migration, Student Visas, Partner Visas, and PR pathways. Start your Australian journey with Growmore today."
         />
 
         {/* ✅ Canonical for homepage */}
         <link rel="canonical" href={url} />
 
         {/* ✅ OG */}
         <meta
           property="og:title"
           content="English Test for Australian Visa"
         />
         <meta
           property="og:description"
           content="Prepare for your Australian visa application with our comprehensive English test resources."
         />
         <meta property="og:url" content={url} />
         <meta property="og:image" content="https://www.growmore.one/logo.jpg" />
       </Helmet>
    <div>
      <div>
        <section className="bg-[#28535B] py-12 sm:py-16">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white">
              English Test
            </h1>

            <p className="text-white font-medium mt-3 text-sm sm:text-base">
              Home &gt; <span className=" cursor-pointer">English Test</span>{" "}
            </p>
          </div>
        </section>

        {/* Main Section */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Left Column */}
             <div className="bg-[#eff9fb] p-6 rounded-3xl md:col-span-1 w-full sm:h-200 md:h-120 lg:h-120 md:w-[400px] lg:w-[500px] mx-auto md:mx-0">
                         <div className="space-y-5">
                           <Link to="">
                             <div className="group flex  items-center justify-between gap-6 bg-white px-5 py-4  rounded-3xl cursor-pointer transition-all duration-300 hover:shadow-md">
                               <span className="flex-1 text-[#28535B]  font-semibold group-hover:text-[#5dc2d3] transition-colors duration-300">
                                 IELTS
                               </span>
                               <IoIosArrowDroprightCircle className="text-green-500 text-3xl group-hover:text-[#28535B] transition-colors duration-300" />
                             </div>
                           </Link>
           
                           <Link to="">
                             <div className="group flex mt-3 items-center justify-between gap-6 bg-white px-5 py-4  rounded-3xl cursor-pointer transition-all duration-300 hover:shadow-md">
                               <span className="flex-1 text-[#28535B]  font-semibold group-hover:text-[#5dc2d3] transition-colors duration-300">
                                 PTE
                               </span>
                               <IoIosArrowDroprightCircle className="text-green-500 text-3xl group-hover:text-[#28535B]" />
                             </div>
                           </Link>
           
                           <Link to="">
                             <div className="group flex mt-3 items-center justify-between gap-6 bg-white px-5 py-4  rounded-3xl cursor-pointer transition-all duration-300 hover:shadow-md">
                               <span className="flex-1 text-[#28535B]  font-semibold group-hover:text-[#5dc2d3] transition-colors duration-300">
                                 TOEFL
                               </span>
                               <IoIosArrowDroprightCircle className="text-green-500 text-3xl group-hover:text-[#28535B]" />
                             </div>
                           </Link>
           
                           <Link to="">
                             {" "}
                             <div className="group flex mt-3 items-center justify-between gap-6 bg-white px-5 py-4  rounded-3xl cursor-pointer transition-all duration-300 hover:shadow-md">
                               <span className="flex-1 text-[#28535B]  font-semibold group-hover:text-[#5dc2d3] transition-colors duration-300">
                                DUOLINGO
                               </span>
                               <IoIosArrowDroprightCircle className="text-green-500 text-3xl group-hover:text-[#28535B]" />
                             </div>
                           </Link>
           
                           <Link to="">
                             <div className="group mt-3 flex items-center justify-between gap-6 bg-white px-5 py-4  rounded-3xl cursor-pointer transition-all duration-300 hover:shadow-md">
                               <span className="flex-1 text-[#28535B]  font-semibold group-hover:text-[#5dc2d3] transition-colors duration-300">
                                 CAMBRIDGE C1 ADVANCED
                               </span>
                               <IoIosArrowDroprightCircle className="text-green-500 text-3xl group-hover:text-[#28535B]" />
                             </div>
                           </Link>
           
                           <Link to="">
                             <div className="group flex  mt-3 items-center justify-between gap-6 bg-white px-5 py-4  rounded-3xl cursor-pointer transition-all duration-300 hover:shadow-md">
                               <span className="flex-1 text-[#28535B]  font-semibold group-hover:text-[#5dc2d3] transition-colors duration-300">
                                 LANGUAGECERT ACADEDMIC
                               </span>
                               <IoIosArrowDroprightCircle className="text-green-500 text-3xl group-hover:text-[#28535B]" />
                             </div>
                           </Link>
                         </div>
                       </div>
            {/* Right Column */}
            <div className="md:col-span-2 pl-6 sm:pl-40 lg:pl-45">

            </div>
          </div>
        </section>
      </div>
    </div>
    </>
  );
};

export default English;
