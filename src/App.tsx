import { ChakraProvider, Heading } from "@chakra-ui/react";
import "./App.css";
import Home from "./pages/Home";

function App() {
  return (
    <ChakraProvider>
      <Home />
    </ChakraProvider>
  );
}

export default App;
