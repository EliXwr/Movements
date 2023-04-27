import React, { useState } from "react";
import firebase from './firebaseConfig';

import GestureHandler from "./GestureHandler";
import RightView from "./RightView";
import LeftView from "./LeftView";
import TopView from "./TopView";
import BottomView from "./BottomView";
import CenterView from "./CenterView";

export default function App() {
  const views = {
    center: { left: "left", right: "right", up: "top", down: "bottom" },
    left: { right: "center" },
    right: { left: "center" },
    top: { down: "center" },
    bottom: { up: "center" },
  };

  const [activeView, setActiveView] = useState("center");

  const handleSwipe = (direction) => {
    console.log("Gesto detectado:", direction); // Agrega esta línea
    setActiveView((currentView) => {
      const newView = views[currentView][direction];
      console.log("Vista actual:", currentView, "Nueva vista:", newView); // Agrega esta línea
      return newView ? newView : currentView;
    });
  };

  return ( // Agrega el componente GestureHandler
    <GestureHandler
      onSwipeLeft={() => handleSwipe("left")}
      onSwipeRight={() => handleSwipe("right")}
      onSwipeUp={() => handleSwipe("up")}
      onSwipeDown={() => handleSwipe("down")}
    >
      {activeView === "right" && <LeftView />}
      {activeView === "left" && <RightView />}
      {activeView === "top" && <BottomView />}
      {activeView === "bottom" && <TopView />}
      {activeView === "center" && <CenterView />}
    </GestureHandler>
  );
}
