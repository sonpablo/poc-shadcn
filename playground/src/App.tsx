import { useState } from "react";
import "./App.css";

const MODES = {
  LIGHT: "light",
  DARK: "dark",
};

function App() {
  const [mode] = useState(MODES.LIGHT);

  return (
    <main className="main-container">
      <div className={`flex align-center  ${mode} flex-col h-[100vh]`}>
        <h1 className="text-3xl font-bold underline">
          Playground React + Vite + POC Shadcn wrapped lib
        </h1>
      </div>
    </main>
  );
}

export default App;
