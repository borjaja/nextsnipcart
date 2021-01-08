import Link from "next/link";

const Home = () => {
    return (
        <header className="header">
            <Link href="/">
                <img src="/static/logo.svg" alt="" className="header__logo" />
            </Link>
            <Link href="/">
                <h1 className="header__title">Store</h1>
            </Link>
            <a className="header__summary snipcart-checkout snipcart-summary" href="#" style={{textDecoration: "none"}}>
                <span className="header__price snipcart-total-price"></span>
            </a>
        </header>
    );
};

export default Home;
