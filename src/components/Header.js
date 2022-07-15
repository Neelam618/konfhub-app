import React from 'react'
import SearchForm from './SearchForm'

function Header({ query, setQuery, handleSearch, isEventPast, setIsEventPast }) {
    return (
        <>
            <div className='header container position-relative mx-auto'>
                <div className="d-flex align-items-center justify-content-between flex-column flex-lg-row">
                    <div>
                        <img src="/images/Events.png" alt="Events" />
                        <p className='header-para'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel fringilla est ullamcorper eget nulla facilisi etiam dignissim diam quis enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra
                        </p>
                    </div>
                    <div className="mb-5 mb-lg-4">
                        <img className="header-img" src="/images/events-header.png" alt="Octopus holding a mic" />
                    </div>
                </div>
                <SearchForm query={query} setQuery={setQuery} handleSearch={handleSearch} isEventPast={isEventPast} setIsEventPast={setIsEventPast} />
            </div>
        </>
    )
}

export default Header