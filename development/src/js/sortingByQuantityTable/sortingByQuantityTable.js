import tinysort from 'tinysort'

const sortingByQuantityTable = (table, stateClass) => {
    const tableRowCards = table.querySelectorAll(`.table-row.card`)
    const tableRowCardHeight = tableRowCards[0].offsetHeight

    table.style.height = table.offsetHeight + `px`
    for (let i = 0, l = tableRowCards.length; i < l; i++) {
        const card = tableRowCards[i]
        card.classList.add(`sort`)
        card.style.top = i * tableRowCardHeight + `px`
    }

    tinysort(`.table-form > .table-row.card`, { selector: `.${stateClass}`, order: `desc` }).forEach(function (elm, i) {
        elm.querySelector(`.index`).textContent = `${i + 1}`

        setTimeout(function (element, index) {
            element.style.top = index * tableRowCardHeight + `px`
        }.bind(null, elm, i), 40)
    })
}

export default sortingByQuantityTable
