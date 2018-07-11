import { Topic, doTopic } from "botbuilder-topical";
import { BranchOneTopic, BranchTwoTopic } from ".";

export class RootTopic extends Topic {
    async onStart() {
        this.send("starting root");
    }

    async onDispatch() {
        if (await this.dispatchToChild())
            return;

        if (this.context.activity.type == "message") {
            if (/1|one|One/g.test(this.text))
                await this.startChild(BranchOneTopic);
            if (/2|two|One/g.test(this.text))
                await this.startChild(BranchTwoTopic);
            else
                await this.send("root");
        }
    }

    async onChildEnd(child: Topic) {
        if (child instanceof BranchOneTopic)
            await this.send("branch one ended");
        if (child instanceof BranchTwoTopic)
            await this.send("branch two ended");
    }
}