import axios from "axios";
import { findByText, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Pokemon from "../components/Pokemon";

jest.mock("axios");
const mockedAxios = axios;

describe("When user enter a valid pokemon", () => {
  test("Should show the pokemon abilities", async () => {
    const abilities = [
      {
        ability: {
          name: "Ability Foo",
          url: "https://foo.foo",
        },
      },
    ];

    mockedAxios.get.mockResolvedValueOnce({ data: { abilities } });

    render(<Pokemon />);

    const input = screen.getByPlaceholderText("Ex: Pikachu");
    const button = screen.getByText("Buscar habilidades");

    userEvent.type(input, "pikachu");
    userEvent.click(button);

    const returnAbilities = await screen.findAllByRole("listitem");

    expect(returnAbilities).toHaveLength(1);
  });
});

describe("When user enter a invalid pokemon", () => {
  test("Should show an error message on the screen", async () => {
    mockedAxios.get.mockResolvedValueOnce(new Error());

    render(<Pokemon />);

    const input = screen.getByPlaceholderText("Ex: Pikachu");
    const button = screen.getByText("Buscar habilidades");

    userEvent.type(input, "invalid pokemon");
    userEvent.click(button);

    const message = await screen.findByText("Algo deu errado");

    expect(message).toBeInTheDocument();
  });
});
