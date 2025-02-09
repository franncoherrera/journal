import { Box, CircularProgress } from "@mui/material"; // Spinner de Material UI
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ResponsiveDrawer } from "./ResponsiveDrawer";
import { SideBarContent } from "./SideBarContent";

export const SideBar = ({ drawerWidth, isDrawerOpen, onDrawerClose }) => {
  const { displayName } = useSelector((state) => state.auth);
  const { notes } = useSelector((state) => state.journal);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (notes.length > 0) {
      setLoading(false);
    }
  }, [notes]);

  return (
    <ResponsiveDrawer
      drawerWidth={drawerWidth}
      isDrawerOpen={isDrawerOpen}
      onDrawerClose={onDrawerClose}
    >
      {loading ? (
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          height="100%"
        >
          <CircularProgress />
        </Box>
      ) : (
        <SideBarContent displayName={displayName} notes={notes} />
      )}
    </ResponsiveDrawer>
  );
};

SideBar.propTypes = {
  drawerWidth: PropTypes.number.isRequired,
  isDrawerOpen: PropTypes.bool.isRequired,
  onDrawerClose: PropTypes.func.isRequired,
};
