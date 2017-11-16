(function() {
  function AlbumCtrl(AlbumSelector, SongPlayer) {
    this.albumData = AlbumSelector.currentAlbum;
    this.songPlayer = SongPlayer;
  };

  angular
    .module('blocJams')
    .controller('AlbumCtrl',['AlbumSelector','SongPlayer',AlbumCtrl]);
})();
