/* eslint-disable arrow-parens */
import setImgCurrentCommand from '../setImgCurrentComand'

const layoutRowsTable = item => {
    return {
        tag: `div`,
        cls: [`table-row`, `card`],
        content: [
            {
                tag: `div`,
                cls: [`table-row__data`, `index`]
            },
            {
                tag: `div`,
                cls: `table-row__img-block`,
                content: [
                    {
                        tag: `img`,
                        cls: `table-row__img`,
                        attrs: {
                            src: setImgCurrentCommand(item.name)
                        }
                    },
                    {
                        tag: `img`,
                        cls: `table-row__img-cup`,
                        attrs: {
                            src: `img/cup.svg`
                        }
                    }
                ]
            },
            {
                tag: `div`,
                cls: `table-row__title-club`,
                content: `${item.name}`
            },
            {
                tag: `div`,
                cls: [`table-row__data`, `played`],
                content: `${item.win + item.loose + item.draw}`
            },
            {
                tag: `div`,
                cls: [`table-row__data`, `win`],
                content: `${item.win}`
            },
            {
                tag: `div`,
                cls: [`table-row__data`, `draw`],
                content: `${item.draw}`
            },
            {
                tag: `div`,
                cls: [`table-row__data`, `loose`],
                content: `${item.loose}`
            },
            {
                tag: `div`,
                cls: [`table-row__data`, `scored`],
                content: `${item.scored}`
            },
            {
                tag: `div`,
                cls: [`table-row__data`, `missed`],
                content: `${item.missed}`
            },
            {
                tag: `div`,
                cls: [`table-row__data`, `goal-difference`],
                content: `${item.scored - item.missed}`
            },
            {
                tag: `div`,
                cls: [`table-row__data`, `team_points`],
                content: `${item.win * 3 + item.draw + item.loose * 0}`
            }
        ]
    }
}

export default layoutRowsTable
