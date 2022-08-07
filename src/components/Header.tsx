import React from "react";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import { Avatar } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

interface Props {}

const Header = (props: Props) => {
  return (
    <div className="header-container">
      <div className="header-left">
        <Avatar className="user-avatar" />
        <AccessTimeIcon />
      </div>

      <div className="search-container">
        <SearchIcon />
        <input placeholder="Search" />
      </div>

      <div className="header-right">
        <HelpOutlineIcon />
      </div>
    </div>
  );
};

export default Header;
