// alert("1");
// console.log("あいうえお");

// console.log(25+3);
// console.log(2000 - 200);
// console.log("18 + 5");


// var a = "文字が入ります";
// console.log(a,"ここです");





// var point = 90;
// if(point >= 80){
//     console.log("素晴らしい！おめでとう！")
// }else{
//     console.log("もっと頑張りましょう！")
// }

// var point = 90;
// if(point >= 80){
//     console.log("素晴らしい！おめでとう！")
// }else if(){
//     console.log("もっと頑張りましょう！")
// }

// var random = Math.floor(Math.random() * 5 + 1);//＋１をすると１〜５の数字になる。
// console.log(random,"ランダム数字のハコ");

// if(random == 1){
//     console.log("大吉");
// }else if(random == 2){
//     console.log("中吉");
// }else if(random == 3){
//     console.log("小吉");
// }else if(random == 4){
//     console.log("吉");
// }else if(random == 5){
//     console.log("凶");
// }

//jQueryのおまじない

let color = 

$(".aa").on("click", function(){
    // alert(1);
    var random = Math.floor(Math.random() * 5 + 1);//＋１をすると１〜５の数字になる。
    console.log(random,"ランダム数字のハコ");

    if(random == 1){
        console.log("大吉");
        $("h1").html("大吉");
        $("h1").css("color","red");
    }else if(random == 2){
        console.log("中吉");
        $("h1").html("中吉");
        $("h1").css("color","black");
    }else if(random == 3){
        console.log("小吉");
        $("h1").html("小吉");
        $("h1").css("color","black");
    }else if(random == 4){
        console.log("吉");
        $("h1").html("吉");
        $("h1").css("color","black");
    }else if(random == 5){
        console.log("凶");
        $("h1").html("凶");
        $("h1").css("color","black");
    }
});

// let a = 100;
// a = Math.floor(Math.random() * 5 + 1);
// if(a == 10){
//     console.log(a);
//     alert("ただしいよ");

// }else if(a == 5){
//     console.log(a);
//     alert("大当たり！");
// }

// const b = 1;
// if(b == 1 || a == 10 || a ==5){
//     alert("ok");
// }

// const c = Math.floor(Math.random() * 5 + 1);
// const d = Math.floor(Math.random() * 5 + 1);
// const sum = c + d
// console.log(sum);
// if( c == 1 && d == 2){
//     alert("Great!");
//     console.log("Great!");
// }

// console.log(5 - 3);

// 複数の実行処理を関数に入れる処理
// function aaa(){
//     const str = "関数を知らない";
//     alert(str);
// }
// aaa();
// aaa();
// aaa();

// 関数と引数、戻り値
// function add(a1,a2,en){
//     if(en == "-"){
//         let n = a1 - a2;
//         return n;
//     }else if(en == "+"){
//         let n = a1 + a2;
//         return n;
//     }
// }
// const t = add(10,40, "+");
// alert(t);
// １０；関数と引数、戻り値(練習)
// function add(a1,a2,en){
//     if(en == "-"){
//         let v = a1 - a2;
//         return v;
//     }else if(en == "+"){
//         let v = a1 + a2;
//         return v;
//     }
// }
// const z = add(30,100,"-");
// alert(z);

// １１：Mathオブジェクト
// const r = Math.random();
// alert(r);

// const r = Math.ceil(Math.random()*5);
// console.log(r);

// １２：乱数生成を関数化。Math.randomで抽出された数値を関数の外で表示してhtmlとして表示させる
// function rand(n){
//     const r = Math.floor(Math.random()*n+1);
//     return r;
// }
// const t = rand(10);
// $("#rand").html(t);

// １３；おもくじアプリ
// const n = Math.floor(Math.random()*5);
// console.log(n);
// function omikuji(){
    // if(n == 0){
    //     alert("大吉");
    //     $("#rand").html("大吉");

    // }else if(n == 1){
    //     alert("中吉");
    //     $("#rand").html("中吉");
    // }else if(n == 2){
    //     alert("吉");
    //     $("#rand").html("吉");
    // }else if(n == 3){
    //     alert("末吉");
    //     $("#rand").html("末吉");
    // }else if(n == 4){
    //     alert("凶");
    //     $("#rand").html("凶");
    //     $("#rand").html('<img src="" alt="サンプル画像">');
    // }
    // $("#rand").html(n);
