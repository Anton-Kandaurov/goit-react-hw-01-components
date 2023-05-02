import css from './statistics.module.css'
import PropTypes from "prop-types";

export const Statistics = ({ title, stats }) => {
    return (
        <section className={css.statistics}>
            {title && <h2 className={css.title}>{title}</h2>}

            <ul className={css.statlist}>
                {stats.map(({ id, label, percentage }) => (
                    <li
                        key={id}
                        className={css.item}
                    >
                         <div>
                        <span className={css.label}>{label}</span>
                        </div>
                        <span className={css.percentage}>{percentage}%</span>
                    </li>
                ))}
    
            </ul>
        </section>
    );
};

Statistics.prototype = {
    title: PropTypes.string,
    stats: PropTypes.number.isRequired,
};