import React from 'react';

export default function ContactForm() {
  return (
    <section className="relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 relative">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <h1 className="h1 font-red-hat-display mb-4">
              Sign up for early access!
            </h1>
            {/* <p className="text-xl text-gray-600 dark:text-gray-400">We'll send you a text with a link to download the app.</p> */}
          </div>

          {/* Contact form */}
          <form className="max-w-xl mx-auto">
            <div className="flex flex-wrap -mx-3 mb-5">
              <div className="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                <label
                  className="block text-gray-800 dark:text-gray-300 text-sm font-medium mb-1"
                  htmlFor="first-name"
                >
                  First Name <span className="text-red-600">*</span>
                </label>
                <input
                  id="first-name"
                  type="text"
                  className="form-input w-full"
                  placeholder="Enter your first name"
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <label
                  className="block text-gray-800 dark:text-gray-300 text-sm font-medium mb-1"
                  htmlFor="last-name"
                >
                  Last Name <span className="text-red-600">*</span>
                </label>
                <input
                  id="last-name"
                  type="text"
                  className="form-input w-full"
                  placeholder="Enter your last name"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-5">
              <div className="w-full px-3">
                <div className="flex justify-between items-center mb-1">
                  <label
                    className="block text-gray-800 dark:text-gray-300 text-sm font-medium"
                    htmlFor="message"
                  >
                    Email
                  </label>
                  <span className="text-sm text-gray-500">Required</span>
                </div>
                <input
                  id="email"
                  type="email"
                  className="form-input w-full"
                  placeholder="Enter your email address"
                  required
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-5">
              <div className="w-full px-3">
                <div className="flex justify-between items-center mb-1">
                  <label
                    className="block text-gray-800 dark:text-gray-300 text-sm font-medium"
                    htmlFor="message"
                  >
                    Message
                  </label>
                  <span className="text-sm text-gray-500">Required</span>
                </div>
                <textarea
                  id="message"
                  rows={4}
                  className="form-textarea w-full"
                  placeholder="What interests you in Vera?"
                  required
                ></textarea>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mt-6">
              <div className="w-full px-3">
                <button className="btn text-white bg-teal-500 hover:bg-teal-400 w-full flex items-center">
                  <span>Contact Us</span>
                  <svg
                    className="w-3 h-3 shrink-0 mt-px ml-2"
                    viewBox="0 0 12 12"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      className="fill-current"
                      d="M6.602 11l-.875-.864L9.33 6.534H0v-1.25h9.33L5.727 1.693l.875-.875 5.091 5.091z"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
