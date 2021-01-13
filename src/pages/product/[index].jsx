import {withRouter, RouterProps} from "next/router";
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
    const res = await fetch("https://fakestoreapi.com/products?limit=5");
    const products = await res.json();
    let paths = products.map((p) => {
        return `/product/${p.id}`;
    });
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({params}) {
    const res = await fetch(`https://fakestoreapi.com/products/${params.index}`);
    const product = await res.json();
    return {props: {product}};
}

export default withRouter(Pdp);
