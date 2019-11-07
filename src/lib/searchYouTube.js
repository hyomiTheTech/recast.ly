import YOUTUBE_API_KEY from '../config/youtube.js';

var searchYouTube = ({key, query, max = 5}, callback) => {
  $.get('https://www.googleapis.com/youtube/v3/search', {
    part: 'snippet',
    q: query,
    maxResults: max,
    key: key,
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
window.searchYouTube = searchYouTube;