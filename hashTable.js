class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  hashMethod(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    const address = this.hashMethod(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  }
  get(key) {
    const address = this.hashMethod(key);
    const currentBucket = this.data[address];
    const value = currentBucket.find((bucket) => bucket[0] === key);

    return value;
  }
  getKeys() {
    const keys = this.data.map((value) => {
      const keys = value.map(([key]) => key);
      return keys;
    });
    return keys.flat();
  }
  delete(key) {
    const address = this.hashMethod(key);
    const bucket = this._getBucket(key);
    this.data[address][bucket] = [];
  }
  _getBucket(key) {
    const address = this.hashMethod(key);
    const bucket = this.data[address].findIndex((bucket) => bucket[0] === key);
    return bucket;
  }
}

const hashTable = new HashTable(50);
