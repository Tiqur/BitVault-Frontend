import styles from './styles.module.css'
import AuthInputBox from "../../components/AuthInputBox"

function LoginPage() {
    return (
      <div className={styles.container}>
          <div className={styles.wrap}>
            <div className={styles.divider}></div>
            <AuthInputBox type="text" name="uname" placeholder="Username"/>
            <AuthInputBox type="text" name="email" placeholder="Email"/>
            <AuthInputBox type="password" name="password1" placeholder="Password"/>
            <AuthInputBox type="password" name="password2" placeholder="Confirm password"/>
            <button type="submit">Register</button>
          </div>
      </div>
    );
}
  
export default LoginPage;
  