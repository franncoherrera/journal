import { Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { NavBar, SideBar } from "../components";

const drawerWidth = 240;

export const JournalLayout = ({ children }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const handleDrawerToggle = () => setIsDrawerOpen(!isDrawerOpen);

  return (
    <Box
      xs={{ display: "flex" }}
      className="animate__animated animate__fadeIn animate__faster"
    >
      <NavBar drawerWidth={drawerWidth} onDrawerToggle={handleDrawerToggle} />
      <SideBar
        drawerWidth={drawerWidth}
        isDrawerOpen={isDrawerOpen}
        onDrawerClose={handleDrawerToggle}
      />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Box sx={{ ml: { md: `${drawerWidth}px` } }}>{children}</Box>
      </Box>
    </Box>
  );
};
