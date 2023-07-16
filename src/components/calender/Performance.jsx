import { Typography } from "@material-tailwind/react";
import React from "react";

const Performance = () => {
  // const data = [
  //   {
  //     profit: 800,
  //     symbol1: "USD",
  //     loss: 800,
  //     symbol2: "JPY",
  //     width: ["50", "50"],
  //   },
  //   {
  //     profit: 1000,
  //     symbol1: "USD",
  //     loss: 500,
  //     symbol2: "JPY",
  //     width: ["80", "20"],
  //   },
  //   {
  //     profit: 500,
  //     symbol1: "USD",
  //     loss: 1000,
  //     symbol2: "JPY",
  //     width: ["20", "80"],
  //   },
  // ];
  // const fixCandleDir = (value) =>{
  //     const direction = value.profit - value.loss;
  //     const dirCandle = direction === 0 ? 'equal' :'gg'
  //     console.log(dirCandle,value)
  // }
  return (
    <div className="card shadow rounded-lg bg-white p-3 performance h-[100%]">
      <h2 className="mb-5">Performance By Instrument</h2>

      {/* {data.map((value, index) => {
        return (
          <div className="flex items-center w-full mb-3" key={index}>
            <div className={` w-[${value.width[0]}%] rounded-lg`}>
              <Typography className="text-start text-[16px]">+${value.profit}</Typography>
              <div className={`bg-[#00F496]  p-1 w-full text-[14px] font-[600] rounded profit`}>
                {value.symbol1}
              </div>
            </div>
            <div className={` w-[${value.width[1]}%] rounded-lg`}>
              <Typography className="text-end text-[16px]">-${value.loss}</Typography>
              <div className={`bg-[#FF3737] p-1 w-full  text-[14px] font-[600] rounded loss`}>
                {value.symbol2}
              </div>
            </div>
          </div>
        );
      })} */}
      <div className="flex flex-col relative overflow-y-scroll table-scroll h-[550px]">
        <div className="border-top-bottom"></div>

        <div className="flex items-center self-center w-[71%] mb-3">
          <div className={` w-[50%] rounded-lg`}>
            <Typography className="text-start text-[16px]">+${800}</Typography>
            <div
              className={`bg-[#00F496]  p-1 w-full text-[14px] font-[600] rounded profit`}
            >
              USD
            </div>
          </div>
          <div className={` w-[50%] rounded-lg`}>
            <Typography className="text-end text-[16px]">-${800}</Typography>
            <div
              className={`bg-[#FF3737] p-1 w-full  text-[14px] font-[600] rounded loss`}
            >
              JPY
            </div>
          </div>
        </div>

        <div className="flex items-center self-end w-[71%] mb-3 relative">
          <div className={` w-[30%] rounded-lg`}>
            <Typography className="text-start text-[16px]">+${800}</Typography>
            <div
              className={`bg-[#00F496]  p-1 w-full text-[14px] font-[600] rounded profit`}
            >
              USD
            </div>
          </div>
          <div className={` w-[70%] rounded-lg`}>
            <Typography className="text-end text-[16px]">-${800}</Typography>
            <div
              className={`bg-[#FF3737] p-1 w-full  text-[14px] font-[600] rounded loss`}
            >
              JPY
            </div>
          </div>
        </div>
        <div className="flex items-center self-center w-[71%] mb-3">
          <div className={` w-[50%] rounded-lg`}>
            <Typography className="text-start text-[16px]">+${800}</Typography>
            <div
              className={`bg-[#00F496]  p-1 w-full text-[14px] font-[600] rounded profit`}
            >
              USD
            </div>
          </div>
          <div className={` w-[50%] rounded-lg`}>
            <Typography className="text-end text-[16px]">-${800}</Typography>
            <div
              className={`bg-[#FF3737] p-1 w-full  text-[14px] font-[600] rounded loss`}
            >
              JPY
            </div>
          </div>
        </div>

        <div className="flex items-center self-end w-[71%] mb-3 relative">
          <div className={` w-[30%] rounded-lg`}>
            <Typography className="text-start text-[16px]">+${800}</Typography>
            <div
              className={`bg-[#00F496]  p-1 w-full text-[14px] font-[600] rounded profit`}
            >
              USD
            </div>
          </div>
          <div className={` w-[70%] rounded-lg`}>
            <Typography className="text-end text-[16px]">-${800}</Typography>
            <div
              className={`bg-[#FF3737] p-1 w-full  text-[14px] font-[600] rounded loss`}
            >
              JPY
            </div>
          </div>
        </div>
        <div className="flex self-start items-center w-[84%] mb-3 ">
          <div className={` w-[60%] rounded-lg`}>
            <Typography className="text-start text-[16px]">+${800}</Typography>
            <div
              className={`bg-[#00F496]  p-1 w-full text-[14px] font-[600] rounded profit`}
            >
              USD
            </div>
          </div>

          <div className={` w-[40%] rounded-lg`}>
            <Typography className="text-end text-[16px]">-${800}</Typography>
            <div
              className={`bg-[#FF3737] p-1 w-full  text-[14px] font-[600] rounded loss`}
            >
              JPY
            </div>
          </div>
        </div>
        <div className="flex items-center self-center w-[71%] mb-3">
          <div className={` w-[50%] rounded-lg`}>
            <Typography className="text-start text-[16px]">+${800}</Typography>
            <div
              className={`bg-[#00F496]  p-1 w-full text-[14px] font-[600] rounded profit`}
            >
              USD
            </div>
          </div>
          <div className={` w-[50%] rounded-lg`}>
            <Typography className="text-end text-[16px]">-${800}</Typography>
            <div
              className={`bg-[#FF3737] p-1 w-full  text-[14px] font-[600] rounded loss`}
            >
              JPY
            </div>
          </div>
        </div>

        <div className="flex items-center self-end w-[71%] mb-3 relative">
          <div className={` w-[30%] rounded-lg `}>
            <Typography className="text-start text-[16px]">+${800}</Typography>
            <div
              className={`bg-[#00F496]  p-1 w-full text-[14px] font-[600] rounded profit`}
            >
              USD
            </div>
          </div>
          <div className={` w-[70%] rounded-lg`}>
            <Typography className="text-end text-[16px]">-${800}</Typography>
            <div
              className={`bg-[#FF3737] p-1 w-full  text-[14px] font-[600] rounded loss`}
            >
              JPY
            </div>
          </div>
        </div>
        <div className="flex self-start items-center w-[84%] mb-3 ">
          <div className={` w-[60%] rounded-lg`}>
            <Typography className="text-start text-[16px]">+${800}</Typography>
            <div
              className={`bg-[#00F496]  p-1 w-full text-[14px] font-[600] rounded profit`}
            >
              USD
            </div>
          </div>

          <div className={` w-[40%] rounded-lg`}>
            <Typography className="text-end text-[16px]">-${800}</Typography>
            <div
              className={`bg-[#FF3737] p-1 w-full  text-[14px] font-[600] rounded loss`}
            >
              JPY
            </div>
          </div>
        </div>
        <div className="flex self-start items-center w-[84%] mb-3 ">
          <div className={` w-[60%] rounded-lg`}>
            <Typography className="text-start text-[16px]">+${800}</Typography>
            <div
              className={`bg-[#00F496]  p-1 w-full text-[14px] font-[600] rounded profit`}
            >
              USD
            </div>
          </div>
          <div className={` w-[40%] rounded-lg`}>
            <Typography className="text-end text-[16px]">-${800}</Typography>
            <div
              className={`bg-[#FF3737] p-1 w-full  text-[14px] font-[600] rounded loss`}
            >
              JPY
            </div>
          </div>
        </div>
        <div className="flex items-center self-center w-[71%] mb-3">
          <div className={` w-[50%] rounded-lg`}>
            <Typography className="text-start text-[16px]">+${800}</Typography>
            <div
              className={`bg-[#00F496]  p-1 w-full text-[14px] font-[600] rounded profit`}
            >
              USD
            </div>
          </div>
          <div className={` w-[50%] rounded-lg`}>
            <Typography className="text-end text-[16px]">-${800}</Typography>
            <div
              className={`bg-[#FF3737] p-1 w-full  text-[14px] font-[600] rounded loss`}
            >
              JPY
            </div>
          </div>
        </div>

        <div className="flex items-center self-end w-[71%] mb-3 relative">
          <div className={` w-[30%] rounded-lg`}>
            <Typography className="text-start text-[16px]">+${800}</Typography>
            <div
              className={`bg-[#00F496]  p-1 w-full text-[14px] font-[600] rounded profit`}
            >
              USD
            </div>
          </div>
          <div className={` w-[70%] rounded-lg`}>
            <Typography className="text-end text-[16px]">-${800}</Typography>
            <div
              className={`bg-[#FF3737] p-1 w-full  text-[14px] font-[600] rounded loss`}
            >
              JPY
            </div>
          </div>
        </div>
        <div className="flex self-start items-center w-[84%] mb-3 ">
          <div className={` w-[60%] rounded-lg`}>
            <Typography className="text-start text-[16px]">+${800}</Typography>
            <div
              className={`bg-[#00F496]  p-1 w-full text-[14px] font-[600] rounded profit`}
            >
              USD
            </div>
          </div>

          <div className={` w-[40%] rounded-lg`}>
            <Typography className="text-end text-[16px]">-${800}</Typography>
            <div
              className={`bg-[#FF3737] p-1 w-full  text-[14px] font-[600] rounded loss`}
            >
              JPY
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Performance;
