const btn = document.getElementById('toggle');
const theme = document.getElementById('theme');

btn.addEventListener('click', function () {
    if (theme.getAttribute('href') == "css/style.css") {
        theme.href = "css/dark.css";
    }
    else {
        theme.href = "css/style.css";
    }

});


// var myHttp = new XMLHttpRequest(); // take copy fro xmlhttprequest
// myHttp.open('GET', 'https://v1.nocodeapi.com/belal/instagram/mbgtJNWbgyNwkipd'); // the area of the data
// myHttp.send(); // send a connection require.

// // array to store data that retreive
// var allItems = []
// let follow_num = document.getElementById('num');
// // name of website (fake store api)**********

// myHttp.addEventListener('readystatechange', function () {
//     if (myHttp.readyState == 4) { // because when readstate = 4 meaning that data is ready to show
//         console.log(myHttp.response);
//         allItems = JSON.parse(myHttp.response);
//         document.getElementById('num').innerHTML = allItems[0].username;
//     }
// })

// تحديث عدد المتابعين
function updateFollowersCount() {
    // إجراء طلب GET إلى الـ API
    fetch('https://v1.nocodeapi.com/belal/instagram/mbgtJNWbgyNwkipd')
        .then(response => response.json())
        .then(data => {
            // استخراج عدد المتابعين من البيانات
            const followersCount = data.followers_count;
            // تحديث قيمة عدد المتابعين في العنصر الذي يحمل الـ id "num"
            console.log(followersCount)
            document.getElementById('num').textContent = followersCount;
        })
        .catch(error => {
            console.error('Error fetching followers count:', error);
        });
}

// استدعاء الدالة للحصول على عدد المتابعين وتحديث الصفحة
updateFollowersCount();
