import { React, useEffect, useState } from "react";
import {
  AppBar,
  ThemeProvider,
  Typography,
  Toolbar,
  Box,
  Grid,
  Switch,
  FormControlLabel,
  FormGroup,
  Checkbox,
} from "@mui/material";
import Sidebar from "../../Components/Acadhead/Sidebar";
import Theme from "../../CustomTheme";
import img from "../../Img/seal.png";
import QueueLine from "../../Components/Acadhead/AdminQueueline";
import NowServing from "../../Components/Acadhead/AdminNowServing";
import Skip from "../../Components/Acadhead/AdminSkip";
import { useNavigate } from "react-router-dom";
import { db } from "../../firebase-config";
import { collection, getCountFromServer } from "firebase/firestore";
import { yellow } from "@mui/material/colors";

const Controll = () => {
  const navigate = useNavigate();
  let admin = "";
  if (localStorage.getItem("Username") === "adminacad1") {
    admin = "Ms. Ambeth Casimiro";
  } else {
    admin = "Ms. Khaye Castro";
  }
  let [transaction, setTransaction] = useState(0);

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

              <Typography>{admin}</Typography>
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
