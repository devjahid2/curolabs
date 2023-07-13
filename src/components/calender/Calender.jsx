import { Card, Typography } from '@material-tailwind/react';
import React from 'react';
import { BsArrowLeftCircle,BsArrowRightCircle } from 'react-icons/bs';


const TABLE_HEAD = ["Sat", "Sun", "Mon", "Tue","Wed","Thu","Fri"];
 
const TABLE_ROWS = [
  {
    time1: "29",
    time2: "30",
    time3: "01",
    time4: "02",
    time5: "03",
    time6: "04",
    time7: "05",
  },
  {
    time1: "06",
    time2: "07",
    time3: "08",
    time4: "09",
    time5: "10",
    time6: "11",
    time7: "12",
  },
  {
    time1: "13",
    time2: "14",
    time3: "15",
    time4: "16",
    time5: "17",
    time6: "18",
    time7: "19",
  },
  {
    time1: "20",
    time2: "21",
    time3: "22",
    time4: "23",
    time5: "24",
    time6: "25",
    time7: "26",
  },
  {
    time1: "27",
    time2: "28",
    time3: "29",
    time4: "30",
    time5: "31",
    time6: "01",
    time7: "02",
  },
  {
    time1: "02",
    time2: "03",
    time3: "04",
    time4: "05",
    time5: "06",
    time6: "07",
    time7: "08",
  },
  {
    time1: "09",
    time2: "10",
    time3: "11",
    time4: "12",
    time5: "13",
    time6: "14",
    time7: "15",
  },
];

const Calender = () => {
    return (
        <Card className="overflow-scroll h-full w-full">
        <div className="flex items-center justify-between p-3">
            <Typography className="text-[20px] font-[600]">Calendar</Typography>
            <Typography className="text-[20px] font-[600]">July 2023</Typography>
            <div className="flex items-center gap-2">
                <BsArrowLeftCircle className='cursor-pointer'/>
                <Typography className="rounded bg-[#00D880] text-[14px] text-white p-[1px] px-2">Today</Typography>
                <BsArrowRightCircle className='cursor-pointer'/>
            </div>
        </div>
      <table className="w-full min-w-max table-auto text-left border-collapse border border-slate-500">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th key={head} className="border border-[rgba(0,0,0,0.1)] bg-[rgba(0,188,110,0.21)] p-4">
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {head}
                </Typography>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {TABLE_ROWS.map(({ time1, time2, time3,time4,time5,time6,time7 }, index) => {
            const isLast = index === TABLE_ROWS.length - 1;
            const classes = isLast ? "p-4 border border-[rgba(0,0,0,0.1)] " : "p-4 border-b border-blue-gray-50 border border-[rgba(0,0,0,0.1)]";
 
            return (
              <tr key={index}>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {time1}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {time2}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {time3}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {time4}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {time5}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {time6}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {time7}
                  </Typography>
                </td>
                
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
    );
}

export default Calender;
