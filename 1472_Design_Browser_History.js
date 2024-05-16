/**
 * @param {string} homepage
 */
var BrowserHistory = function(homepage) {
    this.history = [homepage];
    this.current = 0;
};

/** 
 * @param {string} url
 * @return {void}
 */
BrowserHistory.prototype.visit = function(url) {
    this.history.length = this.current + 1;
    this.current++;
    this.history.push(url);
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.back = function(steps) {
    this.current = Math.max(0, this.current - steps);
    return this.history[this.current];
};

/** 
 * @param {number} steps
 * @return {string}
 */
BrowserHistory.prototype.forward = function(steps) {
    this.current = Math.min(this.history.length - 1, steps + this.current);
    return this.history[this.current];
};

/** 
 * Your BrowserHistory object will be instantiated and called as such:
 * var obj = new BrowserHistory(homepage)
 * obj.visit(url)
 * var param_2 = obj.back(steps)
 * var param_3 = obj.forward(steps)
 */
