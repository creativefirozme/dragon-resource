import React from "react";
import BreakingNews from "./BreakingNews/BreakingNews";
import Header from "./Shered/Header/Header";
import LeftSideNav from "./Shered/LeftSideNav/LeftSideNav";
import Navbar from "./Shered/Navbar/Navbar";
import RightSideNav from "./Shered/RightSideNav/RightSideNav";


const Home = () => {
    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                <div className="border">
                    <LeftSideNav></LeftSideNav>
                </div>
                <div className="lg:col-span-2 border">
                    <h2 className="text-4xl">Dragon News Home comming soon....</h2>
                </div>
                <div className="border">
                    <RightSideNav></RightSideNav>
                    </div>
            </div>
        </div>
    );
};

export default Home;