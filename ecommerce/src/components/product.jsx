
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
    var cartContainer = document.getElementById('cart-container')
    var backBtn = document.getElementById('back')
    var closeCart = document.getElementById('closeCart')
    var addCartBtn = document.getElementById('add-cart')

    var cardCounter = 0
    var folhaDeEstilo = document.styleSheets[0];

    var thisElement = item.target
    var thisParent = thisElement.parentNode


    itemPage.style.display = 'flex'

    itemPage.childNodes[0].childNodes[0].childNodes[1].src = thisParent.childNodes[0].src
    itemPage.childNodes[0].childNodes[1].childNodes[0].innerText = thisParent.childNodes[1].innerText
    itemPage.childNodes[0].childNodes[1].childNodes[1].innerText = thisParent.childNodes[2].innerText
    
    closeCart.addEventListener('click', function () {
        cartContainer.style.display = 'none'
     })


    backBtn.addEventListener('click', function () {
        itemPage.style.display = 'none'
    })


    addCartBtn.addEventListener('click', function () {
        cardCounter += 1
        var regraDeEstilo = `
        #cart::after {
            content: '${cardCounter}';
            font-size: 12px;
            background-color: #181818;
            padding: 4px 7px;
            color: #fff;
            border-radius: 50%;
            font-weight: bold;
            position: absolute;
            left: 26px;
            top: 16px;
        }
        `;

        folhaDeEstilo.insertRule(regraDeEstilo, folhaDeEstilo.cssRules.length);
    })

}


export default Product