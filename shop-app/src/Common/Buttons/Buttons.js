import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: "none"
  }
}));

export default function ContainedButtons(props) {
  const classes = useStyles();

  return (
    <div>
      <Button variant="contained" className={props.className}>
        <div className="paper-text-container">
          <i className={props.icon}></i>
          <Typography variant="h5" component="h3">
            {props.title}
          </Typography>
        </div>
      </Button>
    </div>
  );
}
