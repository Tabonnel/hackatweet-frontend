import styles from "../styles/Home.module.css";
import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Tweet from "./Tweet";

function Home() {
  const [tweetContent, setTweetContent] = useState("");
  const [characterCount, setCharacterCount] = useState(0);

  const [lasttweets, setLasttweets] = useState([]);

  const handleInputChange = (event) => {
    const content = event.target.value;
    setTweetContent(content);
    setCharacterCount(content.length);
  };

  const [tweetsData, setTweetsData] = useState([]);

  const handleClickTweet = () => {
    fetch("http://localhost:3000/tweets/newtweet", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        content: tweetContent,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.result);
        // setTweetsData(data.result[0])
      });
  };

  useEffect(() => {
    fetch("http://localhost:3000/tweets/alltweets")
      .then((res) => res.json())
      .then((data) => {
        console.log(data.result);
        setLasttweets(data.result);
      });
  }, []);

  
  const tweets = lasttweets.map((data, i) => {
    return <Tweet key={i} {...data} />;
  });



  return (
    <div className={styles.main}>
      <div className={styles.leftHome}>
        <div className={styles.logoContainer}>
          {" "}
          <img className={styles.logo} src="/logo_twitter.png" />
        </div>
        <div className={styles.leftFooter}>
          <div className={styles.userInfos}>
            <img
              className={styles.logoId}
              src="flat-business-man-user-profile-avatar-icon-vector-4333097.jpg"
            />
            <div className={styles.userNames}>
              <p className={styles.firstname}>John</p>
              <p className={styles.user}>@JohnCena</p>
            </div>
          </div>
          <div className={styles.logout}>
            <button className={styles.logoutBtn}> Logout</button>
          </div>
        </div>
      </div>
      <div className={styles.centerHome}>
        <div className={styles.centerTop}>
          <div className={styles.title}>
            <h1>Home</h1>
          </div>
          <div className={styles.inputTweet}>
            <textarea
              className={styles.inputText}
              placeholder="What's up?"
              maxLength="280"
              value={tweetContent}
              onChange={handleInputChange}
            ></textarea>
          </div>
          <div className={styles.countBtnTweet}>
            {characterCount}/280
            <button
              className={styles.tweetBtn}
              onClick={() => handleClickTweet()}
            >
              {" "}
              Tweet
            </button>
          </div>
        </div>
        <div className={styles.tweetsContainer}>
          {tweets}
          </div>
      </div>
      <div className={styles.rightHome}>
        <div className={styles.trendsTitle}>
          <h1>Trends</h1>
        </div>
        <div className={styles.trendsContainer}>
          <div>Tweet1</div>
          <div>Tweet2</div>
          <div>Tweet3</div>
        </div>
      </div>
    </div>
  );
}

export default Home;
