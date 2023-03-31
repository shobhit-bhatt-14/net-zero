// react
import { useEffect, useState } from "react";
// mui
import { Box, Button, Card, IconButton, Typography, useMediaQuery } from "@mui/material";
// mui-icons
import { ChevronLeft, ChevronRight, FiberManualRecord } from "@mui/icons-material";

const NetZero = () => {
  const [mg, setMg] = useState(0);

  const arr = ["10%", "-175%", "-357%", "-542%", "-725%"];

  useEffect(() => {
    const imgInterval = setInterval(() => {
      setMg((prevState) => (prevState > 3 ? 0 : prevState + 1));
    }, 6000);

    return () => clearInterval(imgInterval);
  }, []);

  const prevHandler = () => {
    if (mg == 0) {
      setMg(4);
    } else {
      setMg((prevState) => prevState - 1);
    }
  };

  const nextHandler = () => {
    if (mg == 4) {
      setMg(0);
    } else {
      setMg((prevState) => prevState + 1);
    }
  };

  return (
    <Box height="98%" width="100%" display="flex" flexDirection="column" justifyContent="space-between" alignItems="center" paddingTop={11}>
      <Box sx={{ width: "100%", height: "92%", display: "flex", alignItems: "center", gap: "2%", marginLeft: `${arr[mg]}`, transition: "all 2s" }}>
        <Card
          className="slideshow_bg"
          raised={true}
          sx={{ height: "100%", minWidth: "90%", borderRadius: 3, display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", paddingX: 20 }}
        >
          <Typography variant="h3" align="center" sx={{ textDecoration: "underline", textUnderlineOffset: 5 }}>
            What is net zero?
          </Typography>
          <br />
          <Card sx={{ width: "100%", padding: 1 }}>
            <Typography variant="h5" align="center">
              Net zero emissions means removing all human-produced carbon dioxide and other climate-changing emissions that cannot be eliminated.
            </Typography>
          </Card>
          <br />
          <Card sx={{ width: "100%", padding: 1 }}>
            <Typography variant="h5" align="center">
              Carbon removal can be achieved naturally by restoring forests, or through technology like capturing and storing emissions from power plants or directly extracting CO2 from the
              atmosphere.
            </Typography>
          </Card>
          <br />
          <Card sx={{ width: "100%", padding: 1 }}>
            <Typography variant="h5" align="center">
              Planting trees is a popular method for absorbing carbon, but technology is still expensive and not widely deployed.
            </Typography>
          </Card>
          <br />
          <Card sx={{ width: "100%", padding: 1 }}>
            <Typography variant="h5" align="center">
              Carbon removal should not replace the urgent need to reduce planet-heating emissions as quickly as possible.
            </Typography>
          </Card>
        </Card>
        <Card
          className="slideshow_bg"
          raised={true}
          sx={{ height: "100%", minWidth: "90%", borderRadius: 3, display: "flex", alignItems: "center", justifyContent: "space-evenly", flexDirection: "column", paddingX: 5 }}
        >
          <Typography variant="h3" sx={{ textDecoration: "underline", textUnderlineOffset: 5 }}>
            GREEN HOUSE GAS EMISSION BY SECTOR
          </Typography>
          <Box height="85%" display="flex" alignItems="center" justifyContent="space-evenly">
            <img src="/fig_4.png" height="100%" width="50%" />
            <Card sx={{ padding: 1, width: "40%" }}>
              <Typography align="center" variant="h5">
                It is clear from this breakdown that a range of sectors and processes contribute to global emissions. This means there is no single or simple solution to tackle climate change.
                Focusing on electricity, or transport, or food, or deforestation alone is insufficient. To reach net-zero emissions we need innovations across many sectors. Single solutions will not
                get us there.
              </Typography>
            </Card>
          </Box>
        </Card>
        <Card
          className="slideshow_bg"
          raised={true}
          sx={{ height: "100%", minWidth: "90%", borderRadius: 3, display: "flex", alignItems: "center", justifyContent: "space-evenly", flexDirection: "column", paddingX: 5 }}
        >
          <Typography variant="h3" align="center" sx={{ textDecoration: "underline", textUnderlineOffset: 5 }}>
            Why does net zero emission matter?
          </Typography>
          <Card sx={{ width: "100%", padding: 1 }}>
            <Typography variant="h6" align="center">
              Climate change is one of the greatest threats to human existence, and net zero emissions is a critical step towards limiting the global temperature increase to below 1.5 degrees Celsius.
            </Typography>
          </Card>
          <Card sx={{ width: "100%", padding: 1 }}>
            <Typography variant="h6" align="center">
              Achieving net zero emissions requires a collective effort from governments, businesses, and individuals around the world to reduce greenhouse gas emissions and remove the remaining
              emissions from the atmosphere.
            </Typography>
          </Card>
          <Card sx={{ width: "100%", padding: 1 }}>
            <Typography variant="h6" align="center">
              Net zero emissions will help to preserve biodiversity, protect ecosystems, and promote sustainable development, which are essential for the health and well-being of both humans and the
              planet.
            </Typography>
          </Card>
          <Card sx={{ width: "100%", padding: 1 }}>
            <Typography variant="h6" align="center">
              The transition to net zero emissions presents opportunities for innovation, job creation, and economic growth, particularly in the renewable energy sector.
            </Typography>
          </Card>
          <Card sx={{ width: "100%", padding: 1 }}>
            <Typography variant="h6" align="center">
              Failure to achieve net zero emissions could result in catastrophic consequences, including more frequent and severe natural disasters, rising sea levels, food and water shortages, and
              widespread displacement of people.
            </Typography>
          </Card>
        </Card>
        <Card
          className="slideshow_bg"
          raised={true}
          sx={{ height: "100%", minWidth: "90%", borderRadius: 3, display: "flex", alignItems: "center", justifyContent: "space-evenly", flexDirection: "column", paddingX: 5 }}
        >
          <Typography variant="h3" sx={{ textDecoration: "underline", textUnderlineOffset: 5 }}>
            INDIAN SENARIE TOWARD NET ZERO
          </Typography>
          <Box height="85%" display="flex" alignItems="center" justifyContent="space-evenly" borderRadius={2} overflow="hidden">
            <img src="/fig_5.png" height="100%" width="100%" />
          </Box>
        </Card>
        <Card
          className="slideshow_bg"
          raised={true}
          sx={{ height: "100%", minWidth: "90%", borderRadius: 3, display: "flex", alignItems: "center", justifyContent: "space-evenly", flexDirection: "column", paddingX: 10 }}
        >
          <Typography variant="h4" align="center" sx={{ textDecoration: "underline", textUnderlineOffset: 5 }}>
            India Takes a Step Towards Renewable Energy
          </Typography>
          <Card sx={{ width: "100%", padding: 1 }}>
            <Typography variant="h6" align="center">
              India added approximately 48 GW of renewable energy capacity between 2016 and 2020.
            </Typography>
          </Card>
          <Card sx={{ width: "100%", padding: 1 }}>
            <Typography variant="h6" align="center">
              Solar energy has been the primary driver of renewable energy growth in India, with approximately 39 GW of solar capacity added between 2016 and 2020.
            </Typography>
          </Card>
          <Card sx={{ width: "100%", padding: 1 }}>
            <Typography variant="h6" align="center">
              Wind energy has also witnessed significant growth in India, with approximately 10 GW of wind capacity added between 2016 and 2020.
            </Typography>
          </Card>
          <Card sx={{ width: "100%", padding: 1 }}>
            <Typography variant="h6" align="center">
              Other renewable energy sources such as biomass and small hydro have also contributed to India&apos;s renewable energy growth.
            </Typography>
          </Card>
          <Card sx={{ width: "100%", padding: 1 }}>
            <Typography variant="h6" align="center">
              It is worth noting that India has set a target of achieving 175 GW of renewable energy capacity by 2022 and 450 GW by 2030.
            </Typography>
          </Card>
        </Card>
      </Box>
      <Box sx={{ height: "5%", display: "flex", alignItems: "center", justifyContent: "center", gap: 1 }}>
        <IconButton onClick={() => prevHandler()}>
          <ChevronLeft fontSize="large" />
        </IconButton>
        <IconButton color={mg == 0 ? "primary" : "inherit"} onClick={() => setMg(0)} sx={{ padding: 0 }}>
          <FiberManualRecord />
        </IconButton>
        <IconButton color={mg == 1 ? "primary" : "inherit"} onClick={() => setMg(1)} sx={{ padding: 0 }}>
          <FiberManualRecord />
        </IconButton>
        <IconButton color={mg == 2 ? "primary" : "inherit"} onClick={() => setMg(2)} sx={{ padding: 0 }}>
          <FiberManualRecord />
        </IconButton>
        <IconButton color={mg == 3 ? "primary" : "inherit"} onClick={() => setMg(3)} sx={{ padding: 0 }}>
          <FiberManualRecord />
        </IconButton>
        <IconButton color={mg == 4 ? "primary" : "inherit"} onClick={() => setMg(4)} sx={{ padding: 0 }}>
          <FiberManualRecord />
        </IconButton>
        <IconButton onClick={() => nextHandler()}>
          <ChevronRight fontSize="large" />
        </IconButton>
      </Box>
    </Box>
  );
};

export default NetZero;
