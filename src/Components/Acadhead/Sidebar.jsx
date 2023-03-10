import React, { useState } from "react";
import {
  Drawer,
  Box,
  Typography,
  IconButton,
  ThemeProvider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  ListItemIcon,
  Link,
  Paper,
  createTheme,
} from "@mui/material";
import {
  Dashboard,
  Campaign,
  ScreenShareOutlined,
  InsertChartOutlinedOutlined,
  Menu,
  Archive,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import Theme from "../../CustomTheme";
import logo from "../../Img/seal.png";

const sidelogo = createTheme({
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: "15px",
          backgroundColor: "#f5f5f5",
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontSize: "1.1rem",
          fontWeight: "bold",
          color: "#000000",
          padding: "15px",
        },
      },
    },
  },
});

const Sidebar = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const acadHeadcontroll = () => {
    navigate("/acad-head-controll");
  };

  const acadHeadAnnouncement = () => {
    navigate("/acad-head-announcement");
  };

  const acadHeadreport = () => {
    navigate("/acad-head-report");
  };
  const acadHeadarchive = () => {
    navigate("/acad-head-archive");
  };

  return (
    <>
      <IconButton
        size="large"
        edge="start"
        aria-label="logo"
        onClick={() => setShow(true)}
        sx={{ color: "white" }}
      >
        <Menu />
      </IconButton>
      <ThemeProvider theme={Theme}>
        <Drawer
          anchor="left"
          open={show}
          onClose={() => {
            setShow(false);
          }}
        >
          <Box width="350px" textAlign="center" role="presentation">
            <Box p={3}>
              <ThemeProvider theme={sidelogo}>
                <Box component={Paper} elevation={4}>
                  <Typography
                    mt={3}
                    sx={{
                      textTransform: "uppercase",
                    }}
                  >
                    Academic Head office
                  </Typography>

                  <img src={logo} alt="" height={100} />
                  <Typography>PUPSMB E-WAIT</Typography>
                </Box>
              </ThemeProvider>
            </Box>
            <List>
              <ListItem disablePadding>
                <ListItemButton onClick={acadHeadcontroll}>
                  <ListItemIcon>
                    <Dashboard />
                  </ListItemIcon>
                  <ListItemText
                    disableTypography
                    primary={
                      <Typography style={{ fontSize: "1.5rem" }}>
                        Dashboard
                      </Typography>
                    }
                  ></ListItemText>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton onClick={acadHeadAnnouncement}>
                  <ListItemIcon>
                    <Campaign />
                  </ListItemIcon>
                  <ListItemText
                    disableTypography
                    primary={
                      <Typography style={{ fontSize: "1.5rem" }}>
                        Announcement
                      </Typography>
                    }
                  ></ListItemText>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <ScreenShareOutlined />
                  </ListItemIcon>
                  <ListItemText
                    disableTypography
                    primary={
                      <Typography style={{ fontSize: "1.5rem" }}>
                        <Link
                          href="https://pupqueuemanagement.netlify.app/acad-head-monitor"
                          target="_blank"
                          rel="noreferrer"
                          underline="none"
                          color="inherit"
                        >
                          Share to Monitor
                        </Link>
                      </Typography>
                    }
                  ></ListItemText>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton onClick={acadHeadreport}>
                  <ListItemIcon>
                    <InsertChartOutlinedOutlined />
                  </ListItemIcon>
                  <ListItemText
                    disableTypography
                    primary={
                      <Typography style={{ fontSize: "1.5rem" }}>
                        Summary Report
                      </Typography>
                    }
                  ></ListItemText>
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton onClick={acadHeadarchive}>
                  <ListItemIcon>
                    <Archive />
                  </ListItemIcon>
                  <ListItemText
                    disableTypography
                    primary={
                      <Typography style={{ fontSize: "1.5rem" }}>
                        Archive
                      </Typography>
                    }
                  ></ListItemText>
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        </Drawer>
      </ThemeProvider>
    </>
  );
};

export default Sidebar;
