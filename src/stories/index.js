import React from 'react';
import '../assets/bulma.min.css'
import '../assets/bulma.min.css'
import './Movies.stories'
import { configure } from '@storybook/react';
import * as MoviesStory from './Movies.stories'

// const req = require.context('../src/components', true, /\.stories\.js$/);

function loadStories() {
  MoviesStory
}

configure(loadStories, module);
