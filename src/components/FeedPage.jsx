import { useState } from 'react';
import Post from './Post';
import './FeedPage.css';
import { useDbData } from '../utilities/firebase'; 

const FeedPage = () => {
    // get data from database by using useEffect
    const [data, error] = useDbData('/');
    // while (!data) {
    //     return <h1>No</h1>
    // }
    // console.log(`data: ${data}`);
    // if (data) {
    //     alert(JSON.stringify(data.post1));
    // } else {
    //     alert("NO");
    // }
    // alert(JSON.stringify(data));
    const examplePost = {
        "post1": {
            "id": "post1",
            "name": "Alex Modugno",
            "email": "AlexModugno2024@u.northwestern.edu",
            "item": "Calculator",
            "date": "3/3/23",
            "time": "5pm-6pm"
        },
        "post2": {
            "id": "post2",
            "name": "Emily",
            "email": "emily2024@u.northwestern.edu",
            "item": "Toaster",
            "date": "3/3/23",
            "time": "5pm-6pm"
        },
        "post3": {
            "id": "post3",
            "name": "Emily",
            "email": "emily2024@u.northwestern.edu",
            "item": "Toaster",
            "date": "3/3/23",
            "time": "5pm-6pm"
        },
        "post4": {
            "id": "post4",
            "name": "Emily",
            "email": "emily2024@u.northwestern.edu",
            "item": "Toaster",
            "date": "3/3/23",
            "time": "5pm-6pm"
        },
        "post5": {
            "id": "post5",
            "name": "Emily",
            "email": "emily2024@u.northwestern.edu",
            "item": "Toaster",
            "date": "3/3/23",
            "time": "5pm-6pm"
        },
        "post6": {
            "id": "post6",
            "name": "Emily",
            "email": "emily2024@u.northwestern.edu",
            "item": "Toaster",
            "date": "3/3/23",
            "time": "5pm-6pm"
        },
        "post7": {
            "id": "post7",
            "name": "Emily",
            "email": "emily2024@u.northwestern.edu",
            "item": "Toaster",
            "date": "3/3/23",
            "time": "5pm-6pm"
        },
        "post8": {
            "id": "post8",
            "name": "Emily",
            "email": "emily2024@u.northwestern.edu",
            "item": "Toaster",
            "date": "3/3/23",
            "time": "5pm-6pm"
        }
    }

    const [posts, setPosts] = useState(examplePost);
    // information.name, .email, .item, .date, .time
    return (
        // <div class="feed-page">
        //     {posts.map((post, id) => (
        //         <Post postInfo={post} />
        //     ))}
        // </div>
        <div className="feed-page">
            {Object.entries(posts).map(([id, post]) => (
                <Post postInfo={post} />
            ))}
        </div>
    )
}

export default FeedPage;