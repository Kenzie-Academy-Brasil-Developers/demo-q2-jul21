import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import Login from "../../pages/Login";

const mockedHandleSubmit = jest.fn();
const mockedToastError = jest.fn();

// Se não fosse mockar aqui em cima
// e usar a renderização do provider, teriamos que fazer o mock da requisição
jest.mock("../../providers/Auth", () => {
  return {
    useAuth: () => ({
      signIn: jest.fn(),
      token: "token",
    }),
  };
});

jest.mock("react-hook-form", () => {
  return {
    useForm: () => ({
      handleSubmit: mockedHandleSubmit,
      errors: {
        username: "mockedUsernameError",
        password: "mockedPasswordError",
      },
    }),
  };
});

describe("When the form is submitted", () => {
  test("Should call handleSubmit", () => {
    render(<Login />);

    const userInput = screen.getByTestId("userNameTestId");
    const passwordInput = screen.getByTestId("passwordTestId");

    const form = screen.getByTestId("formTestId");

    userEvent.type(userInput, "johndoe");
    userEvent.type(passwordInput, "123456");

    fireEvent.submit(form);

    expect(mockedHandleSubmit).toHaveBeenCalled();
  });
});
