import React from "react";
import { Grid, Box, Typography, Stack, Link } from "@mui/material";
import Gerwin from "../../Img/Developers/Gerwin.jpg";
import MarJhun from "../../Img/Developers/Marjhun.jpg";
import Vincent from "../../Img/Developers/vincent.jpg";
import Hannah from "../../Img/Developers/hannah.jpg";
import Kristal from "../../Img/Developers/kristal.png";
import "../../Img/Developers/Developers.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons";
const Developers = () => {
  return (
    <>
      <Typography variant="h4" fontWeight="bold" textAlign="center" mt={7}>
        Meet the Developers
      </Typography>

      <Box py={3} px={3.5}>
        <Grid
          container
          spacing={2}
          justifyContent="center"
          alignItems="center"
          fontWeight="bold"
        >
          {/* Marjhun */}
          <Grid item>
            <div className="container">
              <Box sx={{ borderRadius: "50%" }}>
                <img
                  src={MarJhun}
                  height="250px"
                  width="280px"
                  alt="Mar jhun Dev"
                  className="img"
                />
              </Box>
              <Typography
                className="role"
                variant="h5"
                textAlign="center"
                fontWeight="bold"
              >
                Project Manager
              </Typography>
              <Typography textAlign="center" fontWeight="bold">
                Mar Jhun J. Aquino
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Stack spacing={1} direction="row">
                  <Link
                    href=""
                    target="_blank"
                    rel="noreferrer"
                    variant="body2"
                    color="inherit"
                  >
                    <FontAwesomeIcon icon={faEnvelope} fontSize="25px" />
                  </Link>
                  <Link
                    href="https://www.facebook.com/mrjhnqn"
                    target="_blank"
                    rel="noreferrer"
                    variant="body2"
                    color="inherit"
                  >
                    <FontAwesomeIcon icon={faFacebook} fontSize="25px" />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/gerwincristobal/"
                    target="_blank"
                    rel="noreferrer"
                    variant="body2"
                    color="inherit"
                  >
                    <FontAwesomeIcon icon={faLinkedin} fontSize="25px" />
                  </Link>
                </Stack>
              </Box>
            </div>
          </Grid>

          {/* Gerwin */}
          <Grid item>
            <div className="container">
              <Box sx={{ borderRadius: "50%" }}>
                <img
                  src={Gerwin}
                  height="250px"
                  width="280px"
                  alt="Gerwin Dev"
                  className="img"
                />
              </Box>
              <Typography
                className="role"
                variant="h5"
                textAlign="center"
                fontWeight="bold"
              >
                Project Developer
              </Typography>
              <Typography textAlign="center" fontWeight="bold">
                Gerwin M. Cristobal
              </Typography>{" "}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Stack spacing={1} direction="row">
                  <Link
                    href="mailto: gerwincristobal11@gmail.com"
                    target="_blank"
                    rel="noreferrer"
                    variant="body2"
                    color="inherit"
                  >
                    <FontAwesomeIcon icon={faEnvelope} fontSize="25px" />
                  </Link>
                  <Link
                    href="https://www.facebook.com/gerwin.cristobal/"
                    target="_blank"
                    rel="noreferrer"
                    variant="body2"
                    color="inherit"
                  >
                    <FontAwesomeIcon icon={faFacebook} fontSize="25px" />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/gerwincristobal/"
                    target="_blank"
                    rel="noreferrer"
                    variant="body2"
                    color="inherit"
                  >
                    <FontAwesomeIcon icon={faLinkedin} fontSize="25px" />
                  </Link>
                </Stack>
              </Box>
            </div>
          </Grid>

          {/* vincent */}
          <Grid item>
            <div className="container">
              <Box sx={{ borderRadius: "50%" }}>
                <img
                  src={Vincent}
                  height="250px"
                  width="280px"
                  alt="Vincent Dev"
                  className="img"
                />
              </Box>
              <Typography
                className="role"
                variant="h5"
                textAlign="center"
                fontWeight="bold"
              >
                Project Developer
              </Typography>
              <Typography textAlign="center" fontWeight="bold">
                Vincent M. Dela Cruz
              </Typography>{" "}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Stack spacing={1} direction="row">
                  <Link
                    href="https://www.facebook.com/mrjhnqn"
                    target="_blank"
                    rel="noreferrer"
                    variant="body2"
                    color="inherit"
                  >
                    <FontAwesomeIcon icon={faEnvelope} fontSize="25px" />
                  </Link>
                  <Link
                    href="https://www.facebook.com/vincentngakase"
                    target="_blank"
                    rel="noreferrer"
                    variant="body2"
                    color="inherit"
                  >
                    <FontAwesomeIcon icon={faFacebook} fontSize="25px" />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/gerwincristobal/"
                    target="_blank"
                    rel="noreferrer"
                    variant="body2"
                    color="inherit"
                  >
                    <FontAwesomeIcon icon={faLinkedin} fontSize="25px" />
                  </Link>
                </Stack>
              </Box>
            </div>
          </Grid>

          {/* hannah */}
          <Grid item>
            <div className="container">
              <Box sx={{ borderRadius: "50%" }}>
                <img
                  src={Hannah}
                  height="250px"
                  width="280px"
                  alt="Hannah Dev"
                  className="img"
                />
              </Box>
              <Typography
                className="role"
                variant="h5"
                textAlign="center"
                fontWeight="bold"
              >
                Project Tester
              </Typography>
              <Typography textAlign="center" fontWeight="bold">
                Ma. Hannah Meriel L. Rafael
              </Typography>{" "}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Stack spacing={1} direction="row">
                  <Link
                    href="https://www.facebook.com/mrjhnqn"
                    target="_blank"
                    rel="noreferrer"
                    variant="body2"
                    color="inherit"
                  >
                    <FontAwesomeIcon icon={faEnvelope} fontSize="25px" />
                  </Link>
                  <Link
                    href="https://www.facebook.com/hannahrafael218"
                    target="_blank"
                    rel="noreferrer"
                    variant="body2"
                    color="inherit"
                  >
                    <FontAwesomeIcon icon={faFacebook} fontSize="25px" />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/gerwincristobal/"
                    target="_blank"
                    rel="noreferrer"
                    variant="body2"
                    color="inherit"
                  >
                    <FontAwesomeIcon icon={faLinkedin} fontSize="25px" />
                  </Link>
                </Stack>
              </Box>
            </div>
          </Grid>

          {/* kristal */}
          <Grid item>
            <div className="container">
              <Box sx={{ borderRadius: "50%" }}>
                <img
                  src={Kristal}
                  height="250px"
                  width="280px"
                  alt="Kristal Dev"
                  className="img"
                  style={{ borderRadius: "10px" }}
                />
              </Box>
              <Typography
                className="role"
                variant="h5"
                textAlign="center"
                fontWeight="bold"
              >
                Project Tester
              </Typography>
              <Typography textAlign="center" fontWeight="bold">
                Kristal Kate S. Tabares
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Stack spacing={1} direction="row">
                  <Link
                    href="https://www.facebook.com/mrjhnqn"
                    target="_blank"
                    rel="noreferrer"
                    variant="body2"
                    color="inherit"
                  >
                    <FontAwesomeIcon icon={faEnvelope} fontSize="25px" />
                  </Link>
                  <Link
                    href="https://www.facebook.com/kristal.tabares.9"
                    target="_blank"
                    rel="noreferrer"
                    variant="body2"
                    color="inherit"
                  >
                    <FontAwesomeIcon icon={faFacebook} fontSize="25px" />
                  </Link>
                  <Link
                    href="https://www.linkedin.com/in/gerwincristobal/"
                    target="_blank"
                    rel="noreferrer"
                    variant="body2"
                    color="inherit"
                  >
                    <FontAwesomeIcon icon={faLinkedin} fontSize="25px" />
                  </Link>
                </Stack>
              </Box>
            </div>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Developers;
