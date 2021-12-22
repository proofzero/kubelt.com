import React from 'react';
import Banner from './Banner';

const Hero = ({  }) => {
  const [email, setEmail] = React.useState("")
  const [user, setUser] = React.useState(null);
  const [submitting, setSubmitting] = React.useState(false)

  const submitPrefinery = (email) => {
    //console.log(email)
    //setSubmitting(true)
    //window.prefinery('addUser', email, function(user) {
      //setUser(user) 
      //setSubmitting(false)
    //});
  }

  const onSubmit = (e) => { 
    //e.preventDefault()
    //if (!submitting) submitPrefinery(email)
  }

  return (
    //pt-10 sm:pt-16 lg:pt-8 
    <div id="preview" class="lg:pb-14 lg:overflow-hidden min-h-screen">
      <div class="mx-auto max-w-7xl lg:px-8">
        <div class="lg:grid lg:grid-cols-3 lg:gap-8">
          <div class="col-span-2 mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
            <div class="lg:pt-24 px-8 pt-24">
              <a href="#" class="inline-flex items-center text-white rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200">
                {/* <span class="px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide kubelt-bg-orange rounded-full">Pre Alpha</span> */}
                {/* <svg class="ml-2 w-5 h-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                </svg> */}
              </a>
              <h1 class="mt-4 text-3xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-5xl lg:mt-6 xl:text-5xl">
                <span class="text-lg block text-lg kubelt-text-orange my-2">web3 CMS</span>
                <span class="blocktext-lg">A multiverse of possibilities</span>
              </h1>
              { /*<p class="mt-3 text-base text-white sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              The data-centric platform for development, collaboration and delivery 
              </p> */}
            <div class="flex justify-left space-x-6 md:order-2">
              <a href="https://twitter.com/kubeltcms" class="text-white hover:text-gray-500 pt-10">
                <span class="sr-only">Twitter</span>
                <svg class="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="https://github.com/kubelt" class="text-white hover:text-gray-500 pt-10">
                <span class="sr-only">GitHub</span>
                <svg class="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
                </svg>
              </a>
              <a href="https://matrix.to/#/#lobby:matrix.kubelt.com" class="text-white hover:text-gray-500 pt-10">
                <span class="sr-only">Matrix</span>
                <svg class="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" version="1.0" xmlns="http://www.w3.org/2000/svg" width="512.000000pt" height="585.000000pt" viewBox="0 0 512.000000 585.000000" preserveAspectRatio="xMidYMid meet">
<g transform="translate(0.000000,585.000000) scale(0.100000,-0.100000)" fill="#FFFFFF" stroke="none">
<path d="M10 2930 l0 -2920 275 0 275 0 0 65 0 65 -200 0 -200 0 2 2787 3 2788 198 3 197 2 0 65 0 65 -275 0 -275 0 0 -2920z"/>
<path d="M4550 5785 l0 -65 200 0 200 0 0 -2784 c0 -2529 -1 -2784 -16 -2790 -9 -3 -99 -6 -200 -6 l-184 0 0 -70 0 -70 275 0 275 0 0 2925 0 2925 -275 0 -275 0 0 -65z"/>
<path d="M2055 3999 c-198 -18 -379 -119 -518 -289 l-37 -45 0 143 0 142 -214 0 c-117 0 -241 -3 -275 -6 l-61 -7 0 -1038 0 -1039 290 0 290 0 0 663 c0 710 1 720 51 819 34 67 113 142 182 174 56 26 72 29 167 29 89 0 113 -4 158 -24 68 -31 117 -88 145 -171 21 -64 22 -73 25 -777 l3 -713 284 0 284 0 4 663 c3 420 8 678 15 707 34 144 99 237 200 287 52 26 66 28 172 28 106 0 120 -2 172 -28 108 -53 154 -140 169 -322 5 -60 9 -386 9 -722 l0 -613 285 0 286 0 -4 783 c-4 870 -2 848 -73 997 -49 103 -106 174 -187 231 -124 87 -280 129 -483 129 -176 0 -292 -34 -424 -123 -58 -40 -155 -131 -190 -180 l-28 -37 -32 56 c-39 70 -107 144 -169 183 -123 80 -310 117 -496 100z"/>
</g>
                </svg>
              </a>
            </div>
              <div class="mt-10 sm:mt-12">
                  <div class="sm:flex">
                    <div class="mt-3 sm:mt-0">
                      <a href="https://omq1ez0wxhd.typeform.com/to/IXfcN3Xf" class="button text-center typeform-share block w-full py-4 px-8 rounded-md shadow kubelt-bg-green text-white font-medium">
                        Get Early Access
                      </a>
                    </div>
                    <div class="mt-3 sm:mt-0 mx-3">
                      <a href="http://ipfs.io/ipfs/QmNfXy5uCQjEWabnAsvJJPGkKNc6wSZu9M9w2cNxQ8WTo8" target="_blank" class="button text-center typeform-share block w-full py-4 px-8 rounded-md shadow kubelt-bg-blue text-white font-medium">
                        Whitepaper
                      </a>
                    </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
        <div class="relative mt-12 mx-4">
            <h2 class="text-center text-2xl leading-8 font-extrabold tracking-tight text-white sm:text-2xl px-4 sm:px-6 lg:px-8 lg:max-w-7xl">
                Backed by
            </h2>
            {/* <p class="mt-4 max-w-3xl mx-auto text-center text-xl text-gray-500">
                fooo
            </p> */}
            </div>
            <div class="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-6 px-4">
                <div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1"></div>
                <div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1"></div>
                <div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                    <img class="h-20" src="/images/YCombinatorLogo.png" alt="Y Combinator"/>
                </div>
                <div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
                    <img class="h-20" src="/images/ProtocolLabsLogo.png" alt="Protocol Labs"/>
                </div>
            </div>
      </div>
    </div>
  );

  // return (
  //   <div className="relative w-screen">
  //     <div className="absolute z-50 inset-5">
  //       <StaticImage src="../images/Logo.svg" alt="Kubelt" />
  //     </div>
  //       <div className="absolute bg-sky-pattern bg-fixed bg-no-repeat bg-cover w-full h-screen">
  //         <div className="absolute inset-y-0" aria-hidden="true">
  //           <div className="relative h-full">
  //             <StaticImage className="fixed h-60 w-60 left-full transform -translate-x-1/2 sm:-translate-x-1/2 sm:translate-y-1/4 md:-translate-x-1/3 md:translate-y-1/4 lg:-translate-x-96 lg:translate-y-1/4" src="../images/planet.svg" alt="planet"/>
  //           </div>
  //         </div>
  //       <div>
  //       <div className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6 transform translate-y-2/3">
  //       {!user ?
  //       <div className="text-center">
  //         <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
  //           <span className="block">All your notebook</span>
  //             <span className="block text-yellow-500">are belong to us</span>
  //           </h1>
  //         </div>
  //       : null }
  //       </div>
  //     </div>
  //     <Waitlist submitting={submitting} user={user} submitPrefinery={submitPrefinery}/>
  //     <Helmet>
  //       <script src="https://widget.prefinery.com/widget/v2/dqialf2i.js" defer></script>
  //     </Helmet>
  //     <div className="absolute w-screen bottom-0">
  //       <div className="absolute inset-0 bottom-0 flex flex-col" aria-hidden="true">
  //         <div className="flex-1"></div>
  //           <div className="flex-1 w-full bg-ground-pattern bg-no-repeat bg-cover"></div>
  //         </div>
  //         <div className="hidden sm:inline-block max-w-7xl mx-auto px-4 sm:px-6">
  //           <StaticImage src="../images/Base.svg" alt="Base" />
  //         </div>
  //       </div>
  //     </div>
  //   </div>
  // );
};


export default Hero;
