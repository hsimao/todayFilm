// 搜尋想看的電影,回傳最近的場次跟電影院資訊
// 使用開眼電影網站資料來爬蟲
// a07 => 高雄
// 復仇者聯盟 id => faen94154866

const request = require('request');
const cheerio = require('cheerio');

var d = new Date()
var hour = d.getHours()
var minute = d.getMinutes()
// const films = [];

// 列出當前熱映中的電影
function getFilmList(callback) {
  request('http://www.atmovies.com.tw/movie/', (err, res, body) => {
    const $ = cheerio.load(body);
    const films = [];
    const filmsData = $('select[name=film_id] option')
    filmsData.map((index, item) => {
      if (item.children[0].data == '請選擇影片') return
      films.push({
        name: item.children[0].data,
        id: item.attribs.value,
        url: `http://www.atmovies.com.tw/movie/${item.attribs.value}`
      })
    })
    // console.log(films)
    callback(films)
  })
}

// 使用id抓出每部電影的img網址
function addFilmImg(films, callback) {
  for (let i = 0; i < films.length; i++) {
    setTimeout(() => {
      request(films[i].url, (err, res, body) => {
        const $ = cheerio.load(body);
        const img = $('#filmTagBlock img');
        films[i].img = img.attr('src')
      })
    }, 150*i)
  }
  setTimeout(() => {
    callback(films)
  }, 150 * films.length + 1000)
}

// 接收電影名稱參數,返回電影id
function getFilmId(movie, callback) {
    request('http://www.atmovies.com.tw/movie/', (err, res, body) => {
        var $ = cheerio.load(body)
        var re = new RegExp(movie,"i");
        console.log(re)
        var filmId = $('select[name=film_id] option').filter((index, obj) => {
        return re.test($(obj).text())
        }).val()
        console.log(filmId)
        callback(filmId)
    })
}

// 接收電影id,地區id,依照目前最近時間,並依照時間排序返回電影場次
function getMovieTimes(filmId, cityId, callback) {
    request(`http://www.atmovies.com.tw/showtime/${filmId}/${cityId}/`, (err, res, body) => {
        var d = new Date()
        var hour = d.getHours()
        var minute = d.getMinutes()
        var $ = cheerio.load(body)
        var times =
        $('#filmShowtimeBlock li')
            .filter((index, obj) => {
                var time = $(obj).text().split('：')
                return time[0] * 60 + time[1] * 1 > hour * 60 + minute * 1
            })
            .map((index, obj) => {
                return {
                time: $(obj).text(),
                theater: $(obj).closest('ul').find('.theaterTitle').text()
                }
            })
            .get()
            .sort((a, b) => {
                var a = a.time.split('：')
                var b = b.time.split('：')
                return (a[0] * 60 + a[1] * 1 > b[0] * 60 + b[1] * 1) ? 1 : -1
            })
        callback(times)
    })
}


//將方法依序組合執行, a07 => 高雄
// getFilmId('媽媽咪呀！回來了', (filmId) => {
//     getMovieTimes(filmId, 'a07', (times) => {
//         console.log(times);
//     })
// })

module.exports = {
  getFilmList,
  addFilmImg,
  getFilmId,
  getMovieTimes
}