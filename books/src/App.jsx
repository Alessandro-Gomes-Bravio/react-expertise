import Booklist from "./components/Booklist"
import Header from "./components/Header"
import Layout from "./components/Layout"

function App() {
  return (
    <>
      <Header/>
      <h1>Amazon best sellers</h1>
      <Layout>
        <Booklist/>
      </Layout>
    </>
  )
}

export default App
