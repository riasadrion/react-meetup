import MeetupItem from "./MeetupItem"

function MeetupList(props) {
    return (
        <div className="row p-4">
            {props.meetups.map((meetup) => <MeetupItem meetup={meetup} key={meetup.id} />)}
        </div>
    )
}

export default MeetupList
