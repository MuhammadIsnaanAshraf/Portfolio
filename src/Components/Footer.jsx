import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Github } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    // {
    //   name: 'Facebook',
    //   icon: Facebook,
    //   url: 'https://facebook.com',
    //   color: 'hover:text-blue-600'

    // },
    // {
    //   name: 'Twitter',
    //   icon: Twitter,
    //   url: 'https://twitter.com',
    //   color: 'hover:text-blue-400'
    // },
    // {
    //   name: 'Instagram',
    //   icon: Instagram,
    //   url: 'https://instagram.com',
    //   color: 'hover:text-pink-500'
    // },
    {
      name: 'LinkedIn',
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/muhammad-isnaan-ashraf-9bb530309/',
      color: 'hover:text-blue-700'
    },
    {
      name: 'GitHub',
      icon: Github,
      url: 'https://github.com/MuhammadIsnaanAshraf',
      color: 'hover:text-gray-100'
    }
  ];

  return (
    <footer className="bg-gradient-to-br text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center space-y-6">
          {/* Social Icons */}
          <div className="flex space-x-6">
            {socialLinks.map((social) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-400 ${social.color} transition-colors duration-300 transform hover:scale-110`}
                  aria-label={social.name}
                >
                  <IconComponent size={24} />
                </a>
              );
            })}
          </div>

          {/* Copyright */}
          <div className="text-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Muhammad Isnaan Ashraf. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;