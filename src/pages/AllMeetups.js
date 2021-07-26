import MeetupList from "../components/meetups/MeetupList";

const DATA = [
    {
        "id": 1,
        "title": "Brown, Mayer and Dicki",
        "descr": "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
        "image": "https://picsum.photos/400/280",
        "time": "8/12/2020"
      }, 
      {
        "id": 2,
        "title": "Metz Inc",
        "descr": "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
        "image": "https://picsum.photos/400/280",
        "time": "8/27/2020"
      }, 
      {
        "id": 3,
        "title": "Pouros LLC",
        "descr": "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
        "image": "https://picsum.photos/400/280",
        "time": "6/27/2021"
      }, 
      {
        "id": 4,
        "title": "O'Kon-Mitchell",
        "descr": "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
        "image": "https://picsum.photos/400/280",
        "time": "5/9/2021"
      }, 
      {
        "id": 5,
        "title": "White, Reilly",
        "descr": "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
        "image": "https://picsum.photos/400/280",
        "time": "11/8/2020"
      }, 
      {
        "id": 6,
        "title": "Hauck-Murray",
        "descr": "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
        "image": "https://picsum.photos/400/280",
        "time": "5/11/2021"
      }, 
      {
        "id": 7,
        "title": "Baumbach-O'Hara",
        "descr": "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
        "image": "https://picsum.photos/400/280",
        "time": "6/6/2021"
      }, 
      {
        "id": 8,
        "title": "Ratke and Sons",
        "descr": "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
        "image": "https://picsum.photos/400/280",
        "time": "2/13/2021"
      }, 
      {
        "id": 9,
        "title": "Konopelski, Grimes",
        "descr": "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
        "image": "https://picsum.photos/400/280",
        "time": "5/20/2021"
      }, 
      {
        "id": 10,
        "title": "Heaney Inc",
        "descr": "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
        "image": "https://picsum.photos/400/280",
        "time": "7/23/2020"
      }
];
function AllMeetUpsPage() {
    return (
        <div>
            <MeetupList meetups={DATA}/>
        </div>
    )
}

export default AllMeetUpsPage
