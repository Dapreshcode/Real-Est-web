import React, { useState } from "react";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");
    const formData = new FormData(event.target);
    formData.append("access_key", "92eb0bac-f589-4e8f-9b71-c4913719507a");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (data.success) {
      setResult("");
      alert("Form submitted successfully!");
      event.target.reset();
    } else {
      setResult("Error! Try again.");
    }
  };

  return (
    <div
      className="text-center p-6 py-20 lg:px-32 w-full overflow-hidden"
      id="Contact"
    >
      <h2 className="text-2xl font-bold mb-4 text-center sm:text-4xl">
        Contact{" "}
        <span className="text-gray-200 underline underline-offset-4 decoration-1 font-light">
          With Us
        </span>
      </h2>
      <p className="text-center text-gray-500 mb-12">
        Ready to own your own Property? Let’s build your future together.
      </p>

      <form className="max-w-2xl mx-auto" onSubmit={onSubmit}>
        <div className="flex flex-wrap gap-4">
          <div className="w-full md:w-1/2 text-left">
            Your name
            <input
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2 bg-slate-600 text-white"
              name="Name"
              type="text"
              placeholder="Type your name"
              required
            />
          </div>

          <div className="w-full md:w-1/2 text-left">
            Your email
            <input
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2 bg-slate-600 text-white"
              name="Email"
              type="email"
              placeholder="Type your email"
              required
            />
          </div>
        </div>

        <div className="my-6 text-left">
          Message
          <textarea
            className="w-full border border-gray-300 rounded py-3 px-4 h-48 resize-none bg-slate-600 text-white"
            name="Message"
            placeholder="Message"
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-blue-800 text-white py-2 px-12 mb-10 rounded shadow-md"
        >
          {result ? result : "Send Message"}
        </button>
      </form>
    </div>
  );
};

export default Contact;
