import React from "react";
import { Breadcrumb,BreadcrumbItem, Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";
import { Link } from "react-router-dom";
import {Helmet} from "react-helmet";

function News2(){
    return(
        <div>
            <Helmet>
                <title>Prime Minister Giorgia Meloni's new bill: Declaring crypto for tax purposes.</title>
                <meta name="description" content="Prime Minister Giorgia Meloni's new bill also includes an incentive for those declaring crypto for tax purposes." />
                <link rel="canonical" href="#" />
            </Helmet>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <Breadcrumb>
                            <BreadcrumbItem ><Link to="/"><span  className="brd-blue">Home</span></Link></BreadcrumbItem>
                            <BreadcrumbItem active><span  className="brd-bck">News-2</span></BreadcrumbItem>
                        </Breadcrumb>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <Card className="news-card">
                            <CardBody>
                                <CardTitle className="text-news-head">Prime Minister Giorgia Meloni's new bill: Declaring crypto for tax purposes.</CardTitle>
                                <CardImg className="news-img" src="/images/news2.png" alt="news2"></CardImg>
                                <CardText className="text-left news-text mt-4">
                                    <p>Crypto traders in Italy will be subject to a 26% capital-gains tax starting in 2023, according to a new budget that won parliamentary approval on Thursday.
Italian Prime Minister Giorgia Meloni's 2023 expansionary budget – which was completed in a rush before the end of the year – features 21 billion euros ($22.3 billion) in tax breaks to assist businesses and households facing the energy crisis, Reuters reported.</p>
                                    <p>Italy's (and most recently Portugal's) move to introduce a capital-gains tax on crypto comes ahead of the implementation of the European Union's Markets in Crypto Assets (MiCA) regulation that promises a licensing frameworks and stringent operating requirements for crypto-service providers in the 27-member bloc.
The 26% rate applies to gains from crypto trading if they exceed 2,000 euros per tax period. As an incentive for declaring crypto profits, the new bill also sets a "substitute income tax" for investors at 14% of the value of the assets held as of Jan. 1, 2023, instead of the cost at the time of purchase.</p>
                                    <p>instead of the cost at the time of purchase.
According to the new rules, losses from crypto investments can be deducted from profits and be carried forward.
Investors, however, may require some additional guidance on what qualifies as a taxable event as the document also says, "the exchange between crypto assets having same characteristics and functions," doesn't constitute a "fiscal case."</p>
                                </CardText>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default News2;