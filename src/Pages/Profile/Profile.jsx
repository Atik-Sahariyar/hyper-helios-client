import { useForm } from "react-hook-form";
import "./profile.scss";
import axiosImgHost from "axios";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import useInterceptor from "../../Hooks/useInterceptor";
import { useContext } from "react";
// import { AuthContext } from "../../Providers/AuthProvider";
import defaultProfile from "../../../src/assets/default_profile_image.jpg"
import { AuthContext } from "../../Providers/authProvider";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const Profile = () => {
  const { register, handleSubmit, reset } = useForm();
  const axios = useInterceptor();
  const { user } = useContext(AuthContext);

  const { data: contacts, refetch } = useQuery({
    queryKey: ["contacts"],
    queryFn: async () => {
      const res = await axios.get("/contacts/");
      return res.data;
    },
  });

  const handleContact = async (data) => {
    const name = data.name;
    const phone_number = data.phoneNumber;
    const imageFile = { image: data.image[0] };
    const division = data.division;

    const url = await axiosImgHost.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    const image = url?.data?.data?.display_url || "";

    const contactInfo = {
      name,
      division,
      phone_number,
      image,
    };

    const res = await axios.post("contacts/create/", contactInfo);

    if (res.data) {
      refetch();
      reset();
    }
  };

  const handleDeleteContact = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to delete this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`contacts/delete/${id}`).then((res) => {
          if (res.data)
            Swal.fire({
              title: "Deleted!",
              text: "Your contact has been deleted.",
              icon: "success",
            });
          refetch();
        });
      }
    });
  };

  return (
    <div className="profile-container">
      <h1>Profile Page</h1>

      {/* User Details Section */}
      <div className="user-details">
        <img src={user.image ? user.image : defaultProfile} alt="User Avatar" />
        <div className="user-info">
          <h2>{user?.username}</h2>
          <p>{user?.email}</p>
        </div>
      </div>

      {/* Contacts Section */}
      <div className="contacts-section">

      
        {/* Add Contact Form */}
        <h2>Add new contact</h2>
        <form
          onSubmit={handleSubmit(handleContact)}
          className="add-contact-form"
        >
          <input
            type="text"
            {...register("name")}
            placeholder="Name"
            required
          />
          <input
            type="number"
            {...register("phoneNumber")}
            placeholder="Phone Number"
            required
          />
          <input
            type="file"
            {...register("image")}
            placeholder="Upload a image"
            id="image"
            required
          />
          <select {...register("division")} required>
            <option value="Dhaka">Dhaka</option>
            <option value="Rajshahi">Rajshahi</option>
            <option value="Chittagong">Chittagong</option>
            <option value="Khulna">Khulna</option>
            <option value="Barisal">Barisal</option>
            <option value="Sylhet">Sylhet</option>
            <option value="Rangpur">Rangpur</option>
            <option value="Mymensingh">Mymensingh</option>
          </select>
          <button type="submit">Add Contact</button>
        </form>

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
            {contacts?.map((contact) => (
              <tr key={contact.id}>
                <td>
                  <img src={contact.image} alt="Contact Avatar" />
                </td>
                <td>{contact.name}</td>
                <td>{contact.phone_number}</td>

                <td>{contact.division}</td>
                <td className="actions">
                  <Link to={`updateContact/${contact.id}`}><button  className="edit-btn">Edit</button></Link>
                  <button onClick={() => handleDeleteContact(contact.id)} className="delete-btn">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </div>
  );
};

export default Profile;
