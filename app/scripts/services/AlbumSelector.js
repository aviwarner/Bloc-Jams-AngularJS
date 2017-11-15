(function() {
  function AlbumSelector(Fixtures) {

    var albumCollection = Fixtures.getCollection();

    AlbumSelector.setAlbum = function(album) {
      // AlbumSelector.currentAlbum = album;
      // console.log(AlbumSelector.currentAlbum);
      // return AlbumSelector.currentAlbum;
      return Fixtures.getAlbum(album);
    };


    return AlbumSelector;
  }

  angular
    .module('blocJams')
    .factory('AlbumSelector', ['Fixtures', AlbumSelector]);
})();
