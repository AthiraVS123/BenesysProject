import React from "react";
import "../Styles/HomeBody.css";
import Side from "../Assets/Images/Mask Group 71.png";
import LoginForm from "./LoginForm";
import { Grid } from "@mui/system";
import { Stack } from "@mui/system";

export default function HomeBody() {
  return (
    <Stack className="login-main-wrapper">
      <Grid container flexDirection={"row"} className="home-body">
        <Grid
          item
          xs={12}
          sm={6}
          md={5}
          sx={{
            display: "flex",
            alignItems: "stretch",
          }} // Ensure the item stretches to fill height
        >
          <Grid
            container
            // alignItems="flex-end" 
            sx={{ height: "100%" }} // Ensure the grid takes full height
          >
            <img
              className="side-img"
              src={Side}
              alt="Side-img"
              style={{ width: "100%", height: "auto", objectFit: "cover" }}
            />
          </Grid>
        </Grid>

        <Grid
          item
          xs={12}
          sm={7}
          md={7}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "100vh", // Ensure the LoginForm takes full height
          }}
        >
          <LoginForm />
        </Grid>
      </Grid>
    </Stack>
  );
}
