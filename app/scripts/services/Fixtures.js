(function () {
  function Fixtures() {
    var Fixtures = {};

    var albumPicasso = {
      albumNumber: 2,
      title: 'The Colors',
      artist: 'Pablo Picasso',
      label: 'Cubism',
      year: '1881',
      albumArtUrl: '/assets/images/album_covers/01.png',
      songs: [
        { title: 'Blue', duration: 161.71, audioUrl: '/assets/music/blue' },
        { title: 'Green', duration: 103.96, audioUrl: '/assets/music/green' },
        { title: 'Red', duration: 268.45, audioUrl: '/assets/music/red' },
        { title: 'Pink', duration: 153.14, audioUrl: '/assets/music/pink' },
        { title: 'Magenta', duration: 374.22, audioUrl: '/assets/music/magenta' }
      ]
    };

    var albumMarconi = {
      albumNumber: 1,
      title: 'The Telephone',
      artist: 'Guglielmo Marconi',
      label: 'EM',
      year: '1909',
      albumArtUrl: '/assets/images/album_covers/02.png',
      songs: [
        { title: 'Hello, Operator?', duration: 61 },
        { title: 'Ring, ring, ring', duration: 301 },
        { title: 'Fits in your pocket', duration: 301 },
        { title: 'Can you hear me now?', duration: 194 },
        { title: 'Wrong phone number', duration: 135 },
        { title: 'Bonus Track (Live Jam)', duration: 942}
      ]
    };

    var albumPinback = {
      albumNumber: 0,
      title: 'This is a Pinback CD',
      artist: 'Pinback',
      label: 'Ace Fu Records',
      year: '1999',
      albumArtUrl: '/assets/images/album_covers/pinbackcover.jpg',
      songs: [
        { title: 'Tripoli', duration: 270.92, audioUrl: 'https://s3.amazonaws.com/aws-website-portfolio-gvhf1/Pinback/01+-+Tripoli' },
        { title: 'Hurley', duration: 235.81, audioUrl: 'https://s3.amazonaws.com/aws-website-portfolio-gvhf1/Pinback/02+-+Hurley' },
        { title: 'Charborg', duration: 208.46, audioUrl: 'https://s3.amazonaws.com/aws-website-portfolio-gvhf1/Pinback/03+-+Charborg' },
        { title: 'Chaos Engine', duration: 218.51, audioUrl: 'https://s3.amazonaws.com/aws-website-portfolio-gvhf1/Pinback/04+-+Chaos+Engine' },
        { title: 'Shag', duration: 185.89, audioUrl: 'https://s3.amazonaws.com/aws-website-portfolio-gvhf1/Pinback/05+-+Shag'},
        { title: 'Loro', duration: 213.76, audioUrl: 'https://s3.amazonaws.com/aws-website-portfolio-gvhf1/Pinback/06+-+Loro' },
        { title: 'Crutch', duration: 271.07, audioUrl: 'https://s3.amazonaws.com/aws-website-portfolio-gvhf1/Pinback/07+-+Crutch' },
        { title: 'Rousseau', duration: 308.69, audioUrl: 'https://s3.amazonaws.com/aws-website-portfolio-gvhf1/Pinback/08+-+Rousseau' },
        { title: 'Lyon', duration: 318.54, audioUrl: 'https://s3.amazonaws.com/aws-website-portfolio-gvhf1/Pinback/09+-+Lyon' },
        { title: 'Montaigne', duration: 337.97, audioUrl: 'https://s3.amazonaws.com/aws-website-portfolio-gvhf1/Pinback/10+-+Montaigne' }
      ]
    };

    Fixtures.getAlbum = function(album) {
      return album;
    };

    Fixtures.getCollection = function() {
      var albumList = [albumPinback, albumMarconi, albumPicasso];
      var albumCollection = [];
        for (var i = 0; i < albumList.length; i++) {
          albumCollection.push(albumList[i]);
        };
        return albumCollection;
    };

    return Fixtures;
  }

  angular
    .module('blocJams')
    .factory('Fixtures', Fixtures)
})();
