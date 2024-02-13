import { useForm } from "react-hook-form";
import "./updateContact.scss"
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axiosImgHost from "axios";
import useInterceptor from "../../Hooks/useInterceptor";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;


const UpdateContact = () => {
    const { register, handleSubmit, reset } = useForm();
    const { id } = useParams();
    const axios = useInterceptor();
    const navigate = useNavigate();
 
    const {data: contact, isPending: loading} = useQuery({
      queryKey: ["contact", "id"],
      queryFn: async() => {
        const res = await axios.get(`contacts/${id}`);
        return res.data;
      }
    });

    if(loading || !contact){
      return <p>Loading...</p>
    }
    
    const {name, phone_number, division, iamge } = contact
  
    const handleUpdateContact = async(data) => {
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
  
      const res = await axios.patch(`contacts/update/${id}/`, contactInfo);
      console.lo
      if (res.data) {
        navigate("/profile")
        reset();
      }
    }

    return (
        <div className="container">
              <h2>Update contact</h2>
        <form
          onSubmit={handleSubmit(handleUpdateContact)}
          className="add-contact-form"
        >
          <input
            type="text"
            defaultValue={name}
            {...register("name")}
            placeholder="Name"
            required
          />
          <input
            type="number"
            defaultValue={phone_number}
            {...register("phoneNumber")}
            placeholder="Phone Number"
            required
          />
          <input
            type="file"
            {...register("image")}
            defaultValue={iamge}
            placeholder="Upload a image"
            required
          />
          <select {...register("division")} defaultValue={division} required>
            <option value="Dhaka">Dhaka</option>
            <option value="Rajshahi">Rajshahi</option>
            <option value="Chittagong">Chittagong</option>
            <option value="Khulna">Khulna</option>
            <option value="Barisal">Barisal</option>
            <option value="Sylhet">Sylhet</option>
            <option value="Rangpur">Rangpur</option>
            <option value="Mymensingh">Mymensingh</option>
          </select>
          <button type="submit">Update Contact</button>
        </form>
        </div>
    );
};

export default UpdateContact;