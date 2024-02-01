import "./profile.scss";

const Profile = () => {
  return (
    <div className="profile-container">
      <h1>Profile Page</h1>

      {/* User Details Section */}
      <div className="user-details">
        <img src="user-avatar.jpg" alt="User Avatar" />
        <div className="user-info">
          <h2>John Doe</h2>
          <p>john@example.com</p>
        </div>
      </div>

      {/* Contacts Section */}
      <div className="contacts-section">
        <h2>My Contacts</h2>

        {/* Contacts Table */}
        <table className="contacts-table">
          {/* Table Headers */}
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Phone Number</th>

              <th>Division</th>
              <th>Actions</th>
            </tr>
          </thead>
          {/* Table Body (Dynamic Content) */}
          <tbody>
            <tr>
              <td>
                <img src="contact-avatar.jpg" alt="Contact Avatar" />
              </td>
              <td>John Doe</td>
              <td>123-456-7890</td>

              <td>Dhaka</td>
              <td className="actions">
                <button className="edit-btn">Edit</button>
                <button className="delete-btn">Delete</button>
              </td>
            </tr>
            {/* Add more rows dynamically based on contacts data */}
          </tbody>
        </table>

        {/* Add Contact Form */}
        <h3>Add new contact</h3>
        <div className="add-contact-form">
        
          <input type="text" placeholder="Name" />
          <input type="number" placeholder="Phone Number" />
          <select>
            <option value="Dhaka">Dhaka</option>
            <option value="Rajshahi">Rajshahi</option>
            <option value="Chittagong">Chittagong</option>       
            <option value="Khulna">Khulna</option>
            <option value="Barisal">Barisal</option>
            <option value="Sylhet">Sylhet</option>
            <option value="Rangpur">Rangpur</option>
            <option value="Mymensingh">Mymensingh</option>
          </select>
          <button>Add Contact</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
