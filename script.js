
var app = new Vue({
  el: "#app",
  data: {
    audio: "url:",
    imgLoaded: false,
    currentlyPlaying: false,
    currentlyStopped: false,
    currentTime: 0,
    checkingCurrentPositionInTrack: "",
    trackDuration: 0,
    currentProgressBar: 0,
    isPlaylistActive: false,
    currentSong: 0,
    debug: false,
    musicPlaylist: [
    {
      title: "Comfort Crowd",
      artist: "Conan Grey",
      url: "./Audio/Comfort Crowd.mp3",
      image: "Images/Album Covers/Kid Crow ( Conan Grey ).jpg" },

      {
        title: "The Story",
        artist: "Conan Grey",
        url: "./Audio/The Story.mp3",
        image: "Images/Album Covers/Kid Crow ( Conan Grey ).jpg" },

        {
          title: "Are You Bored Yet?",
          artist: "Wallows Feat. Clairo",
          url: "./Audio/Are You Bored Yet.mp3",
          image: "Images/Album Covers/Nothing Happens ( Wallows ).jpg" },

          {
            title: "Don't I Make It Look Easy",
            artist: "Meghan Trainor",
            url: "./Audio/Don't I Make It Look Easy.mp3",
            image: "./Images/Album Covers/Takin It Back (Megan Trainor).jpg" },

            {
              title: "Close To You",
              artist: "Dayglow",
              url: "./Audio/Close To You.mp3",
              image: "./Images/Album Covers/Harmony House.jpg" },

              {
                title: "The Less I Know The Better",
                artist: "Tame Impala",
                url: "./Audio/The Less I Know The Better.mp3",
                image: "./Images/Album Covers/Currents.gif" },
  
                {
                  title: "Low Tide Love",
                  artist: "Tipling Rock",
                  url: "./Audio/Low Tide Love.mp3",
                  image: "./Images/Album Covers/Low Tide Love.jpg" },

                  {
                    title: "Every Time Around",
                    artist: "Vansire",
                    url: "./Audio/Every Time Around.mp3",
                    image: "./Images/Album Covers/After Fillmore County.jpg" },

                  {
                    title: "talk is overrated.",
                    artist: "Jeremy Zucker Feat. Blackbear",
                    url: "./Audio/talk is overrated..mp3",
                    image: "./Images/Album Covers/Idle.jpg" },

                    {
                      title: "The Adults Are Talking",
                      artist: "The Strokes",
                      url: "./Audio/The Adults Are Talking.mp3",
                      image: "./Images/Album Covers/The New Abnormal.jpg" },

                      {
                        title: "Teenage Mind",
                        artist: "Tate McRae",
                        url: "./Audio/Teenage Mind.mp3",
                        image: "./Images/Album Covers/Teenage Mind.jpg" },

                      {
                        title: "Chinese New Year",
                        artist: "SALES",
                        url: "./Audio/Chinese New Year.mp3",
                        image: "./Images/Album Covers/SALES.jpg" },

                        {
                          title: "Electric Love",
                          artist: "Børns",
                          url: "./Audio/Electric Love.mp3",
                          image: "./Images/Album Covers/Dopamine.jpg" },
  
                          {
                            title: "Notion",
                            artist: "The Rare Occasions",
                            url: "./Audio/Notion.mp3",
                            image: "./Images/Album Covers/Notion.jpg" },

                            {
                              title: "Can I Call You Tonight?",
                              artist: "Dayglow",
                              url: "./Audio/Can I Call You Tonight.mp3",
                              image: "./Images/Album Covers/Fuzzybrain.jpg" },

                              {
                                title: "Cure For Me",
                                artist: "AURORA",
                                url: "./Audio/Cure For Me.mp3",
                                image: "./Images/Album Covers/Cure for me.jpg" },

                                {
                                  title: "Blu",
                                  artist: "Elujay",
                                  url: "./Audio/Blu.mp3",
                                  image: "./Images/Album Covers/Adojo.jpg" },

                                  {
                                    title: "SUGAR",
                                    artist: "BROKHAMPTON",
                                    url: "./Audio/SUGAR.mp3",
                                    image: "./Images/Album Covers/GINGER.jpg" },

                                    {
                                      title: "Yellow Hearts",
                                      artist: "Ant Saunders",
                                      url: "./Audio/Yellow Hearts.mp3",
                                      image: "./Images/Album Covers/Yellow Hearts.jpg" },

                                      {
                                        title: "So Beautiful",
                                        artist: "DPR IAN",
                                        url: "./Audio/So Beautiful.mp3",
                                        image: "./Images/Album Covers/So Beautiful.jpg" },

                                        {
                                          title: "Ophelia",
                                          artist: "The Lumineers",
                                          url: "./Audio/Ophelia.mp3",
                                          image: "./Images/Album Covers/Cleopatra.jpg" },

                                          {
                                            title: "bad idea!",
                                            artist: "girl in bed",
                                            url: "./Audio/bad idea!.mp3",
                                            image: "./Images/Album Covers/bad idea!.jpg" },
                                            
                                            {
                                              title: "Paper Rings",
                                              artist: "Taylor Swift",
                                              url: "./Audio/Paper Rings.mp3",
                                              image: "./Images/Album Covers/Lover.gif" },
                                            
                                              {
                                                title: "Anti-Hero",
                                                artist: "Taylor Swift",
                                                url: "./Audio/Anti Hero.mp3",
                                                image: "./Images/Album Covers/Midnights.gif" },

                                                {
                                                  title: "Memories",
                                                  artist: "Conan Grey",
                                                  url: "./Audio/Memories.mp3",
                                                  image: "./Images/Album Covers/Superache.gif" },
    
                                                  {
                                                    title: "Generation Why",
                                                    artist: "Conan Grey",
                                                    url: "./Audio/Generation Why.mp3",
                                                    image: "./Images/Album Covers/Sunset Season.jpg" },

                                                    {
                                                      title: "Crush Culture",
                                                      artist: "Conan Grey",
                                                      url: "./Audio/Crush Culture.mp3",
                                                      image: "./Images/Album Covers/Sunset Season.jpg" },   

                                                      {
                                                        title: "Painkiller",
                                                        artist: "Ruel",
                                                        url: "./Audio/Painkiller.mp3",
                                                        image: "./Images/Album Covers/Free Time.jpg" }, 

                                                        {
                                                          title: "Pinch Me",
                                                          artist: "young friend",
                                                          url: "./Audio/Pinch Me.mp3",
                                                          image: "./Images/Album Covers/Pinch Me.jpg" },
                                                          
                                                          {
                                                            title: "Made You Look",
                                                            artist: "Meghan Trainor",
                                                            url: "./Audio/Made You Look.mp3",
                                                            image: "./Images/Album Covers/Takin It Back (Megan Trainor).jpg" },
                                                           
                                                            {
                                                              title: "Malboro Nights",
                                                              artist: "Lonely God",
                                                              url: "./Audio/Marlboro Nights.mp3",
                                                              image: "./Images/Album Covers/MALBORO NIGHTS.jpg" },

                                                              {
                                                                title: "Hello!",
                                                                artist: "Role Model",
                                                                url: "./Audio/Hello.mp3",
                                                                image: "./Images/Album Covers/Oh, how perfect.jpg" },
   
                                                                {
                                                                  title: "Sunkissed",
                                                                  artist: "khai dreams",
                                                                  url: "./Audio/Sunkissed.mp3",
                                                                  image: "./Images/Album Covers/Now And Then.jpg" },

                                                                  {
                                                                    title: "Don't miss me",
                                                                    artist: "Claire Rosinkranz",
                                                                    url: "./Audio/don't miss me.mp3",
                                                                    image: "./Images/Album Covers/don't miss me.jpg" },

                                                                    {
                                                                      title: "",
                                                                      artist: "",
                                                                      url: "./Audio/.mp3",
                                                                      image: "./Images/Album Covers/.jpg" },

                                                                      {
                                                                        title: "",
                                                                        artist: "",
                                                                        url: "./Audio/.mp3",
                                                                        image: "./Images/Album Covers/.jpg" },

                                                                        {
                                                                          title: "",
                                                                          artist: "",
                                                                          url: "./Audio/.mp3",
                                                                          image: "./Images/Album Covers/.jpg" },

                                                                          {
                                                                            title: "",
                                                                            artist: "",
                                                                            url: "./Audio/.mp3",
                                                                            image: "./Images/Album Covers/.jpg" },

                                                                            {
                                                                              title: "",
                                                                              artist: "",
                                                                              url: "./Audio/.mp3",
                                                                              image: "./Images/Album Covers/.jpg" },

                                                                              {
                                                                                title: "",
                                                                                artist: "",
                                                                                url: "./Audio/.mp3",
                                                                                image: "./Images/Album Covers/.jpg" },
          
                                                                                {
                                                                                  title: "",
                                                                                  artist: "",
                                                                                  url: "./Audio/.mp3",
                                                                                  image: "./Images/Album Covers/.jpg" },
          
                                                                                  {
                                                                                    title: "",
                                                                                    artist: "",
                                                                                    url: "./Audio/.mp3",
                                                                                    image: "./Images/Album Covers/.jpg" },
          
                                                                                    {
                                                                                      title: "",
                                                                                      artist: "",
                                                                                      url: "./Audio/.mp3",
                                                                                      image: "./Images/Album Covers/.jpg" },
          
                                                                                      {
                                                                                        title: "",
                                                                                        artist: "",
                                                                                        url: "./Audio/.mp3",
                                                                                        image: "./Images/Album Covers/.jpg" },

                                                                                        {
                                                                                          title: "",
                                                                                          artist: "",
                                                                                          url: "./Audio/.mp3",
                                                                                          image: "./Images/Album Covers/.jpg" },
                    
                                                                                          {
                                                                                            title: "",
                                                                                            artist: "",
                                                                                            url: "./Audio/.mp3",
                                                                                            image: "./Images/Album Covers/.jpg" },
                    
                                                                                            {
                                                                                              title: "",
                                                                                              artist: "",
                                                                                              url: "./Audio/.mp3",
                                                                                              image: "./Images/Album Covers/.jpg" },
                    
                                                                                              {
                                                                                                title: "",
                                                                                                artist: "",
                                                                                                url: "./Audio/.mp3",
                                                                                                image: "./Images/Album Covers/.jpg" },
                    
                                                                                                {
                                                                                                  title: "",
                                                                                                  artist: "",
                                                                                                  url: "./Audio/.mp3",
                                                                                                  image: "./Images/Album Covers/.jpg" },

                                                                                                  {
                                                                                                    title: "",
                                                                                                    artist: "",
                                                                                                    url: "./Audio/.mp3",
                                                                                                    image: "./Images/Album Covers/.jpg" },
                              
                                                                                                    {
                                                                                                      title: "",
                                                                                                      artist: "",
                                                                                                      url: "./Audio/.mp3",
                                                                                                      image: "./Images/Album Covers/.jpg" },
                              
                                                                                                      {
                                                                                                        title: "",
                                                                                                        artist: "",
                                                                                                        url: "./Audio/.mp3",
                                                                                                        image: "./Images/Album Covers/.jpg" },
                              
                                                                                                        {
                                                                                                          title: "",
                                                                                                          artist: "",
                                                                                                          url: "./Audio/.mp3",
                                                                                                          image: "./Images/Album Covers/.jpg" },
                              
                                                                                                          {
                                                                                                            title: "",
                                                                                                            artist: "",
                                                                                                            url: "./Audio/.mp3",
                                                                                                            image: "./Images/Album Covers/.jpg" },

                                                                                                            {
                                                                                                              title: "",
                                                                                                              artist: "",
                                                                                                              url: "./Audio/.mp3",
                                                                                                              image: "./Images/Album Covers/.jpg" },
                                        
                                                                                                              {
                                                                                                                title: "",
                                                                                                                artist: "",
                                                                                                                url: "./Audio/.mp3",
                                                                                                                image: "./Images/Album Covers/.jpg" },
                                        
                                                                                                                {
                                                                                                                  title: "",
                                                                                                                  artist: "",
                                                                                                                  url: "./Audio/.mp3",
                                                                                                                  image: "./Images/Album Covers/.jpg" },
                                        
                                                                                                                  {
                                                                                                                    title: "",
                                                                                                                    artist: "",
                                                                                                                    url: "./Audio/.mp3",
                                                                                                                    image: "./Images/Album Covers/.jpg" },
                                        
                                                                                                                    {
                                                                                                                      title: "",
                                                                                                                      artist: "",
                                                                                                                      url: "./Audio/.mp3",
                                                                                                                      image: "./Images/Album Covers/.jpg" },


                                                                                                                      {
                                                                                                                        title: "",
                                                                                                                        artist: "",
                                                                                                                        url: "./Audio/.mp3",
                                                                                                                        image: "./Images/Album Covers/.jpg" },
                                                  
                                                                                                                        {
                                                                                                                          title: "",
                                                                                                                          artist: "",
                                                                                                                          url: "./Audio/.mp3",
                                                                                                                          image: "./Images/Album Covers/.jpg" },
                                                  
                                                                                                                          {
                                                                                                                            title: "",
                                                                                                                            artist: "",
                                                                                                                            url: "./Audio/.mp3",
                                                                                                                            image: "./Images/Album Covers/.jpg" },
                                                  
                                                                                                                            {
                                                                                                                              title: "",
                                                                                                                              artist: "",
                                                                                                                              url: "./Audio/.mp3",
                                                                                                                              image: "./Images/Album Covers/.jpg" },
                                                  
                                                                                                                              {
                                                                                                                                title: "",
                                                                                                                                artist: "",
                                                                                                                                url: "./Audio/.mp3",
                                                                                                                                image: "./Images/Album Covers/.jpg" },


                                                                                                                                {
                                                                                                                                  title: "",
                                                                                                                                  artist: "",
                                                                                                                                  url: "./Audio/.mp3",
                                                                                                                                  image: "./Images/Album Covers/.jpg" },
                                                            
                                                                                                                                  {
                                                                                                                                    title: "",
                                                                                                                                    artist: "",
                                                                                                                                    url: "./Audio/.mp3",
                                                                                                                                    image: "./Images/Album Covers/.jpg" },
                                                            
                                                                                                                                    {
                                                                                                                                      title: "",
                                                                                                                                      artist: "",
                                                                                                                                      url: "./Audio/.mp3",
                                                                                                                                      image: "./Images/Album Covers/.jpg" },
                                                            
                                                                                                                                      {
                                                                                                                                        title: "",
                                                                                                                                        artist: "",
                                                                                                                                        url: "./Audio/.mp3",
                                                                                                                                        image: "./Images/Album Covers/.jpg" },
                                                            
                                                                                                                                        {
                                                                                                                                          title: "",
                                                                                                                                          artist: "",
                                                                                                                                          url: "./Audio/.mp3",
                                                                                                                                          image: "./Images/Album Covers/.jpg" },


                                                                                                                                          {
                                                                                                                                            title: "",
                                                                                                                                            artist: "",
                                                                                                                                            url: "./Audio/.mp3",
                                                                                                                                            image: "./Images/Album Covers/.jpg" },
                                                                      
                                                                                                                                            {
                                                                                                                                              title: "",
                                                                                                                                              artist: "",
                                                                                                                                              url: "./Audio/.mp3",
                                                                                                                                              image: "./Images/Album Covers/.jpg" },
                                                                      
                                                                                                                                              {
                                                                                                                                                title: "",
                                                                                                                                                artist: "",
                                                                                                                                                url: "./Audio/.mp3",
                                                                                                                                                image: "./Images/Album Covers/.jpg" },
                                                                      
                                                                                                                                                {
                                                                                                                                                  title: "",
                                                                                                                                                  artist: "",
                                                                                                                                                  url: "./Audio/.mp3",
                                                                                                                                                  image: "./Images/Album Covers/.jpg" },
                                                                      
                                                                                                                                                  {
                                                                                                                                                    title: "",
                                                                                                                                                    artist: "",
                                                                                                                                                    url: "./Audio/.mp3",
                                                                                                                                                    image: "./Images/Album Covers/.jpg" },
],                                                          
    
    audioFile: "" },

  mounted: function () {
    this.changeSong();
    this.audio.loop = false;
  },
  filters: {
    fancyTimeFormat: function (s) {
      return (s - (s %= 60)) / 60 + (9 < s ? ":" : ":0") + s;
    } },

  methods: {
    togglePlaylist: function () {
      this.isPlaylistActive = !this.isPlaylistActive;
    },
    nextSong: function () {
      if (this.currentSong < this.musicPlaylist.length - 1)
      this.changeSong(this.currentSong + 1);
    },
    prevSong: function () {
      if (this.currentSong > 0) this.changeSong(this.currentSong - 1);
    },
    changeSong: function (index) {
      var wasPlaying = this.currentlyPlaying;
      this.imageLoaded = false;
      if (index !== undefined) {
        this.stopAudio();
        this.currentSong = index;
      }
      this.audioFile = this.musicPlaylist[this.currentSong].url;
      this.audio = new Audio(this.audioFile);
      var localThis = this;
      this.audio.addEventListener("loadedmetadata", function () {
        localThis.trackDuration = Math.round(this.duration);
      });
      this.audio.addEventListener("ended", this.handleEnded);
      if (wasPlaying) {
        this.playAudio();
      }
    },
    isCurrentSong: function (index) {
      if (this.currentSong == index) {
        return true;
      }
      return false;
    },
    getCurrentSong: function (currentSong) {
      return this.musicPlaylist[currentSong].url;
    },
    playAudio: function () {
      if (
      this.currentlyStopped == true &&
      this.currentSong + 1 == this.musicPlaylist.length)
      {
        this.currentSong = 0;
        this.changeSong();
      }
      if (!this.currentlyPlaying) {
        this.getCurrentTimeEverySecond(true);
        this.currentlyPlaying = true;
        this.audio.play();
      } else {
        this.stopAudio();
      }
      this.currentlyStopped = false;
    },
    stopAudio: function () {
      this.audio.pause();
      this.currentlyPlaying = false;
      this.pausedMusic();
    },
    handleEnded: function () {
      if (this.currentSong + 1 == this.musicPlaylist.length) {
        this.stopAudio();
        this.currentlyPlaying = false;
        this.currentlyStopped = true;
      } else {
        this.currentlyPlaying = false;
        this.currentSong++;
        this.changeSong();
        this.playAudio();
      }
    },
    onImageLoaded: function () {
      this.imgLoaded = true;
    },
    getCurrentTimeEverySecond: function (startStop) {
      var localThis = this;
      this.checkingCurrentPositionInTrack = setTimeout(
      function () {
        localThis.currentTime = localThis.audio.currentTime;
        localThis.currentProgressBar =
        localThis.audio.currentTime / localThis.trackDuration * 100;
        localThis.getCurrentTimeEverySecond(true);
      }.bind(this),
      1000);

    },
    pausedMusic: function () {
      clearTimeout(this.checkingCurrentPositionInTrack);
    },
    toggleDebug: function () {
      this.debug = !this.debug;
      document.body.classList.toggle('debug');
    } },

  watch: {
    currentTime: function () {
      this.currentTime = Math.round(this.currentTime);
    } },

  beforeDestroy: function () {
    this.audio.removeEventListener("ended", this.handleEnded);
    this.audio.removeEventListener("loadedmetadata", this.handleEnded);

    clearTimeout(this.checkingCurrentPositionInTrack);
  } });
  const randomColor = "#"+((1<<24)*Math.random()|0).toString(16); 

  document.documentElement.style.setProperty('--main-bg-color', randomColor);
  document.body.style.zoom="150%";

  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-50px";
    }
  }
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("audioPlayerList isActive").style.top = "0";
    } else {
      document.getElementById("audioPlayerList isActive").style.top = "-50px";
    }
  }

// volume
var volIcon = document.querySelector('.volume')
var volBox = document.querySelector('.volume-box')
var volumeRange = document.querySelector('.volume-range')
var volumeDown = document.querySelector('.volume-down')
var volumeUp = document.querySelector('.volume-up')

function handleVolume() {
    volIcon.classList.toggle('active')
    volBox.classList.toggle('active')
}

volumeDown.addEventListener('click', handleVolumeDown);
volumeUp.addEventListener('click', handleVolumeUp);

function handleVolumeDown() {
    volumeRange.value = Number(volumeRange.value) - 20
    audio.volume = volumeRange.value / 100
}
function handleVolumeUp() {
    volumeRange.value = Number(volumeRange.value) + 20
    audio.volume = volumeRange.value / 100
}
