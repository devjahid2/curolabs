import { Card, Typography } from '@material-tailwind/react';
import React from 'react';
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from 'moment'



require("react-big-calendar/lib/css/react-big-calendar.css");


const localizer = momentLocalizer(moment)

const Calender = () => {
    return (
        <Card className="overflow-scroll h-full w-full no-scroll p-[10px]">
        <div className="flex items-center justify-between px-3 pt-2">
            <Typography className="text-[20px] font-[600] mb-[-37px]">Calendar</Typography>
            
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
