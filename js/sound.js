


const playBtn = document.querySelectorAll('.discovery__play-btn')
const discoverySound = document.querySelectorAll('.discovery__sound')

const soundsArray = ['Jazz.mp3', 'hiphop.mp3', 'indie.mp3', 'poprock.mp3','electro.mp3'];

discoverySound.forEach(function(sound,index){
    playBtn[index].addEventListener('click', function(e){
        
        var songName = `./assets/sounds/${soundsArray[index]}`;
        var audioPlayer = document.querySelector('#player');

        if (audioPlayer) {
            playBtn[index].setAttribute('src', './assets/icons/detail_video_break.svg');


            if (songName === audioPlayer.getAttribute('src')){

                playBtn[index].setAttribute('src', './assets/icons/detail_video_break.svg');
                
                if (audioPlayer.paused) {
                    playBtn[index].setAttribute('src', './assets/icons/detail_video_break.svg');
                    audioPlayer.play();
                    e.target.id = 'playing';
                } else {
    
                    audioPlayer.pause();
                    playBtn[index].setAttribute('src', './assets/icons/detail_video_play.svg');
                    e.target.id = 'paused';
                    
    
                }

            } else {

                audioPlayer.src = songName;
                audioPlayer.play();

                if (document.querySelector('#playing')){
                

                    document.querySelector('#playing').id = '';
                    e.target.id = 'playing';
                } else {
                    document.querySelector('#paused').id = '';
                    e.target.id = 'playing';
                    playBtn[index].setAttribute('src', './assets/icons/detail_video_break.svg');

                }

            }
            
           

        } else {
            var audioPlayer = document.createElement('audio');
            audioPlayer.id = 'player';
            e.target.id = 'playing';
            audioPlayer.src = songName;
            sound.appendChild(audioPlayer);
            // Sound Starting
            audioPlayer.play();
            playBtn[index].setAttribute('src', './assets/icons/detail_video_break.svg');
    
            audioPlayer.addEventListener('ended', function() {
                audioPlayer.parentNode.removeChild(audioPlayer);
            },false)
        }
        
        
    }, false);
});




