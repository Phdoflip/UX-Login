import { useState } from "react";
import "./App.css";

export default function App() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="login-container">
      <h1 className="login-title">Acesse sua conta</h1>
      <form className="login-form">
        <label className="login-label">
          <span>Usuário</span>
          <input
            type="text"
            placeholder="Digite seu usuário"
            className="login-input"
            required
          />
        </label>

        <label className="login-label">
          <span>Senha</span>
          <div className="password-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              className="login-input"
              required
            />
            <button
              type="button"
              className="toggle-password"
              onClick={() => setShowPassword((prev) => !prev)}
              aria-label={showPassword ? "Ocultar senha" : "Mostrar senha"}
            >
              {showPassword ? (
                // Olho riscado (ocultar)
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  width="20"
                  height="20"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13.875 18.825A10.05 10.05 0 0112 19c-4.97 0-9.163-3.043-11-7 1.049-2.31 
                       2.846-4.177 5.057-5.243M9.88 9.88a3 3 0 104.24 4.24"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3l18 18"
                  />
                </svg>
              ) : (
                // Olho aberto (mostrar)
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  width="20"
                  height="20"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M2.458 12C3.732 7.943 7.523 5 12 
                       5c4.478 0 8.268 2.943 9.542 7-1.274 
                       4.057-5.064 7-9.542 7-4.477 
                       0-8.268-2.943-9.542-7z"
                  />
                </svg>
              )}
            </button>
          </div>
        </label>

        <button type="submit" className="login-button">
          Entrar
        </button>
      </form>

      <p className="login-footer">
        Não tem conta? <a href="#">Cadastre-se</a>
      </p>
    </div>
  );
}
