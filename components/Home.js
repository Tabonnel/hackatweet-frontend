import styles from "../styles/Home.module.css";
import React from "react";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Tweet from "./Tweet";

function Home() {
  const [tweetContent, setTweetContent] = useState("");
  const [characterCount, setCharacterCount] = useState(0);
  const user = useSelector((state) => state.user.value);


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
        // Ajouter le nouveau tweet à la liste des tweets existants
        const newTweet = {
          _id: data.result._id,
          firstname: "John", // Remplacez par les informations utilisateur réelles
          username: "test", // Remplacez par les informations utilisateur réelles
          content: tweetContent,
          date: data.result.date,
          likeCount: data.result.likeCount,
          image: data.result.image,
        };
        setLasttweets((prevTweets) => [newTweet, ...prevTweets]);
        setTweetContent(""); // Réinitialiser le contenu du tweet
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

  // Fonction pour ajouter un nouveau tweet
  const handleAddTweet = (newTweet) => {
    // Effectuez la logique pour ajouter le nouveau tweet en base de données

    // Mettez à jour la valeur qui sert de dépendance pour le useEffect
    setLasttweets((newTweet) => [newTweet, ...lasttweets]);
  };

  const sortedTweets = lasttweets.sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  const tweets = lasttweets.map((data) => (
    <Tweet key={data._id} {...data} />
  ));



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
        <div className={styles.tweetsContainer}>{tweets}</div>
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
