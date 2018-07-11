import { BranchTopic } from "./BranchTopic";

export class BranchTwoTopic extends BranchTopic {
    async onStart() {
        this.send("starting branch two");
        this.end();
    }
}
BranchTwoTopic.register();