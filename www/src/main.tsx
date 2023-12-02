import * as React from "react";
import { createRoot } from "react-dom/client";
import { Math } from "rust-wasm";

const Main = () => {
  return (
    <div>
      <div>Hello rust-wasm</div>
      <button
        onClick={() => {
          console.log(Math.add(2.3, 2.4));
          console.log(2.3 + 2.4);
        }}
      >
        add
      </button>
    </div>
  );
};

const el = document.getElementById("root")!;

const a = createRoot(el);
a.render(<Main />);
