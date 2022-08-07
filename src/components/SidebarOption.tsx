import React from "react";
import { SvgIconComponent } from "@mui/icons-material";

interface Props {
  Icon?: SvgIconComponent;
  title: string;
  addChannelOption?: () => void;
}

const SidebarOption = ({ Icon, title, addChannelOption }: Props) => {
  const selectChannel = () => {};
  const addChannel = () => {};
  return (
    <div
      className="option-container"
      onClick={addChannelOption ? selectChannel : addChannel}
    >
      {Icon ? (
        <Icon fontSize="small" style={{ padding: "5 10" }} />
      ) : (
        <span
          style={{ marginLeft: "15px", marginRight: "15px", padding: "5 0" }}
        >
          #
        </span>
      )}
      <h3>{title}</h3>
    </div>
  );
};

export default SidebarOption;
