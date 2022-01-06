import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import { FiLogIn, FiShoppingCart } from "react-icons/fi";

import { NavLink } from "./styles";
//import { useSelector } from "react-redux";
import { Badge } from "@material-ui/core";

import { useAuth } from "../../providers/Auth";
import { useCart } from "../../providers/Cart";

const useStyles = makeStyles((theme) => ({
  "@global": {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: "none",
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    justifyContent: "space-between",
  },
  toolbarTitle: {
    flexGrow: 1,
    fontFamily: "Nunito, sans-serif",
    fontWeight: 600,
  },
  link: {
    margin: theme.spacing(1, 1.5),
  },
}));

export default function PrimarySearchAppBar() {
  const classes = useStyles();

  // const cart = useSelector((state) => state.cart);
  // const { token } = useSelector((state) => state.user);

  const { token } = useAuth();
  const { cart } = useCart();

  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      className={classes.appBar}
    >
      <Toolbar className={classes.toolbar}>
        <NavLink to="/">
          <Typography
            variant="h6"
            color="inherit"
            noWrap
            className={classes.toolbarTitle}
          >
            Kenzie Shop
          </Typography>
        </NavLink>
        <nav>
          <NavLink to="/cart">
            <Badge badgeContent={cart.length} color="primary">
              <FiShoppingCart size={20} />
            </Badge>
            <span> Carrinho </span>
          </NavLink>

          {!token && (
            <NavLink to="/login">
              <FiLogIn size={20} />
              Entrar
            </NavLink>
          )}
        </nav>
      </Toolbar>
    </AppBar>
  );
}
