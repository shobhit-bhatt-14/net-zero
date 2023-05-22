import { ControlPoint, Lightbulb } from "@mui/icons-material";
import { Box, Button, Container, Divider, Grid, List, ListItem, ListItemIcon, ListItemText, Stack, Typography, useMediaQuery } from "@mui/material";

const Ideas = () => {
  const breakPoint_810 = useMediaQuery("(max-width: 810px)");

  return (
    <Grid container>
      <Box width="100%" display="flex" justifyContent="center" alignItems="center">
        <Stack width="80%" justifyContent="center" marginTop={10} marginBottom={5}>
          <Typography variant="h4" marginTop={5} marginBottom={2} align="center" color="secondary" sx={{ textDecoration: "underline" }}>
            Petroleum Project Service
          </Typography>
          <Typography align="center" variant="h6">
            Hello students! we provide you 100% surety for best project ideas for your majors and minors.
          </Typography>
          <Box width="100%" display="flex" justifyContent="center" alignItems="center" gap={6} marginBottom={3}>
            <Stack width="80%" justifyContent="center" alignItems="center">
              <Typography variant="h4" marginTop={5} marginBottom={2} align="center" color="secondary" sx={{ textDecoration: "underline" }}>
                How we work?
              </Typography>
              <List dense>
                <ListItem disableGutters>
                  <ListItemIcon>
                    <ControlPoint htmlColor="#00f900" />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography variant="h6">Select your project idea</Typography>
                  </ListItemText>
                </ListItem>
                <ListItem disableGutters>
                  <ListItemIcon>
                    <ControlPoint htmlColor="#00f900" />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography variant="h6">Contact our team</Typography>
                  </ListItemText>
                </ListItem>
                <ListItem disableGutters>
                  <ListItemIcon>
                    <ControlPoint htmlColor="#00f900" />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography variant="h6">Book your project idea</Typography>
                  </ListItemText>
                </ListItem>
              </List>
            </Stack>
            <Stack width="80%" justifyContent="center" alignItems="center">
              <Typography variant="h4" marginTop={5} marginBottom={2} align="center" color="secondary" sx={{ textDecoration: "underline" }}>
                Why trust us?
              </Typography>
              <List dense>
                <ListItem disableGutters>
                  <ListItemIcon>
                    <ControlPoint htmlColor="#00f900" />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography variant="h6">Meet the project developer online</Typography>
                  </ListItemText>
                </ListItem>
                <ListItem disableGutters>
                  <ListItemIcon>
                    <ControlPoint htmlColor="#00f900" />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography variant="h6">Daily project trainig</Typography>
                  </ListItemText>
                </ListItem>
                <ListItem disableGutters>
                  <ListItemIcon>
                    <ControlPoint htmlColor="#00f900" />
                  </ListItemIcon>
                  <ListItemText>
                    <Typography variant="h6">Free support 24x7</Typography>
                  </ListItemText>
                </ListItem>
              </List>
            </Stack>
          </Box>
          <Typography variant="h4" marginBottom={2} align="center" color="secondary" sx={{ textDecoration: "underline" }}>
            List of project(s)
          </Typography>
          <List sx={{ width: "50%", marginX: "auto" }}>
            <ListItem disableGutters>
              <ListItemIcon>
                <Lightbulb htmlColor="#ace" />
              </ListItemIcon>
              <ListItemText>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                  <Typography variant="h6">
                    CO<sub>2</sub> sequestration modeling
                  </Typography>
                  <Button size="small" variant="contained">
                    Book Now
                  </Button>
                </Box>
              </ListItemText>
            </ListItem>
            <Divider />
            <ListItem disableGutters>
              <ListItemIcon>
                <Lightbulb htmlColor="#ace" />
              </ListItemIcon>
              <ListItemText>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                  <Typography variant="h6">
                    CO<sub>2</sub> capture by algae
                  </Typography>
                  <Button size="small" variant="contained">
                    Book Now
                  </Button>
                </Box>
              </ListItemText>
            </ListItem>
            <Divider />
            <ListItem disableGutters>
              <ListItemIcon>
                <Lightbulb htmlColor="#ace" />
              </ListItemIcon>
              <ListItemText>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                  <Typography variant="h6">Artificial lift selection algorithm</Typography>
                  <Button size="small" variant="contained">
                    Book Now
                  </Button>
                </Box>
              </ListItemText>
            </ListItem>
            <Divider />
            <ListItem disableGutters>
              <ListItemIcon>
                <Lightbulb htmlColor="#ace" />
              </ListItemIcon>
              <ListItemText>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                  <Typography variant="h6">Methane pyrolysis</Typography>
                  <Button size="small" variant="contained">
                    Book Now
                  </Button>
                </Box>
              </ListItemText>
            </ListItem>
            <Divider />
            <ListItem disableGutters>
              <ListItemIcon>
                <Lightbulb htmlColor="#ace" />
              </ListItemIcon>
              <ListItemText>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                  <Typography variant="h6">Calculating carbon footprint</Typography>
                  <Button size="small" variant="contained">
                    Book Now
                  </Button>
                </Box>
              </ListItemText>
            </ListItem>
            <Divider />
            <ListItem disableGutters>
              <ListItemIcon>
                <Lightbulb htmlColor="#ace" />
              </ListItemIcon>
              <ListItemText>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                  <Typography variant="h6">
                    Ways to produce H<sub>2</sub>
                  </Typography>
                  <Button size="small" variant="contained">
                    Book Now
                  </Button>
                </Box>
              </ListItemText>
            </ListItem>
          </List>
        </Stack>
      </Box>
    </Grid>
  );
};

export default Ideas;
