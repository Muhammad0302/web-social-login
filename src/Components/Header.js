import React from "react";
import { AppBar, Toolbar, makeStyles, TextField } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import InputAdornment from "@material-ui/core/InputAdornment";
import SearchIcon from "@material-ui/icons/Search";

const useStyles = makeStyles(() => ({
  header1: {
    backgroundColor: "#251F1F",
    height: "40px",
    position: "fixed",
    width: "100%",
    zIndex: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-end",
    paddingRight: "180px",
  },
  header2: {
    backgroundColor: "#F4AE1A",
    height: "5px",
    marginTop: "40px",
    position: "fixed",
    width: "100%",
    zIndex: 100,
  },
  header3: {
    backgroundColor: "#251F1F",
    height: "95px",
    position: "relative",
    marginTop: "45px",
    width: "100%",
    zIndex: -5,
  },
  header3_content: {
    width: "100%",
    marginLeft: "15%",
    marginRight: "15%",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  header3_left: {
    color: "#F4AE1A",
    fontWeight: "bold",
    fontSize: "12px",
  },
  header3_left1: {
    color: "#F4AE1A",
    fontWeight: "bold",
    fontSize: "19px",
  },
  header3_Right: {
    color: "#F4AE1A",
  },
  input1: {
    height: 12,
  },
  header3_right: {
    display: "flex",
  },
  subText: {
    fontWeight: 200,
    fontSize: "10px",
  },
  handImg: {
    marginRight: "8px",
  },
  Top_menue: {
    backgroundColor: "#696767",
    height: "40px",
    position: "relative",
    width: "100%",
    display: "flex",
    zIndex: -5,
  },
  topMenue_content: {
    width: "100%",
    paddingBottom: "19px",
    marginLeft: "15%",
    marginRight: "15%",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  },
  topMenue_text: {
    fontSize: "14px",
  },
}));

const Header = () => {
  const {
    header1,
    header2,
    header3,
    header3_content,
    header3_left,
    header3_Right,
    header3_left1,
    header3_right,
    subText,
    handImg,
    Top_menue,
    topMenue_content,
    topMenue_text,
  } = useStyles();
  return (
    <div>
      <div>
        <header>
          <AppBar className={header1}>
            <Toolbar>
              <img src="./images/header1Img.PNG" alt="" />
            </Toolbar>
          </AppBar>
        </header>
      </div>
      <div>
        <header>
          <AppBar className={header2}>
            <Toolbar></Toolbar>
          </AppBar>
        </header>
      </div>
      <div>
        <header>
          <AppBar className={header3}>
            <Toolbar>
              <div className={header3_content}>
                <div>
                  <img src="./images/logo.PNG" alt="" />
                  <Typography className={header3_left}>
                    METALWORKING SOLUATIONS
                  </Typography>
                </div>
                <div className={header3_Right}>
                  <div style={{ display: "flex", justifyContent: "flex-end" }}>
                    <TextField
                      style={{
                        backgroundColor: "white",
                        borderRadius: "4px",
                        width: "300px",
                      }}
                      label="Product #, Keyword"
                      margin="normal"
                      variant="outlined"
                      size="small"
                      id="outlined-basic"
                      InputProps={{
                        endAdornment: (
                          <InputAdornment
                            style={{
                              marginRight: "-15px",
                            }}
                          >
                            <IconButton
                              style={{
                                fontSize: "16px",
                                color: "black",
                              }}
                            >
                              Search <SearchIcon />
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </div>
                  <div className={header3_right}>
                    <img className={handImg} src="./images/hand.PNG" alt="" />
                    <Typography className={header3_left1}>
                      Home Terrritory Promotions 1.800.265.8221
                    </Typography>
                    <div style={{ marginLeft: "5px" }}>
                      <Typography className={subText}>Monday-Friday</Typography>
                      <Typography
                        style={{ marginTop: "-3px" }}
                        className={subText}
                      >
                        730am-630pm EST
                      </Typography>
                    </div>
                  </div>
                </div>
              </div>
            </Toolbar>
          </AppBar>
        </header>
      </div>
      <div>
        <header>
          <AppBar className={Top_menue}>
            <Toolbar>
              <div className={topMenue_content}>
                <Typography className={topMenue_text}>HOME</Typography>
                <Typography className={topMenue_text}>ABOUT US</Typography>
                <Typography className={topMenue_text}>PRODUCT LINES</Typography>
                <Typography className={topMenue_text}>
                  DOWNLOAD CENTER
                </Typography>
                <Typography className={topMenue_text}>CONTACT US</Typography>
                <Typography className={topMenue_text}>
                  CUSTOMER LOGIN
                </Typography>
                <Typography className={topMenue_text}>FEEDBACK</Typography>
              </div>
            </Toolbar>
          </AppBar>
        </header>
      </div>
    </div>
  );
};

export default Header;
