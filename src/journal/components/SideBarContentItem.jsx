import { TurnedInNot } from "@mui/icons-material";
import {
  Grid,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { setActiveNote } from "../../store/journal/journalSlice";

export const SideBarItemContent = ({
  title,
  body,
  id,
  date,
  imageUrls = [],
}) => {
  const dispatch = useDispatch();
  const onClickNote = () => {
    dispatch(setActiveNote({ title, body, id, date, imageUrls }));
  };

  const truncateText = (text, maxLength = 12) =>
    text.length > maxLength ? text.substring(0, maxLength) + "..." : text;

  const newTitle = useMemo(() => truncateText(title), [title]);
  const newBody = useMemo(() => truncateText(body), [body]);

  return (
    <ListItem disablePadding>
      <ListItemButton onClick={onClickNote}>
        <ListItemIcon>
          <TurnedInNot />
        </ListItemIcon>
        <Grid container>
          <ListItemText sx={{ minWidth: "100%" }} primary={newTitle} />
          <ListItemText sx={{ minWidth: "100%" }} secondary={newBody} />
        </Grid>
      </ListItemButton>
    </ListItem>
  );
};
