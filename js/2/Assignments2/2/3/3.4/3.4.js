document.addEventListener('DOMContentLoaded',()=>{
    
    var img = [
      {
        name: 'bear',
        img: 'img/1.gif'
      },
      {
        name: 'fish',
        img: 'img/2.gif'
      },
      {
        name: 'bird',
        img: 'img/3.gif'
      },
      {
        name: 'cake',
        img: 'img/4.gif'
      },
      {
        name: 'pinguine',
        img: 'img/5.gif'
      },
      {
        name: 'balon',
        img: 'img/6.gif'
      },
      {
        name: 'bear',
        img: 'img/1.gif'
      },
      {
        name: 'fish',
        img: 'img/2.gif'
      },
      {
        name: 'bird',
        img: 'img/3.gif'
      },
      {
        name: 'cake',
        img: 'img/4.gif'
      },
      {
        name: 'pinguine',
        img: 'img/5.gif'
      },
      {
        name: 'balon',
        img: 'img/6.gif'
      },


      
     
    ]
  
    img.sort(() => 0.5 - Math.random())
  
    var game = document.querySelector('.game')
    var resultDisplay = document.querySelector('#result')
    var cardsChosen = []
    var chosenId = []
    var won = []
  
    //create your board
    function createBoard() {
      for (let i = 0; i < img.length; i++) {
        var card = document.createElement('img')
        card.setAttribute('src', 'img/Moon.gif')
        card.setAttribute('data-id', i)
        card.addEventListener('click', flipCard)
        game.appendChild(card)
      }
    }
  
    //check for matches
    function checkForMatch() {
        var cards = document.querySelectorAll('img')
        var optionOneId = chosenId[0]
        var optionTwoId = chosenId[1]
      
      if(optionOneId == optionTwoId) {
        cards[optionOneId].setAttribute('src', 'img/Moon.gif')
        cards[optionTwoId].setAttribute('src', 'img/Moon.gif')
        alert('You have clicked the same image!')
      }
      else if (cardsChosen[0] === cardsChosen[1]) {
        cards[optionOneId].setAttribute('src', 'img/white.png')
        cards[optionTwoId].setAttribute('src', 'img/white.png')
        cards[optionOneId].removeEventListener('click', flipCard)
        cards[optionTwoId].removeEventListener('click', flipCard)
        won.push(cardsChosen)
      } else {
        cards[optionOneId].setAttribute('src', 'img/Moon.gif')
        cards[optionTwoId].setAttribute('src', 'img/Moon.gif')
      }
      cardsChosen = []
      chosenId = []
      resultDisplay.textContent = won.length
      if  (won.length === img.length/2) {
        resultDisplay.textContent = 'Congratulations! You found them all!'
      }
    }
  
    //flip your card
    function flipCard() {
      var cardId = this.getAttribute('data-id')
      cardsChosen.push(img[cardId].name)
      chosenId.push(cardId)
      this.setAttribute('src', img[cardId].img)
      if (cardsChosen.length ===2) {
        setTimeout(checkForMatch, 500)
      }
    }
  
    createBoard()
  })
  