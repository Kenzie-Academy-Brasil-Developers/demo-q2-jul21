import { render, screen } from "@testing-library/react";
import Card from "../../components/Card";

test("Should show personal info when the prop isShowPersonalInfo is true", () => {
  render(<Card isShowPersonalInfo={true} name="Gabriel" />);

  const dataText = screen.queryByText("Meus dados pessoais - Nome: Gabriel");

  expect(dataText).toBeInTheDocument();
});

test("Should not show personal info when the props isShowPersonalInfo is false", () => {
  render(<Card name="Gabriel" />);
  const dataText = screen.queryByText("Meus dados pessoais - Nome: Gabriel");

  expect(dataText).not.toBeInTheDocument();
});
