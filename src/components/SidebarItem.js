import React, { useRef } from "react";
import { BsImageFill, BsFillStarFill, BsTable } from "react-icons/bs";
import { PiTextAlignJustify } from "react-icons/pi";
import { useDrag } from "react-dnd";

function SidebarItem({ name, icon }) {
  const IconStyle = {
    width: "43px",
    height: "43px",
    color: "#3A6B88",
  };
  const [, ref1] = useDrag({
    type: "ELEMENT",
    item: { element:"element" },
  });

  const contentMap = {
    Text: (
      <div
      ref={ref1}
        style={{
          border: "1px solid #E9E9E9",
          width: "818px",
          height: "138px",
          textAlign: "center",
          borderRadius: "4px",
          backgroundColor: "#fff",
          padding: "24px",
          gap: "8px",
        }}
      >
        <div>
          <PiTextAlignJustify style={IconStyle} />
        </div>

        <p
          style={{
            margin: "0px",
            fontSize: "14px",
            color: "#3A6B88",
            fontWeight: "600",
            lineHeight: "16.94px",
          }}
        >
          {name}
        </p>
      </div>
    ),

    Images: (
      <div
      ref={ref1}
        style={{
          border: "1px solid #E9E9E9",
          width: "818px",
          height: "138px",
          textAlign: "center",
          borderRadius: "4px",
          backgroundColor: "#fff",
          padding: "24px",
          gap: "8px",
        }}
      >
        <div>
          <BsImageFill style={IconStyle} />
        </div>

        <p
          style={{
            margin: "0px",
            fontSize: "14px",
            color: "#3A6B88",
            fontWeight: "600",
            lineHeight: "16.94px",
          }}
        >
          {name}
        </p>
      </div>
    ),

    Table: (
      <div
      ref={ref1}
        style={{
          border: "1px solid #E9E9E9",
          width: "818px",
          height: "138px",
          textAlign: "center",
          borderRadius: "4px",
          backgroundColor: "#fff",
          padding: "24px",
          gap: "8px",
        }}
      >
        <div>
          <BsTable style={IconStyle} />
        </div>

        <p
          style={{
            margin: "0px",
            fontSize: "14px",
            color: "#3A6B88",
            fontWeight: "600",
            lineHeight: "16.94px",
          }}
        >
          {name}
        </p>
      </div>
    ),
  };

  const [, ref] = useDrag({
    type: "ELEMENT",
    item: { name, icon, content: contentMap[name], elementType: name },
  });
 

  //*********** react icon

  const renderIcon = () => {
    switch (icon) {
      case "PiTextAlignJustify":
        return <PiTextAlignJustify style={IconStyle} />;
      case "BsImageFill":
        return <BsImageFill style={IconStyle} />;
      case "BsTable":
        return <BsTable style={IconStyle} />;
      default:
        return <BsFillStarFill style={IconStyle} />;
    }
  };

  return (
    <>
      <div
        ref={ref}
        style={{
          width: "110px",
          height: "110px",
          padding: "24px",
          borderRadius: "4px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyItems: "center",
          backgroundColor: "white",
          borderRadius: "5px",
          border: "1px solid #E9E9E9",
          boxShadow: "0px 2px 6px 0px #00000021",
        }}
      >
        <div>{renderIcon()}</div>
        <p
          className="m-0 p-0"
          style={{
            fontSize: "14px",
            color: "#3A6B88",
            fontWeight: "600",
            lineHeight: "16.94px",
          }}
        >
          {name}
        </p>
      </div>
    </>
  );
}

export default SidebarItem;
