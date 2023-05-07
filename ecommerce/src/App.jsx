import Navbar from "./components/navbar"
import Product from "./components/product"
import SearchHeader from "./components/search-header"
import nfts from "./arrays/nfts"
import names from "./arrays/names"
import prices from "./arrays/pricing"

function App() {

  return (
    <>
      <Navbar />
      <main>
        <div className="container-content">
          <SearchHeader />
          <div className="all-products" id="search-results">
            <Product
              img={nfts[Math.floor(Math.random() * nfts.length)]}
              name={names[Math.floor(Math.random() * names.length)]}
              price={'R$ ' + prices[Math.floor(Math.random() * prices.length)]}
            />
            <Product
              img={nfts[Math.floor(Math.random() * nfts.length)]}
              name={names[Math.floor(Math.random() * names.length)]}
              price={'R$ ' + prices[Math.floor(Math.random() * prices.length)]}
            />
            <Product
              img={nfts[Math.floor(Math.random() * nfts.length)]}
              name={names[Math.floor(Math.random() * names.length)]}
              price={'R$ ' + prices[Math.floor(Math.random() * prices.length)]}
            />
            <Product
              img={nfts[Math.floor(Math.random() * nfts.length)]}
              name={names[Math.floor(Math.random() * names.length)]}
              price={'R$ ' + prices[Math.floor(Math.random() * prices.length)]}
            />
            <Product
              img={nfts[Math.floor(Math.random() * nfts.length)]}
              name={names[Math.floor(Math.random() * names.length)]}
              price={'R$ ' + prices[Math.floor(Math.random() * prices.length)]}
            />
            <Product
              img={nfts[Math.floor(Math.random() * nfts.length)]}
              name={names[Math.floor(Math.random() * names.length)]}
              price={'R$ ' + prices[Math.floor(Math.random() * prices.length)]}
            />
            <Product
              img={nfts[Math.floor(Math.random() * nfts.length)]}
              name={names[Math.floor(Math.random() * names.length)]}
              price={'R$ ' + prices[Math.floor(Math.random() * prices.length)]}
            />
            <Product
              img={nfts[Math.floor(Math.random() * nfts.length)]}
              name={names[Math.floor(Math.random() * names.length)]}
              price={'R$ ' + prices[Math.floor(Math.random() * prices.length)]}
            />
            <Product
              img={nfts[Math.floor(Math.random() * nfts.length)]}
              name={names[Math.floor(Math.random() * names.length)]}
              price={'R$ ' + prices[Math.floor(Math.random() * prices.length)]}
            />
            <Product
              img={nfts[Math.floor(Math.random() * nfts.length)]}
              name={names[Math.floor(Math.random() * names.length)]}
              price={'R$ ' + prices[Math.floor(Math.random() * prices.length)]}
            />
          </div>
        </div>
      </main>
    </>
  )
}

export default App
