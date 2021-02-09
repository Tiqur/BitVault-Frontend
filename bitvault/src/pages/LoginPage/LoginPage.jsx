import styles from './styles.module.css'


function LoginPage() {
    return (
      <div className={styles.container}>
          <div className={styles.wrap}>
            <div className={styles.divider}></div>
            <input type="text" name="uname" placeholder="Username or Email" required></input>
            <input type="password" name="password" placeholder="Password" required></input>

            <label className={styles.checkbox}>
              <input type="checkbox"></input> Remember me?
            </label>

            <button type="submit">Login</button>
          </div>
      </div>
    );
}
  
export default LoginPage;
  