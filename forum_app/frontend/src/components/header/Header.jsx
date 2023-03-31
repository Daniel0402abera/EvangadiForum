import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { makeStyles } from "@mui/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Hidden from "@mui/material/Hidden";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import Divider from "@mui/material/Divider";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Link from "@mui/material/Link";
import logo from "../../images/evangadi_logo.png";
import { Button } from "@mui/material";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useLogout } from "../../hooks/useLogout";

const navigationLinks = [
  { name: "Home", href: "#" },
  { name: "How it works", href: "#" },
  // { name: "SIGN IN", href: "#" },
];

const useStyles = makeStyles((theme) => ({
  link: {
    // marginRight: 20,
    padding: 20,
  },
  img: {
    marginRight: "auto",

    backgroundColor: "white",
    height: "5vh",
  },
}));

export default function Header() {
  const { logout } = useLogout();

  const { user } = useAuthContext();
  const styles = useStyles();
  const [open, setOpen] = useState(false);

  const handleLogout = (e) => {
    logout();
  };
  return (
    <AppBar
      style={{ height: "10vh", margin: "auto" }}
      position="sticky"
      color="default"
    >
      <Container maxWidth="md">
        <Toolbar disableGutters>
          <img className={styles.img} src={logo} alt="logo"></img>

          <Hidden smDown>
            {navigationLinks.map((item) => (
              <Link
                className={styles.link}
                color="textPrimary"
                variant="button"
                underline="none"
                href={item.href}
                key={item.name}
              >
                {item.name}
              </Link>
            ))}
            {user ? (
              <Button onClick={handleLogout} variant="contained">
                Log Out
              </Button>
            ) : (
              <Button type="submit" variant="contained">
                SIGN IN
              </Button>
            )}
          </Hidden>

          <Hidden smUp>
            <IconButton onClick={() => setOpen(true)}>
              <MenuIcon />
            </IconButton>
          </Hidden>
        </Toolbar>
      </Container>
      <SwipeableDrawer
        anchor="right"
        open={open}
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
      >
        <div
          onClick={() => setOpen(false)}
          onKeyPress={() => setOpen(false)}
          role="button"
          tabIndex={0}
        >
          <IconButton>
            <ChevronRightIcon />
          </IconButton>
        </div>
        <Divider />
        <List>
          {navigationLinks.map((item) => (
            <ListItem key={item.name}>
              <Link
                className={styles.link}
                color="textPrimary"
                variant="button"
                underline="none"
                href={item.href}
              >
                {item.name}
              </Link>
            </ListItem>
          ))}
        </List>
      </SwipeableDrawer>
    </AppBar>
  );
}
