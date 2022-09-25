import {List} from './FriendList.styled'
import { FriendListItem } from '../FriendListItem/FriendListItem';

    
export const FriendList = ({ friends }) => {
    
    return (<List>
        <FriendListItem friends={friends}/>
    </List>);
}