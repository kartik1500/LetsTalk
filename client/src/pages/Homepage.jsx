import React, { useContext } from "react";
import Sidebar from "../components/Sidebar";
import ChatContainer from "../components/ChatContainer";
import RightSidebar from "../components/RightSidebar";
import { ChatContext } from "../../context/ChatContext.js";

const Homepage = () => {
  const { selectedUser, showRightSidebar } = useContext(ChatContext);

  return (
    <div className="w-full h-screen">
      <div
        className={`h-full border-2 border-gray-700 rounded-2xl overflow-hidden grid transition-all duration-300
        ${
          selectedUser
            ? showRightSidebar
              ? "grid-cols-[1fr_2fr_1fr]" // sidebar + chat + right sidebar
              : "grid-cols-[1fr_2fr]" // sidebar + chat only
            : "grid-cols-1 md:grid-cols-2" // default: sidebar + empty/chat
        }`}
      >
        {/* Left sidebar */}
        <Sidebar />

        {/* Chat container */}
        <ChatContainer />

        {/* Right sidebar (only shows if toggled) */}
        {showRightSidebar && <RightSidebar />}
      </div>
    </div>
  );
};

export default Homepage;
