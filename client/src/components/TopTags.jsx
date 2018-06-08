import React from 'react';
import PropTypes from 'prop-types';
import TagEntry from './TagEntry.jsx';

class TopTags extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: this.sortTags(),
    };
  }

  sortTags() {
    const sortedTags = this.props.tags.sort((tagA, tagB) => tagB.voteCount - tagA.voteCount);
    return sortedTags.slice(0, 6);
  }

  render() {
    return (
      <div id="topTagsContainer">
        <div className="tagSectionHeader">Top Tags:</div>
        <div className="tagSectionBody">
          <div className="tagScrollWrapper">
            {
              this.state.tags.map((tag, i) => <TagEntry tag={tag} key={i}/>)
            }
          </div>
        </div>
      </div>
    );
  }
}

TopTags.propTypes = {
  tags: PropTypes.array,
  tags: PropTypes.arrayOf(PropTypes.object),
};

export default TopTags;