import ItemCount from "../../ItemCount/ItemCount";
import '../ItemDetail/ItemDetail.css'


const ItemDetail = ({ product }) => {
    return(
        <div className="oneProduct">
            {product.length !== 0 ? (
                <div className = "oneProductText">
                <h1>Producto Seleccionado</h1>
                <h2> {product.name} </h2>
                <img className = "imgProductSelect" src={product.img} alt="Imagen" />
                <p>{product.price}</p>
                <p>{product.description}</p>
                <ItemCount getName={product.name} getStock={product.valueStock} getInitial={1} />
                <p>{product.stock}</p>
                </div>
            ):(<div>Cargando...</div>)}
        </div>
    )
};

export default ItemDetail;