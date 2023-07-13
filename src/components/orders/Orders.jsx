import { Card, Typography } from '@material-tailwind/react';
import React from 'react';


const TABLE_HEAD = ["Date", "Symbol", "Position", "Entry","Size","TP","SL","Liquidation","Fees","P/L"];
 
const TABLE_ROWS = [
  {
    date: "29-04-2023",
    symbol: "AUD/USD",
    position: "Long",
    entry:'0.66220',
    size:'0.25',
    tp:'0.66350',
    sl:'0.66200',
    liq:'N/A',
    fees:'-$18.72',
    pl:'+$84.65'
  },
  {
    date: "29-04-2023",
    symbol: "AUD/USD",
    position: "Long",
    entry:'0.66220',
    size:'0.25',
    tp:'0.66350',
    sl:'0.66200',
    liq:'N/A',
    fees:'-$18.72',
    pl:'+$84.65'
  },
  {
    date: "29-04-2023",
    symbol: "AUD/USD",
    position: "Long",
    entry:'0.66220',
    size:'0.25',
    tp:'0.66350',
    sl:'0.66200',
    liq:'N/A',
    fees:'-$18.72',
    pl:'+$84.65'
  },
  {
    date: "29-04-2023",
    symbol: "AUD/USD",
    position: "Long",
    entry:'0.66220',
    size:'0.25',
    tp:'0.66350',
    sl:'0.66200',
    liq:'N/A',
    fees:'-$18.72',
    pl:'+$84.65'
  },
  {
    date: "29-04-2023",
    symbol: "AUD/USD",
    position: "Long",
    entry:'0.66220',
    size:'0.25',
    tp:'0.66350',
    sl:'0.66200',
    liq:'N/A',
    fees:'-$18.72',
    pl:'+$84.65'
  }
  
];

const Orders = () => {
    return (
        <div className='container mx-auto mt-8'>
            <Card className="overflow-scroll h-full w-full">
            
      <table className="w-full min-w-max table-auto text-left">
        <thead>
          <tr>
            {TABLE_HEAD.map((head) => (
              <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
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
          {TABLE_ROWS.map(({ name, symbol, date,position,entry, size,tp,sl,liq,fees,pl }, index) => {
            const isLast = index === TABLE_ROWS.length - 1;
            const classes = isLast ? "p-4" : "p-4 border-b border-blue-gray-50";
 
            return (
              <tr key={name}>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {date}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {symbol}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {position}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {entry}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {size}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {tp}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {sl}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {liq}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {fees}
                  </Typography>
                </td>
                <td className={classes}>
                  <Typography variant="small" color="blue-gray" className="font-normal">
                    {pl}
                  </Typography>
                </td>
                
              </tr>
            );
          })}
        </tbody>
      </table>
    </Card>
        </div>
    );
}

export default Orders;
