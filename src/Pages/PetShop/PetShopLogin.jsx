import "./PetShopLogin.css";
const PetShopLogin = () => {
  return (
    <div className="petshop-login-page">
      <h1>Pet shop Login </h1>
      <form action="">
        <input className="credentials" type="email" placeholder="Email" />
        <input className="credentials" type="password" placeholder="Password" />
        <div className="petshop-login-remember-me">
          <div>
          <input type="checkbox" name="remember-me" />
          <label for="remember-me">Remember me</label>

          </div>

            <p>Forgot Password</p>
        </div>
        <input type="submit" value="Login" />
      </form>
    </div>
  );
};
export default PetShopLogin;
