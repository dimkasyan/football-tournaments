import setImgCurrentComand from '../setImgCurrentComand'

const setCurrentGame = (elementName, elementImg, elementScore, objGame) => {
    elementName.textContent = objGame.name
    elementScore.textContent = objGame.score
    elementImg.src = setImgCurrentComand(objGame.name)
}

export default setCurrentGame
