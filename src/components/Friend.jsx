import Button from "./Button";
const Friend = ({ friend, onSelectedFriends, selectedFriend }) => {
  const isSelected = selectedFriend?.id === friend?.id;
  const handleSelection = (friend) => {
    onSelectedFriends(friend);
  };
  return (
    <li className={isSelected ? "selected" : ""}>
      <img src={friend.image} alt={friend.name}></img>
      <h3>{friend.name}</h3>
      {friend.balance < 0 ? (
        <p className="red">
          You owe {friend.name} {Math.abs(friend.balance)}€
        </p>
      ) : friend.balance > 0 ? (
        <p className="green">
          {friend.name} owes you {Math.abs(friend.balance)}€
        </p>
      ) : (
        <p>You and {friend.name} are even</p>
      )}
      <Button onClick={() => handleSelection(friend)}>
        {isSelected ? "Close" : "Select"}
      </Button>
    </li>
  );
};

export default Friend;
