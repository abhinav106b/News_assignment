import React from "react";
import { Breadcrumb,BreadcrumbItem, Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";
import { Link } from "react-router-dom";
import {Helmet} from "react-helmet";

function News4(){
    return(
        <div>
            <Helmet>
                <title>Bitcoin Miners’ Revenue Hits $9.55 Billion in 2022</title>
                <meta name="description" content="Bitcoin, which is trading at $16,721 at press time, has been on a downward spiral alongside other cryptocurrencies" />
                <link rel="canonical" href="#" />
            </Helmet>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <Breadcrumb>
                            <BreadcrumbItem ><Link to="/"><span  className="brd-blue">Home</span></Link></BreadcrumbItem>
                            <BreadcrumbItem active><span  className="brd-bck">News-4</span></BreadcrumbItem>
                        </Breadcrumb>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <Card className="news-card">
                            <CardBody>
                                <CardTitle className="text-news-head">Bitcoin Miners’ Revenue Hits $9.55 Billion in 2022</CardTitle>
                                <CardImg className="news-img" src="/images/news4.png" alt="news1"></CardImg>
                                <CardText className="text-left news-text mt-4">
                                    <p>Bitcoin, which is trading at $16,721 at press time, has been on a downward spiral alongside other cryptocurrencies. The falling cryptocurrency prices had a major effect on the income an2022 has been a rough and tough year for investors, traders, cryptocurrency businesses, and miners in general. The prolonged bear market, exacerbated by a series of catastrophic events, posed a threat to miners.</p>
                                    <p>Miners were dealing with a variety of issues, including defaulted loans, quarterly losses, and soaring bitcoin hashrates that reached all-time highs. All these factors were affecting the profitability of the miners and were causing sell pressure.</p>
                                    <p>The situation was aggravated when cryptocurrency prices, including Bitcoin’s, plummeted. Bitcoin, which was hovering around $48,000 last year, hit a low of $15,590 by the end of 2022. According to the data collected from The Block, bitcoin miners’ revenue hit $9.55 billion in 2022.</p>
                                    <p>Bitcoin miners’ revenue dropped in 2022:
profits of miners. Even though the $9.55 billion in revenue in 2022 seems like a large number, it is comparatively lower than that of 2021</p>
                                    <p>Over the course of 2021, bitcoin miners made more than $15 billion in revenue, according to the data from the block. This was actually considered to be a 206% year-over-year increase.</p>

                                </CardText>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default News4;