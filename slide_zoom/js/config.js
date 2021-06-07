let elmCards = document.querySelectorAll(".main-show__container .card")
let elmArticles = document.querySelectorAll(".main-show__article .article")
let indexActive = -1

for(let elmCardItem of elmCards){
    elmCardItem.addEventListener('click', function(){

        let cardId = parseInt(this.getAttribute("data-id"))
        if(cardId !== indexActive){

            indexActive = cardId

            removeClass(indexActive)
            elmArticles[indexActive].style.display = "block"
            elmArticles[cardId].classList.remove("hidden")
            setTimeout(() =>{
                elmArticles[indexActive].classList.add("active")
            }, 100)
            

            if(indexActive < 2){
                elmCards[indexActive].classList.add("slideLeft")
            }
            else if(indexActive > 1){
                elmCards[indexActive].classList.add("slideRight")
            }

            for(let i = 0; i < indexActive; i++){
                removeClass(i)
                hideLeft(i)
            }

            for(let i = indexActive + 1; i < 4; i++){
                removeClass(i)
                hideRight(i)
            }

        }else{
            indexActive = -1
            // reset
            elmArticles[cardId].classList.remove("active")
            elmArticles[cardId].classList.add("hidden")
            
            setTimeout(() =>{
                elmArticles[cardId].style.display = "none"
            }, 100)

            elmCards[cardId].classList.remove("slideRight")
            elmCards[cardId].classList.remove("slideLeft")

            for(let i = 0; i < 4; i++){
                removeClass(i)
            }
        }

        
    })
}

function hideLeft(index){
    elmCards[index].classList.add("moveLeft") 
}

function hideRight(index){
    elmCards[index].classList.add("moveRight") 
}

function removeClass(index){
    elmCards[index].classList.remove("moveRight") 
    elmCards[index].classList.remove("moveLeft") 
}