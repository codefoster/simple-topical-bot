import { BranchTopic } from "./BranchTopic";

export class BranchTwoTopic extends BranchTopic {
    async onStart() {
        this.send("starting branch one");
    }
}