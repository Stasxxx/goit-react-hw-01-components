import PropTypes from 'prop-types';
import { Item, Status, Avatar, Name } from './FriendsListItem.styled'

export const FriendListItem = ({ friends }) => {
    // console.log(id)
    return (
    <>
        {friends.map(friend =>
        <Item key={friend.id}>
            <Status isOnline={friend.isOnline}></Status>
            <Avatar src={friend.avatar} alt="User avatar" />
            <Name>{friend.name}</Name>
        </Item>)}
    </>
        
    );
}

FriendListItem.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.exact({
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
        id: PropTypes.number.isRequired,
    }))
}