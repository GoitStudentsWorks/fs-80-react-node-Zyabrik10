import globalCss from 'css/global.module.css';
import css from './Social.module.css';

import FacebookSvg from '../Svg/FacebookSvg';
import InstagramSvg from '../Svg/InstagramSvg';
import YouTubeSvg from '../Svg/YouTubeSvg';

export const Social = ({ title }) => {
  return (
    <div className={css.socialBox}>
      <h4 className={`${css['socialTitle']} ${globalCss['global-title']}`}>
        {title}
      </h4>
      <ul className={`${css['socialList']} ${globalCss['global-list']}`}>
        <li className={css.socialItem}>
          <a
            className={`${css['socialLink']} ${globalCss['global-link']}`}
            href="https://www.facebook.com/goITclub/"
            target="_blank"
            rel="noreferrer"
          >
            <FacebookSvg />
          </a>
        </li>
        <li className={css.socialItem}>
          <a
            className={`${css['socialLink']} ${globalCss['global-link']}`}
            href="https://www.instagram.com/goitclub/"
            target="_blank"
            rel="noreferrer"
          >
            <InstagramSvg />
          </a>
        </li>
        <li className={css.socialItem}>
          <a
            className={`${css['socialLink']} ${globalCss['global-link']}`}
            href="https://www.youtube.com/c/GoIT"
            target="_blank"
            rel="noreferrer"
          >
            <YouTubeSvg />
          </a>
        </li>
      </ul>
    </div>
  );
};
