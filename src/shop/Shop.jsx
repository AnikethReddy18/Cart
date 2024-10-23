import style from "./shop.module.css";
import Item from "./Item";
import { useEffect, useState } from "react";
import { useOutletContext } from "react-router-dom";
function Shop() {
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const {setCartItems} = useOutletContext();

    useEffect(() => {
        async function fetchItems() {
            try {
                let response = await fetch("https://fakestoreapi.com/products");
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                let fetchedItems = await response.json();
                setItems(fetchedItems);
            } catch (error) {
                console.error("Error fetching items:", error);
            } finally {
                setLoading(false); 
            }
        }

        fetchItems();
    }, []);


    if (loading) {
        return <div className={style.loading}>Loading...</div>;
    }

    return (
        <div className={style.shop}>
            {items.map((item) => (
                <Item
                    src={item.image}
                    key={item.id}
                    title={item.title}
                    price={item.price}
                    desc={item.description}
                    item={item}
                    setCartItems={setCartItems}
                />
            ))}
        </div>
    );
}

export default Shop;
