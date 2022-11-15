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
    },
    {
        name: "Julie Napear",
        username: "julienapearphotography",
        location: "Winchester, VA",
        avatar: "images/Julie-Napear-web-developer-photographer-web.jpg",
        post: "images/Julie-Napear-web-developer-photographer-web.jpg",
        comment: "Not a great painter, but at least you know she made this code!",
        likes: 456
    }
]


 
let postContainer = document.getElementById("post-container");

function addElement(onePost) {
    const postCode =
    `<div class="title-container">
        <div id="poster-avatar">
            <img src="${onePost.avatar}" class="circle-image" alt="poster's avatar">
        </div>
            <div class="title-text-container">
                <div class="poster-name-container">
                    <h2 id="poster-name">${onePost.name}</h2>
                </div>
                <div class="poster-location-container">
                    <h3 id="poster-location">${onePost.location}</h3>
                </div>
            </div>
        </div>
    <div id="post-image-container">
        <img class="post-image" src="${onePost.post}" alt="poster's self-portrait">           
    </div>
    <div class="reactions-container">
        <div class="emoji-container">
            <button id="heart-btn"></button>
            <img src="images/icon-comment.png" class="emoji" id="comment">
            <img src="images/icon-dm.png" class="emoji" id="airplane">
        </div>
        <p class="like-count"><span id="like-count-number"></span> likes</p>
        <p id="username">${onePost.username} <span id="post-comment">${onePost.comment}</span></p>
    </div>`

  // create a new div element
  const newDiv = document.createElement("div");
  newDiv.classList.add("subsequentPosts");

  // add the text node to the newly created div
    newDiv.innerHTML = postCode;
    postContainer.appendChild(newDiv);
}


function createPosts() {
    for (let i=0; i < posts.length; i++) {
        addElement(posts[i]);
    }
}

createPosts ();

// How do I get this function to work with all the posts?

function getHearts() {
    const heartBtn = document.getElementById("heart-btn");
    let likeCountNumber = document.getElementById("like-count-number");

    likeCountNumber.value = 0;

    heartBtn.addEventListener("dblclick", function() {
        likeCountNumber.textContent++;
    })
}

getHearts();