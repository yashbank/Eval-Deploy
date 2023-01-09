import { useRouter } from "next/router";
import React from "react";

const Navbar = () => {
  const router = useRouter();
  const gotohome = () => {
    router.push("/");
  };
  const gotoprojects = () => {
    router.push("/projects");
  };
  const gotoex = () => {
    router.push("/experience");
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          width: "40%",
        }}
      >
        <h1
          style={{
            cursor: "pointer",
          }}
          onClick={gotohome}
        >
          Yash Bankar
        </h1>
        <h1
          style={{
            cursor: "pointer",
          }}
          onClick={gotoprojects}
        >
          Projects
        </h1>
        <h1
          style={{
            cursor: "pointer",
          }}
          onClick={gotoex}
        >
          Experience
        </h1>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          width: "25%",
        }}
      >
        <img
          style={{
            width: "20%",
          }}
          src="https://banner2.cleanpng.com/20180405/ale/kisspng-computer-icons-icon-design-sun-png-5ac5ae00d2d651.7317821815229045768636.jpg"
          alt="imgsun"
        />
        <img
          style={{
            width: "20%",
          }}
          src="https://avatars.githubusercontent.com/u/110368244?v=4"
          alt="avatar"
        />
      </div>
    </div>
  );
};

export default Navbar;
