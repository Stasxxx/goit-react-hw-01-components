import {List} from './FriendList.styled'
import { FriendListItem } from '../FriendListItem/FriendListItem';

    
export const FriendList = ({ friends }) => {
    const friendListItem = friends.map((friend) =>
        <FriendListItem friend={friend} />);
    return (

        <List>
            {friendListItem}
        </List>

        // <List>
        // <FriendListItem friends={friends}/>
        // </List>
    );
}