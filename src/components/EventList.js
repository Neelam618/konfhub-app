import React from 'react'
import EventCard from './EventCard'

function EventList({ eventList }) {
    return (
        <div className='container'>
            <h3>250+ Events</h3>

            <div className="row row-cols-auto justify-content-center" style={{ columnGap: '24px' }}>
                {
                    eventList.map(eventItem => {
                        return (
                            <div className="col">
                                <EventCard eventItem={eventItem} />
                            </div>
                        )
                    })
                }
            </div>



        </div>
    )
}

export default EventList