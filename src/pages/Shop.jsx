import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { getItems } from "../services/data";


const Shop = () => {
    //inicijalizacija
    const [items, setItems] = useState([]);

    // dogodi se componenta did mount i sada idemo po podatke

    useEffect(() => {
        setItems(getItems);
    }, []);

    return (
        <>
            <h1>Shop page</h1>
            {items.map((item) => (
                <Link key={item.id} to={'/shop/' + item.id}>
                    <h2>{item.name}</h2>
                </Link>
            ))}
        </>
    );
};

export default Shop;
