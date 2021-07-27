import Card from '../ui/Card'
import {useRef} from 'react'
function NewMeetupForm() {
    const titleInputRef = useRef();
    const descrInputRef = useRef();
    const  imageInputRef = useRef();
    const  timeInputRef = useRef();

    function submitHandler(event){
        event.preventDefault();
        const enteredTitle = titleInputRef.current.value;
        const enteredDescr = descrInputRef.current.value;
        const enteredImage = imageInputRef.current.value;
        const enteredTime = timeInputRef.current.value;

        const meetupData = {
            title: enteredTitle,
            descr: enteredDescr,
            image: enteredImage,
            time: enteredTime
        };

        console.log(meetupData);
    }
    return (
        <div className="col-6 px-4 m-4">
            <Card>
                <div className="card-header bg-success text-white">Add Meetup Item</div>
                <div className="card-body">
                <form className="py-3" onSubmit={submitHandler}>
                    <div className="form-group">
                        <label htmlFor="title" className="label">Title</label>
                        <input type="text" className="form-control" id="title" ref={titleInputRef} /> 
                    </div>
                    <div className="form-group">
                        <label htmlFor="descr" className="label">Description</label>
                        <input type="text" className="form-control" id="descr" ref={descrInputRef} /> 
                    </div>
                    <div className="form-group">
                        <label htmlFor="image" className="label">Image Url</label>
                        <input type="text" className="form-control" id="image" ref={imageInputRef} /> 
                    </div>
                    <div className="form-group">
                        <label htmlFor="time" className="label">Date</label>
                        <input type="date" className="form-control" id="time" ref={timeInputRef} /> 
                    </div>
                    <button className="btn btn-success mt-2">Save</button>
                </form>
                </div>
            </Card>
        </div>
    )
}

export default NewMeetupForm
