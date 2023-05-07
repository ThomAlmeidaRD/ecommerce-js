

function Product(props) {
    return (
        <div className="product">
            <img src={props.img} alt="" />
            <h2>{props.name}</h2>
            <p className="pricing">{props.price}</p>
        </div>
    )
}

export default Product