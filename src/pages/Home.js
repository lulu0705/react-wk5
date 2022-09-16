import { Layout } from "antd";
import { useContext } from "react";
import { StoreContext } from "../store";
import AppHeader from "../components/Header";
import ProductList from "../components/ProductList";
import AppFooter from "../components/Footer";
import products from "../json/products.json";

const { Header, Content, Footer } = Layout;

function Home(){
    const { state: { page: {title, products} } } = useContext(StoreContext);

    return(
        <Layout className="container main-layout">
            <Header className="layout-header">
                <AppHeader title={title}/>
            </Header> 
            <Content className="layout-content">
                <ProductList products={products}/>
            </Content>
            <Footer className="layout-footer">
                <AppFooter />
            </Footer>
        </Layout>
    );
}

export default Home;