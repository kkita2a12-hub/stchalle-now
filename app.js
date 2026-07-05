// 試合データ
const fights = [
    {
        number: 31,
        red: "山田",
        blue: "鈴木"
    },
    {
        number: 32,
        red: "田中",
        blue: "佐藤"
    },
    {
        number: 33,
        red: "伊藤",
        blue: "高橋"
    }
];

// 今表示している試合（0番目からスタート）
let currentIndex = 0;

// HTMLの部品を取得
const currentFightElement = document.getElementById("currentFight");
const nextFightElement = document.getElementById("nextFight");
const button = document.getElementById("nextButton");

// 画面を更新する関数
function updateScreen() {

    // 現在の試合
    const currentFight = fights[currentIndex];

    currentFightElement.textContent =
        `第${currentFight.number}試合 ${currentFight.red} VS ${currentFight.blue}`;

    // 次の試合
    if (currentIndex + 1 < fights.length) {

        const nextFight = fights[currentIndex + 1];

        nextFightElement.textContent =
            `第${nextFight.number}試合 ${nextFight.red} VS ${nextFight.blue}`;

    } else {

        nextFightElement.textContent = "次の試合はありません";

    }
    
prevButton.disabled = currentIndex === 0;
nextButton.disabled = currentIndex === fights.length - 1;
}

// ボタンが押された
button.addEventListener("click", function () {

    if (currentIndex < fights.length - 1) {

        currentIndex++;

        updateScreen();

    }

});

prevButton.addEventListener("click", function () {

    if (currentIndex > 0) {

        currentIndex--;

        updateScreen();

    }

});

// 最初の表示
updateScreen();