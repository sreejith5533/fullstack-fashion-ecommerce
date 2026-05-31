import { useState } from "react";
import API from "../api/axios";

function AddProductCard() {
  const [formDataState, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    stock: "",
    is_active: true,
  });



  const [image, setImage] = useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formDataToSend  = new FormData();
    console.log(formDataToSend);

    Object.keys(formDataState).forEach((key) => {
      formDataToSend.append(key, formDataState[key]);
    });

    if (image) {
      formDataToSend.append("image", image);
    }


  

    try {
      const res = await API.post("/api/products/", formDataToSend,{
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Product added successfully:", res.data);
      alert("Product added successfully !");
    } catch (err) {
      console.log(err.response?.data || err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mt-3">
        <label htmlFor="product-name">Product Name</label>
        <input
          type="text"
          placeholder="Product Name"
          name="name"
          onChange={handleInputChange}
          value={formDataState.name}
        />
      </div>
      <div className="mt-3">
        <label htmlFor="description">Description:</label>
        <textarea name="description" id="description" value={formDataState.description} onChange={handleInputChange}></textarea>
      </div>
      <div className="price">
          <label htmlFor="price">Price:</label>
          <input type="number" name="price" id="price" placeholder="Product Price" onChange={handleInputChange} value={formDataState.price}/>
      </div>
      <div className="stock">
          <label htmlFor="stock">Stock:</label>
          <input type="number" name="stock" id="stock" placeholder="Product Stock" onChange={handleInputChange} value={formDataState.stock}/>
      </div>
      <div className="image">
          <label htmlFor="image">Image:</label>
          <input type="file" name="image" id="image" onChange={handleImageChange}/>
      </div>
      <button type="submit">Add Product</button>
    </form>
  );
}


export default AddProductCard