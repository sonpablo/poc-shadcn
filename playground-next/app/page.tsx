"use client";
import "@son-pablo/lib/dist/style.css";
import "./page.css";
import { Button } from "@son-pablo/lib";
import { useState } from "react";

const MODES = {
  LIGHT: "light",
  DARK: "dark",
};

export default function Home() {
  const [mode, setMode] =
    typeof window !== "undefined"
      ? useState(MODES.LIGHT)
      : [MODES.LIGHT, () => {}];

  const toggleDarkMode = () => {
    setMode((prevMode) =>
      prevMode === MODES.LIGHT ? MODES.DARK : MODES.LIGHT
    );
  };

  return (
    <main className="main-container ">
      <div className={`flex align-center ${mode} flex-col h-[100vh]`}>
        <h1 className="text-3xl font-bold underline">
          Playground React + Vite + POC Shadcn wrapped lib
        </h1>
        <br />
        <div className="flex justify-center">
          <Button variant="secondary" onClick={toggleDarkMode}>
            Toggle Dark Mode
          </Button>
        </div>
        <div className="py-4 flex justify-center">
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
