import React from "react";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import CreateIcon from "@mui/icons-material/Create";
import SidebarOption from "./SidebarOption";
interface Props {}

const SideBar = (props: Props) => {
  return (
    <div className="sidebar-container">
      <div className="header">
        <div className="info">
          <h2>Organiation Name</h2>
          <h3>
            <FiberManualRecordIcon />
            User Name
          </h3>
        </div>
        <CreateIcon />
      </div>

      <SidebarOption Icon={FiberManualRecordIcon} title="Hugo" />
      <SidebarOption title="Hugo" />

      <SidebarOption Icon={FiberManualRecordIcon} title="Hugo" />

      <SidebarOption Icon={FiberManualRecordIcon} title="Hugo" />

      <hr />
    </div>
  );
};

export default SideBar;
