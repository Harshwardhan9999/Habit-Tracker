import React from 'react'
import { logout } from './firebase/logout'

const LogoutButton = () => {
  return (
    <button
      onClick={logout}
      className="px-4 py-2 bg-red-500 text-white rounded-md shadow hover:bg-red-600"
    >
      Logout
    </button>
  );
}

export default LogoutButton