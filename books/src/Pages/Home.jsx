import Booklist from "../components/Booklist"
// import Header from "../components/Header"
import Layout from "../components/Layout"

const Home = () => {
    return (
        <>
          <h1>Amazon best sellers</h1>
          <Layout>
            <Booklist/>
          </Layout>
        </>
      )
    };
    
    export default Home;