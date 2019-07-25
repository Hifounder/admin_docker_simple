module.exports = {
    milk: (el, next, index) => {
        if (el.queue.includes('milk')) {
            el.withMilk = true
            console.log('Milk is added')
        } else {
            console.log('No Milk')
        }
        let key = el.queue[index + 1]
        let checkValue = Object.keys(next).find(i => {
            return i === key
        })
        if ((key && checkValue) != undefined ){
            next[key](el, next, index + 1)
        } else return
    },
    sugar: (el, next, index) => {
        if (el.queue.includes('sugar')) {
            el.withSugar = true
            console.log('Sugar is added')
        } else {
            console.log('No Sugar')
        }
        let key = el.queue[index + 1]
        let checkValue = Object.keys(next).find(i => {
            return i === key
        })
        if ((key && checkValue) != undefined ){
            next[key](el, next, index + 1)
        } else return
    },
    cinnamon: (el, next, index) => {
        if (el.queue.includes('cinnamon')) {
            el.withCinnamon = true
            console.log('Cinnamon is added')
        } else {
            console.log('No Cinnamon')
        }
        let key = el.queue[index + 1]
        let checkValue = Object.keys(next).find(i =>{
            return i === key
        })
        if ((key && checkValue) != undefined ){
            next[key](el, next, index + 1)
        } else return
    }
}

