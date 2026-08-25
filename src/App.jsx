import "./App.css";
import user from "./user.json";
import Profile from "./components/Profile";
import data from "./data.json";
import Statistics from "./components/Statistics";
import friends from "./friends.json";
import FriendList from "./components/FriendList";
import transactions from "./transactions.json";
import TransactionHistory from "./components/TransactionHistory";

function App() {
  return (
    <>
      <h2>Завдання 1</h2>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <h2>Завдання 2</h2>
      <Statistics title="Upload stats" stats={data} />
      <h2>Завдання 3</h2>
      <FriendList friends={friends} />
      <h2>Завдання 4</h2>
      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;
