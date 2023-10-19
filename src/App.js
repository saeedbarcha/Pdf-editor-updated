import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import CanvasSection from "./screen/CanvasSection";
import "./assets/styles/index.css";

function App() {
  return (
    <>
        <DndProvider backend={HTML5Backend}>
        <CanvasSection />
      </DndProvider>
    </>
  );
}

export default App;
