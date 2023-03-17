import { Grid, Box, Typography, Stack, Card, useMediaQuery, Autocomplete, TextField, IconButton } from "@mui/material";
import { Commute, EvStation, Factory, Search } from "@mui/icons-material";

const Home = () => {
  const breakPoint_810 = useMediaQuery("(max-width: 810px)");

  return (
    <Grid container>
      <Grid item xs={12}>
        <Box position={breakPoint_810 ? "relative" : "absolute"} top={0} left={0} sx={{ height: breakPoint_810 ? "auto" : "100vh", width: "100%", zIndex: 9 }}>
          <img src="/bg.jpg" alt="bg" style={{ height: "100%", width: "100%", opacity: 1 }} />
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          marginX={breakPoint_810 ? 0 : "auto"}
          paddingTop={breakPoint_810 ? 3 : 0}
          sx={{ position: "relative", height: breakPoint_810 ? "auto" : "100vh", width: breakPoint_810 ? "100%" : "fit-content", zIndex: 10 }}
        >
          <Stack spacing={3} width="100%" bgcolor="#eee" padding={breakPoint_810 ? 3 : 5} borderRadius={5}>
            <Typography align="center" textTransform="uppercase" fontSize={breakPoint_810 ? 35 : 100} fontWeight="bold">
              Way to Net Zero
            </Typography>
            <Stack direction="row" spacing={2} justifyContent="center" alignItems="center">
              <Autocomplete
                freeSolo
                disableClearable
                options={[]}
                fullWidth
                sx={{ bgcolor: "#fff" }}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    // label="Search input"
                    InputProps={{
                      ...params.InputProps,
                      type: "search",
                      placeholder: "Search...",
                    }}
                  />
                )}
              />
              <IconButton color="primary" size="medium" sx={{ bgcolor: "#fff", border: "solid 1px", ":hover": { color: "#0f0" } }}>
                <Search fontSize="large" />
              </IconButton>
            </Stack>
          </Stack>
        </Box>
      </Grid>
      <Grid item xs={12} paddingX={breakPoint_810 ? 5 : 10} paddingY={breakPoint_810 ? 5 : 10}>
        <Typography align="center" fontSize={breakPoint_810 ? 30 : 75} textTransform="uppercase">
          Find Net Zero current scenerio around the world
        </Typography>
        <Stack direction={breakPoint_810 ? "column" : "row"} spacing={3} justifyContent="space-around" alignItems="center" marginTop={breakPoint_810 ? 5 : 10}>
          <Card
            variant="outlined"
            sx={{
              paddingY: 3,
              paddingX: 5,
              width: breakPoint_810 ? "80vw" : "auto",
              display: "flex",
              flexDirection: breakPoint_810 ? "row" : "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Commute sx={{ fontSize: breakPoint_810 ? 100 : 200, color: "#1976d2", textAlign: "center" }} />
            <Typography align="center" fontSize={25}>
              Transportation
            </Typography>
          </Card>
          <Card
            variant="outlined"
            sx={{
              paddingY: 3,
              paddingX: 5,
              width: breakPoint_810 ? "80vw" : "auto",
              display: "flex",
              flexDirection: breakPoint_810 ? "row" : "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <EvStation sx={{ fontSize: breakPoint_810 ? 100 : 200, color: "#1976d2", textAlign: "center" }} />
            <Typography align="center" fontSize={25}>
              Electricity Power
            </Typography>
          </Card>
          <Card
            variant="outlined"
            sx={{
              paddingY: 3,
              paddingX: 5,
              width: breakPoint_810 ? "80vw" : "auto",
              display: "flex",
              flexDirection: breakPoint_810 ? "row" : "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Factory sx={{ fontSize: breakPoint_810 ? 100 : 200, color: "#1976d2", textAlign: "center" }} />
            <Typography align="center" fontSize={25}>
              Industry
            </Typography>
          </Card>
        </Stack>
      </Grid>
    </Grid>
  );
};

export default Home;
