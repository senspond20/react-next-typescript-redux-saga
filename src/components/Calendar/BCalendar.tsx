import React, {useEffect} from "react";
import styled from "styled-components";

const Container = styled.div`

  *, *:before, *:after {
    box-sizing: inherit;
  }
  .clearfix:after {
    content: '';
    display: block;
    clear: both;
    float: none;
  }

  /* ======== Calendar ======== */
  .my-calendar {
    width: 700px;
    margin: 30px;
    padding: 20px 20px 10px;
    text-align: center;
    font-weight: 800;
    border: 1px solid #ddd;
    cursor: default;
  }
  .my-calendar .clicked-date {
    border-radius: 25px;
    margin-top: 36px;
    float: left;
    width: 42%;
    padding: 46px 0 26px;
    background: #ddd;
  }
  .my-calendar .calendar-box {
    float: right;
    width: 58%;
    padding-left: 30px;
  }

  .clicked-date .cal-day {
    font-size: 24px;
  }
  .clicked-date .cal-date {
    font-size: 130px;
  }

  .ctr-box {
    padding: 0 16px;
    margin-bottom: 20px;
    font-size: 20px;
  }
  .ctr-box .btn-cal {
    position: relative;
    float: left;
    width: 25px;
    height: 25px;
    margin-top: 5px;
    font-size: 16px;
    cursor: pointer;
    border: none;
    background: none;
  }
  .ctr-box .btn-cal:after {
    content: '<';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    line-height: 25px;
    font-weight: bold;
    font-size: 20px;
  }
  .ctr-box .btn-cal.next {
    float: right;
  }
  .ctr-box .btn-cal.next:after {
    content: '>';
  }

  .cal-table {
    width: 100%;
  }
  .cal-table th {
    width: 14.2857%;
    padding-bottom: 5px;
    font-size: 16px;
    font-weight: 900;
  }
  .cal-table td {
    padding: 3px 0;
    height: 50px;
  }
`
const handle =() =>{
    return(
        <Container className="container">
            <div className="my-calendar clearfix">
                <div className="clicked-date">
                    <div className="cal-day"></div>
                    <div className="cal-date"></div>
                </div>
                <div className="calendar-box">
                    <div className="ctr-box clearfix">
                        <button type="button" title="prev" className="btn-cal prev">
                        </button>
                        <span className="cal-month"></span>
                        <span className="cal-year"></span>
                        <button type="button" title="next" className="btn-cal next">
                        </button>
                    </div>
                    <table className="cal-table">
                        <thead>
                        <tr>
                            <th>S</th>
                            <th>M</th>
                            <th>T</th>
                            <th>W</th>
                            <th>T</th>
                            <th>F</th>
                            <th>S</th>
                        </tr>
                        </thead>
                        <tbody className="cal-body"></tbody>
                    </table>
                </div>
            </div>
        </Container>
    )
}

export default handle;