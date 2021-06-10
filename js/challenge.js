

// counter 
const counter = document.querySelector('#counter')
//buttons - * heart, pause
const remove = document.querySelector('#minus')
const add = document.querySelector('#plus')
const pause = document.querySelector('#pause')
const heart = document.querySelector('#heart')
// likes the heart on the couter number
const likesnum = document.querySelector('.likes')
//comments
const commentForm = document.querySelector('#comment-form')

const submit = document.querySelector('#submit')




 commentForm.addEventListener('submit', function(e){
    e.preventDefault()

    const commentValue = document.querySelector('#comment-input')

    let comment = commentValue.value 
    //new lis
    const newli = document.createElement('li')
    newli.innerText = comment

    // list the comments 
    const commentlist = document.querySelector('#list')

    commentlist.append(newli)
    commentValue.value = ''
})




// counter
let integer = 0
let isPause = false
function counting(){
    if (!isPause )
    counter.innerText = parseInt(counter.innerText) + 1
}
 
let countIndex = setInterval(counting, 1000)

function increment(){
    clearInterval(countIndex)
    counter.innerText = parseInt(counter.innerText) + 1
    
}


// minus button
remove.addEventListener('click', function () {
    counter.innerText = parseInt(counter.innerText) - 1
})

// plus button
add.addEventListener('click', function () {
    counter.innerText = parseInt(counter.innerText) + 1
})


// heart button
heart.addEventListener('click', function (){
const newLi = document.createElement('li')
const num = counter.innerText
newLi.innerText = `${num} likes ` 
likesnum.append(newLi)
})

// pause button 
pause.addEventListener('click', function (){
    if (pause.innerText === 'pause'){
        remove.disabled = true
        add.disabled = true
        heart.disabled = true
        isPause = true
    pause.innerText = 'resume'
    }else {
        remove.disabled = false
        add.disabled = false
        heart.disabled = false
    pause.innerText = 'pause'
    isPause = false
    
    }
    
}
)
