
function filter() {

    var catalogList = document.querySelectorAll('.product h2')
    var txtSrc = document.getElementById('txt-search')
        var srcResults = document.getElementById('src-results')

    var visible_items = []

    for (var item of catalogList) {

        var item_title = item.textContent.toLocaleLowerCase()

        if (!item_title.includes(txtSrc.value.toLocaleLowerCase())) {

            var product_div = item.parentNode
            product_div.style.display = 'none'
            
            if (product_div.style.display == 'none') {
                visible_items.push(product_div)
            }

            srcResults.innerText = 'Resultados Encontrados ' + (catalogList.length - visible_items.length)
        } else {
            var product_div = item.parentNode
            product_div.style.display = 'block'
            srcResults.innerText = 'Todos os Produtos'
        }

    }

}

function SearchHeader() {
    return (
        <>
            <header>
                <h1>Javascript Ecommerce</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod voluptatibu.</p>
                <section className="input-field">
                    <input type="text" onInput={filter} id="txt-search" placeholder="Produtos, categorias..." />
                    <p id="src-results">Todos os Produtos</p>
                </section>
                <br />
                
            </header>
        </>
    )
}

export default SearchHeader