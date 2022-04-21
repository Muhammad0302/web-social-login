import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  main: {
    position: "relative",
    bottom: 0,
    left: 0,
    width: "100%",
    height: "165px",
    backgroundColor: "#F4AE1A",
  },
  submain: {
    width: "70%",
    marginLeft: "15%",
    marginRight: "15%",
    display: "flex",
    justifyContent: "space-around",
    // alignItems: "center",
  },
  footer_text: {
    marginTop: "-18px",
  },
}));

const Footer = () => {
  const { main, submain, footer_text } = useStyles();
  return (
    <div className={main}>
      <div className={submain}>
        <div>
          <h4>ORDERING</h4>
          <p className={footer_text}>Customer Login </p>
          <p className={footer_text}>Open an Account</p>
          <p className={footer_text}>Forgot Password</p>
        </div>
        <div>
          <h4>DOWNLOAD CENTRE</h4>
          <p className={footer_text}>Catalogs & Brochures </p>
          <p className={footer_text}>Distributor Promotions</p>
          <p className={footer_text}>Home Territory Promotions</p>
        </div>
        <div>
          <h4>COMPANY INFO</h4>
          <p className={footer_text}>About Us </p>
          <p className={footer_text}>Contact Us</p>
          <p className={footer_text}>Customer Feedback</p>
          <p className={footer_text}>Email List</p>
        </div>

        <div>
          <h4>CONNECT WITH US</h4>
          <br />
          <h4 className={footer_text}>HAVE QUESTIONS?</h4>
          <h2 className={footer_text}>1.800.265.8221</h2>
        </div>
      </div>
    </div>
  );
};

export default Footer;
