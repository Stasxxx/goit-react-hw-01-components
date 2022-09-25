import { Profile } from 'components/Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import user from '../user';
import data from '../data';

export const App = () => {
  return (
    <div>
      <Profile user={user} />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
    </div>
  );
};
