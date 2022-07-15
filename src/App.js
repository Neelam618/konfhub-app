import { useState, useEffect } from 'react'
import MyNavbar from './components/MyNavbar';
import Header from './components/Header'
import EventList from './components/EventList'

function App() {
  const [eventList, setEventList] = useState([])
  const [query, setQuery] = useState("")
  const [isPastEvent, setIsPastEvent] = useState(true)
  let filteredEvents = []

  useEffect(() => {
    getEvents()
  }, [isPastEvent])

  const getEvents = () => {
    fetch(`https://manage-api.konfhub.com/hosted-events?search_query=${query}&past_events=${isPastEvent}&limit=12`)
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
      <Header query={query} setQuery={setQuery} handleSearch={handleSearch} isPastEvent={isPastEvent} setIsPastEvent={setIsPastEvent} />
      <EventList filteredEvents={filteredEvents} eventList={eventList} />
    </div>
  );
}

export default App;
