# ターミナルで動く最高の Twitter クライアントを作った

ターミナルで動く最高の Twitter クライアントを作った．

[](https://twterm.ryota-ka.me/)

---

## スクリーンショット

![スクリーンショット](https://twterm.ryota-ka.me/screenshot.png)

## インストール

```
$ gem install twterm
```

バージョン2.1以上くらいの Ruby じゃないと動かないと思う (詳しくは未確認)．

Linux の場合は，`readline-dev` とか `readline-devel` とか適当に入れてから Ruby をビルドしてあげてください．

## 開発の経緯とか

以前から [shokai/tw](https://github.com/shokai/tw) なんかを割と喜んで使わせて頂いていた．
しかしながら，ものぐさな自分には，リプライ時に，`--id` オプションでリプライ先ツイートの ID を表示し，いざリプライする時に，`tw '@username hogehoge' --id=xxxyyyzzz` なんていう風に指定するのが，結構面倒だった[^1]．

まぁ，そういった動機があったので，コマンドライン上でもう少し便利に，様々なことが簡単にできる Twitter クライアントを作ることにした．
作り始めた当初 (2015年の正月休み) は，まだ Ruby 歴も半年ぐらいで，そろそろレールに乗らない Ruby もある程度書けるようになっておいた方がいいだろうとも思った．

初めのうちは，正直半分冗談みたいなつもりで作っていたのだけど，開発を進めていくに従って，どんどん便利になっていき，気が付けば周囲の人間たち[^2]からリリースを煽られ続けていたので，3月17日の早朝[^3]にリリースした．

いざリリースしてみると，意外と反応が良くて，おかげさまではてブのテクノロジー分野での人気エントリにも載ったりして，結構嬉しかった．書き始めた頃のコードとか，正直かなり汚いのだけど，"Done is better than perfect." とも言うし，とりあえず出してみて，あとからちょっとずつマシにしていく方針で進めていきたい．

[^1]: 恐らく tw は，そんなふうにガッツリ Twitter を使うためのツールとして作られていないと思うが．
[^2]: というか [Unimap, Inc.](https://www.unimap.co.jp/) の2人
[^3]: 某社の社長が某所に来たので朝まで開発していた．