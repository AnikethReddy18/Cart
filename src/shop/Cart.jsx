import style from "./shop.module.css"
import { useOutletContext } from "react-router-dom";
import Item from "./Item";

function Cart() {
    const {cartItems} = useOutletContext();

    return (
        <div className={style.shop}>
            {cartItems.map((item) => (
                <Item
                    src={item.image}
                    key={item.id}
                    title={item.title}
                    price={item.price}
                    desc={item.description}
                />
            ))}
        </div>
    );
}

export default Cart;