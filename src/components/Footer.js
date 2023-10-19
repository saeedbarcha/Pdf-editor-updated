import React, { useRef, useState } from "react";
import { useDrop, useDrag } from "react-dnd";
import "react-resizable/css/styles.css";

function DraggableElement({ element, index, moveElement, setFooterElements }) {
  const ref = useRef(null);
  const [, drag] = useDrag({
      type: "ELEMENT",
      item: { index }
  });

  const [, drop] = useDrop({
    accept: "ELEMENT",
    drop: (draggedItem) => {
        console.log("........draggedItem.....", draggedItem.index)
        moveElement(draggedItem.index, index);
        return { handled: true }; 
    }
  });

  drag(drop(ref));
  return <div ref={ref}>{element.content}</div>;
}

function Footer({ onDrop, footerElements, setFooterElements }) {
    const [bodyHeight, setBodyHeight] = useState(204);
    const [canvasHeight, setCanvasHeight] = useState(138);
    const elementHeight = 138;

    console.log("elements............", footerElements);

    const moveElement = (fromIndex, toIndex) => {
        const updatedElements = [...footerElements];
        const [movedElement] = updatedElements.splice(fromIndex, 1);
        updatedElements.splice(toIndex, 0, movedElement);
        setFooterElements(updatedElements);
    };

    const [, dropRef] = useDrop({
        accept: "ELEMENT",
        drop: (item, monitor) => {
          // Check if the drop was handled by a DraggableElement
          if (monitor.getDropResult() && monitor.getDropResult().handled) {
            return;
          }

          // If not, and if it's a new item from the sidebar
          if (typeof item.index === 'undefined') {
            if(item.name === "Text"){

            setCanvasHeight((prevHeight) => prevHeight + elementHeight);
            setBodyHeight((prevHeight) => prevHeight + elementHeight);
            onDrop(item);
            }
          }
        }
    });

    let canvasBg = footerElements.length === 0 ? {
        width: "818px",
        height: "auto",
        minHeight: "138px",
        backgroundColor: "#fff",
        border: "1px dashed #3A6B88",
        borderRadius: "2px",
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        justifyContent: "center",
        gap: "8px"
    } : {
        width: "818px",
        height: "auto",
        minHeight: `${canvasHeight}px`,
        border: "none",
        borderRadius: "2px",
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        justifyContent: "center",
        gap: "8px",
        backgroundColor: "#F6F6F6"
    };

    return (
        <div style={{ height: "auto", minHeight: `${bodyHeight}px`, width: "834px", background: "#F6F6F6", display: "flex", flexDirection: "column", alignContent: "center", borderRadius: "4px", padding: "16px 8px", lineHeight: "16.94px" }}>
            <p style={{ fontWeight: "600", fontSize: "14px", color: "#3A6B88" }}>Footer</p>
            <div ref={dropRef} style={canvasBg}>
                {footerElements.length === 0 ? (
                    <p style={{ textAlign: "center", color: "#3F3F3F" }}>Drag and drop an element within this area.</p>
                ) : (
                  footerElements.map((element, index) => (
                        <DraggableElement key={index} index={index} element={element} moveElement={moveElement} setFooterElements={setFooterElements} />
                    ))
                )}
            </div>
        </div>
    );
}

export default Footer;


















