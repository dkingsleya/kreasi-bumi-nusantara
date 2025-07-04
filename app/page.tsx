import { Navbar } from "@/components/Navbar";
import { ProjectsGrid } from "@/components/ProjectsGrid";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-gray-900 to-slate-600 text-white py-20">
        <div className="container mx-auto px-4 flex flex-col items-center justify-center text-center">
          <div className="mb-8">
            <Image
              src="/assets/logo/logo.png"
              width={500}
              height={500}
              alt="KBN"
              className="mx-auto rounded-lg"
            />
          </div>
          <p className="text-xl mb-8 max-w-2xl">
            Designing Tomorrow's Spaces Today - Where Creativity Meets Precision.
          </p>
        </div>
      </section>

      <ProjectsGrid />

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
              <h2 className="text-3xl font-bold mb-6">About Our Company</h2>
              <p className="text-gray-700 mb-4">
                Kreasi Bumi Nusantara is an Interior Design and Build company established in 2020. We have successfully completed a wide range of projects, including residential, office, and commercial spaces. Our expertise covers Interior Design, Architectural renovation, and MEP (Mechanical, Electrical, and Plumbing) works.
                <br></br>
                Driven by creative innovation and a commitment to staying up to date with the latest interior finishing materials, we approach every project with meticulous attention to detail. We consistently offer clients thoughtful initiatives and alternative solutions to ensure the best quality, competitive pricing, and on time delivery.
              </p>
              <p className="text-gray-700 mb-4">
                Our team of experts brings together diverse skills in technology, design, and business strategy to deliver comprehensive solutions that drive real results.
              </p>
            </div>
            <Image
              src="/assets/logo/logo.png"
              width={500}
              height={500}
              alt="KBN"
              className="mx-auto rounded-lg"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Company Info */}
            <div>
              <h3 className="text-xl font-semibold mb-4">KREASI BUMI NUSANTARA</h3>
              <p className="text-gray-400">ARCHITECTURE | INTERIOR DESIGN & BUILT</p>
            </div>

            {/* Contact Information */}
            <div>
              <h4 className="text-lg font-medium mb-4">Contact Us</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-3 mt-0.5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                  <a href="mailto:kreasibumin@gmail.com" className="hover:text-blue-400 transition">kreasibumin@gmail.com</a>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-3 mt-0.5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                  <a href="https://wa.me/6281322080823" className="hover:text-blue-400 transition">0813 2208 0823</a>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 mr-3 mt-0.5 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                  <span className="text-gray-300">
                    Jl. Regensi Lestari Blok D14 No.7<br />
                    Mega Kebon Jeruk, Meruya Selatan<br />
                    Kembangan, Jakarta Barat
                  </span>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-medium mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition">Home</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-blue-400 transition">About</a></li>
                <li><a href="#projects" className="text-gray-400 hover:text-blue-400 transition">Projects</a></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} KREASI BUMI NUSANTARA (KBN). All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}