import SidebarItem from "../components/SidebarItem";

function Sidebar() {
  const textIcon = "PiTextAlignJustify";
  const imageIcon = "BsImageFill";
  const tableIcon = "BsTable";

  return (
    <div
      style={{
        width: "460px",
        height:"auto",
        minHeight: "982px",
        padding: "32px",
        backgroundColor: "#FAFAFA",
        borderLeft: "1px solid #E9E9E9",
      }}
    >
      <p
        style={{
          fontSize: "18px",
          color: "#3A6B88",
          fontFamily: "Montserrat",
          fontWeight:"600",
          lineHeight: "21.94px",
        }}
      >
        Elements
      </p>
      <div
        style={{
          width: "396px",
          height: "110px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <SidebarItem name="Text" icon={textIcon} />
        <SidebarItem name="Images" icon={imageIcon} />
        <SidebarItem name="Table" icon={tableIcon} />
      </div>
    </div>
  );
}

export default Sidebar;
