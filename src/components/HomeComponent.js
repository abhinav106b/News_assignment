import React,{Component} from "react";
import { news_data } from "../shared/news_data";
import { Card,CardBody,CardTitle,CardText,CardImg } from "reactstrap";
import { Link } from "react-router-dom";
import {Helmet} from "react-helmet";

function RenderNews({data}){
    const news=data.map((val)=>{
        return(
            <Card className="card-width mt-3" >
                <CardBody>
                    <div className="row">
                        <div className="col-12 col-sm-7">
                            <div className="row">
                                <div className="col-12">
                                    <Link className="Link" to={val.name}>
                                    <CardTitle className="text-head">{val.heading}</CardTitle>
                                    </Link>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <CardText>{val.description}</CardText>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-5">
                            <CardImg className="card-img" src={val.img} alt={val.name} />
                        </div>
                    </div>
                </CardBody>
            </Card>
        );
    });
    return(
        <div className="center">
            {news}
        </div>
    );
}

class Home extends Component{
    constructor(props){
        super(props)
        this.state={
            news_data:news_data
        }
    }
    render(){
        return(
            <div>
                <Helmet>
                    <title>News</title>
                    <meta name="description" content="Top news" />
                    <link rel="canonical" href="#" />
                </Helmet>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <RenderNews data={news_data} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Home;