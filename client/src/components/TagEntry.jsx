import React from 'react';
import PropTypes from 'prop-types';

const TagEntry = (props) => (
  <div className="tag">
    {props.tag.tagName}
  </div>
);

TagEntry.propTypes = {
  tag: PropTypes.object,
};

export default TagEntry;
