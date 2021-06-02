import "./AuthCSS.css";

function AuthenticationLayout({ children }) {
  return (
    <div className="auth-container">
      <div className="auth-box">{children}</div>
    </div>
  );
}

export default AuthenticationLayout;
