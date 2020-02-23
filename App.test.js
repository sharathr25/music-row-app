import React from 'react';
import App from './App';
import renderer from 'react-test-renderer';
import ColorMusicRows from './components/ColorMusicRows';

test('should render ColorMusicRows', () => {
  const testRenderer = renderer.create(<App />);
  const { root } = testRenderer;
  expect(root.findByType(ColorMusicRows)).toBeTruthy();
});
