(function() {
  function PlayerBarCtrl(AlbumSelector,SongPlayer) {
    this.albumData = AlbumSelector.currentAlbum;
    this.songPlayer = SongPlayer;
  }

  angular
    .module('blocJams')
    .controller('PlayerBarCtrl',['AlbumSelector','SongPlayer',PlayerBarCtrl]);
})();
