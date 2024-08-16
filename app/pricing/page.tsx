import React from "react";

const PricingPage = () => {
  return (
    <div className="text-white min-h-screen flex flex-col items-center p-8">
      <h1 className="text-3xl font-bold mb-2">Choose your Frequency</h1>
      <h2 className="text-neutral-400 text-sm mb-5">
        Choose a subscription plan that fits how often you want content posted
        on your channel
      </h2>

      {/* Toggle for Monthly/Yearly */}
      <div className="flex items-center space-x-4 mb-12">
        <span>Monthly</span>
        <div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
          <input
            type="checkbox"
            name="toggle"
            id="toggle"
            className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-white border-4 appearance-none cursor-pointer"
          />
          <label
            htmlFor="toggle"
            className="toggle-label block overflow-hidden h-6 rounded-full bg-gray-400 cursor-pointer"
          ></label>
        </div>
        <span>Yearly</span>
        <span className="ml-2 bg-[#6742d9] text-black text-sm px-2 py-1 rounded">
          Save 50%!
        </span>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Starter Plan */}
        <div className="bg-gray-800 p-8 rounded-lg text-center">
          <h2 className="text-xl font-bold mb-4">Starter</h2>
          <p className="text-2xl font-bold">$15/mo</p>
          <p className="text-sm text-gray-400 mb-4">Per Series</p>
          <p className="mb-6">
            Auto-posts <span className="font-bold">three times per week</span>
          </p>
          <ul className="text-left mb-8">
            <li>✔ Content Creation</li>
            <li>✔ Auto Posting to your channel</li>
            <li>✔ Ability to edit posts in advance</li>
            <li>✔ 3 Posts per Week</li>
            <li>✔ HD Video Resolution</li>
          </ul>
          <button className="bg-[#6742d9] text-black py-2 px-4 rounded-full font-bold">
            CREATE SERIES
          </button>
        </div>

        {/* Daily Posts Plan */}
        <div className="bg-gray-800 p-8 rounded-lg text-center relative">
          <span className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#6742d9] text-black text-sm px-2 py-1 rounded">
            Most Popular!
          </span>
          <h2 className="text-xl font-bold mb-4">Daily Posts</h2>
          <p className="text-2xl font-bold">$30/mo</p>
          <p className="text-sm text-gray-400 mb-4">Per Series</p>
          <p className="mb-6">
            Auto-posts <span className="font-bold">once per day</span>
          </p>
          <ul className="text-left mb-8">
            <li>✔ Content Creation</li>
            <li>✔ Auto Posting to your channel</li>
            <li>✔ Ability to edit posts in advance</li>
            <li>✔ 7 Posts per Week</li>
            <li>✔ Priority Support</li>
            <li>✔ HD Video Resolution</li>
          </ul>
          <button className="bg-blue-500 text-black py-2 px-4 rounded-full font-bold">
            FREE TRIAL
          </button>
        </div>

        {/* Double Up Plan */}
        <div className="bg-gray-800 p-8 rounded-lg text-center">
          <h2 className="text-xl font-bold mb-4">Double Up</h2>
          <p className="text-2xl font-bold">$45/mo</p>
          <p className="text-sm text-gray-400 mb-4">Per Series</p>
          <p className="mb-6">
            Auto-posts <span className="font-bold">twice per day</span>
          </p>
          <ul className="text-left mb-8">
            <li>✔ Content Creation</li>
            <li>✔ Auto Posting to your channel</li>
            <li>✔ Download video files</li>
            <li>✔ Ability to edit posts in advance</li>
            <li>✔ 14 Posts per Week</li>
            <li>✔ 4.7X More posts than Starter!</li>
            <li>✔ Priority Support</li>
            <li>✔ HD Video Resolution</li>
          </ul>
          <button className="text-black py-2 px-4 rounded-full font-bold">
            CREATE SERIES
          </button>
        </div>
      </div>
    </div>
  );
};

export default PricingPage;