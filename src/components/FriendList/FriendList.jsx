import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <>
      <ul className={css.friendsList}>
        {friends.map(friend => (
          <li key={friend.id} className={css.itemList}>
            {friend.isOnline === true ? (
              <span className={css.statusRed} style={{}}></span>
            ) : (
              <span className={css.statusGreen} style={{}}></span>
            )}

            <img className={css.img} src={friend.avatar} alt={friend.name} />
            <p className={css.name}>{friend.name}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

FriendList.propTypes = {
  avatar: PropTypes.elementType,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
