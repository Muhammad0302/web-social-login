import React from "react";
import { makeStyles } from "@material-ui/core";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";

const useStyles = makeStyles(() => ({
  subMain: {
    width: "70%",
    marginLeft: "15%",
    marginRight: "15%",
    marginTop: "30px",
    height: "560px",
    border: "1px solid grey",
    display: "flex",
  },
  slider: {
    width: "623.33px",
    height: "217px",
    objectFit: "fill",
  },
  right_div: {
    width: "727px",
    height: "100%",
  },
  left_div: {
    width: "242px",
    height: "100%",
    paddingLeft: "10px",
  },
  textList: {
    fontSize: "18px",
    color: "black",
  },
}));

const Main = () => {
  const { textList, subMain, right_div, left_div } = useStyles();
  var items = [
    {
      name: "./images/img1.jpg",
    },
    {
      name: "./images/img2.jpg",
    },
    {
      name: "./images/img3.jpg",
    },
  ];

  return (
    <>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          marginTop: "21px",
        }}
      >
        <div
          style={{
            width: "100%",
            marginLeft: "15%",
            marginRight: "15%",
            display: "flex",
            justifyContent: "space-around",
          }}
        >
          <div
            style={{
              width: "623.33px",
              height: "217px",
              border: "1px solid #DDDDDD",
              borderRadius: "1px",
            }}
          >
            <Carousel fullHeightHover={true}>
              {items.map((item, i) => (
                <Item key={i} item={item} />
              ))}
            </Carousel>
          </div>
          <div
            style={{
              width: "296px",
              height: "217px",
              border: "1px solid #DDDDDD",
              borderRadius: "3px",
            }}
          >
            <div
              style={{
                width: "100%",
                height: "38.59px",
                backgroundColor: "#F5F5F5",
                display: "flex",
                alignItems: "center",
                borderBottom: "1px solid #DDDDDD",
              }}
            >
              <p style={{ paddingLeft: "8px" }}>Latest News</p>
            </div>
            <div
              style={{
                width: "100%",
                height: "38.59px",
                display: "flex",
                alignItems: "center",
                borderBottom: "1px solid #DDDDDD",
              }}
            >
              <p style={{ paddingLeft: "8px", color: "#2A6496" }}>
                Order Online and Save!
              </p>
            </div>
            <div
              style={{
                width: "100%",
                height: "38.59px",
                display: "flex",
                alignItems: "center",
                borderBottom: "1px solid #DDDDDD",
              }}
            >
              <p style={{ paddingLeft: "8px", color: "#2A6496" }}>
                STM Precision Lathe Chucks
              </p>
            </div>
            <p
              style={{
                paddingLeft: "8px",
                color: "#2A6496",
                marginTop: "5px",
              }}
            >
              Straitline Components Talks Mitee-Bite in Shop Metalworking
              Technology Magazine
            </p>
          </div>
        </div>
      </div>

      <div className={subMain}>
        <div className={left_div}>
          <p className={textList}>End Mills</p>
          <p className={textList}>Drills & Reamers</p>
          <p className={textList}>Taps & Dies</p>
          <p className={textList}>Cutting Tools</p>
          <p className={textList}>Indexable Cutting Tools</p>
          <p className={textList}>Precision Tools</p>
          <p className={textList}>Rotary Tooling</p>
          <p className={textList}>Vises & Clamps</p>
          <p className={textList}>Accessories</p>
          <p className={textList}>Lathe Chucks</p>
          <p className={textList}>Lathe Accessories</p>
          <p className={textList}>Abrasives & Air Tools</p>
          <p className={textList}>Hand Tools</p>
          <p className={textList}>Cabinets & Chests</p>
        </div>
        <div className={right_div}>Right</div>
      </div>
    </>
  );
};
function Item(props) {
  const { slider } = useStyles();
  return (
    <Paper>
      <img className={slider} src={props.item.name} alt="Slide show img" />
    </Paper>
  );
}

export default Main;
