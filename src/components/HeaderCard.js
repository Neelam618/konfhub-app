import React from 'react'
import { Container } from 'react-bootstrap'

function HeaderCard() {
    return (
        <Container>
            <div style={{ display: 'flex', alignItems: 'center', background: '#FFDBA6' }}>
                <div>
                    <img src="/images/Events.png" alt="Events" />
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra
                    </p>
                </div>
                <div>
                    <img src="/images/hero-image.jpg" alt="Octopus holding a mic" />
                </div>
            </div>
        </Container>
    )
}

export default HeaderCard