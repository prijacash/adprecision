import React, { useState } from "react"

const FORM_ENDPOINT = "https://public.herotofu.com/v1/cc1ae680-6b89-11ed-a377-655c67143cec";


export default function ContactForm() {

    const [submitted, setSubmitted] = useState(false);
    const handleSubmit = () => {
      setTimeout(() => {
        setSubmitted(true);
      }, 100);
    };
  
    if (submitted) {
      return (
        <>
          <div className="text-2xl">Thank you!</div>
          <div className="text-md">We'll be in touch soon.</div>
        </>
      );
    }

    return(
        <div className="mt-6">
            <div className="mt-2 flex justify-center text-center">                   
                <form
                  action={FORM_ENDPOINT}
                  onSubmit={handleSubmit}
                  method="POST"
                  target="_blank"
                  className="block w-3/5 p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                >
                  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Contact Us</h5>
                  <div className="mb-3 pt-0">
                    <input
                      type="text"
                      placeholder="Your name"
                      name="name"
                      className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                      required
                    />
                  </div>
                  <div className="mb-3 pt-0">
                    <input
                      type="email"
                      placeholder="Email"
                      name="email"
                      className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                      required
                    />
                  </div>
                  <div className="mb-3 pt-0">
                    <textarea
                      placeholder="Your message"
                      name="message"
                      className="px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                      required
                    />
                  </div>
                  <div className="mb-3 pt-0">
                    <button
                      className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      type="submit"
                    >
                      Send a message
                    </button>
                  </div>
                </form>
            </div>
      </div>

    )
}