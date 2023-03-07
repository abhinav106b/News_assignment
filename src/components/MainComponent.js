import React,{Component} from "react";
import {Routes, Route } from "react-router-dom";
import Header from "./HeaderComponent";
import Home from "./HomeComponent";
import News1 from "./News1";
import News2 from "./News2";
import News3 from "./News3";
import News4 from "./News4";
import News5 from "./News5";


class Main extends Component{
    render(){
        return(
            <div>
                <Header/>
                <div  className="home-bck">
                <Routes>
                    <Route index element={<Home/>} />
                    <Route path="news1" element={<News1/>} />
                    <Route path="news2" element={<News2/>} />
                    <Route path="news3" element={<News3/>} />
                    <Route path="news4" element={<News4/>} />
                    <Route path="news5" element={<News5/>} />
                    <Route path="/" element={<Home/>} />
                </Routes>
                </div>
            </div>
        );
    }
}

export default Main;