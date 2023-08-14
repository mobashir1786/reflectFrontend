import React from 'react';
import './admincard.css';

const Admincard = (props) => {
  return (
    <div className='admincard'>
      <div className="admineventname">{props.eventname}</div>
      <div className="adminevemtdate">{props.eventdate}</div>
      <div className="admineventlocation">{props.eventlocation}</div>
      <div className="adminavailablehall">{props.capacity}</div>
      <div className="adminviewable">{props.viewable}</div>
    </div>
  )
}

export default Admincard
