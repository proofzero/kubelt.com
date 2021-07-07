
import React from 'react';
import LogoIconDark from '../svg/LogoIconDark';

const Checkerboard = () => {
  return (
    <div id="checkerboard" class="py-16 bg-gray-50 overflow-hidden lg:py-24">
        <div class="relative max-w-xl mx-auto px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
            <div class="relative">
            <h2 class="text-center text-3xl leading-8 tracking-tight kubelt-text-purple sm:text-4xl">
                What is <span className="kubelt-text-purple"><LogoIconDark className="-mt-2 inline-block h-12 w-auto sm::h-10" /></span>?
            </h2>
            <p class="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-500">
                A new and powerful platform that transforms the way data teams work.
            </p>
            </div>

            <div class="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div class="relative">
                <p class="mt-3 text-sm text-gray-500">Build</p>
                <h3 class="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
                Chart your journey
                </h3>
                <p class="mt-3 text-lg text-gray-500">
                Skip the hassle of starting from scratch.
                </p>

                <dl class="mt-10 space-y-10">
                <div class="relative">
                    <dt>
                    <div class="absolute flex items-center justify-center h-12 w-12 rounded-md kubelt-bg-purple text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>
                    </div>
                    <p class="ml-16 text-lg leading-6 font-bold text-gray-900">Leverage clean data</p>
                    </dt>
                    <dd class="mt-2 ml-16 text-base text-gray-900">
                    Pin, publish, and fork prepared data and code to boostrap your project. Contribute back your improvements.
                    </dd>
                </div>

                <div class="relative">
                    <dt>
                    <div class="absolute flex items-center justify-center h-12 w-12 rounded-md kubelt-bg-purple text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.933 12.8a1 1 0 000-1.6L6.6 7.2A1 1 0 005 8v8a1 1 0 001.6.8l5.333-4zM19.933 12.8a1 1 0 000-1.6l-5.333-4A1 1 0 0013 8v8a1 1 0 001.6.8l5.333-4z" />
                        </svg>
                    </div>
                    <p class="ml-16 text-lg leading-6 font-bold text-gray-900">Cut coding time</p>
                    </dt>
                    <dd class="mt-2 ml-16 text-base text-gray-900">
                        Pre-built, standard application components created by us and the community that let you start ahead of the rest. 
                    </dd>
                </div>

                </dl>
            </div>

            <div class="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
                <img className="relative mx-auto" width="490" src="/svg/Checkerboards/Discover.svg" />
                {/* <img class="relative mx-auto" width="490" src="https://tailwindui.com/img/features/feature-example-1.png" alt=""/> */}
            </div>
            </div>

            <div class="relative mt-12 sm:mt-16 lg:mt-24">
            <div class="lg:grid lg:grid-flow-row-dense lg:grid-cols-2 lg:gap-8 lg:items-center">
                <div class="lg:col-start-2">
                <p class="mt-3 text-sm text-gray-500">Deploy</p>
                <h3 class="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
                    Get to where you're going, fast
                </h3>
                <p class="mt-3 text-lg text-gray-500">
                    Focus on what matters to you.
                </p>

                <dl class="mt-10 space-y-10">
                    <div class="relative">
                    <dt>
                    <div class="absolute flex items-center justify-center h-12 w-12 rounded-md kubelt-bg-purple text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                    </div>
                        <p class="ml-16 text-lg leading-6 font-bold text-gray-900">Whole lifecycle</p>
                    </dt>
                    <dd class="mt-2 ml-16 text-base text-gray-900">
                        Our easy-to-use CLI manages the entire application lifecycle using the tools and environments you already know and love.
                    </dd>
                    </div>

                <div class="relative">
                    <dt>
                    <div class="absolute flex items-center justify-center h-12 w-12 rounded-md kubelt-bg-purple text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                        </svg>
                    </div>
                    <p class="ml-16 text-lg leading-6 font-bold text-gray-900">Compose workloads together</p>
                    </dt>
                    <dd class="mt-2 ml-16 text-base text-gray-900">
                        Build where you and your peers left off. No more copy and paste, kubelt is the best place to collaborate with data.
                    </dd>
                </div>
                </dl>
                </div>

                <div class="mt-10 -mx-4 relative lg:mt-0 lg:col-start-1">
                <img class="relative mx-auto" width="490" src="/svg/Checkerboards/Deploy.svg" alt=""/>
                </div>
            </div>
            </div>
            <div class="relative mt-12 lg:mt-24 lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
            <div class="relative">
                <p class="mt-3 text-sm text-gray-500">Scale</p>
                <h3 class="text-2xl font-extrabold text-gray-900 tracking-tight sm:text-3xl">
                Scale sustainably
                </h3>
                <p class="mt-3 text-lg text-gray-500">
                Never outgrow good data.
                </p>

                <dl class="mt-10 space-y-10">
                    <div class="relative">
                    <dt>
                        <div class="absolute flex items-center justify-center h-12 w-12 rounded-md kubelt-bg-purple text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
                        </svg>
                        </div>
                        <p class="ml-16 text-lg leading-6 font-bold text-gray-900">Zero-incident infrastructure</p>
                    </dt>
                    <dd class="mt-2 ml-16 text-base text-gray-900">
                        Kubelt is built on Kubernetes to be the most robust data operating system that scales on our cloud or yours.
                    </dd>
                    </div>

                <div class="relative">
                    <dt>
                    <div class="absolute flex items-center justify-center h-12 w-12 rounded-md kubelt-bg-purple text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                        </svg>
                    </div>
                    <p class="ml-16 text-lg leading-6 font-bold text-gray-900">One platform. Many workloads. No silos.</p>
                    </dt>
                    <dd class="mt-2 ml-16 text-base text-gray-900">
                    Kubelt allows you to connect and federate workloads directly to your peers enabling novel ways of working.
                    </dd>
                </div>

                </dl>
            </div>

            <div class="mt-10 -mx-4 relative lg:mt-0" aria-hidden="true">
                <img className="relative mx-auto" width="490" src="/svg/Checkerboards/Deliver.svg" />
            </div>
            </div>
        </div>
    </div>

  );
};

export default Checkerboard;
