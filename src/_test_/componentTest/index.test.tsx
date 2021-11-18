import { render, screen, fireEvent } from "@testing-library/react";
import App from "../../App";
import Providers from "../../providers";
import { BrowserRouter } from "react-router-dom";
import RegisterPage from "../../pages/RegisterPage";
import LoginPage from "../../pages/LoginPage";
import Dashboard from "../../pages/Dashboard";
describe("all tests pages", () => {
  test("tests login render", () => {
    render(
      <BrowserRouter>
        <LoginPage />
      </BrowserRouter>
    );
    expect(screen.getByPlaceholderText("E-mail")).toBeTruthy();
    expect(screen.getByPlaceholderText("Senha")).toBeTruthy();
    expect(screen.getByText("entrar")).toBeTruthy();
    expect(screen.getByText("criar nova conta")).toBeTruthy();
  });
  test("tests register", () => {
    render(
      <BrowserRouter>
        <RegisterPage />
      </BrowserRouter>
    );

    const nameInput = screen.getByPlaceholderText("Nome");
    const emailInput = screen.getByPlaceholderText("E-mail");
    const passwordInput = screen.getByPlaceholderText("Senha");
    const cellInput = screen.getByPlaceholderText("Telefone");
    const registerButton = screen.getByText("cadastrar");

    fireEvent.change(nameInput, { target: { value: "jhon" } });
    fireEvent.change(emailInput, { target: { value: "jhon@kenzie.com" } });
    fireEvent.change(passwordInput, { target: { value: "1A#33333" } });
    fireEvent.change(cellInput, { target: { value: "35" } });

    expect(nameInput).toHaveValue("jhon");
    expect(emailInput).toHaveValue("jhon@kenzie.com");
    expect(passwordInput).toHaveValue("1A#33333");
    expect(cellInput).toHaveValue("35");

    fireEvent.click(registerButton);
  });

  test("tests login", () => {
    render(
      <BrowserRouter>
        <Providers>
          <LoginPage />
          <App />
        </Providers>
      </BrowserRouter>
    );

    const emailInput = screen.getByPlaceholderText("E-mail");
    const passwordInput = screen.getByPlaceholderText("Senha");
    const loginButton = screen.getByText("entrar");
    fireEvent.change(emailInput, { target: { value: "jhon@kenzie.com" } });
    fireEvent.change(passwordInput, { target: { value: "1A#33333" } });

    expect(emailInput).toHaveValue("jhon@kenzie.com");
    expect(passwordInput).toHaveValue("1A#33333");

    fireEvent.click(loginButton);
  });

  test("dashboard filter page test", () => {
    render(
      <BrowserRouter>
        <Providers>
          <Dashboard />
        </Providers>
      </BrowserRouter>
    );
    const fillterButton = screen.getByText("Abrir Filtros");
    fireEvent.click(fillterButton);

    const closeButton = screen.getByText("X");
    const filterInsideButton = screen.getByText("Filtrar");
    const clearButton = screen.getByText("Limpar");
    const cityInput = screen.getByPlaceholderText("digite uma cidade");
    const streetInput = screen.getByPlaceholderText("digite um bairro");

    fireEvent.change(cityInput, { target: { value: "cidade" } });

    fireEvent.change(streetInput, { target: { value: "street" } });

    expect(streetInput).toHaveValue("street");

    expect(cityInput).toHaveValue("cidade");
    fireEvent.click(closeButton);
    fireEvent.click(filterInsideButton);
    fireEvent.click(clearButton);
  });
});
