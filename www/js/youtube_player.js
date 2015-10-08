      // 2. This code loads the IFrame Player API code asynchronously.
      var tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      var firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      // 3. This function creates an <iframe> (and YouTube player)
      //    after the API code downloads.
      var youtube_player;
       function onYouTubeIframeAPIReady() {
           console.log("yts");
	   console.log(document.getElementById("youtube_player"));
	   
        youtube_player = new YT.Player('youtube_player', {
          height: '390',
          width: '640',
          videoId: 'M7lc1UVf-VE',
          events: {
            'onReady': onPlayerReady,
              'onStateChange': onPlayerStateChange,
	      'onError': onError
          }
        });
	   document.getElementById("youtube_player").thing=youtube_player;
	   function render() {
	       if (youtube_player.render){
		   youtube_player.render();
	       }
	   }
	   function animate() {
	       top.window.requestAnimationFrame(animate);
	       if(youtube_player.getPlayerState()==1){
		   render();
	       }
	   }
	   
	   
	   render();
	   animate();
	   
       }
      function onError(event){
          console.log("yte:",event); 
      }

      // 4. The API will call this function when the video player is ready.
      function onPlayerReady(event) {
        event.target.playVideo();
      }

      // 5. The API calls this function when the player's state changes.
      //    The function indicates that when playing a video (state=1),
      //    the player should play for six seconds and then stop.
      var done = false;
      function onPlayerStateChange(event) {
        if (event.data == YT.PlayerState.PLAYING && !done) {
          setTimeout(stopVideo, 6000);
          done = true;
        }
      }
      function stopVideo() {
        youtube_player.stopVideo();
      }
