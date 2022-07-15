import React from 'react'

function EventCard({ eventItem }) {
    return (
        <div class="card" style={{ width: '272px', height: '288px', margin: '10px 0', border: 'none', filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))' }}>
            <img src="/images/card-image.png" class="card-img-top" alt="..." />
            <img src="/images/Union.png" alt="union" width="27" style={{ position: 'absolute', top: 11, left: 14, borderRadius: '4.5px' }} />
            <div class="card-body">
                <h5 class="card-title">{eventItem.name}</h5>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>Raddison Blue</div>
                    <div><span>{eventItem.is_free ? 'Free' : 'Paid'}</span> | <span>{eventItem.is_virtual ? 'Online' : 'Offline'}</span></div>
                </div>
            </div>
        </div>
    )
}

export default EventCard