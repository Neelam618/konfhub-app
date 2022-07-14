import React from 'react'
import { Container } from 'react-bootstrap'
import SearchForm from './SearchForm'

function Header({ query, setQuery, handleSearch, isPastEvent, setIsPastEvent }) {
    return (
        <>
            <Container style={{ background: '#FFDBA6', position: 'relative' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <div>
                        <img src="/images/Events.png" alt="Events" />
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra
                        </p>
                    </div>
                    <div>
                        <img src="/images/events-header.png" alt="Octopus holding a mic" />
                    </div>
                </div>
                <SearchForm query={query} setQuery={setQuery} handleSearch={handleSearch} isPastEvent={isPastEvent} setIsPastEvent={setIsPastEvent} />
            </Container>
        </>
    )
}

export default Header