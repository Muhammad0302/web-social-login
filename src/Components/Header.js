import React from "react";
import { AppBar, Toolbar, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "black",
    height: "30px",
  },
}));

const Header = () => {
  const { header } = useStyles();
  const displayDesktop = () => {
    return <Toolbar>Hi From Desktop Header</Toolbar>;
  };
  return (
    <div>
      {" "}
      <header>
        <AppBar className={header}>{displayDesktop()}</AppBar>
      </header>
    </div>
  );
};

export default Header;
