import React, { useEffect, useState,useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Footer } from "./Footer";
import Axios from "axios";
import { Navbar } from "./Navbar";
import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";
import CartContext from "./context/CartContext";
import Spinner from "./Spinner";
import SweetAlertContext from "./context/SweetAlertContext";



export const ProductDetail = (props) => {
  const { toggle, addminus,cart } = useContext(SweetAlertContext);
  const [loading, setloading] = useState(false)

  useEffect(() => {
    addminus();
  });
  useEffect(() => {
    toggle();
    setloading(true)
    setTimeout(() => {
      setloading(false)
    }, 1000);
  }, []);

  const { productId } = useParams();
  const [Product, setProduct] = useState([]);
  const {addToCart} = useContext(CartContext)


  const url = `http://localhost:5000/api/product/products_by_id?id=${productId}&type=single`;

  useEffect(() => {
    Axios.get(url).then((response) => {
      setProduct(response.data[0]);
    });
  }, []);

  const addtocarthandler =((productId)=>{
    addToCart(productId);
    cart();
  })
  return (
    <>
      <Navbar />
      {loading && <Spinner/>}
      <section className="shop-details-area pt-90 pb-90">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <ProductImage detail={Product} />
            </div>
            <div className="col-lg-5">
            <ProductInfo addToCart={addtocarthandler} detail={Product}/>
          </div>
          </div>
          <div className="row">
            <div className="col-12">
            </div>
          </div>
        </div>
      </section>

      <section className="best-sellers-area pt-85 pb-70">
        <div className="container">
          <div className="row align-items-end mb-40">
            <div className="col-md-8 col-sm-9">
              <div className="section-title">
                <span className="sub-title">Related Products</span>
                <h2 className="title">From this Collection</h2>
              </div>
            </div>
            <div className="col-md-4 col-sm-3">
              <div className="section-btn text-left text-md-right">
                <button>
                  View All
                </button>
              </div>
            </div>
          </div>
          <div className="best-sellers-products">
            <div className="row justify-content-center">
              <div className="col-3">
                <div className="sp-product-item mb-20">
                  <div className="sp-product-thumb">
                    <span className="batch">New</span>
                    <Link to="shop-details.html">
                      <img src={"../img/sp_products09.png"} alt="" />
                    </Link>
                  </div>
                  <div className="sp-product-content">
                    <div className="rating">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                    <h6 className="title">
                      <Link to="shop-details.html">
                        Uncle Orange Vanla Ready Pice
                      </Link>
                    </h6>
                    <span className="product-status">IN Stock</span>
                    <div className="sp-cart-wrap">
                      <form action="#">
                        <div className="cart-plus-minus">
                          <input type="text" value="1" />
                          <div className="dec qtybutton">-</div>
                          <div className="inc qtybutton">+</div>
                        </div>
                      </form>
                    </div>
                    <p>$1.50 - 1 kg</p>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="sp-product-item mb-20">
                  <div className="sp-product-thumb">
                    <span className="batch discount">15%</span>
                    <Link to="shop-details.html">
                      <img src={"../img/sp_products02.png"} alt="" />
                    </Link>
                  </div>
                  <div className="sp-product-content">
                    <div className="rating">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                    <h6 className="title">
                      <Link to="shop-details.html">
                        Dannon Max Vanla ice cream
                      </Link>
                    </h6>
                    <span className="product-status">IN Stock</span>
                    <div className="sp-cart-wrap">
                      <form action="#">
                        <div className="cart-plus-minus">
                          <input type="text" value="1" />
                          <div className="dec qtybutton">-</div>
                          <div className="inc qtybutton">+</div>
                        </div>
                      </form>
                    </div>
                    <p>$3.50 - 1 lt</p>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="sp-product-item mb-20">
                  <div className="sp-product-thumb">
                    <span className="batch discount">25%</span>
                    <Link to="shop-details.html">
                      <img src={"../img/sp_products03.png"} alt="" />
                    </Link>
                  </div>
                  <div className="sp-product-content">
                    <div className="rating">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                    <h6 className="title">
                      <Link to="shop-details.html">
                        Walnuts Max Vanla Greek Pice
                      </Link>
                    </h6>
                    <span className="product-status">IN Stock</span>
                    <div className="sp-cart-wrap">
                      <form action="#">
                        <div className="cart-plus-minus">
                          <input type="text" value="1" />
                          <div className="dec qtybutton">-</div>
                          <div className="inc qtybutton">+</div>
                        </div>
                      </form>
                    </div>
                    <p>$2.99 - 1 kg</p>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="sp-product-item mb-20">
                  <div className="sp-product-thumb">
                    <span className="batch">new</span>
                    <Link to="shop-details.html">
                      <img src={"../img/sp_products04.png"} alt="" />
                    </Link>
                  </div>
                  <div className="sp-product-content">
                    <div className="rating">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                    <h6 className="title">
                      <Link to="shop-details.html">
                        Brachs Bens Vanla Ready Pice
                      </Link>
                    </h6>
                    <span className="product-status">IN Stock</span>
                    <div className="sp-cart-wrap">
                      <form action="#">
                        <div className="cart-plus-minus">
                          <input type="text" value="1" />
                          <div className="dec qtybutton">-</div>
                          <div className="inc qtybutton">+</div>
                        </div>
                      </form>
                    </div>
                    <p>$2.99 - 1 kg</p>
                  </div>
                </div>
              </div>
              <div className="col-3">
                <div className="sp-product-item mb-20">
                  <div className="sp-product-thumb">
                    <span className="batch discount">25%</span>
                    <Link to="shop-details.html">
                      <img src={"../img/sp_products05.png"} alt="" />
                    </Link>
                  </div>
                  <div className="sp-product-content">
                    <div className="rating">
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                      <i className="fas fa-star"></i>
                    </div>
                    <h6 className="title">
                      <Link to="shop-details.html">
                        Black Lady Vanla Greek Grapes
                      </Link>
                    </h6>
                    <span className="product-status">IN Stock</span>
                    <div className="sp-cart-wrap">
                      <form action="#">
                        <div className="cart-plus-minus">
                          <input type="text" value="1" />
                          <div className="dec qtybutton">-</div>
                          <div className="inc qtybutton">+</div>
                        </div>
                      </form>
                    </div>
                    <p>$5.99 - 1 kg</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};
