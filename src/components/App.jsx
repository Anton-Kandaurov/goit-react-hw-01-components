import user from '../data/user.json';
import { Profile } from './user-info/userInfo';

import data from '../data/data.json';
import { Statistics } from './statistics/statistics';

import friends from '../data/friends.json';
import { Friends } from './friends/friends'

import transactions from '../data/transactions.json';
import { TransactionHistory } from './transactionHistory/transactionHistory';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile username={user.username} tag={user.tag} location={user.location} avatar={user.avatar} followers={user.stats.followers} views={user.stats.views} likes={user.stats.likes} />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <Friends friends={friends} />
      <TransactionHistory items={transactions} />;
    </div>
  );
};
