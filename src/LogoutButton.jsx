import React from 'react'
import { logout } from './firebase/logout'

const LogoutButton = () => {
  return (
    <button
      onClick={logout}
      className="px-6  m-5 bg-red-500 text-white rounded-md shadow hover:bg-red-600"
    >
      Logout
    </button>
  );
}

export default LogoutButton