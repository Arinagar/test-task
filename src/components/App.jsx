import { UserCard } from './UserCard/UserCard';
import css from './Container/Container.module.css';
export const App = () => {
  return (
    <div className={css.container}>
      <UserCard />
    </div>
  );
};
