import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getItem } from "../services/data";

const ShopItem = () => {
    const [item, setItem] = useState({});
    const params = useParams();

    useEffect(() => {
        setItem(getItem(params.id)[0]);
    }, [params.id]);

    return <div>
        <h1>{item.name}</h1>
        <h2>{item.desc}</h2>
        <img src={item.image} alt="" width={300} />
        </div>;
};

export default ShopItem;
