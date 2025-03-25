import { useAuth } from '../context/AuthContext';
import './SocialLogin.css';

const SocialLogin = () => {
  const { loginWithGoogle, loginWithFacebook, loginWithTwitter } = useAuth();

  return (
    <div className="social-login">
      <div className="social-divider">
        <span>Or continue with</span>
      </div>
      <div className="social-buttons">
        <button className="social-button google" onClick={loginWithGoogle}>
          <i className="fab fa-google"></i>
          <span>Google</span>
        </button>
        <button className="social-button facebook" onClick={loginWithFacebook}>
          <i className="fab fa-facebook-f"></i>
          <span>Facebook</span>
        </button>
        <button className="social-button twitter" onClick={loginWithTwitter}>
          <i className="fab fa-twitter"></i>
          <span>Twitter</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin; 