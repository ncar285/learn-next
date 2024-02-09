import styles from '@/app/ui/LoginPage.module.css';
import AcmeLogo from '@/app/ui/acme-logo';
import LoginForm from '@/app/ui/login-form';
 
export default function LoginPage() {
  return (
    <main className={styles.pageContainer}>
      <div className={styles.contentContainer}>
        <div className={styles.logoContainer}>
          <div className={styles.logoInnerContainer}>
            <AcmeLogo />
          </div>
        </div>
        <LoginForm />
      </div>
    </main>
  );
}