import Card from "../../components/Card/Card";
import Layout from "../../components/Layout/Layout";
import styles from "./products.module.scss";

const Plp = ({products}) => {
    return (
        <Layout>
            <div className={styles.product_list}>
                {products.map((product, index) => (
                    <Card product={product} key={index} />
                ))}
            </div>
        </Layout>
    );
};

export async function getStaticProps(context) {
    //const res = await fetch("https://fakestoreapi.com/products?5");
    //const products = await res.json();
    const products = [
        {
            id: 1,
            title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
            price: 109.95,
            description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
            category: "men clothing",
            image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
        },
        {
            id: 2,
            title: "Mens Casual Premium Slim Fit T-Shirts ",
            price: 22.3,
            description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
            category: "men clothing",
            image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
        },
    ];
    return {props: {products}};
}

export default Plp;
