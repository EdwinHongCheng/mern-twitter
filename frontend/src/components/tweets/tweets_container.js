import { connect } from "react-redux";
import { fetchTweets } from "../../actions/tweet_actions";
import Tweets from "./tweets";

const mapStateToProps = (state) => {
    // let tweets;
    // if (state.tweets) {
    //     tweets = Object.values(state.tweets.all);
    // } else {
    //     tweets = {};
    // }
  return {
    tweets: Object.values(state.tweets.all),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchTweets: () => dispatch(fetchTweets()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Tweets);
