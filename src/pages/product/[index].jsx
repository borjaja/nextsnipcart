/*
import {withRouter} from "next/router";
import Layout from "../../components/Layout/Layout";
const Pdp = ({product}) => {
    return (
        <Layout>
            <div className="product">
                <h2 className="product__title">{product.title}</h2>
                <p className="product__description">{product.description}</p>
                <img src={product.image} alt="" className="product__image" />
                <div className="product__price-button-container">
                    <div className="product__price">${product.price.toFixed(2)}</div>
                    <button className="snipcart-add-item product__button" data-item-id={product.id} data-item-name={product.title} data-item-price={product.price} data-item-url="/" data-item-image={product.image}>
                        Add to cart
                    </button>
                </div>
            </div>
        </Layout>
    );
};

export async function getStaticPaths() {
    //const res = await fetch("https://fakestoreapi.com/products?limit=5");
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
    let paths = products.map((p) => {
        return `/product/${p.id}`;
    });
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({params}) {
    //const res = await fetch(`https://fakestoreapi.com/products/${params.index}`);
    //const product = await res.json();
    const product1 = {
        id: 1,
        title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
        price: 109.95,
        description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        category: "men clothing",
        image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    };
    const product2 = {
        id: 2,
        title: "Mens Casual Premium Slim Fit T-Shirts ",
        price: 22.3,
        description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
        category: "men clothing",
        image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    };
    if (params.index === 1) {
        return {props: {product: product1}};
    } else {
        return {props: {product: product2}};
    }
    //return {props: {(params.index === 1) ? product1 : product2};
    //return {props: {product}};
}

export default withRouter(Pdp);
*/
