import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import "./MenuBar.scss";
import ShopTitle from "../ShopTitle/ShopTitle";

export default function MenuBar(props) {
  return (
    <div className="menuBar">
      <AppBar position="static">
        <Toolbar>
          <ShopTitle />
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
