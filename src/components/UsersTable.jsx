import React from "react";

const UsersTable = ({ users, name }) => {
  return (
    <div className="table">
      <h1>List Users</h1>

      <ul>
        {users.map((user) => {
          return <li>{name}</li>;
        })}
      </ul>
    </div>
  );
};

export default UsersTable;
