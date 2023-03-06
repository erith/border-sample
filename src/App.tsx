import { useState } from "react";
import reactLogo from "./assets/react.svg";
import watermelon from "./assets/watermelon.png";
import "./App.css";

type FruitItem = {
  seq: number;
  selected: boolean;
};

function App() {
  const initItems: FruitItem[] = [
    { seq: 1, selected: true },
    { seq: 2, selected: false },
    { seq: 3, selected: false },
  ];

  const [items, setSelected] = useState<FruitItem[]>(initItems);

  return (
    <div className="App">
      {items.map((v, idx) => {
        return (
          <div
            key={idx}
            className={v.selected ? "item selected" : "item"}
            onClick={(e) => {
              items.map((m) => (m.selected = false));
              items[idx].selected = !items[idx].selected;
              setSelected([...items]);
            }}
          >
            <img src={watermelon}></img>
          </div>
        );
      })}
    </div>
  );
}

export default App;
