import Friend from "./Friend";
const FriendsList = ({ initialFriends, onSelectedFriends, selectedFriend }) => {
  const friends = initialFriends;
  return (
    <ul>
      {friends.map((friend) => (
        <Friend key={friend.id} friend={friend} onSelectedFriends={onSelectedFriends} selectedFriend={selectedFriend} />
      ))}
    </ul>
  );
};

export default FriendsList;
