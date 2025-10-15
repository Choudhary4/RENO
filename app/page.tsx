import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-8 text-center">
        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          School Management
        </h1>
        <p className="text-gray-600 mb-8">
          Manage school information efficiently
        </p>
        
        <div className="space-y-4">
          <Link 
            href="/addSchool"
            className="block w-full bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors font-medium"
          >
            Add New School
          </Link>
          
          <Link 
            href="/showSchools"
            className="block w-full bg-gray-100 text-gray-900 py-3 px-6 rounded-md hover:bg-gray-200 transition-colors font-medium"
          >
            View All Schools
          </Link>
        </div>
      </div>
    </div>
  );
}
