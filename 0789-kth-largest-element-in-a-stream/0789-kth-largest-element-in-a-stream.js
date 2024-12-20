class MinHeap {
  constructor() {
    this.heap = [];
  }

  insert(val) {
    this.heap.push(val);
    this.heapifyUp();
  }

  remove() {
    const min = this.heap[0];
    const last = this.heap.pop();
    if (this.heap.length > 0) {
      this.heap[0] = last;
      this.heapifyDown();
    }
    return min;
  }

  heapifyUp() {
    let index = this.heap.length - 1;
    while (
      index > 0 &&
      this.heap[index] < this.heap[Math.floor((index - 1) / 2)]
    ) {
      this.swap(index, Math.floor((index - 1) / 2));
      index = Math.floor((index - 1) / 2);
    }
  }

  heapifyDown() {
    let index = 0;
    const length = this.heap.length;
    while (true) {
      const left = 2 * index + 1;
      const right = 2 * index + 2;
      let smallest = index;

      if (left < length && this.heap[left] < this.heap[smallest]) {
        smallest = left;
      }
      if (right < length && this.heap[right] < this.heap[smallest]) {
        smallest = right;
      }
      if (smallest === index) break;

      this.swap(index, smallest);
      index = smallest;
    }
  }

  swap(i, j) {
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
  }

  size() {
    return this.heap.length;
  }

  peek() {
    return this.heap[0];
  }
}

/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
  this.k = k;
  this.minHeap = new MinHeap();

  for (let num of nums) {
    this.add(num);
  }
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
  this.minHeap.insert(val);

  if (this.minHeap.size() > this.k) {
    this.minHeap.remove();
  }

  return this.minHeap.peek();
};

/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */