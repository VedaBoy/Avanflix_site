import React from 'react';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: "Project Unchained",
    description: "Brand Identity & Marketing Campaign",
    image: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Mud Brown Heritage",
    description: "Architecture Photography",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Fashion Dreams",
    description: "Fashion Campaign",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Barberos Lounge",
    description: "Interior Design & Branding",
    image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Nadi Collection",
    description: "Product Photography",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "AMJ Overseas",
    description: "Corporate Identity",
    image: "https://images.unsplash.com/photo-1542744094-24638eff58bb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Marriott Wheels",
    description: "Automotive Campaign",
    image: "https://images.unsplash.com/photo-1542362567-b07e54358753?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Float Brewery",
    description: "Package Design",
    image: "https://images.unsplash.com/photo-1571613316887-6f8d5cbf7ef7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Duskiane",
    description: "Fashion Editorial",
    image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
  },
  {
    title: "Enrose Salon",
    description: "Brand Identity",
    image: "https://images.unsplash.com/photo-1562322140-8baeececf3df?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
  }
];

function App() {
  return (
    <div className="min-h-screen bg-[#2b2b2b] text-white pt-20">
      {/* Banner */}
        <div className="h-80 w-full bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1506748686214-e9df14d4d9d0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80')" }} />

        {/* Left Sidebar */}
        <div className="fixed left-0 top-0 w-72 h-screen p-6 border-r border-gray-800 bg-[#2b2b2b] overflow-y-auto pt-20 hidden lg:block">
          <div className="space-y-6">
            {/* Logo and Title */}
            <div className="space-y-4">
          <img src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80" 
               className="w-16 h-16 rounded-full" alt="Logo" />
          <h1 className="text-2xl font-bold">Arting Out Loud</h1>
          <span className="inline-block bg-green-500 text-white text-xs px-2 py-1 rounded">
            • Available Now
          </span>
            </div>

            {/* Company Info */}
            <div className="space-y-2 text-sm text-gray-400">
          <p>Integrated Advertising Agency</p>
          <p>Arting Out Loud</p>
          <p>India</p>
          <a href="https://artingoutloud.in" target="_blank" rel="noopener noreferrer" 
             className="text-blue-400 hover:text-blue-300 transition-colors">
            artingoutloud.in
          </a>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
          <a href="https://instagram.com/artingoutloud" target="_blank" rel="noopener noreferrer" 
             className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 rounded-full font-medium text-center block hover:opacity-90 transition-opacity">
            Follow on Instagram
          </a>
          <a href="mailto:contact@artingoutloud.in" 
             className="w-full bg-gray-800 text-white py-2 rounded-full font-medium text-center block hover:bg-gray-700 transition-colors">
            Send Email
          </a>
          <a href="https://calendly.com/artingoutloud" target="_blank" rel="noopener noreferrer"
             className="w-full bg-gray-800 text-white py-2 rounded-full font-medium text-center block hover:bg-gray-700 transition-colors">
            Schedule A Meeting
          </a>
            </div>

            {/* Hire Section */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-6 rounded-xl space-y-4">
          <h3 className="font-bold text-xl">Hire Arting Out</h3>
          <p className="text-sm text-blue-100">Available for freelance projects and full-time opportunities</p>
          <div className="flex flex-col space-y-2">
            <a href="https://linkedin.com/company/artingoutloud" target="_blank" rel="noopener noreferrer"
               className="bg-white text-blue-900 py-2 px-4 rounded-lg font-medium text-center hover:bg-blue-50 transition-colors flex items-center justify-center space-x-2">
              <span>View on LinkedIn</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            <a href="https://upwork.com/artingoutloud" target="_blank" rel="noopener noreferrer"
               className="bg-blue-700 text-white py-2 px-4 rounded-lg font-medium text-center hover:bg-blue-600 transition-colors">
              Hire on Upwork
            </a>
          </div>

            {/* Social Links */}
            <div className="space-y-3">
          <h3 className="text-sm font-medium text-gray-300">Connect With Us</h3>
          <div className="grid grid-cols-2 gap-3">
            <a href="https://facebook.com/artingoutloud" target="_blank" rel="noopener noreferrer" 
               className="flex items-center justify-center space-x-2 bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors">
              <span>Facebook</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            <a href="https://youtube.com/@artingoutloud" target="_blank" rel="noopener noreferrer" 
               className="flex items-center justify-center space-x-2 bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors">
              <span>YouTube</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            <a href="https://instagram.com/artingoutloud" target="_blank" rel="noopener noreferrer" 
               className="flex items-center justify-center space-x-2 bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors">
              <span>Instagram</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            <a href="https://linkedin.com/company/artingoutloud" target="_blank" rel="noopener noreferrer" 
               className="flex items-center justify-center space-x-2 bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors">
              <span>LinkedIn</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
            </div>

            {/* About Section */}
            <div className="space-y-2">
          <h3 className="text-sm font-medium text-gray-300">About Us</h3>
          <p className="text-sm text-gray-400">
            Arting Out Loud is a full-service integrated advertising agency that began its creative 
            journey in 2017. Starting as a humble duo, we have grown into a dynamic team of 50 
            professionals, successfully completing over 300 projects. Our portfolio includes collaborations 
            with renowned brands such as Fair...
          </p>
          <button className="text-sm text-blue-400 hover:text-blue-300 transition-colors">Read More ▼</button>
            </div>

            {/* Member Since */}
            <div className="text-sm text-gray-400">
          <p>MEMBER SINCE: JULY 5 2020</p>
          <button className="text-sm text-gray-400 hover:text-white mt-2 transition-colors">Report</button>
            </div>
          </div>
        </div>

        {/* Mobile Sidebar */}
        <div className="lg:hidden p-6 bg-[#2b2b2b] text-white">
          <div className="space-y-6">
            {/* Logo and Title */}
            <div className="space-y-4">
          <img src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&h=200&q=80" 
               className="w-16 h-16 rounded-full" alt="Logo" />
          <h1 className="text-2xl font-bold">Arting Out Loud</h1>
          <span className="inline-block bg-green-500 text-white text-xs px-2 py-1 rounded">
            • Available Now
          </span>
            </div>

            {/* Company Info */}
            <div className="space-y-2 text-sm text-gray-400">
          <p>Integrated Advertising Agency</p>
          <p>Arting Out Loud</p>
          <p>India</p>
          <a href="https://artingoutloud.in" target="_blank" rel="noopener noreferrer" 
             className="text-blue-400 hover:text-blue-300 transition-colors">
            artingoutloud.in
          </a>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
          <a href="https://instagram.com/artingoutloud" target="_blank" rel="noopener noreferrer" 
             className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-2 rounded-full font-medium text-center block hover:opacity-90 transition-opacity">
            Follow on Instagram
          </a>
          <a href="mailto:contact@artingoutloud.in" 
             className="w-full bg-gray-800 text-white py-2 rounded-full font-medium text-center block hover:bg-gray-700 transition-colors">
            Send Email
          </a>
          <a href="https://calendly.com/artingoutloud" target="_blank" rel="noopener noreferrer"
             className="w-full bg-gray-800 text-white py-2 rounded-full font-medium text-center block hover:bg-gray-700 transition-colors">
            Schedule A Meeting
          </a>
            </div>

            {/* Hire Section */}
            <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-6 rounded-xl space-y-4">
          <h3 className="font-bold text-xl">Hire Arting Out</h3>
          <p className="text-sm text-blue-100">Available for freelance projects and full-time opportunities</p>
          <div className="flex flex-col space-y-2">
            <a href="https://linkedin.com/company/artingoutloud" target="_blank" rel="noopener noreferrer"
               className="bg-white text-blue-900 py-2 px-4 rounded-lg font-medium text-center hover:bg-blue-50 transition-colors flex items-center justify-center space-x-2">
              <span>View on LinkedIn</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            <a href="https://upwork.com/artingoutloud" target="_blank" rel="noopener noreferrer"
               className="bg-blue-700 text-white py-2 px-4 rounded-lg font-medium text-center hover:bg-blue-600 transition-colors">
              Hire on Upwork
            </a>
          </div>
            </div>

            {/* Social Links */}
            <div className="space-y-3">
          <h3 className="text-sm font-medium text-gray-300">Connect With Us</h3>
          <div className="grid grid-cols-2 gap-3">
            <a href="https://facebook.com/artingoutloud" target="_blank" rel="noopener noreferrer" 
               className="flex items-center justify-center space-x-2 bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors">
              <span>Facebook</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            <a href="https://youtube.com/@artingoutloud" target="_blank" rel="noopener noreferrer" 
               className="flex items-center justify-center space-x-2 bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors">
              <span>YouTube</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            <a href="https://instagram.com/artingoutloud" target="_blank" rel="noopener noreferrer" 
               className="flex items-center justify-center space-x-2 bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors">
              <span>Instagram</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            <a href="https://linkedin.com/company/artingoutloud" target="_blank" rel="noopener noreferrer" 
               className="flex items-center justify-center space-x-2 bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors">
              <span>LinkedIn</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
            </div>

            {/* About Section */}
            <div className="space-y-2">
          <h3 className="text-sm font-medium text-gray-300">About Us</h3>
          <p className="text-sm text-gray-400">
            Arting Out Loud is a full-service integrated advertising agency that began its creative 
            journey in 2017. Starting as a humble duo, we have grown into a dynamic team of 50 
            professionals, successfully completing over 300 projects. Our portfolio includes collaborations 
            with renowned brands such as Fair...
          </p>
          <button className="text-sm text-blue-400 hover:text-blue-300 transition-colors">Read More ▼</button>
            </div>

            {/* Member Since */}
            <div className="text-sm text-gray-400">
          <p>MEMBER SINCE: JULY 5 2020</p>
          <button className="text-sm text-gray-400 hover:text-white mt-2 transition-colors">Report</button>
            </div>
          </div>
        </div>
        </div>

      {/* Main Content */}
      <div className="lg:ml-72">
        {/* Services Section */}
        <div className="p-8">
          <h2 className="text-2xl font-bold mb-8">Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-gray-800 rounded-lg overflow-hidden group hover:transform hover:scale-105 transition-all duration-300">
              <div className="aspect-w-16 aspect-h-9 relative overflow-hidden">
                <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                     className="object-cover w-full h-full transform group-hover:scale-110 transition-transform duration-300" alt="Service" />
              </div>
              <div className="p-4">
                <h3 className="font-medium">Branding and Visual Identity</h3>
                <p className="text-sm text-gray-400">From US$ 1,500</p>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="p-8 pt-0">
          <h2 className="text-2xl font-bold mb-8">Featured Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg cursor-pointer">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 p-4">
                    <h3 className="text-lg font-semibold">{project.title}</h3>
                    <p className="text-sm text-gray-300">{project.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;