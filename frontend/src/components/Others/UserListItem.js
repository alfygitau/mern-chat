import React from "react";
import { ChatState } from "../../context/ChatContext";
import { Avatar, Text, Box } from "@chakra-ui/react";

const UserListItem = ({ user, handleAccess }) => {
//   const { user } = ChatState();
  return (
    <Box
      onClick={handleAccess}
      cursor="pointer"
      bg="#E8E8E8"
      _hover={{
        background: "#38B2AC",
        color: "white",
      }}
      w="100%"
      display="flex"
      alignItems="center"
      color="black"
      px={3}
      py={2}
      mb={2}
      borderRadius="lg"
      style={{ display: "flex", alignItems: "center" }}
    >
      <Avatar
        mr={2}
        size="sm"
        cursor="pointer"
        name={user.name}
        src={user.pic}
      />
      <Box>
        <Text>{user.name}</Text>
        <Text fontSize="xs">
          <b>Email : </b>
          {user.email}
        </Text>
      </Box>
    </Box>
  );
};

export default UserListItem;
