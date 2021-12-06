import { useEffect, useState } from "react";

import {getItem} from "../Products/Products";
import ItemDetail from "../ItemDetailContainer/ItemDetail/ItemDetail";

const ItemDetailContainer = () => {
    const [oneProduct, setOneProduct] = useState([]);

    useEffect(() => {
        const listOneProduct = getItem();

        listOneProduct.then((response) => {
            setOneProduct(response);
        }).catch((error) => {
            console.log(error);
        });

    }, []);

    return (
        <div className="itemDetailContainer">
            {/* <ItemCount getStock={10} getInitial={1} /> */}
            <ItemDetail product={oneProduct} />
        </div>
    );
};

export default ItemDetailContainer;