import React, { useState } from 'react';
import ResultCard from '../components/ResultCard';

const HomePage = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    certificateNumber: ''
  });
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResult(null);

    try {
      // Convert certificate number to uppercase
      const certNo = formData.certificateNumber.toUpperCase();
      
      const response = await fetch(`http://localhost:5000/api/certificates/${certNo}`);
      const data = await response.json();

      if (data.valid) {
        setResult({
          type: 'success',
          data: {
            certificateNo: data.certificate.certNumber,
            studentName: data.certificate.studentName || formData.fullName,
            courseName: data.certificate.courseName,
            issueDate: data.certificate.issueDate,
            status: data.certificate.status,
            authorizedBy: data.certificate.authorizedBy
          }
        });
      } else {
        setResult({
          type: 'error',
          data: {
            message: 'Certificate not found. Please check the certificate number and try again.'
          }
        });
      }
    } catch (error) {
      console.error('Error verifying certificate:', error);
      setResult({
        type: 'error',
        data: {
          message: 'An error occurred while verifying the certificate. Please try again later.'
        }
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <img className="h-8 w-auto" src="/images/logo.png" alt="AK Health & Safety Training" />
                <span className="ml-2 text-xl font-bold text-gray-900">AK Health & Safety Training</span>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Home</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">About</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Courses</a>
              <a href="#" className="text-gray-700 hover:text-blue-600 font-medium">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Certificate Verification Portal
          </h1>
          <p className="mt-3 text-lg text-gray-500">
            Verify the authenticity of your health and safety training certificates
          </p>
        </div>

        <div className="max-w-md mx-auto bg-white shadow rounded-lg p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                value={formData.fullName}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label htmlFor="certificateNumber" className="block text-sm font-medium text-gray-700 mb-1">
                Certificate Number
              </label>
              <input
                id="certificateNumber"
                name="certificateNumber"
                type="text"
                required
                value={formData.certificateNumber}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter certificate number (e.g. AKHS-001)"
              />
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white py-2 px-4 rounded-md hover:from-blue-600 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Verifying...
                </span>
              ) : 'Verify Certificate'}
            </button>
          </form>

          {result && <ResultCard type={result.type} data={result.data} />}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm">
            Authorized by Aizaz HSE Director
          </p>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <p className="text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} AK Health & Safety Training. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;