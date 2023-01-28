import React, { useEffect, useState } from "react";
import axios from "axios";
import { ChatState } from "../context/ChatContext";
import SideDrawer from "../components/Others/SideDrawer";
import MyChat from "../components/Others/MyChat";
import ChatBox from "../components/Others/ChatBox";
import { Box } from "@chakra-ui/react";

const ChatPage = () => {
  const [fetchAgain, setFetchAgain] = useState(false);
  const { user, setUser } = ChatState();
  return (
    <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Box
        display="flex"
        justifyContent="space-between"
        w="100%"
        h="91.5vh"
        p="10px"
        // style={{ display: "flex", justifyContent: "space-between" }}
      >
        {user && <MyChat fetchAgain={fetchAgain} />}
        {user && (
          <ChatBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
        )}
      </Box>
    </div>
  );
};

export default ChatPage;
