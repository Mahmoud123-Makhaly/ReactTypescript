import React, { useState } from "react";
import { AiTwotoneDelete } from "react-icons/ai";
const Content = () => {
  const [items, setItems] = useState([
    {
      id: 1,
      checked: true,
      item: "One half pound bag of Cocoa Covered Almonds Unsalted",
    },
    {
      id: 2,
      checked: false,
      item: "Item 2",
    },
    {
      id: 3,
      checked: false,
      item: "Item 3",
    },
  ]);
  return (
    <main style={{ textAlign: "center" }}>
      <div className="container">
        <ul>
          {items.map((item) => {
            return (
              <li
                style={{ display: "flex", alignItems: "center" }}
                className="my-4"
                key={item.id}>
                <div>
                  <input type="checkbox" checked={item.checked} />
                  <label>{item.item}</label>
                </div>
      <AiTwotoneDelete />
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
};

export default Content;
