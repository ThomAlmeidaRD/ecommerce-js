

function ItemPage(props) {
    return (
        <>
            <div className="item-page" id="item-page">
                <div>
                    <section className="img-field">
                        <ion-icon id="back" name="arrow-back"></ion-icon>
                        <img src={props.img} alt="" />
                    </section>
                    <article className="item-description">
                        <h2>{props.name}</h2>
                        <p className="pricing">{props.price}</p>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. In id eos nostrum eveniet sapiente dolorem ducimus, et, saepe cupiditate, veritatis ut! Dolore repellat sequi voluptate vero quas quia porro culpa.
                        </p>
                        <p>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. In id eos nostrum eveniet sapiente dolorem ducimus, et, saepe cupiditate, veritatis ut! Dolore repellat sequi voluptate vero quas quia porro culpa.
                        </p>
                        <button className="add-cart" id="add-cart">
                            <ion-icon name="add"></ion-icon>   Add ao Carrinho
                        </button>
                    </article>
                </div>

            </div>
        </>
    )
}

export default ItemPage