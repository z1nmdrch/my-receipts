import React from "react";
import "../css/Admin.css";

const users = [
    { id: 1, email: "user1@example.com", checksUploaded: 12 },
    { id: 2, email: "user2@example.com", checksUploaded: 5 },
    { id: 3, email: "user3@example.com", checksUploaded: 8 },
];

function App() {
    const handleDelete = (id) => {
        alert(`Deleting user with id ${id}`);
        // Тут можно будет сделать реальное удаление через API
    };

    return (
        <div className="container">
            <aside className="sidebar">
                <h2 className="logo">Admin</h2>
                <nav className="nav">
                    <a href="#">Dashboard</a>
                    <a href="#">Users</a>
                    <a href="#">Settings</a>
                    <a href="#">Logout</a>
                </nav>
            </aside>

            <main className="main">
                <header className="header">
                    <h1>Users</h1>
                </header>

                <section className="content">
                    <table className="user-table">
                        <thead>
                        <tr>
                            <th>Email</th>
                            <th>Checks Uploaded</th>
                            <th>Actions</th>
                        </tr>
                        </thead>
                        <tbody>
                        {users.map((user) => (
                            <tr key={user.id}>
                                <td>{user.email}</td>
                                <td>{user.checksUploaded}</td>
                                <td>
                                    <button
                                        className="delete-button"
                                        onClick={() => handleDelete(user.id)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </section>
            </main>
        </div>
    );
}

export default App;
