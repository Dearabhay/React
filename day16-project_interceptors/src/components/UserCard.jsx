import React from "react";

const UserCard = ({user}) => {
  // Sample user object based on your API response structure
 

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
      {/* Header Profile Section */}
      <div className="flex flex-col sm:flex-row items-center gap-6 pb-6 border-b border-gray-100">
        <div className="w-20 h-20 rounded-full bg-blue-600 text-white text-2xl font-bold flex items-center justify-center uppercase shadow-md shadow-blue-200">
          {user.name.firstname[0]}
          {user.name.lastname[0]}
        </div>
        <div className="text-center sm:text-left">
          <h2 className="text-2xl font-bold text-gray-800 capitalize">
            {user.name.firstname} {user.name.lastname}
          </h2>
          <p className="text-sm text-blue-600 font-medium">@{user.username}</p>
          <span className="inline-block mt-2 px-3 py-1 bg-gray-100 text-gray-600 text-xs font-semibold rounded-full">
            User ID: #{user.id}
          </span>
        </div>
      </div>

      {/* Grid Layout for Details */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {/* Contact Details Card */}
        <div className="bg-gray-50 p-5 rounded-xl border border-gray-100 space-y-3">
          <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">
            Contact Information
          </h3>
          <div>
            <span className="text-xs text-gray-500 block">Email Address</span>
            <span className="text-sm font-medium text-gray-800">{user.email}</span>
          </div>
          <div>
            <span className="text-xs text-gray-500 block">Phone Number</span>
            <span className="text-sm font-medium text-gray-800">{user.phone}</span>
          </div>
        </div>

        {/* Address Details Card */}
        <div className="bg-gray-50 p-5 rounded-xl border border-gray-100 space-y-3">
          <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-2">
            Address Details
          </h3>
          <div>
            <span className="text-xs text-gray-500 block">Street & Number</span>
            <span className="text-sm font-medium text-gray-800 capitalize">
              {user.address.number} {user.address.street}
            </span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <div>
              <span className="text-xs text-gray-500 block">City</span>
              <span className="text-sm font-medium text-gray-800 capitalize">
                {user.address.city}
              </span>
            </div>
            <div>
              <span className="text-xs text-gray-500 block">Zip Code</span>
              <span className="text-sm font-medium text-gray-800">
                {user.address.zipcode}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Geolocation & Coordinates Footer */}
      <div className="mt-6 bg-blue-50 p-4 rounded-xl border border-blue-100 flex flex-col sm:flex-row justify-between items-center text-sm text-blue-900 gap-2">
        <div className="flex items-center gap-2">
          <span className="font-semibold">Coordinates:</span>
          <span>
            Lat: {user.address.geolocation.lat}, Long: {user.address.geolocation.long}
          </span>
        </div>
        <a
          href={`https://maps.google.com/?q=${user.address.geolocation.lat},${user.address.geolocation.long}`}
          target="_blank"
          rel="noreferrer"
          className="text-xs font-semibold bg-blue-600 text-white px-3 py-1.5 rounded-lg hover:bg-blue-700 transition"
        >
          View on Map
        </a>
      </div>
    </div>
  );
};

export default UserCard;