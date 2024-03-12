// Import React and the useImmer hook from the 'use-immer' package
import React from 'react';
import { useImmer } from 'use-immer';

// Define the UserProfileWithImmer functional component
function UserProfileWithImmer() {
  // Initialize the userProfile state using useImmer
  const [userProfile, setUserProfile] = useImmer({
    name: '',
    email: '',
    contactDetails: {
      phone: '',
      address: '',
    },
    preferences: {
      newsletter: false,
      notifications: false,
    },
  });

  // Function to update contact details
  const updateContactDetails = (phone, address) => {
    setUserProfile(draft => {
      draft.contactDetails.phone = phone;
      draft.contactDetails.address = address;
    });
  };

  // Function to toggle the newsletter subscription
  const toggleNewsletterSubscription = () => {
    setUserProfile(draft => {
      draft.preferences.newsletter = !draft.preferences.newsletter;
    });
  };

  // Render the component UI with a Facebook-like theme
  return (
    <div className="profile-container">
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input
          id="name"
          type="text"
          className="form-control"
          value={userProfile.name}
          onChange={(e) => setUserProfile(draft => { draft.name = e.target.value; })}
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="text"
          className="form-control"
          value={userProfile.email}
          onChange={(e) => setUserProfile(draft => { draft.email = e.target.value; })}
        />
      </div>

      <div className="form-group">
        <label htmlFor="phone">Phone:</label>
        <input
          id="phone"
          type="text"
          className="form-control"
          value={userProfile.contactDetails.phone}
          onChange={(e) => updateContactDetails(e.target.value, userProfile.contactDetails.address)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="address">Address:</label>
        <input
          id="address"
          type="text"
          className="form-control"
          value={userProfile.contactDetails.address}
          onChange={(e) => updateContactDetails(userProfile.contactDetails.phone, e.target.value)}
        />
      </div>

      <button
        className={`btn ${userProfile.preferences.newsletter ? 'btn-danger' : 'btn-primary'}`}
        onClick={toggleNewsletterSubscription}
      >
        {userProfile.preferences.newsletter ? 'Unsubscribe Newsletter' : 'Subscribe to Newsletter'}
      </button>

      <div className="user-profile-display">
        <h3>User Profile:</h3>
        <p><strong>Name:</strong> {userProfile.name}</p>
        <p><strong>Email:</strong> {userProfile.email}</p>
        <p><strong>Phone:</strong> {userProfile.contactDetails.phone}</p>
        <p><strong>Address:</strong> {userProfile.contactDetails.address}</p>
        <p><strong>Newsletter Subscription:</strong> {userProfile.preferences.newsletter ? 'Subscribed' : 'Not Subscribed'}</p>
        <p><strong>Notification Settings:</strong> {userProfile.preferences.notifications ? 'Enabled' : 'Disabled'}</p>
      </div>
    </div>
  );
}

// Export the UserProfileWithImmer component
export default UserProfileWithImmer;
