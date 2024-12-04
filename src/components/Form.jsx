import { useState } from "react";
import { Box, Button, TextField } from "@mui/material";

function Form({ onAuth, title, showBio }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (!email && !password) return;
    onAuth(email, password, firstName, lastName);
  }

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
      <TextField
        placeholder="Enter email"
        fullWidth
        required
        autoFocus
        sx={{ mb: 1 }}
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      <TextField
        placeholder="Enter password"
        fullWidth
        required
        type="password"
        sx={{ mb: 1 }}
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      {showBio && (
        <>
          <TextField
            placeholder="Enter first name"
            fullWidth
            required
            sx={{ mb: 1 }}
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
          />
          <TextField
            placeholder="Enter last name"
            fullWidth
            required
            sx={{ mb: 1 }}
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
          />
        </>
      )}
      <Button type="submit" variant="contained" fullWidth sx={{ mt: 1, mb: 1 }}>
        {title}
      </Button>
    </Box>
  );
}

export default Form;
