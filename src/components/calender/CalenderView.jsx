import React from 'react';
import Performance from './Performance';

const CalenderView = () => {
    return (
        <div className='container mx-auto my-8 md:flex gap-3'>
            <div className="md:w-[30%]">
                <Performance/>
            </div>
        </div>
    );
}

export default CalenderView;
