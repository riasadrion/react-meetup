import { useState, useEffect } from 'react'
import MeetupList from "../components/meetups/MeetupList";

function AllMeetUpsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
    'https://react-meetup-f67f5-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json'
    ).then(res => {
      return res.json();
    }).then(data => {
      const meetups = [];
      for(const key in data){
        const meetup = {
          id:key,
          ...data[key]
        };
        meetups.push(meetup);
      }
      setIsLoading(false);
      setLoadedMeetups(meetups);
    });
  }, []);
  if(isLoading){
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    )
  }
    return (
        <div>
            <MeetupList meetups={loadedMeetups}/>
        </div>
    )
}

export default AllMeetUpsPage
