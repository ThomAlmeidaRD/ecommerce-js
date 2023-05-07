

function filter() {

    var catalogList = document.querySelectorAll('.product h2')
    var txtSrc = document.getElementById('txt-search')
    var btnSrc = document.getElementById('btn-search')

    for (var item of catalogList) {


        var item_title = item.textContent.toLocaleLowerCase()

        if (!item_title.includes(txtSrc.value)) {
            var product_div = item.parentNode
            product_div.style.display = 'none'
            btnSrc.childNodes[0].name = 'close'
            btnSrc.style.backgroundColor = 'crimson'
            btnSrc.style.color = '#fff'
        } else {
            var product_div = item.parentNode
            product_div.style.display = 'block'
            btnSrc.childNodes[0].name = 'search'
            btnSrc.style.backgroundColor = '#ffce00'
            btnSrc.style.color = '#000'
        }


    }

    txtSrc.value = ''

}

function SearchHeader() {
    return (
        <>
            <header>
                <h1>Javascript Ecommerce</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod voluptatibu.</p>
                <section className="input-field">
                    <input type="text" id="txt-search" placeholder="Produtos, categorias..." />
                    <button id="btn-search" onClick={filter}><ion-icon name="search"></ion-icon></button>
                </section>
            </header>
        </>
    )
}

export default SearchHeader