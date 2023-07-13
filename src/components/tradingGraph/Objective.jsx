import { Typography } from "@material-tailwind/react";
import React from "react";

const Objective = () => {
  const objectiveData = [
    { title: "Trading Days", value: "9/10" },
    { title: "Max Daily Loss", value: "-2%" },
    { title: "Max Loss", value: "-4%" },
    { title: "Profit Target", value: "+20%" },
  ];
  return (
    <div className="card shadow-lg p-3 rounded-lg bg-white h-[365px]">
      <Typography className="text-[20px] font-[600] mb-4">
        Trading Objectives
      </Typography>
      {
        objectiveData.map((data,index) => {
            return(
                <div key={index} className="flex items-center mb-4 ">
                    <div className="w-[50%] p-2 h-[20] bg-[rgba(0,244,150,0.3)] text-[18px] flex items-center justify-between"><span className="font-[500]">{data.title}</span> <span className="font-[600]">:</span></div>
                    <div className="w-[50%] p-2 h-[20] bg-[rgb(247,248,253)] text-[18px]">{data.value}</div>
                </div>
            )
        })
      }
    </div>
  );
};

export default Objective;
