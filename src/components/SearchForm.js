import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

function SearchForm() {
    return (
        <div style={{ width: '597px', position: 'absolute', bottom: '-33px', left: 0, right: 0, margin: '0 auto', background: '#ffffff', display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: '1px solid' }}>
            <div style={{ width: '100%' }} className="me-3">
                <Form.Label>Search</Form.Label>
                <InputGroup>
                    <Form.Control
                        aria-label="Search"
                    />
                </InputGroup>
            </div>
            <div style={{ width: '60%' }}>
                <Form.Label>Past Events</Form.Label>
                <Form.Select aria-label="Select past events">
                    <option>Select Type</option>
                    <option value="1">True</option>
                    <option value="2">False</option>
                </Form.Select>
            </div>

        </div>
    )
}

export default SearchForm