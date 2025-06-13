import React from 'react'

const Header = () => {
  return (
    <div className="flex justify-between items-center">
      <h1 className="text-4xl m-4 font-bold font-stretch-140% text-[#353839]">
        Habit Tracker
      </h1>
      <img
        className="profile-image"
        src="../../public/images/2324000719.png"
        alt="profile image of user"
      />
    </div>
  );
}

export default Header