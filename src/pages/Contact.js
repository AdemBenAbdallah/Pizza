import React from "react";
import TextField from "@mui/material/TextField";
import TextareaAutosize from "@mui/material/TextareaAutosize";
import Pizza from "../images/PizzaContact.jpg";
import Button from "@mui/material/Button";
import "../Styles/Contact.css";

export default function Contact() {
  return (
    <div className="form">
      <div className="img" style={{ backgroundImage: ` URL(${Pizza})` }}></div>
      <form method="POST">
        <TextField
          id="standard-basic"
          label="Name"
          variant="standard"
          type="text"
          placeholder="Enter Name ..."
        />
        <TextField
          id="standard-basic"
          label="Email"
          variant="standard"
          type="email"
          placeholder="Enter Email ..."
        />
        <TextareaAutosize
          id="textarea"
          aria-label="Message"
          minRows={3}
          placeholder="Enter Message ..."
        />
        <Button variant="contained" className="button">
          Send Information
        </Button>
      </form>
    </div>
  );
}
