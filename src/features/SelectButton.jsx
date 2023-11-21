import React from "react";

function SelectButton({ children, selected, onClick }) {
  return (
    <>
      <span
        onClick={onClick}
        style={{
          cursor: "pointer",
          backgroundColor: selected ? "#ccf5ff" : "",
          padding: 20,
          fontFamily: "Oswald",
          borderRadius: 2,
        }}
      >
        {children}
      </span>
    </>
  );
}

export default SelectButton;
