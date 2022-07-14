import React from 'react'

function EventCard() {
    return (
        <div class="card" style={{ width: '18rem' }}>
            <img src="/images/card-image.png" class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div>Raddison Blue</div>
                    <div><span>Free</span> | <span>Online</span></div>
                </div>
            </div>
        </div>
    )
}

export default EventCard