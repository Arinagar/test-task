import { useEffect } from 'react';
import { useState } from 'react';
import css from './Followers.module.css';

export const Followers = () => {
  let followersNumber = 100500;
  const [followers, setFollowers] = useState(
    JSON.parse(localStorage.getItem('followers')) ?? followersNumber
  );
  const [isFollowing, setIsFollowing] = useState(
    JSON.parse(localStorage.getItem('isFollowing')) ?? false
  );

  useEffect(() => {
    localStorage.setItem('followers', JSON.stringify(followers));
  }, [followers]);

  useEffect(() => {
    localStorage.setItem('isFollowing', JSON.stringify(isFollowing));
  }, [isFollowing]);

  const toggleSubscription = () => {
    setIsFollowing(!isFollowing);
    isFollowing ? setFollowers(followers - 1) : setFollowers(followers + 1);
  };

  return (
    <div className={css.data_wrapper}>
      <p className={css.tweets}>777 TWEETS</p>
      <p className={css.followers}>
        {followers.toLocaleString('en')} FOLLOWERS
      </p>
      <button
        type="button"
        onClick={toggleSubscription}
        className={isFollowing ? css.following : css.follow}
      >
        {isFollowing ? 'FOLLOWING' : 'FOLLOW'}
      </button>
    </div>
  );
};
