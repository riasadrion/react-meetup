import MeetupList from "../components/layout/meetups/MeetupList";

const DATA = [
    {
        "id": 1,
        "title": "Brown, Mayer and Dicki",
        "descr": "Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus.",
        "image": "http://dummyimage.com/x100.png/dddddd/000000",
        "time": "8/12/2020"
      }, 
      {
        "id": 2,
        "title": "Metz Inc",
        "descr": "Morbi porttitor lorem id ligula. Suspendisse ornare consequat lectus. In est risus, auctor sed, tristique in, tempus sit amet, sem.",
        "image": "http://dummyimage.com/x100.png/5fa2dd/ffffff",
        "time": "8/27/2020"
      }, 
      {
        "id": 3,
        "title": "Pouros LLC",
        "descr": "Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio.",
        "image": "http://dummyimage.com/x100.png/ff4444/ffffff",
        "time": "6/27/2021"
      }, 
      {
        "id": 4,
        "title": "O'Kon-Mitchell",
        "descr": "Cras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque.",
        "image": "http://dummyimage.com/x100.png/5fa2dd/ffffff",
        "time": "5/9/2021"
      }, 
      {
        "id": 5,
        "title": "White, Reilly and Macejkovic",
        "descr": "Curabitur at ipsum ac tellus semper interdum. Mauris ullamcorper purus sit amet nulla. Quisque arcu libero, rutrum ac, lobortis vel, dapibus at, diam.",
        "image": "http://dummyimage.com/x100.png/dddddd/000000",
        "time": "11/8/2020"
      }, 
      {
        "id": 6,
        "title": "Hauck-Murray",
        "descr": "Aliquam quis turpis eget elit sodales scelerisque. Mauris sit amet eros. Suspendisse accumsan tortor quis turpis.",
        "image": "http://dummyimage.com/x100.png/ff4444/ffffff",
        "time": "5/11/2021"
      }, 
      {
        "id": 7,
        "title": "Baumbach-O'Hara",
        "descr": "Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus.",
        "image": "http://dummyimage.com/x100.png/5fa2dd/ffffff",
        "time": "6/6/2021"
      }, 
      {
        "id": 8,
        "title": "Ratke and Sons",
        "descr": "Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero.",
        "image": "http://dummyimage.com/x100.png/ff4444/ffffff",
        "time": "2/13/2021"
      }, 
      {
        "id": 9,
        "title": "Konopelski, Grimes and Hilll",
        "descr": "Quisque id justo sit amet sapien dignissim vestibulum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nulla dapibus dolor vel est. Donec odio justo, sollicitudin ut, suscipit a, feugiat et, eros.",
        "image": "http://dummyimage.com/x100.png/dddddd/000000",
        "time": "5/20/2021"
      }, 
      {
        "id": 10,
        "title": "Heaney Inc",
        "descr": "Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris.",
        "image": "http://dummyimage.com/x100.png/5fa2dd/ffffff",
        "time": "7/23/2020"
      }
];
function AllMeetUpsPage() {
    return (
        <div>
            <h1>AllMeetUpsPage</h1>
            <MeetupList meetups={DATA}/>
        </div>
    )
}

export default AllMeetUpsPage
