'use client';

import { useState } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({
    name: '',
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
      const response = await fetch(`http://localhost:5000/api/certificates/${formData.certificateNumber}`);
      const data = await response.json();
      
      if (data.valid) {
        setResult({
          type: 'valid',
          message: `✅ Valid Certificate
Certificate No: ${data.certificate.certNumber}
Issued: ${new Date(data.certificate.dateIssued).toLocaleDateString()}
Status: Active
Authorized by: Aizaz HSE Director`
        });
      } else {
        setResult({
          type: 'invalid',
          message: '❌ Certificate not found. Please check details.'
        });
      }
    } catch (error) {
      console.error('Error verifying certificate:', error);
      setResult({
        type: 'error',
        message: '⚠️ Server error. Please try again later.'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto card">
        <div className="text-center mb-8">
          <div className="mx-auto bg-primary-100 rounded-full p-4 w-24 h-24 flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-gray-800">Certificate Verification</h1>
          <p className="text-gray-600 mt-2">Verify the authenticity of your health & safety certificate</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              className="form-input"
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
              className="form-input"
              placeholder="Enter certificate number"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="btn-primary w-full flex items-center justify-center"
          >
            {loading ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Verifying...
              </>
            ) : 'Verify Certificate'}
          </button>
        </form>
        
        {result && (
          <div className={`mt-6 p-4 rounded-lg ${result.type === 'valid' ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
            <pre className="whitespace-pre-wrap font-sans text-sm">{result.message}</pre>
          </div>
        )}
        
        <div className="mt-8 pt-6 border-t border-gray-200 text-center">
          <p className="text-sm text-gray-500">
            <span className="font-medium">Need help?</span> Contact our support team
          </p>
          <p className="text-xs text-gray-400 mt-2">
            Developed by Sanober Qayyum
          </p>
        </div>
      </div>
      
      <div className="max-w-4xl mx-auto mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card text-center p-6">
          <div className="mx-auto bg-primary-100 rounded-full p-3 w-16 h-16 flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h3 className="font-semibold text-lg text-gray-800 mb-2">Instant Verification</h3>
          <p className="text-gray-600 text-sm">Verify certificates in real-time with our secure system</p>
        </div>
        
        <div className="card text-center p-6">
          <div className="mx-auto bg-primary-100 rounded-full p-3 w-16 h-16 flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          <h3 className="font-semibold text-lg text-gray-800 mb-2">Secure & Reliable</h3>
          <p className="text-gray-600 text-sm">Enterprise-grade security for your sensitive data</p>
        </div>
        
        <div className="card text-center p-6">
          <div className="mx-auto bg-primary-100 rounded-full p-3 w-16 h-16 flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
          </div>
          <h3 className="font-semibold text-lg text-gray-800 mb-2">24/7 Support</h3>
          <p className="text-gray-600 text-sm">Our team is ready to assist you anytime</p>
        </div>
      </div>
    </div>
  );
}
