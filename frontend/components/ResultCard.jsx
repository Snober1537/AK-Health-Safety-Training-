import React from 'react';

const ResultCard = ({ type, data }) => {
  if (type === 'success') {
    return (
      <div className="mt-6 p-6 bg-green-50 border border-green-200 rounded-lg shadow-sm">
        <div className="flex items-center mb-4">
          <svg className="h-6 w-6 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 className="text-lg font-medium text-green-800">Certificate Verified</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <p className="text-sm text-gray-600">Certificate No</p>
            <p className="font-medium">{data.certificateNo}</p>
          </div>
          {data.studentName && (
            <div>
              <p className="text-sm text-gray-600">Student Name</p>
              <p className="font-medium">{data.studentName}</p>
            </div>
          )}
          <div>
            <p className="text-sm text-gray-600">Course Name</p>
            <p className="font-medium">{data.courseName}</p>
            </div>
          <div>
            <p className="text-sm text-gray-600">Issue Date</p>
            <p className="font-medium">{data.issueDate}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Status</p>
            <p className="font-medium">{data.status}</p>
          </div>
          <div>
            <p className="text-sm text-gray-600">Authorized By</p>
            <p className="font-medium">{data.authorizedBy}</p>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'error') {
    return (
      <div className="mt-6 p-6 bg-red-50 border border-red-200 rounded-lg shadow-sm">
        <div className="flex items-center">
          <svg className="h-6 w-6 text-red-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 className="text-lg font-medium text-red-800">Certificate Not Found</h3>
        </div>
        <p className="mt-2 text-red-700">{data.message}</p>
      </div>
    );
  }

  return null;
};

export default ResultCard;