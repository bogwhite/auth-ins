import { Avatar, Container, Paper, Typography, Button } from "@mui/material";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { useAuth } from "../hooks/use-auth";
import { removeUser } from "../store/slice/userSlice";

function HomePage() {
  const { isAuth, email } = useAuth();

  const { firstName, lastName } = useSelector((store) => store.user);
  console.log(firstName, lastName);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(
    function () {
      if (!isAuth) navigate("/login");
    },
    [isAuth]
  );

  if (isAuth)
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
            <AccountCircleIcon />
          </Avatar>
          <Typography
            component="h1"
            variant="h5"
            sx={{ mb: 1, textAlign: "center" }}
          >
            Welcome
          </Typography>
          <Typography
            component="h3"
            variant="h8"
            sx={{ mb: 2, textAlign: "center" }}
          >
            Authorization task for Insiders
          </Typography>
          <Typography
            component="h3"
            variant="h6"
            sx={{ textAlign: "center", textTransform: "uppercase" }}
          >
            {firstName} {lastName}
          </Typography>
          <Button
            type="submit"
            variant="contained"
            fullWidth
            sx={{ mt: 2, mb: 1 }}
            onClick={() => dispatch(removeUser())}
          >
            Log out from ({email})
          </Button>
        </Paper>
      </Container>
    );
}

export default HomePage;
