import { useState } from "react";
import "./App.css";
import "@son-pablo/lib/dist/style.css";
import { Button } from "@son-pablo/lib";

const MODES = {
  LIGHT: "light",
  DARK: "dark",
};

function App() {
  const [mode, setMode] = useState(MODES.LIGHT);

  const toggleDarkMode = () => {
    setMode(mode === MODES.LIGHT ? MODES.DARK : MODES.LIGHT);
  };

  return (
    <main className="main-container">
      <div className={`flex align-center  ${mode} flex-col h-[100vh]`}>
        <h1 className="text-3xl font-bold underline">
          Playground React + Vite + POC Shadcn wrapped lib
        </h1>
        <br />
        <div className="py-4 flex  justify-center">
          <Button onClick={toggleDarkMode}>Toggle Dark Mode</Button>
        </div>
        <div className="py-4 flex  justify-center">
          <Button
            variant="destructive"
            className="text-orange-500"
            onClick={() => console.log("clic")}
          >
            Destructive button
          </Button>
        </div>
      </div>
    </main>
  );
}

export default App;
