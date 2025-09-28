import React from "react";
export default function Contact({ openQuoteModal }) {
  return (
    <div className="pt-32 pb-20 bg-gradient-to-b from-blue-50 to-white">
      {" "}
      <div className="w-full px-4 sm:px-6 lg:px-8">
        {" "}
        <div className="max-w-6xl mx-auto">
          {" "}
          {/* Heading */}{" "}
          <div className="text-center mb-16">
            {" "}
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {" "}
              Let's Plan Your Adventure{" "}
            </h1>{" "}
            <p className="text-xl text-gray-600">
              {" "}
              Ready to embark on your next journey? Get in touch and let's
              create something extraordinary together.{" "}
            </p>{" "}
          </div>{" "}
          {/* Main content: Form + Location */}{" "}
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {" "}
            {/* Contact Form */}{" "}
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-all duration-300">
              {" "}
              <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Send Us a Message
              </h2>{" "}
              <form className="space-y-5">
                {" "}
                <div>
                  {" "}
                  <label className="block text-gray-700 font-medium mb-2">
                    Full Name
                  </label>{" "}
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  />{" "}
                </div>{" "}
                <div>
                  {" "}
                  <label className="block text-gray-700 font-medium mb-2">
                    Email Address
                  </label>{" "}
                  <input
                    type="email"
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  />{" "}
                </div>{" "}
                <div>
                  {" "}
                  <label className="block text-gray-700 font-medium mb-2">
                    Message
                  </label>{" "}
                  <textarea
                    rows="4"
                    placeholder="Write your message..."
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  ></textarea>{" "}
                </div>{" "}
                {/* <button
                  type="submit"
                  className="w-full py-3 rounded-full bg-blue-600 text-white font-semibold text-lg shadow-md hover:bg-blue-700 hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                > */}
             <button
  type="submit"
  style={{ backgroundColor: "#0077B6", color: "#FFFFFF" }}
  className="w-full py-3 rounded-full font-semibold text-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-all duration-300"
>
  

                  {" "}
                  Send Message{" "}
                </button>{" "}
              </form>{" "}
            </div>{" "}
            {/* Contact Info / Location */}{" "}
            {/* <div  className="bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-2xl shadow-xl p-8 flex flex-col justify-center"> */}
               <div   style={{ backgroundColor: "#0077B6" }}  className="  text-white rounded-2xl shadow-xl p-8 flex flex-col justify-center">
              {" "}
              <h2 className="text-2xl font-bold mb-6">Our Office</h2>{" "}
              <div className="space-y-6">
                {" "}
                <div className="flex items-start space-x-4">
                  {" "}
                  <span className="text-3xl">📍</span>{" "}
                  <div>
                    {" "}
                    <h3 className="font-semibold">Location</h3>{" "}
                    <p>San Francisco, CA</p>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="flex items-start space-x-4">
                  {" "}
                  <span className="text-3xl">📞</span>{" "}
                  <div>
                    {" "}
                    <h3 className="font-semibold">Phone</h3>{" "}
                    <p>+1 (555) 123-4567</p>{" "}
                  </div>{" "}
                </div>{" "}
                <div className="flex items-start space-x-4">
                  {" "}
                  <span className="text-3xl">📧</span>{" "}
                  <div>
                    {" "}
                    <h3 className="font-semibold">Email</h3>{" "}
                    <p>hello@OLA.com</p>{" "}
                  </div>{" "}
                </div>{" "}
              </div>{" "}
              {/* Google Maps Embed */}{" "}
              <div className="mt-8">
                {" "}
                <iframe
                  title="Office Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0195993507545!2d-122.4194152846811!3d37.774929779759206!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064b5a2f2d1%3A0x44b0a2a3c8dfd5e1!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1673359067917!5m2!1sen!2sus"
                  width="100%"
                  height="250"
                  allowFullScreen=""
                  loading="lazy"
                  className="rounded-xl shadow-md"
                ></iframe>{" "}
              </div>{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
}
