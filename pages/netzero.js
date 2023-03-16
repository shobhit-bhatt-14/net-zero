import { Box, Grid, Typography, useMediaQuery } from "@mui/material";
import React from "react";

const NetZero = () => {
  const breakPoint_810 = useMediaQuery("(max-width: 810px)");

  return (
    <Grid container>
      <Box height="100vh" width="100%" display="flex" justifyContent="center" alignItems="center">
        <Typography fontSize={75}>NetZero</Typography>
      </Box>
    </Grid>
  );
};

export default NetZero;
