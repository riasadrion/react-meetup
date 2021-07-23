function Card(props) {
    return (
        <div className="card col-4">
            {props.children}
        </div>
    )
}

export default Card
