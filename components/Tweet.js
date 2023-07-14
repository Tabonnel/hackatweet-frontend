import styles from "../styles/Tweet.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faTrash, faEye } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

function Tweet(props) {
  const user = useSelector((state) => state.user.value);

  let iconStyle = {};

  if (user.username !== props.username) {
    iconStyle = { display: "none" };
    
  } else {
    iconStyle = { color: "white" };
  }

  let idTweet = 'props.result.id';
  const handleTrashClick = () => {
    fetch(`http://localhost:3000/tweets/${props.result.id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: idTweet,
      }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result) {
          console.log(data.message);
        }
      });
  };
  return (
    <div className={styles.tweetContainer}>
      <div className={styles.tweetInfos}>
        <img
          className={styles.logoId}
          src="flat-business-man-user-profile-avatar-icon-vector-4333097.jpg"
        />
        <p>{props.firstname}</p>

        <p className={styles.username}> {props.username} </p>

        {moment(props.date).fromNow()}
      </div>
      <div className={styles.tweetContent}>{props.content}</div>
      <div className={styles.tweetCountlikes}>
        <FontAwesomeIcon icon={faHeart} className={styles.likeHeart}>
          {" "}
        </FontAwesomeIcon>
        {props.likeCount}
        <FontAwesomeIcon
          icon={faTrash}
          className={styles.trash}
          style={iconStyle}
          onClick={() => handleTrashClick()}
        ></FontAwesomeIcon>
      </div>
    </div>
  );
}

export default Tweet;
