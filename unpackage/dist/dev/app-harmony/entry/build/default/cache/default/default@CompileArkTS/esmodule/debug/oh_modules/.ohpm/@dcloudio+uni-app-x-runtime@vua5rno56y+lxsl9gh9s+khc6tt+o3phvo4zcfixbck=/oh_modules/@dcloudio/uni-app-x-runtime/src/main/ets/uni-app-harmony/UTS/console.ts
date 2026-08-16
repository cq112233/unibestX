const originConsole = console;
function processMessages(messages: any[]): [
    string,
    any[]
] {
    const message0 = messages[0] as unknown as string;
    return [message0, messages.slice(1, messages.length)];
}
export const UTSConsole = {
    log(...messages: any[]) {
        const [messages0, messages1] = processMessages(messages);
        originConsole.log(messages0, ...messages1);
    },
    info(...messages: any[]) {
        const [messages0, messages1] = processMessages(messages);
        originConsole.info(messages0, ...messages1);
    },
    warn(...messages: any[]) {
        const [messages0, messages1] = processMessages(messages);
        originConsole.warn(messages0, ...messages1);
    },
    error(...messages: any[]) {
        const [messages0, messages1] = processMessages(messages);
        originConsole.error(messages0, ...messages1);
    },
    debug(...messages: any[]) {
        const [messages0, messages1] = processMessages(messages);
        originConsole.debug(messages0, ...messages1);
    },
    trace: originConsole.trace,
    traceHybridStack: originConsole.traceHybridStack,
    dir: originConsole.dir,
    dirxml: originConsole.dirxml,
    time: originConsole.time,
    timeEnd: originConsole.timeEnd,
    timeLog: originConsole.timeLog,
    group: originConsole.group,
    groupCollapsed: originConsole.groupCollapsed,
    groupEnd: originConsole.groupEnd,
    count: originConsole.count,
    assert: originConsole.assert,
    table: originConsole.table,
    countReset: originConsole.countReset
};
