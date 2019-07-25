const schedule = require('node-schedule')

module.exports = {
    // 選擇Job
    job(jobName){
        return schedule.scheduledJobs[jobName]
    },
    async startJob(jobName, date){
        schedule.scheduleJob(jobName, date, function(){
            return this.cancel()
        });
    },
    allJob(){
        return schedule.scheduledJobs
    }
}
