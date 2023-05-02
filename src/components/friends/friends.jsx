import css from './friends.module.css';
import PropTypes from "prop-types";

export const Friends = ({ friends }) => {
    return (
        <ul className={css.friendlist}>
            {friends.map(({ avatar, name, isOnline, id }) => (
                <li className={css.item}
                    key={id}
                >
                    <span className={`${css.status} ${css[isOnline]}`}>{ isOnline }</span>
  <img className={css.avatar} src={ avatar } alt="User avatar" width="48" />
                    <p className={css.name}>{ name }</p>
  </li>
            ))}
        </ul>
    );
};

Friends.prototype = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    isOnline: PropTypes.string.isRequired,
};