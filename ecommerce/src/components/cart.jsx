import names from '../arrays/names'
import nfts from '../arrays/nfts'
import pricing from '../arrays/pricing'



function Cart() {
    return (
        <>
            <div id="cart-container">
                <h2>Meu Carrinho</h2>
                <ion-icon name="close" id="closeCart"></ion-icon>
                <div className="cart-items">

                    <div className="cart-item">
                        <section>
                            <img src={nfts[Math.floor(Math.random() * nfts.length)]} />
                        </section>
                        <section>
                            <h3>{names[Math.floor(Math.random() * names.length)]}</h3>
                            <h4 className='cart-item-pricing'>{'R$ ' + pricing[Math.floor(Math.random() * pricing.length)]}</h4>
                            <button className='remove-item'>
                                <p>Remover</p>
                                <ion-icon name="trash-outline"></ion-icon>
                            </button>
                        </section>
                    </div>

                    <div className="cart-item">
                        <section>
                            <img src={nfts[Math.floor(Math.random() * nfts.length)]} />
                        </section>
                        <section>
                            <h3>{names[Math.floor(Math.random() * names.length)]}</h3>
                            <h4 className='cart-item-pricing'>{'R$ ' + pricing[Math.floor(Math.random() * pricing.length)]}</h4>
                            <button className='remove-item'>
                                <p>Remover</p>
                                <ion-icon name="trash-outline"></ion-icon>
                            </button>
                        </section>
                    </div>

                    <div className="cart-item">
                        <section>
                            <img src={nfts[Math.floor(Math.random() * nfts.length)]} />
                        </section>
                        <section>
                            <h3>{names[Math.floor(Math.random() * names.length)]}</h3>
                            <h4 className='cart-item-pricing'>{'R$ ' + pricing[Math.floor(Math.random() * pricing.length)]}</h4>
                            <button className='remove-item'>
                                <p>Remover</p>
                                <ion-icon name="trash-outline"></ion-icon>
                            </button>
                        </section>

                    </div>



                </div>
                <div className="total">
                    <p>Total</p>
                    <p>R$ 00,00</p>
                </div>
                <button id='finishCart'>Finalizar Compra</button>
            </div>
        </>
    )
}

export default Cart