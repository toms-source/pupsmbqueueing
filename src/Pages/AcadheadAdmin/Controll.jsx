import { React, useEffect, useState } from "react";
import {
  AppBar,
  ThemeProvider,
  Typography,
  Toolbar,
  Box,
  Grid,
  Popover,
  IconButton,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import { AccountCircle, ExpandMoreRounded } from "@mui/icons-material";
import Sidebar from "../../Components/Acadhead/Sidebar";
import Theme from "../../CustomTheme";
import img from "../../Img/seal.png";
import QueueLine from "../../Components/Acadhead/AdminQueueline";
import NowServing from "../../Components/Acadhead/AdminNowServing";
import Skip from "../../Components/Acadhead/AdminSkip";
import { useNavigate } from "react-router-dom";

const Controll = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [openDialog, setopenDialog] = useState(false);
  const navigate = useNavigate();
  let admin = "";

  const handlePopover = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClosePopover = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  if (localStorage.getItem("Username") === "adminacad1") {
    admin = "Ms. Ambeth Casimiro";
  } else {
    admin = "Ms. Khaye Castro";
  }

  useEffect(() => {
    const checkTime = async () => {
      if (
        (localStorage.getItem("Password") !== "admin" &&
          localStorage.getItem("Username") !== "adminacad1") ||
        (localStorage.getItem("Password") !== "admin" &&
          localStorage.getItem("Username") !== "adminacad2")
      ) {
        navigate("/admin");
      }
    };

    const intervalId = setInterval(checkTime, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const acadHeadSignOut = () => {
    localStorage.removeItem("Username");
    localStorage.removeItem("Password");
    setopenDialog(false);
    navigate("/admin");
  };

  return (
    <>
      <ThemeProvider theme={Theme}>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="fixed" color="pupMaroon">
            <Toolbar>
              <Sidebar />
              <Box px={2}>
                <img src={img} alt="" height={50} width={50} />
              </Box>
              <Typography
                variant="h6"
                component="div"
                sx={{ flexGrow: 1 }}
                color="white"
              >
                Dashboard
              </Typography>
              <IconButton aria-describedby={id} onClick={handlePopover}>
                <AccountCircle fontSize="large" sx={{ color: "#fff" }} />
                <ExpandMoreRounded fontSize="medium" sx={{ color: "#fff" }} />
              </IconButton>

              <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClosePopover}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
              >
                <Typography sx={{ p: 2 }}>
                  <Typography textAlign="center"> Logged in as: </Typography>
                  <Typography
                    sx={{ textDecoration: "underline", fontWeight: "bold" }}
                  >
                    {admin}
                  </Typography>
                </Typography>
                <Button
                  color="pupMaroon"
                  sx={{ marginLeft: "5px" }}
                  onClick={() => setopenDialog(true)}
                >
                  Sign out
                </Button>
              </Popover>

              <Dialog open={openDialog} aria-labelledby="dialog-title">
                <DialogTitle id="dialog-title" color="black">
                  Logout
                </DialogTitle>
                <DialogContent>
                  <DialogContentText id="dialog-description">
                    Are you sure you want to Logout?
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <ThemeProvider theme={Theme}>
                    <Button
                      onClick={() => setopenDialog(false)}
                      variant="outlined"
                      color="pupMaroon"
                    >
                      Cancel
                    </Button>
                    <Button
                      onClick={acadHeadSignOut}
                      variant="contained"
                      color="pupMaroon"
                    >
                      Confirm
                    </Button>
                  </ThemeProvider>
                </DialogActions>
              </Dialog>
            </Toolbar>
          </AppBar>
        </Box>
      </ThemeProvider>

      {/* Control Table */}
      <Box p={5} mt={10}>
        <Grid container spacing={5}>
          {/* Now Serving */}

          <Grid item lg={12}>
            <NowServing />
          </Grid>

          {/* Queue Line */}
          <Grid item lg={12}>
            <QueueLine />
          </Grid>

          {/* Skip */}
          <Grid item lg={12}>
            <Skip />
          </Grid>
          <Grid item lg={12}></Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Controll;
