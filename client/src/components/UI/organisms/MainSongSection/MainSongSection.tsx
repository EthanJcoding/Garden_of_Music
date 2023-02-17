import React from 'react';
import { MainScoreList, SongTitle } from '../../molecules';
import styles from './mainsongsection.module.scss';
import classNames from 'classnames/bind';
import { ScoreInfo } from '../../../pages/Main/Main';

interface MainSongSectionProps {
  songTitle: string;
  singer: string;
  albumImg?: string;
  scores: ScoreInfo[];
  // scoreName: string;
  // scoreWriter: string;
  // profileImg?: string;
  // instrument: string;
  // difficulty: string;
  // price: string;
}

function MainSongSection({
  songTitle,
  singer,
  albumImg,
  scores,
}: // scoreName,
// scoreWriter,
// profileImg,
// instrument,
// difficulty,
// price,
MainSongSectionProps) {
  const cx = classNames.bind(styles);
  return (
    <section className={cx('container')}>
      <SongTitle songTitle={songTitle} singer={singer} albumImg={albumImg} />
      <div className={cx('scorelist-wrapper')}>
        {scores &&
          scores.map((el, idx) => {
            if (idx < 3) {
              return (
                <MainScoreList
                  key={el.scoreId}
                  profileImg={el.profileImg}
                  difficulty={el.difficulty}
                  instrument={el.instrument}
                  price={el.price}
                  scoreName={el.scoreName}
                  scoreWriter={el.scoreWriter}
                />
              );
            }
          })}
        {/* <MainScoreList
          scoreName={scoreName}
          scoreWriter={scoreWriter}
          profileImg={profileImg}
          instrument={instrument}
          difficulty={difficulty}
          price={price}
        />
        <MainScoreList
          scoreName={scoreName}
          scoreWriter={scoreWriter}
          profileImg={profileImg}
          instrument={instrument}
          difficulty={difficulty}
          price={price}
        />
        <MainScoreList
          scoreName={scoreName}
          scoreWriter={scoreWriter}
          profileImg={profileImg}
          instrument={instrument}
          difficulty={difficulty}
          price={price}
        /> */}
      </div>
    </section>
  );
}

export default MainSongSection;