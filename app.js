


function ItunesController() {

  var itunesService = new ItunesService()

  //Do Not Modify the getMusic function
  this.getMusic = function getMusic(e) {
    e.preventDefault();
    var artist = e.target.artist.value;
    itunesService.getMusicByArtist(artist).then(drawSongs);
  }


  function drawSongs(songList) {
    var id = 0;
    var template = '';

    for (var song of songList) {
      template += `
      <div class="info">
          <h3>${song.artist}</h3>
          <p class="info1">${song.collection}</p><br>
          <p><img class="info1" src="${song.albumArt}"</p><br>
          <p class="info1" onclick="itunesCtrl.playIt(${id})">${song.title}</p><br>
          <p><audio controls id="${id}" class="info1" src="${song.preview}"><audio></p><br>
          <p class="info1">$${song.price}</p><br>
      </div>
      `
      id++;
    }
    document.getElementById('songs').innerHTML = template;
  }


   this.playIt = function (id) {

    var off = document.querySelectorAll("audio");

    for (var i = 0; i < off.length; i++) {
      off[i].pause();
    }

    var turnOn = document.getElementById(id);
    turnOn.play();

  }

   document.addEventListener('play', function (e) {
    var audios = document.getElementsByTagName('audio');
    for (var i = 0, len = audios.length; i < len; i++) {
      if (audios[i] != e.target) {
        audios[i].pause();
      }
    }
  }, true);
  









}



var itunesCtrl = new ItunesController()




