import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";
import pic1 from "../assets/pic1.jpg";
import pic2 from "../assets/pic2.webp";
import pic3 from "../assets/pic3.jpg";

const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      {/* Navbar */}
      <nav className="bg-blue text-white py-4 px-6 flex justify-between items-center shadow-md">
        {/* Logo */}
        <h1 className="text-2xl font-bold tracking-wide">💊 MedTrack</h1>

        {/* Search Bar (Hidden on Small Screens) */}
        <div className="hidden md:flex items-center bg-white text-gray-700 px-4 py-2 rounded-full shadow-md">
          <input
            type="text"
            placeholder="Search for medicines..."
            className="outline-none bg-transparent w-64"
          />
          <button className="ml-2 text-blue-600 hover:text-blue-800">🔍</button>
        </div>

        {/* Navigation Buttons */}
        <div className="flex items-center">
          <Link to="/signin">
            <button className="bg-white text-blue px-4 py-2 rounded-md mr-4 hover:bg-blue-200 transition">
              Login
            </button>
          </Link>
          <Link to="/signup">
            <button className="bg-white text-blue px-4 py-2 rounded-md hover:bg-blue-200 transition">
              Register
            </button>
          </Link>
        </div>
      </nav>

      {/* Image Carousel */}
      <div className="w-full h-120 max-w-6xl mx-auto mt-6">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          loop={true}
          className="rounded-lg overflow-hidden shadow-md"
        >
        <SwiperSlide>
            <img
                src={pic1}
                alt="Medicine Tracker 1"
                className="w-full h-80 md:h-[500px] object-cover"
            />
        </SwiperSlide>
        <SwiperSlide>
            <img
                src={pic2}
                alt="Medicine Tracker 2"
                className="w-full h-80 md:h-[500px] object-cover"
            />
        </SwiperSlide>
        <SwiperSlide>
            <img
                src={pic3}
                alt="Medicine Tracker 3"
                className="w-full h-80 md:h-[500px] object-cover"
            />
        </SwiperSlide>
        </Swiper>
      </div>

      {/* Hero Section */}
      <header className="flex flex-col items-center text-center py-12 px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
          Never Miss a Dose Again!
        </h1>
        <p className="text-gray-600 mt-4 max-w-xl">
          Our Medicine Tracker helps you manage your medications efficiently with reminders and tracking features.
        </p>
        <Link to="/signup">
          <button className="mt-6 bg-blue text-white px-6 py-3 rounded-md text-lg hover:bg-blue-500 transition">
            Get Started
          </button>
        </Link>
      </header>

      {/* About Section */}
      <section className="py-12 px-6 text-center">
        <h2 className="text-3xl font-semibold text-gray-800">Why Use MedTrack?</h2>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          MedTrack is designed to help individuals and caregivers stay on top of their medications. With timely reminders and an intuitive interface, you can focus on your health without the stress of forgetting doses.
        </p>
      </section>

      {/* Features Section */}
      <section className="py-12 px-6 bg-gray-100">
        <h2 className="text-3xl font-semibold text-center text-gray-800">Features</h2>
        <div className="grid md:grid-cols-3 gap-6 mt-8 max-w-5xl mx-auto">
          <div className="p-6 bg-white shadow-lg rounded-lg text-center">
            <h3 className="text-xl font-bold">🔔 Smart Reminders</h3>
            <p className="text-gray-600 mt-2">Get notified when it's time to take your medicine.</p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg text-center">
            <h3 className="text-xl font-bold">📜 Medicine Log</h3>
            <p className="text-gray-600 mt-2">Keep track of your medications and history.</p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg text-center">
            <h3 className="text-xl font-bold">👨‍⚕️ Doctor Integration</h3>
            <p className="text-gray-600 mt-2">Easily share medication reports with your doctor.</p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {/* FAQ Section */}
<section className="py-12 px-6">
  <h2 className="text-3xl font-semibold text-center text-gray-800">FAQs</h2>
  <div className="max-w-3xl mx-auto mt-8">
    <details className="mb-4 bg-white shadow-md p-4 rounded-lg">
      <summary className="font-semibold cursor-pointer">🔔 How does the medicine reminder work?</summary>
      <p className="mt-2 text-gray-600">You can set reminders for each medicine, and our system will notify you when it's time.</p>
    </details>
    <details className="mb-4 bg-white shadow-md p-4 rounded-lg">
      <summary className="font-semibold cursor-pointer">📅 Can I track multiple medications?</summary>
      <p className="mt-2 text-gray-600">Yes, you can add multiple medications with different schedules.</p>
    </details>
    <details className="mb-4 bg-white shadow-md p-4 rounded-lg">
      <summary className="font-semibold cursor-pointer">👨‍👩‍👧 Can I track medicines for family members?</summary>
      <p className="mt-2 text-gray-600">Yes! You can create multiple profiles and track medicines for loved ones.</p>
    </details>
    <details className="mb-4 bg-white shadow-md p-4 rounded-lg">
      <summary className="font-semibold cursor-pointer">💾 Can I export my medicine history?</summary>
      <p className="mt-2 text-gray-600">Yes, you can download a report of your medicine log and share it with your doctor.</p>
    </details>
    <details className="mb-4 bg-white shadow-md p-4 rounded-lg">
      <summary className="font-semibold cursor-pointer">🔐 Is my data secure?</summary>
      <p className="mt-2 text-gray-600">Absolutely! We use encryption to ensure your data stays private and secure.</p>
    </details>
  </div>
</section>


      {/* Footer */}
      <footer className="bg-black text-white text-center py-6 mt-8">
        <p>&copy; 2025 MedTrack | All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default Home;
