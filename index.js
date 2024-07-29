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

// let feedEl = document.getElementById("feed")
// let newId = "post-images-" 
// let likes = null

// function renderPost(post) {
//     let postData = Object.values(post)
//     let postContent = ""
    
//     postContent += 
//     `
//     <div>
//         <div class="full-post">
//             <div class="post-info">
//                 <img class="other-avatar" src="${postData[3]}">
//                 <div class="post-text-top">
//                     <h4 >${postData[0]}</h4>
//                     <p>${postData[2]}</p>
//                 </div>
//             </div>
//             <img class="post-images" id="${newId}" src="${postData[4]}">
//         </div
//         <div>
//             <div class="post-body">
//                 <div class="icon-bar">
//                     <img class="icons" src="images/icon-heart.png">
//                     <img class="icons" src="images/icon-comment.png">
//                     <img class="icons" src="images/icon-dm.png">
//                     <h4>${likes} likes</h4>
//                     <div class="post-caption">
//                         <h4>${postData[1]} <span>${postData[5]}<span></h4>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         <div class="post-separator"></div>
//     </div>
//     `
//     feedEl.innerHTML += postContent
// }

// for (let i = 0; i < posts.length; i++) {
//     newId = "post-images-" + i
//     currentObject = posts[i]
//     currentObjectValues = Object.values(currentObject)
//     likes = currentObjectValues[6]
//     renderPost(posts[i])
// }

// const imageEls = document.getElementsByClassName("post-images");

// function updateLikes(){
//     likes += 1
//     console.log(likes)
// }
// for (let i = 0; i < imageEls.length; i++) {
//     imageEls[i].addEventListener("click", updateLikes())}

// ALIS SOLUTION //

let feedEl = document.getElementById("feed")

function renderPost(postIndex) {
    const post = posts[postIndex]
    let postContent =
        `
    <div>
        <div class="full-post">
            <div class="post-info">
                <img class="other-avatar" src="${post.avatar}">
                <div class="post-text-top">
                    <h4 >${post.name}</h4>
                    <p>${post.location}</p>
                </div>
            </div>
            <img class="post-images" id="post-image-${postIndex}" src="${post.post}">
        </div
        <div>
            <div class="post-body">
                <div class="icon-bar">
                    <img class="icons" src="images/icon-heart.png">
                    <img class="icons" src="images/icon-comment.png">
                    <img class="icons" src="images/icon-dm.png">
                    <h4 id="like-${postIndex}">${post.likes} likes</h4>
                    <div class="post-caption">
                        <h4>${post.username} <span>${post.comment}<span></h4>
                    </div>
                </div>
            </div>
        </div>
        <div class="post-separator"></div>
    </div>
    `
    // feedEl.innerHTML += postContent
    feedEl.insertAdjacentHTML('beforeend', postContent)
    
    const imageEl = document.getElementById(`post-image-${postIndex}`)
    const likeEl = document.getElementById(`like-${postIndex}`)
    
    imageEl.addEventListener("dblclick", function() {
        // console.log("event listener working - doubleclicked on image with id: ", postIndex)
        console.log(likeEl.innerHTML)
        post.likes += 1
        likeEl.innerHTML = post.likes + " likes"
    })
    
    
    // can't get imageEl before its rendered to DOM so this has to be done after calling renderPost() 
}


for (let postIndex = 0; postIndex < posts.length; postIndex++) {
    renderPost(postIndex)
}

// for (let postIndex = 0; postIndex < posts.length; postIndex++) {
//     // renderPost(postIndex)
//     const imageEl = document.getElementById(`post-image-${postIndex}`)
//     console.log(`post-image-${postIndex}`, imageEl)
    
//     imageEl.addEventListener("click", function() {
//         console.log("event listener working - doubleclicked on image with id: ", postIndex)
            
//     })
// }