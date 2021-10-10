import React,{useEffect,useState} from 'react'
import { Link, useParams } from "react-router-dom";
function ProductInfo(props) {
    const [Product, setProduct] = useState({})

    useEffect(() => {
        setProduct(props.detail)
    }, [props.detail])

    const handleaddtocart =()=>{
        props.addToCart(props.detail._id)
    }
    return (
        <div>
            
              <div className="shop-details-content">
                <h4 className="title">{Product.title}</h4>
                <div className="shop-details-meta">
                  <ul>
                    <li className="shop-details-review">
                      <div className="rating">
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                        <i className="fas fa-star"></i>
                      </div>
                      <span>Review</span>
                    </li>
                    <li>
                      ID : <span>{Product._id}</span>
                    </li>
                  </ul>
                </div>
                <div className="shop-details-price">
                  <h2 className="price">₹{Product.price}</h2>
                  <h5 className="stock-status">{Product.countInStock}- IN Stock</h5>
                </div>
                <p>{Product.description}</p>
                <div className="shop-details-list">
                  <ul>
                    <li>
                      Type : <span>Ice Cream</span>
                    </li>
                    <li>
                      Expiry Date : <span>Nov 19.2021</span>
                    </li>
                  </ul>
                </div>
                <div className="shop-perched-info">
                {!localStorage.getItem('token')?
                                    <Link to="/login" className="btn" >Add to cart</Link> :
                                    <Link to="/cartpage" className="btn" onClick={handleaddtocart} >Add to cart</Link>
                                }
                </div>
                <div className="shop-details-bottom">
                  <h5 className="title">
                    <Link to="/">
                      <i className="far fa-heart"></i> Add To Wishlist
                    </Link>
                  </h5>
                </div>
              </div>
            </div>
    )
}

export default ProductInfo
