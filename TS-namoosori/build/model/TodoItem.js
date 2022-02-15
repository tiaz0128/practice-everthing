"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class TodoItem {
    constructor(id, task, complete = false) {
        this.id = id;
        this.task = task;
        this.complete = complete;
        this.id = id;
        this.task = task;
        this.complete = complete;
    }
    printDetail() {
        console.log(`${this.complete ? '⭕ ' : '❌ '}${this.id}\t${this.task}\t`);
    }
}
exports.default = TodoItem;
