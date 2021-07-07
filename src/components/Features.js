
import React from 'react';
import LogoIconDark from '../svg/LogoIconDark'

const Features = () => {
  return (
    <div id="features" class="relative bg-white py-16 sm:py-24 lg:py-24">
        <div class="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
            {/* <h2 class="text-base font-semibold tracking-wider kubelt-text-purple uppercase">kubelt is for everyone</h2> */}
            <p class="mt-2 text-3xl font-extrabold kubelt-text-purple tracking-tight sm:text-4xl h-12">
            <LogoIconDark className="sm:h-12 h-11 inline-block mb-2"/> is for everyone
            </p>
            {/* <p class="mt-5 max-w-prose mx-auto text-xl text-gray-500">
                kubelt was designed with you in mind. 
            </p> */}
            <div class="mt-12">
            <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <div class="pt-6">
                <div class="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                    <div class="-mt-6">
                    <div>
                        <span class="inline-flex items-center justify-center p-3 kubelt-bg-purple rounded-md shadow-lg">
                        <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12" />
                        </svg>
                        </span>
                    </div>
                    <h3 class="mt-8 text-lg font-medium text-gray-900 tracking-tight">Startups</h3>
                    <p class="mt-5 text-base text-gray-500">
                        We build kubelt with the best DX in mind. Use our CLI to deploy ELTs, APIs, ChatOps, and more.
                    </p>
                    </div>
                </div>
                </div>

                <div class="pt-6">
                <div class="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                    <div class="-mt-6">
                    <div>
                        <span class="inline-flex items-center justify-center p-3 kubelt-bg-purple rounded-md shadow-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                        </svg>
                        </span>
                    </div>
                    <h3 class="mt-8 text-lg font-medium text-gray-900 tracking-tight">Scale Ups</h3>
                    <p class="mt-5 text-base text-gray-500">
                        Accelerate your data science work to production and ship AI/ML based applications fast.
                    </p>
                    </div>
                </div>
                </div>

                <div class="pt-6">
                <div class="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                    <div class="-mt-6">
                    <div>
                        <span class="inline-flex items-center justify-center p-3 kubelt-bg-purple rounded-md shadow-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                        </span>
                    </div>
                    <h3 class="mt-8 text-lg font-medium text-gray-900 tracking-tight">Enterprise</h3>
                    <p class="mt-5 text-base text-gray-500">
                        Leverage our CQRS/ES data architecture to modernize legacy workloads and derisk core business functions.
                    </p>
                    </div>
                </div>
                </div>

                <div class="pt-6">
                <div class="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                    <div class="-mt-6">
                    <div>
                        <span class="inline-flex items-center justify-center p-3 kubelt-bg-purple rounded-md shadow-lg">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M12 14l9-5-9-5-9 5 9 5z" />
                            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                            </svg>
                        </span>
                    </div>
                    <h3 class="mt-8 text-lg font-medium text-gray-900 tracking-tight">Financial</h3>
                    <p class="mt-5 text-base text-gray-500">
                        Build better financial products by composing workloads and data from across from your organization.
                    </p>
                    </div>
                </div>
                </div>

                <div class="pt-6">
                <div class="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                    <div class="-mt-6">
                    <div>
                        <span class="inline-flex items-center justify-center p-3 kubelt-bg-purple rounded-md shadow-lg">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                        </svg>
                        </span>
                    </div>
                    <h3 class="mt-8 text-lg font-medium text-gray-900 tracking-tight">Research</h3>
                    <p class="mt-5 text-base text-gray-500">
                        Establish an inventory of notebooks, pipelines, and models federated to peers within and across organizations.
                    </p>
                    </div>
                </div>
                </div>

                <div class="pt-6">
                <div class="flow-root bg-gray-50 rounded-lg px-6 pb-8">
                    <div class="-mt-6">
                    <div>
                        <span class="inline-flex items-center justify-center p-3 kubelt-bg-purple rounded-md shadow-lg">
                        <svg class="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                        </svg>
                        </span>
                    </div>
                    <h3 class="mt-8 text-lg font-medium text-gray-900 tracking-tight">Agencies</h3>
                    <p class="mt-5 text-base text-gray-500">
                        Improve client campaign performance by using their first-party data without complex integration projects.
                    </p>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    </div>
  );
};

export default Features;
