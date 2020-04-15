import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Div = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    p {
        margin: 0 .5em;
    }

`

const Time = () => {

    const [currentDate, setDate] = useState({
        
    })



    const getDate = () => {
        let date = new Date()
        // let day;

        // switch (day) {
        //     case 0:
        //       day = "Sunday";
        //       break;
        //     case 1:
        //       day = "Monday";
        //       break;
        //     case 2:
        //        day = "Tuesday";
        //       break;
        //     case 3:
        //       day = "Wednesday";
        //       break;
        //     case 4:
        //       day = "Thursday";
        //       break;
        //     case 5:
        //       day = "Friday";
        //       break;
        //     case 6:
        //       day = "Saturday";
        //   }

        
        setDate({
        // dayOfWeek: day,
        dom: date.getDate(),
        month: date.getMonth(),
        year: date.getFullYear()
        })

        
    }

    useEffect(() => {
        getDate();

        
    },[])

    return (
        <Div>
            <p>{currentDate.month + 1} </p>
            <p>-</p>
            <p>{currentDate.dom} </p>
            <p>-</p>
            <p>{currentDate.year}</p>
        </Div>
    );
}

export default Time;
