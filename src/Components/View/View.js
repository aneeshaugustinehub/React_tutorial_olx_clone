import React, {useEffect,useState,useContext} from 'react';
import { PostContext } from '../../store/PostContext';
import { FirebaseContext } from '../../store/Context';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';

import './View.css';

function View() {
  const [userDetails,setUserDetails] = useState([])
  const {postDetails} = useContext(PostContext)
  const {firebase} = useContext (FirebaseContext)
  const history = useHistory();
  

  useEffect(()=>{
    const {userid} = postDetails
    console.log(userid,postDetails);
    firebase.firestore().collection('user').where('id','==',userid).get().then((res)=>{
      res.forEach(doc => {
        setUserDetails(doc.data())
      });
    })
  },[])
  console.log(userDetails);
  if (postDetails !== undefined && postDetails !== null && postDetails.url !== undefined) {
    // Access the postDetails.url property here
    return (
      <div className="viewParentDiv">
        <div className="imageShowDiv">
          <img
            src={postDetails.url}
            alt=""
          />
        </div>
        <div className="rightSection">
          <div className="productDetails">
            <p>&#x20B9; {postDetails.price} </p>
            <span>{postDetails.name}</span>
            <p>{postDetails.category}</p>
            <span>{postDetails.createdAt}</span>
          </div>
          {userDetails && 
          <div className="contactDetails">
            <p>Seller details</p>
            <p>{userDetails.username}</p>
            <p>{userDetails.phone}</p>
          </div>
          }
        </div>
      </div>
    );
  }
  history.push('/')
  return (
    <div className="viewParentDiv">
      ...
    </div>
  );



}
export default View;
