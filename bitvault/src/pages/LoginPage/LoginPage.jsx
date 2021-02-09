import styles from './styles.module.css'
import AuthInputBox from "../../components/AuthInputBox"


function LoginPage() {
    return (
      <div className={styles.container}>
          <div className={styles.wrap}>
            <div className={styles.divider}></div>
            <AuthInputBox type="text" name="uname" placeholder="Username or Email"/>
            <AuthInputBox type="password" name="password" placeholder="Password"/>
            
            <label className={styles.checkbox}>
              <input type="checkbox"></input> Remember me?
            </label>

            <button type="submit">Login</button>
          </div>
      </div>
    );
}
  
export default LoginPage;
  