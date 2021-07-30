import { useContext } from 'react';
import FavoritesContext from '../../store/favorites-context';
import { Link } from 'react-router-dom';
import Card from '../ui/Card';



function MeetupItem(props) {
    const favoritesCtx = useContext(FavoritesContext);
    const itemIsFavorite = favoritesCtx.itemIsFavorite(props.id);

    function toggleFavoriteStatusHandler(){
        if (itemIsFavorite){
            favoritesCtx.removeFavorite(props.meetup.id)
        }else{
            favoritesCtx.addFavorite({
                id: props.meetup.id,
                title: props.meetup.title,
                descr: props.meetup.descr,
                image: props.meetup.image,
                time: props.meetup.time,
            })
        }
    }

    return (
        <div className="col-4 mb-4">
            <Card>
                <img src={props.meetup.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{props.meetup.title}</h5>
                    <p className="card-text">{props.meetup.time}</p>
                    <Link  to="/meetup-details" onClick={toggleFavoriteStatusHandler} className="btn btn-primary">{itemIsFavorite ? 'Remove from favorites': 'Favorites'}</Link>
                </div>
            </Card>
        </div>
    )
}

export default MeetupItem
