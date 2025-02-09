import { Divider, List, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { SideBarItemContent } from "./SideBarContentItem";

export const SideBarContent = ({ displayName, notes }) => (
  <Box>
    <Typography
      variant="h6"
      sx={{
        p: { xs: 1.5, sm: 2 },
      }}
    >
      {displayName}
    </Typography>
    <Divider />
    <List>
      {notes.map((note) => (
        <SideBarItemContent {...note} key={note.id} />
      ))}
    </List>
  </Box>
);
