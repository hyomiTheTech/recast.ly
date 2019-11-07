// TODO: Render the `App` component to the DOM
import App from './components/App.js';
import exampleVideoData from '../src/data/exampleVideoData.js';

import YOUTUBE_API_KEY from './config/youtube.js';

ReactDOM.render(<App searchYouTube={window.searchYouTube}exampleVideoData={exampleVideoData} API_KEY={YOUTUBE_API_KEY} />, document.getElementById('app'));

