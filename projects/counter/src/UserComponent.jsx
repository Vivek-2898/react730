import React, { useState, useEffect } from 'react';

function UserComponent() {
    // State to store user data
    const [user, setUser] = useState(null);
    
    // useEffect to fetch user data on component mount
    useEffect(() => {
        // Function to fetch user data
        const fetchUserData = async () => {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
                const data = await response.json();
                setUser(data); // Set user data in state
            } catch (error) {
                console.error("Failed to fetch user data:", error);
            }
        };
        
        fetchUserData();
    }, []); // Empty dependency array means this effect runs once on mount

    // Conditional rendering based on user data availability
    if (!user) return <div>Loading...</div>;

    return (
        <div>
            <h1>User Details</h1>
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            {/* Add more fields as needed */}
        </div>
    );
}

export default UserComponent;