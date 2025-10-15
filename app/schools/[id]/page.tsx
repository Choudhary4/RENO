'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';

type School = {
  id: number;
  name: string;
  address: string;
  city: string;
  state: string;
  contact: string;
  image: string;
  email_id: string;
  created_at: string;
};

export default function SchoolDetails() {
  const params = useParams();
  const router = useRouter();
  const [school, setSchool] = useState<School | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (params.id) {
      fetchSchool();
    }
  }, [params.id]);

  const fetchSchool = async () => {
    try {
      const response = await fetch(`/api/schools/${params.id}`);
      if (response.ok) {
        const data = await response.json();
        setSchool(data);
      } else {
        console.error('School not found');
      }
    } catch (error) {
      console.error('Error fetching school:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-gray-500">Loading school details...</div>
      </div>
    );
  }

  if (!school) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-500 text-lg mb-4">School not found</p>
          <Link href="/showSchools" className="text-blue-600 hover:text-blue-700">
            Back to Schools
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <button
            onClick={() => router.back()}
            className="flex items-center text-gray-600 hover:text-gray-900 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Schools
          </button>
        </div>

        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          {/* School Image */}
          <div className="relative h-64 sm:h-80 bg-gray-200">
            {school.image && school.image.trim() !== '' ? (
              <img
                src={school.image}
                alt={school.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                }}
              />
            ) : (
              <div className="flex items-center justify-center h-full">
                <svg 
                  className="w-24 h-24 text-gray-400"
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" 
                  />
                </svg>
              </div>
            )}
          </div>

          {/* School Details */}
          <div className="p-6 sm:p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">{school.name}</h1>

            <div className="space-y-4">
              {/* Address */}
              <div className="flex items-start">
                <svg className="w-6 h-6 text-gray-400 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p className="text-sm font-medium text-gray-500">Address</p>
                  <p className="text-gray-900">{school.address}</p>
                </div>
              </div>

              {/* City & State */}
              <div className="flex items-start">
                <svg className="w-6 h-6 text-gray-400 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <div>
                  <p className="text-sm font-medium text-gray-500">Location</p>
                  <p className="text-gray-900">{school.city}, {school.state}</p>
                </div>
              </div>

              {/* Contact */}
              <div className="flex items-start">
                <svg className="w-6 h-6 text-gray-400 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <p className="text-sm font-medium text-gray-500">Contact Number</p>
                  <a href={`tel:${school.contact}`} className="text-blue-600 hover:text-blue-700">
                    {school.contact}
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start">
                <svg className="w-6 h-6 text-gray-400 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <p className="text-sm font-medium text-gray-500">Email</p>
                  <a href={`mailto:${school.email_id}`} className="text-blue-600 hover:text-blue-700">
                    {school.email_id}
                  </a>
                </div>
              </div>

              {/* Created Date */}
              <div className="flex items-start">
                <svg className="w-6 h-6 text-gray-400 mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <div>
                  <p className="text-sm font-medium text-gray-500">Added On</p>
                  <p className="text-gray-900">
                    {new Date(school.created_at).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit'
                    })}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-6 flex gap-4">
          <Link
            href="/showSchools"
            className="flex-1 bg-gray-100 text-gray-900 py-3 px-6 rounded-md hover:bg-gray-200 transition-colors text-center font-medium"
          >
            View All Schools
          </Link>
          <Link
            href="/addSchool"
            className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-md hover:bg-blue-700 transition-colors text-center font-medium"
          >
            Add Another School
          </Link>
        </div>
      </div>
    </div>
  );
}
