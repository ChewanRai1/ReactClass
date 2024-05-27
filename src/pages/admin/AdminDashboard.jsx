import React from "react";
import { useState } from "react";
import { createproductApi } from "../../apis/Api";
import { toast } from "react-toastify";
// jutyugik
const AdminDashboard = () => {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productDescription, setProductDescription] = useState("");

  //Image State
  const [productImage, setProductImage] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  //function to upload and preview image
  const handleImageUpload = (event) => {
    //0-file, 1-name, 2-size
    const file = event.target.files[0];
    setProductImage(file);
    setPreviewImage(URL.createObjectURL(file));
  };

  //handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      productName,
      productPrice,
      productCategory,
      productDescription,
      productImage
    );

    //make a logical form data
    const formData = new FormData()
    formData.append('productName', productName)
    formData.append('productPrice', productPrice)
    formData.append('productCategory', productCategory)
    formData.append('productDescription', productDescription)
    formData.append('productImage', productImage)

    //make a api call/request
    createproductApi(formData).then((res)=>{
      if(res.status === 201){
        toast.success(res.data.message)
      }else{
        toast.error("somthing went wrong in fornt end!")
      }
    }).catch((error)=>{
      if(error.response){
        if(error.response.status === 400){
          toast.error(error.response.data.message)
        }
        //spaace for 401 error
      }else if(error.response.status === 500){
        toast.error("internal server error")
      }else{
        toast.error("No response!")
      }

    })
  };
  return (
    <div className="container">
      <div className="d-flex justify-content-between mt-2">
        <h2>Admin Dashboard</h2>

        <button
          type="button"
          class="btn btn-danger"
          data-bs-toggle="modal"
          data-bs-target="#exampleModal"
        >
          Add Product
        </button>

        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="exampleModalLabel">
                  Create a new product!
                </h1>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <form action="">
                  <label>Product Name</label>
                  <input
                    onChange={(e) => setProductName(e.target.value)}
                    type="text"
                    className="form-control"
                    placeholder="Enter product name"
                  ></input>

                  <label className="mt-2">Product Price</label>
                  <input
                    onChange={(e) => setProductPrice(e.target.value)}
                    type="text"
                    className="form-control"
                    placeholder="Enter product name"
                  ></input>

                  <div className="mt-2">
                    <label>Select Category</label>
                    <select
                      onChange={(e) => setProductCategory(e.target.value)}
                      className="form-control"
                    >
                      <option value="flower">Plants</option>
                      <option value="gadgets">Gadgets</option>
                      <option value="electronics">Electronics</option>
                      <option value="mobile">mobile</option>
                    </select>
                  </div>
                  <label className="mt-2">Type product Description</label>

                  <textarea
                    onChange={(e) => setProductDescription(e.target.value)}
                    className="form-control"
                  ></textarea>

                  <label className="mt-2">Product image</label>
                  <input
                    onChange={handleImageUpload}
                    type="file"
                    className="form-control"
                  ></input>
                  {/*Preview image*/}
                  {previewImage && (
                    <div className="mb-2">
                      <img
                        src={previewImage}
                        alt="preview Image"
                        className="img-fluid rounded object-fit-cover mt-3"
                      ></img>
                    </div>
                  )}
                </form>
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button
                  onClick={handleSubmit}
                  type="button"
                  class="btn btn-primary"
                >
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <table className="table mt-13">
          <thead className="table-dark">
            <tr>
              <th> Product Image </th>
              <th> Product Name</th>
              <th> Price</th>
              <th> Category </th>
              <th> Description</th>
              <th> Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img
                  height={"40px"}
                  width={"60px"}
                  src="https://wallpapers.com/images/featured/tzhfez1w8ud2z8aw.jpg"
                  alt="deadpool"
                />
              </td>
              <td>Sunflower</td>
              <td>Npr. 500</td>
              <td>Superhero</td>
              <td>Funny </td>
              <td>
                <div className="btn-group" role="group">
                  <button className="btn btn-success">Edit</button>
                  <button className="btn btn-danger">Delete</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
