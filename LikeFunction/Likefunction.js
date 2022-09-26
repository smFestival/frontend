const likeBtn = document.querySelector(".like_btn");
let count = document.querySelector("#count"), clicked = false;//clicked - 중복 체크 방지

likeBtn.addEventListener("click", () => {
    if (!clicked) {
        count.textContent++, clicked = true;
        like_req_get(20004);
        like_req_add(20004);
    } else {
        count.textContent--, clicked = false;
        like_req_get(20004);
        like_req_null(20004);
    }
});

let id = 0, url = "http://server.smfestival.site"
function like_req_get(id) {//id, like 확인
    const config = { method: 'GET' };
    fetch(url + '/post/' + id, config)
        .then((response) => response.json())
        .then((data) => console.log('id:', data.id, 'like:', data.like))
        .catch((error) => console.log(error));
}

function like_req_add(id) {//like +1
    const data = { "check": 1 };
    fetch(url + '/post/' + id + '/like', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', },
        body: JSON.stringify(data),
    })
        .then((response) => response.json())
        .then((data) => { console.log('결과:', data); });
}

function like_req_null(id) {//like 취소
    const data = { "check": null };
    fetch(url + '/post/' + id + '/like', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', },
        body: JSON.stringify(data),
    })
        .then((response) => response.json())
        .then((data) => { console.log('결과:', data); });
}