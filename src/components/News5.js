import React from "react";
import { Breadcrumb,BreadcrumbItem, Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";
import { Link } from "react-router-dom";
import {Helmet} from "react-helmet";

function News5(){
    return(
        <div>
            <Helmet>
                <title>Mango Markets Exploiter Eisenberg Arrested in Puerto Rico</title>
                <meta name="description" content="Avraham Eisenberg, the crypto investor whose ‘highly profitable trading strategy’ drained DeFi trading platform Mango Markets of crypto worth $110 million, was arrested Monday in Puerto Rico, court documents said" />
                <link rel="canonical" href="#" />
            </Helmet> 
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <Breadcrumb>
                            <BreadcrumbItem ><Link to="/"><span  className="brd-blue">Home</span></Link></BreadcrumbItem>
                            <BreadcrumbItem active><span  className="brd-bck">News-5</span></BreadcrumbItem>
                        </Breadcrumb>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <Card className="news-card">
                            <CardBody>
                                <CardTitle className="text-news-head">Mango Markets Exploiter Eisenberg Arrested in Puerto Rico</CardTitle>
                                <CardImg className="news-img" src="/images/news5.png" alt="news1"></CardImg>
                                <CardText className="text-left news-text mt-4">
                                    <p>The investor drained $110 million in cryptocurrencies from the platform.</p>
                                    <p>Avraham Eisenberg, the crypto investor whose ‘highly profitable trading strategy’ drained DeFi trading platform Mango Markets of crypto worth $110 million, was arrested Monday in Puerto Rico, court documents said.</p>
                                    <p>The self-described game theorist admitted his role in draining Mango Markets’ treasury shortly after the incident in mid-October, and may now be the first U.S. resident to face charges for his role in manipulating a decentralized-finance trading platform.</p>
                                    <p>Eisenberg faces charges of commodities fraud and commodities manipulation, according to a filing unsealed Tuesday. The charges could see punishments ranging from fines to prison time.</p>
                                    <p>A deposition signed by FBI Special Agent Brandon Racz alleges Eisenberg ‘willfully and knowingly’ manipulated the sale of a commodity – namely futures contracts on Mango Markets.</p>
                                    <p>‘Eisenberg engaged in a scheme involving the intentional and artificial manipulation of the price of perpetual futures contracts on a cryptocurrency exchange called Mango Markets, and other manipulative and deceptive devices and contrivances.’</p>
                                </CardText>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default News5;