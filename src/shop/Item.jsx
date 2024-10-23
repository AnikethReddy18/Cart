import style from "./shop.module.css"

function Item(props) {
    function addToCart(){
        props.setCartItems((items)=>[...items, props.item])
    }

    return (
        <div className={style.item}>
            <img src={props.src} alt="Item" />
            <h4>{props.title}</h4>
            <span>{props.price}</span>
            <p>{props.desc}</p>
            <button className={style.addToCartButton} onClick={addToCart}>Add to Cart</button>
        </div>
    );
}

export default Item;