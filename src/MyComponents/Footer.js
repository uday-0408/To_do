import React from "react";

export default function Footer(props) {
  // var todos=props.todos
  let footerStyle = {
    position: "relative",
    marginTop: "auto", // pushes footer down in flex layouts
    width: "100%",
    height: "60px",
    backgroundColor: "#343a40", // dark professional shade (Bootstrap dark)
    color: "#ffffff", // white text
    display: "flex", // flex layout for alignment
    alignItems: "center", // vertically center content
    justifyContent: "center", // horizontally center content
    fontSize: "14px", // professional text size
    fontFamily: "'Segoe UI', sans-serif",
    boxShadow: "0 -1px 5px rgba(0, 0, 0, 0.1)", // soft top shadow
  };

  return (
    <footer className="bg-dark text-light py-3" style={footerStyle}>
      <h1>Footer</h1>
    </footer>
  );
}
