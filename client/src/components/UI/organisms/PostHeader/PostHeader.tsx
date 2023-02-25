import styles from './postheader.module.scss';
import classNames from 'classnames/bind';
import { Button, Icon, Text } from '../../atoms';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../../../redux/store';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { auth, getMusicData, updateScore } from '../../../../firebase/firebase';
import { setUserInfo, initializeState } from '../../../../redux/PostSlice';
import { toast } from 'react-toastify';
import { useEffect } from 'react';

const PostHeader = () => {
  const cx = classNames.bind(styles);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const { scoreId } = useParams();

  const data = useSelector((state: RootState) => state.postInfo);

  const handleIsPost = () => {
    dispatch(initializeState());
    navigate(-1);
  };

  useEffect(() => {
    if (auth.currentUser) {
      const user = [
        auth.currentUser.displayName,
        auth.currentUser.uid,
        auth.currentUser.photoURL,
      ];
      dispatch(setUserInfo(user));
    }
  }, [data]);

  const validateInputs = () => {
    const { songName, artist, albumImg, scores } = data;
    if (
      !songName ||
      !artist ||
      !albumImg ||
      !scores[0].instType ||
      !scores[0].difficulty ||
      !scores[0].sheetType ||
      !scores[0].detail ||
      !scores[0].price ||
      !scores[0].downloadURL
    ) {
      return false;
    }
    return true;
  };

  const handleUpload = async () => {
    console.log(data);
    if (!validateInputs()) {
      toast.error('모든 필드를 입력해주세요.');
    } else {
      if (pathname.includes('/edit') && scoreId) {
        await updateScore(data, scoreId);
      } else await getMusicData(data.songName, data);

      navigate('/');
      dispatch(initializeState());
      toast.success('악보 등록 성공!');
    }
  };

  return (
    <header>
      <nav className={cx('nav-post')}>
        <Button size="s" theme="transparent" onClick={() => handleIsPost()}>
          <div className={cx('upload')}>
            <Icon icon="BsArrowLeft" />
            <Text>뒤로 가기</Text>
          </div>
        </Button>
        <Button size="s" onClick={() => handleUpload()}>
          <div className={cx('save')}>
            <Icon icon="MdOutlineCheck" color="white" />
            <Text color="white">
              {pathname.includes('/edit') ? '수정하기' : '저장하기'}
            </Text>
          </div>
        </Button>
      </nav>
    </header>
  );
};

export default PostHeader;