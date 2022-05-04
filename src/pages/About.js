import React from "react";
import { Typography, Container } from "@mui/material";
import Pizza from "../images/PizzaAbout.jpg";

export default function About() {
  return (
    <div className="About">
      <div
        className="img"
        style={{
          backgroundImage: ` URL(${Pizza})`,
          height: "40vh",
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      ></div>
      <Container
        style={{
          display: "flex",
          gap: "10px",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="h4"
          align="center"
          style={{ margin: "20px" }}
          fontFamily="BlinkMacSystemFont"
        >
          About Us
        </Typography>
        <Typography variant="body1" align="center">
          It all started in 1972, when owner Judy Waller opened her first
          Tunisie Pizza Company in a burned out clock shop in Levy, AR. Armed
          with a unique recipe for thin crust pizza and an old fashioned stone
          hearth oven, Tunisie Pizza embarked on a quarter-of-a-century journey
          that has done everything but dwindle.
        </Typography>
      </Container>
    </div>
  );
}
