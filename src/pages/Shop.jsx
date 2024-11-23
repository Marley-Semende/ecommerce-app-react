import { useState, useEffect } from "react";
import { Heart, ShoppingBag } from "lucide-react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

function Shop() {
  const [products, setProducts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const totalProducts = 150;
  const itemsPerPage = 16;
  useEffect(() => {
    async function getProducts() {
      try {
        const res = await fetch(
          `https://fakestoreapi.in/api/products?page=${currentPage}&limit=${itemsPerPage}`
        );
        if (!res.ok) {
          throw new Error("Couldn't get products," + res.status);
        }
        const data = await res.json();
        const products = data.products;
        setProducts(products);
      } catch (err) {
        console.error(err.message);
      }
    }
    getProducts();
  }, [currentPage]);

  const totalPages = Math.ceil(totalProducts / itemsPerPage);

  const getVisiblePages = () => {
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }
    if (currentPage <= 4) {
      return [1, 2, 3, 4, 5, "...", totalPages];
    }
    if (currentPage >= totalPages - 3) {
      return [
        1,
        "...",
        totalPages - 4,
        totalPages - 3,
        totalPages - 2,
        totalPages - 1,
        totalPages,
      ];
    }
    return [
      1,
      "...",
      currentPage - 1,
      currentPage,
      currentPage + 1,
      "...",
      totalPages,
    ];
  };

  function navigateToPage(page) {
    if (page !== "..." && page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  }

  return (
    <div className="shop-wrapper">
      <div className="product-cards-wrapper">
        {products.map((product) => (
          <div className="card" key={product.id}>
            <Heart className="fav-icon" />
            <img src={product.image} alt={product.title} />
            <p className="product-title">{product.title}</p>
            {product.color ? (
              <p className="product-color"> {product.color}</p>
            ) : null}
            <p className="product-price">${product.price}</p>

            <div className="add-to-cart-container">
              <Tippy
                content="Add to cart"
                placement="top"
                theme="custom"
                className="custom-tooltip"
              >
                <ShoppingBag className="add-to-cart-btn" />
              </Tippy>
            </div>

            {product.discount > 0 ? (
              <span className="product-discount">{product.discount}% OFF</span>
            ) : null}
          </div>
        ))}
      </div>

      <div className="pagination-ctrls">
        <button
          onClick={() => navigateToPage(currentPage - 1)}
          className="pagination-btn prev-btn"
          disabled={currentPage === 1}
        >
          <span className="chevron">&#9664;</span>
        </button>

        {getVisiblePages().map((page, index) => (
          <button
            key={index}
            onClick={() => navigateToPage(page)}
            className={`pagination-btn ${page === currentPage ? "active" : ""}`}
          >
            {page}
          </button>
        ))}

        <button
          onClick={() => navigateToPage(currentPage + 1)}
          className="pagination-btn next-btn"
          disabled={currentPage === totalPages}
        >
          <span className="chevron">&#9654;</span>
        </button>
      </div>
    </div>
  );
}
export default Shop;
