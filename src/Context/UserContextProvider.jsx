


 import React from 'react'
 import PropTypes from "prop-types";  // Import PropTypes
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
  const [user, setUser] = React.useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

// Add prop types validation for 'children'
UserContextProvider.propTypes = {
  children: PropTypes.node.isRequired,  // Validate that 'children' is a node (React element or any renderable content)
};

export default UserContextProvider;