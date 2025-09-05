import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { BlueGradient } from "@/styles/blue-gradient";
import React from "react";
import ContactForm from "@/components/contact/ContactForm";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="mx-auto max-w-6xl px-6 pt-12 text-center">
        <h1 className="text-4xl tracking-tight sm:text-5xl">
          Get in{" "}
          <span
            className={`block font-bold underline underline-offset-8 sm:text-7xl mt-4 ${BlueGradient}`}
          >
            Touch
          </span>
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
          Have questions, feedback, or need support? We'd love to hear from you.
        </p>
      </section>

      {/* Contact Form */}
      <ContactForm />

      <Footer />
    </div>
  );
}