// }
// １４：DOM関数（document=HTMLの要素を取得）
// const a1 = document.querySelector("#a1");
// console.log(a1.id);
// console.log(a1.title);
// console.log(a1.innerHTML);
// １５：DOM関数２（documentの要素を変更）
// const a1 = document.querySelector("#a1");
// a1.style.color="#ffff00";
// a1.style.fontSize="64px";
// a1.innerHTML="こんにちは！";
// $(".aa").on("click", function(){

// $(".button").on("click",function(){
//     const a = Math.floor(Math.random()*5+1);
//     // let view = "";
//     // console.log(view);
//     if(a == 1){
//         view = '<img src="/img/daikichi.jpeg" width=500 height=500 >';
//     }else if(a == 2){
//         view ="中吉"
//     }else if(a == 3){
//         view ="吉"
//     }else if(a == 4){
//         view ="小"
//     }else if(a == 5){
//         view ="きょう"
//     }
//     $(".status").html(view);
// });

$("#gu_btn").on("click",function(){
    const a =Math.floor(Math.random()*3);
    // console.log(a);
    if(a == 0){
        $("#pc_hands").html("パー");
        $("#judgement").html("負け！");
    }else if(a == 1){
        $("#pc_hands").html("グー");
        $("#judgement").html("あいこ！");
    }else if(a == 2){
        $("#pc_hands").html("チョキ");
        $("#judgement").html("勝ち！");
    }
});

$("#cho_btn").on("click",function(){
    const a =Math.floor(Math.random()*3);
    // console.log(a);
    if(a == 0){
        $("#pc_hands").html("パー");
        $("#judgement").html("勝ち！");
    }else if(a == 1){
        $("#pc_hands").html("グー");
        $("#judgement").html("負け！");
    }else if(a == 2){
        $("#pc_hands").html("チョキ");
        $("#judgement").html("あいこ！");
    }
});

$("#pa_btn").on("click",function(){
    const a =Math.floor(Math.random()*3);
    // console.log(a);
    if(a == 0){
        $("#pc_hands").html("パー");
        $("#judgement").html("あいこ！");
    }else if(a == 1){
        $("#pc_hands").html("グー");
        $("#judgement").html("勝ち！");
    }else if(a == 2){
        $("#pc_hands").html("チョキ");
        $("#judgement").html("負け！");
    }
});

// 上記のviewのようにすっきりとした書き方を練習
// 上記を土台にじゃんけんアプリを作成する！一旦作成！

// $("#ja").html("さしすせそ");
// $(".sa").html("２２２２");
// $("div").html("おおおおおお");

// let elem = '<a href="#">次ページ</a>';
// // $("#c1").html("elem");
// $("#c1").text(elem);
// $("#c1").css("color","#ff1100");
// $("#c1").fadeOut(1000).fadeIn(1000);
// $("#c1").css("background-color","#000000");
// $("#c1").hide();
// $("#c1").prepend("Ok");
// $("#c1").append(elem);

// $("#ex").css("display","none");
// $("#ex").html("演習練習です！");
// $("#ex").fadeIn(2000);
// $("#ex").html("さしすせそ");
// $("#ex").css("background-color","#ff0000").css("color","white");
// $("#ex").prepend("あいうえお");
// $("#ex").append("たちつてと");
// // $("ex > tr:nth-child(odd)").css("background-color","white");
// // $("ex > tr:nth-child(odd)").css("background-color","white");
// $("ex:nth-child(even)").css("background-color","white");

$("#btn").on("dblclick",function(){
    $("body").css("background","black");
});


$("#aa").css("display","none");
$("#hide").on("click",function(){
    $("#aa").show();
    $("#aa").fadeOut(2000);
});

$(document).ready(function(){
    // カウント変数を初期化します。
    let count = 0;

    $("#show").on("click",function(){
        $("#aa").fadeIn(2000);
        count++;
        console.log(count)
        $("#count").text(count);

        // ボタンのボーダー太さを増やします。
        let newBorderWidth = count; // 初期ボーダー太さ（1px）にカウントを加えます
        console.log(newBorderWidth);
        $("#show").css("border-width", newBorderWidth + "px"); // 新しいボーダー太さを適用します
    });
});