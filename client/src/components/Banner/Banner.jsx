import React from "react";
import Image2 from "../../assets/blogs/blog4.jpeg";
import Image from "../../assets/image2.jpeg";

const Banner = () => {
  return (
    <div className="bg-slate-100 dark:bg-slate-900 dark:text-white">
      <div className="container md:h-[500px] flex items-center justify-center py-10">
        <div className="grid grid-cols-1 items-center gap-4 sm:grid-cols-2">
          {/* img container */}
          <div>
            <img
              src={Image2}
              alt=""
              className="mx-auto w-full p-4 md:max-w-full h-[300px] md:h-[350px] object-cover rounded-3xl"
            />
          </div>
          {/* text container */}
          <div className="lg:max-w-[400px] space-y-6">
            <h1 className="text-2xl font-semibold md:text-4xl mb-4">
            Get Involved
            </h1>
            <ul className="flex list-inside list-disc flex-col gap-2 md:gap-4">
              <li className="font-medium">
              Whether you’re looking to volunteer, donate, or partner with us, there are many ways to join our mission of making a lasting impact. With your support, Unity Fund can continue empowering communities and creating opportunities for growth and self-reliance.
              </li>
              <li className="font-medium">
                Giving does not only precede receiving; it is the reason for it.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
