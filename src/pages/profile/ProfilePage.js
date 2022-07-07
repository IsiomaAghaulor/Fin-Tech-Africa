import axios from 'axios';
import React, { useEffect, useState} from 'react'
import './ProfilePage.css';
import ProfileService from './ProfileService';
import { Link } from 'react-router-dom';

const ProfilePage = () => {
    // const [ user, setUser] = useState([])
    // const fetchSingleUser = () => {
    //     axios.get("http://localhost:9005/api/v1/user/register/" + 1).then((resp) => {
    //         setUser(resp.data.result)
    //     }).catch((error) => {
    //         console.log(error);
    //     })
    // }

    const [loading, setLoading] = useState(true);
    const [ user, setUser] = useState([])

    // var header = {'Authorization': 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJjaGlidWV6ZW53YWppb2JpQGdtYWlsLmNvbSIsImlhdCI6MTY1NzE0NDkxOCwiZXhwIjoxNjU3MTQ2NzE3fQ.B2uBo8Qet1UmNI2cbIOm0PIJNfWFJ8bQG1FRheZLyHHNzIvWS_jYSQjhPNX3X3OlE55YtJJoJuJV3JHIN5DVkQ'}
    var header = {'Authorization': localStorage.getItem("accessToken")}
    useEffect(() => {
        const fetchData = async () => {
          setLoading(true);
          try {
            const response = await ProfileService.getUser(header);
            setUser(response.data);
          } catch (error) {
            console.log(error);
          }
          setLoading(false);
        };
        fetchData();
      }, []);

  return (
    <div className='profilePage'>
        <div className="profilePage__wrapper">

            <div className="profilePage__side" >
                <p>&larr;</p>
                <Link className="side_link" to="/"> Go back</Link>
            </div>

            <div className="profilePage__top">
                <p>PROFILE</p>
            </div>
            <div className="profilePage__body">
                <div className="profilePage__content">
                    <label >FirstName</label>
                    <input disabled type="text" value={user.firstName} />
                </div>

                <div className="profilePage__content">
                    <label >LastName</label>
                    <input disabled type="text" value={user.lastName} />
                </div>

                <div className="profilePage__content">
                    <label >PhoneNumber</label>
                    <input disabled type="text" value={user.phoneNumber} />
                </div>

                <div className="profilePage__content">
                    <label >BVN</label>
                    <input disabled type="text" value={user.bvn} />
                </div>

                <div className="profilePage__content">
                    <label >Email</label>
                    <input disabled type="email" value={user.email} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProfilePage