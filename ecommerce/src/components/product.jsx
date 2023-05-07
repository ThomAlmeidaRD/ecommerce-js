
function Product(props) {
    return (
        <div className="product" onClick={openPage}>
            <img src={props.img} alt="" />
            <h2>{props.name}</h2>
            <p className="pricing">{props.price}</p>
        </div>
    )
}


function openPage(item) {
    //console.log(item.target)
    var thisElement = item.target
    var thisParent = thisElement.parentNode
    console.log(thisParent)
    console.log(thisParent.childNodes[0].src)
    console.log(thisParent.childNodes[1].innerText)
    console.log(thisParent.childNodes[2].innerText)

}


export default Product