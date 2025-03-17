import { useState, useRef, useEffect } from "react";
import "./styles.css";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const emailRef = useRef(null);

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username.includes("@") || !username.includes(".")) {
      setError("Por favor, insira um e-mail válido.");
      return;
    }

    if (password.length < 6) {
      setError("A senha deve ter pelo menos 6 caracteres.");
      return;
    }

    console.log("Usuário:", username, "Senha:", password);
    setError("");
  };

  return (
    <form className="LoginForm" onSubmit={handleSubmit}>
      <h2>Entrar</h2>

      {error && <p style={{ color: "red", fontSize: "0.9rem" }}>{error}</p>}

      <label htmlFor="email">Email:</label>
      <input
        ref={emailRef}
        type="email"
        id="email"
        name="email"
        placeholder="Digite seu email"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <label htmlFor="password">Senha:</label>
      <input
        type="password"
        id="password"
        name="password"
        placeholder="Digite sua senha"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button type="submit">Entrar</button>
    </form>
  );
};

export default LoginForm;
