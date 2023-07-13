import { Card, CardBody,Typography } from '@material-tailwind/react';
import React from 'react';
import { AiOutlineDollar, AiOutlineStar } from 'react-icons/ai';
import win_loss_img from '../../images/win&loss.png'
const Overview = () => {
    return (
        <div className='md:flex  align-center justify-between container gap-3 mx-auto mt-8 overview'>
            <Card className='w-full md:mb-0 mb-3 shadow-lg'>
                <CardBody className='flex items-center gap-5'>
                    <div className="icons bg-[rgba(0,216,58,0.2)] rounded-full p-2">
                    <AiOutlineDollar color='#00D880' size={30}/>
                    </div>
                    <div>
                    <Typography className="text">Net P&L</Typography>
                    <Typography className="value">20%</Typography>
                    </div>
                </CardBody>

            </Card>

            <Card className='w-full md:mb-0 mb-3 shadow-lg'>
                <CardBody className='flex items-center gap-5'>
                    <div className="icons bg-[rgba(3,227,252,0.27)] rounded-full p-2">
                    <AiOutlineDollar color='#03E3FC' size={30}/>
                    </div>
                    <div>
                    <Typography className="text">Balance</Typography>
                    <Typography className="value">$120,000</Typography>
                    </div>
                </CardBody>

            </Card>

            <Card className='w-full md:mb-0 mb-3 shadow-lg'>
                <CardBody className='flex items-center gap-5'>
                    <div className="icons bg-[rgba(255,170,52,0.21)] rounded-full p-2">
                    <img className='w-[40px]' src={win_loss_img} alt="ratio" />
                    </div>
                    <div className='w-full'>
                    <Typography className="text mb-2">Avg Win/Loss</Typography>
                        <div className="flex gap-1 items-center justify-between">
                            <div className="w-[60%] bg-[#0eb324] h-[25px]"></div>
                            <div className="w-[40%] bg-red-500 h-[25px]"></div>
                        </div>
                        <div className="w-full flex items-center justify-between">
                        <Typography className="text-[16px]">+$2200</Typography>
                        <Typography className="text-[16px]">-$500</Typography>
                        </div>
                    </div>
                </CardBody>

            </Card>

            <Card className='w-full md:mb-0 mb-3 shadow-lg'>
                <CardBody className='flex items-center gap-5'>
                    <div className="icons bg-[rgba(116,103,255,0.22)] rounded-full p-2">
                    <AiOutlineStar color='#7367FF' size={30}/>
                    </div>
                    <div>
                    <Typography className="text">Win Rate</Typography>
                    <Typography className="value">45%</Typography>
                    </div>
                </CardBody>

            </Card>
            
            
        </div>
    );
}

export default Overview;
