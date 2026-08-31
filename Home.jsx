import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PetGallery from "@/components/PetGallery";
import InfoSection from "@/components/InfoSection";
import Footer from "@/components/Footer";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-[#0c0c0d] text-white">
      <div className="relative z-10">
        <Navbar onSearch={setSearchQuery} />
        <main className="overflow-hidden">
          <Hero />
          <PetGallery searchQuery={searchQuery} />
          <InfoSection />
        </main>
        <Footer />
      </div>
    </div>
  );
}