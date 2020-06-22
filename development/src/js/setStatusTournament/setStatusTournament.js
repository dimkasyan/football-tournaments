/* eslint-disable radix */
/* eslint-disable arrow-parens */

const findRepeatPoints = (resultSort, length, string = ``) => {
    const arrayPoints = []

    resultSort.map(item => {
        return parseInt(item.childNodes[item.childNodes.length - length].textContent)
    }).filter((elem, pos, arr) => {
        if (pos !== arr.indexOf(elem) || pos !== arr.lastIndexOf(elem)) {
            arrayPoints.push(pos)
        } else if (string === `goal_difference`) {
            const maxIndex = arr.indexOf(Math.max(...arr))
            arrayPoints.push(maxIndex)
        }
    })

    return [...new Set(arrayPoints)]
}


const sortPointsCommands = table => {
    const tableFormChildNodes = Array.from(table.childNodes)

    const resultSort = tableFormChildNodes.sort(function (nodeA, nodeB) {
        const teamPointsA = nodeA.querySelector(`.team_points`).textContent
        const teamPointsB = nodeB.querySelector(`.team_points`).textContent
        const numberA = parseInt(teamPointsA)
        const numberB = parseInt(teamPointsB)
        if (numberA > numberB) { return -1 }
        if (numberA < numberB) { return 1 }
        return 0
    }).slice(0, 2)

    const positionRepeatPoints = findRepeatPoints(resultSort, 1)
    const positionRepeatGoalDifference = findRepeatPoints(resultSort, 2, `goal_difference`)

    if (positionRepeatPoints.length === 0) {
        return [0]
    } else {
        return positionRepeatGoalDifference
    }
}

const setStatusTournament = (status, element, table) => {
    const imgCups = document.querySelectorAll(`.table-row__img-cup`)

    if (status) {
        element.classList.add(`completed`)
        const points = sortPointsCommands(table)
        points.forEach(item => {
            imgCups[item].classList.add(`winner`)
        })
        element.textContent = `завершен`
    } else {
        if (element.classList.contains(`completed`)) {
            element.classList.remove(`completed`)
            imgCups.forEach((img) => {
                if (img.classList.contains(`winner`)) {
                    img.classList.remove(`winner`)
                }
            })
        }
        element.classList.add(`in-progress`)
        element.textContent = `в процессе`
    }
}

export default setStatusTournament
