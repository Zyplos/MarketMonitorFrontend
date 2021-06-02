import AuthenticationLayout from "../internals/AuthenticationLayout";

function RegisterPage() {
  return (
    <AuthenticationLayout>
      <form>
        <h1>Register</h1>
        <label for="email">Email</label>
        <input type="text" name="email" />
        <label for="username">Username</label>
        <input type="text" name="username" />
        <label for="password">Password</label>
        <input type="password" name="password" />
        <div>
          <input type="checkbox" id="horns" name="horns" />
          <label for="horns">I agree to the terms and conditions.</label>
        </div>
        <button type="submit">Submit</button>
      </form>
    </AuthenticationLayout>
  );
}

export default RegisterPage;
