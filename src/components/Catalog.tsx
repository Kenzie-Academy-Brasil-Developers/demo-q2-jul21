import { useState, useEffect } from "react";
import api from "../services/api";
import { Box, Button, Center, Grid, Heading, Text } from "@chakra-ui/react";
import { IProduct } from "../store/modules/cart/types";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/modules/cart/actions";

const Catalog = () => {
  const [catalog, setCatalog] = useState<IProduct[]>([]);
  const dispatch = useDispatch();

  useEffect(() => {
    api
      .get<IProduct[]>("/products")
      .then((response) => setCatalog(response.data));
  }, []);

  const handleAddToCart = (product: IProduct) => {
    dispatch(addToCart(product));
  };

  return (
    <Center>
      <Grid
        w="100%"
        templateColumns="repeat(auto-fill, minmax(200px, 1fr))"
        gap={10}
        padding={["6", "6", "8"]}
      >
        {catalog.map((product) => (
          <Box key={product.id} p="7" bg="gray.600" borderRadius="md">
            <Box>
              <Heading size="md">{product.title}</Heading>
              <Text>
                {Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(product.price)}
              </Text>
            </Box>

            <Button
              onClick={() => handleAddToCart(product)}
              mt="2"
              colorScheme="blue"
              type="button"
            >
              Comprar
            </Button>
          </Box>
        ))}
      </Grid>
    </Center>
  );
};

export default Catalog;
