import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/Images/logo.jpg";

export function TopBar() {
  const [ name, setName ] = React.useState("");

  useEffect(() => {

    const getStoreInfo = async () => {
      try {
        const res = await fetch("/api/store/info", {
          method: "GET",
        });

        const storeData = await res.json();
        setName(storeData.data[0].name);
        console.log("store data:", storeData);

      } catch (error) {
        console.error("error:", error);
      }
    };

    getStoreInfo();

  });

  return (
    <div className="topbar-section">
      <div className="logo-block">
        <img className="logo" src={"https://images-platform.99static.com//y0rb96b9CUsj6F8lqnkVOPlBuyY=/0x0:999x999/fit-in/500x500/99designs-contests-attachments/109/109048/attachment_109048124"} alt="logo image" />
        <h1 className="text-bold h4">{name}</h1>
        <NavLink to="/">Sales</NavLink>
        <NavLink to="/products">Products</NavLink>
      </div>
    </div>
  );
}