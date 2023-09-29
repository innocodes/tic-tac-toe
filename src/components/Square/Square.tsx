import React from "react";
import "./Square.css";

export default function Square({ value }: any) {
  return (
    <>
      <button className="square">{value}</button>
    </>
  );
}
