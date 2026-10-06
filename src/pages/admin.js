import { useState } from 'react';
import { useRouter } from 'next/router';
import Layout from "@/components/layout/Layout";
import styles from './AdminPage.module.css';
 
export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();
 
    const handleLogin = () => {
        const staticEmail = 'admin@ehs.com';
        const staticPassword = '12345';
 
        if (email === staticEmail && password === staticPassword) {
            sessionStorage.setItem('isLoggedIn', 'true');
            router.push('/badge');
        } else {
            setError('Invalid email or password');
        }
    };
 
    return (
        <Layout>
        <div className={styles.pageBackground}>
            <div className={styles.loginContainer}>
                <h1 className={styles.loginTitle}>Admin Login</h1>
                {error && <p className={styles.loginError}>{error}</p>}
                <div className={styles.formGroup}>
                    <label>Email</label>
                    <input
                        type="email"
                        className={styles.formControl}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Enter your email"
                    />
                </div>
                <div className={styles.formGroup}>
                    <label>Password</label>
                    <input
                        type="password"
                        className={styles.formControl}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                    />
                </div>
                <button onClick={handleLogin} className={styles.loginButton}>
                    Login
                </button>
                <p className={styles.loginFooter}>
                    Only authorized users can access the admin panel.
                </p>
            </div>
        </div>
        </Layout>
    );
}