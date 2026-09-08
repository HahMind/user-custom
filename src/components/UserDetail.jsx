import React from 'react'

const UserDetail = ({ selectedUser, setSelectedUser }) => {
  return (
    <div>
        <div className="flex flex-col items-center w-full max-w-md">
                  <img
                    src={`https://i.pravatar.cc/150?img=${selectedUser.id}`}
                    alt="Profile"
                    className="w-32 h-32 rounded-full border-4 border-blue-500 mb-6 shadow-lg"
                  />
                  <h2 className="text-2xl font-bold mb-2 dark:text-white">
                    {selectedUser.name}
                  </h2>
                  <p className="text-lg text-gray-600 dark:text-gray-300 mb-1">
                    ID : {selectedUser.id}
                  </p>
                  <p className="text-lg text-gray-600 dark:text-gray-300 ">
                    Email : {selectedUser.email}
                  </p>
                  <p className="text-xs dark:text-white ">
                    {typeof selectedUser.address === "object"
                      ? selectedUser.address?.street
                      : selectedUser.address}
                  </p>
                  <p className="text-xs dark:text-white ">
                    {selectedUser.phone}
                  </p>
                  <p className="text-xs dark:text-white ">
                    {selectedUser.website}
                  </p>
                  <p className="text-xs dark:text-white ">
                    {typeof selectedUser.company === "object"
                      ? selectedUser.company?.name
                      : selectedUser.company}
                  </p>
                </div>
    </div>
  )
}

export default UserDetail