
var searchYouTube = (options, callback) => {
  $.ajax({
    url: `https://www.youtube.com`,
    type: 'GET',
    data: {
      query: "",
      max: 5,
      key:
    }
  })
};

export default searchYouTube;
