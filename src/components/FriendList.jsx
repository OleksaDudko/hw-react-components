function FriendList({ friends }) {
  return (
    <ul>
      {friends.map((item) => {
        return (
          <li key={item.id}>
            <span>{item.isOnline ? "Online" : "Not online"}</span>
            <img src={item.avatar} alt="User avatar" width="48" />
            <p>{item.name}</p>
          </li>
        );
      })}
    </ul>
  );
}

export default FriendList;
