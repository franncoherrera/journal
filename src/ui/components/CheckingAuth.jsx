import { CircularProgress, Grid } from "@mui/material";

export const CheckingAuth = () => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{
        minHeight: "100vh",
        background:
          "linear-gradient(to right,rgb(9, 91, 114),rgb(11, 79, 161))",
        padding: 4,
      }}
    >
      <Grid container direction={"row"} justifyContent={"center"}>
        <CircularProgress color="warning" />
      </Grid>
    </Grid>
  );
};
