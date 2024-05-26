import React, { FC } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import FormLabel from "@mui/material/FormLabel";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useNavigate } from "react-router-dom";
import { APP_ROUTER } from "../../app-router/app-router";

interface INavBarProps {}

interface LinkTabProps {
  label?: string;
  href?: string;
  selected?: boolean;
}

export const NavBar: FC<INavBarProps> = (props) => {
  const navigate = useNavigate();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const backHome = () => {
    navigate(APP_ROUTER.START_PAGE.url);
    sessionStorage.removeItem("key");
  };
  const session = sessionStorage.getItem("key") || null;

  return (
    <>
      <Box>
        <AppBar position="static">
          <Toolbar>
            <Typography style={{ cursor: "pointer" }} variant="h6" component="div" sx={{ flexGrow: 1 }} onClick={backHome}>
              Pet-project
            </Typography>
            <div style={{ display: "flex", flexDirection: "row", gap: "10px", alignItems: "center" }}>
              <FormLabel>{session}</FormLabel>
              <Avatar>H</Avatar>
            </div>
          </Toolbar>
        </AppBar>
      </Box>
      <Box sx={{ width: "100%", bgcolor: "AliceBlue" }}>
        <Tabs value={value} onChange={handleChange} centered>
          <Tab label="Users" onClick={() => navigate(APP_ROUTER.USERS.url)} />
          <Tab label="Posts" onClick={() => navigate(APP_ROUTER.POSTS.url)} />
          <Tab label="Chat" onClick={() => navigate(APP_ROUTER.CHAT.url)} />
        </Tabs>
      </Box>
    </>
  );
};
