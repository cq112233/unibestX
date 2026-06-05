var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity)
      fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy)
      fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
/**
* @vue/shared v3.5.35
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function makeMap(str) {
  const map2 = /* @__PURE__ */ Object.create(null);
  for (const key of str.split(","))
    map2[key] = 1;
  return (val) => val in map2;
}
const EMPTY_OBJ = Object.freeze({});
const extend = Object.assign;
const hasOwnProperty$1 = Object.prototype.hasOwnProperty;
const hasOwn = (val, key) => hasOwnProperty$1.call(val, key);
const isArray = Array.isArray;
const isMap = (val) => toTypeString(val) === "[object Map]";
const isFunction = (val) => typeof val === "function";
const isString = (val) => typeof val === "string";
const isSymbol = (val) => typeof val === "symbol";
const isObject$1 = (val) => val !== null && typeof val === "object";
const objectToString = Object.prototype.toString;
const toTypeString = (value) => objectToString.call(value);
const toRawType = (value) => {
  return toTypeString(value).slice(8, -1);
};
const isIntegerKey = (key) => isString(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
const cacheStringFunction = (fn) => {
  const cache = /* @__PURE__ */ Object.create(null);
  return (str) => {
    const hit = cache[str];
    return hit || (cache[str] = fn(str));
  };
};
const capitalize = cacheStringFunction((str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
});
const hasChanged = (value, oldValue) => !Object.is(value, oldValue);
let _globalThis;
const getGlobalThis = () => {
  return _globalThis || (_globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : {});
};
/**
* @dcloudio/uni-h5-vue v3.4.21
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function warn$2(msg, ...args) {
  console.warn(`[Vue warn] ${msg}`, ...args);
}
let activeEffectScope;
class EffectScope {
  constructor(detached = false) {
    this.detached = detached;
    this._active = true;
    this.effects = [];
    this.cleanups = [];
    this.parent = activeEffectScope;
    if (!detached && activeEffectScope) {
      this.index = (activeEffectScope.scopes || (activeEffectScope.scopes = [])).push(
        this
      ) - 1;
    }
  }
  get active() {
    return this._active;
  }
  run(fn) {
    if (this._active) {
      const currentEffectScope = activeEffectScope;
      try {
        activeEffectScope = this;
        return fn();
      } finally {
        activeEffectScope = currentEffectScope;
      }
    } else {
      warn$2(`cannot run an inactive effect scope.`);
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    activeEffectScope = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    activeEffectScope = this.parent;
  }
  stop(fromParent) {
    if (this._active) {
      let i, l;
      for (i = 0, l = this.effects.length; i < l; i++) {
        this.effects[i].stop();
      }
      for (i = 0, l = this.cleanups.length; i < l; i++) {
        this.cleanups[i]();
      }
      if (this.scopes) {
        for (i = 0, l = this.scopes.length; i < l; i++) {
          this.scopes[i].stop(true);
        }
      }
      if (!this.detached && this.parent && !fromParent) {
        const last = this.parent.scopes.pop();
        if (last && last !== this) {
          this.parent.scopes[this.index] = last;
          last.index = this.index;
        }
      }
      this.parent = void 0;
      this._active = false;
    }
  }
}
function effectScope(detached) {
  return new EffectScope(detached);
}
function recordEffectScope(effect2, scope = activeEffectScope) {
  if (scope && scope.active) {
    scope.effects.push(effect2);
  }
}
let activeEffect;
class ReactiveEffect {
  constructor(fn, trigger2, scheduler, scope) {
    this.fn = fn;
    this.trigger = trigger2;
    this.scheduler = scheduler;
    this.active = true;
    this.deps = [];
    this._dirtyLevel = 4;
    this._trackId = 0;
    this._runnings = 0;
    this._shouldSchedule = false;
    this._depsLength = 0;
    recordEffectScope(this, scope);
  }
  get dirty() {
    if (this._dirtyLevel === 2 || this._dirtyLevel === 3) {
      this._dirtyLevel = 1;
      pauseTracking();
      for (let i = 0; i < this._depsLength; i++) {
        const dep = this.deps[i];
        if (dep.computed) {
          triggerComputed(dep.computed);
          if (this._dirtyLevel >= 4) {
            break;
          }
        }
      }
      if (this._dirtyLevel === 1) {
        this._dirtyLevel = 0;
      }
      resetTracking();
    }
    return this._dirtyLevel >= 4;
  }
  set dirty(v) {
    this._dirtyLevel = v ? 4 : 0;
  }
  run() {
    this._dirtyLevel = 0;
    if (!this.active) {
      return this.fn();
    }
    let lastShouldTrack = shouldTrack;
    let lastEffect = activeEffect;
    try {
      shouldTrack = true;
      activeEffect = this;
      this._runnings++;
      preCleanupEffect(this);
      return this.fn();
    } finally {
      postCleanupEffect(this);
      this._runnings--;
      activeEffect = lastEffect;
      shouldTrack = lastShouldTrack;
    }
  }
  stop() {
    var _a;
    if (this.active) {
      preCleanupEffect(this);
      postCleanupEffect(this);
      (_a = this.onStop) == null ? void 0 : _a.call(this);
      this.active = false;
    }
  }
}
function triggerComputed(computed2) {
  return computed2.value;
}
function preCleanupEffect(effect2) {
  effect2._trackId++;
  effect2._depsLength = 0;
}
function postCleanupEffect(effect2) {
  if (effect2.deps.length > effect2._depsLength) {
    for (let i = effect2._depsLength; i < effect2.deps.length; i++) {
      cleanupDepEffect(effect2.deps[i], effect2);
    }
    effect2.deps.length = effect2._depsLength;
  }
}
function cleanupDepEffect(dep, effect2) {
  const trackId = dep.get(effect2);
  if (trackId !== void 0 && effect2._trackId !== trackId) {
    dep.delete(effect2);
    if (dep.size === 0) {
      dep.cleanup();
    }
  }
}
let shouldTrack = true;
let pauseScheduleStack = 0;
const trackStack = [];
function pauseTracking() {
  trackStack.push(shouldTrack);
  shouldTrack = false;
}
function resetTracking() {
  const last = trackStack.pop();
  shouldTrack = last === void 0 ? true : last;
}
function pauseScheduling() {
  pauseScheduleStack++;
}
function resetScheduling() {
  pauseScheduleStack--;
  while (!pauseScheduleStack && queueEffectSchedulers.length) {
    queueEffectSchedulers.shift()();
  }
}
function trackEffect(effect2, dep, debuggerEventExtraInfo) {
  var _a;
  if (dep.get(effect2) !== effect2._trackId) {
    dep.set(effect2, effect2._trackId);
    const oldDep = effect2.deps[effect2._depsLength];
    if (oldDep !== dep) {
      if (oldDep) {
        cleanupDepEffect(oldDep, effect2);
      }
      effect2.deps[effect2._depsLength++] = dep;
    } else {
      effect2._depsLength++;
    }
    {
      (_a = effect2.onTrack) == null ? void 0 : _a.call(effect2, extend({ effect: effect2 }, debuggerEventExtraInfo));
    }
  }
}
const queueEffectSchedulers = [];
function triggerEffects(dep, dirtyLevel, debuggerEventExtraInfo) {
  var _a;
  pauseScheduling();
  for (const effect2 of dep.keys()) {
    let tracking;
    if (effect2._dirtyLevel < dirtyLevel && (tracking != null ? tracking : tracking = dep.get(effect2) === effect2._trackId)) {
      effect2._shouldSchedule || (effect2._shouldSchedule = effect2._dirtyLevel === 0);
      effect2._dirtyLevel = dirtyLevel;
    }
    if (effect2._shouldSchedule && (tracking != null ? tracking : tracking = dep.get(effect2) === effect2._trackId)) {
      {
        (_a = effect2.onTrigger) == null ? void 0 : _a.call(effect2, extend({ effect: effect2 }, debuggerEventExtraInfo));
      }
      effect2.trigger();
      if ((!effect2._runnings || effect2.allowRecurse) && effect2._dirtyLevel !== 2) {
        effect2._shouldSchedule = false;
        if (effect2.scheduler) {
          queueEffectSchedulers.push(effect2.scheduler);
        }
      }
    }
  }
  resetScheduling();
}
const createDep = (cleanup, computed2) => {
  const dep = /* @__PURE__ */ new Map();
  dep.cleanup = cleanup;
  dep.computed = computed2;
  return dep;
};
const targetMap = /* @__PURE__ */ new WeakMap();
const ITERATE_KEY = Symbol("iterate");
const MAP_KEY_ITERATE_KEY = Symbol("Map key iterate");
function track(target, type, key) {
  if (shouldTrack && activeEffect) {
    let depsMap = targetMap.get(target);
    if (!depsMap) {
      targetMap.set(target, depsMap = /* @__PURE__ */ new Map());
    }
    let dep = depsMap.get(key);
    if (!dep) {
      depsMap.set(key, dep = createDep(() => depsMap.delete(key)));
    }
    trackEffect(
      activeEffect,
      dep,
      {
        target,
        type,
        key
      }
    );
  }
}
function trigger(target, type, key, newValue, oldValue, oldTarget) {
  const depsMap = targetMap.get(target);
  if (!depsMap) {
    return;
  }
  let deps = [];
  if (type === "clear") {
    deps = [...depsMap.values()];
  } else if (key === "length" && isArray(target)) {
    const newLength = Number(newValue);
    depsMap.forEach((dep, key2) => {
      if (key2 === "length" || !isSymbol(key2) && key2 >= newLength) {
        deps.push(dep);
      }
    });
  } else {
    if (key !== void 0) {
      deps.push(depsMap.get(key));
    }
    switch (type) {
      case "add":
        if (!isArray(target)) {
          deps.push(depsMap.get(ITERATE_KEY));
          if (isMap(target)) {
            deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
          }
        } else if (isIntegerKey(key)) {
          deps.push(depsMap.get("length"));
        }
        break;
      case "delete":
        if (!isArray(target)) {
          deps.push(depsMap.get(ITERATE_KEY));
          if (isMap(target)) {
            deps.push(depsMap.get(MAP_KEY_ITERATE_KEY));
          }
        }
        break;
      case "set":
        if (isMap(target)) {
          deps.push(depsMap.get(ITERATE_KEY));
        }
        break;
    }
  }
  pauseScheduling();
  for (const dep of deps) {
    if (dep) {
      triggerEffects(
        dep,
        4,
        {
          target,
          type,
          key,
          newValue,
          oldValue,
          oldTarget
        }
      );
    }
  }
  resetScheduling();
}
const isNonTrackableKeys = /* @__PURE__ */ makeMap(`__proto__,__v_isRef,__isVue`);
const builtInSymbols = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((key) => key !== "arguments" && key !== "caller").map((key) => Symbol[key]).filter(isSymbol)
);
const arrayInstrumentations = /* @__PURE__ */ createArrayInstrumentations();
function createArrayInstrumentations() {
  const instrumentations = {};
  ["includes", "indexOf", "lastIndexOf"].forEach((key) => {
    instrumentations[key] = function(...args) {
      const arr = toRaw(this);
      for (let i = 0, l = this.length; i < l; i++) {
        track(arr, "get", i + "");
      }
      const res = arr[key](...args);
      if (res === -1 || res === false) {
        return arr[key](...args.map(toRaw));
      } else {
        return res;
      }
    };
  });
  ["push", "pop", "shift", "unshift", "splice"].forEach((key) => {
    instrumentations[key] = function(...args) {
      pauseTracking();
      pauseScheduling();
      const res = toRaw(this)[key].apply(this, args);
      resetScheduling();
      resetTracking();
      return res;
    };
  });
  return instrumentations;
}
function hasOwnProperty(key) {
  const obj = toRaw(this);
  track(obj, "has", key);
  return obj.hasOwnProperty(key);
}
class BaseReactiveHandler {
  constructor(_isReadonly = false, _isShallow = false) {
    this._isReadonly = _isReadonly;
    this._isShallow = _isShallow;
  }
  get(target, key, receiver) {
    const isReadonly2 = this._isReadonly, isShallow2 = this._isShallow;
    if (key === "__v_isReactive") {
      return !isReadonly2;
    } else if (key === "__v_isReadonly") {
      return isReadonly2;
    } else if (key === "__v_isShallow") {
      return isShallow2;
    } else if (key === "__v_raw") {
      if (receiver === (isReadonly2 ? isShallow2 ? shallowReadonlyMap : readonlyMap : isShallow2 ? shallowReactiveMap : reactiveMap).get(target) || // receiver is not the reactive proxy, but has the same prototype
      // this means the reciever is a user proxy of the reactive proxy
      Object.getPrototypeOf(target) === Object.getPrototypeOf(receiver)) {
        return target;
      }
      return;
    }
    const targetIsArray = isArray(target);
    if (!isReadonly2) {
      if (targetIsArray && hasOwn(arrayInstrumentations, key)) {
        return Reflect.get(arrayInstrumentations, key, receiver);
      }
      if (key === "hasOwnProperty") {
        return hasOwnProperty;
      }
    }
    const res = Reflect.get(target, key, receiver);
    if (isSymbol(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) {
      return res;
    }
    if (!isReadonly2) {
      track(target, "get", key);
    }
    if (isShallow2) {
      return res;
    }
    if (isRef(res)) {
      return targetIsArray && isIntegerKey(key) ? res : res.value;
    }
    if (isObject$1(res)) {
      return isReadonly2 ? readonly(res) : reactive(res);
    }
    return res;
  }
}
class MutableReactiveHandler extends BaseReactiveHandler {
  constructor(isShallow2 = false) {
    super(false, isShallow2);
  }
  set(target, key, value, receiver) {
    let oldValue = target[key];
    if (!this._isShallow) {
      const isOldValueReadonly = isReadonly(oldValue);
      if (!isShallow(value) && !isReadonly(value)) {
        oldValue = toRaw(oldValue);
        value = toRaw(value);
      }
      if (!isArray(target) && isRef(oldValue) && !isRef(value)) {
        if (isOldValueReadonly) {
          return false;
        } else {
          oldValue.value = value;
          return true;
        }
      }
    }
    const hadKey = isArray(target) && isIntegerKey(key) ? Number(key) < target.length : hasOwn(target, key);
    const result = Reflect.set(target, key, value, receiver);
    if (target === toRaw(receiver)) {
      if (!hadKey) {
        trigger(target, "add", key, value);
      } else if (hasChanged(value, oldValue)) {
        trigger(target, "set", key, value, oldValue);
      }
    }
    return result;
  }
  deleteProperty(target, key) {
    const hadKey = hasOwn(target, key);
    const oldValue = target[key];
    const result = Reflect.deleteProperty(target, key);
    if (result && hadKey) {
      trigger(target, "delete", key, void 0, oldValue);
    }
    return result;
  }
  has(target, key) {
    const result = Reflect.has(target, key);
    if (!isSymbol(key) || !builtInSymbols.has(key)) {
      track(target, "has", key);
    }
    return result;
  }
  ownKeys(target) {
    track(
      target,
      "iterate",
      isArray(target) ? "length" : ITERATE_KEY
    );
    return Reflect.ownKeys(target);
  }
}
class ReadonlyReactiveHandler extends BaseReactiveHandler {
  constructor(isShallow2 = false) {
    super(true, isShallow2);
  }
  set(target, key) {
    {
      warn$2(
        `Set operation on key "${String(key)}" failed: target is readonly.`,
        target
      );
    }
    return true;
  }
  deleteProperty(target, key) {
    {
      warn$2(
        `Delete operation on key "${String(key)}" failed: target is readonly.`,
        target
      );
    }
    return true;
  }
}
const mutableHandlers = /* @__PURE__ */ new MutableReactiveHandler();
const readonlyHandlers = /* @__PURE__ */ new ReadonlyReactiveHandler();
const toShallow = (value) => value;
const getProto = (v) => Reflect.getPrototypeOf(v);
function get(target, key, isReadonly2 = false, isShallow2 = false) {
  target = target["__v_raw"];
  const rawTarget = toRaw(target);
  const rawKey = toRaw(key);
  if (!isReadonly2) {
    if (hasChanged(key, rawKey)) {
      track(rawTarget, "get", key);
    }
    track(rawTarget, "get", rawKey);
  }
  const { has: has2 } = getProto(rawTarget);
  const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
  if (has2.call(rawTarget, key)) {
    return wrap(target.get(key));
  } else if (has2.call(rawTarget, rawKey)) {
    return wrap(target.get(rawKey));
  } else if (target !== rawTarget) {
    target.get(key);
  }
}
function has(key, isReadonly2 = false) {
  const target = this["__v_raw"];
  const rawTarget = toRaw(target);
  const rawKey = toRaw(key);
  if (!isReadonly2) {
    if (hasChanged(key, rawKey)) {
      track(rawTarget, "has", key);
    }
    track(rawTarget, "has", rawKey);
  }
  return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
}
function size(target, isReadonly2 = false) {
  target = target["__v_raw"];
  !isReadonly2 && track(toRaw(target), "iterate", ITERATE_KEY);
  return Reflect.get(target, "size", target);
}
function add(value) {
  value = toRaw(value);
  const target = toRaw(this);
  const proto = getProto(target);
  const hadKey = proto.has.call(target, value);
  if (!hadKey) {
    target.add(value);
    trigger(target, "add", value, value);
  }
  return this;
}
function set(key, value) {
  value = toRaw(value);
  const target = toRaw(this);
  const { has: has2, get: get2 } = getProto(target);
  let hadKey = has2.call(target, key);
  if (!hadKey) {
    key = toRaw(key);
    hadKey = has2.call(target, key);
  } else {
    checkIdentityKeys(target, has2, key);
  }
  const oldValue = get2.call(target, key);
  target.set(key, value);
  if (!hadKey) {
    trigger(target, "add", key, value);
  } else if (hasChanged(value, oldValue)) {
    trigger(target, "set", key, value, oldValue);
  }
  return this;
}
function deleteEntry(key) {
  const target = toRaw(this);
  const { has: has2, get: get2 } = getProto(target);
  let hadKey = has2.call(target, key);
  if (!hadKey) {
    key = toRaw(key);
    hadKey = has2.call(target, key);
  } else {
    checkIdentityKeys(target, has2, key);
  }
  const oldValue = get2 ? get2.call(target, key) : void 0;
  const result = target.delete(key);
  if (hadKey) {
    trigger(target, "delete", key, void 0, oldValue);
  }
  return result;
}
function clear() {
  const target = toRaw(this);
  const hadItems = target.size !== 0;
  const oldTarget = isMap(target) ? new Map(target) : new Set(target);
  const result = target.clear();
  if (hadItems) {
    trigger(target, "clear", void 0, void 0, oldTarget);
  }
  return result;
}
function createForEach(isReadonly2, isShallow2) {
  return function forEach(callback, thisArg) {
    const observed = this;
    const target = observed["__v_raw"];
    const rawTarget = toRaw(target);
    const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
    !isReadonly2 && track(rawTarget, "iterate", ITERATE_KEY);
    return target.forEach((value, key) => {
      return callback.call(thisArg, wrap(value), wrap(key), observed);
    });
  };
}
function createIterableMethod(method, isReadonly2, isShallow2) {
  return function(...args) {
    const target = this["__v_raw"];
    const rawTarget = toRaw(target);
    const targetIsMap = isMap(rawTarget);
    const isPair = method === "entries" || method === Symbol.iterator && targetIsMap;
    const isKeyOnly = method === "keys" && targetIsMap;
    const innerIterator = target[method](...args);
    const wrap = isShallow2 ? toShallow : isReadonly2 ? toReadonly : toReactive;
    !isReadonly2 && track(
      rawTarget,
      "iterate",
      isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY
    );
    return {
      // iterator protocol
      next() {
        const { value, done } = innerIterator.next();
        return done ? { value, done } : {
          value: isPair ? [wrap(value[0]), wrap(value[1])] : wrap(value),
          done
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function createReadonlyMethod(type) {
  return function(...args) {
    {
      const key = args[0] ? `on key "${args[0]}" ` : ``;
      warn$2(
        `${capitalize(type)} operation ${key}failed: target is readonly.`,
        toRaw(this)
      );
    }
    return type === "delete" ? false : type === "clear" ? void 0 : this;
  };
}
function createInstrumentations() {
  const mutableInstrumentations2 = {
    get(key) {
      return get(this, key);
    },
    get size() {
      return size(this);
    },
    has,
    add,
    set,
    delete: deleteEntry,
    clear,
    forEach: createForEach(false, false)
  };
  const shallowInstrumentations2 = {
    get(key) {
      return get(this, key, false, true);
    },
    get size() {
      return size(this);
    },
    has,
    add,
    set,
    delete: deleteEntry,
    clear,
    forEach: createForEach(false, true)
  };
  const readonlyInstrumentations2 = {
    get(key) {
      return get(this, key, true);
    },
    get size() {
      return size(this, true);
    },
    has(key) {
      return has.call(this, key, true);
    },
    add: createReadonlyMethod("add"),
    set: createReadonlyMethod("set"),
    delete: createReadonlyMethod("delete"),
    clear: createReadonlyMethod("clear"),
    forEach: createForEach(true, false)
  };
  const shallowReadonlyInstrumentations2 = {
    get(key) {
      return get(this, key, true, true);
    },
    get size() {
      return size(this, true);
    },
    has(key) {
      return has.call(this, key, true);
    },
    add: createReadonlyMethod("add"),
    set: createReadonlyMethod("set"),
    delete: createReadonlyMethod("delete"),
    clear: createReadonlyMethod("clear"),
    forEach: createForEach(true, true)
  };
  const iteratorMethods = [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ];
  iteratorMethods.forEach((method) => {
    mutableInstrumentations2[method] = createIterableMethod(method, false, false);
    readonlyInstrumentations2[method] = createIterableMethod(method, true, false);
    shallowInstrumentations2[method] = createIterableMethod(method, false, true);
    shallowReadonlyInstrumentations2[method] = createIterableMethod(
      method,
      true,
      true
    );
  });
  return [
    mutableInstrumentations2,
    readonlyInstrumentations2,
    shallowInstrumentations2,
    shallowReadonlyInstrumentations2
  ];
}
const [
  mutableInstrumentations,
  readonlyInstrumentations,
  shallowInstrumentations,
  shallowReadonlyInstrumentations
] = /* @__PURE__ */ createInstrumentations();
function createInstrumentationGetter(isReadonly2, shallow) {
  const instrumentations = shallow ? isReadonly2 ? shallowReadonlyInstrumentations : shallowInstrumentations : isReadonly2 ? readonlyInstrumentations : mutableInstrumentations;
  return (target, key, receiver) => {
    if (key === "__v_isReactive") {
      return !isReadonly2;
    } else if (key === "__v_isReadonly") {
      return isReadonly2;
    } else if (key === "__v_raw") {
      return target;
    }
    return Reflect.get(
      hasOwn(instrumentations, key) && key in target ? instrumentations : target,
      key,
      receiver
    );
  };
}
const mutableCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(false, false)
};
const readonlyCollectionHandlers = {
  get: /* @__PURE__ */ createInstrumentationGetter(true, false)
};
function checkIdentityKeys(target, has2, key) {
  const rawKey = toRaw(key);
  if (rawKey !== key && has2.call(target, rawKey)) {
    const type = toRawType(target);
    warn$2(
      `Reactive ${type} contains both the raw and reactive versions of the same object${type === `Map` ? ` as keys` : ``}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const reactiveMap = /* @__PURE__ */ new WeakMap();
const shallowReactiveMap = /* @__PURE__ */ new WeakMap();
const readonlyMap = /* @__PURE__ */ new WeakMap();
const shallowReadonlyMap = /* @__PURE__ */ new WeakMap();
function targetTypeMap(rawType) {
  switch (rawType) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function getTargetType(value) {
  return value["__v_skip"] || !Object.isExtensible(value) ? 0 : targetTypeMap(toRawType(value));
}
function reactive(target) {
  if (isReadonly(target)) {
    return target;
  }
  return createReactiveObject(
    target,
    false,
    mutableHandlers,
    mutableCollectionHandlers,
    reactiveMap
  );
}
function readonly(target) {
  return createReactiveObject(
    target,
    true,
    readonlyHandlers,
    readonlyCollectionHandlers,
    readonlyMap
  );
}
function createReactiveObject(target, isReadonly2, baseHandlers, collectionHandlers, proxyMap) {
  if (!isObject$1(target)) {
    {
      warn$2(`value cannot be made reactive: ${String(target)}`);
    }
    return target;
  }
  if (target["__v_raw"] && !(isReadonly2 && target["__v_isReactive"])) {
    return target;
  }
  const existingProxy = proxyMap.get(target);
  if (existingProxy) {
    return existingProxy;
  }
  const targetType = getTargetType(target);
  if (targetType === 0) {
    return target;
  }
  const proxy = new Proxy(
    target,
    targetType === 2 ? collectionHandlers : baseHandlers
  );
  proxyMap.set(target, proxy);
  return proxy;
}
function isReactive(value) {
  if (isReadonly(value)) {
    return isReactive(value["__v_raw"]);
  }
  return !!(value && value["__v_isReactive"]);
}
function isReadonly(value) {
  return !!(value && value["__v_isReadonly"]);
}
function isShallow(value) {
  return !!(value && value["__v_isShallow"]);
}
function toRaw(observed) {
  const raw = observed && observed["__v_raw"];
  return raw ? toRaw(raw) : observed;
}
const toReactive = (value) => isObject$1(value) ? reactive(value) : value;
const toReadonly = (value) => isObject$1(value) ? readonly(value) : value;
const COMPUTED_SIDE_EFFECT_WARN = `Computed is still dirty after getter evaluation, likely because a computed is mutating its own dependency in its getter. State mutations in computed getters should be avoided.  Check the docs for more details: https://vuejs.org/guide/essentials/computed.html#getters-should-be-side-effect-free`;
class ComputedRefImpl {
  constructor(getter, _setter, isReadonly2, isSSR) {
    this.getter = getter;
    this._setter = _setter;
    this.dep = void 0;
    this.__v_isRef = true;
    this["__v_isReadonly"] = false;
    this.effect = new ReactiveEffect(
      () => getter(this._value),
      () => triggerRefValue(
        this,
        this.effect._dirtyLevel === 2 ? 2 : 3
      )
    );
    this.effect.computed = this;
    this.effect.active = this._cacheable = !isSSR;
    this["__v_isReadonly"] = isReadonly2;
  }
  get value() {
    const self2 = toRaw(this);
    if ((!self2._cacheable || self2.effect.dirty) && hasChanged(self2._value, self2._value = self2.effect.run())) {
      triggerRefValue(self2, 4);
    }
    trackRefValue(self2);
    if (self2.effect._dirtyLevel >= 2) {
      if (this._warnRecursive) {
        warn$2(COMPUTED_SIDE_EFFECT_WARN, `

getter: `, this.getter);
      }
      triggerRefValue(self2, 2);
    }
    return self2._value;
  }
  set value(newValue) {
    this._setter(newValue);
  }
  // #region polyfill _dirty for backward compatibility third party code for Vue <= 3.3.x
  get _dirty() {
    return this.effect.dirty;
  }
  set _dirty(v) {
    this.effect.dirty = v;
  }
  // #endregion
}
function computed$1(getterOrOptions, debugOptions, isSSR = false) {
  let getter;
  let setter;
  const onlyGetter = isFunction(getterOrOptions);
  if (onlyGetter) {
    getter = getterOrOptions;
    setter = () => {
      warn$2("Write operation failed: computed value is readonly");
    };
  } else {
    getter = getterOrOptions.get;
    setter = getterOrOptions.set;
  }
  const cRef = new ComputedRefImpl(getter, setter, onlyGetter || !setter, isSSR);
  return cRef;
}
function trackRefValue(ref2) {
  var _a;
  if (shouldTrack && activeEffect) {
    ref2 = toRaw(ref2);
    trackEffect(
      activeEffect,
      (_a = ref2.dep) != null ? _a : ref2.dep = createDep(
        () => ref2.dep = void 0,
        ref2 instanceof ComputedRefImpl ? ref2 : void 0
      ),
      {
        target: ref2,
        type: "get",
        key: "value"
      }
    );
  }
}
function triggerRefValue(ref2, dirtyLevel = 4, newVal) {
  ref2 = toRaw(ref2);
  const dep = ref2.dep;
  if (dep) {
    triggerEffects(
      dep,
      dirtyLevel,
      {
        target: ref2,
        type: "set",
        key: "value",
        newValue: newVal
      }
    );
  }
}
function isRef(r) {
  return !!(r && r.__v_isRef === true);
}
function ref(value) {
  return createRef(value, false);
}
function createRef(rawValue, shallow) {
  if (isRef(rawValue)) {
    return rawValue;
  }
  return new RefImpl(rawValue, shallow);
}
class RefImpl {
  constructor(value, __v_isShallow) {
    this.__v_isShallow = __v_isShallow;
    this.dep = void 0;
    this.__v_isRef = true;
    this._rawValue = __v_isShallow ? value : toRaw(value);
    this._value = __v_isShallow ? value : toReactive(value);
  }
  get value() {
    trackRefValue(this);
    return this._value;
  }
  set value(newVal) {
    const useDirectValue = this.__v_isShallow || isShallow(newVal) || isReadonly(newVal);
    newVal = useDirectValue ? newVal : toRaw(newVal);
    if (hasChanged(newVal, this._rawValue)) {
      this._rawValue = newVal;
      this._value = useDirectValue ? newVal : toReactive(newVal);
      triggerRefValue(this, 4, newVal);
    }
  }
}
const stack = [];
function pushWarningContext(vnode) {
  stack.push(vnode);
}
function popWarningContext() {
  stack.pop();
}
function warn$1(msg, ...args) {
  pauseTracking();
  const instance = stack.length ? stack[stack.length - 1].component : null;
  const appWarnHandler = instance && instance.appContext.config.warnHandler;
  const trace = getComponentTrace();
  if (appWarnHandler) {
    if (args.length) {
      args[0] = String(args[0]);
    }
    callWithErrorHandling(
      appWarnHandler,
      instance,
      11,
      [
        msg + args.map((a) => {
          var _a, _b;
          return (_b = (_a = a.toString) == null ? void 0 : _a.call(a)) != null ? _b : JSON.stringify(a);
        }).join(""),
        instance && instance.proxy,
        trace.map(
          ({ vnode }) => `at <${formatComponentName(instance, vnode.type)}>`
        ).join("\n"),
        trace
      ]
    );
  } else {
    const warnArgs = [`[Vue warn]: ${msg}`, ...args];
    if (trace.length && // avoid spamming console during tests
    true) {
      warnArgs.push(`
`, ...formatTrace(trace));
    }
    console.warn(...warnArgs);
  }
  resetTracking();
}
function getComponentTrace() {
  let currentVNode = stack[stack.length - 1];
  if (!currentVNode) {
    return [];
  }
  const normalizedStack = [];
  while (currentVNode) {
    const last = normalizedStack[0];
    if (last && last.vnode === currentVNode) {
      last.recurseCount++;
    } else {
      normalizedStack.push({
        vnode: currentVNode,
        recurseCount: 0
      });
    }
    const parentInstance = currentVNode.component && currentVNode.component.parent;
    currentVNode = parentInstance && parentInstance.vnode;
  }
  return normalizedStack;
}
function formatTrace(trace) {
  const logs = [];
  trace.forEach((entry, i) => {
    logs.push(...i === 0 ? [] : [`
`], ...formatTraceEntry(entry));
  });
  return logs;
}
function formatTraceEntry({ vnode, recurseCount }) {
  const postfix = recurseCount > 0 ? `... (${recurseCount} recursive calls)` : ``;
  const isRoot = vnode.component ? vnode.component.parent == null : false;
  const open = ` at <${formatComponentName(
    vnode.component,
    vnode.type,
    isRoot
  )}`;
  const close = `>` + postfix;
  return vnode.props ? [open, ...formatProps(vnode.props), close] : [open + close];
}
function formatProps(props) {
  const res = [];
  const keys = Object.keys(props);
  keys.slice(0, 3).forEach((key) => {
    res.push(...formatProp(key, props[key]));
  });
  if (keys.length > 3) {
    res.push(` ...`);
  }
  return res;
}
function formatProp(key, value, raw) {
  if (isString(value)) {
    value = JSON.stringify(value);
    return raw ? value : [`${key}=${value}`];
  } else if (typeof value === "number" || typeof value === "boolean" || value == null) {
    return raw ? value : [`${key}=${value}`];
  } else if (isRef(value)) {
    value = formatProp(key, toRaw(value.value), true);
    return raw ? value : [`${key}=Ref<`, value, `>`];
  } else if (isFunction(value)) {
    return [`${key}=fn${value.name ? `<${value.name}>` : ``}`];
  } else {
    value = toRaw(value);
    return raw ? value : [`${key}=`, value];
  }
}
const ErrorTypeStrings$1 = {
  ["sp"]: "serverPrefetch hook",
  ["bc"]: "beforeCreate hook",
  ["c"]: "created hook",
  ["bm"]: "beforeMount hook",
  ["m"]: "mounted hook",
  ["bu"]: "beforeUpdate hook",
  ["u"]: "updated",
  ["bum"]: "beforeUnmount hook",
  ["um"]: "unmounted hook",
  // fixed by xxxxxx
  ["ba"]: "beforeActivate hook",
  ["a"]: "activated hook",
  // fixed by xxxxxx
  ["bda"]: "beforeDeactivate hook",
  ["da"]: "deactivated hook",
  ["ec"]: "errorCaptured hook",
  ["rtc"]: "renderTracked hook",
  ["rtg"]: "renderTriggered hook",
  [0]: "setup function",
  [1]: "render function",
  [2]: "watcher getter",
  [3]: "watcher callback",
  [4]: "watcher cleanup function",
  [5]: "native event handler",
  [6]: "component event handler",
  [7]: "vnode hook",
  [8]: "directive hook",
  [9]: "transition hook",
  [10]: "app errorHandler",
  [11]: "app warnHandler",
  [12]: "ref function",
  [13]: "async component loader",
  [14]: "scheduler flush. This is likely a Vue internals bug. Please open an issue at https://github.com/vuejs/core ."
};
function callWithErrorHandling(fn, instance, type, args) {
  try {
    return args ? fn(...args) : fn();
  } catch (err) {
    handleError(err, instance, type);
  }
}
function handleError(err, instance, type, throwInDev = true) {
  const contextVNode = instance ? instance.vnode : null;
  if (instance) {
    let cur = instance.parent;
    const exposedInstance = instance.proxy;
    const errorInfo = ErrorTypeStrings$1[type] || type;
    while (cur) {
      const errorCapturedHooks = cur.ec;
      if (errorCapturedHooks) {
        for (let i = 0; i < errorCapturedHooks.length; i++) {
          if (errorCapturedHooks[i](err, exposedInstance, errorInfo) === false) {
            return;
          }
        }
      }
      cur = cur.parent;
    }
    const appErrorHandler = instance.appContext.config.errorHandler;
    if (appErrorHandler) {
      callWithErrorHandling(
        appErrorHandler,
        null,
        10,
        [err, exposedInstance, errorInfo]
      );
      return;
    }
  }
  logError(err, type, contextVNode, throwInDev);
}
function logError(err, type, contextVNode, throwInDev = true) {
  {
    const info = ErrorTypeStrings$1[type] || type;
    if (contextVNode) {
      pushWarningContext(contextVNode);
    }
    warn$1(`Unhandled error${info ? ` during execution of ${info}` : ``}`);
    if (contextVNode) {
      popWarningContext();
    }
    {
      console.error(err);
    }
  }
}
let isFlushing = false;
let isFlushPending = false;
const queue = [];
let flushIndex = 0;
const pendingPostFlushCbs = [];
let activePostFlushCbs = null;
let postFlushIndex = 0;
const resolvedPromise = /* @__PURE__ */ Promise.resolve();
const RECURSION_LIMIT = 100;
function findInsertionIndex(id) {
  let start = flushIndex + 1;
  let end = queue.length;
  while (start < end) {
    const middle = start + end >>> 1;
    const middleJob = queue[middle];
    const middleJobId = getId(middleJob);
    if (middleJobId < id || middleJobId === id && middleJob.pre) {
      start = middle + 1;
    } else {
      end = middle;
    }
  }
  return start;
}
function queueJob(job) {
  if (!queue.length || !queue.includes(
    job,
    isFlushing && job.allowRecurse ? flushIndex + 1 : flushIndex
  )) {
    if (job.id == null) {
      queue.push(job);
    } else {
      queue.splice(findInsertionIndex(job.id), 0, job);
    }
    queueFlush();
  }
}
function queueFlush() {
  if (!isFlushing && !isFlushPending) {
    isFlushPending = true;
    resolvedPromise.then(flushJobs);
  }
}
function queuePostFlushCb(cb) {
  if (!isArray(cb)) {
    if (!activePostFlushCbs || !activePostFlushCbs.includes(
      cb,
      cb.allowRecurse ? postFlushIndex + 1 : postFlushIndex
    )) {
      pendingPostFlushCbs.push(cb);
    }
  } else {
    pendingPostFlushCbs.push(...cb);
  }
  queueFlush();
}
function flushPostFlushCbs(seen) {
  if (pendingPostFlushCbs.length) {
    const deduped = [...new Set(pendingPostFlushCbs)].sort(
      (a, b) => getId(a) - getId(b)
    );
    pendingPostFlushCbs.length = 0;
    if (activePostFlushCbs) {
      activePostFlushCbs.push(...deduped);
      return;
    }
    activePostFlushCbs = deduped;
    {
      seen = seen || /* @__PURE__ */ new Map();
    }
    for (postFlushIndex = 0; postFlushIndex < activePostFlushCbs.length; postFlushIndex++) {
      if (checkRecursiveUpdates(seen, activePostFlushCbs[postFlushIndex])) {
        continue;
      }
      activePostFlushCbs[postFlushIndex]();
    }
    activePostFlushCbs = null;
    postFlushIndex = 0;
  }
}
const getId = (job) => job.id == null ? Infinity : job.id;
const comparator = (a, b) => {
  const diff = getId(a) - getId(b);
  if (diff === 0) {
    if (a.pre && !b.pre)
      return -1;
    if (b.pre && !a.pre)
      return 1;
  }
  return diff;
};
function flushJobs(seen) {
  isFlushPending = false;
  isFlushing = true;
  {
    seen = seen || /* @__PURE__ */ new Map();
  }
  queue.sort(comparator);
  const check = (job) => checkRecursiveUpdates(seen, job);
  try {
    for (flushIndex = 0; flushIndex < queue.length; flushIndex++) {
      const job = queue[flushIndex];
      if (job && job.active !== false) {
        if (check(job)) {
          continue;
        }
        callWithErrorHandling(job, null, 14);
      }
    }
  } finally {
    flushIndex = 0;
    queue.length = 0;
    flushPostFlushCbs(seen);
    isFlushing = false;
    if (queue.length || pendingPostFlushCbs.length) {
      flushJobs(seen);
    }
  }
}
function checkRecursiveUpdates(seen, fn) {
  if (!seen.has(fn)) {
    seen.set(fn, 1);
  } else {
    const count = seen.get(fn);
    if (count > RECURSION_LIMIT) {
      const instance = fn.ownerInstance;
      const componentName = instance && getComponentName(instance.type);
      handleError(
        `Maximum recursive updates exceeded${componentName ? ` in component <${componentName}>` : ``}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
        null,
        10
      );
      return true;
    } else {
      seen.set(fn, count + 1);
    }
  }
}
const hmrDirtyComponents = /* @__PURE__ */ new Set();
{
  getGlobalThis().__VUE_HMR_RUNTIME__ = {
    createRecord: tryWrap(createRecord),
    rerender: tryWrap(rerender),
    reload: tryWrap(reload)
  };
}
const map = /* @__PURE__ */ new Map();
function createRecord(id, initialDef) {
  if (map.has(id)) {
    return false;
  }
  map.set(id, {
    initialDef: normalizeClassComponent(initialDef),
    instances: /* @__PURE__ */ new Set()
  });
  return true;
}
function normalizeClassComponent(component) {
  return isClassComponent(component) ? component.__vccOpts : component;
}
function rerender(id, newRender) {
  const record = map.get(id);
  if (!record) {
    return;
  }
  record.initialDef.render = newRender;
  [...record.instances].forEach((instance) => {
    if (newRender) {
      instance.render = newRender;
      normalizeClassComponent(instance.type).render = newRender;
    }
    instance.renderCache = [];
    instance.effect.dirty = true;
    instance.update();
  });
}
function reload(id, newComp) {
  const record = map.get(id);
  if (!record)
    return;
  if (typeof window !== "undefined" && window.__setupPage && record.initialDef.__mpType === "page") {
    newComp = window.__setupPage(newComp);
  }
  newComp = normalizeClassComponent(newComp);
  updateComponentDef(record.initialDef, newComp);
  const instances = [...record.instances];
  for (const instance of instances) {
    const oldComp = normalizeClassComponent(instance.type);
    if (!hmrDirtyComponents.has(oldComp)) {
      if (oldComp !== record.initialDef) {
        updateComponentDef(oldComp, newComp);
      }
      hmrDirtyComponents.add(oldComp);
    }
    instance.appContext.propsCache.delete(instance.type);
    instance.appContext.emitsCache.delete(instance.type);
    instance.appContext.optionsCache.delete(instance.type);
    if (instance.ceReload) {
      hmrDirtyComponents.add(oldComp);
      instance.ceReload(newComp.styles);
      hmrDirtyComponents.delete(oldComp);
    } else if (instance.parent) {
      instance.parent.effect.dirty = true;
      queueJob(instance.parent.update);
    } else if (instance.appContext.reload) {
      instance.appContext.reload();
    } else if (typeof window !== "undefined") {
      window.location.reload();
    } else {
      console.warn(
        "[HMR] Root or manually mounted instance modified. Full reload required."
      );
    }
  }
  queuePostFlushCb(() => {
    for (const instance of instances) {
      hmrDirtyComponents.delete(
        normalizeClassComponent(instance.type)
      );
    }
  });
}
function updateComponentDef(oldComp, newComp) {
  extend(oldComp, newComp);
  for (const key in oldComp) {
    if (key !== "__file" && !(key in newComp)) {
      delete oldComp[key];
    }
  }
}
function tryWrap(fn) {
  return (id, arg) => {
    try {
      return fn(id, arg);
    } catch (e) {
      console.error(e);
      console.warn(
        `[HMR] Something went wrong during Vue component hot-reload. Full reload required.`
      );
    }
  };
}
let currentRenderingInstance = null;
const PublicInstanceProxyHandlers = {};
{
  PublicInstanceProxyHandlers.ownKeys = (target) => {
    warn$1(
      `Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead.`
    );
    return Reflect.ownKeys(target);
  };
}
let currentInstance = null;
const getCurrentInstance = () => currentInstance || currentRenderingInstance;
{
  const g = getGlobalThis();
  const registerGlobalSetter = (key, setter) => {
    let setters;
    if (!(setters = g[key]))
      setters = g[key] = [];
    setters.push(setter);
    return (v) => {
      if (setters.length > 1)
        setters.forEach((set2) => set2(v));
      else
        setters[0](v);
    };
  };
  registerGlobalSetter(
    `__VUE_INSTANCE_SETTERS__`,
    (v) => currentInstance = v
  );
  registerGlobalSetter(
    `__VUE_SSR_SETTERS__`,
    (v) => isInSSRComponentSetup = v
  );
}
let isInSSRComponentSetup = false;
const classifyRE = /(?:^|[-_])(\w)/g;
const classify = (str) => str.replace(classifyRE, (c) => c.toUpperCase()).replace(/[-_]/g, "");
function getComponentName(Component, includeInferred = true) {
  return isFunction(Component) ? Component.displayName || Component.name : Component.name || includeInferred && Component.__name;
}
function formatComponentName(instance, Component, isRoot = false) {
  let name = getComponentName(Component);
  if (!name && Component.__file) {
    const match = Component.__file.match(/([^/\\]+)\.\w+$/);
    if (match) {
      name = match[1];
    }
  }
  if (!name && instance && instance.parent) {
    const inferFromRegistry = (registry) => {
      for (const key in registry) {
        if (registry[key] === Component) {
          return key;
        }
      }
    };
    name = inferFromRegistry(
      instance.components || instance.parent.type.components
    ) || inferFromRegistry(instance.appContext.components);
  }
  return name ? classify(name) : isRoot ? `App` : `Anonymous`;
}
function isClassComponent(value) {
  return isFunction(value) && "__vccOpts" in value;
}
const computed = (getterOrOptions, debugOptions) => {
  const c = computed$1(getterOrOptions, debugOptions, isInSSRComponentSetup);
  {
    const i = getCurrentInstance();
    if (i && i.appContext.config.warnRecursiveComputed) {
      c._warnRecursive = true;
    }
  }
  return c;
};
function initCustomFormatter() {
  if (typeof window === "undefined") {
    return;
  }
  const vueStyle = { style: "color:#3ba776" };
  const numberStyle = { style: "color:#1677ff" };
  const stringStyle = { style: "color:#f5222d" };
  const keywordStyle = { style: "color:#eb2f96" };
  const formatter = {
    header(obj) {
      if (!isObject$1(obj)) {
        return null;
      }
      if (obj.__isVue) {
        return ["div", vueStyle, `VueInstance`];
      } else if (isRef(obj)) {
        return [
          "div",
          {},
          ["span", vueStyle, genRefFlag(obj)],
          "<",
          formatValue(obj.value),
          `>`
        ];
      } else if (isReactive(obj)) {
        return [
          "div",
          {},
          ["span", vueStyle, isShallow(obj) ? "ShallowReactive" : "Reactive"],
          "<",
          formatValue(obj),
          `>${isReadonly(obj) ? ` (readonly)` : ``}`
        ];
      } else if (isReadonly(obj)) {
        return [
          "div",
          {},
          ["span", vueStyle, isShallow(obj) ? "ShallowReadonly" : "Readonly"],
          "<",
          formatValue(obj),
          ">"
        ];
      }
      return null;
    },
    hasBody(obj) {
      return obj && obj.__isVue;
    },
    body(obj) {
      if (obj && obj.__isVue) {
        return [
          "div",
          {},
          ...formatInstance(obj.$)
        ];
      }
    }
  };
  function formatInstance(instance) {
    const blocks = [];
    if (instance.type.props && instance.props) {
      blocks.push(createInstanceBlock("props", toRaw(instance.props)));
    }
    if (instance.setupState !== EMPTY_OBJ) {
      blocks.push(createInstanceBlock("setup", instance.setupState));
    }
    if (instance.data !== EMPTY_OBJ) {
      blocks.push(createInstanceBlock("data", toRaw(instance.data)));
    }
    const computed2 = extractKeys(instance, "computed");
    if (computed2) {
      blocks.push(createInstanceBlock("computed", computed2));
    }
    const injected = extractKeys(instance, "inject");
    if (injected) {
      blocks.push(createInstanceBlock("injected", injected));
    }
    blocks.push([
      "div",
      {},
      [
        "span",
        {
          style: keywordStyle.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: instance }]
    ]);
    return blocks;
  }
  function createInstanceBlock(type, target) {
    target = extend({}, target);
    if (!Object.keys(target).length) {
      return ["span", {}];
    }
    return [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        type
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(target).map((key) => {
          return [
            "div",
            {},
            ["span", keywordStyle, key + ": "],
            formatValue(target[key], false)
          ];
        })
      ]
    ];
  }
  function formatValue(v, asRaw = true) {
    if (typeof v === "number") {
      return ["span", numberStyle, v];
    } else if (typeof v === "string") {
      return ["span", stringStyle, JSON.stringify(v)];
    } else if (typeof v === "boolean") {
      return ["span", keywordStyle, v];
    } else if (isObject$1(v)) {
      return ["object", { object: asRaw ? toRaw(v) : v }];
    } else {
      return ["span", stringStyle, String(v)];
    }
  }
  function extractKeys(instance, type) {
    const Comp = instance.type;
    if (isFunction(Comp)) {
      return;
    }
    const extracted = {};
    for (const key in instance.ctx) {
      if (isKeyOfType(Comp, key, type)) {
        extracted[key] = instance.ctx[key];
      }
    }
    return extracted;
  }
  function isKeyOfType(Comp, key, type) {
    const opts = Comp[type];
    if (isArray(opts) && opts.includes(key) || isObject$1(opts) && key in opts) {
      return true;
    }
    if (Comp.extends && isKeyOfType(Comp.extends, key, type)) {
      return true;
    }
    if (Comp.mixins && Comp.mixins.some((m) => isKeyOfType(m, key, type))) {
      return true;
    }
  }
  function genRefFlag(v) {
    if (isShallow(v)) {
      return `ShallowRef`;
    }
    if (v.effect) {
      return `ComputedRef`;
    }
    return `Ref`;
  }
  if (window.devtoolsFormatters) {
    window.devtoolsFormatters.push(formatter);
  } else {
    window.devtoolsFormatters = [formatter];
  }
}
function initDev() {
  {
    initCustomFormatter();
  }
}
{
  initDev();
}
class Pinia {
  constructor() {
    __publicField(this, "state", {});
    __publicField(this, "_stores", /* @__PURE__ */ new Map());
    __publicField(this, "_plugins", []);
    /**
     * Pinia 顶层 effect 作用域。
     * 字段初始化器中调用 `effectScope()` —— 因为 Pinia 必须在 main.uts 顶层 createPinia()
     * 创建（见 readme），此时 currentScope 为 null，effectScope() 创建出来的就是顶层独立 scope。
     * 每个 store 在 defineStore 中通过 `pinia._e.run(() => effectScope())` 创建子 scope，
     * 嵌套在本 scope 下，与组件生命周期完全解耦。
     */
    __publicField(this, "_e", effectScope());
    __publicField(this, "_installed", false);
  }
  /**
   * Vue app.use(pinia) 时被调用
   */
  install(app) {
    if (this._installed) {
      console.warn("[x-pinia-s] pinia already installed on a Vue app");
      return;
    }
    this._installed = true;
  }
  /**
   * 注册插件
   */
  use(plugin) {
    this._plugins.push(plugin);
    const piniaRef = this;
    this._stores.forEach((store, _id) => {
      applyPluginToStore(piniaRef, store, plugin);
    });
    return this;
  }
}
function applyPluginToStore(pinia2, store, plugin) {
  const storeBase = store;
  const ctx = {
    pinia: pinia2,
    storeId: storeBase.$id,
    store,
    state: storeBase.$state
  };
  try {
    plugin(ctx);
  } catch (e) {
    console.warn("[x-pinia-s] plugin error on store " + ctx.storeId + ":", e);
  }
}
function createPinia() {
  const pinia2 = new Pinia();
  return pinia2;
}
const defaultSerializer = {
  serialize: (state) => {
    const s = JSON.stringify(state);
    return s == null ? "{}" : s;
  },
  deserialize: (raw) => {
    if (raw == "")
      return {};
    const parsed = JSON.parseObject(raw);
    if (parsed == null)
      return {};
    return parsed;
  }
};
function mergePersistOptions(opts) {
  const defaults = {
    keyPrefix: "pinia:",
    includeStores: null,
    excludeStores: [],
    serializer: null
  };
  if (opts == null)
    return defaults;
  const o = opts;
  return {
    keyPrefix: o.keyPrefix,
    includeStores: o.includeStores,
    excludeStores: o.excludeStores,
    serializer: o.serializer
  };
}
function shouldPersist(storeId, opts) {
  for (let i = 0; i < opts.excludeStores.length; i++) {
    if (opts.excludeStores[i] == storeId)
      return false;
  }
  if (opts.includeStores == null)
    return true;
  const list = opts.includeStores;
  for (let i = 0; i < list.length; i++) {
    if (list[i] == storeId)
      return true;
  }
  return false;
}
function createPersistPlugin(opts) {
  const config = mergePersistOptions(opts);
  const serializer = config.serializer == null ? defaultSerializer : config.serializer;
  const plugin = (ctx) => {
    const id = ctx.storeId;
    if (!shouldPersist(id, config))
      return;
    const storageKey = config.keyPrefix + id;
    const storeBase = ctx.store;
    try {
      const raw = uni.getStorageSync(storageKey);
      if (raw != null && typeof raw == "string" && raw != "") {
        const restored = serializer.deserialize(raw);
        storeBase._hydrate(restored);
      }
    } catch (e) {
      console.warn("[x-pinia-s][persist] restore failed for " + id + ":", e);
    }
    storeBase.$subscribe((_mutation, state) => {
      try {
        const str = serializer.serialize(state);
        uni.setStorageSync(storageKey, str);
      } catch (e) {
        console.warn("[x-pinia-s][persist] save failed for " + id + ":", e);
      }
    });
  };
  return plugin;
}
const customTabbarList = [
  {
    text: "tabbar.home",
    pagePath: "src/pages/index/index",
    iconType: "icon",
    icon: "home",
    iconActive: "home-filled",
    badge: null,
    isBulge: false
  },
  {
    text: "tabbar.basic",
    pagePath: "src/pages/basic/basic",
    iconType: "icon",
    icon: "tune",
    iconActive: "tune-filled",
    badge: null,
    isBulge: false
  },
  {
    text: "tabbar.ai",
    pagePath: "",
    iconType: "icon",
    icon: "chatboxes",
    iconActive: "chatboxes-filled",
    badge: null,
    isBulge: true
  },
  {
    text: "tabbar.function",
    pagePath: "src/pages/function/function",
    iconType: "icon",
    icon: "gear",
    iconActive: "gear-filled",
    badge: null,
    isBulge: false
  },
  {
    text: "tabbar.me",
    pagePath: "src/pages/me/me",
    iconType: "icon",
    icon: "person",
    iconActive: "person-filled",
    badge: null,
    isBulge: false
  }
];
function normalizeList() {
  const result = [];
  for (let i = 0; i < customTabbarList.length; i++) {
    const item = customTabbarList[i];
    result.push({
      text: item.text,
      pagePath: item.pagePath.startsWith("/") ? item.pagePath : `/${item.pagePath}`,
      iconType: item.iconType,
      icon: item.icon,
      iconActive: item.iconActive,
      badge: item.badge,
      isBulge: item.isBulge
    });
  }
  return result;
}
reactive(normalizeList());
ref(0);
ref("#37c2bc");
function getAllKeys(map2) {
  let keys = [];
  map2.forEach((_, key) => {
    keys.push(key);
  });
  return keys;
}
function isObject(obj) {
  return obj != null && typeof obj == "object";
}
const RE_TOKEN_LIST_VALUE = /^(?:\d)+/;
const RE_TOKEN_NAMED_VALUE = /^(?:\w)+/;
function parse(format) {
  const tokens = [];
  let position = 0;
  let text = "";
  while (position < format.length) {
    let char = format.charAt(position++);
    if (char == "{") {
      if (text.length > 0) {
        const token2 = { type: "text", value: text };
        tokens.push(token2);
      }
      text = "";
      let sub = "";
      char = format.charAt(position++);
      while (char != "}") {
        sub += char;
        char = format.charAt(position++);
      }
      const isClosed = char == "}";
      const type = RE_TOKEN_LIST_VALUE.test(sub) ? "list" : isClosed && RE_TOKEN_NAMED_VALUE.test(sub) ? "named" : "unknown";
      const token = { type, value: sub };
      tokens.push(token);
    } else if (char == "%") {
      if (format.charAt(position) != "{") {
        text += char;
      }
    } else {
      text += char;
    }
  }
  if (text.length > 0) {
    const token = { type: "text", value: text };
    tokens.push(token);
  }
  return tokens;
}
function compile(tokens, values) {
  const compiled = [];
  let index = 0;
  const mode = Array.isArray(values) ? "list" : isObject(values) ? "named" : "unknown";
  if (mode == "unknown") {
    return compiled;
  }
  while (index < tokens.length) {
    const token = tokens[index];
    switch (token.type) {
      case "text":
        compiled.push(token.value);
        break;
      case "list":
        const index2 = parseInt(token.value, 10);
        if (mode == "list") {
          const value = values[index2];
          compiled.push(value);
        } else {
          {
            warn("list did not receive a valid values array");
          }
        }
        break;
      case "named":
        if (mode == "named") {
          const value = values[token.value] ?? "";
          compiled.push(`${value}`);
        } else {
          {
            warn(`Type of token '${token.type}' and format of value '${mode}' don't match!`);
          }
        }
        break;
      case "unknown":
        if (token.value.startsWith("'") && token.value.endsWith("'")) {
          compiled.push(token.value.slice(1, -1));
        } else {
          warn(`Detect 'unknown' type of token!`);
        }
        break;
    }
    index++;
  }
  return compiled;
}
class BaseFormatter {
  constructor() {
    __publicField(this, "_caches");
    this._caches = /* @__PURE__ */ new Map();
  }
  interpolate(message, values) {
    if (values == null) {
      return [message];
    }
    let tokens = this._caches.get(message);
    if (tokens == null) {
      tokens = parse(message);
      this._caches.set(message, tokens);
    }
    return compile(tokens, values);
  }
}
class AvailabilitiesImpl {
  /**
   * 构造函数
   * 检查Intl API的可用性
   */
  constructor() {
    // 日期时间格式化是否可用
    __publicField(this, "dateTimeFormat", false);
    // 数字格式化是否可用
    __publicField(this, "numberFormat", false);
    const intlDefined = typeof Intl !== "undefined";
    this.dateTimeFormat = intlDefined && typeof Intl.DateTimeFormat !== "undefined";
    this.numberFormat = intlDefined && typeof Intl.NumberFormat !== "undefined";
  }
}
const linkKeyMatcher = /(?:@(?:\.[a-zA-Z0-9_-]+)?:)(?:[\w\-_|:./]+|\([\w\-_|:./]+\)|(?:\{[^}]+?\}))/g;
const linkKeyPrefixMatcher = /^@(?:\.([a-zA-Z]+))?:/;
const bracketsMatcher = /[()\{\}\']/g;
const defaultModifiers = /* @__PURE__ */ new Map([
  // 转大写
  ["upper", (str) => str.toLocaleUpperCase()],
  // 转小写
  ["lower", (str) => str.toLocaleLowerCase()],
  // 首字母大写
  ["capitalize", (str) => `${str.charAt(0).toLocaleUpperCase()}${str.substring(1)}`]
]);
const DEFAULT_LOCALE = "en-US";
const defaultFormatter = new BaseFormatter();
const availabilities = new AvailabilitiesImpl();
function setTabBarItems(tabbar) {
  if (tabbar == null)
    return;
  const pages = getCurrentPages();
  const page = pages.length > 0 ? pages[pages.length - 1] : null;
  const isTabBar = page != null;
  if (!isTabBar)
    return;
  tabbar.forEach((text, index) => {
    uni.setTabBarItem({
      text,
      index,
      // success() {},
      fail(err) {
        console.warn(err.errMsg);
      }
    });
  });
}
function getLocaleMap(locale, key, options, root = null) {
  const __messages = UTSJSONObject.assign({}, options.getJSON(key) ?? {});
  let map2 = __messages.toMap();
  if (map2.size == 0 && root != null) {
    if (!map2.has(locale)) {
      map2.set(locale, {});
    }
  }
  return map2;
}
function getLocaleTabbarMap(locale, key, options) {
  const __messages = options.getJSON(key) ?? {};
  let map2 = /* @__PURE__ */ new Map();
  __messages.toMap().forEach((tabbar, key2) => {
    if (Array.isArray(tabbar)) {
      map2.set(key2, tabbar);
      if (key2 == locale) {
        setTimeout(() => {
          setTabBarItems(tabbar);
        }, 500);
      }
    }
  });
  return map2;
}
function getModifiers(options) {
  const __modifiers = (options.getJSON("modifiers") ?? {}).toMap();
  const _modifiers = /* @__PURE__ */ new Map();
  __modifiers.forEach((value, key) => {
    if (typeof value == "function") {
      try {
        _modifiers.set(key, value);
      } catch (e) {
        console.warn(35, "自定义修饰器函数必须是类型：(str: string) => string");
      }
    }
  });
  return _modifiers;
}
function getPluralizationRules(options) {
  const __pluralizationRules = (options.getJSON("pluralizationRules") ?? {}).toMap();
  const _pluralizationRules = /* @__PURE__ */ new Map();
  __pluralizationRules.forEach((value, key) => {
    if (typeof value == "function") {
      try {
        _pluralizationRules.set(key, value);
      } catch (e) {
        {
          console.warn(35, "自定义复数化规则函数必须是类型: ( choice: number, choicesLength: number) => number");
        }
      }
    }
  });
  return _pluralizationRules;
}
function getFormatter(options) {
  const __formatter = options.get("formatter");
  return __formatter != null && __formatter instanceof BaseFormatter ? __formatter : defaultFormatter;
}
let composerID = 0;
class ComposerClass {
  /**
   * 构造函数
   * @param options 配置选项
   * @param __root 根Composer实例
   */
  constructor(options = {}, __root = null) {
    // 实例ID
    __publicField(this, "id");
    // 当前语言
    __publicField(this, "locale");
    // 回退语言
    __publicField(this, "fallbackLocale");
    // 语言消息映射
    __publicField(this, "messages");
    // 可用语言列表
    __publicField(this, "availableLocales");
    // 国际化API可用性
    __publicField(this, "availabilities");
    // 插值函数
    __publicField(this, "_interpolate", null);
    // 链接处理函数
    __publicField(this, "_link", null);
    // 默认警告函数
    __publicField(this, "_warnDefault", null);
    // 格式化器
    __publicField(this, "_formatter");
    // 修饰器映射
    __publicField(this, "_modifiers");
    // 复数规则映射
    __publicField(this, "_pluralizationRules");
    // 数字格式映射
    __publicField(this, "_numberFormats");
    // 日期时间格式映射
    __publicField(this, "_datetimeFormats");
    // TabBar映射
    __publicField(this, "_tabBars");
    this._formatter = getFormatter(options);
    this._modifiers = getModifiers(options);
    this._pluralizationRules = getPluralizationRules(options);
    const _inheritLocale = options.getBoolean("inheritLocale") ?? true;
    const useRoot = __root != null && _inheritLocale;
    const __locale = ref(
      useRoot ? __root.locale.value : options.getString("locale") ?? DEFAULT_LOCALE
    );
    const _fallbackLocale = ref(
      useRoot ? __root.fallbackLocale.value : options.get("fallbackLocale")
    );
    this.messages = ref(getLocaleMap(__locale.value, "messages", options, __root));
    this._numberFormats = ref(getLocaleMap(__locale.value, "numberFormats", options, __root));
    this._datetimeFormats = ref(getLocaleMap(__locale.value, "datetimeFormats", options, __root));
    this._tabBars = ref(getLocaleTabbarMap(__locale.value, "tabBars", options));
    this.locale = computed({
      set: (val) => {
        __locale.value = val;
        if (__root == null) {
          uni.setStorageSync("uVueI18nLocale", val);
        }
        setTabBarItems(this._tabBars.value.get(val));
      },
      get: () => {
        return __locale.value;
      }
    });
    this.fallbackLocale = computed({
      set: (val) => {
        _fallbackLocale.value = val;
      },
      get: () => {
        return _fallbackLocale.value ?? false;
      }
    });
    this.availableLocales = getAllKeys(this.messages.value).sort();
    this.availabilities = availabilities;
    this._initMethods();
    composerID++;
    this.id = composerID;
    const interceptor = {
      complete: (_) => {
        setTimeout(() => {
          setTabBarItems(this._tabBars.value.get(this.locale.value));
        }, 50);
      }
    };
    if (__root == null) {
      uni.addInterceptor("switchTab", interceptor);
    }
  }
  /**
   * 初始化内部方法
   */
  _initMethods() {
    this._link = (str, locale, values, visitedLinkStack, interpolateMode) => {
      const matches = str.match(linkKeyMatcher);
      let ret = str;
      if (matches == null)
        return str;
      for (let i = 0; i < matches.length; i++) {
        const link = matches[i];
        const linkKeyPrefixMatches = link.match(linkKeyPrefixMatcher);
        if (linkKeyPrefixMatches == null)
          continue;
        const [linkPrefix, formatterName] = linkKeyPrefixMatches;
        const linkPlaceholder = link.replace(linkPrefix, "").replace(bracketsMatcher, "");
        if (visitedLinkStack.includes(linkPlaceholder)) {
          console.warn(`发现循环引用。"${link}"已经在link"已经在${visitedLinkStack.reverse().join(" <- ")}链中访问过`);
          return ret;
        }
        if (this._interpolate == null || this._warnDefault == null) {
          return ret;
        }
        visitedLinkStack.push(linkPlaceholder);
        let translated = this._interpolate(linkPlaceholder, locale, values, visitedLinkStack, interpolateMode);
        translated = this._warnDefault(linkPlaceholder, translated, values, interpolateMode);
        if (this._modifiers.size > 0 && formatterName != null && this._modifiers.has(formatterName))
          ;
        else if (translated != null && formatterName != null && defaultModifiers.has(formatterName)) {
          const modifier = defaultModifiers.get(formatterName);
          translated = modifier(translated);
        }
        visitedLinkStack.pop();
        ret = translated == null ? ret : ret.replace(link, translated);
      }
      return ret;
    };
    this._interpolate = (key, locale, values, visitedLinkStack, interpolateMode) => {
      var _a, _b, _c;
      const ___locale = locale ?? this.locale.value;
      let ret = (_a = UTSJSONObject.assign({}, this.messages.value.get(___locale) ?? {})) == null ? void 0 : _a.getString(key);
      if (this.fallbackLocale.value != false && ret == null) {
        if (typeof this.fallbackLocale.value == "string" && ___locale != this.fallbackLocale.value) {
          ret = ((_b = this.messages.value.get(this.fallbackLocale.value)) == null ? void 0 : _b.getString(key)) ?? ret;
        } else if (Array.isArray(this.fallbackLocale.value)) {
          const arr = this.fallbackLocale.value;
          for (let i = 0; i < arr.length; i++) {
            const _ret = (_c = this.messages.value.get(arr[i])) == null ? void 0 : _c.getString(key);
            if (_ret != null) {
              ret = _ret;
              break;
            }
          }
        }
      }
      if (typeof ret == "string" && (ret.indexOf("@:") >= 0 || ret.indexOf("@.") >= 0)) {
        ret = this._link(ret, locale, values, visitedLinkStack, interpolateMode);
      }
      return ret;
    };
    this._warnDefault = (key, message, values, interpolateMode) => {
      if (message == null) {
        console.warn(`无法翻译键路径 '${key}'. 使用键路径的值作为默认值.`);
      }
      if (message == null)
        return null;
      if (key == message)
        return key;
      return this._render(message, values, interpolateMode);
    };
  }
  /**
   * 渲染消息
   * @param message 消息模板
   * @param values 插值值
   * @param interpolateMode 插值模式
   * @returns 渲染后的字符串
   */
  _render(message, values, interpolateMode) {
    const ret = this._formatter.interpolate(message, values);
    return interpolateMode == "string" ? `${ret.join("")}` : JSON.stringify(ret);
  }
  /**
   * 获取复数形式
   * @param message 消息模板
   * @param choice 选择值
   * @param locale 语言
   * @returns 复数形式的消息
   */
  fetchChoice(message, choice = null, locale = null) {
    if (message == "")
      return message;
    const choices = message.split("|");
    const defaultImpl = (_choice, _choicesLength) => {
      _choice = Math.abs(_choice ?? 1);
      if (_choicesLength == 2) {
        return _choice != 0 ? _choice > 1 ? 1 : 0 : 1;
      }
      return _choice != 0 ? Math.min(_choice, 2) : 0;
    };
    let index;
    if (this._pluralizationRules.has(locale ?? this.locale.value)) {
      index = this._pluralizationRules.get(locale ?? this.locale.value)(choice ?? 1, choices.length);
    } else {
      index = defaultImpl(choice, choices.length);
    }
    if (choices[index] == "")
      return message;
    return choices[index].trim();
  }
  /**
   * 翻译方法
   * @param key 翻译键
   * @param values 插值值
   * @param locale 语言
   * @returns 翻译后的字符串
   */
  t(key, values = null, locale = null) {
    const parsedArgs = values ?? {};
    if (this._warnDefault == null || this._interpolate == null)
      return "";
    const msg = this._warnDefault(
      key,
      this._interpolate(
        key,
        locale,
        parsedArgs,
        [key],
        "string"
      ),
      parsedArgs,
      "string"
    );
    return msg ?? "";
  }
  /**
   * 带复数的翻译方法
   * @param key 翻译键
   * @param choice 选择值
   * @param values 插值值
   * @param locale 语言
   * @returns 翻译后的字符串
   */
  tc(key, choice = null, values = null, locale = null) {
    const _obj = { "count": choice, "n": choice };
    const predefined = values == null ? _obj : values instanceof UTSJSONObject ? UTSJSONObject.assign(_obj, values) : values;
    return this.fetchChoice(this.t(key, predefined, locale), choice, locale);
  }
  /**
   * 日期格式化方法
   * @param date 日期
   * @param key 格式键
   * @param locale 语言
   * @param options 格式化选项
   * @returns 格式化后的日期字符串
   */
  d(date, key = null, locale = null, options = null) {
    if (!this.availabilities.dateTimeFormat) {
      console.warn(`无法格式化日期值，因为不支持 Intl.DateTimeFormat. key: ${key}, locale: ${locale}, options: ${options}`);
      return `${date}`;
    }
    const __locale = locale ?? this.locale.value;
    if (key == null) {
      const dtf = options == null ? new Intl.DateTimeFormat(__locale) : new Intl.DateTimeFormat(__locale, options);
      return dtf.format(date);
    }
    const formats = this._datetimeFormats.value.get(__locale);
    let formatter;
    if (formats == null || formats.getJSON(key) == null) {
      console.warn(`回退到根号下的日期时间本地化：key '${key}'。`);
      return `${date}`;
    }
    const format = formats.getJSON(key) ?? {};
    if (options != null) {
      formatter = new Intl.DateTimeFormat(__locale, Object.assign({}, format, options));
    } else {
      formatter = new Intl.DateTimeFormat(__locale, format);
    }
    return formatter.format(date);
  }
  /**
   * 数字格式化方法
   * @param number 数字
   * @param key 格式键
   * @param locale 语言
   * @param options 格式化选项
   * @returns 格式化后的数字字符串
   */
  n(number, key = null, locale = null, options = null) {
    if (!this.availabilities.numberFormat) {
      console.warn(`无法格式化数字值，因为不支持 Intl.NumberFormat. key: ${key}, locale: ${locale}, options: ${options}`);
      return number.toString();
    }
    const __locale = locale ?? this.locale.value;
    if (key == null) {
      const nf = options == null ? new Intl.NumberFormat(__locale) : new Intl.NumberFormat(locale, options);
      return nf.format(number);
    }
    const formats = this._numberFormats.value.get(__locale);
    let formatter;
    if (formats == null || formats.getJSON(key) == null) {
      console.warn(`回退到根号下的数字本地化：key '${key}'`);
      return number.toString();
    }
    const format = formats.getJSON(key);
    if (options != null) {
      formatter = new Intl.NumberFormat(__locale, Object.assign({}, format, options));
    } else {
      formatter = new Intl.NumberFormat(__locale, format);
    }
    if (formatter) {
      return formatter.format(number);
    }
    return number.toString();
  }
  /**
   * 设置语言消息
   * @param locale 语言
   * @param message 消息对象
   */
  setLocaleMessage(locale, message) {
    const map2 = /* @__PURE__ */ new Map();
    this.messages.value.forEach((value, key) => {
      map2.set(key, value);
    });
    map2.set(locale, message);
    this.messages.value = map2;
    this.availableLocales = getAllKeys(map2).sort();
  }
  /**
   * 获取语言消息
   * @param locale 语言
   * @returns 消息对象
   */
  getLocaleMessage(locale) {
    return this.messages.value.get(locale) ?? {};
  }
  /**
   * 合并语言消息
   * @param locale 语言
   * @param message 消息对象
   */
  mergeLocaleMessage(locale, message) {
    const map2 = /* @__PURE__ */ new Map();
    this.messages.value.forEach((value, key) => {
      if (key == locale) {
        map2.set(key, UTSJSONObject.assign({}, value, message));
      } else {
        map2.set(key, value);
      }
    });
    this.messages.value = map2;
    this.availableLocales = getAllKeys(map2).sort();
  }
  /**
   * 设置日期时间格式
   * @param locale 语言
   * @param format 格式对象
   */
  setDateTimeFormat(locale, format) {
    const map2 = /* @__PURE__ */ new Map();
    this._datetimeFormats.value.forEach((value, key) => {
      map2.set(key, value);
    });
    map2.set(locale, format);
    this._datetimeFormats.value = map2;
  }
  /**
   * 获取日期时间格式
   * @param locale 语言
   * @returns 格式对象
   */
  getDateTimeFormat(locale) {
    return this._datetimeFormats.value.get(locale) ?? {};
  }
  /**
   * 合并日期时间格式
   * @param locale 语言
   * @param format 格式对象
   */
  mergeDateTimeFormat(locale, format) {
    const map2 = /* @__PURE__ */ new Map();
    this._datetimeFormats.value.forEach((value, key) => {
      if (key == locale) {
        map2.set(key, UTSJSONObject.assign({}, value, format));
      } else {
        map2.set(key, value);
      }
    });
    this._datetimeFormats.value = map2;
  }
  /**
   * 设置数字格式
   * @param locale 语言
   * @param format 格式对象
   */
  setNumberFormat(locale, format) {
    const map2 = /* @__PURE__ */ new Map();
    this._numberFormats.value.forEach((value, key) => {
      map2.set(key, value);
    });
    map2.set(locale, format);
    this._numberFormats.value = map2;
  }
  /**
   * 获取数字格式
   * @param locale 语言
   * @returns 格式对象
   */
  getNumberFormat(locale) {
    return this._numberFormats.value.get(locale) ?? {};
  }
  /**
   * 合并数字格式
   * @param locale 语言
   * @param format 格式对象
   */
  mergeNumberFormat(locale, format) {
    const map2 = /* @__PURE__ */ new Map();
    this._numberFormats.value.forEach((value, key) => {
      if (key == locale) {
        map2.set(key, UTSJSONObject.assign({}, value, format));
      } else {
        map2.set(key, value);
      }
    });
    this._numberFormats.value = map2;
  }
  /**
   * 设置TabBar
   * @param locale 语言
   * @param tabbar TabBar文本数组
   */
  setTabBar(locale, tabbar) {
    const map2 = /* @__PURE__ */ new Map();
    this._tabBars.value.forEach((value, key) => {
      map2.set(key, value);
    });
    map2.set(locale, tabbar);
    this._tabBars.value = map2;
  }
  /**
   * 获取TabBar
   * @param locale 语言
   * @returns TabBar文本数组
   */
  getTabBar(locale) {
    return this._tabBars.value.get(locale) ?? [];
  }
}
function createComposer(options = {}, __root = null) {
  return new ComposerClass(options, __root);
}
let lime_i18n = null;
class UvueI18n {
  constructor(options = {}, root = null) {
    __publicField(this, "__global");
    __publicField(this, "__scope");
    this.__scope = effectScope();
    this.__global = this.__scope.run(() => createComposer(UTSJSONObject.assign({}, options), root));
  }
  get mode() {
    return "composition";
  }
  get global() {
    return this.__global;
  }
  get availableLocales() {
    return getAllKeys(this.global.messages.value).sort();
  }
  dispose() {
    this.__scope.stop();
  }
  $t(key, values = null, locale = null) {
    const isLocale = typeof values == "string";
    const _values = isLocale ? null : values;
    const _locale = isLocale ? values : locale;
    return this.global.t(key, _values, _locale);
  }
  $tc(key, choice = null, values = null, locale = null) {
    const isLocale = typeof values == "string";
    const _values = isLocale ? null : values;
    const _locale = isLocale ? values : locale;
    return this.global.tc(key, choice, _values, _locale);
  }
  $d(date, key = null, locale = null, options = null) {
    return this.global.d(date, key, locale, options);
  }
  $n(number, key = null, locale = null, options = null) {
    const _locale = typeof locale == "string" ? locale : null;
    const _options = typeof locale == "object" && locale != null ? locale : options;
    return this.global.n(number, key, _locale, _options);
  }
  get install() {
    const _install = (app) => {
      app.config.globalProperties.$i18n = lime_i18n;
      app.config.globalProperties.$t = function(key, values = null, locale = null) {
        const isLocale = typeof values == "string";
        const _values = isLocale ? null : values;
        const _locale = isLocale ? values : locale;
        return lime_i18n.global.t(key, _values, _locale);
      };
      app.config.globalProperties.$tc = function(key, choice = null, values = null, locale = null) {
        const isLocale = typeof values == "string";
        const _values = isLocale ? null : values;
        const _locale = isLocale ? values : locale;
        return lime_i18n.global.tc(key, choice, _values, _locale);
      };
      app.config.globalProperties.$d = function(date, key = null, locale = null, options = null) {
        return lime_i18n.global.d(date, key, locale, options);
      };
      app.config.globalProperties.$n = function(number, key = null, locale = null, options = null) {
        const _locale = typeof locale == "string" ? locale : null;
        const _options = typeof locale == "object" && locale != null ? locale : options;
        return lime_i18n.global.n(number, key, _locale, _options);
      };
      app.config.globalProperties.$locale = lime_i18n.global.locale;
    };
    return _install;
  }
}
function createI18n(options = {}) {
  lime_i18n = new UvueI18n(options);
  return lime_i18n;
}
const zhCN = {
  message: {
    hello: "{msg}，世界！",
    welcome: "欢迎使用 unibestX！",
    switch_success: "切换为简体中文"
  },
  tabbar: {
    home: "首页",
    basic: "基础",
    ai: "AI",
    function: "功能",
    me: "我的"
  },
  basic: {
    iconDemoTitle: "字体图标示例",
    svgAuthWarning: "SVG模式需授权收费",
    langTitle: "语言设置",
    langPreview: "多语言文本预览",
    themeTitle: "主题设置",
    themePreview: "主题色效果预览",
    themeButton: "主题按钮",
    themeSuccess: "主题切换成功",
    echartTitle: "ECharts 图表示例",
    echartLine: "折线图",
    echartBar: "柱状图",
    echartPie: "饼图"
  },
  function: {
    sysInfoTitle: "设备系统信息",
    brand: "手机品牌",
    model: "手机型号",
    system: "操作系统",
    platform: "运行平台",
    getSysInfoBtn: "获取系统信息",
    hapticsTitle: "触感与工具",
    vibrateBtn: "短震动反馈",
    vibrateSuccess: "已触发短震动",
    copyBtn: "复制测试文本",
    copySuccess: "复制成功",
    mediaTitle: "相机与多媒体",
    choosePhotoBtn: "拍摄/选择照片",
    scanCodeBtn: "扫码测试",
    scanResult: "扫码结果",
    noData: "暂无数据"
  }
};
const enUS = {
  message: {
    hello: "The world says {msg}!",
    welcome: "Welcome to use unibestX!",
    switch_success: "Switched to English"
  },
  tabbar: {
    home: "Home",
    basic: "Basic",
    ai: "AI",
    function: "Function",
    me: "Me"
  },
  basic: {
    iconDemoTitle: "Font Icon Demo",
    svgAuthWarning: "SVG mode requires authorization & fee",
    langTitle: "Language Settings",
    langPreview: "Multi-language Preview",
    themeTitle: "Theme Settings",
    themePreview: "Theme Color Preview",
    themeButton: "Theme Button",
    themeSuccess: "Theme switched successfully",
    echartTitle: "ECharts Chart Demo",
    echartLine: "Line Chart",
    echartBar: "Bar Chart",
    echartPie: "Pie Chart"
  },
  function: {
    sysInfoTitle: "Device System Info",
    brand: "Brand",
    model: "Model",
    system: "OS",
    platform: "Platform",
    getSysInfoBtn: "Get System Info",
    hapticsTitle: "Haptics & Utilities",
    vibrateBtn: "Short Vibration Feedback",
    vibrateSuccess: "Vibration triggered",
    copyBtn: "Copy Test Text",
    copySuccess: "Copied successfully",
    mediaTitle: "Camera & Media",
    choosePhotoBtn: "Take Photo/Choose Image",
    scanCodeBtn: "Scan Code Test",
    scanResult: "Scan Result",
    noData: "No data"
  }
};
createI18n({
  // 使用uni.getStorageSync('uVueI18nLocale') 能获取上次退出应用后保存的语言
  locale: "zh-CN",
  // 默认显示语言
  fallbackLocale: "en-US",
  messages: {
    "zh-CN": zhCN,
    "en-US": enUS
  }
});
function getSystemLocale() {
  try {
    const sysInfo = uni.getSystemInfoSync();
    const appLang = sysInfo.appLanguage;
    if (appLang != null && appLang.toLowerCase().includes("zh")) {
      return "zh-CN";
    }
    if (appLang != null && appLang.toLowerCase().includes("en")) {
      return "en-US";
    }
  } catch (e) {
  }
  return "zh-CN";
}
({
  locale: getSystemLocale()
});
const pinia = createPinia();
pinia.use(createPersistPlugin({
  keyPrefix: "pinia:",
  includeStores: ["token", "user", "app"],
  // 持久化 token, user 和 app store
  excludeStores: [],
  serializer: null
}));
