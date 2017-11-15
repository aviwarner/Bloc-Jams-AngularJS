(function() {
  function CollectionCtrl(Fixtures, AlbumSelector) {
    this.albums = Fixtures.getCollection();
    this.albumSelector = AlbumSelector;
  }

  angular
    .module('blocJams')
    .controller('CollectionCtrl', ['Fixtures','AlbumSelector',CollectionCtrl]);
})();
