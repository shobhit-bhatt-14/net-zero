import { useState } from "react";
import { Box, Button, IconButton, Link, Modal, Stack, Toolbar, useMediaQuery } from "@mui/material";
import { AccountCircle, Menu } from "@mui/icons-material";

const Navbar = () => {
  const [popup, setPopup] = useState(false);

  const breakPoint_810 = useMediaQuery("(max-width: 810px)");

  return breakPoint_810 ? (
    <Stack direction="row" justifyContent="space-between" alignItems="center">
      <IconButton size="large" onClick={() => setPopup(true)}>
        <Menu sx={{ fontSize: 40 }} />
      </IconButton>
      <Modal open={popup} onClose={() => setPopup(false)}>
        <Stack
          justifyContent="center"
          alignItems="center"
          spacing={5}
          zIndex={15}
          sx={{
            width: "100%",
            height: "50vh",
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "#fff",
            borderRadius: 2,
            boxShadow: 7,
          }}
        >
          <Link href="/" underline="none" fontSize={20} padding={1} borderRadius={2} width="50%" textAlign="center" border="solid #000">
            HOME
          </Link>
          <Link href="/netzero" underline="none" fontSize={20} padding={1} borderRadius={2} width="50%" textAlign="center" border="solid #000">
            NET ZERO
          </Link>
          <Link href="/lithium" underline="none" fontSize={20} padding={1} borderRadius={2} width="50%" textAlign="center" border="solid #000">
            LITHIUM
          </Link>
          <Link href="/gh-bh" underline="none" fontSize={20} padding={1} borderRadius={2} width="50%" textAlign="center" border="solid #000">
            GH/BH
          </Link>
        </Stack>
      </Modal>
      <img src="/buddy.png" alt="logo" height="50" width="50" />
      <IconButton size="large">
        <AccountCircle sx={{ fontSize: 40 }} />
      </IconButton>
    </Stack>
  ) : (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: 100,
        width: "100%",
        paddingY: 3,
        paddingX: 5,
        background: "linear-gradient(to bottom , black 0%, transparent 100%)",
        fontSize: 25,
      }}
    >
      <img src="/buddy.png" alt="logo" height="50" width="50" />
      <Stack direction="row" spacing={5}>
        <Link href="/" underline="none" color="#fff" sx={{ ":hover": { color: "#0f0" } }}>
          HOME
        </Link>
        <Link href="/netzero" underline="none" color="#fff" sx={{ ":hover": { color: "#0f0" } }}>
          NET ZERO
        </Link>
        <Link href="/lithium" underline="none" color="#fff" sx={{ ":hover": { color: "#0f0" } }}>
          LITHIUM
        </Link>
        <Link href="/gh-bh" underline="none" color="#fff" sx={{ ":hover": { color: "#0f0" } }}>
          GH/BH
        </Link>
      </Stack>
      <Stack direction="row" spacing={2}>
        <Button variant="contained" size="large" sx={{ borderRadius: 2, ":hover": { color: "#0f0" } }}>
          LOGIN
        </Button>
        <Button variant="contained" size="large" sx={{ borderRadius: 2, ":hover": { color: "#0f0" } }}>
          SIGNUP
        </Button>
      </Stack>
    </Box>
  );
};

export default Navbar;
