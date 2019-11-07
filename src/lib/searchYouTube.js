import YOUTUBE_API_KEY from '../config/youtube.js';

var searchYouTube = (options, callback) => {
  $.get('https://www.googleapis.com/youtube/v3/search', {
    part: 'snippet',
    q: options.query,
    maxResults: options.max,
    key: options.key,
    videoEmbeddable: true,
    type: 'video',
  })
    .done(({items}) => {
      if (callback) {
        callback(items);
      }
    })
    .fail(({responseJSON}) =>{
      responseJSON.error.errors.forEach((err) => console.error(err));
    });
};

export default searchYouTube;
