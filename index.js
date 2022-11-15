const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]


const heartBtn = document.getElementById("heart-btn");
let likeCountNumber = document.getElementById("like-count-number");

let posterName = document.getElementById("poster-name");
let username = document.getElementById("username");
let posterLocation = document.getElementById("poster-location");
let posterAvatar = document.getElementById("poster-avatar");
let postImage = document.getElementById("post-image-container");
let postComment = document.getElementById("post-comment")

likeCountNumber.textContent = 0;

heartBtn.addEventListener("dblclick", function() {
    likeCountNumber.textContent++;
})

i = 0;

//for (let i = 0; i < posts.length; i++) {
username.innerHTML = `${posts[i].username} <span id="post-comment">${posts[i].comment}</span`;
posterName.textContent = posts[i].name;
posterLocation.textContent = posts[i].location;
posterAvatar.innerHTML = `<img src="${posts[i].avatar}" class="circle-image" alt="poster's avatar">`
postImage.innerHTML =`<img class="post-image" src="${posts[i].post}" alt="poster's self-portrait">`     

//}



