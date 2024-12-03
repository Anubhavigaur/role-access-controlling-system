import React from "react";

const Home = () => {
  return (
    <div className="container py-20 mx-auto text-center animate-fadeIn">
      <h2 className="text-4xl font-semibold text-gray-800">Welcome to the RBAC System</h2>
      <p className="mt-4 text-gray-600">
        This is a Role-Based Access Control System where access is granted based on user roles.
      </p>
      <div className="mt-6">
        <p className="text-lg text-blue-600">Log in to access your dashboard.</p>
      </div>
    </div>
  );
};

export default Home;
