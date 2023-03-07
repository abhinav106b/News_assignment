import React from "react";
import { Breadcrumb,BreadcrumbItem, Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";
import { Link } from "react-router-dom";
import {Helmet} from "react-helmet";

function News1(){
    return(
        <div>
            <Helmet>
                <title>PayPal enables transfer of digital currencies to external wallets</title>
                <meta name="description" content="After rolling out the ability to buy and sell crypto on its platform in October 2020, PayPal is finally allowing users the ability to natively transfer, send and receive digital assets between PayPal and other wallets and exchanges." />
                <link rel="canonical" href="#" />
            </Helmet>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <Breadcrumb >
                            <BreadcrumbItem ><Link to="/"><span  className="brd-blue">Home</span></Link></BreadcrumbItem>
                            <BreadcrumbItem active><span  className="brd-bck">News-1</span></BreadcrumbItem>
                        </Breadcrumb>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <Card className="news-card">
                            <CardBody>
                                <CardTitle className="text-news-head">PayPal enables transfer of digital currencies to external wallets</CardTitle>
                                <CardImg className="news-img" src="/images/news1.png" alt="news1"></CardImg>
                                <CardText className="text-left news-text mt-4"><p className="mt-2">After rolling out the ability to buy and sell crypto on its platform in October 2020, PayPal is finally allowing users the ability to natively transfer, send and receive digital assets between PayPal and other wallets and exchanges. As of Tuesday, the feature is available to select U.S. users, with the feature expanding to all eligible U.S. users in the coming weeks. The first batch of supported coins consists of Bitcoin</p>
                                    <p>BTC $<span className="text-blue">16,704</span>, Ether  ETH $<span className="text-blue">1,217</span>, Bitcoin Cash BCH $<span className="text-blue">100</span>, and Litecoin LTC $<span className="text-blue">74.58</span>.</p>  
                                    <p className="mt-1">Crypto transfers to recipients outside of PayPal would incur a network fee based on their respective blockchains, but transfers between PayPal users will not incur such fees. To protect users' privacy, the firm generates a new recipient address for each transaction into one's PayPal account. PayPal will also not charge fees for incoming transfers,</p>
                                    <p className="mt-1">The company is also working to integrate other forms of cryptocurrency services, such as central bank digital currencies, to boost its digital footprint. It is also exploring the possibility of launching its own stablecoin, dubbed "PayPal Coin." The discovery came after a developer found evidence of such a stablecoin within the source code of the company's iPhone app.</p>
                                </CardText>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default News1;