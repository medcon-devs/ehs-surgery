import { useState, useEffect } from 'react';
import BadgeTemplate from '../components/design/BadgeTemplate';
// import Layout from "@/components/design/layout";
import Layout from "@/components/layout/Layout";
import styles from './AdminPage.module.css';
 
 
export default function AdminPage() {
    const [searchTerm, setSearchTerm] = useState('');
    const [users, setUsers] = useState([]);
    const [searchResults, setSearchResults] = useState([]);
    const [selectedUser, setSelectedUser] = useState(null);
 
    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await fetch('https://ehs-surgery-conference.com/Backend/public/api/v1/user/account/users');
                const result = await response.json();
   
                if (result.success && result.data) {
                    setUsers(result.data);
                    console.error('Failed to fetch users:', result.message);
                }
            } catch (error) {
                console.error('Error fetching users:', error);
            }
        };
   
        fetchUsers();
    }, []);
 
    const formatUserName = (name) => {
        const nameParts = name.split(' ');
        return nameParts
            .map(part => part.charAt(0).toUpperCase() + part.slice(1).toLowerCase())
            .join(' ');
    };
 
    const handleSearch = () => {
        if (!searchTerm) {
            setSearchResults([]);
            setSelectedUser(null);
            return;
        }
   
        const filteredResults = users.filter(user =>
            user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            user.email.toLowerCase().includes(searchTerm.toLowerCase())
        );
   
        setSearchResults(filteredResults);
        setSelectedUser(null);
    };
   
    const handleUserClick = (user) => {
        setSelectedUser(user);
    };
 
    return (
        <Layout>
        <div className={styles.pageBackground}>
            <div className={styles.pageContainer}>
                <h1 className="text-2xl font-bold mb-4">Badge Page</h1>
 
                <div className={styles.searchContainer}>
                    <input
                        type="text"
                        className={styles.searchInput}
                        placeholder="Search by name or email"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    <button className={styles.searchButton} onClick={handleSearch}>
                        Search
                    </button>
                </div>
 
                {searchResults.length > 0 && (
                    <div className={styles.resultsContainer}>
                        <h2 className="text-lg font-semibold mb-2">Search Results</h2>
                        <ul>
                            {searchResults.map((user) => (
                                <li
                                    key={user.id}
                                    onClick={() => handleUserClick(user)}
                                    className={styles.userItem}
                                >
                                    {formatUserName(user.name)} ({user.email})
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
 
                {selectedUser && (
                    <div className="mt-8">
                        <BadgeTemplate user={selectedUser}/>
                    </div>
                )}
            </div>
        </div>
        </Layout>
    );
}