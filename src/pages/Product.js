import { Layout } from "antd";
import AppHeader from "../components/Header"
import AppFooter from "../components/Footer"
import ProductDetail from "../components/ProductDetail";
import products from "../json/products.json";
import { useParams } from "react-router-dom";


const { Header, Content, Footer } = Layout;

function Product() {
    /*
    const product = products.find(
        (x) => x.id === match.params.productID
    );
    */

    const { productID } = useParams();
    const product = products.find((x) => x.id === (productID));
    
    return (
        <Layout className="container main-layout">
           <Header className="layout-header">
              <AppHeader title="Product Detail"/>
           </Header>
           <Content className="layout-content">
              <ProductDetail product = {product} />
           </Content>
           <Footer className="layout-footer">
              <AppFooter />
           </Footer>
        </Layout>
     );
}

export default Product;