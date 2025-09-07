import React, { useContext, useEffect, useState } from "react";
import assets from "../assets/assets";
import { ChatContext } from "../../context/ChatContext.js";
import { AuthContext } from "../../context/AuthContext";

const RightSidebar = () => {
  const { selectedUser, messages, showRightSidebar, setShowRightSidebar } = useContext(ChatContext);
  const { logout, onlineUsers } = useContext(AuthContext);
  const [msgImages, setMsgImages] = useState([]);

  useEffect(() => {
    setMsgImages(
      messages.length > 0 &&
        messages
          .reverse()
          .filter((msg) => msg.image)
          .map((msg) => msg.image)
    );
  }, [messages]);

  return (
    selectedUser &&
    showRightSidebar && ( // 👈 only render when open
      <div className="bg-[#8185B2]/10 text-white w-full relative overflow-y-scroll max-md:hidden">
        {/* Close button */}
        <button
          onClick={() => setShowRightSidebar(false)}
          className="absolute top-3 right-3 text-white bg-gray-700/50 p-2 rounded-full hover:bg-gray-600"
        >
          ✕
        </button>

        {/* Profile section */}
        <div className="pt-16 flex flex-col items-center gap-2 text-xs font-light mx-auto">
          <img
            src={selectedUser?.profilePic || assets.avatar_icon}
            alt=""
            className="w-20 aspect-[1/1] rounded-full"
          />
          <h1 className="px-10 text-xl font-medium mx-auto flex items-center gap-2">
            {onlineUsers.includes(selectedUser._id) ? (
              <p className="w-2 h-2 rounded-full bg-green-500"></p>
            ) : (
              <p className="w-2 h-2 rounded-full bg-red-500"></p>
            )}
            {selectedUser.fullName}
          </h1>
          <p className="px-10 mx-auto">{selectedUser.bio}</p>
        </div>

        <hr className="border-[#ffffff50] my-4" />

        {/* Media section */}
        <div className="px-5 text-xs">
          <p>Media</p>
          <div className="mt-2 h-full overflow-y-scroll grid grid-cols-2 gap-4 opacity-80">
            {msgImages.length > 0 &&
              msgImages.map((url, index) => (
                <div
                  key={index}
                  onClick={() => window.open(url)}
                  className="cursor-pointer rounded"
                >
                  <img src={url} alt="" className="h-full rounded-md" />
                </div>
              ))}
          </div>
        </div>

        {/* Logout button */}
        <button
          onClick={() => logout()}
          className="fixed bottom-5 right-0 transform -translate-x-1/2 bg-gradient-to-r from-purple-400 to-violet-600 text-white border-none text-sm font-light py-2 px-20 rounded-full cursor-pointer"
        >
          Logout
        </button>
      </div>
    )
  );
};

export default RightSidebar;
