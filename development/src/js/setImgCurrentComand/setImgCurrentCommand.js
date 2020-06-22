/* eslint-disable no-unreachable */
/* eslint-disable arrow-parens */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
/* eslint-disable consistent-return */
const setImgCurrentComand = name => {
    switch (name) {
    case `Arsenal`:
        return `img/Arsenal.svg`
    case `Chelsea`:
        return `../../img/Chelsea.svg`
    case `Real Madrid`:
        return `../../img/Real-madrid-c-f.svg`
    case `San Paulo`:
        return `../../img/Sao-paulo-f-c.svg`
    case `Zenit`:
        return `../../img/Zenit.svg`

    default:
        return ``
    }
}

export default setImgCurrentComand
