import { Avatar, Container, Grid, Paper, Typography } from "@mui/material";
import { LockOutlined } from "@mui/icons-material";
import { Link } from "react-router";
import SignUp from "../components/SignUp";

function SignupPage() {
  return (
    <Container maxWidth="xs">
      <Paper elevation={10} sx={{ marginTop: 8, padding: 2 }}>
        <Avatar
          sx={{
            mx: "auto",
            bgcolor: "secondary.main",
            textAlign: "center",
            mb: 1,
          }}
        >
          <LockOutlined />
        </Avatar>
        <Typography component="h1" variant="h5" sx={{ textAlign: "center" }}>
          Sign Up
        </Typography>
        <SignUp />
        <Grid container justifyContent="space-between" sx={{ mt: 1 }}>
          <Grid item>
            <Link to="/login"> Already have an accoount? - Log In</Link>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}

export default SignupPage;
