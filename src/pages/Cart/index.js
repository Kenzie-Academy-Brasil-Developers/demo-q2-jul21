import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import { Container, Image, CardContainer, Container404 } from "./styles";
import formatValue from "../../utils/formatValue";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  Paper,
  TableCell,
  TableBody,
} from "@material-ui/core";

import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useHistory } from "react-router-dom";
import { useCart } from "../../providers/Cart";

const useStyles = makeStyles({
  table: {
    maxWidth: 750,
    marginTop: "25px",
    margin: "15px",
    minHeight: 200,
  },
  root: {
    marginTop: "25px",
    minWidth: 275,
    maxHeight: 250,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginTop: "15px",
    marginBottom: "15px",
    justifyContent: "center",
  },
});

function Cart() {
  //const cart = useSelector((state) => state.cart);
  const {cart} = useCart()
  const classes = useStyles();
  const history = useHistory();

  const subtotal = formatValue(
    cart.reduce((product, acc) => acc.price + product, 0).toFixed(2)
  );

  if (!cart.length) {
    return (
      <Container404>
        <h1> Sem produtos no carrinho, que tal ir as compras?</h1>
        <Button
          onClick={() => history.push("/")}
          variant="contained"
          color="primary"
          size="large"
        >
          Bora!
        </Button>
      </Container404>
    );
  }

  return (
    <>
      <Container>
        <TableContainer component={Paper} className={classes.table}>
          <Table size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <strong>Produto</strong>
                </TableCell>
                <TableCell>{"  "}</TableCell>
                <TableCell align="right">
                  <strong>Preço</strong>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {cart.map((product) => (
                <TableRow key={product.title}>
                  <TableCell>
                    <Image src={product.image} alt="Produto" />
                  </TableCell>
                  <TableCell>{product.title}</TableCell>
                  <TableCell align="right">{product.priceFormatted}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Card className={classes.root}>
          <CardContent>
            <Typography variant="h6" component="strong">
              <strong>Resumo do pedido</strong>
            </Typography>

            <CardContainer>
              <h4>{cart.length} Produtos</h4>
              <h4>{subtotal}</h4>
            </CardContainer>
          </CardContent>
          <CardActions className={classes.pos}>
            <Button
              variant="contained"
              color="primary"
              size="large"
              onClick={() => history.push("/login")}
            >
              Finalizar o pedido
            </Button>
          </CardActions>
        </Card>
      </Container>
    </>
  );
}

export default Cart;
