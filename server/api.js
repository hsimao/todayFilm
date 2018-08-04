const express = require('express');
const router  = express.Router();
const { getFilmList, addFilmImg, getFilmId, getMovieTimes } = require('./data');

// 取得當前熱映中的電影資料
router.get('/api/film', (req, res) => {
  getFilmList((films) => {
    addFilmImg(films, value => {
      const data = JSON.stringify(value)
      res.send(data)
    });
  })

})



// 選擇特定電影、場地、回傳當前時間後有的場次跟電影院資訊
router.post('/api/film', (req, res) => {
  // const data = req.body;
  // console.log(data);
  getFilmId('媽媽咪呀！回來了', (filmId) => {
      getMovieTimes(filmId, 'a07', (times) => {
          console.log(times);
      })
  })
})

module.exports = router;