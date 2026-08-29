import React from 'react'

const AddUser = ({handleAddUser}) => {
  return (
    <button 
    type='button'
     className='bg-green-400 px-4 py-2 w-full rounded-full text-white '
     onClick={handleAddUser}
     >
      เพิ่มผู้ใช้
    </button>
  )
}

export default AddUser