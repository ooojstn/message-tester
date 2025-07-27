var Br = Object.defineProperty;
var qr = (e, t, n) => t in e ? Br(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[t] = n;
var Kn = (e, t, n) => qr(e, typeof t != "symbol" ? t + "" : t, n);
/**
* @vue/shared v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Ze(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const B = process.env.NODE_ENV !== "production" ? Object.freeze({}) : {}, Dt = process.env.NODE_ENV !== "production" ? Object.freeze([]) : [], se = () => {
}, Gr = () => !1, Zt = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), vn = (e) => e.startsWith("onUpdate:"), ee = Object.assign, bs = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, zr = Object.prototype.hasOwnProperty, k = (e, t) => zr.call(e, t), M = Array.isArray, pt = (e) => Tn(e) === "[object Map]", Vo = (e) => Tn(e) === "[object Set]", A = (e) => typeof e == "function", X = (e) => typeof e == "string", lt = (e) => typeof e == "symbol", G = (e) => e !== null && typeof e == "object", ys = (e) => (G(e) || A(e)) && A(e.then) && A(e.catch), Co = Object.prototype.toString, Tn = (e) => Co.call(e), Es = (e) => Tn(e).slice(8, -1), Mo = (e) => Tn(e) === "[object Object]", Ns = (e) => X(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Lt = /* @__PURE__ */ Ze(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Jr = /* @__PURE__ */ Ze(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), Vn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, Yr = /-(\w)/g, Ve = Vn(
  (e) => e.replace(Yr, (t, n) => n ? n.toUpperCase() : "")
), Xr = /\B([A-Z])/g, Xe = Vn(
  (e) => e.replace(Xr, "-$1").toLowerCase()
), Cn = Vn((e) => e.charAt(0).toUpperCase() + e.slice(1)), ut = Vn(
  (e) => e ? `on${Cn(e)}` : ""
), rt = (e, t) => !Object.is(e, t), xt = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, qt = (e, t, n, s = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: n
  });
}, ss = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
};
let Bs;
const Qt = () => Bs || (Bs = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function xs(e) {
  if (M(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], o = X(s) ? ti(s) : xs(s);
      if (o)
        for (const r in o)
          t[r] = o[r];
    }
    return t;
  } else if (X(e) || G(e))
    return e;
}
const Zr = /;(?![^(]*\))/g, Qr = /:([^]+)/, ei = /\/\*[^]*?\*\//g;
function ti(e) {
  const t = {};
  return e.replace(ei, "").split(Zr).forEach((n) => {
    if (n) {
      const s = n.split(Qr);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function ot(e) {
  let t = "";
  if (X(e))
    t = e;
  else if (M(e))
    for (let n = 0; n < e.length; n++) {
      const s = ot(e[n]);
      s && (t += s + " ");
    }
  else if (G(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const ni = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", si = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", oi = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", ri = /* @__PURE__ */ Ze(ni), ii = /* @__PURE__ */ Ze(si), li = /* @__PURE__ */ Ze(oi), ci = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", ai = /* @__PURE__ */ Ze(ci);
function Ao(e) {
  return !!e || e === "";
}
const Io = (e) => !!(e && e.__v_isRef === !0), ue = (e) => X(e) ? e : e == null ? "" : M(e) || G(e) && (e.toString === Co || !A(e.toString)) ? Io(e) ? ue(e.value) : JSON.stringify(e, $o, 2) : String(e), $o = (e, t) => Io(t) ? $o(e, t.value) : pt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, o], r) => (n[Wn(s, r) + " =>"] = o, n),
    {}
  )
} : Vo(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Wn(n))
} : lt(t) ? Wn(t) : G(t) && !M(t) && !Mo(t) ? String(t) : t, Wn = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    lt(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Ke(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let be;
class ui {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = be, !t && be && (this.index = (be.scopes || (be.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].pause();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].resume();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = be;
      try {
        return be = this, t();
      } finally {
        be = n;
      }
    } else process.env.NODE_ENV !== "production" && Ke("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = be, be = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    this._on > 0 && --this._on === 0 && (be = this.prevScope, this.prevScope = void 0);
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let n, s;
      for (n = 0, s = this.effects.length; n < s; n++)
        this.effects[n].stop();
      for (this.effects.length = 0, n = 0, s = this.cleanups.length; n < s; n++)
        this.cleanups[n]();
      if (this.cleanups.length = 0, this.scopes) {
        for (n = 0, s = this.scopes.length; n < s; n++)
          this.scopes[n].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const o = this.parent.scopes.pop();
        o && o !== this && (this.parent.scopes[this.index] = o, o.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function fi() {
  return be;
}
let W;
const Bn = /* @__PURE__ */ new WeakSet();
class Po {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, be && be.active && be.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Bn.has(this) && (Bn.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Fo(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, qs(this), jo(this);
    const t = W, n = Ce;
    W = this, Ce = !0;
    try {
      return this.fn();
    } finally {
      process.env.NODE_ENV !== "production" && W !== this && Ke(
        "Active effect was not restored correctly - this is likely a Vue internal bug."
      ), Ho(this), W = t, Ce = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Ds(t);
      this.deps = this.depsTail = void 0, qs(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Bn.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    os(this) && this.run();
  }
  get dirty() {
    return os(this);
  }
}
let Ro = 0, kt, Ut;
function Fo(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Ut, Ut = e;
    return;
  }
  e.next = kt, kt = e;
}
function ws() {
  Ro++;
}
function Os() {
  if (--Ro > 0)
    return;
  if (Ut) {
    let t = Ut;
    for (Ut = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; kt; ) {
    let t = kt;
    for (kt = void 0; t; ) {
      const n = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (s) {
          e || (e = s);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function jo(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Ho(e) {
  let t, n = e.depsTail, s = n;
  for (; s; ) {
    const o = s.prevDep;
    s.version === -1 ? (s === n && (n = o), Ds(s), pi(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = o;
  }
  e.deps = t, e.depsTail = n;
}
function os(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Lo(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Lo(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Gt) || (e.globalVersion = Gt, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !os(e))))
    return;
  e.flags |= 2;
  const t = e.dep, n = W, s = Ce;
  W = e, Ce = !0;
  try {
    jo(e);
    const o = e.fn(e._value);
    (t.version === 0 || rt(o, e._value)) && (e.flags |= 128, e._value = o, t.version++);
  } catch (o) {
    throw t.version++, o;
  } finally {
    W = n, Ce = s, Ho(e), e.flags &= -3;
  }
}
function Ds(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: o } = e;
  if (s && (s.nextSub = o, e.prevSub = void 0), o && (o.prevSub = s, e.nextSub = void 0), process.env.NODE_ENV !== "production" && n.subsHead === e && (n.subsHead = o), n.subs === e && (n.subs = s, !s && n.computed)) {
    n.computed.flags &= -5;
    for (let r = n.computed.deps; r; r = r.nextDep)
      Ds(r, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function pi(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let Ce = !0;
const ko = [];
function Ae() {
  ko.push(Ce), Ce = !1;
}
function Ie() {
  const e = ko.pop();
  Ce = e === void 0 ? !0 : e;
}
function qs(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = W;
    W = void 0;
    try {
      t();
    } finally {
      W = n;
    }
  }
}
let Gt = 0;
class di {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Ss {
  // TODO isolatedDeclarations "__v_skip"
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0, process.env.NODE_ENV !== "production" && (this.subsHead = void 0);
  }
  track(t) {
    if (!W || !Ce || W === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== W)
      n = this.activeLink = new di(W, this), W.deps ? (n.prevDep = W.depsTail, W.depsTail.nextDep = n, W.depsTail = n) : W.deps = W.depsTail = n, Uo(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const s = n.nextDep;
      s.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = s), n.prevDep = W.depsTail, n.nextDep = void 0, W.depsTail.nextDep = n, W.depsTail = n, W.deps === n && (W.deps = s);
    }
    return process.env.NODE_ENV !== "production" && W.onTrack && W.onTrack(
      ee(
        {
          effect: W
        },
        t
      )
    ), n;
  }
  trigger(t) {
    this.version++, Gt++, this.notify(t);
  }
  notify(t) {
    ws();
    try {
      if (process.env.NODE_ENV !== "production")
        for (let n = this.subsHead; n; n = n.nextSub)
          n.sub.onTrigger && !(n.sub.flags & 8) && n.sub.onTrigger(
            ee(
              {
                effect: n.sub
              },
              t
            )
          );
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      Os();
    }
  }
}
function Uo(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep)
        Uo(s);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), process.env.NODE_ENV !== "production" && e.dep.subsHead === void 0 && (e.dep.subsHead = e), e.dep.subs = e;
  }
}
const rs = /* @__PURE__ */ new WeakMap(), dt = Symbol(
  process.env.NODE_ENV !== "production" ? "Object iterate" : ""
), is = Symbol(
  process.env.NODE_ENV !== "production" ? "Map keys iterate" : ""
), zt = Symbol(
  process.env.NODE_ENV !== "production" ? "Array iterate" : ""
);
function ne(e, t, n) {
  if (Ce && W) {
    let s = rs.get(e);
    s || rs.set(e, s = /* @__PURE__ */ new Map());
    let o = s.get(n);
    o || (s.set(n, o = new Ss()), o.map = s, o.key = n), process.env.NODE_ENV !== "production" ? o.track({
      target: e,
      type: t,
      key: n
    }) : o.track();
  }
}
function Le(e, t, n, s, o, r) {
  const i = rs.get(e);
  if (!i) {
    Gt++;
    return;
  }
  const l = (a) => {
    a && (process.env.NODE_ENV !== "production" ? a.trigger({
      target: e,
      type: t,
      key: n,
      newValue: s,
      oldValue: o,
      oldTarget: r
    }) : a.trigger());
  };
  if (ws(), t === "clear")
    i.forEach(l);
  else {
    const a = M(e), d = a && Ns(n);
    if (a && n === "length") {
      const p = Number(s);
      i.forEach((f, g) => {
        (g === "length" || g === zt || !lt(g) && g >= p) && l(f);
      });
    } else
      switch ((n !== void 0 || i.has(void 0)) && l(i.get(n)), d && l(i.get(zt)), t) {
        case "add":
          a ? d && l(i.get("length")) : (l(i.get(dt)), pt(e) && l(i.get(is)));
          break;
        case "delete":
          a || (l(i.get(dt)), pt(e) && l(i.get(is)));
          break;
        case "set":
          pt(e) && l(i.get(dt));
          break;
      }
  }
  Os();
}
function yt(e) {
  const t = F(e);
  return t === e ? t : (ne(t, "iterate", zt), ge(e) ? t : t.map(le));
}
function Mn(e) {
  return ne(e = F(e), "iterate", zt), e;
}
const hi = {
  __proto__: null,
  [Symbol.iterator]() {
    return qn(this, Symbol.iterator, le);
  },
  concat(...e) {
    return yt(this).concat(
      ...e.map((t) => M(t) ? yt(t) : t)
    );
  },
  entries() {
    return qn(this, "entries", (e) => (e[1] = le(e[1]), e));
  },
  every(e, t) {
    return qe(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return qe(this, "filter", e, t, (n) => n.map(le), arguments);
  },
  find(e, t) {
    return qe(this, "find", e, t, le, arguments);
  },
  findIndex(e, t) {
    return qe(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return qe(this, "findLast", e, t, le, arguments);
  },
  findLastIndex(e, t) {
    return qe(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return qe(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return Gn(this, "includes", e);
  },
  indexOf(...e) {
    return Gn(this, "indexOf", e);
  },
  join(e) {
    return yt(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return Gn(this, "lastIndexOf", e);
  },
  map(e, t) {
    return qe(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Pt(this, "pop");
  },
  push(...e) {
    return Pt(this, "push", e);
  },
  reduce(e, ...t) {
    return Gs(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Gs(this, "reduceRight", e, t);
  },
  shift() {
    return Pt(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return qe(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Pt(this, "splice", e);
  },
  toReversed() {
    return yt(this).toReversed();
  },
  toSorted(e) {
    return yt(this).toSorted(e);
  },
  toSpliced(...e) {
    return yt(this).toSpliced(...e);
  },
  unshift(...e) {
    return Pt(this, "unshift", e);
  },
  values() {
    return qn(this, "values", le);
  }
};
function qn(e, t, n) {
  const s = Mn(e), o = s[t]();
  return s !== e && !ge(e) && (o._next = o.next, o.next = () => {
    const r = o._next();
    return r.value && (r.value = n(r.value)), r;
  }), o;
}
const gi = Array.prototype;
function qe(e, t, n, s, o, r) {
  const i = Mn(e), l = i !== e && !ge(e), a = i[t];
  if (a !== gi[t]) {
    const f = a.apply(e, r);
    return l ? le(f) : f;
  }
  let d = n;
  i !== e && (l ? d = function(f, g) {
    return n.call(this, le(f), g, e);
  } : n.length > 2 && (d = function(f, g) {
    return n.call(this, f, g, e);
  }));
  const p = a.call(i, d, s);
  return l && o ? o(p) : p;
}
function Gs(e, t, n, s) {
  const o = Mn(e);
  let r = n;
  return o !== e && (ge(e) ? n.length > 3 && (r = function(i, l, a) {
    return n.call(this, i, l, a, e);
  }) : r = function(i, l, a) {
    return n.call(this, i, le(l), a, e);
  }), o[t](r, ...s);
}
function Gn(e, t, n) {
  const s = F(e);
  ne(s, "iterate", zt);
  const o = s[t](...n);
  return (o === -1 || o === !1) && _n(n[0]) ? (n[0] = F(n[0]), s[t](...n)) : o;
}
function Pt(e, t, n = []) {
  Ae(), ws();
  const s = F(e)[t].apply(e, n);
  return Os(), Ie(), s;
}
const mi = /* @__PURE__ */ Ze("__proto__,__v_isRef,__isVue"), Ko = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(lt)
);
function vi(e) {
  lt(e) || (e = String(e));
  const t = F(this);
  return ne(t, "has", e), t.hasOwnProperty(e);
}
class Wo {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, s) {
    if (n === "__v_skip") return t.__v_skip;
    const o = this._isReadonly, r = this._isShallow;
    if (n === "__v_isReactive")
      return !o;
    if (n === "__v_isReadonly")
      return o;
    if (n === "__v_isShallow")
      return r;
    if (n === "__v_raw")
      return s === (o ? r ? Yo : Jo : r ? zo : Go).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const i = M(t);
    if (!o) {
      let a;
      if (i && (a = hi[n]))
        return a;
      if (n === "hasOwnProperty")
        return vi;
    }
    const l = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      Q(t) ? t : s
    );
    return (lt(n) ? Ko.has(n) : mi(n)) || (o || ne(t, "get", n), r) ? l : Q(l) ? i && Ns(n) ? l : l.value : G(l) ? o ? Xo(l) : Ts(l) : l;
  }
}
class Bo extends Wo {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, o) {
    let r = t[n];
    if (!this._isShallow) {
      const a = We(r);
      if (!ge(s) && !We(s) && (r = F(r), s = F(s)), !M(t) && Q(r) && !Q(s))
        return a ? !1 : (r.value = s, !0);
    }
    const i = M(t) && Ns(n) ? Number(n) < t.length : k(t, n), l = Reflect.set(
      t,
      n,
      s,
      Q(t) ? t : o
    );
    return t === F(o) && (i ? rt(s, r) && Le(t, "set", n, s, r) : Le(t, "add", n, s)), l;
  }
  deleteProperty(t, n) {
    const s = k(t, n), o = t[n], r = Reflect.deleteProperty(t, n);
    return r && s && Le(t, "delete", n, void 0, o), r;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!lt(n) || !Ko.has(n)) && ne(t, "has", n), s;
  }
  ownKeys(t) {
    return ne(
      t,
      "iterate",
      M(t) ? "length" : dt
    ), Reflect.ownKeys(t);
  }
}
class qo extends Wo {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return process.env.NODE_ENV !== "production" && Ke(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return process.env.NODE_ENV !== "production" && Ke(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const _i = /* @__PURE__ */ new Bo(), bi = /* @__PURE__ */ new qo(), yi = /* @__PURE__ */ new Bo(!0), Ei = /* @__PURE__ */ new qo(!0), ls = (e) => e, rn = (e) => Reflect.getPrototypeOf(e);
function Ni(e, t, n) {
  return function(...s) {
    const o = this.__v_raw, r = F(o), i = pt(r), l = e === "entries" || e === Symbol.iterator && i, a = e === "keys" && i, d = o[e](...s), p = n ? ls : t ? bn : le;
    return !t && ne(
      r,
      "iterate",
      a ? is : dt
    ), {
      // iterator protocol
      next() {
        const { value: f, done: g } = d.next();
        return g ? { value: f, done: g } : {
          value: l ? [p(f[0]), p(f[1])] : p(f),
          done: g
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function ln(e) {
  return function(...t) {
    if (process.env.NODE_ENV !== "production") {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      Ke(
        `${Cn(e)} operation ${n}failed: target is readonly.`,
        F(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function xi(e, t) {
  const n = {
    get(o) {
      const r = this.__v_raw, i = F(r), l = F(o);
      e || (rt(o, l) && ne(i, "get", o), ne(i, "get", l));
      const { has: a } = rn(i), d = t ? ls : e ? bn : le;
      if (a.call(i, o))
        return d(r.get(o));
      if (a.call(i, l))
        return d(r.get(l));
      r !== i && r.get(o);
    },
    get size() {
      const o = this.__v_raw;
      return !e && ne(F(o), "iterate", dt), Reflect.get(o, "size", o);
    },
    has(o) {
      const r = this.__v_raw, i = F(r), l = F(o);
      return e || (rt(o, l) && ne(i, "has", o), ne(i, "has", l)), o === l ? r.has(o) : r.has(o) || r.has(l);
    },
    forEach(o, r) {
      const i = this, l = i.__v_raw, a = F(l), d = t ? ls : e ? bn : le;
      return !e && ne(a, "iterate", dt), l.forEach((p, f) => o.call(r, d(p), d(f), i));
    }
  };
  return ee(
    n,
    e ? {
      add: ln("add"),
      set: ln("set"),
      delete: ln("delete"),
      clear: ln("clear")
    } : {
      add(o) {
        !t && !ge(o) && !We(o) && (o = F(o));
        const r = F(this);
        return rn(r).has.call(r, o) || (r.add(o), Le(r, "add", o, o)), this;
      },
      set(o, r) {
        !t && !ge(r) && !We(r) && (r = F(r));
        const i = F(this), { has: l, get: a } = rn(i);
        let d = l.call(i, o);
        d ? process.env.NODE_ENV !== "production" && zs(i, l, o) : (o = F(o), d = l.call(i, o));
        const p = a.call(i, o);
        return i.set(o, r), d ? rt(r, p) && Le(i, "set", o, r, p) : Le(i, "add", o, r), this;
      },
      delete(o) {
        const r = F(this), { has: i, get: l } = rn(r);
        let a = i.call(r, o);
        a ? process.env.NODE_ENV !== "production" && zs(r, i, o) : (o = F(o), a = i.call(r, o));
        const d = l ? l.call(r, o) : void 0, p = r.delete(o);
        return a && Le(r, "delete", o, void 0, d), p;
      },
      clear() {
        const o = F(this), r = o.size !== 0, i = process.env.NODE_ENV !== "production" ? pt(o) ? new Map(o) : new Set(o) : void 0, l = o.clear();
        return r && Le(
          o,
          "clear",
          void 0,
          void 0,
          i
        ), l;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((o) => {
    n[o] = Ni(o, e, t);
  }), n;
}
function An(e, t) {
  const n = xi(e, t);
  return (s, o, r) => o === "__v_isReactive" ? !e : o === "__v_isReadonly" ? e : o === "__v_raw" ? s : Reflect.get(
    k(n, o) && o in s ? n : s,
    o,
    r
  );
}
const wi = {
  get: /* @__PURE__ */ An(!1, !1)
}, Oi = {
  get: /* @__PURE__ */ An(!1, !0)
}, Di = {
  get: /* @__PURE__ */ An(!0, !1)
}, Si = {
  get: /* @__PURE__ */ An(!0, !0)
};
function zs(e, t, n) {
  const s = F(n);
  if (s !== n && t.call(e, s)) {
    const o = Es(e);
    Ke(
      `Reactive ${o} contains both the raw and reactive versions of the same object${o === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const Go = /* @__PURE__ */ new WeakMap(), zo = /* @__PURE__ */ new WeakMap(), Jo = /* @__PURE__ */ new WeakMap(), Yo = /* @__PURE__ */ new WeakMap();
function Ti(e) {
  switch (e) {
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
function Vi(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Ti(Es(e));
}
function Ts(e) {
  return We(e) ? e : In(
    e,
    !1,
    _i,
    wi,
    Go
  );
}
function Ci(e) {
  return In(
    e,
    !1,
    yi,
    Oi,
    zo
  );
}
function Xo(e) {
  return In(
    e,
    !0,
    bi,
    Di,
    Jo
  );
}
function ke(e) {
  return In(
    e,
    !0,
    Ei,
    Si,
    Yo
  );
}
function In(e, t, n, s, o) {
  if (!G(e))
    return process.env.NODE_ENV !== "production" && Ke(
      `value cannot be made ${t ? "readonly" : "reactive"}: ${String(
        e
      )}`
    ), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const r = Vi(e);
  if (r === 0)
    return e;
  const i = o.get(e);
  if (i)
    return i;
  const l = new Proxy(
    e,
    r === 2 ? s : n
  );
  return o.set(e, l), l;
}
function ht(e) {
  return We(e) ? ht(e.__v_raw) : !!(e && e.__v_isReactive);
}
function We(e) {
  return !!(e && e.__v_isReadonly);
}
function ge(e) {
  return !!(e && e.__v_isShallow);
}
function _n(e) {
  return e ? !!e.__v_raw : !1;
}
function F(e) {
  const t = e && e.__v_raw;
  return t ? F(t) : e;
}
function Mi(e) {
  return !k(e, "__v_skip") && Object.isExtensible(e) && qt(e, "__v_skip", !0), e;
}
const le = (e) => G(e) ? Ts(e) : e, bn = (e) => G(e) ? Xo(e) : e;
function Q(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function Ge(e) {
  return Ai(e, !1);
}
function Ai(e, t) {
  return Q(e) ? e : new Ii(e, t);
}
class Ii {
  constructor(t, n) {
    this.dep = new Ss(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = n ? t : F(t), this._value = n ? t : le(t), this.__v_isShallow = n;
  }
  get value() {
    return process.env.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track(), this._value;
  }
  set value(t) {
    const n = this._rawValue, s = this.__v_isShallow || ge(t) || We(t);
    t = s ? t : F(t), rt(t, n) && (this._rawValue = t, this._value = s ? t : le(t), process.env.NODE_ENV !== "production" ? this.dep.trigger({
      target: this,
      type: "set",
      key: "value",
      newValue: t,
      oldValue: n
    }) : this.dep.trigger());
  }
}
function $i(e) {
  return Q(e) ? e.value : e;
}
const Pi = {
  get: (e, t, n) => t === "__v_raw" ? e : $i(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const o = e[t];
    return Q(o) && !Q(n) ? (o.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function Zo(e) {
  return ht(e) ? e : new Proxy(e, Pi);
}
class Ri {
  constructor(t, n, s) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Ss(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Gt - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    W !== this)
      return Fo(this, !0), !0;
    process.env.NODE_ENV;
  }
  get value() {
    const t = process.env.NODE_ENV !== "production" ? this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }) : this.dep.track();
    return Lo(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter ? this.setter(t) : process.env.NODE_ENV !== "production" && Ke("Write operation failed: computed value is readonly");
  }
}
function Fi(e, t, n = !1) {
  let s, o;
  A(e) ? s = e : (s = e.get, o = e.set);
  const r = new Ri(s, o, n);
  return process.env.NODE_ENV, r;
}
const cn = {}, yn = /* @__PURE__ */ new WeakMap();
let ft;
function ji(e, t = !1, n = ft) {
  if (n) {
    let s = yn.get(n);
    s || yn.set(n, s = []), s.push(e);
  } else process.env.NODE_ENV !== "production" && !t && Ke(
    "onWatcherCleanup() was called when there was no active watcher to associate with."
  );
}
function Hi(e, t, n = B) {
  const { immediate: s, deep: o, once: r, scheduler: i, augmentJob: l, call: a } = n, d = (V) => {
    (n.onWarn || Ke)(
      "Invalid watch source: ",
      V,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, p = (V) => o ? V : ge(V) || o === !1 || o === 0 ? Je(V, 1) : Je(V);
  let f, g, x, S, I = !1, te = !1;
  if (Q(e) ? (g = () => e.value, I = ge(e)) : ht(e) ? (g = () => p(e), I = !0) : M(e) ? (te = !0, I = e.some((V) => ht(V) || ge(V)), g = () => e.map((V) => {
    if (Q(V))
      return V.value;
    if (ht(V))
      return p(V);
    if (A(V))
      return a ? a(V, 2) : V();
    process.env.NODE_ENV !== "production" && d(V);
  })) : A(e) ? t ? g = a ? () => a(e, 2) : e : g = () => {
    if (x) {
      Ae();
      try {
        x();
      } finally {
        Ie();
      }
    }
    const V = ft;
    ft = f;
    try {
      return a ? a(e, 3, [S]) : e(S);
    } finally {
      ft = V;
    }
  } : (g = se, process.env.NODE_ENV !== "production" && d(e)), t && o) {
    const V = g, Z = o === !0 ? 1 / 0 : o;
    g = () => Je(V(), Z);
  }
  const K = fi(), J = () => {
    f.stop(), K && K.active && bs(K.effects, f);
  };
  if (r && t) {
    const V = t;
    t = (...Z) => {
      V(...Z), J();
    };
  }
  let U = te ? new Array(e.length).fill(cn) : cn;
  const ce = (V) => {
    if (!(!(f.flags & 1) || !f.dirty && !V))
      if (t) {
        const Z = f.run();
        if (o || I || (te ? Z.some((me, oe) => rt(me, U[oe])) : rt(Z, U))) {
          x && x();
          const me = ft;
          ft = f;
          try {
            const oe = [
              Z,
              // pass undefined as the old value when it's changed for the first time
              U === cn ? void 0 : te && U[0] === cn ? [] : U,
              S
            ];
            U = Z, a ? a(t, 3, oe) : (
              // @ts-expect-error
              t(...oe)
            );
          } finally {
            ft = me;
          }
        }
      } else
        f.run();
  };
  return l && l(ce), f = new Po(g), f.scheduler = i ? () => i(ce, !1) : ce, S = (V) => ji(V, !1, f), x = f.onStop = () => {
    const V = yn.get(f);
    if (V) {
      if (a)
        a(V, 4);
      else
        for (const Z of V) Z();
      yn.delete(f);
    }
  }, process.env.NODE_ENV !== "production" && (f.onTrack = n.onTrack, f.onTrigger = n.onTrigger), t ? s ? ce(!0) : U = f.run() : i ? i(ce.bind(null, !0), !0) : f.run(), J.pause = f.pause.bind(f), J.resume = f.resume.bind(f), J.stop = J, J;
}
function Je(e, t = 1 / 0, n) {
  if (t <= 0 || !G(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, Q(e))
    Je(e.value, t, n);
  else if (M(e))
    for (let s = 0; s < e.length; s++)
      Je(e[s], t, n);
  else if (Vo(e) || pt(e))
    e.forEach((s) => {
      Je(s, t, n);
    });
  else if (Mo(e)) {
    for (const s in e)
      Je(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && Je(e[s], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const gt = [];
function an(e) {
  gt.push(e);
}
function un() {
  gt.pop();
}
let zn = !1;
function N(e, ...t) {
  if (zn) return;
  zn = !0, Ae();
  const n = gt.length ? gt[gt.length - 1].component : null, s = n && n.appContext.config.warnHandler, o = Li();
  if (s)
    Vt(
      s,
      n,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        e + t.map((r) => {
          var i, l;
          return (l = (i = r.toString) == null ? void 0 : i.call(r)) != null ? l : JSON.stringify(r);
        }).join(""),
        n && n.proxy,
        o.map(
          ({ vnode: r }) => `at <${Hn(n, r.type)}>`
        ).join(`
`),
        o
      ]
    );
  else {
    const r = [`[Vue warn]: ${e}`, ...t];
    o.length && r.push(`
`, ...ki(o)), console.warn(...r);
  }
  Ie(), zn = !1;
}
function Li() {
  let e = gt[gt.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const s = e.component && e.component.parent;
    e = s && s.vnode;
  }
  return t;
}
function ki(e) {
  const t = [];
  return e.forEach((n, s) => {
    t.push(...s === 0 ? [] : [`
`], ...Ui(n));
  }), t;
}
function Ui({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", s = e.component ? e.component.parent == null : !1, o = ` at <${Hn(
    e.component,
    e.type,
    s
  )}`, r = ">" + n;
  return e.props ? [o, ...Ki(e.props), r] : [o + r];
}
function Ki(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((s) => {
    t.push(...Qo(s, e[s]));
  }), n.length > 3 && t.push(" ..."), t;
}
function Qo(e, t, n) {
  return X(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : Q(t) ? (t = Qo(e, F(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : A(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = F(t), n ? t : [`${e}=`, t]);
}
const Vs = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  0: "setup function",
  1: "render function",
  2: "watcher getter",
  3: "watcher callback",
  4: "watcher cleanup function",
  5: "native event handler",
  6: "component event handler",
  7: "vnode hook",
  8: "directive hook",
  9: "transition hook",
  10: "app errorHandler",
  11: "app warnHandler",
  12: "ref function",
  13: "async component loader",
  14: "scheduler flush",
  15: "component update",
  16: "app unmount cleanup function"
};
function Vt(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (o) {
    en(o, t, n);
  }
}
function Be(e, t, n, s) {
  if (A(e)) {
    const o = Vt(e, t, n, s);
    return o && ys(o) && o.catch((r) => {
      en(r, t, n);
    }), o;
  }
  if (M(e)) {
    const o = [];
    for (let r = 0; r < e.length; r++)
      o.push(Be(e[r], t, n, s));
    return o;
  } else process.env.NODE_ENV !== "production" && N(
    `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
  );
}
function en(e, t, n, s = !0) {
  const o = t ? t.vnode : null, { errorHandler: r, throwUnhandledErrorInProduction: i } = t && t.appContext.config || B;
  if (t) {
    let l = t.parent;
    const a = t.proxy, d = process.env.NODE_ENV !== "production" ? Vs[n] : `https://vuejs.org/error-reference/#runtime-${n}`;
    for (; l; ) {
      const p = l.ec;
      if (p) {
        for (let f = 0; f < p.length; f++)
          if (p[f](e, a, d) === !1)
            return;
      }
      l = l.parent;
    }
    if (r) {
      Ae(), Vt(r, null, 10, [
        e,
        a,
        d
      ]), Ie();
      return;
    }
  }
  Wi(e, n, o, s, i);
}
function Wi(e, t, n, s = !0, o = !1) {
  if (process.env.NODE_ENV !== "production") {
    const r = Vs[t];
    if (n && an(n), N(`Unhandled error${r ? ` during execution of ${r}` : ""}`), n && un(), s)
      throw e;
    console.error(e);
  } else {
    if (o)
      throw e;
    console.error(e);
  }
}
const he = [];
let He = -1;
const St = [];
let tt = null, wt = 0;
const er = /* @__PURE__ */ Promise.resolve();
let En = null;
const Bi = 100;
function cs(e) {
  const t = En || er;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function qi(e) {
  let t = He + 1, n = he.length;
  for (; t < n; ) {
    const s = t + n >>> 1, o = he[s], r = Jt(o);
    r < e || r === e && o.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function $n(e) {
  if (!(e.flags & 1)) {
    const t = Jt(e), n = he[he.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Jt(n) ? he.push(e) : he.splice(qi(t), 0, e), e.flags |= 1, tr();
  }
}
function tr() {
  En || (En = er.then(or));
}
function nr(e) {
  M(e) ? St.push(...e) : tt && e.id === -1 ? tt.splice(wt + 1, 0, e) : e.flags & 1 || (St.push(e), e.flags |= 1), tr();
}
function Js(e, t, n = He + 1) {
  for (process.env.NODE_ENV !== "production" && (t = t || /* @__PURE__ */ new Map()); n < he.length; n++) {
    const s = he[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid || process.env.NODE_ENV !== "production" && Cs(t, s))
        continue;
      he.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function sr(e) {
  if (St.length) {
    const t = [...new Set(St)].sort(
      (n, s) => Jt(n) - Jt(s)
    );
    if (St.length = 0, tt) {
      tt.push(...t);
      return;
    }
    for (tt = t, process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map()), wt = 0; wt < tt.length; wt++) {
      const n = tt[wt];
      process.env.NODE_ENV !== "production" && Cs(e, n) || (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2);
    }
    tt = null, wt = 0;
  }
}
const Jt = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function or(e) {
  process.env.NODE_ENV !== "production" && (e = e || /* @__PURE__ */ new Map());
  const t = process.env.NODE_ENV !== "production" ? (n) => Cs(e, n) : se;
  try {
    for (He = 0; He < he.length; He++) {
      const n = he[He];
      if (n && !(n.flags & 8)) {
        if (process.env.NODE_ENV !== "production" && t(n))
          continue;
        n.flags & 4 && (n.flags &= -2), Vt(
          n,
          n.i,
          n.i ? 15 : 14
        ), n.flags & 4 || (n.flags &= -2);
      }
    }
  } finally {
    for (; He < he.length; He++) {
      const n = he[He];
      n && (n.flags &= -2);
    }
    He = -1, he.length = 0, sr(e), En = null, (he.length || St.length) && or(e);
  }
}
function Cs(e, t) {
  const n = e.get(t) || 0;
  if (n > Bi) {
    const s = t.i, o = s && Hr(s.type);
    return en(
      `Maximum recursive updates exceeded${o ? ` in component <${o}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return e.set(t, n + 1), !1;
}
let Ue = !1;
const fn = /* @__PURE__ */ new Map();
process.env.NODE_ENV !== "production" && (Qt().__VUE_HMR_RUNTIME__ = {
  createRecord: Jn(rr),
  rerender: Jn(Ji),
  reload: Jn(Yi)
});
const vt = /* @__PURE__ */ new Map();
function Gi(e) {
  const t = e.type.__hmrId;
  let n = vt.get(t);
  n || (rr(t, e.type), n = vt.get(t)), n.instances.add(e);
}
function zi(e) {
  vt.get(e.type.__hmrId).instances.delete(e);
}
function rr(e, t) {
  return vt.has(e) ? !1 : (vt.set(e, {
    initialDef: Nn(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function Nn(e) {
  return Lr(e) ? e.__vccOpts : e;
}
function Ji(e, t) {
  const n = vt.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((s) => {
    t && (s.render = t, Nn(s.type).render = t), s.renderCache = [], Ue = !0, s.update(), Ue = !1;
  }));
}
function Yi(e, t) {
  const n = vt.get(e);
  if (!n) return;
  t = Nn(t), Ys(n.initialDef, t);
  const s = [...n.instances];
  for (let o = 0; o < s.length; o++) {
    const r = s[o], i = Nn(r.type);
    let l = fn.get(i);
    l || (i !== n.initialDef && Ys(i, t), fn.set(i, l = /* @__PURE__ */ new Set())), l.add(r), r.appContext.propsCache.delete(r.type), r.appContext.emitsCache.delete(r.type), r.appContext.optionsCache.delete(r.type), r.ceReload ? (l.add(r), r.ceReload(t.styles), l.delete(r)) : r.parent ? $n(() => {
      Ue = !0, r.parent.update(), Ue = !1, l.delete(r);
    }) : r.appContext.reload ? r.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), r.root.ce && r !== r.root && r.root.ce._removeChildStyle(i);
  }
  nr(() => {
    fn.clear();
  });
}
function Ys(e, t) {
  ee(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function Jn(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (s) {
      console.error(s), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let Te, jt = [], as = !1;
function tn(e, ...t) {
  Te ? Te.emit(e, ...t) : as || jt.push({ event: e, args: t });
}
function Ms(e, t) {
  var n, s;
  Te = e, Te ? (Te.enabled = !0, jt.forEach(({ event: o, args: r }) => Te.emit(o, ...r)), jt = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((s = (n = window.navigator) == null ? void 0 : n.userAgent) != null && s.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((r) => {
    Ms(r, t);
  }), setTimeout(() => {
    Te || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, as = !0, jt = []);
  }, 3e3)) : (as = !0, jt = []);
}
function Xi(e, t) {
  tn("app:init", e, t, {
    Fragment: De,
    Text: nn,
    Comment: we,
    Static: hn
  });
}
function Zi(e) {
  tn("app:unmount", e);
}
const Qi = /* @__PURE__ */ As(
  "component:added"
  /* COMPONENT_ADDED */
), ir = /* @__PURE__ */ As(
  "component:updated"
  /* COMPONENT_UPDATED */
), el = /* @__PURE__ */ As(
  "component:removed"
  /* COMPONENT_REMOVED */
), tl = (e) => {
  Te && typeof Te.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !Te.cleanupBuffer(e) && el(e);
};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function As(e) {
  return (t) => {
    tn(
      e,
      t.appContext.app,
      t.uid,
      t.parent ? t.parent.uid : void 0,
      t
    );
  };
}
const nl = /* @__PURE__ */ lr(
  "perf:start"
  /* PERFORMANCE_START */
), sl = /* @__PURE__ */ lr(
  "perf:end"
  /* PERFORMANCE_END */
);
function lr(e) {
  return (t, n, s) => {
    tn(e, t.appContext.app, t.uid, t, n, s);
  };
}
function ol(e, t, n) {
  tn(
    "component:emit",
    e.appContext.app,
    e,
    t,
    n
  );
}
let fe = null, cr = null;
function xn(e) {
  const t = fe;
  return fe = e, cr = e && e.type.__scopeId || null, t;
}
function rl(e, t = fe, n) {
  if (!t || e._n)
    return e;
  const s = (...o) => {
    s._d && co(-1);
    const r = xn(t);
    let i;
    try {
      i = e(...o);
    } finally {
      xn(r), s._d && co(1);
    }
    return process.env.NODE_ENV !== "production" && ir(t), i;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function ar(e) {
  Jr(e) && N("Do not use built-in directive ids as custom directive id: " + e);
}
function il(e, t) {
  if (fe === null)
    return process.env.NODE_ENV !== "production" && N("withDirectives can only be used inside render functions."), e;
  const n = jn(fe), s = e.dirs || (e.dirs = []);
  for (let o = 0; o < t.length; o++) {
    let [r, i, l, a = B] = t[o];
    r && (A(r) && (r = {
      mounted: r,
      updated: r
    }), r.deep && Je(i), s.push({
      dir: r,
      instance: n,
      value: i,
      oldValue: void 0,
      arg: l,
      modifiers: a
    }));
  }
  return e;
}
function ct(e, t, n, s) {
  const o = e.dirs, r = t && t.dirs;
  for (let i = 0; i < o.length; i++) {
    const l = o[i];
    r && (l.oldValue = r[i].value);
    let a = l.dir[s];
    a && (Ae(), Be(a, n, 8, [
      e.el,
      l,
      e,
      t
    ]), Ie());
  }
}
const ll = Symbol("_vte"), cl = (e) => e.__isTeleport;
function Is(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Is(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function $s(e, t) {
  return A(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    ee({ name: e.name }, t, { setup: e })
  ) : e;
}
function ur(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const al = /* @__PURE__ */ new WeakSet();
function Kt(e, t, n, s, o = !1) {
  if (M(e)) {
    e.forEach(
      (S, I) => Kt(
        S,
        t && (M(t) ? t[I] : t),
        n,
        s,
        o
      )
    );
    return;
  }
  if (Wt(s) && !o) {
    s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && Kt(e, t, n, s.component.subTree);
    return;
  }
  const r = s.shapeFlag & 4 ? jn(s.component) : s.el, i = o ? null : r, { i: l, r: a } = e;
  if (process.env.NODE_ENV !== "production" && !l) {
    N(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const d = t && t.r, p = l.refs === B ? l.refs = {} : l.refs, f = l.setupState, g = F(f), x = f === B ? () => !1 : (S) => process.env.NODE_ENV !== "production" && (k(g, S) && !Q(g[S]) && N(
    `Template ref "${S}" used on a non-ref value. It will not work in the production build.`
  ), al.has(g[S])) ? !1 : k(g, S);
  if (d != null && d !== a && (X(d) ? (p[d] = null, x(d) && (f[d] = null)) : Q(d) && (d.value = null)), A(a))
    Vt(a, l, 12, [i, p]);
  else {
    const S = X(a), I = Q(a);
    if (S || I) {
      const te = () => {
        if (e.f) {
          const K = S ? x(a) ? f[a] : p[a] : a.value;
          o ? M(K) && bs(K, r) : M(K) ? K.includes(r) || K.push(r) : S ? (p[a] = [r], x(a) && (f[a] = p[a])) : (a.value = [r], e.k && (p[e.k] = a.value));
        } else S ? (p[a] = i, x(a) && (f[a] = i)) : I ? (a.value = i, e.k && (p[e.k] = i)) : process.env.NODE_ENV !== "production" && N("Invalid template ref type:", a, `(${typeof a})`);
      };
      i ? (te.id = -1, Ee(te, n)) : te();
    } else process.env.NODE_ENV !== "production" && N("Invalid template ref type:", a, `(${typeof a})`);
  }
}
Qt().requestIdleCallback;
Qt().cancelIdleCallback;
const Wt = (e) => !!e.type.__asyncLoader, Ps = (e) => e.type.__isKeepAlive;
function ul(e, t) {
  fr(e, "a", t);
}
function fl(e, t) {
  fr(e, "da", t);
}
function fr(e, t, n = ie) {
  const s = e.__wdc || (e.__wdc = () => {
    let o = n;
    for (; o; ) {
      if (o.isDeactivated)
        return;
      o = o.parent;
    }
    return e();
  });
  if (Pn(t, s, n), n) {
    let o = n.parent;
    for (; o && o.parent; )
      Ps(o.parent.vnode) && pl(s, t, n, o), o = o.parent;
  }
}
function pl(e, t, n, s) {
  const o = Pn(
    t,
    e,
    s,
    !0
    /* prepend */
  );
  Rs(() => {
    bs(s[t], o);
  }, n);
}
function Pn(e, t, n = ie, s = !1) {
  if (n) {
    const o = n[e] || (n[e] = []), r = t.__weh || (t.__weh = (...i) => {
      Ae();
      const l = sn(n), a = Be(t, n, e, i);
      return l(), Ie(), a;
    });
    return s ? o.unshift(r) : o.push(r), r;
  } else if (process.env.NODE_ENV !== "production") {
    const o = ut(Vs[e].replace(/ hook$/, ""));
    N(
      `${o} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const Qe = (e) => (t, n = ie) => {
  (!Xt || e === "sp") && Pn(e, (...s) => t(...s), n);
}, dl = Qe("bm"), pr = Qe("m"), hl = Qe(
  "bu"
), gl = Qe("u"), ml = Qe(
  "bum"
), Rs = Qe("um"), vl = Qe(
  "sp"
), _l = Qe("rtg"), bl = Qe("rtc");
function yl(e, t = ie) {
  Pn("ec", e, t);
}
const El = Symbol.for("v-ndc");
function dr(e, t, n, s) {
  let o;
  const r = n, i = M(e);
  if (i || X(e)) {
    const l = i && ht(e);
    let a = !1, d = !1;
    l && (a = !ge(e), d = We(e), e = Mn(e)), o = new Array(e.length);
    for (let p = 0, f = e.length; p < f; p++)
      o[p] = t(
        a ? d ? bn(le(e[p])) : le(e[p]) : e[p],
        p,
        void 0,
        r
      );
  } else if (typeof e == "number") {
    process.env.NODE_ENV !== "production" && !Number.isInteger(e) && N(`The v-for range expect an integer value but got ${e}.`), o = new Array(e);
    for (let l = 0; l < e; l++)
      o[l] = t(l + 1, l, void 0, r);
  } else if (G(e))
    if (e[Symbol.iterator])
      o = Array.from(
        e,
        (l, a) => t(l, a, void 0, r)
      );
    else {
      const l = Object.keys(e);
      o = new Array(l.length);
      for (let a = 0, d = l.length; a < d; a++) {
        const p = l[a];
        o[a] = t(e[p], p, a, r);
      }
    }
  else
    o = [];
  return o;
}
const us = (e) => e ? Fr(e) ? jn(e) : us(e.parent) : null, mt = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ ee(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => process.env.NODE_ENV !== "production" ? ke(e.props) : e.props,
    $attrs: (e) => process.env.NODE_ENV !== "production" ? ke(e.attrs) : e.attrs,
    $slots: (e) => process.env.NODE_ENV !== "production" ? ke(e.slots) : e.slots,
    $refs: (e) => process.env.NODE_ENV !== "production" ? ke(e.refs) : e.refs,
    $parent: (e) => us(e.parent),
    $root: (e) => us(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => mr(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      $n(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = cs.bind(e.proxy)),
    $watch: (e) => ec.bind(e)
  })
), Fs = (e) => e === "_" || e === "$", Yn = (e, t) => e !== B && !e.__isScriptSetup && k(e, t), hr = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: s, data: o, props: r, accessCache: i, type: l, appContext: a } = e;
    if (process.env.NODE_ENV !== "production" && t === "__isVue")
      return !0;
    let d;
    if (t[0] !== "$") {
      const x = i[t];
      if (x !== void 0)
        switch (x) {
          case 1:
            return s[t];
          case 2:
            return o[t];
          case 4:
            return n[t];
          case 3:
            return r[t];
        }
      else {
        if (Yn(s, t))
          return i[t] = 1, s[t];
        if (o !== B && k(o, t))
          return i[t] = 2, o[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (d = e.propsOptions[0]) && k(d, t)
        )
          return i[t] = 3, r[t];
        if (n !== B && k(n, t))
          return i[t] = 4, n[t];
        fs && (i[t] = 0);
      }
    }
    const p = mt[t];
    let f, g;
    if (p)
      return t === "$attrs" ? (ne(e.attrs, "get", ""), process.env.NODE_ENV !== "production" && Dn()) : process.env.NODE_ENV !== "production" && t === "$slots" && ne(e, "get", t), p(e);
    if (
      // css module (injected by vue-loader)
      (f = l.__cssModules) && (f = f[t])
    )
      return f;
    if (n !== B && k(n, t))
      return i[t] = 4, n[t];
    if (
      // global properties
      g = a.config.globalProperties, k(g, t)
    )
      return g[t];
    process.env.NODE_ENV !== "production" && fe && (!X(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (o !== B && Fs(t[0]) && k(o, t) ? N(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === fe && N(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: o, ctx: r } = e;
    return Yn(o, t) ? (o[t] = n, !0) : process.env.NODE_ENV !== "production" && o.__isScriptSetup && k(o, t) ? (N(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : s !== B && k(s, t) ? (s[t] = n, !0) : k(e.props, t) ? (process.env.NODE_ENV !== "production" && N(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (process.env.NODE_ENV !== "production" && N(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (process.env.NODE_ENV !== "production" && t in e.appContext.config.globalProperties ? Object.defineProperty(r, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : r[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: o, propsOptions: r }
  }, i) {
    let l;
    return !!n[i] || e !== B && k(e, i) || Yn(t, i) || (l = r[0]) && k(l, i) || k(s, i) || k(mt, i) || k(o.config.globalProperties, i);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : k(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
process.env.NODE_ENV !== "production" && (hr.ownKeys = (e) => (N(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e)));
function Nl(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(mt).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => mt[n](e),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: se
    });
  }), t;
}
function xl(e) {
  const {
    ctx: t,
    propsOptions: [n]
  } = e;
  n && Object.keys(n).forEach((s) => {
    Object.defineProperty(t, s, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[s],
      set: se
    });
  });
}
function wl(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(F(n)).forEach((s) => {
    if (!n.__isScriptSetup) {
      if (Fs(s[0])) {
        N(
          `setup() return property ${JSON.stringify(
            s
          )} should not start with "$" or "_" which are reserved prefixes for Vue internals.`
        );
        return;
      }
      Object.defineProperty(t, s, {
        enumerable: !0,
        configurable: !0,
        get: () => n[s],
        set: se
      });
    }
  });
}
function Xs(e) {
  return M(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function Ol() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? N(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let fs = !0;
function Dl(e) {
  const t = mr(e), n = e.proxy, s = e.ctx;
  fs = !1, t.beforeCreate && Zs(t.beforeCreate, e, "bc");
  const {
    // state
    data: o,
    computed: r,
    methods: i,
    watch: l,
    provide: a,
    inject: d,
    // lifecycle
    created: p,
    beforeMount: f,
    mounted: g,
    beforeUpdate: x,
    updated: S,
    activated: I,
    deactivated: te,
    beforeDestroy: K,
    beforeUnmount: J,
    destroyed: U,
    unmounted: ce,
    render: V,
    renderTracked: Z,
    renderTriggered: me,
    errorCaptured: oe,
    serverPrefetch: R,
    // public API
    expose: $,
    inheritAttrs: Y,
    // assets
    components: re,
    directives: _t,
    filters: Ct
  } = t, ye = process.env.NODE_ENV !== "production" ? Ol() : null;
  if (process.env.NODE_ENV !== "production") {
    const [H] = e.propsOptions;
    if (H)
      for (const j in H)
        ye("Props", j);
  }
  if (d && Sl(d, s, ye), i)
    for (const H in i) {
      const j = i[H];
      A(j) ? (process.env.NODE_ENV !== "production" ? Object.defineProperty(s, H, {
        value: j.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }) : s[H] = j.bind(n), process.env.NODE_ENV !== "production" && ye("Methods", H)) : process.env.NODE_ENV !== "production" && N(
        `Method "${H}" has type "${typeof j}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (o) {
    process.env.NODE_ENV !== "production" && !A(o) && N(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const H = o.call(n, n);
    if (process.env.NODE_ENV !== "production" && ys(H) && N(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !G(H))
      process.env.NODE_ENV !== "production" && N("data() should return an object.");
    else if (e.data = Ts(H), process.env.NODE_ENV !== "production")
      for (const j in H)
        ye("Data", j), Fs(j[0]) || Object.defineProperty(s, j, {
          configurable: !0,
          enumerable: !0,
          get: () => H[j],
          set: se
        });
  }
  if (fs = !0, r)
    for (const H in r) {
      const j = r[H], $e = A(j) ? j.bind(n, n) : A(j.get) ? j.get.bind(n, n) : se;
      process.env.NODE_ENV !== "production" && $e === se && N(`Computed property "${H}" has no getter.`);
      const Ln = !A(j) && A(j.set) ? j.set.bind(n) : process.env.NODE_ENV !== "production" ? () => {
        N(
          `Write operation failed: computed property "${H}" is readonly.`
        );
      } : se, Mt = Oc({
        get: $e,
        set: Ln
      });
      Object.defineProperty(s, H, {
        enumerable: !0,
        configurable: !0,
        get: () => Mt.value,
        set: (bt) => Mt.value = bt
      }), process.env.NODE_ENV !== "production" && ye("Computed", H);
    }
  if (l)
    for (const H in l)
      gr(l[H], s, n, H);
  if (a) {
    const H = A(a) ? a.call(n) : a;
    Reflect.ownKeys(H).forEach((j) => {
      Il(j, H[j]);
    });
  }
  p && Zs(p, e, "c");
  function ae(H, j) {
    M(j) ? j.forEach(($e) => H($e.bind(n))) : j && H(j.bind(n));
  }
  if (ae(dl, f), ae(pr, g), ae(hl, x), ae(gl, S), ae(ul, I), ae(fl, te), ae(yl, oe), ae(bl, Z), ae(_l, me), ae(ml, J), ae(Rs, ce), ae(vl, R), M($))
    if ($.length) {
      const H = e.exposed || (e.exposed = {});
      $.forEach((j) => {
        Object.defineProperty(H, j, {
          get: () => n[j],
          set: ($e) => n[j] = $e
        });
      });
    } else e.exposed || (e.exposed = {});
  V && e.render === se && (e.render = V), Y != null && (e.inheritAttrs = Y), re && (e.components = re), _t && (e.directives = _t), R && ur(e);
}
function Sl(e, t, n = se) {
  M(e) && (e = ps(e));
  for (const s in e) {
    const o = e[s];
    let r;
    G(o) ? "default" in o ? r = pn(
      o.from || s,
      o.default,
      !0
    ) : r = pn(o.from || s) : r = pn(o), Q(r) ? Object.defineProperty(t, s, {
      enumerable: !0,
      configurable: !0,
      get: () => r.value,
      set: (i) => r.value = i
    }) : t[s] = r, process.env.NODE_ENV !== "production" && n("Inject", s);
  }
}
function Zs(e, t, n) {
  Be(
    M(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function gr(e, t, n, s) {
  let o = s.includes(".") ? Tr(n, s) : () => n[s];
  if (X(e)) {
    const r = t[e];
    A(r) ? Zn(o, r) : process.env.NODE_ENV !== "production" && N(`Invalid watch handler specified by key "${e}"`, r);
  } else if (A(e))
    Zn(o, e.bind(n));
  else if (G(e))
    if (M(e))
      e.forEach((r) => gr(r, t, n, s));
    else {
      const r = A(e.handler) ? e.handler.bind(n) : t[e.handler];
      A(r) ? Zn(o, r, e) : process.env.NODE_ENV !== "production" && N(`Invalid watch handler specified by key "${e.handler}"`, r);
    }
  else process.env.NODE_ENV !== "production" && N(`Invalid watch option: "${s}"`, e);
}
function mr(e) {
  const t = e.type, { mixins: n, extends: s } = t, {
    mixins: o,
    optionsCache: r,
    config: { optionMergeStrategies: i }
  } = e.appContext, l = r.get(t);
  let a;
  return l ? a = l : !o.length && !n && !s ? a = t : (a = {}, o.length && o.forEach(
    (d) => wn(a, d, i, !0)
  ), wn(a, t, i)), G(t) && r.set(t, a), a;
}
function wn(e, t, n, s = !1) {
  const { mixins: o, extends: r } = t;
  r && wn(e, r, n, !0), o && o.forEach(
    (i) => wn(e, i, n, !0)
  );
  for (const i in t)
    if (s && i === "expose")
      process.env.NODE_ENV !== "production" && N(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const l = Tl[i] || n && n[i];
      e[i] = l ? l(e[i], t[i]) : t[i];
    }
  return e;
}
const Tl = {
  data: Qs,
  props: eo,
  emits: eo,
  // objects
  methods: Ht,
  computed: Ht,
  // lifecycle
  beforeCreate: de,
  created: de,
  beforeMount: de,
  mounted: de,
  beforeUpdate: de,
  updated: de,
  beforeDestroy: de,
  beforeUnmount: de,
  destroyed: de,
  unmounted: de,
  activated: de,
  deactivated: de,
  errorCaptured: de,
  serverPrefetch: de,
  // assets
  components: Ht,
  directives: Ht,
  // watch
  watch: Cl,
  // provide / inject
  provide: Qs,
  inject: Vl
};
function Qs(e, t) {
  return t ? e ? function() {
    return ee(
      A(e) ? e.call(this, this) : e,
      A(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Vl(e, t) {
  return Ht(ps(e), ps(t));
}
function ps(e) {
  if (M(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function de(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Ht(e, t) {
  return e ? ee(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function eo(e, t) {
  return e ? M(e) && M(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : ee(
    /* @__PURE__ */ Object.create(null),
    Xs(e),
    Xs(t ?? {})
  ) : t;
}
function Cl(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = ee(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = de(e[s], t[s]);
  return n;
}
function vr() {
  return {
    app: null,
    config: {
      isNativeTag: Gr,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let Ml = 0;
function Al(e, t) {
  return function(s, o = null) {
    A(s) || (s = ee({}, s)), o != null && !G(o) && (process.env.NODE_ENV !== "production" && N("root props passed to app.mount() must be an object."), o = null);
    const r = vr(), i = /* @__PURE__ */ new WeakSet(), l = [];
    let a = !1;
    const d = r.app = {
      _uid: Ml++,
      _component: s,
      _props: o,
      _container: null,
      _context: r,
      _instance: null,
      version: po,
      get config() {
        return r.config;
      },
      set config(p) {
        process.env.NODE_ENV !== "production" && N(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(p, ...f) {
        return i.has(p) ? process.env.NODE_ENV !== "production" && N("Plugin has already been applied to target app.") : p && A(p.install) ? (i.add(p), p.install(d, ...f)) : A(p) ? (i.add(p), p(d, ...f)) : process.env.NODE_ENV !== "production" && N(
          'A plugin must either be a function or an object with an "install" function.'
        ), d;
      },
      mixin(p) {
        return r.mixins.includes(p) ? process.env.NODE_ENV !== "production" && N(
          "Mixin has already been applied to target app" + (p.name ? `: ${p.name}` : "")
        ) : r.mixins.push(p), d;
      },
      component(p, f) {
        return process.env.NODE_ENV !== "production" && vs(p, r.config), f ? (process.env.NODE_ENV !== "production" && r.components[p] && N(`Component "${p}" has already been registered in target app.`), r.components[p] = f, d) : r.components[p];
      },
      directive(p, f) {
        return process.env.NODE_ENV !== "production" && ar(p), f ? (process.env.NODE_ENV !== "production" && r.directives[p] && N(`Directive "${p}" has already been registered in target app.`), r.directives[p] = f, d) : r.directives[p];
      },
      mount(p, f, g) {
        if (a)
          process.env.NODE_ENV !== "production" && N(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          process.env.NODE_ENV !== "production" && p.__vue_app__ && N(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const x = d._ceVNode || Me(s, o);
          return x.appContext = r, g === !0 ? g = "svg" : g === !1 && (g = void 0), process.env.NODE_ENV !== "production" && (r.reload = () => {
            const S = it(x);
            S.el = null, e(S, p, g);
          }), e(x, p, g), a = !0, d._container = p, p.__vue_app__ = d, process.env.NODE_ENV !== "production" && (d._instance = x.component, Xi(d, po)), jn(x.component);
        }
      },
      onUnmount(p) {
        process.env.NODE_ENV !== "production" && typeof p != "function" && N(
          `Expected function as first argument to app.onUnmount(), but got ${typeof p}`
        ), l.push(p);
      },
      unmount() {
        a ? (Be(
          l,
          d._instance,
          16
        ), e(null, d._container), process.env.NODE_ENV !== "production" && (d._instance = null, Zi(d)), delete d._container.__vue_app__) : process.env.NODE_ENV !== "production" && N("Cannot unmount an app that is not mounted.");
      },
      provide(p, f) {
        return process.env.NODE_ENV !== "production" && p in r.provides && (k(r.provides, p) ? N(
          `App already provides property with key "${String(p)}". It will be overwritten with the new value.`
        ) : N(
          `App already provides property with key "${String(p)}" inherited from its parent element. It will be overwritten with the new value.`
        )), r.provides[p] = f, d;
      },
      runWithContext(p) {
        const f = Tt;
        Tt = d;
        try {
          return p();
        } finally {
          Tt = f;
        }
      }
    };
    return d;
  };
}
let Tt = null;
function Il(e, t) {
  if (!ie)
    process.env.NODE_ENV !== "production" && N("provide() can only be used inside setup().");
  else {
    let n = ie.provides;
    const s = ie.parent && ie.parent.provides;
    s === n && (n = ie.provides = Object.create(s)), n[e] = t;
  }
}
function pn(e, t, n = !1) {
  const s = ie || fe;
  if (s || Tt) {
    let o = Tt ? Tt._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (o && e in o)
      return o[e];
    if (arguments.length > 1)
      return n && A(t) ? t.call(s && s.proxy) : t;
    process.env.NODE_ENV !== "production" && N(`injection "${String(e)}" not found.`);
  } else process.env.NODE_ENV !== "production" && N("inject() can only be used inside setup() or functional components.");
}
const _r = {}, br = () => Object.create(_r), yr = (e) => Object.getPrototypeOf(e) === _r;
function $l(e, t, n, s = !1) {
  const o = {}, r = br();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Er(e, t, o, r);
  for (const i in e.propsOptions[0])
    i in o || (o[i] = void 0);
  process.env.NODE_ENV !== "production" && xr(t || {}, o, e), n ? e.props = s ? o : Ci(o) : e.type.props ? e.props = o : e.props = r, e.attrs = r;
}
function Pl(e) {
  for (; e; ) {
    if (e.type.__hmrId) return !0;
    e = e.parent;
  }
}
function Rl(e, t, n, s) {
  const {
    props: o,
    attrs: r,
    vnode: { patchFlag: i }
  } = e, l = F(o), [a] = e.propsOptions;
  let d = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !(process.env.NODE_ENV !== "production" && Pl(e)) && (s || i > 0) && !(i & 16)
  ) {
    if (i & 8) {
      const p = e.vnode.dynamicProps;
      for (let f = 0; f < p.length; f++) {
        let g = p[f];
        if (Rn(e.emitsOptions, g))
          continue;
        const x = t[g];
        if (a)
          if (k(r, g))
            x !== r[g] && (r[g] = x, d = !0);
          else {
            const S = Ve(g);
            o[S] = ds(
              a,
              l,
              S,
              x,
              e,
              !1
            );
          }
        else
          x !== r[g] && (r[g] = x, d = !0);
      }
    }
  } else {
    Er(e, t, o, r) && (d = !0);
    let p;
    for (const f in l)
      (!t || // for camelCase
      !k(t, f) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((p = Xe(f)) === f || !k(t, p))) && (a ? n && // for camelCase
      (n[f] !== void 0 || // for kebab-case
      n[p] !== void 0) && (o[f] = ds(
        a,
        l,
        f,
        void 0,
        e,
        !0
      )) : delete o[f]);
    if (r !== l)
      for (const f in r)
        (!t || !k(t, f)) && (delete r[f], d = !0);
  }
  d && Le(e.attrs, "set", ""), process.env.NODE_ENV !== "production" && xr(t || {}, o, e);
}
function Er(e, t, n, s) {
  const [o, r] = e.propsOptions;
  let i = !1, l;
  if (t)
    for (let a in t) {
      if (Lt(a))
        continue;
      const d = t[a];
      let p;
      o && k(o, p = Ve(a)) ? !r || !r.includes(p) ? n[p] = d : (l || (l = {}))[p] = d : Rn(e.emitsOptions, a) || (!(a in s) || d !== s[a]) && (s[a] = d, i = !0);
    }
  if (r) {
    const a = F(n), d = l || B;
    for (let p = 0; p < r.length; p++) {
      const f = r[p];
      n[f] = ds(
        o,
        a,
        f,
        d[f],
        e,
        !k(d, f)
      );
    }
  }
  return i;
}
function ds(e, t, n, s, o, r) {
  const i = e[n];
  if (i != null) {
    const l = k(i, "default");
    if (l && s === void 0) {
      const a = i.default;
      if (i.type !== Function && !i.skipFactory && A(a)) {
        const { propsDefaults: d } = o;
        if (n in d)
          s = d[n];
        else {
          const p = sn(o);
          s = d[n] = a.call(
            null,
            t
          ), p();
        }
      } else
        s = a;
      o.ce && o.ce._setProp(n, s);
    }
    i[
      0
      /* shouldCast */
    ] && (r && !l ? s = !1 : i[
      1
      /* shouldCastTrue */
    ] && (s === "" || s === Xe(n)) && (s = !0));
  }
  return s;
}
const Fl = /* @__PURE__ */ new WeakMap();
function Nr(e, t, n = !1) {
  const s = n ? Fl : t.propsCache, o = s.get(e);
  if (o)
    return o;
  const r = e.props, i = {}, l = [];
  let a = !1;
  if (!A(e)) {
    const p = (f) => {
      a = !0;
      const [g, x] = Nr(f, t, !0);
      ee(i, g), x && l.push(...x);
    };
    !n && t.mixins.length && t.mixins.forEach(p), e.extends && p(e.extends), e.mixins && e.mixins.forEach(p);
  }
  if (!r && !a)
    return G(e) && s.set(e, Dt), Dt;
  if (M(r))
    for (let p = 0; p < r.length; p++) {
      process.env.NODE_ENV !== "production" && !X(r[p]) && N("props must be strings when using array syntax.", r[p]);
      const f = Ve(r[p]);
      to(f) && (i[f] = B);
    }
  else if (r) {
    process.env.NODE_ENV !== "production" && !G(r) && N("invalid props options", r);
    for (const p in r) {
      const f = Ve(p);
      if (to(f)) {
        const g = r[p], x = i[f] = M(g) || A(g) ? { type: g } : ee({}, g), S = x.type;
        let I = !1, te = !0;
        if (M(S))
          for (let K = 0; K < S.length; ++K) {
            const J = S[K], U = A(J) && J.name;
            if (U === "Boolean") {
              I = !0;
              break;
            } else U === "String" && (te = !1);
          }
        else
          I = A(S) && S.name === "Boolean";
        x[
          0
          /* shouldCast */
        ] = I, x[
          1
          /* shouldCastTrue */
        ] = te, (I || k(x, "default")) && l.push(f);
      }
    }
  }
  const d = [i, l];
  return G(e) && s.set(e, d), d;
}
function to(e) {
  return e[0] !== "$" && !Lt(e) ? !0 : (process.env.NODE_ENV !== "production" && N(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function jl(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function xr(e, t, n) {
  const s = F(t), o = n.propsOptions[0], r = Object.keys(e).map((i) => Ve(i));
  for (const i in o) {
    let l = o[i];
    l != null && Hl(
      i,
      s[i],
      l,
      process.env.NODE_ENV !== "production" ? ke(s) : s,
      !r.includes(i)
    );
  }
}
function Hl(e, t, n, s, o) {
  const { type: r, required: i, validator: l, skipCheck: a } = n;
  if (i && o) {
    N('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !i)) {
    if (r != null && r !== !0 && !a) {
      let d = !1;
      const p = M(r) ? r : [r], f = [];
      for (let g = 0; g < p.length && !d; g++) {
        const { valid: x, expectedType: S } = kl(t, p[g]);
        f.push(S || ""), d = x;
      }
      if (!d) {
        N(Ul(e, t, f));
        return;
      }
    }
    l && !l(t, s) && N('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const Ll = /* @__PURE__ */ Ze(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function kl(e, t) {
  let n;
  const s = jl(t);
  if (s === "null")
    n = e === null;
  else if (Ll(s)) {
    const o = typeof e;
    n = o === s.toLowerCase(), !n && o === "object" && (n = e instanceof t);
  } else s === "Object" ? n = G(e) : s === "Array" ? n = M(e) : n = e instanceof t;
  return {
    valid: n,
    expectedType: s
  };
}
function Ul(e, t, n) {
  if (n.length === 0)
    return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
  let s = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(Cn).join(" | ")}`;
  const o = n[0], r = Es(t), i = no(t, o), l = no(t, r);
  return n.length === 1 && so(o) && !Kl(o, r) && (s += ` with value ${i}`), s += `, got ${r} `, so(r) && (s += `with value ${l}.`), s;
}
function no(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function so(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function Kl(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const js = (e) => e[0] === "_" || e === "$stable", Hs = (e) => M(e) ? e.map(Se) : [Se(e)], Wl = (e, t, n) => {
  if (t._n)
    return t;
  const s = rl((...o) => (process.env.NODE_ENV !== "production" && ie && !(n === null && fe) && !(n && n.root !== ie.root) && N(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), Hs(t(...o))), n);
  return s._c = !1, s;
}, wr = (e, t, n) => {
  const s = e._ctx;
  for (const o in e) {
    if (js(o)) continue;
    const r = e[o];
    if (A(r))
      t[o] = Wl(o, r, s);
    else if (r != null) {
      process.env.NODE_ENV !== "production" && N(
        `Non-function value encountered for slot "${o}". Prefer function slots for better performance.`
      );
      const i = Hs(r);
      t[o] = () => i;
    }
  }
}, Or = (e, t) => {
  process.env.NODE_ENV !== "production" && !Ps(e.vnode) && N(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const n = Hs(t);
  e.slots.default = () => n;
}, hs = (e, t, n) => {
  for (const s in t)
    (n || !js(s)) && (e[s] = t[s]);
}, Bl = (e, t, n) => {
  const s = e.slots = br();
  if (e.vnode.shapeFlag & 32) {
    const o = t.__;
    o && qt(s, "__", o, !0);
    const r = t._;
    r ? (hs(s, t, n), n && qt(s, "_", r, !0)) : wr(t, s);
  } else t && Or(e, t);
}, ql = (e, t, n) => {
  const { vnode: s, slots: o } = e;
  let r = !0, i = B;
  if (s.shapeFlag & 32) {
    const l = t._;
    l ? process.env.NODE_ENV !== "production" && Ue ? (hs(o, t, n), Le(e, "set", "$slots")) : n && l === 1 ? r = !1 : hs(o, t, n) : (r = !t.$stable, wr(t, o)), i = t;
  } else t && (Or(e, t), i = { default: 1 });
  if (r)
    for (const l in o)
      !js(l) && i[l] == null && delete o[l];
};
let Rt, st;
function Et(e, t) {
  e.appContext.config.performance && On() && st.mark(`vue-${t}-${e.uid}`), process.env.NODE_ENV !== "production" && nl(e, t, On() ? st.now() : Date.now());
}
function Nt(e, t) {
  if (e.appContext.config.performance && On()) {
    const n = `vue-${t}-${e.uid}`, s = n + ":end";
    st.mark(s), st.measure(
      `<${Hn(e, e.type)}> ${t}`,
      n,
      s
    ), st.clearMarks(n), st.clearMarks(s);
  }
  process.env.NODE_ENV !== "production" && sl(e, t, On() ? st.now() : Date.now());
}
function On() {
  return Rt !== void 0 || (typeof window < "u" && window.performance ? (Rt = !0, st = window.performance) : Rt = !1), Rt;
}
function Gl() {
  const e = [];
  if (process.env.NODE_ENV !== "production" && e.length) {
    const t = e.length > 1;
    console.warn(
      `Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const Ee = lc;
function zl(e) {
  return Jl(e);
}
function Jl(e, t) {
  Gl();
  const n = Qt();
  n.__VUE__ = !0, process.env.NODE_ENV !== "production" && Ms(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const {
    insert: s,
    remove: o,
    patchProp: r,
    createElement: i,
    createText: l,
    createComment: a,
    setText: d,
    setElementText: p,
    parentNode: f,
    nextSibling: g,
    setScopeId: x = se,
    insertStaticContent: S
  } = e, I = (c, u, h, _ = null, m = null, v = null, w = void 0, E = null, y = process.env.NODE_ENV !== "production" && Ue ? !1 : !!u.dynamicChildren) => {
    if (c === u)
      return;
    c && !Ft(c, u) && (_ = on(c), et(c, m, v, !0), c = null), u.patchFlag === -2 && (y = !1, u.dynamicChildren = null);
    const { type: b, ref: C, shapeFlag: O } = u;
    switch (b) {
      case nn:
        te(c, u, h, _);
        break;
      case we:
        K(c, u, h, _);
        break;
      case hn:
        c == null ? J(u, h, _, w) : process.env.NODE_ENV !== "production" && U(c, u, h, w);
        break;
      case De:
        _t(
          c,
          u,
          h,
          _,
          m,
          v,
          w,
          E,
          y
        );
        break;
      default:
        O & 1 ? Z(
          c,
          u,
          h,
          _,
          m,
          v,
          w,
          E,
          y
        ) : O & 6 ? Ct(
          c,
          u,
          h,
          _,
          m,
          v,
          w,
          E,
          y
        ) : O & 64 || O & 128 ? b.process(
          c,
          u,
          h,
          _,
          m,
          v,
          w,
          E,
          y,
          It
        ) : process.env.NODE_ENV !== "production" && N("Invalid VNode type:", b, `(${typeof b})`);
    }
    C != null && m ? Kt(C, c && c.ref, v, u || c, !u) : C == null && c && c.ref != null && Kt(c.ref, null, v, c, !0);
  }, te = (c, u, h, _) => {
    if (c == null)
      s(
        u.el = l(u.children),
        h,
        _
      );
    else {
      const m = u.el = c.el;
      u.children !== c.children && d(m, u.children);
    }
  }, K = (c, u, h, _) => {
    c == null ? s(
      u.el = a(u.children || ""),
      h,
      _
    ) : u.el = c.el;
  }, J = (c, u, h, _) => {
    [c.el, c.anchor] = S(
      c.children,
      u,
      h,
      _,
      c.el,
      c.anchor
    );
  }, U = (c, u, h, _) => {
    if (u.children !== c.children) {
      const m = g(c.anchor);
      V(c), [u.el, u.anchor] = S(
        u.children,
        h,
        m,
        _
      );
    } else
      u.el = c.el, u.anchor = c.anchor;
  }, ce = ({ el: c, anchor: u }, h, _) => {
    let m;
    for (; c && c !== u; )
      m = g(c), s(c, h, _), c = m;
    s(u, h, _);
  }, V = ({ el: c, anchor: u }) => {
    let h;
    for (; c && c !== u; )
      h = g(c), o(c), c = h;
    o(u);
  }, Z = (c, u, h, _, m, v, w, E, y) => {
    u.type === "svg" ? w = "svg" : u.type === "math" && (w = "mathml"), c == null ? me(
      u,
      h,
      _,
      m,
      v,
      w,
      E,
      y
    ) : $(
      c,
      u,
      m,
      v,
      w,
      E,
      y
    );
  }, me = (c, u, h, _, m, v, w, E) => {
    let y, b;
    const { props: C, shapeFlag: O, transition: T, dirs: P } = c;
    if (y = c.el = i(
      c.type,
      v,
      C && C.is,
      C
    ), O & 8 ? p(y, c.children) : O & 16 && R(
      c.children,
      y,
      null,
      _,
      m,
      Xn(c, v),
      w,
      E
    ), P && ct(c, null, _, "created"), oe(y, c, c.scopeId, w, _), C) {
      for (const z in C)
        z !== "value" && !Lt(z) && r(y, z, null, C[z], v, _);
      "value" in C && r(y, "value", null, C.value, v), (b = C.onVnodeBeforeMount) && je(b, _, c);
    }
    process.env.NODE_ENV !== "production" && (qt(y, "__vnode", c, !0), qt(y, "__vueParentComponent", _, !0)), P && ct(c, null, _, "beforeMount");
    const L = Yl(m, T);
    L && T.beforeEnter(y), s(y, u, h), ((b = C && C.onVnodeMounted) || L || P) && Ee(() => {
      b && je(b, _, c), L && T.enter(y), P && ct(c, null, _, "mounted");
    }, m);
  }, oe = (c, u, h, _, m) => {
    if (h && x(c, h), _)
      for (let v = 0; v < _.length; v++)
        x(c, _[v]);
    if (m) {
      let v = m.subTree;
      if (process.env.NODE_ENV !== "production" && v.patchFlag > 0 && v.patchFlag & 2048 && (v = Ls(v.children) || v), u === v || Mr(v.type) && (v.ssContent === u || v.ssFallback === u)) {
        const w = m.vnode;
        oe(
          c,
          w,
          w.scopeId,
          w.slotScopeIds,
          m.parent
        );
      }
    }
  }, R = (c, u, h, _, m, v, w, E, y = 0) => {
    for (let b = y; b < c.length; b++) {
      const C = c[b] = E ? nt(c[b]) : Se(c[b]);
      I(
        null,
        C,
        u,
        h,
        _,
        m,
        v,
        w,
        E
      );
    }
  }, $ = (c, u, h, _, m, v, w) => {
    const E = u.el = c.el;
    process.env.NODE_ENV !== "production" && (E.__vnode = u);
    let { patchFlag: y, dynamicChildren: b, dirs: C } = u;
    y |= c.patchFlag & 16;
    const O = c.props || B, T = u.props || B;
    let P;
    if (h && at(h, !1), (P = T.onVnodeBeforeUpdate) && je(P, h, u, c), C && ct(u, c, h, "beforeUpdate"), h && at(h, !0), process.env.NODE_ENV !== "production" && Ue && (y = 0, w = !1, b = null), (O.innerHTML && T.innerHTML == null || O.textContent && T.textContent == null) && p(E, ""), b ? (Y(
      c.dynamicChildren,
      b,
      E,
      h,
      _,
      Xn(u, m),
      v
    ), process.env.NODE_ENV !== "production" && dn(c, u)) : w || $e(
      c,
      u,
      E,
      null,
      h,
      _,
      Xn(u, m),
      v,
      !1
    ), y > 0) {
      if (y & 16)
        re(E, O, T, h, m);
      else if (y & 2 && O.class !== T.class && r(E, "class", null, T.class, m), y & 4 && r(E, "style", O.style, T.style, m), y & 8) {
        const L = u.dynamicProps;
        for (let z = 0; z < L.length; z++) {
          const q = L[z], ve = O[q], _e = T[q];
          (_e !== ve || q === "value") && r(E, q, ve, _e, m, h);
        }
      }
      y & 1 && c.children !== u.children && p(E, u.children);
    } else !w && b == null && re(E, O, T, h, m);
    ((P = T.onVnodeUpdated) || C) && Ee(() => {
      P && je(P, h, u, c), C && ct(u, c, h, "updated");
    }, _);
  }, Y = (c, u, h, _, m, v, w) => {
    for (let E = 0; E < u.length; E++) {
      const y = c[E], b = u[E], C = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        y.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (y.type === De || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Ft(y, b) || // - In the case of a component, it could contain anything.
        y.shapeFlag & 198) ? f(y.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          h
        )
      );
      I(
        y,
        b,
        C,
        null,
        _,
        m,
        v,
        w,
        !0
      );
    }
  }, re = (c, u, h, _, m) => {
    if (u !== h) {
      if (u !== B)
        for (const v in u)
          !Lt(v) && !(v in h) && r(
            c,
            v,
            u[v],
            null,
            m,
            _
          );
      for (const v in h) {
        if (Lt(v)) continue;
        const w = h[v], E = u[v];
        w !== E && v !== "value" && r(c, v, E, w, m, _);
      }
      "value" in h && r(c, "value", u.value, h.value, m);
    }
  }, _t = (c, u, h, _, m, v, w, E, y) => {
    const b = u.el = c ? c.el : l(""), C = u.anchor = c ? c.anchor : l("");
    let { patchFlag: O, dynamicChildren: T, slotScopeIds: P } = u;
    process.env.NODE_ENV !== "production" && // #5523 dev root fragment may inherit directives
    (Ue || O & 2048) && (O = 0, y = !1, T = null), P && (E = E ? E.concat(P) : P), c == null ? (s(b, h, _), s(C, h, _), R(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      u.children || [],
      h,
      C,
      m,
      v,
      w,
      E,
      y
    )) : O > 0 && O & 64 && T && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    c.dynamicChildren ? (Y(
      c.dynamicChildren,
      T,
      h,
      m,
      v,
      w,
      E
    ), process.env.NODE_ENV !== "production" ? dn(c, u) : (
      // #2080 if the stable fragment has a key, it's a <template v-for> that may
      //  get moved around. Make sure all root level vnodes inherit el.
      // #2134 or if it's a component root, it may also get moved around
      // as the component is being moved.
      (u.key != null || m && u === m.subTree) && dn(
        c,
        u,
        !0
        /* shallow */
      )
    )) : $e(
      c,
      u,
      h,
      C,
      m,
      v,
      w,
      E,
      y
    );
  }, Ct = (c, u, h, _, m, v, w, E, y) => {
    u.slotScopeIds = E, c == null ? u.shapeFlag & 512 ? m.ctx.activate(
      u,
      h,
      _,
      w,
      y
    ) : ye(
      u,
      h,
      _,
      m,
      v,
      w,
      y
    ) : ae(c, u, y);
  }, ye = (c, u, h, _, m, v, w) => {
    const E = c.component = gc(
      c,
      _,
      m
    );
    if (process.env.NODE_ENV !== "production" && E.type.__hmrId && Gi(E), process.env.NODE_ENV !== "production" && (an(c), Et(E, "mount")), Ps(c) && (E.ctx.renderer = It), process.env.NODE_ENV !== "production" && Et(E, "init"), _c(E, !1, w), process.env.NODE_ENV !== "production" && Nt(E, "init"), process.env.NODE_ENV !== "production" && Ue && (c.el = null), E.asyncDep) {
      if (m && m.registerDep(E, H, w), !c.el) {
        const y = E.subTree = Me(we);
        K(null, y, u, h);
      }
    } else
      H(
        E,
        c,
        u,
        h,
        m,
        v,
        w
      );
    process.env.NODE_ENV !== "production" && (un(), Nt(E, "mount"));
  }, ae = (c, u, h) => {
    const _ = u.component = c.component;
    if (rc(c, u, h))
      if (_.asyncDep && !_.asyncResolved) {
        process.env.NODE_ENV !== "production" && an(u), j(_, u, h), process.env.NODE_ENV !== "production" && un();
        return;
      } else
        _.next = u, _.update();
    else
      u.el = c.el, _.vnode = u;
  }, H = (c, u, h, _, m, v, w) => {
    const E = () => {
      if (c.isMounted) {
        let { next: O, bu: T, u: P, parent: L, vnode: z } = c;
        {
          const Re = Dr(c);
          if (Re) {
            O && (O.el = z.el, j(c, O, w)), Re.asyncDep.then(() => {
              c.isUnmounted || E();
            });
            return;
          }
        }
        let q = O, ve;
        process.env.NODE_ENV !== "production" && an(O || c.vnode), at(c, !1), O ? (O.el = z.el, j(c, O, w)) : O = z, T && xt(T), (ve = O.props && O.props.onVnodeBeforeUpdate) && je(ve, L, O, z), at(c, !0), process.env.NODE_ENV !== "production" && Et(c, "render");
        const _e = ro(c);
        process.env.NODE_ENV !== "production" && Nt(c, "render");
        const Pe = c.subTree;
        c.subTree = _e, process.env.NODE_ENV !== "production" && Et(c, "patch"), I(
          Pe,
          _e,
          // parent may have changed if it's in a teleport
          f(Pe.el),
          // anchor may have changed if it's in a fragment
          on(Pe),
          c,
          m,
          v
        ), process.env.NODE_ENV !== "production" && Nt(c, "patch"), O.el = _e.el, q === null && ic(c, _e.el), P && Ee(P, m), (ve = O.props && O.props.onVnodeUpdated) && Ee(
          () => je(ve, L, O, z),
          m
        ), process.env.NODE_ENV !== "production" && ir(c), process.env.NODE_ENV !== "production" && un();
      } else {
        let O;
        const { el: T, props: P } = u, { bm: L, m: z, parent: q, root: ve, type: _e } = c, Pe = Wt(u);
        at(c, !1), L && xt(L), !Pe && (O = P && P.onVnodeBeforeMount) && je(O, q, u), at(c, !0);
        {
          ve.ce && // @ts-expect-error _def is private
          ve.ce._def.shadowRoot !== !1 && ve.ce._injectChildStyle(_e), process.env.NODE_ENV !== "production" && Et(c, "render");
          const Re = c.subTree = ro(c);
          process.env.NODE_ENV !== "production" && Nt(c, "render"), process.env.NODE_ENV !== "production" && Et(c, "patch"), I(
            null,
            Re,
            h,
            _,
            c,
            m,
            v
          ), process.env.NODE_ENV !== "production" && Nt(c, "patch"), u.el = Re.el;
        }
        if (z && Ee(z, m), !Pe && (O = P && P.onVnodeMounted)) {
          const Re = u;
          Ee(
            () => je(O, q, Re),
            m
          );
        }
        (u.shapeFlag & 256 || q && Wt(q.vnode) && q.vnode.shapeFlag & 256) && c.a && Ee(c.a, m), c.isMounted = !0, process.env.NODE_ENV !== "production" && Qi(c), u = h = _ = null;
      }
    };
    c.scope.on();
    const y = c.effect = new Po(E);
    c.scope.off();
    const b = c.update = y.run.bind(y), C = c.job = y.runIfDirty.bind(y);
    C.i = c, C.id = c.uid, y.scheduler = () => $n(C), at(c, !0), process.env.NODE_ENV !== "production" && (y.onTrack = c.rtc ? (O) => xt(c.rtc, O) : void 0, y.onTrigger = c.rtg ? (O) => xt(c.rtg, O) : void 0), b();
  }, j = (c, u, h) => {
    u.component = c;
    const _ = c.vnode.props;
    c.vnode = u, c.next = null, Rl(c, u.props, _, h), ql(c, u.children, h), Ae(), Js(c), Ie();
  }, $e = (c, u, h, _, m, v, w, E, y = !1) => {
    const b = c && c.children, C = c ? c.shapeFlag : 0, O = u.children, { patchFlag: T, shapeFlag: P } = u;
    if (T > 0) {
      if (T & 128) {
        Mt(
          b,
          O,
          h,
          _,
          m,
          v,
          w,
          E,
          y
        );
        return;
      } else if (T & 256) {
        Ln(
          b,
          O,
          h,
          _,
          m,
          v,
          w,
          E,
          y
        );
        return;
      }
    }
    P & 8 ? (C & 16 && At(b, m, v), O !== b && p(h, O)) : C & 16 ? P & 16 ? Mt(
      b,
      O,
      h,
      _,
      m,
      v,
      w,
      E,
      y
    ) : At(b, m, v, !0) : (C & 8 && p(h, ""), P & 16 && R(
      O,
      h,
      _,
      m,
      v,
      w,
      E,
      y
    ));
  }, Ln = (c, u, h, _, m, v, w, E, y) => {
    c = c || Dt, u = u || Dt;
    const b = c.length, C = u.length, O = Math.min(b, C);
    let T;
    for (T = 0; T < O; T++) {
      const P = u[T] = y ? nt(u[T]) : Se(u[T]);
      I(
        c[T],
        P,
        h,
        null,
        m,
        v,
        w,
        E,
        y
      );
    }
    b > C ? At(
      c,
      m,
      v,
      !0,
      !1,
      O
    ) : R(
      u,
      h,
      _,
      m,
      v,
      w,
      E,
      y,
      O
    );
  }, Mt = (c, u, h, _, m, v, w, E, y) => {
    let b = 0;
    const C = u.length;
    let O = c.length - 1, T = C - 1;
    for (; b <= O && b <= T; ) {
      const P = c[b], L = u[b] = y ? nt(u[b]) : Se(u[b]);
      if (Ft(P, L))
        I(
          P,
          L,
          h,
          null,
          m,
          v,
          w,
          E,
          y
        );
      else
        break;
      b++;
    }
    for (; b <= O && b <= T; ) {
      const P = c[O], L = u[T] = y ? nt(u[T]) : Se(u[T]);
      if (Ft(P, L))
        I(
          P,
          L,
          h,
          null,
          m,
          v,
          w,
          E,
          y
        );
      else
        break;
      O--, T--;
    }
    if (b > O) {
      if (b <= T) {
        const P = T + 1, L = P < C ? u[P].el : _;
        for (; b <= T; )
          I(
            null,
            u[b] = y ? nt(u[b]) : Se(u[b]),
            h,
            L,
            m,
            v,
            w,
            E,
            y
          ), b++;
      }
    } else if (b > T)
      for (; b <= O; )
        et(c[b], m, v, !0), b++;
    else {
      const P = b, L = b, z = /* @__PURE__ */ new Map();
      for (b = L; b <= T; b++) {
        const pe = u[b] = y ? nt(u[b]) : Se(u[b]);
        pe.key != null && (process.env.NODE_ENV !== "production" && z.has(pe.key) && N(
          "Duplicate keys found during update:",
          JSON.stringify(pe.key),
          "Make sure keys are unique."
        ), z.set(pe.key, b));
      }
      let q, ve = 0;
      const _e = T - L + 1;
      let Pe = !1, Re = 0;
      const $t = new Array(_e);
      for (b = 0; b < _e; b++) $t[b] = 0;
      for (b = P; b <= O; b++) {
        const pe = c[b];
        if (ve >= _e) {
          et(pe, m, v, !0);
          continue;
        }
        let Fe;
        if (pe.key != null)
          Fe = z.get(pe.key);
        else
          for (q = L; q <= T; q++)
            if ($t[q - L] === 0 && Ft(pe, u[q])) {
              Fe = q;
              break;
            }
        Fe === void 0 ? et(pe, m, v, !0) : ($t[Fe - L] = b + 1, Fe >= Re ? Re = Fe : Pe = !0, I(
          pe,
          u[Fe],
          h,
          null,
          m,
          v,
          w,
          E,
          y
        ), ve++);
      }
      const Ks = Pe ? Xl($t) : Dt;
      for (q = Ks.length - 1, b = _e - 1; b >= 0; b--) {
        const pe = L + b, Fe = u[pe], Ws = pe + 1 < C ? u[pe + 1].el : _;
        $t[b] === 0 ? I(
          null,
          Fe,
          h,
          Ws,
          m,
          v,
          w,
          E,
          y
        ) : Pe && (q < 0 || b !== Ks[q] ? bt(Fe, h, Ws, 2) : q--);
      }
    }
  }, bt = (c, u, h, _, m = null) => {
    const { el: v, type: w, transition: E, children: y, shapeFlag: b } = c;
    if (b & 6) {
      bt(c.component.subTree, u, h, _);
      return;
    }
    if (b & 128) {
      c.suspense.move(u, h, _);
      return;
    }
    if (b & 64) {
      w.move(c, u, h, It);
      return;
    }
    if (w === De) {
      s(v, u, h);
      for (let O = 0; O < y.length; O++)
        bt(y[O], u, h, _);
      s(c.anchor, u, h);
      return;
    }
    if (w === hn) {
      ce(c, u, h);
      return;
    }
    if (_ !== 2 && b & 1 && E)
      if (_ === 0)
        E.beforeEnter(v), s(v, u, h), Ee(() => E.enter(v), m);
      else {
        const { leave: O, delayLeave: T, afterLeave: P } = E, L = () => {
          c.ctx.isUnmounted ? o(v) : s(v, u, h);
        }, z = () => {
          O(v, () => {
            L(), P && P();
          });
        };
        T ? T(v, L, z) : z();
      }
    else
      s(v, u, h);
  }, et = (c, u, h, _ = !1, m = !1) => {
    const {
      type: v,
      props: w,
      ref: E,
      children: y,
      dynamicChildren: b,
      shapeFlag: C,
      patchFlag: O,
      dirs: T,
      cacheIndex: P
    } = c;
    if (O === -2 && (m = !1), E != null && (Ae(), Kt(E, null, h, c, !0), Ie()), P != null && (u.renderCache[P] = void 0), C & 256) {
      u.ctx.deactivate(c);
      return;
    }
    const L = C & 1 && T, z = !Wt(c);
    let q;
    if (z && (q = w && w.onVnodeBeforeUnmount) && je(q, u, c), C & 6)
      Wr(c.component, h, _);
    else {
      if (C & 128) {
        c.suspense.unmount(h, _);
        return;
      }
      L && ct(c, null, u, "beforeUnmount"), C & 64 ? c.type.remove(
        c,
        u,
        h,
        It,
        _
      ) : b && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !b.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (v !== De || O > 0 && O & 64) ? At(
        b,
        u,
        h,
        !1,
        !0
      ) : (v === De && O & 384 || !m && C & 16) && At(y, u, h), _ && kn(c);
    }
    (z && (q = w && w.onVnodeUnmounted) || L) && Ee(() => {
      q && je(q, u, c), L && ct(c, null, u, "unmounted");
    }, h);
  }, kn = (c) => {
    const { type: u, el: h, anchor: _, transition: m } = c;
    if (u === De) {
      process.env.NODE_ENV !== "production" && c.patchFlag > 0 && c.patchFlag & 2048 && m && !m.persisted ? c.children.forEach((w) => {
        w.type === we ? o(w.el) : kn(w);
      }) : Kr(h, _);
      return;
    }
    if (u === hn) {
      V(c);
      return;
    }
    const v = () => {
      o(h), m && !m.persisted && m.afterLeave && m.afterLeave();
    };
    if (c.shapeFlag & 1 && m && !m.persisted) {
      const { leave: w, delayLeave: E } = m, y = () => w(h, v);
      E ? E(c.el, v, y) : y();
    } else
      v();
  }, Kr = (c, u) => {
    let h;
    for (; c !== u; )
      h = g(c), o(c), c = h;
    o(u);
  }, Wr = (c, u, h) => {
    process.env.NODE_ENV !== "production" && c.type.__hmrId && zi(c);
    const {
      bum: _,
      scope: m,
      job: v,
      subTree: w,
      um: E,
      m: y,
      a: b,
      parent: C,
      slots: { __: O }
    } = c;
    oo(y), oo(b), _ && xt(_), C && M(O) && O.forEach((T) => {
      C.renderCache[T] = void 0;
    }), m.stop(), v && (v.flags |= 8, et(w, c, u, h)), E && Ee(E, u), Ee(() => {
      c.isUnmounted = !0;
    }, u), u && u.pendingBranch && !u.isUnmounted && c.asyncDep && !c.asyncResolved && c.suspenseId === u.pendingId && (u.deps--, u.deps === 0 && u.resolve()), process.env.NODE_ENV !== "production" && tl(c);
  }, At = (c, u, h, _ = !1, m = !1, v = 0) => {
    for (let w = v; w < c.length; w++)
      et(c[w], u, h, _, m);
  }, on = (c) => {
    if (c.shapeFlag & 6)
      return on(c.component.subTree);
    if (c.shapeFlag & 128)
      return c.suspense.next();
    const u = g(c.anchor || c.el), h = u && u[ll];
    return h ? g(h) : u;
  };
  let Un = !1;
  const Us = (c, u, h) => {
    c == null ? u._vnode && et(u._vnode, null, null, !0) : I(
      u._vnode || null,
      c,
      u,
      null,
      null,
      null,
      h
    ), u._vnode = c, Un || (Un = !0, Js(), sr(), Un = !1);
  }, It = {
    p: I,
    um: et,
    m: bt,
    r: kn,
    mt: ye,
    mc: R,
    pc: $e,
    pbc: Y,
    n: on,
    o: e
  };
  return {
    render: Us,
    hydrate: void 0,
    createApp: Al(Us)
  };
}
function Xn({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function at({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function Yl(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function dn(e, t, n = !1) {
  const s = e.children, o = t.children;
  if (M(s) && M(o))
    for (let r = 0; r < s.length; r++) {
      const i = s[r];
      let l = o[r];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = o[r] = nt(o[r]), l.el = i.el), !n && l.patchFlag !== -2 && dn(i, l)), l.type === nn && (l.el = i.el), l.type === we && !l.el && (l.el = i.el), process.env.NODE_ENV !== "production" && l.el && (l.el.__vnode = l);
    }
}
function Xl(e) {
  const t = e.slice(), n = [0];
  let s, o, r, i, l;
  const a = e.length;
  for (s = 0; s < a; s++) {
    const d = e[s];
    if (d !== 0) {
      if (o = n[n.length - 1], e[o] < d) {
        t[s] = o, n.push(s);
        continue;
      }
      for (r = 0, i = n.length - 1; r < i; )
        l = r + i >> 1, e[n[l]] < d ? r = l + 1 : i = l;
      d < e[n[r]] && (r > 0 && (t[s] = n[r - 1]), n[r] = s);
    }
  }
  for (r = n.length, i = n[r - 1]; r-- > 0; )
    n[r] = i, i = t[i];
  return n;
}
function Dr(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Dr(t);
}
function oo(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const Zl = Symbol.for("v-scx"), Ql = () => {
  {
    const e = pn(Zl);
    return e || process.env.NODE_ENV !== "production" && N(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function Zn(e, t, n) {
  return process.env.NODE_ENV !== "production" && !A(t) && N(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), Sr(e, t, n);
}
function Sr(e, t, n = B) {
  const { immediate: s, deep: o, flush: r, once: i } = n;
  process.env.NODE_ENV !== "production" && !t && (s !== void 0 && N(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), o !== void 0 && N(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), i !== void 0 && N(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const l = ee({}, n);
  process.env.NODE_ENV !== "production" && (l.onWarn = N);
  const a = t && s || !t && r !== "post";
  let d;
  if (Xt) {
    if (r === "sync") {
      const x = Ql();
      d = x.__watcherHandles || (x.__watcherHandles = []);
    } else if (!a) {
      const x = () => {
      };
      return x.stop = se, x.resume = se, x.pause = se, x;
    }
  }
  const p = ie;
  l.call = (x, S, I) => Be(x, p, S, I);
  let f = !1;
  r === "post" ? l.scheduler = (x) => {
    Ee(x, p && p.suspense);
  } : r !== "sync" && (f = !0, l.scheduler = (x, S) => {
    S ? x() : $n(x);
  }), l.augmentJob = (x) => {
    t && (x.flags |= 4), f && (x.flags |= 2, p && (x.id = p.uid, x.i = p));
  };
  const g = Hi(e, t, l);
  return Xt && (d ? d.push(g) : a && g()), g;
}
function ec(e, t, n) {
  const s = this.proxy, o = X(e) ? e.includes(".") ? Tr(s, e) : () => s[e] : e.bind(s, s);
  let r;
  A(t) ? r = t : (r = t.handler, n = t);
  const i = sn(this), l = Sr(o, r.bind(s), n);
  return i(), l;
}
function Tr(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let o = 0; o < n.length && s; o++)
      s = s[n[o]];
    return s;
  };
}
const tc = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${Ve(t)}Modifiers`] || e[`${Xe(t)}Modifiers`];
function nc(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || B;
  if (process.env.NODE_ENV !== "production") {
    const {
      emitsOptions: p,
      propsOptions: [f]
    } = e;
    if (p)
      if (!(t in p))
        (!f || !(ut(Ve(t)) in f)) && N(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${ut(Ve(t))}" prop.`
        );
      else {
        const g = p[t];
        A(g) && (g(...n) || N(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let o = n;
  const r = t.startsWith("update:"), i = r && tc(s, t.slice(7));
  if (i && (i.trim && (o = n.map((p) => X(p) ? p.trim() : p)), i.number && (o = n.map(ss))), process.env.NODE_ENV !== "production" && ol(e, t, o), process.env.NODE_ENV !== "production") {
    const p = t.toLowerCase();
    p !== t && s[ut(p)] && N(
      `Event "${p}" is emitted in component ${Hn(
        e,
        e.type
      )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${Xe(
        t
      )}" instead of "${t}".`
    );
  }
  let l, a = s[l = ut(t)] || // also try camelCase event handler (#2249)
  s[l = ut(Ve(t))];
  !a && r && (a = s[l = ut(Xe(t))]), a && Be(
    a,
    e,
    6,
    o
  );
  const d = s[l + "Once"];
  if (d) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, Be(
      d,
      e,
      6,
      o
    );
  }
}
function Vr(e, t, n = !1) {
  const s = t.emitsCache, o = s.get(e);
  if (o !== void 0)
    return o;
  const r = e.emits;
  let i = {}, l = !1;
  if (!A(e)) {
    const a = (d) => {
      const p = Vr(d, t, !0);
      p && (l = !0, ee(i, p));
    };
    !n && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  return !r && !l ? (G(e) && s.set(e, null), null) : (M(r) ? r.forEach((a) => i[a] = null) : ee(i, r), G(e) && s.set(e, i), i);
}
function Rn(e, t) {
  return !e || !Zt(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), k(e, t[0].toLowerCase() + t.slice(1)) || k(e, Xe(t)) || k(e, t));
}
let gs = !1;
function Dn() {
  gs = !0;
}
function ro(e) {
  const {
    type: t,
    vnode: n,
    proxy: s,
    withProxy: o,
    propsOptions: [r],
    slots: i,
    attrs: l,
    emit: a,
    render: d,
    renderCache: p,
    props: f,
    data: g,
    setupState: x,
    ctx: S,
    inheritAttrs: I
  } = e, te = xn(e);
  let K, J;
  process.env.NODE_ENV !== "production" && (gs = !1);
  try {
    if (n.shapeFlag & 4) {
      const V = o || s, Z = process.env.NODE_ENV !== "production" && x.__isScriptSetup ? new Proxy(V, {
        get(me, oe, R) {
          return N(
            `Property '${String(
              oe
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(me, oe, R);
        }
      }) : V;
      K = Se(
        d.call(
          Z,
          V,
          p,
          process.env.NODE_ENV !== "production" ? ke(f) : f,
          x,
          g,
          S
        )
      ), J = l;
    } else {
      const V = t;
      process.env.NODE_ENV !== "production" && l === f && Dn(), K = Se(
        V.length > 1 ? V(
          process.env.NODE_ENV !== "production" ? ke(f) : f,
          process.env.NODE_ENV !== "production" ? {
            get attrs() {
              return Dn(), ke(l);
            },
            slots: i,
            emit: a
          } : { attrs: l, slots: i, emit: a }
        ) : V(
          process.env.NODE_ENV !== "production" ? ke(f) : f,
          null
        )
      ), J = t.props ? l : sc(l);
    }
  } catch (V) {
    Bt.length = 0, en(V, e, 1), K = Me(we);
  }
  let U = K, ce;
  if (process.env.NODE_ENV !== "production" && K.patchFlag > 0 && K.patchFlag & 2048 && ([U, ce] = Cr(K)), J && I !== !1) {
    const V = Object.keys(J), { shapeFlag: Z } = U;
    if (V.length) {
      if (Z & 7)
        r && V.some(vn) && (J = oc(
          J,
          r
        )), U = it(U, J, !1, !0);
      else if (process.env.NODE_ENV !== "production" && !gs && U.type !== we) {
        const me = Object.keys(l), oe = [], R = [];
        for (let $ = 0, Y = me.length; $ < Y; $++) {
          const re = me[$];
          Zt(re) ? vn(re) || oe.push(re[2].toLowerCase() + re.slice(3)) : R.push(re);
        }
        R.length && N(
          `Extraneous non-props attributes (${R.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text or teleport root nodes.`
        ), oe.length && N(
          `Extraneous non-emits event listeners (${oe.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return n.dirs && (process.env.NODE_ENV !== "production" && !io(U) && N(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), U = it(U, null, !1, !0), U.dirs = U.dirs ? U.dirs.concat(n.dirs) : n.dirs), n.transition && (process.env.NODE_ENV !== "production" && !io(U) && N(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), Is(U, n.transition)), process.env.NODE_ENV !== "production" && ce ? ce(U) : K = U, xn(te), K;
}
const Cr = (e) => {
  const t = e.children, n = e.dynamicChildren, s = Ls(t, !1);
  if (s) {
    if (process.env.NODE_ENV !== "production" && s.patchFlag > 0 && s.patchFlag & 2048)
      return Cr(s);
  } else return [e, void 0];
  const o = t.indexOf(s), r = n ? n.indexOf(s) : -1, i = (l) => {
    t[o] = l, n && (r > -1 ? n[r] = l : l.patchFlag > 0 && (e.dynamicChildren = [...n, l]));
  };
  return [Se(s), i];
};
function Ls(e, t = !0) {
  let n;
  for (let s = 0; s < e.length; s++) {
    const o = e[s];
    if (Fn(o)) {
      if (o.type !== we || o.children === "v-if") {
        if (n)
          return;
        if (n = o, process.env.NODE_ENV !== "production" && t && n.patchFlag > 0 && n.patchFlag & 2048)
          return Ls(n.children);
      }
    } else
      return;
  }
  return n;
}
const sc = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Zt(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, oc = (e, t) => {
  const n = {};
  for (const s in e)
    (!vn(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
}, io = (e) => e.shapeFlag & 7 || e.type === we;
function rc(e, t, n) {
  const { props: s, children: o, component: r } = e, { props: i, children: l, patchFlag: a } = t, d = r.emitsOptions;
  if (process.env.NODE_ENV !== "production" && (o || l) && Ue || t.dirs || t.transition)
    return !0;
  if (n && a >= 0) {
    if (a & 1024)
      return !0;
    if (a & 16)
      return s ? lo(s, i, d) : !!i;
    if (a & 8) {
      const p = t.dynamicProps;
      for (let f = 0; f < p.length; f++) {
        const g = p[f];
        if (i[g] !== s[g] && !Rn(d, g))
          return !0;
      }
    }
  } else
    return (o || l) && (!l || !l.$stable) ? !0 : s === i ? !1 : s ? i ? lo(s, i, d) : !0 : !!i;
  return !1;
}
function lo(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let o = 0; o < s.length; o++) {
    const r = s[o];
    if (t[r] !== e[r] && !Rn(n, r))
      return !0;
  }
  return !1;
}
function ic({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const s = t.subTree;
    if (s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const Mr = (e) => e.__isSuspense;
function lc(e, t) {
  t && t.pendingBranch ? M(e) ? t.effects.push(...e) : t.effects.push(e) : nr(e);
}
const De = Symbol.for("v-fgt"), nn = Symbol.for("v-txt"), we = Symbol.for("v-cmt"), hn = Symbol.for("v-stc"), Bt = [];
let xe = null;
function Ne(e = !1) {
  Bt.push(xe = e ? null : []);
}
function cc() {
  Bt.pop(), xe = Bt[Bt.length - 1] || null;
}
let Yt = 1;
function co(e, t = !1) {
  Yt += e, e < 0 && xe && t && (xe.hasOnce = !0);
}
function Ar(e) {
  return e.dynamicChildren = Yt > 0 ? xe || Dt : null, cc(), Yt > 0 && xe && xe.push(e), e;
}
function Oe(e, t, n, s, o, r) {
  return Ar(
    D(
      e,
      t,
      n,
      s,
      o,
      r,
      !0
    )
  );
}
function ac(e, t, n, s, o) {
  return Ar(
    Me(
      e,
      t,
      n,
      s,
      o,
      !0
    )
  );
}
function Fn(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Ft(e, t) {
  if (process.env.NODE_ENV !== "production" && t.shapeFlag & 6 && e.component) {
    const n = fn.get(t.type);
    if (n && n.has(e.component))
      return e.shapeFlag &= -257, t.shapeFlag &= -513, !1;
  }
  return e.type === t.type && e.key === t.key;
}
const uc = (...e) => $r(
  ...e
), Ir = ({ key: e }) => e ?? null, gn = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? X(e) || Q(e) || A(e) ? { i: fe, r: e, k: t, f: !!n } : e : null);
function D(e, t = null, n = null, s = 0, o = null, r = e === De ? 0 : 1, i = !1, l = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && Ir(t),
    ref: t && gn(t),
    scopeId: cr,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: r,
    patchFlag: s,
    dynamicProps: o,
    dynamicChildren: null,
    appContext: null,
    ctx: fe
  };
  return l ? (ks(a, n), r & 128 && e.normalize(a)) : n && (a.shapeFlag |= X(n) ? 8 : 16), process.env.NODE_ENV !== "production" && a.key !== a.key && N("VNode created with invalid key (NaN). VNode type:", a.type), Yt > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  xe && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || r & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && xe.push(a), a;
}
const Me = process.env.NODE_ENV !== "production" ? uc : $r;
function $r(e, t = null, n = null, s = 0, o = null, r = !1) {
  if ((!e || e === El) && (process.env.NODE_ENV !== "production" && !e && N(`Invalid vnode type when creating vnode: ${e}.`), e = we), Fn(e)) {
    const l = it(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && ks(l, n), Yt > 0 && !r && xe && (l.shapeFlag & 6 ? xe[xe.indexOf(e)] = l : xe.push(l)), l.patchFlag = -2, l;
  }
  if (Lr(e) && (e = e.__vccOpts), t) {
    t = fc(t);
    let { class: l, style: a } = t;
    l && !X(l) && (t.class = ot(l)), G(a) && (_n(a) && !M(a) && (a = ee({}, a)), t.style = xs(a));
  }
  const i = X(e) ? 1 : Mr(e) ? 128 : cl(e) ? 64 : G(e) ? 4 : A(e) ? 2 : 0;
  return process.env.NODE_ENV !== "production" && i & 4 && _n(e) && (e = F(e), N(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), D(
    e,
    t,
    n,
    s,
    o,
    i,
    r,
    !0
  );
}
function fc(e) {
  return e ? _n(e) || yr(e) ? ee({}, e) : e : null;
}
function it(e, t, n = !1, s = !1) {
  const { props: o, ref: r, patchFlag: i, children: l, transition: a } = e, d = t ? pc(o || {}, t) : o, p = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: d,
    key: d && Ir(d),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && r ? M(r) ? r.concat(gn(t)) : [r, gn(t)] : gn(t)
    ) : r,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: process.env.NODE_ENV !== "production" && i === -1 && M(l) ? l.map(Pr) : l,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== De ? i === -1 ? 16 : i | 16 : i,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: a,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && it(e.ssContent),
    ssFallback: e.ssFallback && it(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return a && s && Is(
    p,
    a.clone(p)
  ), p;
}
function Pr(e) {
  const t = it(e);
  return M(e.children) && (t.children = e.children.map(Pr)), t;
}
function Rr(e = " ", t = 0) {
  return Me(nn, null, e, t);
}
function Qn(e = "", t = !1) {
  return t ? (Ne(), ac(we, null, e)) : Me(we, null, e);
}
function Se(e) {
  return e == null || typeof e == "boolean" ? Me(we) : M(e) ? Me(
    De,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Fn(e) ? nt(e) : Me(nn, null, String(e));
}
function nt(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : it(e);
}
function ks(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (M(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const o = t.default;
      o && (o._c && (o._d = !1), ks(e, o()), o._c && (o._d = !0));
      return;
    } else {
      n = 32;
      const o = t._;
      !o && !yr(t) ? t._ctx = fe : o === 3 && fe && (fe.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else A(t) ? (t = { default: t, _ctx: fe }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [Rr(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function pc(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const o in s)
      if (o === "class")
        t.class !== s.class && (t.class = ot([t.class, s.class]));
      else if (o === "style")
        t.style = xs([t.style, s.style]);
      else if (Zt(o)) {
        const r = t[o], i = s[o];
        i && r !== i && !(M(r) && r.includes(i)) && (t[o] = r ? [].concat(r, i) : i);
      } else o !== "" && (t[o] = s[o]);
  }
  return t;
}
function je(e, t, n, s = null) {
  Be(e, t, 7, [
    n,
    s
  ]);
}
const dc = vr();
let hc = 0;
function gc(e, t, n) {
  const s = e.type, o = (t ? t.appContext : e.appContext) || dc, r = {
    uid: hc++,
    vnode: e,
    type: s,
    parent: t,
    appContext: o,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new ui(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(o.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: Nr(s, o),
    emitsOptions: Vr(s, o),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: B,
    // inheritAttrs
    inheritAttrs: s.inheritAttrs,
    // state
    ctx: B,
    data: B,
    props: B,
    attrs: B,
    slots: B,
    refs: B,
    setupState: B,
    setupContext: null,
    // suspense related
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return process.env.NODE_ENV !== "production" ? r.ctx = Nl(r) : r.ctx = { _: r }, r.root = t ? t.root : r, r.emit = nc.bind(null, r), e.ce && e.ce(r), r;
}
let ie = null;
const mc = () => ie || fe;
let Sn, ms;
{
  const e = Qt(), t = (n, s) => {
    let o;
    return (o = e[n]) || (o = e[n] = []), o.push(s), (r) => {
      o.length > 1 ? o.forEach((i) => i(r)) : o[0](r);
    };
  };
  Sn = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => ie = n
  ), ms = t(
    "__VUE_SSR_SETTERS__",
    (n) => Xt = n
  );
}
const sn = (e) => {
  const t = ie;
  return Sn(e), e.scope.on(), () => {
    e.scope.off(), Sn(t);
  };
}, ao = () => {
  ie && ie.scope.off(), Sn(null);
}, vc = /* @__PURE__ */ Ze("slot,component");
function vs(e, { isNativeTag: t }) {
  (vc(e) || t(e)) && N(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function Fr(e) {
  return e.vnode.shapeFlag & 4;
}
let Xt = !1;
function _c(e, t = !1, n = !1) {
  t && ms(t);
  const { props: s, children: o } = e.vnode, r = Fr(e);
  $l(e, s, r, t), Bl(e, o, n || t);
  const i = r ? bc(e, t) : void 0;
  return t && ms(!1), i;
}
function bc(e, t) {
  var n;
  const s = e.type;
  if (process.env.NODE_ENV !== "production") {
    if (s.name && vs(s.name, e.appContext.config), s.components) {
      const r = Object.keys(s.components);
      for (let i = 0; i < r.length; i++)
        vs(r[i], e.appContext.config);
    }
    if (s.directives) {
      const r = Object.keys(s.directives);
      for (let i = 0; i < r.length; i++)
        ar(r[i]);
    }
    s.compilerOptions && yc() && N(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, hr), process.env.NODE_ENV !== "production" && xl(e);
  const { setup: o } = s;
  if (o) {
    Ae();
    const r = e.setupContext = o.length > 1 ? Nc(e) : null, i = sn(e), l = Vt(
      o,
      e,
      0,
      [
        process.env.NODE_ENV !== "production" ? ke(e.props) : e.props,
        r
      ]
    ), a = ys(l);
    if (Ie(), i(), (a || e.sp) && !Wt(e) && ur(e), a) {
      if (l.then(ao, ao), t)
        return l.then((d) => {
          uo(e, d, t);
        }).catch((d) => {
          en(d, e, 0);
        });
      if (e.asyncDep = l, process.env.NODE_ENV !== "production" && !e.suspense) {
        const d = (n = s.name) != null ? n : "Anonymous";
        N(
          `Component <${d}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      uo(e, l, t);
  } else
    jr(e, t);
}
function uo(e, t, n) {
  A(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : G(t) ? (process.env.NODE_ENV !== "production" && Fn(t) && N(
    "setup() should not return VNodes directly - return a render function instead."
  ), process.env.NODE_ENV !== "production" && (e.devtoolsRawSetupState = t), e.setupState = Zo(t), process.env.NODE_ENV !== "production" && wl(e)) : process.env.NODE_ENV !== "production" && t !== void 0 && N(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), jr(e, n);
}
const yc = () => !0;
function jr(e, t, n) {
  const s = e.type;
  e.render || (e.render = s.render || se);
  {
    const o = sn(e);
    Ae();
    try {
      Dl(e);
    } finally {
      Ie(), o();
    }
  }
  process.env.NODE_ENV !== "production" && !s.render && e.render === se && !t && (s.template ? N(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : N("Component is missing template or render function: ", s));
}
const fo = process.env.NODE_ENV !== "production" ? {
  get(e, t) {
    return Dn(), ne(e, "get", ""), e[t];
  },
  set() {
    return N("setupContext.attrs is readonly."), !1;
  },
  deleteProperty() {
    return N("setupContext.attrs is readonly."), !1;
  }
} : {
  get(e, t) {
    return ne(e, "get", ""), e[t];
  }
};
function Ec(e) {
  return new Proxy(e.slots, {
    get(t, n) {
      return ne(e, "get", "$slots"), t[n];
    }
  });
}
function Nc(e) {
  const t = (n) => {
    if (process.env.NODE_ENV !== "production" && (e.exposed && N("expose() should be called only once per setup()."), n != null)) {
      let s = typeof n;
      s === "object" && (M(n) ? s = "array" : Q(n) && (s = "ref")), s !== "object" && N(
        `expose() should be passed a plain object, received ${s}.`
      );
    }
    e.exposed = n || {};
  };
  if (process.env.NODE_ENV !== "production") {
    let n, s;
    return Object.freeze({
      get attrs() {
        return n || (n = new Proxy(e.attrs, fo));
      },
      get slots() {
        return s || (s = Ec(e));
      },
      get emit() {
        return (o, ...r) => e.emit(o, ...r);
      },
      expose: t
    });
  } else
    return {
      attrs: new Proxy(e.attrs, fo),
      slots: e.slots,
      emit: e.emit,
      expose: t
    };
}
function jn(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Zo(Mi(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in mt)
        return mt[n](e);
    },
    has(t, n) {
      return n in t || n in mt;
    }
  })) : e.proxy;
}
const xc = /(?:^|[-_])(\w)/g, wc = (e) => e.replace(xc, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Hr(e, t = !0) {
  return A(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Hn(e, t, n = !1) {
  let s = Hr(t);
  if (!s && t.__file) {
    const o = t.__file.match(/([^/\\]+)\.\w+$/);
    o && (s = o[1]);
  }
  if (!s && e && e.parent) {
    const o = (r) => {
      for (const i in r)
        if (r[i] === t)
          return i;
    };
    s = o(
      e.components || e.parent.type.components
    ) || o(e.appContext.components);
  }
  return s ? wc(s) : n ? "App" : "Anonymous";
}
function Lr(e) {
  return A(e) && "__vccOpts" in e;
}
const Oc = (e, t) => {
  const n = Fi(e, t, Xt);
  if (process.env.NODE_ENV !== "production") {
    const s = mc();
    s && s.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
  }
  return n;
};
function Dc() {
  if (process.env.NODE_ENV === "production" || typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, s = { style: "color:#eb2f96" }, o = {
    __vue_custom_formatter: !0,
    header(f) {
      if (!G(f))
        return null;
      if (f.__isVue)
        return ["div", e, "VueInstance"];
      if (Q(f)) {
        Ae();
        const g = f.value;
        return Ie(), [
          "div",
          {},
          ["span", e, p(f)],
          "<",
          l(g),
          ">"
        ];
      } else {
        if (ht(f))
          return [
            "div",
            {},
            ["span", e, ge(f) ? "ShallowReactive" : "Reactive"],
            "<",
            l(f),
            `>${We(f) ? " (readonly)" : ""}`
          ];
        if (We(f))
          return [
            "div",
            {},
            ["span", e, ge(f) ? "ShallowReadonly" : "Readonly"],
            "<",
            l(f),
            ">"
          ];
      }
      return null;
    },
    hasBody(f) {
      return f && f.__isVue;
    },
    body(f) {
      if (f && f.__isVue)
        return [
          "div",
          {},
          ...r(f.$)
        ];
    }
  };
  function r(f) {
    const g = [];
    f.type.props && f.props && g.push(i("props", F(f.props))), f.setupState !== B && g.push(i("setup", f.setupState)), f.data !== B && g.push(i("data", F(f.data)));
    const x = a(f, "computed");
    x && g.push(i("computed", x));
    const S = a(f, "inject");
    return S && g.push(i("injected", S)), g.push([
      "div",
      {},
      [
        "span",
        {
          style: s.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: f }]
    ]), g;
  }
  function i(f, g) {
    return g = ee({}, g), Object.keys(g).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        f
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(g).map((x) => [
          "div",
          {},
          ["span", s, x + ": "],
          l(g[x], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function l(f, g = !0) {
    return typeof f == "number" ? ["span", t, f] : typeof f == "string" ? ["span", n, JSON.stringify(f)] : typeof f == "boolean" ? ["span", s, f] : G(f) ? ["object", { object: g ? F(f) : f }] : ["span", n, String(f)];
  }
  function a(f, g) {
    const x = f.type;
    if (A(x))
      return;
    const S = {};
    for (const I in f.ctx)
      d(x, I, g) && (S[I] = f.ctx[I]);
    return S;
  }
  function d(f, g, x) {
    const S = f[x];
    if (M(S) && S.includes(g) || G(S) && g in S || f.extends && d(f.extends, g, x) || f.mixins && f.mixins.some((I) => d(I, g, x)))
      return !0;
  }
  function p(f) {
    return ge(f) ? "ShallowRef" : f.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(o) : window.devtoolsFormatters = [o];
}
const po = "3.5.17", Ye = process.env.NODE_ENV !== "production" ? N : se;
process.env.NODE_ENV;
process.env.NODE_ENV;
/**
* @vue/runtime-dom v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let _s;
const ho = typeof window < "u" && window.trustedTypes;
if (ho)
  try {
    _s = /* @__PURE__ */ ho.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch (e) {
    process.env.NODE_ENV !== "production" && Ye(`Error creating trusted types policy: ${e}`);
  }
const kr = _s ? (e) => _s.createHTML(e) : (e) => e, Sc = "http://www.w3.org/2000/svg", Tc = "http://www.w3.org/1998/Math/MathML", ze = typeof document < "u" ? document : null, go = ze && /* @__PURE__ */ ze.createElement("template"), Vc = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const o = t === "svg" ? ze.createElementNS(Sc, e) : t === "mathml" ? ze.createElementNS(Tc, e) : n ? ze.createElement(e, { is: n }) : ze.createElement(e);
    return e === "select" && s && s.multiple != null && o.setAttribute("multiple", s.multiple), o;
  },
  createText: (e) => ze.createTextNode(e),
  createComment: (e) => ze.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => ze.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, s, o, r) {
    const i = n ? n.previousSibling : t.lastChild;
    if (o && (o === r || o.nextSibling))
      for (; t.insertBefore(o.cloneNode(!0), n), !(o === r || !(o = o.nextSibling)); )
        ;
    else {
      go.innerHTML = kr(
        s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e
      );
      const l = go.content;
      if (s === "svg" || s === "mathml") {
        const a = l.firstChild;
        for (; a.firstChild; )
          l.appendChild(a.firstChild);
        l.removeChild(a);
      }
      t.insertBefore(l, n);
    }
    return [
      // first
      i ? i.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, Cc = Symbol("_vtc");
function Mc(e, t, n) {
  const s = e[Cc];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const mo = Symbol("_vod"), Ac = Symbol("_vsh");
process.env.NODE_ENV;
const Ic = Symbol(process.env.NODE_ENV !== "production" ? "CSS_VAR_TEXT" : ""), $c = /(^|;)\s*display\s*:/;
function Pc(e, t, n) {
  const s = e.style, o = X(n);
  let r = !1;
  if (n && !o) {
    if (t)
      if (X(t))
        for (const i of t.split(";")) {
          const l = i.slice(0, i.indexOf(":")).trim();
          n[l] == null && mn(s, l, "");
        }
      else
        for (const i in t)
          n[i] == null && mn(s, i, "");
    for (const i in n)
      i === "display" && (r = !0), mn(s, i, n[i]);
  } else if (o) {
    if (t !== n) {
      const i = s[Ic];
      i && (n += ";" + i), s.cssText = n, r = $c.test(n);
    }
  } else t && e.removeAttribute("style");
  mo in e && (e[mo] = r ? s.display : "", e[Ac] && (s.display = "none"));
}
const Rc = /[^\\];\s*$/, vo = /\s*!important$/;
function mn(e, t, n) {
  if (M(n))
    n.forEach((s) => mn(e, t, s));
  else if (n == null && (n = ""), process.env.NODE_ENV !== "production" && Rc.test(n) && Ye(
    `Unexpected semicolon at the end of '${t}' style value: '${n}'`
  ), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const s = Fc(e, t);
    vo.test(n) ? e.setProperty(
      Xe(s),
      n.replace(vo, ""),
      "important"
    ) : e[s] = n;
  }
}
const _o = ["Webkit", "Moz", "ms"], es = {};
function Fc(e, t) {
  const n = es[t];
  if (n)
    return n;
  let s = Ve(t);
  if (s !== "filter" && s in e)
    return es[t] = s;
  s = Cn(s);
  for (let o = 0; o < _o.length; o++) {
    const r = _o[o] + s;
    if (r in e)
      return es[t] = r;
  }
  return t;
}
const bo = "http://www.w3.org/1999/xlink";
function yo(e, t, n, s, o, r = ai(t)) {
  s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(bo, t.slice(6, t.length)) : e.setAttributeNS(bo, t, n) : n == null || r && !Ao(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    r ? "" : lt(n) ? String(n) : n
  );
}
function Eo(e, t, n, s, o) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? kr(n) : n);
    return;
  }
  const r = e.tagName;
  if (t === "value" && r !== "PROGRESS" && // custom elements may use _value internally
  !r.includes("-")) {
    const l = r === "OPTION" ? e.getAttribute("value") || "" : e.value, a = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (l !== a || !("_value" in e)) && (e.value = a), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let i = !1;
  if (n === "" || n == null) {
    const l = typeof e[t];
    l === "boolean" ? n = Ao(n) : n == null && l === "string" ? (n = "", i = !0) : l === "number" && (n = 0, i = !0);
  }
  try {
    e[t] = n;
  } catch (l) {
    process.env.NODE_ENV !== "production" && !i && Ye(
      `Failed setting prop "${t}" on <${r.toLowerCase()}>: value ${n} is invalid.`,
      l
    );
  }
  i && e.removeAttribute(o || t);
}
function Ot(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function jc(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const No = Symbol("_vei");
function Hc(e, t, n, s, o = null) {
  const r = e[No] || (e[No] = {}), i = r[t];
  if (s && i)
    i.value = process.env.NODE_ENV !== "production" ? wo(s, t) : s;
  else {
    const [l, a] = Lc(t);
    if (s) {
      const d = r[t] = Kc(
        process.env.NODE_ENV !== "production" ? wo(s, t) : s,
        o
      );
      Ot(e, l, d, a);
    } else i && (jc(e, l, i, a), r[t] = void 0);
  }
}
const xo = /(?:Once|Passive|Capture)$/;
function Lc(e) {
  let t;
  if (xo.test(e)) {
    t = {};
    let s;
    for (; s = e.match(xo); )
      e = e.slice(0, e.length - s[0].length), t[s[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Xe(e.slice(2)), t];
}
let ts = 0;
const kc = /* @__PURE__ */ Promise.resolve(), Uc = () => ts || (kc.then(() => ts = 0), ts = Date.now());
function Kc(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    Be(
      Wc(s, n.value),
      t,
      5,
      [s]
    );
  };
  return n.value = e, n.attached = Uc(), n;
}
function wo(e, t) {
  return A(e) || M(e) ? e : (Ye(
    `Wrong type passed as event handler to ${t} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof e}.`
  ), se);
}
function Wc(e, t) {
  if (M(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (s) => (o) => !o._stopped && s && s(o)
    );
  } else
    return t;
}
const Oo = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Bc = (e, t, n, s, o, r) => {
  const i = o === "svg";
  t === "class" ? Mc(e, s, i) : t === "style" ? Pc(e, n, s) : Zt(t) ? vn(t) || Hc(e, t, n, s, r) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : qc(e, t, s, i)) ? (Eo(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && yo(e, t, s, i, r, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !X(s)) ? Eo(e, Ve(t), s, r, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), yo(e, t, s, i));
};
function qc(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Oo(t) && A(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "autocorrect" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const o = e.tagName;
    if (o === "IMG" || o === "VIDEO" || o === "CANVAS" || o === "SOURCE")
      return !1;
  }
  return Oo(t) && X(n) ? !1 : t in e;
}
const Do = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return M(t) ? (n) => xt(t, n) : t;
};
function Gc(e) {
  e.target.composing = !0;
}
function So(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const ns = Symbol("_assign"), zc = {
  created(e, { modifiers: { lazy: t, trim: n, number: s } }, o) {
    e[ns] = Do(o);
    const r = s || o.props && o.props.type === "number";
    Ot(e, t ? "change" : "input", (i) => {
      if (i.target.composing) return;
      let l = e.value;
      n && (l = l.trim()), r && (l = ss(l)), e[ns](l);
    }), n && Ot(e, "change", () => {
      e.value = e.value.trim();
    }), t || (Ot(e, "compositionstart", Gc), Ot(e, "compositionend", So), Ot(e, "change", So));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: n, modifiers: { lazy: s, trim: o, number: r } }, i) {
    if (e[ns] = Do(i), e.composing) return;
    const l = (r || e.type === "number") && !/^0\d/.test(e.value) ? ss(e.value) : e.value, a = t ?? "";
    l !== a && (document.activeElement === e && e.type !== "range" && (s && t === n || o && e.value.trim() === a) || (e.value = a));
  }
}, Jc = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, Yc = (e, t) => {
  const n = e._withKeys || (e._withKeys = {}), s = t.join(".");
  return n[s] || (n[s] = (o) => {
    if (!("key" in o))
      return;
    const r = Xe(o.key);
    if (t.some(
      (i) => i === r || Jc[i] === r
    ))
      return e(o);
  });
}, Xc = /* @__PURE__ */ ee({ patchProp: Bc }, Vc);
let To;
function Zc() {
  return To || (To = zl(Xc));
}
const Qc = (...e) => {
  const t = Zc().createApp(...e);
  process.env.NODE_ENV !== "production" && (ta(t), na(t));
  const { mount: n } = t;
  return t.mount = (s) => {
    const o = sa(s);
    if (!o) return;
    const r = t._component;
    !A(r) && !r.render && !r.template && (r.template = o.innerHTML), o.nodeType === 1 && (o.textContent = "");
    const i = n(o, !1, ea(o));
    return o instanceof Element && (o.removeAttribute("v-cloak"), o.setAttribute("data-v-app", "")), i;
  }, t;
};
function ea(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function ta(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => ri(t) || ii(t) || li(t),
    writable: !1
  });
}
function na(e) {
  {
    const t = e.config.isCustomElement;
    Object.defineProperty(e.config, "isCustomElement", {
      get() {
        return t;
      },
      set() {
        Ye(
          "The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead."
        );
      }
    });
    const n = e.config.compilerOptions, s = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';
    Object.defineProperty(e.config, "compilerOptions", {
      get() {
        return Ye(s), n;
      },
      set() {
        Ye(s);
      }
    });
  }
}
function sa(e) {
  if (X(e)) {
    const t = document.querySelector(e);
    return process.env.NODE_ENV !== "production" && !t && Ye(
      `Failed to mount app: mount target selector "${e}" returned null.`
    ), t;
  }
  return process.env.NODE_ENV !== "production" && window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && Ye(
    'mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'
  ), e;
}
/**
* vue v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function oa() {
  Dc();
}
process.env.NODE_ENV !== "production" && oa();
const ra = { class: "flex justify-between border-b border-border/70 bg-bg-secondary flex-shrink-0" }, ia = { class: "flex" }, la = ["onClick"], ca = { class: "mr-2" }, aa = /* @__PURE__ */ $s({
  __name: "TabSystem",
  props: {
    activeTab: {},
    tabs: {}
  },
  emits: ["tab-change"],
  setup(e) {
    const t = e, n = (s) => `px-4 py-3 text-sm font-medium transition-colors duration-200 border-b-2 ${s === t.activeTab ? "text-primary border-primary bg-primary/5" : "text-content-secondary border-transparent hover:text-content hover:border-border"}`;
    return (s, o) => (Ne(), Oe("div", ra, [
      D("div", ia, [
        (Ne(!0), Oe(De, null, dr(s.tabs, (r) => (Ne(), Oe("button", {
          key: r.id,
          class: ot(n(r.id)),
          onClick: (i) => s.$emit("tab-change", r.id)
        }, [
          D("span", ca, ue(r.icon), 1),
          Rr(" " + ue(r.label), 1)
        ], 10, la))), 128))
      ])
    ]));
  }
}), ua = { class: "h-full flex flex-col" }, fa = { class: "bg-bg-secondary border-b border-border px-6 py-3" }, pa = { class: "flex items-center justify-between" }, da = { class: "flex items-center gap-6" }, ha = { class: "flex items-center gap-2" }, ga = { class: "flex items-center gap-2" }, ma = { class: "flex items-center gap-4 text-xs text-content-secondary" }, va = { class: "bg-bg-secondary border-b border-border px-6 py-2" }, _a = { class: "flex items-center gap-2" }, ba = ["disabled"], ya = { class: "flex-1 overflow-hidden" }, Ea = {
  key: 0,
  class: "h-full p-6"
}, Na = { class: "space-y-6" }, xa = { class: "card" }, wa = { class: "flex gap-3" }, Oa = ["disabled"], Da = { class: "card" }, Sa = { class: "grid grid-cols-1 md:grid-cols-2 gap-4" }, Ta = ["disabled"], Va = { class: "text-2xl" }, Ca = { class: "text-left" }, Ma = { class: "font-medium text-content" }, Aa = {
  key: 1,
  class: "h-full flex flex-col"
}, Ia = {
  key: 0,
  class: "text-center text-content-secondary py-16"
}, $a = {
  key: 1,
  class: "space-y-3"
}, Pa = { class: "flex items-center justify-between mb-3" }, Ra = { class: "flex items-center gap-3" }, Fa = { class: "text-sm font-medium text-content" }, ja = {
  key: 0,
  class: "text-xs text-content-secondary"
}, Ha = { class: "text-xs text-content-secondary" }, La = { class: "text-sm text-content-secondary whitespace-pre-wrap font-mono" }, ka = /* @__PURE__ */ $s({
  __name: "MessagingTest",
  setup(e) {
    const t = Ge("messaging"), n = Ge("connecting"), s = Ge("unavailable"), o = Ge(""), r = Ge([]), i = Ge(0), l = Ge(0), a = Ge(null), d = Ge(!1);
    let p = null, f = null, g = 0;
    const x = async () => {
      try {
        if (typeof window < "u" && window.appAPI) {
          p = window.appAPI, s.value = "available";
          let R = 0;
          const $ = 50;
          for (; (!p.getAppId() || p.getAppId() === "") && R < $; )
            await new Promise((re) => setTimeout(re, 100)), R++;
          const Y = p.getAppId();
          if (console.log(`[MessagingTest] App ID initialized: '${Y}' (attempts: ${R})`), p.messaging) {
            const re = p.messaging.onMessage((ye) => {
              S(ye);
            }), _t = (ye, ae) => {
              console.log("[MessagingTest] Received channel message:", ye, "from:", ae), S(ye);
            }, Ct = p.messaging.subscribeToChannel("test", _t);
            f = () => {
              re && re(), Ct && Ct();
            }, n.value = "connected", await I({
              type: "connection-established",
              timestamp: (/* @__PURE__ */ new Date()).toISOString(),
              webviewId: "message-tester-webview"
            }), console.log("[MessagingTest] App API initialized and connected");
          } else
            console.warn("[MessagingTest] App API found but messaging not available"), n.value = "disconnected";
        } else
          console.warn("[MessagingTest] App API not available"), s.value = "unavailable", n.value = "disconnected";
      } catch (R) {
        console.error("[MessagingTest] Failed to initialize app API:", R), s.value = "unavailable", n.value = "disconnected";
      }
    }, S = (R) => {
      console.log("[MessagingTest] Received message from app instance:", R);
      let $;
      R.type === "pong" && g && ($ = Date.now() - g, g = 0, console.log("[MessagingTest] Calculated response time:", $)), l.value++, r.value.push({
        type: R.type || "unknown",
        direction: "received",
        content: R,
        timestamp: (/* @__PURE__ */ new Date()).toLocaleTimeString(),
        responseTime: $
      }), cs(() => {
        a.value && (a.value.scrollTop = a.value.scrollHeight);
      });
    }, I = async (R) => {
      if (!p || !p.messaging) {
        console.error("[MessagingTest] App API not available for sending");
        return;
      }
      try {
        console.log("[MessagingTest] Sending message:", R), R.type === "ping" && (g = Date.now()), await p.messaging.sendToChannel("test", R), i.value++, r.value.push({
          type: R.type || "custom",
          direction: "sent",
          content: R,
          timestamp: (/* @__PURE__ */ new Date()).toLocaleTimeString()
        }), cs(() => {
          a.value && (a.value.scrollTop = a.value.scrollHeight);
        });
      } catch ($) {
        console.error("[MessagingTest] Failed to send message:", $);
      }
    }, te = (R) => typeof R == "string" ? R : JSON.stringify(R, null, 2), K = () => {
      o.value.trim() && (I({
        type: "custom",
        content: o.value,
        timestamp: (/* @__PURE__ */ new Date()).toISOString()
      }), o.value = "");
    }, J = () => {
      I({
        type: "ping",
        timestamp: (/* @__PURE__ */ new Date()).toISOString(),
        id: Math.random().toString(36).substr(2, 9)
      });
    }, U = () => {
      I({
        type: "greeting",
        content: "Hello from message tester webview!",
        timestamp: (/* @__PURE__ */ new Date()).toISOString(),
        userAgent: navigator.userAgent
      });
    }, ce = () => {
      I({
        type: "data-request",
        requestType: "app-info",
        timestamp: (/* @__PURE__ */ new Date()).toISOString()
      });
    }, V = () => {
      I({
        type: "complex-data",
        data: {
          numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
          nested: {
            key: "value",
            timestamp: (/* @__PURE__ */ new Date()).toISOString(),
            boolean: !0,
            array: ["a", "b", "c", "d"]
          },
          largeString: "A".repeat(1e3),
          coordinates: { x: 100, y: 200, z: 300 }
        },
        metadata: {
          version: "2.0.0",
          source: "message-tester-component",
          testType: "complex-data-transmission"
        },
        timestamp: (/* @__PURE__ */ new Date()).toISOString()
      });
    }, Z = async () => {
      if (d.value) return;
      d.value = !0;
      const R = Math.random().toString(36).substr(2, 9);
      try {
        for (let $ = 0; $ < 10; $++)
          await I({
            type: "stress-test",
            testId: R,
            iteration: $ + 1,
            timestamp: (/* @__PURE__ */ new Date()).toISOString(),
            payload: `Stress test message ${$ + 1} with some data: ${Math.random()}`
          }), await new Promise((Y) => setTimeout(Y, 50));
      } finally {
        d.value = !1;
      }
    }, me = () => {
      r.value = [], i.value = 0, l.value = 0;
    }, oe = (R) => {
      (R === "messaging" || R === "history") && (t.value = R);
    };
    return pr(() => {
      console.log("[MessagingTest] Component mounted, initializing..."), x();
    }), Rs(() => {
      console.log("[MessagingTest] Component unmounting, cleaning up..."), f && f();
    }), (R, $) => (Ne(), Oe("div", ua, [
      D("div", fa, [
        D("div", pa, [
          D("div", da, [
            D("div", ha, [
              $[1] || ($[1] = D("span", { class: "text-xs text-content-secondary" }, "Status:", -1)),
              D("span", {
                class: ot([
                  "px-2 py-1 rounded text-xs font-medium",
                  n.value === "connected" ? "bg-green-500/10 text-green-500" : n.value === "disconnected" ? "bg-red-500/10 text-red-500" : "bg-yellow-500/10 text-yellow-500"
                ])
              }, ue(n.value), 3)
            ]),
            D("div", ga, [
              $[2] || ($[2] = D("span", { class: "text-xs text-content-secondary" }, "API:", -1)),
              D("span", {
                class: ot([
                  "px-2 py-1 rounded text-xs font-medium",
                  s.value === "available" ? "bg-green-500/10 text-green-500" : "bg-red-500/10 text-red-500"
                ])
              }, ue(s.value), 3)
            ])
          ]),
          D("div", ma, [
            D("span", null, "📤 " + ue(i.value), 1),
            D("span", null, "📥 " + ue(l.value), 1)
          ])
        ])
      ]),
      D("div", va, [
        D("div", _a, [
          D("button", {
            onClick: J,
            class: "px-3 py-1.5 text-xs font-medium rounded-md bg-green-500/10 text-green-500 hover:bg-green-500/20 transition-colors"
          }, " 🏓 Ping "),
          D("button", {
            onClick: U,
            class: "px-3 py-1.5 text-xs font-medium rounded-md bg-blue-500/10 text-blue-500 hover:bg-blue-500/20 transition-colors"
          }, " 👋 Greeting "),
          D("button", {
            onClick: ce,
            class: "px-3 py-1.5 text-xs font-medium rounded-md bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20 transition-colors"
          }, " 📊 Data "),
          D("button", {
            onClick: V,
            class: "px-3 py-1.5 text-xs font-medium rounded-md bg-purple-500/10 text-purple-500 hover:bg-purple-500/20 transition-colors"
          }, " 🔧 Complex "),
          D("button", {
            onClick: Z,
            class: "px-3 py-1.5 text-xs font-medium rounded-md bg-orange-500/10 text-orange-500 hover:bg-orange-500/20 transition-colors disabled:opacity-50",
            disabled: d.value
          }, ue(d.value ? "⏳" : "⚡") + " Stress ", 9, ba),
          $[3] || ($[3] = D("div", { class: "flex-1" }, null, -1)),
          D("button", {
            onClick: me,
            class: "px-3 py-1.5 text-xs font-medium rounded-md bg-red-500/10 text-red-500 hover:bg-red-500/20 transition-colors"
          }, " 🗑️ Clear ")
        ])
      ]),
      Me(aa, {
        "active-tab": t.value,
        tabs: [
          { id: "messaging", label: "Messaging", icon: "💬" },
          { id: "history", label: `History (${r.value.length})`, icon: "📝" }
        ],
        onTabChange: oe
      }, null, 8, ["active-tab", "tabs"]),
      D("div", ya, [
        t.value === "messaging" ? (Ne(), Oe("div", Ea, [
          D("div", Na, [
            D("div", xa, [
              $[4] || ($[4] = D("div", { class: "card-header" }, [
                D("h3", { class: "text-lg font-semibold text-content" }, "Send Custom Message")
              ], -1)),
              D("div", wa, [
                il(D("input", {
                  "onUpdate:modelValue": $[0] || ($[0] = (Y) => o.value = Y),
                  type: "text",
                  placeholder: "Enter your message...",
                  onKeypress: Yc(K, ["enter"]),
                  class: "flex-1 px-4 py-3 text-white bg-bg-secondary border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary placeholder-content-secondary"
                }, null, 544), [
                  [zc, o.value]
                ]),
                D("button", {
                  onClick: K,
                  disabled: !o.value.trim(),
                  class: "btn-primary"
                }, " Send ", 8, Oa)
              ])
            ]),
            D("div", Da, [
              $[10] || ($[10] = D("div", { class: "card-header" }, [
                D("h3", { class: "text-lg font-semibold text-content" }, "Test Actions")
              ], -1)),
              D("div", Sa, [
                D("button", {
                  onClick: J,
                  class: "flex items-center gap-3 p-4 bg-green-500/5 border border-green-500/20 rounded-lg hover:bg-green-500/10 transition-colors"
                }, $[5] || ($[5] = [
                  D("span", { class: "text-2xl" }, "🏓", -1),
                  D("div", { class: "text-left" }, [
                    D("div", { class: "font-medium text-content" }, "Ping Test"),
                    D("div", { class: "text-xs text-content-secondary" }, " Test basic connectivity and response time ")
                  ], -1)
                ])),
                D("button", {
                  onClick: U,
                  class: "flex items-center gap-3 p-4 bg-blue-500/5 border border-blue-500/20 rounded-lg hover:bg-blue-500/10 transition-colors"
                }, $[6] || ($[6] = [
                  D("span", { class: "text-2xl" }, "👋", -1),
                  D("div", { class: "text-left" }, [
                    D("div", { class: "font-medium text-content" }, "Greeting"),
                    D("div", { class: "text-xs text-content-secondary" }, "Send a friendly greeting message")
                  ], -1)
                ])),
                D("button", {
                  onClick: ce,
                  class: "flex items-center gap-3 p-4 bg-yellow-500/5 border border-yellow-500/20 rounded-lg hover:bg-yellow-500/10 transition-colors"
                }, $[7] || ($[7] = [
                  D("span", { class: "text-2xl" }, "📊", -1),
                  D("div", { class: "text-left" }, [
                    D("div", { class: "font-medium text-content" }, "Data Request"),
                    D("div", { class: "text-xs text-content-secondary" }, " Request app information and metrics ")
                  ], -1)
                ])),
                D("button", {
                  onClick: V,
                  class: "flex items-center gap-3 p-4 bg-purple-500/5 border border-purple-500/20 rounded-lg hover:bg-purple-500/10 transition-colors"
                }, $[8] || ($[8] = [
                  D("span", { class: "text-2xl" }, "🔧", -1),
                  D("div", { class: "text-left" }, [
                    D("div", { class: "font-medium text-content" }, "Complex Data"),
                    D("div", { class: "text-xs text-content-secondary" }, " Test with nested objects and arrays ")
                  ], -1)
                ])),
                D("button", {
                  onClick: Z,
                  class: "flex items-center gap-3 p-4 bg-orange-500/5 border border-orange-500/20 rounded-lg hover:bg-orange-500/10 transition-colors",
                  disabled: d.value
                }, [
                  D("span", Va, ue(d.value ? "⏳" : "⚡"), 1),
                  D("div", Ca, [
                    D("div", Ma, ue(d.value ? "Testing..." : "Stress Test"), 1),
                    $[9] || ($[9] = D("div", { class: "text-xs text-content-secondary" }, " Send 10 rapid messages for performance testing ", -1))
                  ])
                ], 8, Ta)
              ])
            ])
          ])
        ])) : Qn("", !0),
        t.value === "history" ? (Ne(), Oe("div", Aa, [
          D("div", {
            class: "flex-1 overflow-y-auto p-6",
            ref_key: "messageList",
            ref: a
          }, [
            r.value.length === 0 ? (Ne(), Oe("div", Ia, $[11] || ($[11] = [
              D("div", { class: "text-4xl mb-4" }, "📝", -1),
              D("div", { class: "text-lg font-medium mb-2" }, "No messages yet", -1),
              D("div", { class: "text-sm" }, "Send a message to see the history here", -1)
            ]))) : (Ne(), Oe("div", $a, [
              (Ne(!0), Oe(De, null, dr(r.value, (Y, re) => (Ne(), Oe("div", {
                key: re,
                class: ot([
                  "p-4 rounded-lg border-l-4",
                  Y.direction === "sent" ? "bg-primary/5 border-l-primary" : "bg-accent/5 border-l-accent"
                ])
              }, [
                D("div", Pa, [
                  D("div", Ra, [
                    D("span", Fa, ue(Y.type), 1),
                    D("span", {
                      class: ot([
                        "px-2 py-1 rounded text-xs font-medium",
                        Y.direction === "sent" ? "bg-primary/10 text-primary" : "bg-accent/10 text-accent"
                      ])
                    }, ue(Y.direction === "sent" ? "📤" : "📥") + " " + ue(Y.direction), 3),
                    Y.responseTime ? (Ne(), Oe("span", ja, ue(Y.responseTime) + "ms ", 1)) : Qn("", !0)
                  ]),
                  D("span", Ha, ue(Y.timestamp), 1)
                ]),
                D("pre", La, ue(te(Y.content)), 1)
              ], 2))), 128))
            ]))
          ], 512)
        ])) : Qn("", !0)
      ])
    ]));
  }
}), Ur = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, o] of t)
    n[s] = o;
  return n;
}, Ua = /* @__PURE__ */ Ur(ka, [["__scopeId", "data-v-73e8e462"]]), Ka = { class: "h-full bg-bg-primary text-content flex flex-col" }, Wa = { class: "flex-1 flex flex-col" }, Ba = /* @__PURE__ */ $s({
  __name: "App",
  setup(e) {
    return (t, n) => (Ne(), Oe("div", Ka, [
      D("main", Wa, [
        Me(Ua)
      ])
    ]));
  }
}), qa = /* @__PURE__ */ Ur(Ba, [["__scopeId", "data-v-0c00cd9c"]]);
class Ga {
  async start(t) {
    this.api = t, await this.onStart();
  }
  async stop() {
    var t;
    await ((t = this.onStop) == null ? void 0 : t.call(this));
  }
}
typeof window < "u" && typeof document < "u" && Qc(qa).mount("#app");
class za extends Ga {
  constructor() {
    super(...arguments);
    Kn(this, "_testWindow", null);
    Kn(this, "_messageCleanup", null);
  }
  async onStart() {
    console.log("[MessageTesterApp] App started"), this.setupMessaging(), await this.api.ui.notifications.show("Message Tester started! 📡", {
      type: "success",
      duration: 3e3
    });
    try {
      const s = new URL(import.meta.url).pathname.replace("/dist/index.js", ""), o = await this.api.ui.windows.create({
        id: "message-tester-window",
        title: "Message Tester",
        width: 900,
        height: 700,
        x: 200,
        y: 100,
        resizable: !0,
        minimizable: !0,
        maximizable: !0,
        closable: !0,
        pinnable: !0,
        content: {
          type: "webview",
          source: `file://${s}/web-dist/index.html`,
          webPreferences: {
            nodeIntegration: !1,
            contextIsolation: !0,
            webSecurity: !0
            // preload will be automatically set to app webview preload script
          }
        }
      });
      this._testWindow = o, console.log("[MessageTesterApp] Created webview window");
    } catch (n) {
      console.error("[MessageTesterApp] Failed to create webview window:", n), await this.api.ui.notifications.show("Failed to create Message Tester window", {
        type: "error",
        duration: 5e3
      });
    }
  }
  async onStop() {
    console.log("[MessageTesterApp] App stopped"), this._messageCleanup && (this._messageCleanup(), this._messageCleanup = null), this._testWindow && (console.log(`[MessageTesterApp] Clearing window reference: ${this._testWindow.id}`), this._testWindow = null), console.log("[MessageTesterApp] Cleared window reference for restart");
  }
  /**
   * Set up messaging system to handle communication with webview and test channel
   */
  setupMessaging() {
    console.log("[MessageTesterApp] Setting up messaging system"), this._messageCleanup = this.api.messaging.onMessage((r) => {
      console.log("[MessageTesterApp] Received message from webview:", r), this.handleMessage(r);
    });
    const n = (r, i) => {
      console.log("[MessageTesterApp] Received message on test channel:", r, "from:", i), this.handleTestChannelMessage(r, i);
    }, s = this.api.messaging.subscribeToChannel("test", n), o = this._messageCleanup;
    this._messageCleanup = () => {
      o(), s();
    }, console.log("[MessageTesterApp] Messaging system set up successfully");
  }
  /**
   * Handle messages received from webview
   */
  handleMessage(n) {
    const { type: s, ...o } = n;
    switch (console.log(`[MessageTesterApp] Handling message type: ${s}`, o), s) {
      case "ping":
        this.handlePing(n);
        break;
      case "greeting":
        this.handleGreeting(n);
        break;
      case "data-request":
        this.handleDataRequest(n);
        break;
      case "custom":
        this.handleCustomMessage(n);
        break;
      case "complex-data":
        this.handleComplexData(n);
        break;
      case "connection-established":
        this.handleConnectionEstablished(n);
        break;
      case "stress-test":
        this.handleStressTest(n);
        break;
      default:
        console.log(`[MessageTesterApp] Unknown message type: ${s}`), this.sendResponseMessage({
          type: "unknown-message-type",
          originalMessage: n,
          timestamp: (/* @__PURE__ */ new Date()).toISOString()
        });
    }
  }
  /**
   * Handle ping messages - respond with pong
   */
  async handlePing(n) {
    console.log("[MessageTesterApp] Handling ping message");
    const s = {
      type: "pong",
      originalPing: n,
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      appId: this.api.getAppId(),
      responseTime: Date.now()
    };
    await this.sendResponseMessage(s), await this.api.messaging.sendToChannel("test", s);
  }
  /**
   * Handle greeting messages
   */
  async handleGreeting(n) {
    console.log("[MessageTesterApp] Handling greeting message"), await this.sendResponseMessage({
      type: "greeting-response",
      message: `Hello from app instance! Received: ${n.content}`,
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      appInfo: {
        id: this.api.getAppId(),
        version: "1.0.0",
        name: "Message Tester"
      }
    });
  }
  /**
   * Handle data request messages
   */
  async handleDataRequest(n) {
    var o;
    console.log("[MessageTesterApp] Handling data request");
    const { requestType: s } = n;
    s === "app-info" ? await this.sendResponseMessage({
      type: "app-info-response",
      data: {
        appId: this.api.getAppId(),
        windowId: ((o = this._testWindow) == null ? void 0 : o.id) || "unknown",
        timestamp: (/* @__PURE__ */ new Date()).toISOString(),
        uptime: process.uptime(),
        memoryUsage: process.memoryUsage(),
        nodeVersion: process.version
      }
    }) : await this.sendResponseMessage({
      type: "data-request-error",
      error: `Unknown request type: ${s}`,
      timestamp: (/* @__PURE__ */ new Date()).toISOString()
    });
  }
  /**
   * Handle custom messages
   */
  async handleCustomMessage(n) {
    console.log("[MessageTesterApp] Handling custom message"), await this.sendResponseMessage({
      type: "custom-response",
      message: `App received your custom message: "${n.content}"`,
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      originalMessage: n,
      processed: !0
    });
  }
  /**
   * Handle complex data messages
   */
  async handleComplexData(n) {
    var s;
    console.log("[MessageTesterApp] Handling complex data message"), await this.sendResponseMessage({
      type: "complex-data-response",
      analysis: {
        receivedDataKeys: Object.keys(n.data || {}),
        totalNumbers: Array.isArray((s = n.data) == null ? void 0 : s.numbers) ? n.data.numbers.length : 0,
        hasMetadata: !!n.metadata,
        processedAt: (/* @__PURE__ */ new Date()).toISOString(),
        dataSize: JSON.stringify(n.data || {}).length
      },
      originalMessage: n
    });
  }
  /**
   * Handle connection established messages
   */
  async handleConnectionEstablished(n) {
    console.log("[MessageTesterApp] Webview connection established"), await this.sendResponseMessage({
      type: "connection-acknowledged",
      message: "App instance is ready for messaging tests!",
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      appId: this.api.getAppId(),
      capabilities: ["ping-pong", "data-requests", "custom-messages", "stress-testing"]
    });
  }
  /**
   * Handle stress test messages
   */
  async handleStressTest(n) {
    console.log("[MessageTesterApp] Handling stress test message");
    const { testId: s, iteration: o } = n;
    await this.sendResponseMessage({
      type: "stress-test-response",
      testId: s,
      iteration: o,
      timestamp: (/* @__PURE__ */ new Date()).toISOString(),
      processingTime: Math.random() * 10,
      // Simulate processing time
      status: "completed"
    });
  }
  /**
   * Send a response message back to the webview
   */
  async sendResponseMessage(n) {
    try {
      console.log("[MessageTesterApp] Sending response message:", n), await this.api.messaging.postMessage(n);
    } catch (s) {
      console.error("[MessageTesterApp] Failed to send response message:", s);
    }
  }
  /**
   * Handle messages received on test channel
   */
  async handleTestChannelMessage(n, s) {
    if (console.log("[MessageTesterApp] Handling test channel message:", n, "from:", s), n.type === "ping" && s !== this.api.getAppId()) {
      console.log("[MessageTesterApp] Received ping from external source, sending pong");
      const o = {
        type: "pong",
        originalPing: n,
        timestamp: (/* @__PURE__ */ new Date()).toISOString(),
        appId: this.api.getAppId(),
        responseTime: Date.now(),
        source: "app"
      };
      await this.api.messaging.sendToChannel("test", o), console.log("[MessageTesterApp] Sent pong response to test channel");
    } else n.type === "ping" && s === this.api.getAppId() && console.log("[MessageTesterApp] Ignoring ping from self to avoid loop");
  }
}
const Xa = new za();
export {
  Xa as default
};
