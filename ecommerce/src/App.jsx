import Catalog from "./components/catalog"
import Navbar from "./components/navbar"
import SearchHeader from "./components/search-header"



function App() {

  return (
    <>
      <Navbar />
      <main>
        <div className="container-content">
          <SearchHeader />
          <Catalog />
        </div>
      </main>
    </>
  )
}

export default App
