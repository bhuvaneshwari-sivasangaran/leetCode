class SeatManager {
     constructor() {
          this.seats = new MinPriorityQueue();
          this.nextSeat = 1;
     }

    reserve() {
        if (this.seats.isEmpty()) {
            return this.nextSeat++;
        } else {
            return this.seats.dequeue().element;
        }
    }

    unreserve(seatNumber) {
        this.seats.enqueue(seatNumber);
    }
}
/** 
 * Your SeatManager object will be instantiated and called as such:
 * var obj = new SeatManager(n)
 * var param_1 = obj.reserve()
 * obj.unreserve(seatNumber)
 */
