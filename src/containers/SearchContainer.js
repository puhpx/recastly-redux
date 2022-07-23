import { connect } from 'react-redux';
import Search from './../components/Search.js';
import handleVideoSearch from '../actions/search.js';

const mapStateToProps = state => {
  return {
    currentVideo: state.currentVideo,
    videoList: state.videoList,
  };
};

const mapDispatchToProps = dispatch => ({
  handleSearchInputChange: (q) => {
    dispatch(handleVideoSearch(q));
  },
});

var SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search);
export default SearchContainer;
