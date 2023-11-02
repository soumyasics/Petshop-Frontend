// 01-11-2023 Build by Anand R P
import "./UserLoginPage.css";
const LoginPage = () => {
  return (
    <>
      <div className="login-page-container">
        <div className="login-page-left-section">
          <div className="login-form-container">
            <h1>YAY, WE LOVE YOUR PETS</h1>
            <form>
              <div>
                <label>Email:</label>
                <input type="email" placeholder="Enter your email" />
              </div>

              <div>
                <label> Password: </label>
                <input type="password" placeholder="Enter your password" />
              </div>
            </form>

            <div>
              <div>
                
              </div>
              <p>
                Forgot Password?
              </p>
            </div>
          </div>
        </div>
        <div className="login-page-right-section"></div>
      </div>
    </>
  );
};

export default LoginPage;
