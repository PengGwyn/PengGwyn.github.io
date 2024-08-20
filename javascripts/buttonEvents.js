window.addEventListener('load', LoadPage)

let showMagicBtn
let startingSlide
let songContainer

let catGif
let startButton;
let audio;
let currentIndex = 0
let subtitleTxt
let image

function LoadPage() {
    showMagicBtn = document.getElementById('magicBtn')
    startingSlide = document.getElementById('startContainer')
    songContainer = document.getElementById('songContainer')

    catGif = document.getElementById('catGIF')
    startButton = document.getElementById('clickBtn')
    audio = document.getElementById('aud')
    subtitleTxt = document.getElementById('subtitle')
    image = document.getElementById('imgImg')
}

function ShowMagic() {
    startingSlide.classList.add('animateWelcomeMessage_OnClick')

    setTimeout(() => {    
        songContainer.classList.add('animateSongContainer')
        songContainer.style.display = 'flex'
    }, 1000);
}

function Click () {
    startButton.classList.add('animateWelcomeMessage_OnClick')
    // catGif.classList.add('animateGIF')
    audio.play()

    audio.addEventListener('timeupdate', ShowTime)
    audio.addEventListener('ended', EndAudio)
}

function ShowTime() {
    let currentTime = audio.currentTime
    console.log(Math.abs(audio.currentTime))
    let targetTimesA = [
        0.88, // Kumusta ang biyahe?
        3.10, // Napagal ka daw?
        6.08, // Mari na
        7.13, // Pinagluto ta ka na
        9.77, // Bicol express
        12.15, // Pancit bato
        14.28, // Igwang laing 
        17.18, // Na may
        18.81, // Siling labyu
        22.78, // Ay
        23.20, // Labuyo
        24.59, // No subtitle

        26.88, // BG music change image

        28.90, // Kumusta
        29.95, // Ang aldaw mo?
        31.47, // Ibahan mo ako
        33.91, // Lilibuton 
        35.40, // Niyatong duwa an 
        38.00, // Ka Bikolan
        42.83, // Garo ka si Mayon
        45.45, // Na magayon

        49.27, // Dgdi ka lang
        54.18, // No sbtitle

        54.15, // Padaba ta ka
        58.17, // Daing ibang mumuyahon
        61.40, // Kundi ika

        // 64.16, // No subtitle

        64.25, // Papadabaon ta ka
        68.30, // Sagkod pa man
        70.87, // Kita maggurang
        74.88, // Daing ibang papadabaon pa
        82.18, // Kundi
        84.50, // Ika

        90.05, // Kumusta? 
        91.30, // Pahingalo na, marabason kita
        94.95, // Binakalan ta kang pili nut, asin
        98.20, // Mga pangpasalubong (pasalubong, pasalubong)
        103.89, // Sana napaugma
        106.71, // Ta kang maray
        110.58, // Sako ka lang

        115.99, // no subtitle

        // do some effects here

        117.00, // Padaba ta ka
        120.69, // Daing ibang mumuyahon
        124.02, // Kundi ika
        126.78, // Papadabaon ta ka
        130.93, // Sagkod pa man
        133.97, // Kita maggurang
        137.40, // Daing ibang papadabaon pa
        144.63, // Kundi
        147.27, // Ika

        150.77, // no subtitle

        153.25, // Change background
        158.54, // Change background
        165.92, // Change background
        
        167.90, // Ini pa lan sa ngunyan
        170.78, // An kaya kong gibuhon
        172.98, // Pa'no pa kaya kun sabihon
        177.58, // Ko na?

        184.54, // no subtitle

        185.88, // Padaba ta ka
        189.85, // Daing ibang mumuyahon,
        192.94, // Kundi ika

        198.76, // Mahal kita
        202.58, // Walang ibang gugustuhin,
        205.80, // Kundi ikaw
        208.10, // Mamahalin kita
        212.45, // Hanggang sa ating pagtanda
        219.03, // Walang ibang mamahalin,
        226.55, // Kundi ikaw

        237.45, // no subtitle

        239.24, // Walang ibang mamahalin,
        246.68, // Kundi 
        252.14, // Ikaw

        255.81, // no subtitle

        261.95, // Walang ibang 
        265.44, // Mamahalin,
        269.58, // Kundi 
        274.29, // Ikaw

        278.20 // end of lyrics
    ]

    let lyricsWithFunc = [
        {
            text: "Kumusta ang biyahe?",
            func: () => {}
        },
        {
            text: "Napagal ka daw?",
            func: () => {}
        },
        {
            text: "Mari na",
            func: () => {
                // change background
            }
        },
        {
            text: "Pinagluto ta ka na",
            func: () => {}
        },
        {
            text: "Bicol express",
            func: () => {}
        },
        {
            text: "Pancit bato",
            func: () => {}
        },
        {
            text: "Igwang laing",
            func: () => {}
        },
        {
            text: "Na may",
            func: () => {}
        },
        {
            text: "Siling labyu",
            func: () => {}
        },
        {
            text: "Ay",
            func: () => {}
        },
        {
            text: "Labuyo",
            func: () => {}
        },
        {
            text: "",
            func: () => {}
        },
        {
            text: "",
            func: () => {}
        },
        {
            text: "Kumusta",
            func: () => {
                image.src = 'Img/She/452223377_1223964731932408_6204039410188067282_n.jpg'
                image.classList.remove('animateSubtitleOpacity_show')
                void image.offsetWidth;
                image.classList.add('animateSubtitleOpacity_show')
            }
        },
        {
            text: "Ang aldaw mo?",
            func: () => {}
        },
        {
            text: "Ibahan mo ako",
            func: () => {}
        },
        {
            text: "Lilibuton",
            func: () => {}
        },
        {
            text: "Niyatong duwa an",
            func: () => {}
        },
        {
            text: "Ka Bikolan",
            func: () => {}
        },
        {
            text: "Garo ka si Mayon",
            func: () => {}
        },
        {
            text: "Na magayon",
            func: () => {}
        },
        {
            text: "Dgdi ka lang",
            func: () => {}
        },
        {
            text: "",
            func: () => {}
        },
        {
            text: "Padaba ta ka",
            func: () => {
                // change background
                document.documentElement.style.backgroundColor = 'rgb(247, 114, 147)';

                image.src = 'Img/She/452697591_417819564626099_4624770347111371397_n.jpg'
                image.classList.remove('animateSubtitleOpacity_show')
                void image.offsetWidth;
                image.classList.add('animateSubtitleOpacity_show')
            }
        },
        {
            text: "Daing ibang mumuyahon",
            func: () => {}
        },
        {
            text: "Kundi ika",
            func: () => {}
        },
        {
            text: "Papadabaon ta ka",
            func: () => {}
        },
        {
            text: "Sagkod pa man",
            func: () => {}
        },
        {
            text: "Kita maggurang",
            func: () => {}
        },
        {
            text: "Daing ibang papadabaon pa",
            func: () => {}
        },
        {
            text: "Kundi",
            func: () => {}
        },
        {
            text: "Ika",
            func: () => {}
        },
        {
            text: "Kumusta?",
            func: () => {
                image.src = 'Img/She/451644921_1017085013124527_5612557234051761072_n.jpg'
                image.classList.remove('animateSubtitleOpacity_show')
                void image.offsetWidth;
                image.classList.add('animateSubtitleOpacity_show')
            }
        },
        {
            text: "Pahingalo na, marabason kita",
            func: () => {}
        },
        {
            text: "Binakalan ta kang pili nut, asin",
            func: () => {}
        },
        {
            text: "Mga pangpasalubong (pasalubong, pasalubong)",
            func: () => {}
        },
        {
            text: "Sana napaugma",
            func: () => {}
        },
        {
            text: "Ta kang maray",
            func: () => {}
        },
        {
            text: "Sako ka lang",
            func: () => {
                image.src = 'Img/She/451791698_1017278216730913_8035212714990103363_n.jpg'
                image.classList.remove('animateSubtitleOpacity_show')
                void image.offsetWidth;
                image.classList.add('animateSubtitleOpacity_show')
            }
        },
        {
            text: "",
            func: () => {}
        },
        {
            text: "Padaba ta ka",
            func: () => {
                document.documentElement.style.backgroundColor = 'hotpink';

                image.src = 'Img/She/452178853_469093905830500_3031242891180324512_n.jpg'
                image.classList.remove('animateSubtitleOpacity_show')
                void image.offsetWidth;
                image.classList.add('animateSubtitleOpacity_show')
            }
        },
        {
            text: "Daing ibang mumuyahon",
            func: () => {}
        },
        {
            text: "Kundi ika",
            func: () => {}
        },
        {
            text: "Papadabaon ta ka",
            func: () => {}
        },
        {
            text: "Sagkod pa man",
            func: () => {}
        },
        {
            text: "Kita maggurang",
            func: () => {}
        },
        {
            text: "Daing ibang papadabaon pa",
            func: () => {}
        },
        {
            text: "Kundi",
            func: () => {}
        },
        {
            text: "Ika",
            func: () => {
                image.src = 'Img/She/452680684_8807552635926242_3353128522829172445_n.jpg'
                image.classList.remove('animateSubtitleOpacity_show')
                void image.offsetWidth;
                image.classList.add('animateSubtitleOpacity_show')
            }
        },
        {
            text: "",
            func: () => {}
        },
        {
            text: "",
            func: () => {}
        },
        {
            text: "",
            func: () => {}
        },
        {
            text: "",
            func: () => {}
        },
        {
            text: "Ini pa lan sa ngunyan",
            func: () => {}
        },
        {
            text: "An kaya kong gibuhon",
            func: () => {}
        },
        {
            text: "Pa'no pa kaya kun sabihon",
            func: () => {}
        },
        {
            text: "Ko na?",
            func: () => {}
        },
        {
            text: "",
            func: () => {}
        },
        {
            text: "Padaba ta ka",
            func: () => {
                image.src = 'Img/She/450694079_1517494588851683_3762457623134258241_n.jpg'
                image.classList.remove('animateSubtitleOpacity_show')
                void image.offsetWidth;
                image.classList.add('animateSubtitleOpacity_show')
            }
        },
        {
            text: "Daing ibang mumuyahon,",
            func: () => {}
        },
        {
            text: "Kundi ika",
            func: () => {}
        },
        {
            text: "Mahal kita",
            func: () => {
                image.src = 'Img/She/451644111_1035262084777988_6780722764801242196_n.jpg'
                image.classList.remove('animateSubtitleOpacity_show')
                void image.offsetWidth;
                image.classList.add('animateSubtitleOpacity_show')
            }
        },
        {
            text: "Walang ibang gugustuhin,",
            func: () => {}
        },
        {
            text: "Kundi ikaw",
            func: () => {}
        },
        {
            text: "Mamahalin kita",
            func: () => {}
        },
        {
            text: "Hanggang sa ating pagtanda",
            func: () => {}
        },
        {
            text: "Walang ibang mamahalin,",
            func: () => {}
        },
        {
            text: "Kundi ikaw",
            func: () => {
                image.src = 'Img/She/452761376_1127884538273346_5390759919495448812_n.jpg'
                image.classList.remove('animateSubtitleOpacity_show')
                void image.offsetWidth;
                image.classList.add('animateSubtitleOpacity_show')
            }
        },
        {
            text: "",
            func: () => {}
        },
        {
            text: "Walang ibang mamahalin,",
            func: () => {}
        },
        {
            text: "Kundi",
            func: () => {}
        },
        {
            text: "Ikaw",
            func: () => {}
        },
        {
            text: "",
            func: () => {}
        },
        {
            text: "Walang ibang",
            func: () => {}
        },
        {
            text: "Mamahalin",
            func: () => {}
        },
        {
            text: "Kundi",
            func: () => {}
        },
        {
            text: "Ikaw",
            func: () => {
                image.src = 'Img/She/450694079_1517494588851683_3762457623134258241_n.jpg'
                image.classList.remove('animateSubtitleOpacity_show')
                void image.offsetWidth;
                image.classList.add('animateSubtitleOpacity_show')
            }
        },
        {
            text: "",
            func: () => {}
        }, 
    ]

    if (currentTime >= targetTimesA[currentIndex]) {
        // subtitleTxt.textContent = lyrics[currentIndex]
        subtitleTxt.textContent = lyricsWithFunc[currentIndex].text
        // console.log(lyrics[currentIndex])
        console.log(lyricsWithFunc[currentIndex].text)
        lyricsWithFunc[currentIndex].func()

        subtitleTxt.classList.remove('animateSubtitleOpacity_show')
        void subtitleTxt.offsetWidth;
        subtitleTxt.classList.add('animateSubtitleOpacity_show')

        currentIndex++
    }
}

function EndAudio () {
    console.log('Audio End')
    setTimeout(() => {
        subtitleTxt.textContent = "I love youuuu 😘😘😘😘😘😘😘😘😘😘😘😘😘😘😘"
    }, 1000)
}