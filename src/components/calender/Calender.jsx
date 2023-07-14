import { Card, Typography } from '@material-tailwind/react';
import React from 'react';
import { BsArrowLeftCircle,BsArrowRightCircle } from 'react-icons/bs';
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from 'moment'



require("react-big-calendar/lib/css/react-big-calendar.css");


const localizer = momentLocalizer(moment)
// const TABLE_HEAD = ["Sat", "Sun", "Mon", "Tue","Wed","Thu","Fri"];
 
// const TABLE_ROWS = [
//   {
//     time1: "29",
//     time2: "30",
//     time3: "01",
//     time4: "02",
//     time5: "03",
//     time6: "04",
//     time7: "05",
//   },
//   {
//     time1: "06",
//     time2: "07",
//     time3: "08",
//     time4: "09",
//     time5: "10",
//     time6: "11",
//     time7: "12",
//   },
//   {
//     time1: "13",
//     time2: "14",
//     time3: "15",
//     time4: "16",
//     time5: "17",
//     time6: "18",
//     time7: "19",
//   },
//   {
//     time1: "20",
//     time2: "21",
//     time3: "22",
//     time4: "23",
//     time5: "24",
//     time6: "25",
//     time7: "26",
//   },
//   {
//     time1: "27",
//     time2: "28",
//     time3: "29",
//     time4: "30",
//     time5: "31",
//     time6: "01",
//     time7: "02",
//   },
//   {
//     time1: "02",
//     time2: "03",
//     time3: "04",
//     time4: "05",
//     time5: "06",
//     time6: "07",
//     time7: "08",
//   },
//   {
//     time1: "09",
//     time2: "10",
//     time3: "11",
//     time4: "12",
//     time5: "13",
//     time6: "14",
//     time7: "15",
//   },
// ];

const Calender = () => {
    return (
        <Card className="overflow-scroll h-full w-full">
        <div className="flex items-center justify-between px-3 pt-2">
            <Typography className="text-[20px] font-[600] mb-[-37px]">Calendar</Typography>
            {/* <Typography className="text-[20px] font-[600]">July 2023</Typography>
            <div className="flex items-center gap-2">
                <BsArrowLeftCircle className='cursor-pointer'/>
                <Typography className="rounded bg-[#00D880] text-[14px] text-white p-[1px] px-2">Today</Typography>
                <BsArrowRightCircle className='cursor-pointer'/>
            </div> */}
        </div>
        <Calendar
          // events={this.state.events}
          localizer={localizer}
      events={[]}
      startAccessor="start"
      endAccessor="end"
      style={{ height: 500 }}
          // onSelectEvent={event => this.handleEventSelected(event)}
          // onSelectSlot={slotInfo => this.handleSlotSelected(slotInfo)}
        />
    </Card>
    );
}

export default Calender;
