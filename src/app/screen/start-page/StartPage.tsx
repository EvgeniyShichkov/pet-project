import React, { FC, useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { Autocomplete, TextField } from "@mui/material";
import { NavLink, useNavigate } from "react-router-dom";
import { APP_ROUTER } from "../../app-router/app-router";

interface IStartPageProps {}

export const StartPage: FC<IStartPageProps> = (props) => {
  const navigate = useNavigate();

  const [open, setOpen] = React.useState(false);
  const [value, setValue] = useState<{ label: string } | null>(null);

  const activeSession = () => {
    navigate(APP_ROUTER.USERS.url);
    if (value?.label) {
      sessionStorage.setItem("key", value.label);
    }
  };

  const onChangeHandler = (e: any, newValue: { label: string } | null) => {
    setValue(newValue);
  };

  return (
    <Modal open={true} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
      <Box sx={style}>
        <Autocomplete
          onChange={onChangeHandler}
          disablePortal
          id="combo-box-demo"
          options={role}
          value={value}
          sx={{ width: 300 }}
          renderInput={(params) => <TextField {...params} label="Выберите роль" />}
        />
        <Button onClick={activeSession}>ок</Button>
      </Box>
    </Modal>
  );
};

const style = {
  position: "absolute" as const,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4
};

const role = [{ label: "Session" }, { label: "core" }, { label: "admin" }];
