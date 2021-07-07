
import React from 'react';

const Logos = () => {
  return (
    <div class="bg-white py-10">
        <div class="max-w-7xl mx-auto pt-24 px-4 sm:px-6 lg:px-8 ">
            <div class="relative mb-10">
            <h2 class="text-center text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
                Supporting data workloads everywhere
            </h2>
            {/* <p class="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-500">
                fooo
            </p> */}
            </div>
            <div class="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
                <div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                    <img class="h-12" src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg" alt="Tuple"/>
                </div>
                <div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                    <img class="h-12" src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg" alt="Mirage"/>
                </div>
                <div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                    <img class="h-12" src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg" alt="StaticKit"/>
                </div>
                <div class="col-span-1 flex justify-center md:col-span-3 lg:col-span-1">
                    <img class="h-12" src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg" alt="Transistor"/>
                </div>
                <div class="col-span-2 flex justify-center md:col-span-3 lg:col-span-1">
                    <img class="h-12" src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg" alt="Workcation"/>
                </div>
            </div>
        </div>
    </div>

  );
};

export default Logos;
