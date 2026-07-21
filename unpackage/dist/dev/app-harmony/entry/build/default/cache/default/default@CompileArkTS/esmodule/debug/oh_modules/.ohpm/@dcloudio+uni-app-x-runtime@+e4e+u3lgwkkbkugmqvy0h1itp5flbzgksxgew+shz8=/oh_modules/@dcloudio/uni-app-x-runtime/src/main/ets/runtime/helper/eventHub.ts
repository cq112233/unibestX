export class EventHub {
    private listeners: Map<string, Function[]>;
    constructor() {
        this.listeners = new Map();
    }
    on(name: string, callback: Function) {
        let index = 1;
        const existingListeners = this.listeners.get(name);
        if (existingListeners) {
            index = existingListeners.push(callback);
            this.listeners.set(name, existingListeners);
        }
        else {
            this.listeners.set(name, [callback]);
        }
        return index - 1; // Return the index of the listener
    }
    emit(name: string, ...args: Object[]) {
        const existingListeners = this.listeners.get(name);
        if (existingListeners) {
            existingListeners.forEach(listener => {
                if (typeof listener === 'function') {
                    listener(...args);
                }
            });
        }
    }
    off(name: string, callback?: number | Function | null) {
        if (callback == null) {
            this.listeners.delete(name);
            return;
        }
        const existingListeners = this.listeners.get(name);
        if (existingListeners) {
            if (typeof callback === 'number') {
                existingListeners.splice(callback, 1);
            }
            else if (typeof callback === 'function') {
                const index = existingListeners.indexOf(callback);
                if (index !== -1) {
                    existingListeners.splice(index, 1);
                }
            }
            if (existingListeners.length === 0) {
                this.listeners.delete(name);
            }
        }
    }
    dispose() {
        this.listeners.clear();
    }
}
