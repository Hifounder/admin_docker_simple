const queueHandler = require('../utils/queneHandler')
const QueueMachine = require('../utils/queueMachine')

module.exports = {
    async queue(ctx){
        let queueMachine = new QueueMachine(queueHandler, ['milk', 'cinnamon','milk'])
        await queueMachine.queueStep()
    },
}