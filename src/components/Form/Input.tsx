import { forwardRef, ForwardRefRenderFunction } from "react";
import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
  error?: string | undefined;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label, error = null, ...rest },
  ref
) => (
  <FormControl isInvalid={!!error}>
    {!!label && <FormLabel fontWeight="bold">{label}</FormLabel>}
    <ChakraInput
      id={name}
      name={name}
      focusBorderColor="blue.500"
      bgColor="gray.900"
      variant="filled"
      _focus={{
        bgColor: "gray.800",
      }}
      size="lg"
      ref={ref}
      {...rest}
    />

    {error && <FormErrorMessage>{error}</FormErrorMessage>}
  </FormControl>
);

export const Input = forwardRef(InputBase);
