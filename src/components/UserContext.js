import React from "react";

const UserContext = React.createContext("React Crash Course");
const UserProvider = UserContext.Provider;
const UserConsumer = UserContext.Consumer;

export { UserProvider, UserConsumer };
