import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Certificate Verification | AK Health & Safety Training",
  description: "Verify your health and safety training certificates",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-grow">{children}</main>
        <footer className="bg-gray-800 text-white py-8">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-lg font-bold mb-4">AK Health & Safety Training</h3>
                <p className="text-gray-300 text-sm">
                  Providing world-class health and safety training programs to professionals across industries.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4">Quick Links</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
                  <li><a href="/about" className="hover:text-white transition-colors">About Us</a></li>
                  <li><a href="/courses" className="hover:text-white transition-colors">Courses</a></li>
                  <li><a href="/contact" className="hover:text-white transition-colors">Contact</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-bold mb-4">Contact Info</h3>
                <ul className="space-y-2 text-gray-300 text-sm">
                  <li>Email: info@akhealthsafety.com</li>
                  <li>Phone: +92 300 1234567</li>
                  <li>Address: 123 Safety Street, Health City</li>
                </ul>
              </div>
            </div>
            <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} AK Health & Safety Training. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
