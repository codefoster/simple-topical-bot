import { MemoryStorage, ConsoleAdapter } from 'botbuilder';
import { RootTopic } from "./Topics";
import { doTopic, consoleOnTurn } from 'botbuilder-topical';

const adapter = new ConsoleAdapter();

RootTopic.init(new MemoryStorage());
RootTopic.register();

consoleOnTurn(adapter, context => doTopic(RootTopic, context));
