function SearchForm({ query, handleSearch, isEventPast, setIsEventPast }) {

    const handleSelectChange = (e) => {
        setIsEventPast(e.target.value)
    }
    return (
        <div className="header-form d-flex justify-content-between align-items-center mx-auto bg-white">
            <div className="search-wrapper me-3">
                <label class="form-label">Search</label>
                <div class="input-group">
                    <input id="search-input" value={query} onChange={handleSearch} type="text" class="form-control" aria-label="search" />
                    <span className="search-icon"><img src="/images/search.svg" alt="" /></span>
                </div>
            </div>
            <div className="select-wrapper">
                <label class="form-label">Past Events</label>
                <select required value={isEventPast} onChange={handleSelectChange} class="form-select" aria-label="Select past events">
                    <option value="" disabled selected>Select Type</option>
                    <option value="true">True</option>
                    <option value="false">False</option>
                </select>
            </div>
        </div>
    )
}

export default SearchForm