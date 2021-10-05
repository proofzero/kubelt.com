import React from 'react';
import LogoIcon from '../../svg/LogoIcon';
import Waitlist from '../Waitlist';

const Footer = () => { 
  const [email, setEmail] = React.useState("")
  const [user, setUser] = React.useState(null);
  const [submitting, setSubmitting] = React.useState(false)

  const submitPrefinery = (email) => {
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
  <footer class="w-screen">
    <div className="w-screen kubelt-bg-purple px-12">
    <div className="max-w-7xl  mx-auto py-12 lg:pt-16">
        <div className="py-10 sm:py-16 lg:py-20 lg:flex lg:items-center">
          <div className="lg:w-0 lg:flex-1">
            <LogoIcon className="h-20 w-40" />
            <p className="max-w-3xl text-white">
              {/* Take control of your data. */}
            </p>
          </div>
          { /* <div className="mt-12 sm:w-full sm:max-w-md lg:mt-0 lg:ml-8 lg:flex-1">
            <h2 className="mb-4 text-3xl tracking-tight text-white">Register for pre-release</h2>
            { !user ? (<form onSubmit={onSubmit} className="sm:flex">
              <label htmlFor="emailAddress" className="sr-only">
                Email address
              </label>
              <input
                value={email} onChange={(e) => setEmail(e.target.value)} 
                id="emailAddress"
                name="emailAddress"
                type="email"
                autoComplete="email"
                required
                className="w-full border-white px-5 py-3 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white rounded-md"
                placeholder="Enter your email"
              />
              <button
                type="submit"
                className="mt-3 w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-indigo-700 focus:ring-white sm:mt-0 sm:ml-3 sm:w-auto sm:flex-shrink-0"
              >
                { submitting ? (<svg className="animate-spin h-5 w-5 mr-3 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>) : 'Register' }
              </button>
            </form>) : (<h2 className="mt-4 text-2xl text-white font-extrabold kubelt-text-orange tracking-tight sm:text-3xl">Received</h2>)}
            <div class="flex justify-left space-x-6 md:order-2">
              <a href="https://twitter.com/kubeltdata" class="text-white hover:text-gray-500 pt-10">
                <span class="sr-only">Twitter</span>
                <svg class="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="https://github.com/proofzero" class="text-white hover:text-gray-500 pt-10">
                <span class="sr-only">GitHub</span>
                <svg class="h-8 w-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
                </svg>
              </a>
            </div>
  </div> */}
          </div>
        </div>
      </div>
      <div className="w-screen kubelt-bg-purple px-12">
    <div class="max-w-7xl mx-auto pb-12 md:flex md:items-center md:justify-between">
      <div class="flex justify-center space-x-6 md:order-2">
        {/* <a href="#" class="text-white">
          Privacy Policy
        </a> */}

      </div>
      <div class="mt-8 md:mt-0 md:order-1">
        <p class="text-center text-base text-white">
          &copy; 2020 Kubelt. All rights reserved.
        </p>
      </div>
    </div>
    </div>
  </footer>

  );
}
export default Footer;
