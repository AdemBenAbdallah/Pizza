import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Typography } from "@mui/material";
import "../Styles/Footer.css";

export default function Footer() {
  return (
    <div className="Footer">
      <div className="icons">
        <InstagramIcon /> <FacebookIcon />
        <LinkedInIcon /> <TwitterIcon />
      </div>
      <Typography>&copy; 2022 Adem Pizza</Typography>
    </div>
  );
}
