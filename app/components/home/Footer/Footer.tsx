import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="  bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300 pt-12 pb-8 px-6 sm:px-12 mt-16">
      <div className="w-[90%] mx-auto mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

        {/* Brand */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">Foodiez</h3>
          <p className="text-sm leading-relaxed">
            Delivering happiness, one meal at a time. Order your favorite dishes from top restaurants near you.
          </p>
        </div>

        {/* Links */}
        <div>
          <h4 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Quick Links</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-emerald-500 transition">Home</a></li>
            <li><a href="#" className="hover:text-emerald-500 transition">Menu</a></li>
            <li><a href="#" className="hover:text-emerald-500 transition">About Us</a></li>
            <li><a href="#" className="hover:text-emerald-500 transition">Contact</a></li>
          </ul>
        </div>

        {/* Customer Service */}
        <div>
          <h4 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Customer Service</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-emerald-500 transition">FAQs</a></li>
            <li><a href="#" className="hover:text-emerald-500 transition">Help Center</a></li>
            <li><a href="#" className="hover:text-emerald-500 transition">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-emerald-500 transition">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h4 className="text-lg font-semibold mb-3 text-gray-900 dark:text-white">Follow Us</h4>
          <div className="flex items-center gap-4">
            <a href="#" className="text-xl hover:text-emerald-500 transition"><FaFacebookF /></a>
            <a href="#" className="text-xl hover:text-emerald-500 transition"><FaTwitter /></a>
            <a href="#" className="text-xl hover:text-emerald-500 transition"><FaInstagram /></a>
            <a href="#" className="text-xl hover:text-emerald-500 transition"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-gray-300 dark:border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500 dark:text-gray-400">
        &copy; {new Date().getFullYear()} Foodiez. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
