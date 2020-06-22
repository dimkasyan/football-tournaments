/* eslint-disable arrow-parens */
/* eslint-disable no-unused-vars */
import templateJSengine from '../templateJSengine'
import layoutRowsTable from '../layoutRowsTable'

const outputCommandResults = (list, tableForm) => {
    const tableFormChildNodes = Array.from(tableForm.childNodes)

    if (tableFormChildNodes.length !== list.length) {
        tableFormChildNodes.forEach(child => {
            child.remove()
        })
    }

    list.forEach((row, index) => {
        if (tableFormChildNodes.length !== 0) {
            if (tableFormChildNodes.length === list.length) {
                tableFormChildNodes[index].replaceWith(templateJSengine(layoutRowsTable(row)))
            } else {
                tableForm.append(templateJSengine(layoutRowsTable(row)))
            }
        } else {
            tableForm.append(templateJSengine(layoutRowsTable(row)))
        }
    })
}

export default outputCommandResults
