"use strict";
let express = require("express");
let app = express();
var appoptions = {
    dotfiles: 'ignore',//略過prefix檔(.dot)
    etag: false,//etag驗證:驗證資料是否過時
    extensions: ['htm', 'html'],//找不到就找這些附檔名
    index: "index.html",//可以設定主頁檔案
    maxAge: '1d',//設定cache時間
    redirect: false,//重導向
    setHeaders: function (res, path, stat) {
      res.set('x-timestamp', Date.now())
    }
  }
app.use(express.static("public",appoptions));
app.listen(3000);
