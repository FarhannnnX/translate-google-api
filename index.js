const express = require('express');
const translate = require('@vitalets/google-translate-api');
const app = express();

app.use(express.static(process.cwd()));
app.get("/", function(req, res) {
  res.sendFile(process.cwd() +'/index.html');
});
app.get("/tr", async function(req, res) {
  const text = req.query.text;
  translate(text, { from: 'id', to: 'de'}).then(response => {
    const getLearn = response.raw[1][0][0][5][0][4];
    const arr = new Array();
    let stats;
    for(let i = 0; i < getLearn.length; i++) {
      arr.push(getLearn[i][0]);
    }
    if (response.from.text.value !== "") {
      stats = '<hr>input kata: <i>'+ text +'</i><br>Artinya: <b>'+ response.text +'</b><br><br>Ada typo tuh harusnya tuh: <br>[ '+ (response.from.text.value).split('[')[1].split(']')[0] +' ] <br><hr><b><i>Makanya Kalo waktunya belajar yang fokus yaaa😒😒😒</i></b><hr>';
      res.json({
        status: true,
        result: stats
      })
    } else {
      res.json({
        status: true,
        result: '<hr>input kata: <i>'+ text +'</i><br>Artinya: <b>'+ response.text +'</b><br><br>Pengucapan Lainnya:<br>==========<br>'+ arr.join('<br>') +'<br>==========<hr>'
      })
    }
  }).catch(e => {
    console.error(e);
    res.json({
      status: false,
      msg: e
    })
  })
})

app.listen(process.env.PORT || 8080, function() {
  console.log('connected');
})