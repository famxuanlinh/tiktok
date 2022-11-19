import {
    faCheckCircle,
    faComment,
    faFlag,
    faHeart,
    faMusic,
    faPause,
    faPlay,
    faShare,
    faVolumeControlPhone,
    faVolumeMute,
    faVolumeUp,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import Button from '../Button';
import Image from '../Image';
import styles from './VideoPlayer.module.scss';
import ReactPlayer from 'react-player/lazy';
import { useState } from 'react';

const cx = classNames.bind(styles);

const VideoPlayer = ({ video }) => {
    const [playing, setPlaying] = useState(true);
    const [muted, setMuted] = useState(false);

    const handlePlayPause = () => {
        setPlaying((prev) => !prev);
    };

    const handleMute = () => {
        setMuted((prev) => !prev);
    };

    return (
        <>
            <div className={cx('wrapper')}>
                <Image className={cx('avatar')} src={video.user.avatar} alt={video.user.nickname} />
                <div className={cx('inner')}>
                    <div className={cx('info')}>
                        <h4 className={cx('name')}>
                            <span>{video.user.nickname}</span>
                            {video.user.tick ? <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} /> : ''}
                        </h4>
                        <span className={cx('username')}>{`${video.user.first_name} ${video.user.last_name}`}</span>
                    </div>
                    <div className={cx('inner-description')}>
                        <span> {video.description}</span>
                    </div>
                    {video.music ? (
                        <div>
                            <FontAwesomeIcon icon={faMusic} />
                            <Link className={cx('inner-music')} to="/">
                                {video.music}
                            </Link>
                        </div>
                    ) : (
                        ''
                    )}
                    <div className={cx('video-player')}>
                        <div className={cx('video-content')}>
                            <ReactPlayer
                                className={cx('video')}
                                playing={playing}
                                muted={muted}
                                width="100%"
                                height="100%"
                                url={video.file_url}
                            />

                            <div>
                                {' '}
                                <p className={cx('btn-play')} onClick={handlePlayPause}>
                                    {playing ? <FontAwesomeIcon icon={faPause} /> : <FontAwesomeIcon icon={faPlay} />}
                                </p>
                                <p className={cx('btn-volume')} onClick={handleMute}>
                                    {muted ? (
                                        <FontAwesomeIcon icon={faVolumeMute} />
                                    ) : (
                                        <FontAwesomeIcon icon={faVolumeUp} />
                                    )}
                                </p>
                                <p className={cx('btn-report')}>
                                    <FontAwesomeIcon icon={faFlag} style={{ paddingRight: '5px' }} />
                                    Report
                                </p>
                            </div>
                        </div>
                        <div className={cx('btns')}>
                            <button className={cx('btn-video')}>
                                <p className={cx('btn-video-item')}>
                                    <FontAwesomeIcon icon={faHeart} />
                                </p>{' '}
                                <span className="like-count">{video.likes_count + 457}</span>
                            </button>
                            <button className={cx('btn-video')}>
                                <p className={cx('btn-video-item')}>
                                    <FontAwesomeIcon icon={faComment} />
                                </p>{' '}
                                <span className="like-count">{video.comments_count + 457}</span>
                            </button>
                            <button className={cx('btn-video')}>
                                <p className={cx('btn-video-item')}>
                                    <FontAwesomeIcon icon={faShare} />
                                </p>{' '}
                                <span className="like-count">{video.shares_count + 457}</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <Button small text primary className={cx('follow-btn')}>
                        Follow
                    </Button>
                </div>
            </div>
            <hr className={cx('hr-video')} />
        </>
    );
};

export default VideoPlayer;
