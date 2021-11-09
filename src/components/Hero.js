import React from 'react';
import Banner from './Banner';

const Hero = ({  }) => {
  const [email, setEmail] = React.useState("")
  const [user, setUser] = React.useState(null);
  const [submitting, setSubmitting] = React.useState(false)

  const submitPrefinery = (email) => {
    console.log(email)
    setSubmitting(true)
    window.prefinery('addUser', email, function(user) {
      setUser(user) 
      setSubmitting(false)
    });
  }

  const onSubmit = (e) => { 
    e.preventDefault()
    if (!submitting) submitPrefinery(email)
  }

  return (
    //pt-10 sm:pt-16 lg:pt-8 
    <div id="hero" class="lg:pb-14 lg:overflow-hidden">
      <div class="mx-auto max-w-7xl lg:px-8">
        <div class="lg:grid lg:grid-cols-3 lg:gap-8">
          <div class="col-span-2 mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
            <div class="lg:py-24 px-8 py-24">
              <a href="#" class="inline-flex items-center text-white rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200">
                {/* <span class="px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wide kubelt-bg-orange rounded-full">Pre Alpha</span> */}
                {/* <svg class="ml-2 w-5 h-5 text-gray-500" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                </svg> */}
              </a>
              <h1 class="mt-4 text-3xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-5xl lg:mt-6 xl:text-5xl">
                <span class="block">An entire universe of </span>
                    <span class="block kubelt-text-orange">possibilities</span>
              </h1>
              <p class="mt-3 text-base text-white sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              The data-centric platform for development, collaboration and delivery 
              </p>
              <div class="mt-10 sm:mt-12">
                { !user ?
                (<form onSubmit={onSubmit} class="sm:max-w-xl sm:mx-auto lg:mx-0">
                  <div class="sm:flex">
                    <div class="min-w-0 flex-1">
                      <label for="email" class="sr-only">Email address</label>
                      <input value={email} onChange={(e) => setEmail(e.target.value)} id="email" type="email" placeholder="Enter your email" class="block w-full px-4 py-3 rounded-md border-0 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-300 focus:ring-offset-gray-900" />
                    </div>
                    <div class="mt-3 sm:mt-0 sm:ml-3">
                      <button type="submit" class="block w-full py-3 px-4 rounded-md shadow kubelt-bg-orange text-white font-medium">
                        { submitting ? (<svg className="animate-spin h-5 w-5 mr-3 text-white" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>) : 'Register' }
                      </button>
                    </div>
                  </div>
                  <p class="mt-3 pb-10 text-sm text-white sm:mt-4">We'll reach out soon with more details.</p>
                </form>) :
                (<h2 className=" -mt-text-3xl text-yellow-500 font-extrabold text-white tracking-tight sm:text-4xl">Received</h2>)}
              </div>
            </div>
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
