import React from 'react'
import EventCard from './EventCard'

function EventList({ filteredEvents, loadMore }) {
    return (
        <main>
            <div className='container'>
                <h3 className='mb-4'>250+ Events</h3>
                <div className="row row-cols-auto justify-content-around">
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
                <div className='btn-wrapper d-flex justify-content-center align-items-center mt-5'>
                    <button className='load-more btn btn-outline-secondary' type='button' onClick={loadMore}>Load More</button>
                </div>
            </div>
        </main>
    )
}

export default EventList