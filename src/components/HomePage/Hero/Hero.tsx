import Image from "next/image"
export const Hero = () => {
  return (
<section className="bg-[#F2F0FF]  py-8 mt-[19px]">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Left Section */}
        <div className="flex items-start   gap-10">
          {/* Lamp Image */}
          <div className="relative bottom-[100px] right-20">
            <img
            src="images/Home-images/1.png"
              alt="Lamp"
              className=" h-80 w-80 object-contain "
            />
          </div>

          {/* Text Section */}
          <div className="max-w-lg relative top-8 right-20">
            <p className="text-pink-500 font-semibold mb-4">
              Best Furniture For Your Castle...
            </p>
            <h1 className="text-[43px] font-bold mb-4 leading-tight">
              New Furniture Collection 
              Trends in 2020
            </h1>
            <p className="text-gray-600 mb-6 text-[16px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in
              est adipiscing in phasellus non in justo.
            </p>
            <button className="bg-pink-500 text-white px-6 py-3 font-semibold rounded-md">
              Shop Now
            </button>
          </div>
        </div>

        {/* Right Section */}
        <div className="relative right-10">
          <img
            src="images/Home-images/2.png"
            alt="Furniture"
            className="w-full max-w-md rounded-md"
          />
          
        </div>
      </div>
    </section>

  )
}
