/*
interface IProductListProps {
  products: IProduct[]
}*/

const Plp = ({products}) => {
    return <div className="product-list"></div>;
};

export async function getStaticProps(context) {
    const res = await fetch("https://fakestoreapi.com/products");
    console.log(res);
    const products = await res.json();
    return {props: {products}};
}

export default Plp;
