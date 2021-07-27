import NewMeetupForm from '../components/meetups/NewMeetupForm'
function NewMeetupPage() {
    function addMeetupHandler(meetupData){
        
    }
    return (
        <div>
            <NewMeetupForm onAddMeetup={addMeetupHandler} />
        </div>
    )
}

export default NewMeetupPage
