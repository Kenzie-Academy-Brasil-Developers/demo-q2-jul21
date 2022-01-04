import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import List from "../components/List";

describe("List interactions (OK)", () => {
  test("Should name appear on list when the user changes a value on input and click", async () => {
    render(<List />);

    // Buscamos pela role, porque só existe um input no componente renderizado,
    // mas se tem mais é bom utilizar o
    // getByPlaceholder

    const input = screen.getByRole("textbox");
    const button = screen.getByRole("button");

    // FireEvent = ferramenta de base do userEvent mas eles fazem a mesma coisa. O fireEvent é um pouco
    // mais verboso

    // fireEvent.change(input, {
    //   target: {
    //     value: "Gabriel",
    //   },
    // });

    //  fireEvent.click(button);

    userEvent.type(input, "Gabriel");

    userEvent.click(button);

    userEvent.type(input, "Johnny");

    userEvent.click(button);

    userEvent.type(input, "Arthur");

    userEvent.click(button);

    const list = await screen.findAllByRole("listitem");

    expect(list).toHaveLength(3);
    expect(list[2]).toHaveTextContent(/Arthur/);

    // findBy = assincrono e ele vai buscar algo que ainda vai aparecer em tela
    // getBy = sincrono porque ele verifica algo que ja esta em tela
    // queryBy = sincrono e vai buscar algo que ja esteve em tela
  });

  test("Should let the user be able to click on the button when the input is not empty", () => {
    render(<List />);

    const input = screen.getByRole("textbox");
    const button = screen.getByRole("button");

    fireEvent.change(input, {
      target: {
        value: "Arthur",
      },
    });

    expect(button).not.toBeDisabled();
  });
});

describe("List Interactions (Not OK)", () => {
  test("Should not let the user be able to click on the button when the input is empty", () => {
    render(<List />);
    const button = screen.getByRole("button");

    expect(button).toBeDisabled();
  });
});
