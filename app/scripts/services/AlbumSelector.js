(function() {
  function AlbumSelector(Fixtures) {
    var AlbumSelector = {};

    AlbumSelector.currentAlbum = null;

    AlbumSelector.setAlbum = function(album) {
      AlbumSelector.currentAlbum = album;
      return AlbumSelector.currentAlbum;
    }

    return AlbumSelector;
  }

  angular
    .module('blocJams')
    .factory('AlbumSelector', ['Fixtures',AlbumSelector]);
})();
