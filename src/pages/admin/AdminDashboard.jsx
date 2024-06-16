import React from "react";
import { useState, useEffect } from "react";
import {
  createproductApi,
  deleteProduct,
  getAllProducts,
} from "../../apis/Api";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
// jutyugik
const AdminDashboard = () => {
  //logic for get products
  const [products, setProducts] = useState([]);
  // Hit API (Get All Product) Auto -> useEffect (list of products)
  useEffect(() => {
    getAllProducts()
      .then((res) => {
        // success, message , list of products(product)
        console.log(res.data.products);
        setProducts(res.data.products);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  //Make a state to save (Array format)
  // Table row (pn, pp, pd)

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

  //delete Product
  const handleDelete = (id) => {
    const confirmDialog = window.confirm("Are you sure");
    if (confirmDialog) {
      //Delete Product
      deleteProduct(id)
        .then((res) => {
          if (res.status === 201) {
            toast.success(res.data.message);
            window.location.reload();
          }
        })
        .catch((error) => {
          if (error.response.status === 500) {
            toast.error(error.response.data.message);
          } else if (error.response.status === 400) {
            toast.error(error.response.data.message);
          }
        });
    }
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
    const formData = new FormData();
    formData.append("productName", productName);
    formData.append("productPrice", productPrice);
    formData.append("productCategory", productCategory);
    formData.append("productDescription", productDescription);
    formData.append("productImage", productImage);

    //make a api call/request
    createproductApi(formData)
      .then((res) => {
        if (res.status === 201) {
          toast.success(res.data.message);
        } else {
          toast.error("something went wrong in fornt end!");
        }
      })
      .catch((error) => {
        if (error.response) {
          if (error.response.status === 400) {
            toast.error(error.response.data.message);
          }
          //spaace for 401 error
        } else if (error.response.status === 500) {
          toast.error("internal server error");
        } else {
          toast.error("No response!");
        }
      });
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
            {products.map((singleProduct) => (
              <tr>
                <td>
                  <img
                    height={"40px"}
                    width={"40px"}
                    src={`http://localhost:8000/api/product/${singleProduct.productImage}`}
                    alt=""
                  />
                </td>
                <td>{singleProduct.productName}</td>
                <td>NPR.{singleProduct.productPrice}</td>
                <td>{singleProduct.productCategory}</td>
                <td>{singleProduct.productDescription}</td>

                <td>
                  <div className="btn-group" role="group">
                    <Link
                      to={`/admin/update/${singleProduct._id}`}
                      className="btn btn-success"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => handleDelete(singleProduct._id)}
                      className="btn btn-danger"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;

//New page (Update Prodiuct)
// Form(required Filed) n,p,d,c, old image, new image
// useState 7 -
// Fill the previous values
// 5. Call the API(single product)
// 5.1 Backend
// 5.2 Based on _id(Admin Dashboard)
// transport '_id' to update product
// recieved in update product page
