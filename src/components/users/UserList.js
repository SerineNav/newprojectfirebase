import React from "react";

import UserContent from "./UserContent";

function UserList({ users }) {
  return (
    <div>
      {users &&
        users.map((user) => {
          return <UserContent user={user} key={user.firstName} />;
        })}
    </div>
  );
}

export default UserList;
