// rfce -> react functional component with an export
import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";
import "./InfoBox.css"

function InfoBox({ title, cases, total, ...props }) {
  return (
    <Card className="infoBox">
      <CardContent>
        <Typography className="title" color="textSecondary">{title}</Typography>
        <h2 className="infoBox__cases">{cases}</h2>
        <Typography className="infoBox__total" color="textSecondary">{total} Total</Typography>
      </CardContent>
    </Card>
  );
}

export default InfoBox;
