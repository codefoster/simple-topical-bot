import { MemoryStorage, ConsoleAdapter } from 'botbuilder';
import { RootTopic, BranchOneTopic, BranchTwoTopic } from "./Topics";
import { doTopic, consoleOnTurn } from 'botbuilder-topical';

const adapter = new ConsoleAdapter();

RootTopic.init(new MemoryStorage());

consoleOnTurn(adapter, context => doTopic(RootTopic, context));
