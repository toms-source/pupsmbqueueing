import React from "react";
import { Box, Divider, Typography } from "@mui/material";
import Appbar from "../Components/Landing/Appbar";
import Form from "../Components/Registrar/Form";
import Requirements from "../Components/Registrar/Requirements";
import Footer from "../Components/Landing/Footer";
const GenerateFormReg = () => {
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Box>
          <Appbar />
          <Form />
          <Requirements />

          <Divider>
            <Typography color="#939393" textAlign="center">
              © PUPSMB E-WAIT
            </Typography>
          </Divider>
          <Footer />
        </Box>
      </Box>
    </>
  );
};

export default GenerateFormReg;
