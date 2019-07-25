/**
* 提出創造咖啡請求
*/
module.exports = class {
    /**
    * 創建元素
    * @param {Array} handlers - 處理程序設置為通過請求
    */
    constructor(handlers, queue) {
      const resultHandler = (el) => {
        Object.keys(el).filter(item => item !== 'queue').join(', ')
      };
      this.handlers = [...Object.values(handlers), resultHandler].map((handler, index) => el => handler(el, handlers, index));
      this.queueObject = {
        queue
      };
    }
    
    /**
    * Set new queue to be added to QueueMachine
    * @param { Array } Queues
    * @return { self } 
    */
    setNewQueues(queue) {
      this.queueObject = {
        queue
      };
      
      return this;
    }
    
    /**
    * Process coffee
    * @return { String }
    */
   queueStep() {
      this.handlers[0](this.queueObject)
    }
  }