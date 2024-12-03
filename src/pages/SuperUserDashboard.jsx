// import React from "react";

// const SuperUserDashboard = () => {
//   return (
//     <div className="container py-10 mx-auto animate-fadeIn">
//       <h2 className="text-3xl font-semibold text-gray-800">Super User Dashboard</h2>
//       <p className="mt-4">Access specific datasets and tools available for Super Users.</p>
//       <div className="mt-6">
//         <h3 className="text-xl font-semibold">Data Access</h3>
//         <p className="mt-2 text-gray-600">View and manage your assigned data here.</p>
//         {/* Add functionality to view datasets */}
//       </div>
//     </div>
//   );
// };

// export default SuperUserDashboard;



import React from "react";
import { useUsers } from "../context/UserContext";

const SuperUserDashboard = () => {
  const { users } = useUsers();

  return (
    <div className="container py-10 mx-auto animate-fadeIn">
      <h2 className="text-3xl font-semibold text-gray-800">Super User Dashboard</h2>
      <p className="mt-4">Super Users have elevated access to manage and view data.</p>
      <div className="mt-6">
        <h3 className="text-xl font-semibold">User Information</h3>
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

export default SuperUserDashboard;