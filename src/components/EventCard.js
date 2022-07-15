import React from 'react'

function EventCard({ eventItem }) {
    return (
        <div class="card event-card">
            <img src="/images/card-image.png" class="card-img-top" alt="Event" />
            <img src="/images/Union.png" className='card-image-small' alt="union" width="27" />
            <div class="card-body d-flex flex-column justify-content-around">
                <div className='card-title-wrapper'>
                    <h5 class="card-title">{eventItem.name}</h5>
                </div>
                <div className='d-flex justify-content-between align-items-center'>
                    <div className='card-bottom'><img src='/images/u_podium.svg' alt='' className='me-1 align-bottom' />Raddison Blue</div>
                    <div className='card-bottom'><img src="/images/info.svg" className='me-1 align-bottom' />{eventItem.is_free ? 'Free' : 'Paid'} | {eventItem.is_virtual ? 'Online' : 'Offline'}</div>
                </div>
            </div>
        </div>
    )
}

export default EventCard