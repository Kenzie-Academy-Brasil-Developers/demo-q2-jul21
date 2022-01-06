import { AuthProvider } from "./Auth";
import { CartProvider } from "./Cart";

const Providers = ({ children }) => {
  return (
    <CartProvider>
      <AuthProvider>{children}</AuthProvider>
    </CartProvider>
  );
};

export default Providers;
