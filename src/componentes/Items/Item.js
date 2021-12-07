import '../Items/Item.css'

const Item = ({ product }) => {
    return (
        <div className="ItemsProducts" >
            <div className = "ContainerItem">
            <h1> {product.name} </h1>
            <img src={product.img} alt="Imagen" />
            <p>{product.price}</p>
            <button>ver detalle del producto</button>
            <p>{product.stock}</p>
            </div>
        </div>
    );
};
export default Item;