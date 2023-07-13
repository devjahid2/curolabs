import { Card, CardBody, Typography } from "@material-tailwind/react";
import React, { useState } from "react";

const TABLE_HEAD = [
  "Date",
  "Symbol",
  "Position",
  "Entry",
  "Size",
  "TP",
  "SL",
  "Liquidation",
  "Fees",
  "P/L",
];

const TABLE_ROWS = [
  {
    date: "29-04-2023",
    symbol: "AUD/USD",
    position: "Long",
    entry: "0.66220",
    size: "0.25",
    tp: "0.66350",
    sl: "0.66200",
    liq: "N/A",
    fees: "-$18.72",
    pl: "+$84.65",
  },
  {
    date: "29-04-2023",
    symbol: "AUD/USD",
    position: "Long",
    entry: "0.66220",
    size: "0.25",
    tp: "0.66350",
    sl: "0.66200",
    liq: "N/A",
    fees: "-$18.72",
    pl: "+$84.65",
  },
  {
    date: "29-04-2023",
    symbol: "AUD/USD",
    position: "Long",
    entry: "0.66220",
    size: "0.25",
    tp: "0.66350",
    sl: "0.66200",
    liq: "N/A",
    fees: "-$18.72",
    pl: "+$84.65",
  },
  {
    date: "29-04-2023",
    symbol: "AUD/USD",
    position: "Long",
    entry: "0.66220",
    size: "0.25",
    tp: "0.66350",
    sl: "0.66200",
    liq: "N/A",
    fees: "-$18.72",
    pl: "+$84.65",
  },
  {
    date: "29-04-2023",
    symbol: "AUD/USD",
    position: "Long",
    entry: "0.66220",
    size: "0.25",
    tp: "0.66350",
    sl: "0.66200",
    liq: "N/A",
    fees: "-$18.72",
    pl: "+$84.65",
  },
];

const Orders = () => {
  const [tableData, setTableData] = useState("position");
  return (
    <div className="container mx-auto mt-8 orders">
      <Card className="overflow-scroll h-full w-full">
        <div className="flex gap-2 p-3 pb-1">
          <Typography
            onClick={() => setTableData("position")}
            className={`text-[18px] font-[500] cursor-pointer ${
              tableData === "position" ? "active" : ""
            }`}
          >
            Open Positions
          </Typography>
          <Typography
            onClick={() => setTableData("history")}
            className={`text-[18px] font-[500] cursor-pointer ${
              tableData === "history" ? "active" : ""
            }`}
          >
            Order History
          </Typography>
        </div>
        <hr className="p-[1px] bg-[rgba(0,0,0,0.1)] mb-5" />
        {
          tableData === 'position' ? 
          <table className="w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                >
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
            {TABLE_ROWS.map(
              (
                {
                  name,
                  symbol,
                  date,
                  position,
                  entry,
                  size,
                  tp,
                  sl,
                  liq,
                  fees,
                  pl,
                },
                index
              ) => {
                const isLast = index === TABLE_ROWS.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";

                return (
                  <tr key={name}>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {date}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {symbol}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {position}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {entry}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {size}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {tp}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {sl}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {liq}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {fees}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {pl}
                      </Typography>
                    </td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
          :
          <Card>
            <CardBody>
              <Typography>No Data Available in Order History</Typography>
            </CardBody>
          </Card>
        }
      </Card>
    </div>
  );
};

export default Orders;
