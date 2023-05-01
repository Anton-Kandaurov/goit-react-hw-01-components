import user from '../user.json';
import { UserInfo } from './user-info/userInfo';

import data from '../data.json';
import { Statistics } from './statistics/statistics';

import friends from '../friends.json';
import { Friends } from './friends/friends'

import transactions from '../transactions.json';
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
      <UserInfo username={user.username} tag={user.tag} location={user.location} avatar={user.avatar} stats={user.stats} />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <Friends friends={friends} />
      <TransactionHistory items={transactions} />;
    </div>
  );
};
