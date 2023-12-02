import * as React from "react";
import { createRoot } from "react-dom/client";
import { Math } from "rust-wasm";

const Main = () => {
  return (
    <div>
      <div>Hello rust-wasm</div>
      <button
        onClick={() => {
          const r = new Math();
          console.log(r.add(10, 15));
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
