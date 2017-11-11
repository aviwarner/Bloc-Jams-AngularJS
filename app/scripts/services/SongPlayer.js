(function() {
  function SongPlayer($rootScope, Fixtures) {
    var SongPlayer = {};

    /**
    * @desc Current album data
    * @type {Object}
    */
    var currentAlbum = Fixtures.getAlbum();

    /**
    * @desc Stored volume number, keeps track of previous volume when muted
    * @type {Number}
    */
    var storedVolume = null;

    /**
    * @desc Buzz object audio file
    * @type {Object}
    */
    var currentBuzzObject = null;

    /**
    * @function setSong
    * @desc Stops currently playing song and loads new audio file as currentBuzzObject
    * @param {Object} song
    */
    var setSong = function(song) {
      if (currentBuzzObject) {
        stopSong(song);
      }

      currentBuzzObject = new buzz.sound(song.audioUrl,{
        formats: ['mp3'],
        preload: true
      });

      SongPlayer.setVolume(SongPlayer.volume);

      currentBuzzObject.bind('timeupdate', function() {
        $rootScope.$apply(function() {
          SongPlayer.currentTime = currentBuzzObject.getTime();
        });
      });

      SongPlayer.currentSong = song;
    }

    /**
    * @function playSong
    * @desc Plays current song (.playing = true)
    * @param {Object} song
    */
    var playSong = function(song) {
      currentBuzzObject.play();
      song.playing = true;
    }

    /**
    * @function stopSong
    * @desc Stops current song (.playing = null)
    * @param {Object} song
    */
    var stopSong = function(song) {
      currentBuzzObject.stop();
      SongPlayer.currentSong.playing = null;
    }

    /**
    * @function getSongIndex
    * @desc returns the index of the currently playing song
    * @param {Object} song
    */
    var getSongIndex = function(song) {
      return currentAlbum.songs.indexOf(song);
    }

    /**
    * @desc Currently playing song
    * @type {Object}
    */
    SongPlayer.currentSong = null;

    /**
    * @desc Current playback time (in seconds) of currently playing song
    * @type {Number}
    */
    SongPlayer.currentTime = null;

    /**
    * @desc Current volume (0-100) of currently playing song
    * @type {Number}
    */
    SongPlayer.volume = 80;

    /**
    * @method .play
    * @desc Plays currently playing song and clears previously playing song. Play next song when current song ends.
    * @param {Object} song
    */
    SongPlayer.play = function(song) {
      song = song || SongPlayer.currentSong;
      if (SongPlayer.currentSong !== song) {
        setSong(song);
        playSong(song);
      } else if (SongPlayer.currentSong === song) {
        if (currentBuzzObject.isPaused()) {
          playSong(song);
        }
      }

      currentBuzzObject.bind("ended", function() {
        SongPlayer.next();
      });
    };

    /**
    * @method .pause
    * @desc Pauses currently playing song (.playing = false)
    * @param {Object} song
    */
    SongPlayer.pause = function(song) {
      song = song || SongPlayer.currentSong;
      currentBuzzObject.pause();
      song.playing = false;
    }

    /**
    * @method .previous
    * @desc Go to the previous song
    * @param
    */
    SongPlayer.previous = function() {
      var currentSongIndex = getSongIndex(SongPlayer.currentSong);
      currentSongIndex--;

      if (currentSongIndex < 0) {
        stopSong(song);
      } else {
        var song = currentAlbum.songs[currentSongIndex];
        setSong(song);
        playSong(song);
      }
    };

    /**
    * @method .next
    * @desc Go to the next song, loop at end
    * @param
    */
    SongPlayer.next = function() {
      var currentSongIndex = getSongIndex(SongPlayer.currentSong);
      currentSongIndex++;

      if (currentSongIndex === currentAlbum.songs.length) {
        var song = currentAlbum.songs[0];
        setSong(song);
        playSong(song);
      } else {
        var song = currentAlbum.songs[currentSongIndex];
        setSong(song);
        playSong(song);
      }
    };

    /**
    * @function
    * @desc sets the current time in seconds of currently playing song
    * @param {Number} time
    */
    SongPlayer.setCurrentTime = function(time) {
      if (currentBuzzObject) {
        currentBuzzObject.setTime(time);
      }
    }

    /**
    * @function setVolume
    * @desc sets the current volume
    * @param {Number} volume
    */
    SongPlayer.setVolume = function(volume) {
      if (currentBuzzObject) {
        currentBuzzObject.setVolume(volume);
        SongPlayer.volume = volume;
      }
    }

    /**
    * @function muteVolume
    * @desc mutes volume, or if volume is muted, returns volume to previous level
    * @param {Number} volume
    */
    SongPlayer.muteVolume = function(volume) {
      if (!currentBuzzObject.isMuted()) {
        SongPlayer.muted = true;
        currentBuzzObject.mute();
      } else {
        SongPlayer.muted = false;
        currentBuzzObject.unmute();
      }
    }

    return SongPlayer;
  }

  angular
    .module('blocJams')
    .factory('SongPlayer', ['$rootScope','Fixtures',SongPlayer]);
})();
