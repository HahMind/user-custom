import React from 'react'

const AddUser = ({handleAddUser}) => {
  return (
    <button 
    type='button'
     className='bg-blue-500 px-4 py-2 rounded-lg text-white w-full'
     onClick={handleAddUser}
     >
      เพิ่มผู้ใช้
    </button>
  )
}

export default AddUser