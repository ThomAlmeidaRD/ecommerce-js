
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

    var itemPage = document.getElementById('item-page')
    var backBtn = document.getElementById('back')

    var thisElement = item.target
    var thisParent = thisElement.parentNode

       
    itemPage.style.display = 'flex'

    itemPage.childNodes[0].childNodes[0].childNodes[1].src = thisParent.childNodes[0].src
    itemPage.childNodes[0].childNodes[1].innerText = thisParent.childNodes[1].innerText
    itemPage.childNodes[0].childNodes[2].innerText = thisParent.childNodes[2].innerText

    backBtn.addEventListener('click', function () {
        itemPage.style.display = 'none'
    })

    var addCartBtn = document.getElementById('add-cart')
    addCartBtn.addEventListener('click', function(){
        alert('adicionado ao carrinho !')
    })

}


export default Product