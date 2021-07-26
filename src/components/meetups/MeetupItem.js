import { Link } from 'react-router-dom'
import Card from '../ui/Card'
function MeetupItem(props) {
    return (
        <div className="col-4 mb-4">
            <Card>
                <img src={props.meetup.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.meetup.title}</h5>
                    <p className="card-text">{props.meetup.time}</p>
                    <Link  to="/meetup-details" className="btn btn-primary">Go somewhere</Link>
                </div>
            </Card>
        </div>
    )
}

export default MeetupItem
