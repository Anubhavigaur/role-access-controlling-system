// import React from "react";

// const UserDashboard = () => {
//   return (
//     <div className="container py-10 mx-auto animate-fadeIn">
//       <h2 className="text-3xl font-semibold text-gray-800">User Dashboard</h2>
//       <p className="mt-4">View your personal data and settings.</p>
//       <div className="mt-6">
//         <h3 className="text-xl font-semibold">My Data</h3>
//         <p className="mt-2 text-gray-600">Here you can view your personal information.</p>
//         {/* Add features specific to regular users */}
//       </div>
//     </div>
//   );
// };

// export default UserDashboard;



import React from "react";
import { useUsers } from "../context/UserContext";

const UserDashboard = () => {
  const { users } = useUsers();

  return (
    <div className="container py-10 mx-auto animate-fadeIn">
      <h2 className="text-3xl font-semibold text-gray-800">User Dashboard</h2>
      <p className="mt-4">Users have limited access to view their own data.</p>
      <div className="mt-6">
        <h3 className="text-xl font-semibold">My Information</h3>
        <table className="w-full mt-4 bg-white border">
          <thead>
            <tr>
              <th className="px-4 py-2 border">User ID</th>
              <th className="px-4 py-2 border">Role</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td className="px-4 py-2 border">{user.id}</td>
                <td className="px-4 py-2 border">{user.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserDashboard;