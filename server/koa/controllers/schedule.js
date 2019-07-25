const { job, allJob, startJob } = require('../utils/schedule')

module.exports = {
    async start(ctx) {
        console.log(new Date(Date.now()))
        const startTime = new Date(Date.now())
        const endTime = new Date(startTime.getTime() + 5000)
        var date = endTime
        // 指定要什麼時候去發送簡訊
        // const date = new Date(2012, 11, 21, 5, 30, 0);
        console.log(`執行單次發送：${endTime}`)
        await startJob('startJob', date)
    },
    async stop(ctx){
        console.log(`------立刻終止------`)
        await job('startJob').cancel();
    },
    async alltask(ctx){
        await console.log(allJob())
    },

}