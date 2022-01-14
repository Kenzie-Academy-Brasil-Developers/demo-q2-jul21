import React from "react";
import { Table, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import { State } from "../store";
import { ICartItem } from "../store/modules/cart/types";

const Cart = () => {
  const cart = useSelector<State, ICartItem[]>((state) => state.cart.items);

  console.log(cart);

  return (
    <Table>
      <Thead>
        <Tr>
          <Th>Produto </Th>
          <Th>Preço</Th>
          <Th>Quantidade</Th>
          <Th>Subtotal</Th>
        </Tr>
      </Thead>

      <Tbody>
        {cart.map((item) => (
          <Tr key={item.product.id}>
            <Td>{item.product.title}</Td>
            <Td>
              {Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(item.product.price)}
            </Td>
            <Td>{item.quantity}</Td>
            <Td>
              {Intl.NumberFormat("pt-BR", {
                style: "currency",
                currency: "BRL",
              }).format(item.product.price * item.quantity)}
            </Td>
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

export default Cart;
