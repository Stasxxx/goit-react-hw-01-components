import { Profile } from 'components/Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import {FriendList} from './FriendList/FriendList'
import user from '../user';
import data from '../data';
import friends from '../friends.json'

export const App = () => {
  return (
    <div>
      <Profile user={user} />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
    </div>
  );
};
