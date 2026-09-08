import React, { useState, useEffect } from "react";
import swal from "sweetalert";

const UserDetail = ({ selectedUser, setSelectedUser, handleUpdateUser }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedData, setEditedData] = useState(selectedUser);

  const handleEdit = () => {
    setIsEditing(true);
  };
  useEffect(() => {
    setEditedData(selectedUser);
    setIsEditing(false);
  }, [selectedUser]);
  const handleFocus = (e) => {
    e.target.select();
  };

  return (
    <div className="flex flex-col items-center transition-all duration-[1000ms] ease-in-out">
      {/* รูปโปรไฟล์ */}
      <div className="flex flex-col items-center w-full max-w-md">
        <img
          src={selectedUser.image || `https://i.pravatar.cc/150?img=${selectedUser.id}`}
          alt="Profile"
          className="w-32 h-32 rounded-full border-4 border-blue-500 mb-6 shadow-lg"
        />

        {/* ชื่อ */}
        {isEditing ? (
          <div>
            <input
              type="text"
              value={editedData.name}
              onChange={(e) =>
                setEditedData({ ...editedData, name: e.target.value })
              }
              onFocus={handleFocus}
              className="border  rounded p-2 text-gray-400 w-full"
            ></input>
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-bold mb-2 dark:text-white">
              {selectedUser.name}
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-1">
              ID : {selectedUser.id}
            </p>
          </div>
        )}

        {/*  Email */}

        {isEditing ? (
          <div>
            <input
              type="email"
              value={editedData.email}
              onFocus={handleFocus}
              onChange={(e) =>
                setEditedData({ ...editedData, email: e.target.value })
              }
              className="mt-2 border  rounded p-2 text-gray-400 w-full"
            ></input>
          </div>
        ) : (
          <div>
            <p className="text-lg text-gray-600 dark:text-gray-300 ">
              Email : {selectedUser.email}
            </p>
          </div>
        )}

        {/* ที่อยู่ */}
        {isEditing ? (
          <input
            type="text"
            value={
              typeof editedData.address === "object"
                ? editedData.address?.street
                : editedData.address
            }
            onFocus={handleFocus}
            onChange={(e) =>
              setEditedData({
                ...editedData,
                address: { ...editedData.address, street: e.target.value },
              })
            }
            className=" mt-2 border  rounded p-2 text-gray-400 w-full"
          />
        ) : (
          <p className="text-xs dark:text-white ">
            {typeof selectedUser.address === "object"
              ? selectedUser.address?.street
              : selectedUser.address}
          </p>
        )}

        {/* โทรศัพท์ */}
        {isEditing ? (
          <input
            type="text"
            value={editedData.phone || ""}
            onFocus={handleFocus}
            onChange={(e) =>
              setEditedData({ ...editedData, phone: e.target.value })
            }
            className="mt-2 border rounded p-2 text-gray-400 w-full"
          />
        ) : (
          <p className="text-xs dark:text-white">{selectedUser.phone}</p>
        )}

        {/* เว็บไซต์ */}
        {isEditing ? (
          <input
            type="url"
            value={editedData.website || ""}
            onFocus={handleFocus}
            onChange={(e) =>
              setEditedData({ ...editedData, website: e.target.value })
            }
            className="mt-2 border rounded p-2 text-gray-400 w-full"
          />
        ) : (
          <p className="text-xs dark:text-white">{selectedUser.website}</p>
        )}

        {/* บริษัท */}
        {isEditing ? (
          <input
            type="text"
            value={
              typeof editedData.company === "object"
                ? editedData.company?.name || ""
                : editedData.company || ""
            }
            onFocus={handleFocus}
            onChange={(e) =>
              setEditedData({
                ...editedData,
                company:
                  typeof editedData.company === "object"
                    ? { ...editedData.company, name: e.target.value }
                    : e.target.value,
              })
            }
            className="mt-2 border rounded p-2 text-gray-400 w-full"
          />
        ) : (
          <p className="text-xs dark:text-white">
            {typeof selectedUser.company === "object"
              ? selectedUser.company?.name
              : selectedUser.company}
          </p>
        )}

        {/* รูปภาพ */}
        {isEditing ? (
          <input
            type="url"
            value={editedData.image || ""}
            onChange={(e) => setEditedData({ ...editedData, image: e.target.value})}
            className="mt-2 border rounded p-2 text-gray-400 w-full"
            placeholder="ใส่ลิง์รูปภาพ"
          />
        ) : (
            null
        )}
      </div>

      {/* ปุ่มแก้ไข, บันทึก, ยกเลิก */}
      {isEditing ? (
        <div className="flex gap-2 mt-4">
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded  "
          onClick={() => {
            handleUpdateUser(editedData);
            setSelectedUser(editedData);
            setIsEditing(false);
            swal("สำเร็จ", "บันทึกข้อมูลเรียบร้อยแล้ว", "success");
          }}
          >
            บันทึกข้อมูล
          </button>

          <button
            className="bg-red-500 hover:bg-red-700  text-white font-bold py-2 px-4 rounded"
            onClick={() => setIsEditing(false)}
          >
            ยกเลิก
          </button>
        </div>
      ) : (
        <button
          onClick={() => handleEdit()}
          className="bg-yellow-400 hover:bg-blue-700 text-gray-800 font-bold py-2 px-4 rounded mt-4 "
        >
          แก้ไขข้อมูล
        </button>
      )}
    </div>
  );
};

export default UserDetail;
