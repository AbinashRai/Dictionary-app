"use client";
import SearchSection from "./SearchSection/SearchSection";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <section className="min-h-[500px]">
        <SearchSection />
      </section>
      <Footer />
    </>
  );
}
