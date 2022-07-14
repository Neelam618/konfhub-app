import { useState, useEffect } from 'react'
import MyNavbar from './components/MyNavbar';
import Header from './components/Header'
import EventList from './components/EventList'

function App() {
  const [eventList, setEventList] = useState([])
  const [query, setQuery] = useState("")
  let filteredEvents = []

  useEffect(() => {
    getEvents()
  }, [])

  const getEvents = () => {
    fetch(`https://manage-api.konfhub.com/hosted-events?search_query=${query}`)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setEventList(data.events)
      });
  }

  const handleSearch = (e) => {
    setQuery(e.target.value)
  }

  if (query === "") {
    filteredEvents = eventList
  } else {
    filteredEvents = eventList.filter(eventItem => eventItem.name.toLowerCase().includes(query))
  }

  return (
    <div>
      <MyNavbar />
      <Header query={query} setQuery={setQuery} handleSearch={handleSearch} />
      <EventList filteredEvents={filteredEvents} eventList={eventList} />
    </div>
  );
}

export default App;
