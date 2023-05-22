//  mui
import { Button, TextField, Box, Typography, Container } from "@mui/material";
// react
import { useState } from "react";
// axios
import axios from "axios";
// router
import { useRouter } from "next/router";
// config
import CONFIG from "../api/lib/config";

export default function SignUp() {
  const [idNumber, setIdNumber] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");
  const [conPass, setConPass] = useState("");

  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await axios.post(`${CONFIG.API_BASE_URL}/users`, { idNumber, email, password }).then((res) => res.data);

    if (response?.user) {
      router.push("/");
    }
  };

  return (
    <Container component="main" maxWidth="xs" sx={{ display: "flex", height: "100%", alignItems: "center", justifyContent: "center" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h4">
          Sign Up
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField margin="normal" onChange={(e) => setIdNumber(e.target.value)} required fullWidth id="id_no" label="Identification Number" name="id_no" autoFocus />
          <TextField margin="normal" onChange={(e) => setEmail(e.target.value)} required fullWidth id="email" label="Email Address" name="email" />
          <TextField margin="normal" onChange={(e) => setPass(e.target.value)} required fullWidth name="password" label="Password" type="password" id="password" />
          <TextField margin="normal" onChange={(e) => setConPass(e.target.value)} required fullWidth name="con-pass" label="Confirm Password" type="password" id="con-pass" />
          <Button color="success" type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Register
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
