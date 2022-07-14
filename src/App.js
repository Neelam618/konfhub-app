import { useState, useEffect } from 'react'
import MyNavbar from './components/MyNavbar';
import Header from './components/Header'
import EventList from './components/EventList'

function App() {
  const [eventList, setEventList] = useState([])

  useEffect(() => {
    getEvents()
  }, [])

  const getEvents = () => {
    fetch('https://manage-api.konfhub.com/hosted-events?limit=10')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setEventList(data)
      });
  }

  return (
    <div>
      <MyNavbar />
      <Header />
      <EventList />
    </div>
  );
}

export default App;
