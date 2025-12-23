function makeFriendsList(friends) {
  const friendList = document.createElement('ul');
  
  for (const elem of friends) {
    const friend = document.createElement('li');
    friend.textContent = `${elem.firstName} ${elem.lastName}`;
    friendList.append(friend);
  }
  return friendList;
}
