import { React } from "react";
import { Box, Grid } from "@mui/material";
import UserQueueLineTable from "./UserQueueLineTable";
import UserNowServingTable from "./UserNowServingTable";
import UserSkippedTable from "./UserSkippedTable";

const Usertable = () => {
  return (
    <>
      <Box my={5} sx={{ px: { lg: 50, md: 23, sm: 5, xs: 3 } }}>
        <Grid container spacing={1.2}>
          <Grid item lg={12} md={12} sm={12} xs={12}>
            <UserNowServingTable />
          </Grid>

          <Grid item lg={6} md={6} sm={6} xs={6}>
            <UserQueueLineTable />
          </Grid>

          <Grid item lg={6} md={6} sm={6} xs={6}>
            <UserSkippedTable />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default Usertable;
