import { BranchTopic } from "./BranchTopic";

export class BranchOneTopic extends BranchTopic {
    async onStart() {
        this.send("starting branch one");
        this.end();
    }
}