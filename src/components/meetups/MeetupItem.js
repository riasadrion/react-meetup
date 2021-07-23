import Card from '../ui/Card'
function MeetupItem(props) {
    return (
        <div>
            <Card>
                <div className="card-header">
                    <h1>{props.meetup.title}</h1>
                </div>
            </Card>
        </div>
    )
}

export default MeetupItem
