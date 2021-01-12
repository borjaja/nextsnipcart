import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Head from "next/head";
import styles from "./layout.module.scss";

const Index = (props) => {
    return (
        <div className={styles.layout}>
            <Head>
                <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.2/jquery.min.js"></script>
                <script src="https://cdn.snipcart.com/scripts/2.0/snipcart.js" data-api-key={process.env.SNIPCART_APIKEY} id="snipcart"></script>
                <link href="https://cdn.snipcart.com/themes/2.0/base/snipcart.min.css" rel="stylesheet" type="text/css" />
            </Head>
            <Header />
            <main className="main">{props.children}</main>
            <Footer />
        </div>
    );
};
export default Index;
