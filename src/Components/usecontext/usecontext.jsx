import React, { createContext, useContext } from "react";
import './usecontext.css'


const UserContext = createContext({
  name: "Mohammed Ansar",
  age: 21,
  email: "ansar123@gmail.com",
});

const UserProfile = () => {
  const user = useContext(UserContext);

  return (
    <div className="container1">
      <h1>User Profile</h1>
      <p>Name: {user.name}</p>
      <p>Age: {user.age}</p>
      <p>Email: {user.email}</p>
    </div>
  );
};

const App = () => {
  const user = {
    name: "Mohammed Ansar",
    age: 21,
    email: "mohammedansar30@gmail.com",
  };

  return (
    <UserContext.Provider value={user}>
      <UserProfile />
    </UserContext.Provider>
  );
};

export default App;
