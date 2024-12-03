



// import React, { useState } from "react";
// import { useUsers } from "../context/UserContext";

// const AdminDashboard = () => {
//   const { users, addUser } = useUsers();
//   const [editUser, setEditUser] = useState(null);
//   const [userData, setUserData] = useState({ id: "", password: "", role: "User" });

//   const handleAddOrUpdateUser = () => {
//     if (editUser) {
//       // Update user logic
//       const updatedUsers = users.map((user) =>
//         user.id === editUser.id ? { ...userData } : user
//       );
//       addUser(updatedUsers);
//       setEditUser(null);
//     } else {
//       // Add new user
//       addUser(userData);
//     }
//     setUserData({ id: "", password: "", role: "User" });
//   };

//   const handleEdit = (user) => {
//     setEditUser(user);
//     setUserData(user);
//   };

//   const handleDelete = (userId) => {
//     addUser(users.filter((user) => user.id !== userId));
//   };

//   return (
//     <div className="container py-10 mx-auto animate-fadeIn">
//       <h2 className="text-3xl font-semibold text-gray-800">Admin Dashboard</h2>
//       <p className="mt-4">Manage users, roles, and data.</p>
//       <div className="mt-6">
//         <h3 className="text-xl font-semibold">User Management</h3>
//         <div className="flex mt-4">
//           <input
//             type="text"
//             placeholder="User ID"
//             value={userData.id}
//             onChange={(e) => setUserData({ ...userData, id: e.target.value })}
//             className="p-2 mr-2 border border-gray-300 rounded"
//           />
//           <input
//             type="password"
//             placeholder="Password"
//             value={userData.password}
//             onChange={(e) => setUserData({ ...userData, password: e.target.value })}
//             className="p-2 mr-2 border border-gray-300 rounded"
//           />
//           <select
//             value={userData.role}
//             onChange={(e) => setUserData({ ...userData, role: e.target.value })}
//             className="p-2 border border-gray-300 rounded"
//           >
//             <option value="Admin">Admin</option>
//             <option value="Super User">Super User</option>
//             <option value="User">User</option>
//           </select>
//           <button
//             onClick={handleAddOrUpdateUser}
//             className="px-4 py-2 ml-4 text-white bg-green-600 rounded hover:bg-green-700"
//           >
//             {editUser ? "Update User" : "Add User"}
//           </button>
//         </div>
//         <table className="w-full mt-6 bg-white rounded shadow-md table-auto">
//           <thead>
//             <tr className="text-white bg-blue-600">
//               <th className="px-4 py-2">User ID</th>
//               <th className="px-4 py-2">Role</th>
//               <th className="px-4 py-2">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {users.map((user) => (
//               <tr key={user.id} className="text-center border-t">
//                 <td className="px-4 py-2">{user.id}</td>
//                 <td className="px-4 py-2">{user.role}</td>
//                 <td className="px-4 py-2">
//                   <button
//                     onClick={() => handleEdit(user)}
//                     className="px-2 py-1 mr-2 text-white bg-yellow-500 rounded"
//                   >
//                     Edit
//                   </button>
//                   <button
//                     onClick={() => handleDelete(user.id)}
//                     className="px-2 py-1 text-white bg-red-600 rounded"
//                   >
//                     Delete
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default AdminDashboard;




import React from "react";
import { useUsers } from "../context/UserContext";

const AdminDashboard = () => {
  const { users, addUser, deleteUser, updateUserRole } = useUsers();

  const handleAddUser = (newUser) => {
    addUser(newUser);
  };

  const handleDeleteUser = (id) => {
    deleteUser(id);
  };

  const handleUpdateRole = (id, newRole) => {
    updateUserRole(id, newRole);
  };

  return (
    <div className="container py-10 mx-auto animate-fadeIn">
      <h2 className="text-3xl font-semibold text-gray-800">Admin Dashboard</h2>
      <p className="mt-4">Admins have full access to manage users and view data.</p>
      <div className="mt-6">
        <h3 className="text-xl font-semibold">User Management</h3>
        <table className="w-full mt-4 bg-white border">
          <thead>
            <tr>
              <th className="px-4 py-2 border">User ID</th>
              <th className="px-4 py-2 border">Role</th>
              <th className="px-4 py-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td className="px-4 py-2 border">{user.id}</td>
                <td className="px-4 py-2 border"><select
                    value={user.role}
                    onChange={(e) => handleUpdateRole(user.id, e.target.value)}
                    className="p-1 border rounded"
                  >
                    <option value="User">User</option>
                    <option value="Super User">Super User</option>
                    <option value="Admin">Admin</option>
                  </select>
                </td>
                <td className="px-4 py-2 border">
                  <button
                    onClick={() => handleDeleteUser(user.id)}
                    className="px-2 py-1 text-white bg-red-500 rounded hover:bg-red-600"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* Add new user form here */}
      </div>
    </div>
  );
};

export default AdminDashboard;
                