import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="p-4 text-white bg-blue-600 shadow-md">
      <div className="container flex items-center justify-between mx-auto">
        <h1 className="text-xl font-bold">RBAC System</h1>
        <div className="space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/login" className="hover:underline">Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;