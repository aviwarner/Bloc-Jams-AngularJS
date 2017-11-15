(function() {
  function AlbumCtrl(Fixtures, SongPlayer, AlbumSelector) {
    this.albumData = Fixtures.getAlbum(albumMarconi);
    // this.albumData = AlbumSelector.setAlbum(albumMarconi);
    this.songPlayer = SongPlayer;
  };

  angular
    .module('blocJams')
    .controller('AlbumCtrl',['Fixtures','SongPlayer','AlbumSelector',AlbumCtrl]);
})();
