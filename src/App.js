// Import React and the UserProfileWithImmer component
import React from 'react';
import './App.css';
import UserProfileWithImmer from './UserProfileWithImmer';

// Define the App functional component
function App() {
  // Render the App component, including the UserProfileWithImmer component
  return (
    <div className="App">
      <header className="App-header">
        <h1>User Profile Manager</h1>
      </header>
      <main>
        {/* Include the UserProfileWithImmer component to manage user profiles */}
        <UserProfileWithImmer />
      </main>
    </div>
  );
}

// Export the App component for use in index.js
export default App;
