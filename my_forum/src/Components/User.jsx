import React, { Component } from "react";

const User = props => {
  return (
    <tr>
      <td>{props.user._id}</td>
      <td>{props.user.user_name}</td>
    </tr>
  );
};

export default User;
