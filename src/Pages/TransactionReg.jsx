import React from "react";
import { useState } from "react";
import {
  Box,
  Stack,
  Paper,
  Divider,
  Button,
  TextField,
  InputAdornment,
  IconButton,
  Typography,
  ThemeProvider,
} from "@mui/material";
import Theme from "../CustomTheme";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Appbar from "../Components/Landing/Appbar";
import Footer from "../Components/Landing/Footer";
import { db } from "../firebase-config";
import { collection, query, getDocs, where } from "firebase/firestore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Usertable from "../Components/Registrar/Usertable";
import waves from "../Img/wave.svg";

const TransactionAcad = () => {
  let [search, setSearch] = useState("");
  let [name, setName] = useState("");
  let [transactions, setTransactions] = useState("");
  let [ticket, setTicket] = useState("");
  const [result, setResult] = useState(false);
  let filters = "";
  let [aheadTicket, setAheadTicket] = useState(0);
  //let [fetchCount, setFetchcount] = useState(0);

  const searchUser = async () => {
    let j = 0;
    let q = query(
      collection(db, "regQueuing"),
      where("studentNumber", "==", search)
    );
    let querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      filters = (doc.id, " => ", doc.data());
      j++;
    });

    q = query(
      collection(db, "regNowserving"),
      where("studentNumber", "==", search)
    );
    querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      filters = (doc.id, " => ", doc.data());
      j++;
    });

    q = query(collection(db, "regSkip"), where("studentNumber", "==", search));
    querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      filters = (doc.id, " => ", doc.data());
      j++;
    });

    q = query(
      collection(db, "regPriority"),
      where("studentNumber", "==", search)
    );
    querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      filters = (doc.id, " => ", doc.data());
      j++;
    });

    q = query(collection(db, "regQueuing"), where("contact", "==", search));
    querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      filters = (doc.id, " => ", doc.data());
      j++;
    });

    q = query(collection(db, "regNowserving"), where("contact", "==", search));
    querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      filters = (doc.id, " => ", doc.data());
      j++;
    });

    q = query(collection(db, "regSkip"), where("contact", "==", search));
    querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      filters = (doc.id, " => ", doc.data());
      j++;
    });

    q = query(collection(db, "regPriority"), where("contact", "==", search));
    querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      filters = (doc.id, " => ", doc.data());
      j++;
    });
    setResult(true);
    if (search.length === 0) {
      toast.error("Please fill the required input!", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      setResult(false);
    } else {
      if (j === 0) {
        toast.warn("Contact Number or Student Number not found", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        clearForm();
      } else {
        setName(filters.name);
        setTransactions(filters.transaction);
        setTicket(filters.ticket);
        setResult(false);
      }
    }
  };

  const clearForm = () => {
    setName("");
    setTransactions("");
    setTicket("");
  };

  return (
    <>
      <Box>
        <Appbar />
        <ThemeProvider theme={Theme}>
          <Box
            p={5}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              mb={3}
              fontSize={{
                lg: "30px",
                md: "25px",
                sm: "18px",
                xs: "16px",
              }}
            >
              Search your transaction using Email/Student Num
            </Typography>
            <TextField
              type="email"
              id="Username"
              label="Contact/StudentNo."
              required
              onChange={(e) => {
                setSearch(e.target.value);
              }}
              value={search}
              color="pupMaroon"
              placeholder="Ex. JuanDelacruz@yahoo.com / 2019-00733-SM-0 ..."
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton>
                      <SearchOutlinedIcon onClick={searchUser} />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              sx={{
                width: {
                  xs: "100%",
                  md: "100%",
                  lg: "80%",
                },
                bgcolor: "white",
              }}
            />
          </Box>

          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />

          {result ? (
            <Box
              sx={{
                px: { lg: 50, md: 20, xs: 0 },
                pt: { lg: 5, md: 20, xs: 5 },
                mb: "10px",
              }}
            >
              <Box
                component={Paper}
                mx={2}
                p={5}
                sx={{
                  maxWidth: "1000px",
                  backgroundImage: `url(${waves})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "contain",
                }}
              >
                <Typography
                  sx={{
                    width: "100%",
                    textAlign: "center",
                    fontSize: {
                      lg: "2rem",
                      md: "1.5rem",
                      sm: "1.5rem",
                      xs: "1.1rem",
                    },
                    fontWeight: "bold",
                    marginTop: {
                      lg: "100px",
                      md: "80px",
                      sm: "60px",
                      xs: "40px",
                    },
                  }}
                >
                  Ticket Entry
                </Typography>
                <Typography
                  onChange={(e) => {
                    setTicket(e.target.value);
                  }}
                  value={ticket}
                  sx={{
                    width: "100%",
                    textAlign: "center",
                    fontSize: {
                      lg: "2rem",
                      md: "1.5rem",
                      sm: "1.5rem",
                      xs: "1rem",
                    },
                    textDecoration: "underline",
                  }}
                >
                  {ticket}
                </Typography>
                <Typography
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  value={name}
                  sx={{
                    width: "100%",
                    textAlign: "center",
                    fontSize: {
                      lg: "2rem",
                      md: "1.5rem",
                      sm: "1.5rem",
                      xs: "1rem",
                    },
                    fontWeight: "bold",
                  }}
                >
                  {name}
                </Typography>
                <Typography
                  onChange={(e) => {
                    setTransactions(e.target.value);
                  }}
                  value={transactions}
                  sx={{
                    width: "100%",
                    textAlign: "center",
                    fontSize: {
                      lg: "2rem",
                      md: "1.5rem",
                      sm: "1.5rem",
                      xs: "1rem",
                    },
                  }}
                >
                  {transactions}
                </Typography>
              </Box>
            </Box>
          ) : null}
        </ThemeProvider>
        <Divider>
          <Typography color="#939393" textAlign="center">
            Queue's
          </Typography>
        </Divider>
        <Usertable />
        <Divider>
          <Typography color="#939393" textAlign="center">
            © PUPSMB E-WAIT
          </Typography>
        </Divider>
        <Footer />
      </Box>
    </>
  );
};

export default TransactionAcad;
