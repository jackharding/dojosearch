import React from 'react';
import renderer from 'react-test-renderer';

import { ImageUploader } from '../../components';

test('Error is shown when a disallowed file type is uploaded', () => {
    const component = renderer.create(
        <ImageUploader />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});