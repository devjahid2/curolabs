import React from 'react';
import Header from '../components/header/Header';
import Overview from '../components/overview/Overview';
import TradingGraph from '../components/tradingGraph/TradingGraph';
import Orders from '../components/orders/Orders';
import CalenderView from '../components/calender/CalenderView';

const Home = () => {
    return (
        <div>
            <Header/>
            <Overview/>
            <TradingGraph/>
            <Orders/>
            <CalenderView/>
        </div>
    );
}

export default Home;
