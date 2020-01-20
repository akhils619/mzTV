import React from 'react';
import Clock from 'react-live-clock';

const Header = () => {

    return (
        <div className='headerContainer'>
            <img className="zmlogo" src="http://s3.amazonaws.com/zoomer-board/wp-content/uploads/2020/01/07103312/ZoomerMediaLogo.png" />
            <div className="panel panel-time">
                <div id="time" className="span time">
                    <Clock format={'h'} ticking={true} timezone={'America/Toronto'} />
                    <span className="square time">:</span>
                    <Clock format={'mma'} ticking={true} timezone={'America/Toronto'} />
                </div>
                <div className="span-date" id="time"><Clock format={'LL'} ticking={true} timezone={'America/Toronto'} /></div>
            </div>
            <div className="monthbar">
                <h2 style = {{backgroundColor: '#0d0d0d'}}>Upcoming Events</h2>
            </div>
        </div>
    )
}

export default Header;