import React from 'react'

function EventCard({ eventItem }) {
    return (
        <div class="card" style={{ width: '272px', height: '288px', margin: '10px 0', border: 'none', filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))' }}>
            <img src="/images/card-image.png" class="card-img-top" alt="..." />
            <img src="/images/Union.png" alt="union" width="27" style={{ position: 'absolute', top: 11, left: 14, borderRadius: '4.5px' }} />
            <div class="card-body">
                <div style={{ maxWidth: '250px' }}>
                    <h5 class="card-title">{eventItem.name}</h5>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '18px' }}>
                    <div style={{ color: '#141B25', fontSize: '10.8px' }}><img src='/images/u_podium.svg' alt='' className='me-1 align-bottom' />Raddison Blue</div>
                    <div style={{ color: '#141B25', fontSize: '10.8px' }}><img src="/images/info.svg" className='me-1 align-bottom' />{eventItem.is_free ? 'Free' : 'Paid'} | {eventItem.is_virtual ? 'Online' : 'Offline'}</div>
                </div>
            </div>
        </div>
    )
}

export default EventCard