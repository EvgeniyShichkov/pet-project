import React, { FC } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";

interface ISpinnerProps {}

export const Spinner: FC<ISpinnerProps> = (props) => {
  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "80vh" }}>
      <CircularProgress />
    </div>
  );
};
