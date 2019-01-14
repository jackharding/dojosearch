import React from 'react';

import { Small } from './';

const TagList = ({ tags }) => (
    <Small style={{ textTransform: 'uppercase', display: 'block' }}>{ tags.map((tag, i) => i === 0 ? tag : ', ' + tag) }</Small>
);

export default TagList;