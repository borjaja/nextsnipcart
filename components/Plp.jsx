import Pdp from "./Pdp";

/*
interface IProductListProps {
  products: IProduct[]
}*/

const Plp = (props) => {
    return (
        <div className="product-list">
            {props.products.map((product, index) => (
                <Pdp product={product} key={index} />
            ))}
        </div>
    );
};
export default Plp;
