export default function Courses() {
  const courses = [
    {
      id: 1,
      title: "NEBOSH International General Certificate",
      description: "Comprehensive health and safety training covering risk assessment, hazard control, and legal compliance.",
      duration: "10 days",
      certification: "Internationally recognized",
      level: "Intermediate",
      icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
    },
    {
      id: 2,
      title: "IOSH Managing Safely",
      description: "Designed for managers and supervisors to effectively manage health and safety in their teams.",
      duration: "3 days",
      certification: "IOSH certificate",
      level: "Beginner",
      icon: "M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
    },
    {
      id: 3,
      title: "OSHA 30-Hour Training",
      description: "In-depth safety training for construction and general industry workers in the American context.",
      duration: "4 days",
      certification: "OSHA 30-Hour card",
      level: "Advanced",
      icon: "M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    },
    {
      id: 4,
      title: "Risk Assessment Training",
      description: "Learn to identify workplace hazards and implement effective risk control measures.",
      duration: "2 days",
      certification: "AK Training certificate",
      level: "Intermediate",
      icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
    },
    {
      id: 5,
      title: "Fire Safety Management",
      description: "Comprehensive training on fire prevention, evacuation procedures, and fire safety systems.",
      duration: "1 day",
      certification: "AK Training certificate",
      level: "Beginner",
      icon: "M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
    },
    {
      id: 6,
      title: "First Aid at Work",
      description: "Essential first aid skills for workplace emergencies and medical incidents.",
      duration: "3 days",
      certification: "First aid certificate",
      level: "Beginner",
      icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="section-title">Our Training Courses</h1>
          <p className="section-subtitle">
            Comprehensive health and safety training programs designed to meet international standards
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div key={course.id} className="card overflow-hidden h-full flex flex-col">
              <div className="p-6 flex-grow">
                <div className="flex items-center mb-4">
                  <div className="bg-primary-100 rounded-lg p-3 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={course.icon} />
                    </svg>
                  </div>
                  <div>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                      {course.level}
                    </span>
                  </div>
                </div>
                
                <h2 className="text-xl font-bold text-gray-800 mb-3">{course.title}</h2>
                <p className="text-gray-600 mb-4">{course.description}</p>
                
                <div className="space-y-2 mb-6">
                  <div className="flex items-center text-sm text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span><strong>Duration:</strong> {course.duration}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span><strong>Certification:</strong> {course.certification}</span>
                  </div>
                </div>
              </div>
              
              <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                <button className="btn-primary w-full">
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 card p-8 text-center">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Need a Custom Training Program?</h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            We offer tailored training solutions for organizations with specific health and safety requirements.
            Contact us to discuss your needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button className="btn-primary">
              Request Custom Training
            </button>
            <button className="btn-secondary">
              Download Course Catalog
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}