import React from 'react'

function EventCard({ eventItem }) {
    return (
        <div class="card" style={{ width: '18rem', height: '287px', margin: '10px 0', border: '1px solid' }}>
            <img src="/images/card-image.png" class="card-img-top" alt="..." />
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