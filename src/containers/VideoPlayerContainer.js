import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';

const mapStateToProps = state => {
  return {
    video: state.currentVideo,
  };
};


const mapDispatchToProps = dispatch => ({
  changeVideo: (video) => {
    dispatch(changeVideo(video));
  },
});

var VideoPlayerContainer = connect(mapStateToProps, mapDispatchToProps)(VideoPlayer);

export default VideoPlayerContainer;
