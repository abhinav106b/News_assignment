import React from "react";
import { Breadcrumb,BreadcrumbItem, Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";
import { Link } from "react-router-dom";
import {Helmet} from "react-helmet";

function News3(){
    return(
        <div>
            <Helmet>
                <title>Microstrategy Buys More Bitcoin — Company's Crypto Holdings Grow to 132,500 BTC</title>
                <meta name="description" content="Microstrategy is now holding approximately 132,500 bitcoin following its most recent purchases. This year, the world’s largest cryptocurrency has emerged as ‘the institutional-grade digital asset,’ said Microstrategy founder Michael Saylor." />
                <link rel="canonical" href="#" />
            </Helmet>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <Breadcrumb>
                            <BreadcrumbItem ><Link to="/"><span  className="brd-blue">Home</span></Link></BreadcrumbItem>
                            <BreadcrumbItem active><span  className="brd-bck">News-3</span></BreadcrumbItem>
                        </Breadcrumb>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <Card className="news-card">
                            <CardBody>
                                <CardTitle className="text-news-head">Microstrategy Buys More Bitcoin — Company's Crypto Holdings Grow to 132,500 BTC</CardTitle>
                                <CardImg className="news-img" src="/images/news3.png" alt="news1"></CardImg>
                                <CardText className="text-left news-text mt-4">
                                    <p>Microstrategy is now holding approximately 132,500 bitcoin following its most recent purchases. This year, the world’s largest cryptocurrency has emerged as ‘the institutional-grade digital asset,’ said Microstrategy founder Michael Saylor.</p>
                                    <p>Nasdaq-listed Microstrategy Inc. announced Wednesday that it has purchased more bitcoin for its corporate treasury. Michael Saylor, the company’s founder and executive chairman, tweeted Wednesday:</p>
                                    <p>Microstrategy has increased its bitcoin holdings by ~2,500 BTC. As of 12/27/22 Microstrategy holds ~132,500 bitcoin acquired for ~$4.03 billion at an average price of ~$30,397 per bitcoin.</p>
                                    <p>In its filing with the U.S. Securities and Exchange Commission (SEC), Microstrategy clarified that the 2,500 coins were acquired between Nov. 1 and Dec. 24 by its wholly owned subsidiary Macrostrategy.</p>
                                    <p>The subsidiary bought approximately 2,395 BTC at an average price of $17,871 per coin between Nov. 1 and Dec. 21. It then sold about 704 BTC at $16,776 per coin on Dec. 22. Macrostrategy then bought about 810 more BTC at $16,845 per coin on Dec. 24. At the time of writing, bitcoin is trading at $16,656.80.</p>
                                    <p>The bitcoin sale in December marked the first time Microstrategy sold its bitcoin since it began accumulating the crypto for its corporate treasury in 2020. The company cited tax reasons for selling BTC. ‘Microstrategy plans to carry back the capital losses resulting from this transaction against previous capital gains, to the extent such carrybacks are available under the federal income tax laws currently in effect, which may generate a tax benefit,’ the SEC filing describes.</p>
                                    <p>The most positive thing of the year is the emergence of bitcoin as the institutional grade digital asset and the clarity that … there is one crypto asset that’s a digital commodity … Bitcoin is that commodity.</p>
                                    <p>The executive noted that both the chairman of the SEC and the chair of the Commodity Futures Trading Commission (CFTC) have confirmed that bitcoin is a commodity.</p>
                                    <p>Saylor previously explained that Microstrategy is investing in BTC ‘for the long term.’ He added: ‘Our strategy is to buy bitcoin and hold the bitcoin, so there’s no price target … I expect bitcoin is going to go into the millions. So, we’re very patient. We think it’s the future of money.’</p>
                                </CardText>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default News3;