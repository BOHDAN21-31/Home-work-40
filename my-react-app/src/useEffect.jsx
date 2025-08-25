import { useState, useEffect } from 'react';

const UserData = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
                const data = await response.json();
                setUser(data);
            } catch (error) {
                console.error('Помилка отримання даних:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            {user ? (
                <div>
                    <p>Ім'я: {user.name}</p>
                    <p>Email: {user.email}</p>
                </div>
            ) : (
                <p>Завантаження даних користувача...</p>
            )}
        </div>
    );
};

export default UserData;