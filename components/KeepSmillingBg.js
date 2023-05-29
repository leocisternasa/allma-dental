import React from "react";

function KeepSmillingBg() {
  return (
    <section className="relative bg-gray-100 px-4 sm:px-8 lg:px-16 xl:px-40 2xl:px-64 py-16 lg:py-32 h-[100vh]">
      <video
        className="w-full h-full object-cover block md:absolute top-0 left-0 z-0"
        autoPlay
        loop
        muted
      >
        <source src="/keepsmiling.mp4" type="video/mp4" />
      </video>
      <div className="flex flex-col lg:flex-row lg:-mx-8 z-50 mt-5">
        <div className="w-full lg:w-1/2 lg:px-8 z-50 text-black md:text-white">
          <h2 className="text-3xl leading-tight font-bold mt-4m">
            Por que elegirnos para tu tratamiento de ortodoncia?
          </h2>
          <p className="mt-10 leading-relaxed">
            Aenean ut tellus tellus. Suspendisse potenti. Nullam tincidunt lacus
            tellus, sed aliquam est vehicula a. Pellentesque consectetur
            condimentum nulla, eleifend condimentum purus vehicula in. Donec
            convallis sollicitudin facilisis. Integer nisl ligula, accumsan non
            tincidunt ac, imperdiet in enim. Donec efficitur ullamcorper metus,
            eu venenatis nunc. Nam eget neque tempus, mollis sem a, faucibus mi.
          </p>
        </div>

        {/* <div className="w-full md:max-w-md md:mx-auto lg:w-1/2 lg:px-8 mt-12 mt:md-0">
          <div className="bg-gray-400 w-full h-72 rounded-lg"></div>

          <p className="italic text-sm mt-2 text-center">
            Aenean ante nisi, gravida non mattis semper.
          </p>
        </div> */}
      </div>
    </section>
  );
}

export default KeepSmillingBg;
