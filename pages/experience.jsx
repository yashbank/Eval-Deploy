import React from "react";

const Experience = () => {
  return (
    <div>
      {" "}
      <div
        style={{
          border: "1px solid yellow",
          width: "100%",
          height: "40%",
          padding: "10px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: "35px",
        }}
      >
        <h1 style={{ fontSize: "22px" }}>Education and Experience</h1>
        <div style={{ display: "flex", fontSize: "22px", gap: "15px" }}>
          <p
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            1
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: "20px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <p
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Student At Masai School
            </p>
            <p
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              July-2022 - Present
            </p>
          </div>
        </div>
        <div style={{ display: "flex", fontSize: "22px", gap: "15px" }}>
          <p
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            2
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: "20px",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <p
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              MIT College Aurangabad
            </p>
            <p
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Aug-2020 - Present
            </p>
          </div>
        </div>
        <div style={{ display: "flex", fontSize: "22px", gap: "15px" }}>
          <p
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            3
          </p>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontSize: "20px",
              justifyContent: "center",
              alignItems: "center",
              // border: "1px solid grey"
            }}
          >
            <p
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Senior Digital Marketing Expert
            </p>
            <p
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              Jan-2020 - Nov 2020
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
