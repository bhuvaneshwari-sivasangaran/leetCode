
var MyQueue = function() {
    this.back = [];
    this.front = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.back.push(x);
    this.front.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    let ele = this.front.shift();
    this.back.unshift();
    return ele;
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    return this.front[0];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    if ( this.front.length == 0 ) {
        return true;
    } else {
        return false;
    }
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
