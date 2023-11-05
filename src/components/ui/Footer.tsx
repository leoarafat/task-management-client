import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white p-6">
      <div className="container mx-auto flex flex-wrap">
        <div className="w-full md:w-1/4 lg:w-1/4 mb-4">
          <h4 className="text-xl mb-2">About Us</h4>
          <p>Task-Manager</p>
        </div>
        <div className="w-full md:w-1/4 lg:w-1/4 mb-4">
          <h4 className="text-xl mb-2">Quick Links</h4>
          <ul className="list-none">
            <li>
              <a href="/#" className="hover:text-blue-500">
                Home
              </a>
            </li>
            <li>
              <a href="/#" className="hover:text-blue-500">
                Tasks
              </a>
            </li>
            <li>
              <a href="/#" className="hover:text-blue-500">
                About
              </a>
            </li>
            <li>
              <a href="/#" className="hover:text-blue-500">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full md:w-1/4 lg:w-1/4 mb-4">
          <h4 className="text-xl mb-2">Contact Us</h4>
          <address>
            <p>Task-Manager</p>
            <p>123 Adabor, Dhaka, Bangladesh</p>
            <p>Email: yeasinarafat1734@gmail.com</p>
            <p>Phone: (123) 456-7890</p>
          </address>
        </div>
        <div className="w-full md:w-1/4 lg:w-1/4 mb-4">
          <h4 className="text-xl mb-2">Follow Us</h4>
          <ul className="list-none">
            <li>
              <a href="#" className="hover:text-blue-500">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">
                Twitter
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-500">
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr className="bg-gray-700 my-6" />
      <div className="container mx-auto text-center">
        <p>&copy; 2023 Task-Manager. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
