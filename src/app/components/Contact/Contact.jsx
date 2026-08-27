"use client";
import React, { useRef, useState } from "react";
import { Mail, MapPin, Send, Phone } from "lucide-react";
import emailjs from "@emailjs/browser";
import { toast, Toaster } from "react-hot-toast"; // pnpm add react-hot-toast

const Contact = () => {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    // নিচের ID গুলো আপনার EmailJS ড্যাশবোর্ড থেকে পরিবর্তন করে নিন
    const SERVICE_ID = "YOUR_SERVICE_ID";
    const TEMPLATE_ID = "YOUR_TEMPLATE_ID";
    const PUBLIC_KEY = "YOUR_PUBLIC_KEY";

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      () => {
        toast.success("Message sent successfully!");
        form.current.reset();
        setIsSending(false);
      },
      (error) => {
        console.error("FAILED...", error.text);
        toast.error("Something went wrong. Please try again.");
        setIsSending(false);
      },
    );
  };

  return (
    <section
      id="contact"
      className="bg-[#1B1B1B] py-20 px-6 lg:px-12 text-white"
    >
      <Toaster position="top-center" reverseOrder={false} />
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-2">
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-gray-500">
            Contact
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-white">
            Let's Connect
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-lg mx-auto">
            Have a project in mind? I'd love to hear from you.
          </p>
        </div>

        <div className="bg-[#1B1B1B] border border-white/5 rounded-xl p-8 md:p-12 shadow-2xl">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 items-stretch">
            <div className="md:col-span-2 space-y-10">
              <div className="space-y-3">
                <h3 className="text-2xl font-bold text-white">Let's talk</h3>
                <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                  Fill out the form and I'll get back to you within 24 hours.
                </p>
              </div>

              <div className="space-y-5">
                {/* Location Card */}
                <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5 max-w-xs hover:border-white/10 transition-colors">
                  <div className="p-2.5 bg-white/10 rounded-lg">
                    <MapPin className="w-5 h-5 text-gray-300" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold uppercase tracking-wider text-gray-500">
                      Location
                    </span>
                    <span className="block text-sm font-medium text-white pt-0.5">
                      Dhaka, Bangladesh
                    </span>
                  </div>
                </div>

                {/* Email Card */}
                <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5 max-w-xs hover:border-white/10 transition-colors">
                  <div className="p-2.5 bg-white/10 rounded-lg">
                    <Mail className="w-5 h-5 text-gray-300" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold uppercase tracking-wider text-gray-500">
                      Email
                    </span>
                    <a
                      href="mailto:ksajjadhossen07@gmail.com"
                      className="block text-sm font-medium text-white hover:text-gray-300 transition-colors pt-0.5"
                    >
                      ksajjadhossen07@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone Card */}
                <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/5 max-w-xs hover:border-white/10 transition-colors">
                  <div className="p-2.5 bg-white/10 rounded-lg">
                    <Phone className="w-5 h-5 text-gray-300" />
                  </div>
                  <div>
                    <span className="block text-xs font-semibold uppercase tracking-wider text-gray-500">
                      Phone
                    </span>
                    <a
                      href="tel:+8801963678826"
                      className="block text-sm font-medium text-white hover:text-gray-300 transition-colors pt-0.5"
                    >
                      +880 1963-678826
                    </a>
                  </div>
                </div>
              </div>

              <p className="text-gray-600 text-xs pt-1">
                Typically responds within 24 hours
              </p>
            </div>

            {/* Form Section */}
            <form
              ref={form}
              onSubmit={sendEmail}
              className="md:col-span-3 flex flex-col justify-between space-y-6 md:space-y-0 md:pt-2"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  name="from_name" // Template এর সাথে মিল থাকতে হবে
                  type="text"
                  placeholder="Your name"
                  className="w-full bg-black/30 border border-white/5 rounded-lg px-5 py-3 text-sm text-white placeholder-gray-600 focus:border-white/20 focus:ring-0 transition-all outline-none"
                  required
                />
                <input
                  name="from_email"
                  type="email"
                  placeholder="Your email"
                  className="w-full bg-black/30 border border-white/5 rounded-lg px-5 py-3 text-sm text-white placeholder-gray-600 focus:border-white/20 focus:ring-0 transition-all outline-none"
                  required
                />
              </div>

              <input
                name="subject"
                type="text"
                placeholder="Subject"
                className="w-full bg-black/30 border border-white/5 rounded-lg px-5 py-3 text-sm text-white placeholder-gray-600 focus:border-white/20 focus:ring-0 transition-all outline-none"
                required
              />

              <textarea
                name="message"
                placeholder="Tell me about your project..."
                rows="6"
                className="w-full bg-black/30 border border-white/5 rounded-lg px-5 py-3 text-sm text-white placeholder-gray-600 focus:border-white/20 focus:ring-0 transition-all resize-none outline-none"
                required
              />

              <div className="flex justify-start md:justify-end">
                <button
                  type="submit"
                  disabled={isSending}
                  className={`inline-flex items-center gap-2.5 px-7 py-3.5 bg-white text-black text-sm font-semibold rounded-full hover:bg-gray-200 transition-colors active:scale-95 transform shadow-lg ${isSending ? "opacity-50 cursor-not-allowed" : ""}`}
                >
                  {isSending ? "Sending..." : "Send Message"}
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
