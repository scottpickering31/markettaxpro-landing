import React from "react";
import CTAButton from "@/components/local/Button";
import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

export default function Page() {
  return (
    <div>
      <Header />
      <Hero title="Accruwise" subtitle="Simple tools to manage your finances">
        <CTAButton />
      </Hero>
      <Contact />
      <Footer />
    </div>
  );
}
