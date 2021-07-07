import React from 'react';

const Waitlist = ({ user }) => {

  console.log(user)

  return user ? (
    <div className="relative">
      <h1 className="text-3xl text-yellow-500 font-extrabold text-white tracking-tight sm:text-4xl">
          Countdown commence!
      </h1>
      {/* <h2 className="font-extrabold text-white text-2xl tracking-tight mt-2">
          Want to cut the line and get early access?
      </h2>
      <p className="text-white tracking-tight text-1xl font-bold mt-2">
          Refer your friends to signup with this unique link:
      </p>
      <h3 className="text-white tracking-tight text-1xl font-bold mt-2">
          <span className="text-yellow-500">{ user.referral_link}</span>
      </h3>
      <hr className="mt-2 mb-2" />
      <p className="text-white tracking-tight font-bold mt-2">
          Every time a friend clicks your link, and then signs up, you get even closer to receiving early access.
      </p> */}
    </div>) : ('')
};

export default Waitlist;
