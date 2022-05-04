import React from "react";
import { Typography } from "@mui/material";
import Pizza from "../images/Pizza.jpg";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";

export default function Home() {
  return (
    <div className="Home" style={{ backgroundImage: ` URL(${Pizza})` }}>
      <div className="content">
        <Typography className="title" variant="h3">
          Welcome to Pizza App!!
        </Typography>
        <Typography variant="h6" style={{ color: "#212121" }}>
          Pizza to fit any toste!
        </Typography>
        <Link to="/menu">
          <Button variant="contained" style={{ background: "#000" }}>
            Order Now
          </Button>
        </Link>
      </div>
    </div>
  );
}
