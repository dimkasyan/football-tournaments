/* eslint-disable consistent-return */
/* eslint-disable no-console */
/* eslint-disable arrow-parens */
/* eslint-disable no-undef */
const requestCurrentStateTable = async url => {
    try {
        const response = await fetch(url)
        const result = await response.json()
        return result
    } catch (err) {
        console.error(`Error request: ${err}`)
    }
}

export default requestCurrentStateTable
