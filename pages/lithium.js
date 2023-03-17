import { Cyclone, Star, Whatshot } from "@mui/icons-material";
import { Box, Grid, List, ListItem, ListItemIcon, ListItemText, Stack, Typography, useMediaQuery } from "@mui/material";
import React from "react";

const Lithium = () => {
  const breakPoint_810 = useMediaQuery("(max-width: 810px)");

  return (
    <Box width="100%" display="flex" justifyContent="center" alignItems="center">
      <Stack width="80%" justifyContent="center" alignItems="center" marginTop={10} marginBottom={5}>
        <Typography variant="h4" marginTop={5} marginBottom={2} align="center" color="secondary" sx={{ textDecoration: "underline" }}>
          Advanced Lithium Technologies That Will Power the Future
        </Typography>
        <Typography variant="h6">
          Advanced battery technology involves the use of sophisticated technologies and materials in the design and production of batteries to enhance their performance,
          efficiency, and durability. This can include a variety of research areas focused on creating batteries with better energy density, lifespan and cost as well as
          the development of innovative charging methods, such as fast and wireless charging.
        </Typography>
        <Typography variant="h4" marginTop={5} marginBottom={2} align="center" color="secondary" sx={{ textDecoration: "underline" }}>
          Five key performance characteristics of battery technology evolution
        </Typography>
        <List dense>
          <ListItem disableGutters>
            <ListItemIcon>
              <Cyclone htmlColor="#f0f" />
            </ListItemIcon>
            <ListItemText>
              <Typography variant="h6" sx={{ textDecoration: "underline" }}>
                Energy Density
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem disableGutters>
            <ListItemText inset>
              <Typography variant="h6">
                It is associated directly to the amount of energy that can be stored per unit volume or mass. The weight and size of batteries are of critical importance
                to adoption in EV and stationary energy storage applications.
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem disableGutters>
            <ListItemIcon>
              <Cyclone htmlColor="#f0f" />
            </ListItemIcon>
            <ListItemText>
              <Typography variant="h6" sx={{ textDecoration: "underline" }}>
                Power Density
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem disableGutters>
            <ListItemText inset>
              <Typography variant="h6">
                Battery power density is the amount of energy released by a battery when it is discharged within a given capacity. Specific power, like specific energy,
                refers to the amount of energy produced per unit of mass.
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem disableGutters>
            <ListItemIcon>
              <Cyclone htmlColor="#f0f" />
            </ListItemIcon>
            <ListItemText>
              <Typography variant="h6" sx={{ textDecoration: "underline" }}>
                Life Span
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem disableGutters>
            <ListItemText inset>
              <Typography variant="h6">
                A battery&apos;s capacity decays with the amount of charge and discharge cycles, showing how long it will last. A battery should be reused (second life
                applications) or recycled once it has degraded to a point when it is no longer suitable for its intended application.
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem disableGutters>
            <ListItemIcon>
              <Cyclone htmlColor="#f0f" />
            </ListItemIcon>
            <ListItemText>
              <Typography variant="h6" sx={{ textDecoration: "underline" }}>
                Cost
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem disableGutters>
            <ListItemText inset>
              <Typography variant="h6">
                The cost of battery is usually defined on a per kWh basis and is the key focus in achieving EV cost parity with internal combustion engine (ICE) vehicles
                as a battery pack system is the most expensive single component of an electric vehicle (EV).
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem disableGutters>
            <ListItemIcon>
              <Cyclone htmlColor="#f0f" />
            </ListItemIcon>
            <ListItemText>
              <Typography variant="h6" sx={{ textDecoration: "underline" }}>
                Safety
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem disableGutters>
            <ListItemText inset>
              <Typography variant="h6">
                Because of the flammable liquid electrolyte and the release of thermal energy when the cathode material &apos;fatigues&apos; after a certain number of
                cycles, battery safety is a concern.
              </Typography>
            </ListItemText>
          </ListItem>
        </List>

        <img src="/fig_1.png" alt="characteristics of battery" width="50%" />

        <Typography variant="h4" marginTop={15} marginBottom={2} align="center" color="secondary" sx={{ textDecoration: "underline" }}>
          Six Most Advanced Battery Technologies That Will Power the Future
        </Typography>
        <List dense>
          <ListItem disableGutters>
            <ListItemIcon>
              <Star htmlColor="#FDCC0D" />
            </ListItemIcon>
            <ListItemText>
              <Typography variant="h6" sx={{ textDecoration: "underline" }}>
                New-Generation Lithium-Ion Battery
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem disableGutters>
            <ListItemText inset>
              <Typography variant="h6">
                A conventional lithium-ion battery uses lithium-ion as a key component of its electrochemistry. Lithium atoms in the anode are ionized and are separated
                from their electrons. The next generation of lithium-ion batteries will work on technological innovations in the cathode, enabling higher energy densities
                and lower costs.
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem disableGutters>
            <ListItemIcon>
              <Star htmlColor="#FDCC0D" />
            </ListItemIcon>
            <ListItemText>
              <Typography variant="h6" sx={{ textDecoration: "underline" }}>
                Lithium-Sulfur Battery
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem disableGutters>
            <ListItemText inset>
              <Typography variant="h6">
                In lithium-sulfur batteries, the positive electrode is sulfur and the negative electrode is made up of metallic lithium. The cell voltage is comparatively
                lower than lithium-ion cells and is about 2V. These batteries have an energy density several times higher than lithium-ion batteries. Li-S have specific
                energies on the order of 550 Wh/kg. Contrary to that, conventional lithium-ion batteries have a range of 150-260 Wh/kg.
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem disableGutters>
            <ListItemIcon>
              <Star htmlColor="#FDCC0D" />
            </ListItemIcon>
            <ListItemText>
              <Typography variant="h6" sx={{ textDecoration: "underline" }}>
                Cobalt-Free Lithium-ion Battery
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem disableGutters>
            <ListItemText inset>
              <Typography variant="h6">
                Cobalt, which is a key element in producing conventional lithium-ion batteries, is considered an expensive metal. Additionally, 50-60% of the worldwide
                cobalt resources are located in the politically unstable Congo (DRC) and are extracted by questionable working conditions. Cobalt-free batteries provide a
                solution to this problem by using alternative materials as the cathode in lithium-ion batteries. Cobalt-free lithium-ion chemistries include lithium
                ferrous phosphate and lithium titanate. Manganese and nickel are also used as electrode metals for cobalt-free batteries. These alternatives are less
                expensive than standard cobalt-based batteries. Nickel-based ion batteries have a higher energy density than cobalt-based batteries which means that it
                consumes less space and has higher energy. Cobalt-free batteries are also less toxic to the environment.
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem disableGutters>
            <ListItemIcon>
              <Star htmlColor="#FDCC0D" />
            </ListItemIcon>
            <ListItemText>
              <Typography variant="h6" sx={{ textDecoration: "underline" }}>
                Silicon Anode Lithium-Ion Batteries
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem disableGutters>
            <ListItemText inset>
              <Typography variant="h6">
                In this technology, the anode is made up of silicon and lithium-ions are charge carriers. Silicon is one of the promising anode materials for lithium-ion
                batteries. It has a record capacity of about 4000 mAh/g, which is ten times higher than graphite. These anodes add a binder for increased mechanical
                stability and carbon as a conductive additive. silicon composes great gravimetric and volumetric capacities. The performance of silicon is higher than
                graphite in electric vehicle batteries. It is also cheaper than other materials and has fewer environmental impacts.
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem disableGutters>
            <ListItemIcon>
              <Star htmlColor="#FDCC0D" />
            </ListItemIcon>
            <ListItemText>
              <Typography variant="h6" sx={{ textDecoration: "underline" }}>
                NanoBolt Lithium Tungsten Batteries
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem disableGutters>
            <ListItemText inset>
              <Typography variant="h6">
                The NanoBolt lithium-tungsten battery is an advanced and new improvement to lithium-ion batteries. These electrochemical cells have a layered structure
                that offers more surface area for ion transfer. The anode section of the battery comprises tungsten and carbon. The major advantage of NanoBolt is that
                the transfer of energy across the battery is faster than the standard lithium-ion batteries, which increases the ability of the battery to charge quickly
                and last longer. Nanomaterials also increase the available power from a battery which decreases the time required to recharge the battery. These batteries
                are majorly built for electric vehicles and industries.
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem disableGutters>
            <ListItemIcon>
              <Star htmlColor="#FDCC0D" />
            </ListItemIcon>
            <ListItemText>
              <Typography variant="h6" sx={{ textDecoration: "underline" }}>
                Organosilicon Electrolyte Batteries
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem disableGutters>
            <ListItemText inset>
              <Typography variant="h6">
                OS<sub>3</sub> is an advanced organosilicon electrolyte solvent that stabilizes lithium salt and carbonate co-solvents in a solution. OS<sub>3</sub> works
                in liquid and solid electrolyte systems to improve Li-ion battery performance. It is also considered a key factor for the higher energy density of
                lithium-ion and lithium-metal batteries. These compounds have low glass transition temperatures with superior chemical and thermal stabilities. Glass
                transition temperature is the temperature at which the hard or glassy polymer changes into a soft non-melted state.
              </Typography>
            </ListItemText>
          </ListItem>
        </List>

        <Typography variant="h4" marginTop={5} marginBottom={2} align="center" color="secondary" sx={{ textDecoration: "underline" }}>
          News related to latest projects and innovation of lithium happening in India
        </Typography>

        <List>
          <ListItem disableGutters>
            <ListItemIcon>
              <Whatshot htmlColor="#F62817" />
            </ListItemIcon>
            <ListItemText>
              <Typography variant="h6" sx={{ textDecoration: "underline", textTransform: "uppercase" }}>
                Things happening right now
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem disableGutters>
            <ListItemText inset>
              <Typography variant="h6">
                Atomic Minerals Directorate for Exploration and Research (AMD), a constituent unit of Department of Atomic Energy (DAE) is carrying out exploration for
                lithium in the potential geological domains of the country. Presently, AMD is carrying out exploration for lithium in parts of Mandya and Yadgir
                districts, Karnataka.
                <br />
                Khanij Bidesh India Ltd. (KABIL), a Joint Venture of three CPSEs under Ministry of Mines, has signed a Non-Binding Memorandum of Understanding [MoU] with
                three State-owned organizations of Argentina, for the purpose of information sharing w.r.t. prospective mineral acreages of lithium.
                <br /> A G2G MoU has been signed between Government of India and the Government of Australia for co-operation in the field of mining and processing of
                Critical and Strategic Minerals such as Lithium.
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem disableGutters>
            <ListItemIcon>
              <Whatshot htmlColor="#F62817" />
            </ListItemIcon>
            <ListItemText>
              <Typography variant="h6" sx={{ textDecoration: "underline", textTransform: "uppercase" }}>
                Lithium reserve found in Jammu & Kashmir is of best quality
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem disableGutters>
            <ListItemText inset>
              <Typography variant="h6">
                <center>
                  <img src="/fig_2.png" alt="lithium reserve in J & K" width="50%" />
                </center>
                On Feb. 9, Indian government announced a discovery with massive implications for its environment, international relations, and political scene: an
                untapped 5.9 million-ton stash of lithium reserves located within the region of Jammu and Kashmir. The nonferrous metal has never been more important to
                global commerce and the climate-change fight, as a key material for the lithium-ion batteries used most often in electric cars and for storing energy from
                renewable power generators like solar and wind. Now India is preparing to extract and refine the stuff, begin lithium auctions to private actors by this
                summer, reduce its dependence on mineral imports from other countries, accelerate the development of the country’s flagging electric vehicle sector, and
                enjoy a newly opened pathway for India to meet its internal clean-tech and clean-energy goals.
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem disableGutters>
            <ListItemIcon>
              <Whatshot htmlColor="#F62817" />
            </ListItemIcon>
            <ListItemText>
              <Typography variant="h6" sx={{ textDecoration: "underline", textTransform: "uppercase" }}>
                India Identifies two Lithium and one Copper mine in Argentina for a Possible Acquisition
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem disableGutters>
            <ListItemText inset>
              <Typography variant="h6">
                In November 2022, the Indian governemnt sent a team of geologists to South America to &quot;assess potential lithium deposits&quot;. The Indian government
                has proclaimed that they have identified two lithium mines and one copper mine in Argentina and they are moving forward to acquiring it or taking long
                term lease.
                <center>
                  <img src="/fig_3.png" alt="lithium and copper mine" width="50%" />
                </center>
                The Indian government has proclaimed that they have identified two lithium mines and one copper mine in Argentina and they are moving forward to acquiring
                it or taking long term lease. The government of India said that they had sent a team of geologists to Argentina to assess and find potential lithium
                deposits in the month of November 2022. They have been able to identify a possible source of lithium and copper deposits in the south American country.
                <br />
                Khanij Bidesh India Ltd. (Kabil) will have ownership or leasing rights to the mines. A joint venture between the National Aluminium Company (Nalco),
                Hindustan Copper (HCL), and Mineral Exploration Corporation Ltd. It was established in 2019 to ensure the market in India had access to strategic
                minerals.
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem disableGutters>
            <ListItemIcon>
              <Whatshot htmlColor="#F62817" />
            </ListItemIcon>
            <ListItemText>
              <Typography variant="h6" sx={{ textDecoration: "underline", textTransform: "uppercase" }}>
                Lithium reserves in India
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem disableGutters>
            <ListItemText inset>
              <Typography variant="h6">
                During 2021-22 Geological Survey of India (GSI) has carried out 7 projects on Lithium in Arunachal Pradesh, Andhra Pradesh, Chhattisgarh, Jharkhand, Jammu
                & Kashmir and Rajasthan. However, the resource of lithium has not yet been augmented by GSI.
                <br />
                Researchers at the Atomic Minerals Directorate (AMD)for Exploration and Research, which is a constituent of Department Atomic Energy (DAE) has estimated
                lithium reserves of 14,100 tonnes in a small patch of land surveyed in Southern Karnataka&apos;s Mandya district.
                <br />
                During the last five years, GSI carried out 20 projects on Lithium and associated elements in Andhra Pradesh, Arunachal Pradesh, Bihar, Chhattisgarh,
                Himachal Pradesh, Jharkhand, Jammu & Kashmir, Madhya Pradesh, Meghalaya, Rajasthan.
                <br />
                During the present FSP 2022-23, GSI has taken up 18 projects on Lithium in Arunachal Pradesh, Chhattisgarh, Jammu & Kashmir, Jharkhand, Meghalaya,
                Nagaland, Rajasthan. However, resource of lithium has not yet been augmented by GSI.
              </Typography>
            </ListItemText>
          </ListItem>
        </List>
      </Stack>
    </Box>
  );
};

export default Lithium;
