import { useRouter } from "next/router";
import React from "react";

const Navbar = ({ theme }) => {
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
        width: "99%",
        alignItems: "center",
        padding: "1%",
        border: "3px solid ",
        marginTop: "0",
        // backgroundColor: "lightgrey",
        // color: "black",
        borderTopLeftRadius: "20px",
        borderBottomRightRadius: "20px",
        margin: "1%",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          width: "60%",
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
          alignItems: "center",
        }}
      >
        <img
          style={{
            width: "20%",
            cursor: "pointer",
          }}
          onClick={theme}
          src="https://www.freeiconspng.com/thumbs/sun-icon/sun-icon-31.png"
          alt="imgsun"
        />
        <img
          style={{
            width: "20%",
            cursor: "pointer",
          }}
          src="https://avatars.githubusercontent.com/u/110368244?v=4"
          alt="avatar"
        />
      </div>
    </div>
  );
};

export default Navbar;
