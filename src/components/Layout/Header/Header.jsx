import Link from "next/link";
import headerStyles from "./header.module.scss";

const Home = () => {
    return (
        <header className={headerStyles.header}>
            <Link href="/">
                <a>
                    <img src="/logo.png" alt="" className="header__logo" />
                </a>
            </Link>
            <nav>
                <ul>
                    <li>
                        <Link href="/">
                            <a className="header__menu">Home</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/products">
                            <a className="header__menu">Products</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="#">
                            <a className="header__summary snipcart-checkout snipcart-summary">
                                <span className="header__price snipcart-total-price"></span>
                            </a>
                        </Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Home;
