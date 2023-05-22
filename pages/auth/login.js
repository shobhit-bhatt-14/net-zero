//  mui
import { Button, TextField, Box, Typography, Container } from "@mui/material";
// next-auth
import { signIn } from "next-auth/react";
// react
import { useState } from "react";

export default function LogIn() {
  const [idNumber, setIdNumber] = useState("");
  const [uniqueId, setUniqueId] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPass] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    await signIn("credentials", { idNumber, uniqueId, email, password, callbackUrl: "/" });
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
          Sign in
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
          <TextField margin="normal" onChange={(e) => setIdNumber(e.target.value)} required fullWidth id="id_no" label="Identification Number" name="id_no" autoFocus />
          <TextField margin="normal" onChange={(e) => setUniqueId(e.target.value)} required fullWidth id="unique_id" label="Unique Id" name="unique_id" />
          <TextField margin="normal" onChange={(e) => setEmail(e.target.value)} required fullWidth id="email" label="Email Address" name="email" />
          <TextField margin="normal" onChange={(e) => setPass(e.target.value)} required fullWidth name="password" label="Password" type="password" id="password" />
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Log In
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
