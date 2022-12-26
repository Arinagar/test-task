import { useEffect } from 'react';
import { useState } from 'react';

export const Followers = () => {
  const [followers, setFollowers] = useState(
    JSON.parse(localStorage.getItem('followers')) ?? 100500
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
    <div>
      <p>{followers} FOLLOWERS</p>
      <button type="button" onClick={toggleSubscription}>
        {isFollowing ? 'FOLLOWING' : 'FOLLOW'}
      </button>
    </div>
  );
};
