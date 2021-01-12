import Link from "next/link";
import styleCard from "./card.module.scss";

const Card = ({product}) => {
    return (
        <Link href={`product/${product.id}`}>
            <a className={styleCard.card}>
                <img src={product.image} alt="" className="product__image" />
                <p>{product.title}</p>
                <span>${product.price}</span>
            </a>
        </Link>
    );
};

export default Card;
