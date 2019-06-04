"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const impl = utils.implSymbol;
const HTMLElement = require("./HTMLElement.js");
const LinkStyle = require("./LinkStyle.js");

class HTMLStyleElement extends HTMLElement.interface {
  constructor() {
    throw new TypeError("Illegal constructor");
  }

  get media() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    const value = this.getAttributeNS(null, "media");
    return value === null ? "" : value;
  }

  set media(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["DOMString"](V, {
      context: "Failed to set the 'media' property on 'HTMLStyleElement': The provided value"
    });

    this.setAttributeNS(null, "media", V);
  }

  get nonce() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    const value = this.getAttributeNS(null, "nonce");
    return value === null ? "" : value;
  }

  set nonce(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["DOMString"](V, {
      context: "Failed to set the 'nonce' property on 'HTMLStyleElement': The provided value"
    });

    this.setAttributeNS(null, "nonce", V);
  }

  get type() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    const value = this.getAttributeNS(null, "type");
    return value === null ? "" : value;
  }

  set type(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["DOMString"](V, {
      context: "Failed to set the 'type' property on 'HTMLStyleElement': The provided value"
    });

    this.setAttributeNS(null, "type", V);
  }

  get sheet() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["sheet"]);
  }
}
Object.defineProperties(HTMLStyleElement.prototype, {
  media: { enumerable: true },
  nonce: { enumerable: true },
  type: { enumerable: true },
  sheet: { enumerable: true },
  [Symbol.toStringTag]: { value: "HTMLStyleElement", configurable: true }
});
const iface = {
  // When an interface-module that implements this interface as a mixin is loaded, it will append its own `.is()`
  // method into this array. It allows objects that directly implements *those* interfaces to be recognized as
  // implementing this mixin interface.
  _mixedIntoPredicates: [],
  is(obj) {
    if (obj) {
      if (utils.hasOwn(obj, impl) && obj[impl] instanceof Impl.implementation) {
        return true;
      }
      for (const isMixedInto of module.exports._mixedIntoPredicates) {
        if (isMixedInto(obj)) {
          return true;
        }
      }
    }
    return false;
  },
  isImpl(obj) {
    if (obj) {
      if (obj instanceof Impl.implementation) {
        return true;
      }

      const wrapper = utils.wrapperForImpl(obj);
      for (const isMixedInto of module.exports._mixedIntoPredicates) {
        if (isMixedInto(wrapper)) {
          return true;
        }
      }
    }
    return false;
  },
  convert(obj, { context = "The provided value" } = {}) {
    if (module.exports.is(obj)) {
      return utils.implForWrapper(obj);
    }
    throw new TypeError(`${context} is not of type 'HTMLStyleElement'.`);
  },

  create(constructorArgs, privateData) {
    let obj = Object.create(HTMLStyleElement.prototype);
    obj = this.setup(obj, constructorArgs, privateData);
    return obj;
  },
  createImpl(constructorArgs, privateData) {
    let obj = Object.create(HTMLStyleElement.prototype);
    obj = this.setup(obj, constructorArgs, privateData);
    return utils.implForWrapper(obj);
  },
  _internalSetup(obj) {
    HTMLElement._internalSetup(obj);
  },
  setup(obj, constructorArgs, privateData) {
    if (!privateData) privateData = {};

    privateData.wrapper = obj;

    this._internalSetup(obj);
    Object.defineProperty(obj, impl, {
      value: new Impl.implementation(constructorArgs, privateData),
      configurable: true
    });

    obj[impl][utils.wrapperSymbol] = obj;
    if (Impl.init) {
      Impl.init(obj[impl], privateData);
    }
    return obj;
  },
  interface: HTMLStyleElement,
  expose: {
    Window: { HTMLStyleElement }
  }
}; // iface
module.exports = iface;

LinkStyle._mixedIntoPredicates.push(module.exports.is);

const Impl = require("../nodes/HTMLStyleElement-impl.js");
