import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
const Header = ({logoutHandler}) => {
  const { user } = useSelector((state) => state?.ReducerUser);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        padding: "10px",
        border: "1px solid black",
      }}
    >
      <Link to="/">sellmycar</Link>
      <Link to="/addproduct">add product</Link>
      <Link to="/inventory">inventory</Link>
      {user ? <Link to="/profile">{user?.name}</Link> : <Link to="/signup">sign up</Link>}
      {!user ? (
        <Link to="/login">login</Link>
      ) : (
        <Link onClick={logoutHandler}>logout</Link>
      )}
    </div>
  );
};

export default Header;
