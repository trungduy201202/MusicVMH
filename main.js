const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const accept = $('.accept')
const refuse = $('.refuse')
const background = $('.background')
const player = $('.player')
const heading = $('header h2')
const cdThumb = $('.cd-thumb')
const audio = $('#audio')
const playBtn = $('.btn-toggle-play')
const progress = $('.progress')
const nextBtn = $('.btn-next')
const prevBtn = $('.btn-prev')
const randomBtn = $('.btn-random')
const repeatBtn = $('.btn-repeat')
const playlist = $('.playlist')
const backk = $('.backk')

accept.onclick = function() {
    background.classList.add('hidden')
    player.classList.remove('hidden')
}

refuse.onmouseover = function() {
  let left = Math.round(Math.random()*300)+'px'
  let top = Math.round(Math.random()*300)+'px'
    Object.assign(refuse.style, {
        position: 'absolute',
        left,
        top,
    })
}

backk.onclick = function() {
    player.classList.add('hidden')
    background.classList.remove('hidden')
}

const app = {
    currentIndex: 0,
    isPlaying: false,
    isRandom: false,
    isRepeat: false,
    songs: [
        {
          "avatar": "https://avatar-nct.nixcdn.com/singer/avatar/2020/02/20/a/d/6/4/1582180833496.jpg",
          "creator": "Tóc Tiên, Da LAB, Touliver",
          "music": "https://aredir.nixcdn.com/NhacCuaTui995/NgayTanThe-TocTienDaLABTouliver-6226260.mp3?st=VaR27g6vWtLlKPLs0JDgeQ&e=1647695964",
          "title": "Ngày Tận Thế",
        },
        {
          "avatar": "https://i.ytimg.com/vi/8NWmfkQJ9Sg/hqdefault.jpg?",
          "creator": "Nguyên ft Trang",
          "music": "./img/AnhSeDonEm.mp3",
          "title": "Anh Sẽ Đón Em",
        },
        {
          "avatar": "https://avatar-nct.nixcdn.com/singer/avatar/2020/06/08/1/f/f/2/1591598848425.jpg",
          "creator": "Obito, Seachains",
          "music": "https://aredir.nixcdn.com/NhacCuaTui993/WhenYouLookAtMeLena-SeachainsObito-6181217.mp3?st=DBtyn-fyrHH260ezfOp3XA&e=1647694360",
          "title": "When You Look At Me",
        },
        {
          "avatar": "https://avatar-nct.nixcdn.com/singer/avatar/2020/06/08/1/f/f/2/1591598848425.jpg",
          "creator": "Obito",
          "music": "https://f9-stream.nixcdn.com/NhacCuaTui1026/SojuLove-Obito-7135984.mp3?st=L0upN3jfAmnoW8liiZnoJQ&e=1648088697",
          "title": "Soju Love",
        },
        {
          "avatar": "https://avatar-ex-swe.nixcdn.com/song/2021/07/14/8/c/f/9/1626231010810.jpg",
          "creator": "Da LAB",
          "music": "https://aredir.nixcdn.com/NhacCuaTui1018/ThucGiac-DaLAB-7048212.mp3?st=k5j9GqLV87l3MabtHRwJWw&e=1631635351",
          "title": "Thức Giấc",
        },
        {
          "avatar": "https://avatar-ex-swe.nixcdn.com/song/2020/11/05/4/4/6/c/1604574284072.jpg",
          "creator": "MIN",
          "music": "https://aredir.nixcdn.com/NhacCuaTui1005/TrenTinhBanDuoiTinhYeu-MIN-6802163.mp3?st=XuO0LqaKfCSfcTfWqtKr8g&e=1631635351",
          "title": "Trên Tình Bạn Dưới Tình Yêu",
        },
        {
          "avatar": "https://avatar-nct.nixcdn.com/singer/avatar/2019/10/23/5/b/0/b/1571802458800.jpg",
          "creator": "Hoàng Thùy Linh",
          "music": "https://f9-stream.nixcdn.com/NhacCuaTui1026/SeeTinh-HoangThuyLinh-7130526.mp3?st=C1ykZzUSZanVcRJyliYmwA&e=1647695723",
          "title": "See Tình",
        },
        {
          "avatar": "https://avatar-nct.nixcdn.com/song/2021/12/31/5/e/3/2/1640937980335.jpg",
          "creator": "Hoàng Thùy Linh",
          "music": "https://aredir.nixcdn.com/NhacCuaTui1025/GieoQue-HoangThuyLinhDen-7125031.mp3?st=jKYKE9QBgasM0dPINsAzQA&e=1647696102",
          "title": "Gieo Quẻ",
        },
        {
          "avatar": "https://avatar-ex-swe.nixcdn.com/song/2021/04/29/9/1/f/8/1619691182261.jpg",
          "creator": "Sơn Tùng M-TP",
          
          "music": "https://aredir.nixcdn.com/Believe_Audio19/MuonRoiMaSaoCon-SonTungMTP-7011803.mp3?st=t_yS5GGSq921dX6KNSYIXg&e=1631635351",
          "title": "Muộn Rồi Mà Sao Còn",
          
        },
        {
          "avatar": "https://avatar-ex-swe.nixcdn.com/song/2021/03/27/d/2/9/1/1616859493571.jpg",
          "creator": "Hứa Kim Tuyền, Hoàng Duyên",
          
          "music": "https://aredir.nixcdn.com/NhacCuaTui1013/SaiGonDauLongQua-HuaKimTuyenHoangDuyen-6992977.mp3?st=bDxV4hwH5qqX-vosnmLAuw&e=1631635351",
          "title": "Sài Gòn Đau Lòng Quá",
          
        },
        {
          "avatar": "https://avatar-ex-swe.nixcdn.com/song/2021/01/27/5/2/2/b/1611738358661.jpg",
          "creator": "T.R.I",
          
          "music": "https://aredir.nixcdn.com/NhacCuaTui1010/ChungTaSauNay-TRI-6929586.mp3?st=nQiJaRO1xusJm1pcwreHfg&e=1631635351",
          "title": "Chúng Ta Sau Này",
          
        },
        {
          "avatar": "https://avatar-ex-swe.nixcdn.com/song/2021/02/10/6/5/a/6/1612954164434.jpg",
          "creator": "Juky San, RedT",
          
          "music": "https://aredir.nixcdn.com/NhacCuaTui1011/PhaiChangEmDaYeu-JukySanRedT-6940932.mp3?st=fHRVpN47SV9_wQUsZpUQ3g&e=1631635351",
          "title": "Phải Chăng Em Đã Yêu?",
          
        },
        {
          "avatar": "https://avatar-ex-swe.nixcdn.com/song/2020/02/25/6/c/7/7/1582603846517.jpg",
          "creator": "W/n, Duongg, Nâu",
          
          "music": "https://aredir.nixcdn.com/NhacCuaTui996/3107-WnDuonggNau-6099150.mp3?st=h87GQMwpJ8h0_4UH-6Ov7A&e=1631635351",
          "title": "3 1 0 7",
          
        },
        {
          "avatar": "https://avatar-ex-swe.nixcdn.com/song/2021/02/04/5/a/2/5/1612405167313.jpg",
          "creator": "Duongg, Nâu, W/n",
          
          "music": "https://aredir.nixcdn.com/NhacCuaTui1011/31072-DuonggNauWn-6937818.mp3?st=ZHCUV5EBECSPPows9AkiXA&e=1631635351",
          "title": "3 1 0 7 -2",
          
        },
        {
          "avatar": "https://avatar-ex-swe.nixcdn.com/song/2021/08/02/f/d/b/3/1627913895076.jpg",
          "creator": "W/n, Duongg, Nâu, Titie",
          
          "music": "https://aredir.nixcdn.com/Unv_Audio199/31073-WNDuonggNautitie-7059323.mp3?st=aLj9uX-swNJUByZ7uFeZbg&e=1631635351",
          "title": "3107 3",
          
        },
        {
          "avatar": "https://avatar-nct.nixcdn.com/song/2021/11/29/a/9/5/0/1638180197658.jpg",
          "creator": "Đình Dũng, ACV",
          
          "music": "https://aredir.nixcdn.com/NhacCuaTui1024/DeVuong-DinhDungACV-7121634.mp3?st=ocJlDq5MG34TqP2BkhrKWw&e=1647696210",
          "title": "Đế Vương",
          
        },
        {
          "avatar": "https://avatar-nct.nixcdn.com/song/2020/09/04/f/0/b/b/1599194035938.jpg",
          "creator": "Tăng Duy Tân, Phong Max",
          
          "music": "https://aredir.nixcdn.com/NhacCuaTui1003/NgayTho-TangDuyTanPhongMax-6590759.mp3?st=fGzHuLEME93Poe8sMTtUMw&e=1647696293",
          "title": "Ngây Thơ",
          
        },
        {
          "avatar": "https://avatar-nct.nixcdn.com/singer/avatar/2020/05/27/6/9/5/0/1590562104987.jpg",
          "creator": "Bray",
          
          "music": "https://aredir.nixcdn.com/NhacCuaTui961/Badabum-Bray-5385909.mp3?st=EVjiKIsWZq15qeWZQ5z-fw&e=1647696402",
          "title": "Badabum",
          
        },
        {
          "avatar": "https://avatar-nct.nixcdn.com/song/2021/04/19/d/1/f/1/1618810475930.jpg",
          "creator": "Phí Phương Anh, RIN9",
          
          "music": "https://aredir.nixcdn.com/NhacCuaTui1014/RangKhon-PhiPhuongAnhTheFaceRIN9-7006388.mp3?st=eLVpMmDKJ5hD2oBl7Sj8Gw&e=1647696457",
          "title": "Răng Khôn",
          
        },
        {
          "avatar": "https://avatar-nct.nixcdn.com/song/2020/06/16/d/b/e/b/1592301770384.jpg",
          "creator": "Bích Phương, Phúc Du",
          
          "music": "https://aredir.nixcdn.com/NhacCuaTui999/TuChoiNheNhangThoi-BichPhuongPhucDu-6281296.mp3?st=q41TbQ_dI2omhJGK6DSKxQ&e=1647696582",
          "title": "từ chối nhẹ nhàng thôi",
          
        },
        {
          "avatar": "https://avatar-nct.nixcdn.com/song/2018/10/15/9/a/9/5/1539572308316.jpg",
          "creator": "MONSTAR",
          
          "music": "https://aredir.nixcdn.com/NhacCuaTui969/NeuMaiChiaTay-MONSTAR-5705904.mp3?st=qFZeQxYJKHP1m-P5WHZ76g&e=1647696703",
          "title": "Nếu Mai Chia Tay",
          
        },
        {
          "avatar": "https://avatar-ex-swe.nixcdn.com/song/2021/08/30/2/1/a/e/1630307726211.jpg",
          "creator": "ERIK, NinjaZ",
          
          "music": "https://aredir.nixcdn.com/NhacCuaTui1021/DiuDangEmDen-ERIKNinjaZ-7078877.mp3?st=4WHklFsrrTPLgZFtLx5f5A&e=1631635351",
          "title": "Dịu Dàng Em Đến",
          
        },
        {
          "avatar": "https://avatar-ex-swe.nixcdn.com/song/2021/01/07/6/a/b/e/1610006675703.jpg",
          "creator": "Hồ Văn Quý, Xám",
          
          "music": "https://aredir.nixcdn.com/NhacCuaTui1009/TinhYeuMauHong-HoVanQuyXam-6914636.mp3?st=M0Y2_pthUqbJWC9Pt28WLQ&e=1631635351",
          "title": "Tình Yêu Màu Hồng",
          
        },
        {
          "avatar": "https://avatar-ex-swe.nixcdn.com/song/2021/08/15/a/7/9/2/1629021746388.jpg",
          "creator": "Như Việt",
          
          "music": "https://aredir.nixcdn.com/NhacCuaTui1002/HonCaMayTroiLofiVersion-NhuViet-6362241.mp3?st=acDQcdnWIytgdN5kJEOFEw&e=1647696870",
          "title": "Hơn Cả Mây Trời",
          
        },
        {
          "avatar": "https://avatar-nct.nixcdn.com/singer/avatar/2020/08/12/f/2/d/1/1597212025646.jpg",
          "creator": "Tăng Duy Tân",
          
          "music": "https://aredir.nixcdn.com/Warner_Audio72/DaVu-TangDuyTan-7068051.mp3?st=Kp17_rGyQ2uLyHv7v6chDg&e=1631635351",
          "title": "Dạ Vũ",
          
        },
        {
          "avatar": "https://avatar-ex-swe.nixcdn.com/song/2021/03/01/7/7/d/0/1614570355625.jpg",
          "creator": "IU",
          "music": "https://aredir.nixcdn.com/NhacCuaTui1011/Celebrity-IU-6938138.mp3?st=OEblFOtalB0EAVSlw4Pedw&e=1631635385",
          "title": "Celebrity",
        },
        {
          "avatar": "https://avatar-ex-swe.nixcdn.com/song/2019/11/18/b/0/e/0/1574073260102.jpg",
          "creator": "IU",
          
          "music": "https://aredir.nixcdn.com/NhacCuaTui992/Blueming-IU-6138404.mp3?st=06EahSPoo3QBaGkVEqLzfQ&e=1631635385",
          "title": "Blueming",
          
        },
        {
          "avatar": "https://avatar-nct.nixcdn.com/singer/avatar/2017/09/18/d/f/3/9/1505694583855.jpg",
          "creator": "IU",
          
          "music": "https://aredir.nixcdn.com/NhacCuaTui999/EightAcousticVersion-IU-6282087.mp3?st=GuilBXl2ch97Sg44B0ae0g&e=1647697131",
          "title": "Eight(Acoustic Version)",
          
        },
        {
          "avatar": "https://i.ytimg.com/vi/nM0xDI5R50E/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLCaUIRJCeUaKtcE_8K4ogPczsTTxw",
          "creator": "IU",
          
          "music": "./img/BBIBIBI.mp3",
          "title": "BBIBIBI",
          
        },
        {
          "avatar": "https://avatar-ex-swe.nixcdn.com/song/2020/08/28/9/f/d/6/1598588186805.jpg",
          "creator": "BlackPink, Selena Gomez",
          
          "music": "https://aredir.nixcdn.com/YG_Audio1/IceCreamWithSelenaGomez-BLACKPINK-6720101.mp3?st=gF7FNZ3dl9TEl1CGHZ8aUA&e=1631635369",
          "title": "Ice Cream",
          
        },
        {
          "avatar": "https://avatar-ex-swe.nixcdn.com/song/2020/06/26/6/8/7/c/1593162610288.jpg",
          "creator": "BlackPink",
          
          "music": "https://aredir.nixcdn.com/YG_Audio1/HowYouLikeThat-BLACKPINK-6720100.mp3?st=66egF8z-UNqAzFvlljYDIw&e=1631635385",
          "title": "How You Like That",
          
        },
        {
          "avatar": "https://avatar-ex-swe.nixcdn.com/song/2018/11/12/7/f/3/1/1542015331222.jpg",
          "creator": "JENNIE",
          
          "music": "https://aredir.nixcdn.com/NhacCuaTui971/Solo-JennieBlackPink-5738971.mp3?st=mbqkxBro-YXnd36oqkeSFA&e=1631635385",
          "title": "Solo",
          
        },
        {
          "avatar": "https://avatar-nct.nixcdn.com/singer/avatar/2021/03/12/a/d/2/c/1615544019356.jpg",
          "creator": "ROSÉ",
          
          "music": "https://aredir.nixcdn.com/YG_Audio1/Gone-ROSE-6964052.mp3?st=_uW1eb-egBmAn_z-JsM6mw&e=1647695068",
          "title": "Gone",
          
        },
        {
          "avatar": "https://avatar-ex-swe.nixcdn.com/song/2020/10/02/a/e/7/c/1601611437417.jpg",
          "creator": "BlackPink",
          
          "music": "https://aredir.nixcdn.com/YG_Audio1/LovesickGirls-BLACKPINK-6720104.mp3?st=kIdkTxb0b9rLVFAF8U-6qQ&e=1631635385",
          "title": "Lovesick Girls",
          
        },
        {
          "avatar": "https://avatar-ex-swe.nixcdn.com/song/2018/06/15/d/5/4/8/1529053918351.jpg",
          "creator": "BlackPink",
          
          "music": "https://aredir.nixcdn.com/YG_Audio1/DduduDdudu-BLACKPINK-6291998.mp3?st=2uoXxC32h7dTM2YnjSV1dA&e=1631635385",
          "title": "DDU-DU DDU-DU",
          
        },
    ],
    render: function(){
        const htmls = this.songs.map((song, index) => {
            return `
                <div class="song ${index === this.currentIndex ? 'active' : ''}" data-index="${index}">
                    <div class="thumb" style="background-image: url('${song.avatar}')"></div>
                    <div class="body">
                        <h3 class="title">${song.title}</h3>
                        <p class="author">${song.creator}</p>
                    </div>
                </div>
                `
            })
            playlist.innerHTML = htmls.join('')
    },
    definedProperties: function(){
      Object.defineProperty(this, 'currentSong', {
        get: function(){
            return this.songs[this.currentIndex]
        }
      })
    },

    handleEvent: function(){
      const _this = this
        
        //Xử lý CD xoay / dừng
        const cdThumbAnimate = cdThumb.animate([
          {transform: 'rotate(360deg)'},
        ], {
          duration: 10000, //10 second
          iterations: Infinity
        })
        cdThumbAnimate.pause()

        //Xử lý phóng to / thu nhỏ CD
        document.onscroll = function(){
            const cd = $('.cd')
            const cdWidth = cd.offsetWidth

            document.onscroll = function(){
                const scrollTop = window.screenY || document.documentElement.scrollTop
                const newCdWidth = cdWidth - scrollTop

                cd.style.width = newCdWidth > 0 ? newCdWidth + 'px' : 0
                cd.style.opacity = newCdWidth / cdWidth
            }
        }
        //Xử lý khi click play
        playBtn.onclick = function(){
          if(_this.isPlaying){
            audio.pause()
          }
          else{
            audio.play()
          }
        }

        //Khi song được play
        audio.onplay = function(){
          _this.isPlaying = true
          player.classList.add('playing')
          cdThumbAnimate.play()
        }

        //Khi song được pause
        audio.onpause = function(){
          _this.isPlaying = false
          player.classList.remove('playing')
          cdThumbAnimate.pause()
        }
        
        //Khi tiến độ bài hát thay đổi
        audio.ontimeupdate = function(){
          if(audio.duration){
            const percent = (audio.currentTime / audio.duration) * 100
            progress.value = percent
          }
        }

        //Xử lý khi tua song
        progress.onchange = function(e){
          const seekTime = audio.duration / 100 * e.target.value
          audio.currentTime = seekTime
        }

        //Khi next songs
        nextBtn.onclick = function(){
          if(_this.isRandom){
            _this.randomSong()
          }else{
            _this.nextSong()
          }
          audio.play()
          _this.render()
          _this.scrollToActiveSong()
        }

        //Khi prev song
        prevBtn.onclick = function(){
          if(_this.isRandom){
            _this.randomSong()
          }else{
            _this.prevSong()
          }
          audio.play()
          _this.render()
          _this.scrollToActiveSong()
        }

        //Khi bật / tắt random song
        randomBtn.onclick = function(e){
          _this.isRandom = !_this.isRandom
          randomBtn.classList.toggle('active', _this.isRandom)
        }

        //Xử lý next song khi audio ended
        audio.onended = function(){
          if(_this.isRepeat){
            audio.play()
          }else{
            if(_this.isRandom){
              _this.randomSong()
            }else{
              _this.nextSong()
            }
            audio.play()
          }
        }

        //Xử lý repeat song
        repeatBtn.onclick = function(e){
            _this.isRepeat = !_this.isRepeat
            repeatBtn.classList.toggle('active', _this.isRepeat)
        }

        //Xử lý hành vi click vào playlist
        playlist.onclick = function(e){
            if(e.target.closest('.song:not(.active)')){
              _this.currentIndex = Number(e.target.closest('.song').dataset.index)
              _this.loadCurrentSong()
              _this.render()
              audio.play()
            }
        }  
    },
    scrollToActiveSong: function(){
        const activeSong = $('.playlist .active')
        activeSong.scrollIntoView({
            behavior: 'smooth',
            block: 'center'
        })
    },

    loadCurrentSong: function(){
        heading.textContent = this.currentSong.title
        cdThumb.style.backgroundImage = `url('${this.currentSong.avatar}')`
        audio.src = this.currentSong.music
    },

    nextSong: function(){
          this.currentIndex++
          if(this.currentIndex >= this.songs.length){
              this.currentIndex = 0
          }
          this.loadCurrentSong()
    },

    prevSong: function(){
          this.currentIndex--
          if(this.currentIndex < 0){
              this.currentIndex = this.songs.length - 1
          }
          this.loadCurrentSong()
    },

    randomSong: function(){
      let newIndex
      do{
        newIndex = Math.floor(Math.random() * this.songs.length)
      }while(newIndex === this.currentIndex)
      this.currentIndex = newIndex
      this.loadCurrentSong()
    },

    start: function(){
        this.definedProperties()
        this.handleEvent()

        this.loadCurrentSong()
        this.render()
    }

}
app.start()
