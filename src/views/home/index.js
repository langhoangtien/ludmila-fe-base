import Icon from "@/components/icon";
import "./style.css";
import { CartPlusRegular } from "../../../public/assets/svg-icons/cart-plus";

export default function HomeView({ products }) {
  return (
    <div className="container">
      <div className="row">
        <div className="col product-list">
          {products.map((product) => (
            <div key={product.id} className="product-item">
              <img src={product.image} alt={product.name} />
              <div className="product-item-info">
                <p className="title">{product.name}</p>
                <p className="price">{product.price}</p>
                <div>
                  <button className="add-to-cart btn fullwidth">
                    <CartPlusRegular /> Thêm vào giỏ hàng
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
