import React from 'react'
import EventCard from './EventCard'

function EventList({ filteredEvents }) {
    return (
        <div className='container' style={{ margin: '6em auto 2em auto' }}>
            <h3 className='mb-4'>250+ Events</h3>
            <div className="row row-cols-auto justify-content-center" style={{ columnGap: '24px' }}>
                {
                    filteredEvents.map(eventItem => {
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