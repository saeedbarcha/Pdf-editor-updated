import React, { useState, createContext } from "react";
import Sidebar from "./Sidebar";
import Body from "../components/Body";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { DragDropContext } from 'react-beautiful-dnd';

export const ElementContext = createContext();

const CanvasSection = () => {
  const [elements, setElements] = useState([]);

  const [headerElements, setHeaderElements] = useState([]);
  const [elementsBody, setElementsBody] = useState([]);
  const [footerElements, setFooterElements] = useState([]);


  const onDropHeader = (element) => {
    setHeaderElements((prev) => [...prev, element]);
  };

  // const onDropBody = (element) => {
  //   setElementsBody((prev) => [...prev, element]);
  // };

  const onDropBody = (element) => {
    setElements((prev) => [...prev, element]);
  };
 

  const onDropFooter = (element) => {
    setFooterElements((prev) => [...prev, element]);
  };
  
  const rearrange = (source, destination, droppableId) => {
    if (droppableId === 'header') {
        const newArr = Array.from(headerElements);
        const [removed] = newArr.splice(source.index, 1);
        newArr.splice(destination.index, 0, removed);
        setHeaderElements(newArr);
    } else if (droppableId === 'body') {
        const newArr = Array.from(elementsBody);
        const [removed] = newArr.splice(source.index, 1);
        newArr.splice(destination.index, 0, removed);
        setElementsBody(newArr);
    } else if (droppableId === 'footer') {
        const newArr = Array.from(footerElements);
        const [removed] = newArr.splice(source.index, 1);
        newArr.splice(destination.index, 0, removed);
        setFooterElements(newArr);
    }
};

const handleDragEnd = (result) => {
  const { source, destination, droppableId } = result;

  if (!destination) return;

  if (source.droppableId === destination.droppableId) {
      rearrange(source, destination, droppableId);
  } 
};

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div style={{ display: "flex", width:"1514px", height:"982px" }}>
        <div
          id="canvasArea"
          style={{
            minHeightheight: "982px",
            height:"auto",
            width: "1054px",
            padding: "48px 110px 48px 110px",
            gap:"24px",
            display:"flex",
            flexDirection:"column",
            alignItems:"center",
          }}
        >
          

          <Header onDrop={onDropHeader} headerElements={headerElements} setHeaderElements={setHeaderElements} />   

          <Body onDrop={onDropBody} elements={elements} setElements={setElements} />
          <Footer onDrop={onDropFooter} footerElements={footerElements} setFooterElements={setFooterElements} />   
      
        </div>
        <Sidebar />
      </div>
    </DragDropContext>
  );
};

export default CanvasSection;

