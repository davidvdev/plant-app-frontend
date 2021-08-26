import React, { useState, useEffect } from 'react'
import "../App.css"
import Calendar from 'react-calendar'

// https://openbase.com/js/react-calendar/documentation

const CalendarPage = () => {

  const [value, setValue] = useState(new Date());

  return (
    <div>
      <Calendar
        onChange={setValue}
        value={value}
      />
    </div>
  )
};

export default CalendarPage