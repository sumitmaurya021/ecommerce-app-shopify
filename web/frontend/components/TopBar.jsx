import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

export function TopBar() {
  const [name, setName] = useState("");

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
        console.log("error:", error);
      }
    };

    getStoreInfo();
  }, []);

  return (
    <div className="topbar-section">
      <div className="logo-block">
        <img
          className="logo"
          src="https://images-platform.99static.com//y0rb96b9CUsj6F8lqnkVOPlBuyY=/0x0:999x999/fit-in/500x500/99designs-contests-attachments/109/109048/attachment_109048124"
          alt="logo"
        />
        <h1 className="text-bold h4">{name}</h1>

        <NavLink to="/">Sales</NavLink>
        <NavLink to="/product">Products</NavLink>
      </div>
    </div>
  );
}
