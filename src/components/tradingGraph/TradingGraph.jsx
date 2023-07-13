import React from 'react';
// import  Chart from './Chart';
import ChartView from './Chart';
import Objective from './Objective';

const TradingGraph = () => {
    return (
        <div className='container mx-auto mt-8 md:flex gap-3 h-[100%]'>
            <div className="md:w-[70%]">
                <ChartView/>
            </div>
            <div className="md:w-[30%]">
                <Objective/>
            </div>
        </div>
    );
}

export default TradingGraph;
