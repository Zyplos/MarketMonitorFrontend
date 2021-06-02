import AuthenticationLayout from "../internals/AuthenticationLayout";

function LoginPage() {
  return (
    <AuthenticationLayout>
      <form>
        <h1>Login</h1>
        <label for="username">Username</label>
        <input type="text" name="username" />
        <label for="password">Password</label>
        <input type="password" name="password" />
        <button type="submit">Log In</button>
      </form>
    </AuthenticationLayout>
  );
}

export default LoginPage;
