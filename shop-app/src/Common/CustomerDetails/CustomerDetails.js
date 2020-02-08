import React from "react";
import Grid from "@material-ui/core/Grid";
import TextFields from "../TextFields/TextFields";
import DatePicker from "../DatePicker/DatePicker";

function CustomerDetails() {
  return (
    <Grid container spacing={1} justify="center">
      <Grid item xs={11} sm={11} md={6} lg={6} className="CustomerDetails">
        <TextFields
          label="Customer Name"
          autoFocus={true}
          required={true}
          fullWidth={true}
        />
      </Grid>
      <Grid item xs={5} sm={5} md={3} lg={3} className="CustomerDetails">
        <TextFields
          label="Invoice#"
          autoFocus={false}
          required={false}
          fullWidth={true}
        />
      </Grid>
      <Grid item xs={6} sm={6} md={3} lg={3} className="CustomerDetails">
        <DatePicker />
      </Grid>

      <Grid item xs={11} sm={11} md={8} lg={8} className="CustomerDetails">
        <TextFields
          label="Customer Address"
          autoFocus={false}
          required={false}
          fullWidth={true}
        />
      </Grid>
      <Grid item xs={11} sm={11} md={4} lg={4} className="CustomerDetails">
        <TextFields
          label="Phone Number"
          autoFocus={false}
          required={false}
          fullWidth={true}
        />
      </Grid>
    </Grid>
  );
}

export default CustomerDetails;
