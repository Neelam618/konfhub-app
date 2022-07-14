import React from 'react'
import SearchForm from './SearchForm'

function Header({ query, setQuery, handleSearch, isPastEvent, setIsPastEvent }) {
    return (
        <>
            <div className='container' style={{ background: '#FFDBA6', position: 'relative', borderRadius: 50, padding: 41 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div>
                        <img src="/images/Events.png" alt="Events" />
                        <p style={{ maxWidth: 675, padding: '27px 30px' }}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra
                        </p>
                    </div>
                    <div style={{ marginBottom: 20 }}>
                        <img src="/images/events-header.png" alt="Octopus holding a mic" />
                    </div>
                </div>
                <SearchForm query={query} setQuery={setQuery} handleSearch={handleSearch} isPastEvent={isPastEvent} setIsPastEvent={setIsPastEvent} />
            </div>
        </>
    )
}

export default Header