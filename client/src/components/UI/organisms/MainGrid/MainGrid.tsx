import MainSongSection from '../MainSongSection/MainSongSection';
import { Text } from '../../atoms';
import styles from './maingrid.module.scss';
import classNames from 'classnames/bind';
import { MusicData } from '../../../pages/Main/Main';

function MainGrid({ musicData }: { musicData: MusicData }) {
  const cx = classNames.bind(styles);

  return (
    <div className={cx('main-content-wrapper')}>
      <div className={cx('main-content-grid')}>
        <h1 className={cx('main-content-header')}>
          <Text size="xlg" weight="semibold">
            곡
          </Text>
        </h1>
        {musicData &&
          musicData.map((el) => {
            return (
              <MainSongSection
                key={el.songId}
                songTitle={el.songName}
                singer={el.artist}
                albumImg={el.albumImg}
                scores={el.scores}
              />
            );
          })}
      </div>
    </div>
  );
}

export default MainGrid;
