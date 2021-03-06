"use strict";

const conversions = require("webidl-conversions");
const utils = require("./utils.js");

const impl = utils.implSymbol;
const Element = require("./Element.js");
const ElementCSSInlineStyle = require("./ElementCSSInlineStyle.js");
const GlobalEventHandlers = require("./GlobalEventHandlers.js");
const ElementContentEditable = require("./ElementContentEditable.js");

class HTMLElement extends Element.interface {
  constructor() {
    throw new TypeError("Illegal constructor");
  }

  click() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl].click();
  }

  focus() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl].focus();
  }

  blur() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl].blur();
  }

  get title() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    const value = this.getAttributeNS(null, "title");
    return value === null ? "" : value;
  }

  set title(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["DOMString"](V, {
      context: "Failed to set the 'title' property on 'HTMLElement': The provided value"
    });

    this.setAttributeNS(null, "title", V);
  }

  get lang() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    const value = this.getAttributeNS(null, "lang");
    return value === null ? "" : value;
  }

  set lang(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["DOMString"](V, {
      context: "Failed to set the 'lang' property on 'HTMLElement': The provided value"
    });

    this.setAttributeNS(null, "lang", V);
  }

  get dir() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["dir"];
  }

  set dir(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["DOMString"](V, {
      context: "Failed to set the 'dir' property on 'HTMLElement': The provided value"
    });

    this[impl]["dir"] = V;
  }

  get dataset() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.getSameObject(this, "dataset", () => {
      return utils.tryWrapperForImpl(this[impl]["dataset"]);
    });
  }

  get hidden() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this.hasAttributeNS(null, "hidden");
  }

  set hidden(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["boolean"](V, {
      context: "Failed to set the 'hidden' property on 'HTMLElement': The provided value"
    });

    if (V) {
      this.setAttributeNS(null, "hidden", "");
    } else {
      this.removeAttributeNS(null, "hidden");
    }
  }

  get tabIndex() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["tabIndex"];
  }

  set tabIndex(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["long"](V, {
      context: "Failed to set the 'tabIndex' property on 'HTMLElement': The provided value"
    });

    this[impl]["tabIndex"] = V;
  }

  get accessKey() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    const value = this.getAttributeNS(null, "accesskey");
    return value === null ? "" : value;
  }

  set accessKey(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["DOMString"](V, {
      context: "Failed to set the 'accessKey' property on 'HTMLElement': The provided value"
    });

    this.setAttributeNS(null, "accesskey", V);
  }

  get draggable() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["draggable"];
  }

  set draggable(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = conversions["boolean"](V, {
      context: "Failed to set the 'draggable' property on 'HTMLElement': The provided value"
    });

    this[impl]["draggable"] = V;
  }

  get offsetParent() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["offsetParent"]);
  }

  get offsetTop() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["offsetTop"];
  }

  get offsetLeft() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["offsetLeft"];
  }

  get offsetWidth() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["offsetWidth"];
  }

  get offsetHeight() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return this[impl]["offsetHeight"];
  }

  get style() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.getSameObject(this, "style", () => {
      return utils.tryWrapperForImpl(this[impl]["style"]);
    });
  }

  set style(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    this.style.cssText = V;
  }

  get onabort() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["onabort"]);
  }

  set onabort(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["onabort"] = V;
  }

  get onauxclick() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["onauxclick"]);
  }

  set onauxclick(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["onauxclick"] = V;
  }

  get onblur() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["onblur"]);
  }

  set onblur(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["onblur"] = V;
  }

  get oncancel() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["oncancel"]);
  }

  set oncancel(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["oncancel"] = V;
  }

  get oncanplay() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["oncanplay"]);
  }

  set oncanplay(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["oncanplay"] = V;
  }

  get oncanplaythrough() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["oncanplaythrough"]);
  }

  set oncanplaythrough(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["oncanplaythrough"] = V;
  }

  get onchange() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["onchange"]);
  }

  set onchange(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["onchange"] = V;
  }

  get onclick() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["onclick"]);
  }

  set onclick(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["onclick"] = V;
  }

  get onclose() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["onclose"]);
  }

  set onclose(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["onclose"] = V;
  }

  get oncontextmenu() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["oncontextmenu"]);
  }

  set oncontextmenu(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["oncontextmenu"] = V;
  }

  get oncuechange() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["oncuechange"]);
  }

  set oncuechange(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["oncuechange"] = V;
  }

  get ondblclick() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["ondblclick"]);
  }

  set ondblclick(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["ondblclick"] = V;
  }

  get ondrag() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["ondrag"]);
  }

  set ondrag(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["ondrag"] = V;
  }

  get ondragend() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["ondragend"]);
  }

  set ondragend(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["ondragend"] = V;
  }

  get ondragenter() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["ondragenter"]);
  }

  set ondragenter(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["ondragenter"] = V;
  }

  get ondragexit() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["ondragexit"]);
  }

  set ondragexit(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["ondragexit"] = V;
  }

  get ondragleave() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["ondragleave"]);
  }

  set ondragleave(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["ondragleave"] = V;
  }

  get ondragover() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["ondragover"]);
  }

  set ondragover(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["ondragover"] = V;
  }

  get ondragstart() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["ondragstart"]);
  }

  set ondragstart(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["ondragstart"] = V;
  }

  get ondrop() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["ondrop"]);
  }

  set ondrop(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["ondrop"] = V;
  }

  get ondurationchange() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["ondurationchange"]);
  }

  set ondurationchange(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["ondurationchange"] = V;
  }

  get onemptied() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["onemptied"]);
  }

  set onemptied(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["onemptied"] = V;
  }

  get onended() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["onended"]);
  }

  set onended(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["onended"] = V;
  }

  get onerror() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["onerror"]);
  }

  set onerror(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["onerror"] = V;
  }

  get onfocus() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["onfocus"]);
  }

  set onfocus(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["onfocus"] = V;
  }

  get oninput() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["oninput"]);
  }

  set oninput(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["oninput"] = V;
  }

  get oninvalid() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["oninvalid"]);
  }

  set oninvalid(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["oninvalid"] = V;
  }

  get onkeydown() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["onkeydown"]);
  }

  set onkeydown(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["onkeydown"] = V;
  }

  get onkeypress() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["onkeypress"]);
  }

  set onkeypress(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["onkeypress"] = V;
  }

  get onkeyup() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["onkeyup"]);
  }

  set onkeyup(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["onkeyup"] = V;
  }

  get onload() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["onload"]);
  }

  set onload(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["onload"] = V;
  }

  get onloadeddata() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["onloadeddata"]);
  }

  set onloadeddata(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["onloadeddata"] = V;
  }

  get onloadedmetadata() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["onloadedmetadata"]);
  }

  set onloadedmetadata(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["onloadedmetadata"] = V;
  }

  get onloadend() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["onloadend"]);
  }

  set onloadend(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["onloadend"] = V;
  }

  get onloadstart() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["onloadstart"]);
  }

  set onloadstart(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["onloadstart"] = V;
  }

  get onmousedown() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["onmousedown"]);
  }

  set onmousedown(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["onmousedown"] = V;
  }

  get onmouseenter() {
    return utils.tryWrapperForImpl(this[impl]["onmouseenter"]);
  }

  set onmouseenter(V) {
    V = utils.tryImplForWrapper(V);

    this[impl]["onmouseenter"] = V;
  }

  get onmouseleave() {
    return utils.tryWrapperForImpl(this[impl]["onmouseleave"]);
  }

  set onmouseleave(V) {
    V = utils.tryImplForWrapper(V);

    this[impl]["onmouseleave"] = V;
  }

  get onmousemove() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["onmousemove"]);
  }

  set onmousemove(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["onmousemove"] = V;
  }

  get onmouseout() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["onmouseout"]);
  }

  set onmouseout(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["onmouseout"] = V;
  }

  get onmouseover() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["onmouseover"]);
  }

  set onmouseover(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["onmouseover"] = V;
  }

  get onmouseup() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["onmouseup"]);
  }

  set onmouseup(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["onmouseup"] = V;
  }

  get onwheel() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["onwheel"]);
  }

  set onwheel(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["onwheel"] = V;
  }

  get onpause() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["onpause"]);
  }

  set onpause(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["onpause"] = V;
  }

  get onplay() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["onplay"]);
  }

  set onplay(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["onplay"] = V;
  }

  get onplaying() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["onplaying"]);
  }

  set onplaying(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["onplaying"] = V;
  }

  get onprogress() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["onprogress"]);
  }

  set onprogress(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["onprogress"] = V;
  }

  get onratechange() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["onratechange"]);
  }

  set onratechange(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["onratechange"] = V;
  }

  get onreset() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["onreset"]);
  }

  set onreset(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["onreset"] = V;
  }

  get onresize() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["onresize"]);
  }

  set onresize(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["onresize"] = V;
  }

  get onscroll() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["onscroll"]);
  }

  set onscroll(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["onscroll"] = V;
  }

  get onsecuritypolicyviolation() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["onsecuritypolicyviolation"]);
  }

  set onsecuritypolicyviolation(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["onsecuritypolicyviolation"] = V;
  }

  get onseeked() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["onseeked"]);
  }

  set onseeked(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["onseeked"] = V;
  }

  get onseeking() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["onseeking"]);
  }

  set onseeking(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["onseeking"] = V;
  }

  get onselect() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["onselect"]);
  }

  set onselect(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["onselect"] = V;
  }

  get onstalled() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["onstalled"]);
  }

  set onstalled(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["onstalled"] = V;
  }

  get onsubmit() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["onsubmit"]);
  }

  set onsubmit(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["onsubmit"] = V;
  }

  get onsuspend() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["onsuspend"]);
  }

  set onsuspend(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["onsuspend"] = V;
  }

  get ontimeupdate() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["ontimeupdate"]);
  }

  set ontimeupdate(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["ontimeupdate"] = V;
  }

  get ontoggle() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["ontoggle"]);
  }

  set ontoggle(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["ontoggle"] = V;
  }

  get onvolumechange() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["onvolumechange"]);
  }

  set onvolumechange(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["onvolumechange"] = V;
  }

  get onwaiting() {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    return utils.tryWrapperForImpl(this[impl]["onwaiting"]);
  }

  set onwaiting(V) {
    if (!this || !module.exports.is(this)) {
      throw new TypeError("Illegal invocation");
    }

    V = utils.tryImplForWrapper(V);

    this[impl]["onwaiting"] = V;
  }
}
Object.defineProperties(HTMLElement.prototype, {
  click: { enumerable: true },
  focus: { enumerable: true },
  blur: { enumerable: true },
  title: { enumerable: true },
  lang: { enumerable: true },
  dir: { enumerable: true },
  dataset: { enumerable: true },
  hidden: { enumerable: true },
  tabIndex: { enumerable: true },
  accessKey: { enumerable: true },
  draggable: { enumerable: true },
  offsetParent: { enumerable: true },
  offsetTop: { enumerable: true },
  offsetLeft: { enumerable: true },
  offsetWidth: { enumerable: true },
  offsetHeight: { enumerable: true },
  style: { enumerable: true },
  onabort: { enumerable: true },
  onauxclick: { enumerable: true },
  onblur: { enumerable: true },
  oncancel: { enumerable: true },
  oncanplay: { enumerable: true },
  oncanplaythrough: { enumerable: true },
  onchange: { enumerable: true },
  onclick: { enumerable: true },
  onclose: { enumerable: true },
  oncontextmenu: { enumerable: true },
  oncuechange: { enumerable: true },
  ondblclick: { enumerable: true },
  ondrag: { enumerable: true },
  ondragend: { enumerable: true },
  ondragenter: { enumerable: true },
  ondragexit: { enumerable: true },
  ondragleave: { enumerable: true },
  ondragover: { enumerable: true },
  ondragstart: { enumerable: true },
  ondrop: { enumerable: true },
  ondurationchange: { enumerable: true },
  onemptied: { enumerable: true },
  onended: { enumerable: true },
  onerror: { enumerable: true },
  onfocus: { enumerable: true },
  oninput: { enumerable: true },
  oninvalid: { enumerable: true },
  onkeydown: { enumerable: true },
  onkeypress: { enumerable: true },
  onkeyup: { enumerable: true },
  onload: { enumerable: true },
  onloadeddata: { enumerable: true },
  onloadedmetadata: { enumerable: true },
  onloadend: { enumerable: true },
  onloadstart: { enumerable: true },
  onmousedown: { enumerable: true },
  onmouseenter: { enumerable: true },
  onmouseleave: { enumerable: true },
  onmousemove: { enumerable: true },
  onmouseout: { enumerable: true },
  onmouseover: { enumerable: true },
  onmouseup: { enumerable: true },
  onwheel: { enumerable: true },
  onpause: { enumerable: true },
  onplay: { enumerable: true },
  onplaying: { enumerable: true },
  onprogress: { enumerable: true },
  onratechange: { enumerable: true },
  onreset: { enumerable: true },
  onresize: { enumerable: true },
  onscroll: { enumerable: true },
  onsecuritypolicyviolation: { enumerable: true },
  onseeked: { enumerable: true },
  onseeking: { enumerable: true },
  onselect: { enumerable: true },
  onstalled: { enumerable: true },
  onsubmit: { enumerable: true },
  onsuspend: { enumerable: true },
  ontimeupdate: { enumerable: true },
  ontoggle: { enumerable: true },
  onvolumechange: { enumerable: true },
  onwaiting: { enumerable: true },
  [Symbol.toStringTag]: { value: "HTMLElement", configurable: true }
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
    throw new TypeError(`${context} is not of type 'HTMLElement'.`);
  },

  create(constructorArgs, privateData) {
    let obj = Object.create(HTMLElement.prototype);
    obj = this.setup(obj, constructorArgs, privateData);
    return obj;
  },
  createImpl(constructorArgs, privateData) {
    let obj = Object.create(HTMLElement.prototype);
    obj = this.setup(obj, constructorArgs, privateData);
    return utils.implForWrapper(obj);
  },
  _internalSetup(obj) {
    Element._internalSetup(obj);
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
  interface: HTMLElement,
  expose: {
    Window: { HTMLElement }
  }
}; // iface
module.exports = iface;

ElementCSSInlineStyle._mixedIntoPredicates.push(module.exports.is);

GlobalEventHandlers._mixedIntoPredicates.push(module.exports.is);

ElementContentEditable._mixedIntoPredicates.push(module.exports.is);

const Impl = require("../nodes/HTMLElement-impl.js");
