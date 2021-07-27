import NewMeetupForm from '../components/meetups/NewMeetupForm'
function NewMeetupPage() {
    function addMeetupHandler(meetupData){
        fetch(
            'https://react-meetup-f67f5-default-rtdb.asia-southeast1.firebasedatabase.app/meetups.json',
            {
                method: 'POST',
                body: JSON.stringify(meetupData),
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );
    }
    return (
        <div>
            <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </div>
    )
}

export default NewMeetupPage
