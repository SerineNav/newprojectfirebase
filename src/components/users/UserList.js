import React from "react";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";

import UserContent from "./UserContent";

function UserList({ users }) {
  return (
    <div>
      {users &&
        users.map((user) => {
          return (
            <Link to={"/user/" + user.id} key={user.id}>
              <UserContent user={user} />
            </Link>
          );
        })}
    </div>
  );
}

export default UserList;
