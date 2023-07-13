import styles from "../styles/Tweet.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart, faXmark, faEye } from "@fortawesome/free-solid-svg-icons";
import moment from 'moment';

function Tweet(props) {

  return (
    <div className={styles.tweetContainer}>
      <div className={styles.tweetInfos}>
        <img
          className={styles.logoId}
          src="flat-business-man-user-profile-avatar-icon-vector-4333097.jpg"
        />
        {props.firstname}
        <p> </p>
        {props.username}
        <p>               </p>
        {moment(props.date).fromNow()}
      </div>
      <div className={styles.tweetContent}>{props.content}</div>
      <div className={styles.tweetCountlikes}>
        <FontAwesomeIcon icon={faHeart}> </FontAwesomeIcon>  {props.likeCount}
      </div>
    </div>
  );
}

export default Tweet;
