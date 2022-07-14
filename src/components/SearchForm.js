import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function SearchForm({ query, handleSearch, isPastEvent, setIsPastEvent }) {

    const handleSelectChange = (e) => {
        setIsPastEvent(e.target.value)
    }
    return (
        <div style={{ width: '597px', position: 'absolute', bottom: '-33px', left: 0, right: 0, margin: '0 auto', background: '#ffffff', display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px solid' }}>
            <div style={{ width: '100%' }} className="me-3">
                <label class="form-label">Search</label>
                <div class="input-group">
                    <input value={query} onChange={handleSearch} type="text" class="form-control" aria-label="search" />
                </div>

            </div>
            <div style={{ width: '60%' }}>
                <label class="form-label">Past Events</label>
                <select value={isPastEvent} onChange={handleSelectChange} class="form-select" aria-label="Select past events">
                    <option selected>Select Type</option>
                    <option value="true">True</option>
                    <option value="false">False</option>
                </select>
            </div>

        </div>
    )
}

export default SearchForm