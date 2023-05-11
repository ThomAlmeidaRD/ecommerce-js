

function openCart(){
   var cartContainer = document.getElementById('cart-container')
   cartContainer.style.display = 'flex'
}

function Navbar() {
    return (
        <>
            <nav>
                <ul>
                    <li id="logo"><ion-icon name="logo-javascript"></ion-icon></li>
                    <li id="cart" onClick={openCart}><ion-icon name="cart-outline"></ion-icon></li>
                    <li id="shipping"><ion-icon name="albums-outline"></ion-icon></li>
                    <li id="color-mode"><ion-icon name="moon-outline"></ion-icon></li>
                </ul>
            </nav>

        </>

    )
}

export default Navbar