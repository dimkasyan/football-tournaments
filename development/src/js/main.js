/* eslint-disable max-nested-callbacks */
/* eslint-disable camelcase */
/* eslint-disable one-var */
/* eslint-disable no-unused-vars */
/* eslint-disable no-return-assign */
/* eslint-disable arrow-parens */
/* eslint-disable no-console */
import "core-js/stable"
import "regenerator-runtime/runtime"

import requestCurrentStateTable from './requestTable'
import setStatusTournament from './setStatusTournament'
import outputCommandResults from './outputCommandResults'
import sortingByQuantityTable from './sortingByQuantityTable'
import setCurrentGame from './setCurrentGame'

let stateTable, leftOpponentName, rightOpponentName, leftOpponentImg, rightOpponentImg, scoreLeftOpponent, scoreRightOpponent, statusTournament, tableForm, sortBtn = null
let stateClass = `team_points`

function loadDataCommandsTable() {
    requestCurrentStateTable(`https://hr.peterpartner.net/test/frontend/`).then(state => {
        stateTable = state

        if (stateTable !== null) {
            const { current_game, tournament_is_finished, tournament_result } = stateTable

            setCurrentGame(leftOpponentName, leftOpponentImg, scoreLeftOpponent, current_game[0])
            setCurrentGame(rightOpponentName, rightOpponentImg, scoreRightOpponent, current_game[1])

            outputCommandResults(tournament_result, tableForm)

            sortingByQuantityTable(tableForm, stateClass)

            setStatusTournament(tournament_is_finished, statusTournament, tableForm)
        }
    })
}

document.addEventListener(`DOMContentLoaded`, () => {
    loadDataCommandsTable()

    setInterval(() => {
        loadDataCommandsTable()
    }, 10000)

    leftOpponentImg = document.querySelector(`.left-opponent-img`)
    rightOpponentImg = document.querySelector(`.rigth-opponent-img`)
    rightOpponentName = document.querySelector(`.rigth-opponent-name`)
    leftOpponentName = document.querySelector(`.left-opponent-name`)
    scoreLeftOpponent = document.querySelector(`.score-left-opponent`)
    scoreRightOpponent = document.querySelector(`.score-rigth-opponent`)
    statusTournament = document.querySelector(`.table-contents-status`)
    sortBtn = document.querySelectorAll(`.sort-btn`)
    tableForm = document.querySelector(`.table-form`)

    sortBtn.forEach(btn => {
        btn.addEventListener(`click`, event => {
            stateClass = event.target.dataset.sort
            if (event.target.classList.contains(`active`)) {
                return
            }
            sortBtn.forEach(el => {
                if (el.classList.contains(`active`)) {
                    el.classList.remove(`active`)
                }
            })

            outputCommandResults(stateTable.tournament_result, tableForm)
            sortingByQuantityTable(tableForm, stateClass)

            event.target.classList.add(`active`)
        })
    })
})
