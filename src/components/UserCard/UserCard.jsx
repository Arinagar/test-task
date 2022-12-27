import { Followers } from 'components/Followers/Followers';
import css from './UserCard.module.css';
import logo from '../assets/images/Logologo-@1x-min.png';
import main from '../assets/images/picturemain-bg-@1x-min.png';
import user from '../assets/images/Boyperson-@1x-min.png';
import line from '../assets/images/line.svg';
export const UserCard = () => {
  return (
    <div className={css.card}>
      <div className={css.card_top}>
        <img src={logo} alt="logo" className={css.logo}></img>
        <div className={css.main_wrapper}>
          <img src={main} alt="main-theme"></img>
        </div>
      </div>
      <div className={css.avatar_wrapper}>
        <img src={line} className={css.line} alt="line"></img>
        <img src={user} alt="avatar" className={css.avatar}></img>
      </div>
      <p className={css.tweets}>777 TWEETS</p>
      <Followers />
    </div>
  );
};
