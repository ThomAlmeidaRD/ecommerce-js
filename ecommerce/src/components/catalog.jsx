import Product from "./product"
import names from '../arrays/names'
import nfts from '../arrays/nfts'
import pricing from '../arrays/pricing'
import ItemPage from "./item-page"



function Catalog() {
    return (
        <>
            <div className="all-products" id="search-results">
                <Product
                    img={nfts[Math.floor(Math.random() * nfts.length)]}
                    name={names[Math.floor(Math.random() * names.length)]}
                    price={'R$ ' + pricing[Math.floor(Math.random() * pricing.length)]}
                />
                <Product
                    img={nfts[Math.floor(Math.random() * nfts.length)]}
                    name={names[Math.floor(Math.random() * names.length)]}
                    price={'R$ ' + pricing[Math.floor(Math.random() * pricing.length)]}
                />
                <Product
                    img={nfts[Math.floor(Math.random() * nfts.length)]}
                    name={names[Math.floor(Math.random() * names.length)]}
                    price={'R$ ' + pricing[Math.floor(Math.random() * pricing.length)]}
                />
                <Product
                    img={nfts[Math.floor(Math.random() * nfts.length)]}
                    name={names[Math.floor(Math.random() * names.length)]}
                    price={'R$ ' + pricing[Math.floor(Math.random() * pricing.length)]}
                />
                <Product
                    img={nfts[Math.floor(Math.random() * nfts.length)]}
                    name={names[Math.floor(Math.random() * names.length)]}
                    price={'R$ ' + pricing[Math.floor(Math.random() * pricing.length)]}
                />
                <Product
                    img={nfts[Math.floor(Math.random() * nfts.length)]}
                    name={names[Math.floor(Math.random() * names.length)]}
                    price={'R$ ' + pricing[Math.floor(Math.random() * pricing.length)]}
                />
                <Product
                    img={nfts[Math.floor(Math.random() * nfts.length)]}
                    name={names[Math.floor(Math.random() * names.length)]}
                    price={'R$ ' + pricing[Math.floor(Math.random() * pricing.length)]}
                />
                <Product
                    img={nfts[Math.floor(Math.random() * nfts.length)]}
                    name={names[Math.floor(Math.random() * names.length)]}
                    price={'R$ ' + pricing[Math.floor(Math.random() * pricing.length)]}
                />
                <Product
                    img={nfts[Math.floor(Math.random() * nfts.length)]}
                    name={names[Math.floor(Math.random() * names.length)]}
                    price={'R$ ' + pricing[Math.floor(Math.random() * pricing.length)]}
                />
                <Product
                    img={nfts[Math.floor(Math.random() * nfts.length)]}
                    name={names[Math.floor(Math.random() * names.length)]}
                    price={'R$ ' + pricing[Math.floor(Math.random() * pricing.length)]}
                />



            </div>

            <ItemPage />
        </>
    )
}
export default Catalog