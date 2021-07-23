import { Link } from 'react-router-dom'
import Card from '../ui/Card'
function MeetupItem(props) {
    return (
        <div>
            <Card>
                <img src={props.meetup.image} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{props.meetup.title}</h5>
                    <p class="card-text">{props.meetup.descr}</p>
                    <Link href="" className="btn btn-primary">Go somewhere</Link>
                </div>
            </Card>
        </div>
    )
}

export default MeetupItem
