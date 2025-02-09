import { Drawer, useMediaQuery, useTheme } from "@mui/material";
import PropTypes from "prop-types";

export const ResponsiveDrawer = ({
  drawerWidth,
  isDrawerOpen,
  onDrawerClose,
  children,
}) => {
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  return (
    <>
      <Drawer
        variant="temporary"
        open={!isMdUp && isDrawerOpen}
        onClose={onDrawerClose}
        ModalProps={{
          keepMounted: true,
          disableEnforceFocus: true,
        }}
        sx={{
          display: { xs: "block", md: "none" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
      >
        {children}
      </Drawer>

      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", md: "block" },
          "& .MuiDrawer-paper": {
            boxSizing: "border-box",
            width: drawerWidth,
          },
        }}
        open
      >
        {children}
      </Drawer>
    </>
  );
};

ResponsiveDrawer.propTypes = {
  drawerWidth: PropTypes.number.isRequired,
  isDrawerOpen: PropTypes.bool.isRequired,
  onDrawerClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};
