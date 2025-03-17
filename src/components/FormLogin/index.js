import "./styles.css";

const LoginForm = () => {
  return (
    <div className="LoginForm">
      <h2>Login</h2>
      <label className="name-email" for="email">
        Email:{" "}
      </label>
      <input
        className="email"
        type="email"
        id="email"
        name="email"
        placeholder="Digite seu email"
      />
      <label className="name-password" for="password">
        Senha
      </label>
      <input
        className="password"
        type="password"
        id="password"
        name="password"
        placeholder="Digite sua senha"
      />
      <button className="button" type="submit">
        Entrar
      </button>
    </div>
  );
};

export default LoginForm;
