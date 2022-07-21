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


//TODO: define a SearchContainer component which will hook up your action
// dispatchers with your search component props.

//HINT: use react-redux 'connect' method to generate a container component from
//state and dispatch mappings.

var SearchContainer = connect(mapStateToProps, mapDispatchToProps)(Search);
export default SearchContainer;
