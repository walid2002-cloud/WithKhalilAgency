(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/zainab-khalil-tyb/yasser-zi/src/components/HeroTVParallax.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HeroTVParallax
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/zainab-khalil-tyb/yasser-zi/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/zainab-khalil-tyb/yasser-zi/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/zainab-khalil-tyb/yasser-zi/node_modules/framer-motion/dist/es/value/use-scroll.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/zainab-khalil-tyb/yasser-zi/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/zainab-khalil-tyb/yasser-zi/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/zainab-khalil-tyb/yasser-zi/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function HeroTVParallax() {
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { scrollYProgress } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"])({
        target: containerRef,
        offset: [
            "start start",
            "end start"
        ]
    });
    // Background huge text moves down fast
    const yBg = (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0,
        1
    ], [
        "0%",
        "50%"
    ]);
    // TV object moves up slowly
    const yImage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0,
        1
    ], [
        "0%",
        "15%"
    ]);
    const scaleImage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0,
        1
    ], [
        1,
        1.05
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: "relative min-h-screen flex items-center justify-center overflow-hidden bg-background px-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                style: {
                    y: yBg
                },
                className: "absolute w-full top-[15%] flex flex-col items-center justify-center select-none",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-[12vw] font-black tracking-tighter text-white/5 uppercase leading-none text-center font-outfit",
                        children: "ZAINAB KHALIL TYB"
                    }, void 0, false, {
                        fileName: "[project]/zainab-khalil-tyb/yasser-zi/src/components/HeroTVParallax.tsx",
                        lineNumber: 31,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                        className: "text-[12vw] font-black tracking-tighter text-transparent uppercase leading-none text-center font-outfit",
                        style: {
                            WebkitTextStroke: "2px rgba(255,51,102,0.1)"
                        },
                        children: "DIGITAL AGENCY"
                    }, void 0, false, {
                        fileName: "[project]/zainab-khalil-tyb/yasser-zi/src/components/HeroTVParallax.tsx",
                        lineNumber: 34,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/zainab-khalil-tyb/yasser-zi/src/components/HeroTVParallax.tsx",
                lineNumber: 27,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 flex flex-col items-center max-w-5xl mx-auto mt-20",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 50
                        },
                        animate: {
                            opacity: 1,
                            y: 0
                        },
                        transition: {
                            duration: 1,
                            delay: 0.2
                        },
                        className: "text-center mb-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-neon-blue font-semibold tracking-widest text-sm uppercase mb-6 block",
                                children: "Video Production & Marketing"
                            }, void 0, false, {
                                fileName: "[project]/zainab-khalil-tyb/yasser-zi/src/components/HeroTVParallax.tsx",
                                lineNumber: 47,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-4xl md:text-7xl font-bold font-outfit leading-tight mb-6",
                                children: [
                                    "Convertissez ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/zainab-khalil-tyb/yasser-zi/src/components/HeroTVParallax.tsx",
                                        lineNumber: 51,
                                        columnNumber: 38
                                    }, this),
                                    " ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-transparent bg-clip-text bg-gradient-to-r from-neon-red to-neon-blue",
                                        children: "Votre Audience"
                                    }, void 0, false, {
                                        fileName: "[project]/zainab-khalil-tyb/yasser-zi/src/components/HeroTVParallax.tsx",
                                        lineNumber: 51,
                                        columnNumber: 45
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/zainab-khalil-tyb/yasser-zi/src/components/HeroTVParallax.tsx",
                                lineNumber: 50,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-400 max-w-xl mx-auto text-lg",
                                children: "Stratégie, tournages premium et campagnes publicitaires qui transforment les formateurs en leaders de marché."
                            }, void 0, false, {
                                fileName: "[project]/zainab-khalil-tyb/yasser-zi/src/components/HeroTVParallax.tsx",
                                lineNumber: 53,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/zainab-khalil-tyb/yasser-zi/src/components/HeroTVParallax.tsx",
                        lineNumber: 41,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        style: {
                            y: yImage,
                            scale: scaleImage
                        },
                        className: "relative w-full max-w-4xl aspect-video rounded-3xl overflow-hidden shadow-[0_0_50px_rgba(255,51,102,0.15)] ring-1 ring-white/10",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent z-10"
                            }, void 0, false, {
                                fileName: "[project]/zainab-khalil-tyb/yasser-zi/src/components/HeroTVParallax.tsx",
                                lineNumber: 63,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                animate: {
                                    y: [
                                        0,
                                        -10,
                                        0
                                    ]
                                },
                                transition: {
                                    repeat: Infinity,
                                    duration: 6,
                                    ease: "easeInOut"
                                },
                                className: "w-full h-full",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    src: "https://images.unsplash.com/photo-1590845947698-8924d7409b56?auto=format&fit=crop&q=80&w=1200",
                                    alt: "Studio TV Production",
                                    fill: true,
                                    className: "object-cover",
                                    priority: true
                                }, void 0, false, {
                                    fileName: "[project]/zainab-khalil-tyb/yasser-zi/src/components/HeroTVParallax.tsx",
                                    lineNumber: 70,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/zainab-khalil-tyb/yasser-zi/src/components/HeroTVParallax.tsx",
                                lineNumber: 65,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/zainab-khalil-tyb/yasser-zi/src/components/HeroTVParallax.tsx",
                        lineNumber: 59,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/zainab-khalil-tyb/yasser-zi/src/components/HeroTVParallax.tsx",
                lineNumber: 40,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/zainab-khalil-tyb/yasser-zi/src/components/HeroTVParallax.tsx",
        lineNumber: 22,
        columnNumber: 9
    }, this);
}
_s(HeroTVParallax, "EFdWHvmSY1fuTDPrxVrZH2z/G6Q=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"],
        __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"]
    ];
});
_c = HeroTVParallax;
var _c;
__turbopack_context__.k.register(_c, "HeroTVParallax");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/zainab-khalil-tyb/yasser-zi/src/components/HeroMarqueeVertical.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>HeroMarqueeVertical
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/zainab-khalil-tyb/yasser-zi/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/zainab-khalil-tyb/yasser-zi/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
"use client";
;
;
const words = [
    "STRATÉGIE",
    "IMPACT",
    "TOURNAGE",
    "MONTAGE",
    "BRANDING",
    "META ADS",
    "CONVERSION",
    "STRATÉGIE",
    "IMPACT",
    "TOURNAGE",
    "MONTAGE",
    "BRANDING"
];
function HeroMarqueeVertical() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full flex justify-center overflow-hidden bg-background border-y border-white/5 py-12",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "relative h-[250px] overflow-hidden flex items-center max-w-7xl mx-auto w-full px-4 mask-vertical",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-background to-transparent z-10"
                }, void 0, false, {
                    fileName: "[project]/zainab-khalil-tyb/yasser-zi/src/components/HeroMarqueeVertical.tsx",
                    lineNumber: 25,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-background to-transparent z-10"
                }, void 0, false, {
                    fileName: "[project]/zainab-khalil-tyb/yasser-zi/src/components/HeroMarqueeVertical.tsx",
                    lineNumber: 26,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-full flex gap-12 justify-center items-center",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "h-[300px] overflow-hidden relative w-full flex space-x-24 px-8 items-center text-center mask-edges",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                animate: {
                                    y: [
                                        0,
                                        -1000
                                    ]
                                },
                                transition: {
                                    repeat: Infinity,
                                    duration: 25,
                                    ease: "linear"
                                },
                                className: "flex flex-col gap-8 text-[4rem] md:text-[6rem] font-bold tracking-tighter text-white/5 uppercase leading-none font-outfit",
                                children: [
                                    ...words,
                                    ...words
                                ].map((word, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "block",
                                        children: word
                                    }, `col1-${idx}`, false, {
                                        fileName: "[project]/zainab-khalil-tyb/yasser-zi/src/components/HeroMarqueeVertical.tsx",
                                        lineNumber: 41,
                                        columnNumber: 33
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/zainab-khalil-tyb/yasser-zi/src/components/HeroMarqueeVertical.tsx",
                                lineNumber: 31,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                animate: {
                                    y: [
                                        -1000,
                                        0
                                    ]
                                },
                                transition: {
                                    repeat: Infinity,
                                    duration: 35,
                                    ease: "linear"
                                },
                                className: "flex flex-col gap-8 text-[4rem] md:text-[6rem] font-bold tracking-tighter text-neon-blue/20 uppercase leading-none font-outfit",
                                children: [
                                    ...words,
                                    ...words
                                ].map((word, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "block",
                                        children: word
                                    }, `col2-${idx}`, false, {
                                        fileName: "[project]/zainab-khalil-tyb/yasser-zi/src/components/HeroMarqueeVertical.tsx",
                                        lineNumber: 57,
                                        columnNumber: 33
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/zainab-khalil-tyb/yasser-zi/src/components/HeroMarqueeVertical.tsx",
                                lineNumber: 47,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                animate: {
                                    y: [
                                        0,
                                        -1000
                                    ]
                                },
                                transition: {
                                    repeat: Infinity,
                                    duration: 20,
                                    ease: "linear"
                                },
                                className: "hidden lg:flex flex-col gap-8 text-[4rem] md:text-[6rem] font-bold tracking-tighter text-neon-red/10 uppercase leading-none font-outfit",
                                children: [
                                    ...words,
                                    ...words
                                ].map((word, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "block",
                                        children: word
                                    }, `col3-${idx}`, false, {
                                        fileName: "[project]/zainab-khalil-tyb/yasser-zi/src/components/HeroMarqueeVertical.tsx",
                                        lineNumber: 73,
                                        columnNumber: 33
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/zainab-khalil-tyb/yasser-zi/src/components/HeroMarqueeVertical.tsx",
                                lineNumber: 63,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/zainab-khalil-tyb/yasser-zi/src/components/HeroMarqueeVertical.tsx",
                        lineNumber: 29,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/zainab-khalil-tyb/yasser-zi/src/components/HeroMarqueeVertical.tsx",
                    lineNumber: 28,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/zainab-khalil-tyb/yasser-zi/src/components/HeroMarqueeVertical.tsx",
            lineNumber: 23,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/zainab-khalil-tyb/yasser-zi/src/components/HeroMarqueeVertical.tsx",
        lineNumber: 22,
        columnNumber: 9
    }, this);
}
_c = HeroMarqueeVertical;
var _c;
__turbopack_context__.k.register(_c, "HeroMarqueeVertical");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/zainab-khalil-tyb/yasser-zi/src/components/ClientsMarquee.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ClientsMarquee
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/zainab-khalil-tyb/yasser-zi/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/zainab-khalil-tyb/yasser-zi/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
"use client";
;
;
const clients = [
    "CLIENT ONE",
    "AGENCY PRO",
    "LEADER COACH",
    "VISIONARY",
    "EXPERT DIGITAL",
    "NEXT LEVEL",
    "STUDIO ALPHA",
    "MENTOR VIP"
];
function ClientsMarquee() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "w-full py-16 bg-background border-b border-white/5 overflow-hidden flex flex-col items-center",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-sm uppercase tracking-widest text-gray-500 mb-8 font-semibold",
                children: "Ils Nous Font Confiance"
            }, void 0, false, {
                fileName: "[project]/zainab-khalil-tyb/yasser-zi/src/components/ClientsMarquee.tsx",
                lineNumber: 19,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative w-full max-w-full flex overflow-hidden mask-edges-horizontal",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                    animate: {
                        x: [
                            0,
                            -2000
                        ]
                    },
                    transition: {
                        repeat: Infinity,
                        duration: 30,
                        ease: "linear"
                    },
                    className: "flex whitespace-nowrap min-w-max",
                    children: [
                        ...clients,
                        ...clients,
                        ...clients
                    ].map((client, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mx-8 lg:mx-16 text-2xl lg:text-3xl font-bold text-white/30 hover:text-white/80 transition-colors duration-500 cursor-default uppercase font-outfit",
                            children: client
                        }, idx, false, {
                            fileName: "[project]/zainab-khalil-tyb/yasser-zi/src/components/ClientsMarquee.tsx",
                            lineNumber: 34,
                            columnNumber: 25
                        }, this))
                }, void 0, false, {
                    fileName: "[project]/zainab-khalil-tyb/yasser-zi/src/components/ClientsMarquee.tsx",
                    lineNumber: 24,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/zainab-khalil-tyb/yasser-zi/src/components/ClientsMarquee.tsx",
                lineNumber: 22,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/zainab-khalil-tyb/yasser-zi/src/components/ClientsMarquee.tsx",
        lineNumber: 18,
        columnNumber: 9
    }, this);
}
_c = ClientsMarquee;
var _c;
__turbopack_context__.k.register(_c, "ClientsMarquee");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/zainab-khalil-tyb/yasser-zi/src/components/PhotosTrain.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>PhotosTrain
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/zainab-khalil-tyb/yasser-zi/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/zainab-khalil-tyb/yasser-zi/node_modules/next/image.js [app-client] (ecmascript)");
"use client";
;
;
const photos = [
    "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1522869635100-9f4c5e86fee3?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1521943890253-066ae5b1caee?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1518105570075-8ea5d086f68c?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1601506521937-0121a7fc5317?auto=format&fit=crop&q=80&w=800",
    "https://images.unsplash.com/photo-1533750516457-a7eb68d30e38?auto=format&fit=crop&q=80&w=800"
];
// Distribution into columns
const baseCol1 = [
    photos[0],
    photos[1],
    photos[2]
];
const baseCol2 = [
    photos[3],
    photos[4],
    photos[5]
];
const baseCol3 = [
    photos[6],
    photos[0],
    photos[1]
];
const Column = ({ images, duration })=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative h-[600px] md:h-[800px] w-full min-w-[260px] md:min-w-[320px] overflow-hidden mask-y",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "flex flex-col gap-6 w-full animate-vertical-train",
            style: {
                '--duration': duration
            },
            children: [
                ...images,
                ...images
            ].map((src, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative w-full h-[350px] md:h-[450px] rounded-[3rem] overflow-hidden group shadow-[0_20px_40px_rgba(0,0,0,0.5)] shrink-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                            src: src,
                            alt: `Studio setup ${i}`,
                            fill: true,
                            className: "object-cover group-hover:scale-110 transition-transform duration-[1.5s] ease-[cubic-bezier(0.25,1,0.5,1)]",
                            sizes: "(max-width: 768px) 300px, 400px",
                            unoptimized: true
                        }, void 0, false, {
                            fileName: "[project]/zainab-khalil-tyb/yasser-zi/src/components/PhotosTrain.tsx",
                            lineNumber: 33,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700 pointer-events-none"
                        }, void 0, false, {
                            fileName: "[project]/zainab-khalil-tyb/yasser-zi/src/components/PhotosTrain.tsx",
                            lineNumber: 41,
                            columnNumber: 25
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, i, true, {
                    fileName: "[project]/zainab-khalil-tyb/yasser-zi/src/components/PhotosTrain.tsx",
                    lineNumber: 29,
                    columnNumber: 21
                }, ("TURBOPACK compile-time value", void 0)))
        }, void 0, false, {
            fileName: "[project]/zainab-khalil-tyb/yasser-zi/src/components/PhotosTrain.tsx",
            lineNumber: 23,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/zainab-khalil-tyb/yasser-zi/src/components/PhotosTrain.tsx",
        lineNumber: 22,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_c = Column;
function PhotosTrain() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-24 overflow-hidden bg-background relative flex flex-col items-center border-y border-white/5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mb-16 text-center z-20 relative px-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-3xl md:text-5xl font-bold font-outfit uppercase tracking-wider mb-4",
                        children: [
                            "Une Esthétique ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-gold",
                                children: "Premium"
                            }, void 0, false, {
                                fileName: "[project]/zainab-khalil-tyb/yasser-zi/src/components/PhotosTrain.tsx",
                                lineNumber: 55,
                                columnNumber: 36
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/zainab-khalil-tyb/yasser-zi/src/components/PhotosTrain.tsx",
                        lineNumber: 54,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-400 max-w-2xl mx-auto text-lg md:text-xl",
                        children: "L'excellence visuelle au service de votre autorité."
                    }, void 0, false, {
                        fileName: "[project]/zainab-khalil-tyb/yasser-zi/src/components/PhotosTrain.tsx",
                        lineNumber: 57,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/zainab-khalil-tyb/yasser-zi/src/components/PhotosTrain.tsx",
                lineNumber: 53,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full flex justify-center gap-6 px-4 md:px-8 max-h-[70vh] md:max-h-[85vh] overflow-hidden relative",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Column, {
                        images: baseCol1,
                        duration: "30s"
                    }, void 0, false, {
                        fileName: "[project]/zainab-khalil-tyb/yasser-zi/src/components/PhotosTrain.tsx",
                        lineNumber: 63,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Column, {
                        images: baseCol2,
                        duration: "42s"
                    }, void 0, false, {
                        fileName: "[project]/zainab-khalil-tyb/yasser-zi/src/components/PhotosTrain.tsx",
                        lineNumber: 64,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Column, {
                        images: baseCol3,
                        duration: "35s"
                    }, void 0, false, {
                        fileName: "[project]/zainab-khalil-tyb/yasser-zi/src/components/PhotosTrain.tsx",
                        lineNumber: 65,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-0 left-0 w-full h-24 md:h-40 bg-gradient-to-b from-background to-transparent z-10 pointer-events-none"
                    }, void 0, false, {
                        fileName: "[project]/zainab-khalil-tyb/yasser-zi/src/components/PhotosTrain.tsx",
                        lineNumber: 68,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-0 left-0 w-full h-24 md:h-40 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none"
                    }, void 0, false, {
                        fileName: "[project]/zainab-khalil-tyb/yasser-zi/src/components/PhotosTrain.tsx",
                        lineNumber: 69,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/zainab-khalil-tyb/yasser-zi/src/components/PhotosTrain.tsx",
                lineNumber: 62,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/zainab-khalil-tyb/yasser-zi/src/components/PhotosTrain.tsx",
        lineNumber: 51,
        columnNumber: 9
    }, this);
}
_c1 = PhotosTrain;
var _c, _c1;
__turbopack_context__.k.register(_c, "Column");
__turbopack_context__.k.register(_c1, "PhotosTrain");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/zainab-khalil-tyb/yasser-zi/src/components/StackedSteps.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StackedSteps
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/zainab-khalil-tyb/yasser-zi/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/zainab-khalil-tyb/yasser-zi/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/zainab-khalil-tyb/yasser-zi/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/zainab-khalil-tyb/yasser-zi/node_modules/framer-motion/dist/es/value/use-scroll.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/zainab-khalil-tyb/yasser-zi/node_modules/framer-motion/dist/es/value/use-transform.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/zainab-khalil-tyb/yasser-zi/node_modules/next/image.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature(), _s1 = __turbopack_context__.k.signature();
"use client";
;
;
;
const STEPS = [
    {
        num: "01",
        title: "Stratégie d'Acquisition",
        description: "Avant de filmer, nous analysons votre audience et vos concurrents. Nous écrivons des scripts percutants conçus pour maximiser l'attention et générer du désir pour votre formation ou coaching.",
        colorBg: "bg-[#0d0d0d]",
        colorBorder: "border-gray-800"
    },
    {
        num: "02",
        title: "Tournage Haute Définition",
        description: "Studio professionnel, éclairage cinéma et caméras 4K. Nous capturons l'essence de votre marque dans une ambiance 'Netflix' qui impose immédiatement l'autorité de votre image.",
        colorBg: "bg-[#111111]",
        colorBorder: "border-neon-blue/30"
    },
    {
        num: "03",
        title: "Montage & Motion Design",
        description: "Montage dynamique avec des animations premium, des sous-titres captivants et un sound design immersif. Vos vidéos se démarquent du bruit ambiant des réseaux.",
        colorBg: "bg-[#141414]",
        colorBorder: "border-gray-800"
    },
    {
        num: "04",
        title: "Meta Ads & Scaling",
        description: "On ne s'arrête pas à la vidéo. Nous lançons vos campagnes Meta Ads avec un funnel optimisé pour convertir directement en leads qualifiés ou en inscriptions sur WhatsApp.",
        colorBg: "bg-[#090b0d]",
        colorBorder: "border-neon-red/30"
    }
];
const StackCard = ({ step, i, targetScale, progress })=>{
    _s();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // As we scroll past, scale the underlying card slightly down
    const { scrollYProgress } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"])({
        target: containerRef,
        offset: [
            "start start",
            "end start"
        ]
    });
    const scale = (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0,
        1
    ], [
        1,
        targetScale
    ]);
    // Subtle opacity decrease for deeper cards
    const opacity = (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"])(scrollYProgress, [
        0,
        1
    ], [
        1,
        0.4
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: containerRef,
        className: `h-screen flex items-center justify-center sticky top-0`,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
            style: {
                scale,
                opacity,
                top: `calc(-5vh + ${i * 20}px)`
            },
            className: `relative ${step.colorBg} border ${step.colorBorder} rounded-[40px] px-8 py-12 md:px-16 md:py-20 max-w-5xl w-full shadow-[0_-10px_50px_rgba(0,0,0,0.5)]`,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "absolute top-0 right-12 md:right-24 transform -translate-y-1/2 text-8xl md:text-[150px] font-black font-outfit text-white/5 select-none pointer-events-none",
                    children: step.num
                }, void 0, false, {
                    fileName: "[project]/zainab-khalil-tyb/yasser-zi/src/components/StackedSteps.tsx",
                    lineNumber: 68,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative z-10 flex flex-col md:flex-row gap-8 items-start md:items-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-3xl md:text-5xl font-bold font-outfit mb-6 text-white uppercase tracking-wide",
                                    children: step.title
                                }, void 0, false, {
                                    fileName: "[project]/zainab-khalil-tyb/yasser-zi/src/components/StackedSteps.tsx",
                                    lineNumber: 74,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-300 text-lg md:text-xl leading-relaxed",
                                    children: step.description
                                }, void 0, false, {
                                    fileName: "[project]/zainab-khalil-tyb/yasser-zi/src/components/StackedSteps.tsx",
                                    lineNumber: 77,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/zainab-khalil-tyb/yasser-zi/src/components/StackedSteps.tsx",
                            lineNumber: 73,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "md:w-1/3 flex justify-center scale-75 md:scale-100 relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute inset-0 flex items-center justify-center pointer-events-none",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "w-56 h-56 bg-neon-blue/20 blur-[80px] rounded-full animate-pulse"
                                    }, void 0, false, {
                                        fileName: "[project]/zainab-khalil-tyb/yasser-zi/src/components/StackedSteps.tsx",
                                        lineNumber: 85,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/zainab-khalil-tyb/yasser-zi/src/components/StackedSteps.tsx",
                                    lineNumber: 84,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "relative w-40 h-40 md:w-56 md:h-56",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: "/logo.png",
                                        alt: "Logo Zainab Khalil TYB",
                                        fill: true,
                                        className: "object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]",
                                        priority: true
                                    }, void 0, false, {
                                        fileName: "[project]/zainab-khalil-tyb/yasser-zi/src/components/StackedSteps.tsx",
                                        lineNumber: 88,
                                        columnNumber: 29
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/zainab-khalil-tyb/yasser-zi/src/components/StackedSteps.tsx",
                                    lineNumber: 87,
                                    columnNumber: 25
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/zainab-khalil-tyb/yasser-zi/src/components/StackedSteps.tsx",
                            lineNumber: 82,
                            columnNumber: 21
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/zainab-khalil-tyb/yasser-zi/src/components/StackedSteps.tsx",
                    lineNumber: 72,
                    columnNumber: 17
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/zainab-khalil-tyb/yasser-zi/src/components/StackedSteps.tsx",
            lineNumber: 64,
            columnNumber: 13
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/zainab-khalil-tyb/yasser-zi/src/components/StackedSteps.tsx",
        lineNumber: 60,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
_s(StackCard, "jBZPwPKoUU9qNyqGIyQAArz78+Y=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"],
        __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"],
        __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$transform$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransform"]
    ];
});
_c = StackCard;
function StackedSteps() {
    _s1();
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const { scrollYProgress } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"])({
        target: containerRef,
        offset: [
            "start start",
            "end end"
        ]
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        ref: containerRef,
        className: "bg-charcoal pt-32 pb-48 px-4 relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-6xl mx-auto mb-20 text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-4xl md:text-6xl font-black font-outfit uppercase",
                        children: [
                            "Notre ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-transparent bg-clip-text bg-gradient-to-r from-neon-blue to-white",
                                children: "Méthode"
                            }, void 0, false, {
                                fileName: "[project]/zainab-khalil-tyb/yasser-zi/src/components/StackedSteps.tsx",
                                lineNumber: 107,
                                columnNumber: 93
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/zainab-khalil-tyb/yasser-zi/src/components/StackedSteps.tsx",
                        lineNumber: 107,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-xl text-gray-400 mt-6 max-w-2xl mx-auto",
                        children: "4 étapes pour transformer complètement l'image de votre activité et scaler vos revenus."
                    }, void 0, false, {
                        fileName: "[project]/zainab-khalil-tyb/yasser-zi/src/components/StackedSteps.tsx",
                        lineNumber: 108,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/zainab-khalil-tyb/yasser-zi/src/components/StackedSteps.tsx",
                lineNumber: 106,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative",
                children: STEPS.map((step, i)=>{
                    const targetScale = 1 - (STEPS.length - i) * 0.05;
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(StackCard, {
                        step: step,
                        i: i,
                        progress: scrollYProgress,
                        targetScale: targetScale
                    }, i, false, {
                        fileName: "[project]/zainab-khalil-tyb/yasser-zi/src/components/StackedSteps.tsx",
                        lineNumber: 115,
                        columnNumber: 25
                    }, this);
                })
            }, void 0, false, {
                fileName: "[project]/zainab-khalil-tyb/yasser-zi/src/components/StackedSteps.tsx",
                lineNumber: 111,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/zainab-khalil-tyb/yasser-zi/src/components/StackedSteps.tsx",
        lineNumber: 105,
        columnNumber: 9
    }, this);
}
_s1(StackedSteps, "xX4DAprT77NLgRaInDg3PpWgeq4=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$value$2f$use$2d$scroll$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useScroll"]
    ];
});
_c1 = StackedSteps;
var _c, _c1;
__turbopack_context__.k.register(_c, "StackCard");
__turbopack_context__.k.register(_c1, "StackedSteps");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/zainab-khalil-tyb/yasser-zi/src/components/SansVsAvec.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SansVsAvec
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/zainab-khalil-tyb/yasser-zi/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/zainab-khalil-tyb/yasser-zi/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__ = __turbopack_context__.i("[project]/zainab-khalil-tyb/yasser-zi/node_modules/lucide-react/dist/esm/icons/circle-x.js [app-client] (ecmascript) <export default as XCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__ = __turbopack_context__.i("[project]/zainab-khalil-tyb/yasser-zi/node_modules/lucide-react/dist/esm/icons/circle-check-big.js [app-client] (ecmascript) <export default as CheckCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/zainab-khalil-tyb/yasser-zi/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-client] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/zainab-khalil-tyb/yasser-zi/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
"use client";
;
;
;
;
const SANS_NOUS = [
    "Posts aléatoires, sans véritable stratégie",
    "Faible portée, pas de confiance, zéro inscription",
    "Vidéos amateurs, branding faible ou inexistant",
    "Budget gaspillé sur des publicités non rentables",
    "Aucun suivi, aucune optimisation possible"
];
const AVEC_NOUS = [
    "Stratégie millimétrée avec des scripts qui convertissent",
    "Tournage studio, montage pro et image de marque forte",
    "Plan de contenu régulier (Reels, Posts, Stories)",
    "Meta Ads optimisées pour maximiser les leads",
    "Résultats mesurables : Leads, messages WhatsApp, ventes"
];
function SansVsAvec() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-32 bg-background relative overflow-hidden px-4 border-y border-white/5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute left-[10%] top-[20%] w-[30vw] h-[30vw] min-w-[300px] min-h-[300px] bg-red-500/10 rounded-full blur-[120px] pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/zainab-khalil-tyb/yasser-zi/src/components/SansVsAvec.tsx",
                lineNumber: 27,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute right-[10%] bottom-[10%] w-[40vw] h-[40vw] min-w-[400px] min-h-[400px] bg-green-500/10 rounded-full blur-[150px] pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/zainab-khalil-tyb/yasser-zi/src/components/SansVsAvec.tsx",
                lineNumber: 28,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto relative z-10 text-center mb-16",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-4xl md:text-6xl font-black font-outfit uppercase tracking-tight",
                        children: [
                            "Faites le bon ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-gold",
                                children: "choix"
                            }, void 0, false, {
                                fileName: "[project]/zainab-khalil-tyb/yasser-zi/src/components/SansVsAvec.tsx",
                                lineNumber: 32,
                                columnNumber: 35
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/zainab-khalil-tyb/yasser-zi/src/components/SansVsAvec.tsx",
                        lineNumber: 31,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-400 mt-6 text-xl max-w-2xl mx-auto",
                        children: "La différence entre stagner et exploser vos inscriptions tient à la qualité de votre image digitale."
                    }, void 0, false, {
                        fileName: "[project]/zainab-khalil-tyb/yasser-zi/src/components/SansVsAvec.tsx",
                        lineNumber: 34,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/zainab-khalil-tyb/yasser-zi/src/components/SansVsAvec.tsx",
                lineNumber: 30,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 relative z-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            x: -50
                        },
                        whileInView: {
                            opacity: 1,
                            x: 0
                        },
                        viewport: {
                            once: true,
                            margin: "-100px"
                        },
                        transition: {
                            duration: 0.8
                        },
                        className: "bg-charcoal/50 border border-white/10 rounded-3xl p-8 lg:p-12 hover:border-red-500/30 transition-colors backdrop-blur-xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4 mb-8",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-3xl font-black font-outfit uppercase tracking-wider text-gray-500",
                                    children: "Sans Nous"
                                }, void 0, false, {
                                    fileName: "[project]/zainab-khalil-tyb/yasser-zi/src/components/SansVsAvec.tsx",
                                    lineNumber: 48,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/zainab-khalil-tyb/yasser-zi/src/components/SansVsAvec.tsx",
                                lineNumber: 47,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "space-y-6",
                                children: SANS_NOUS.map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "flex gap-4 items-start text-gray-400 text-lg",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__XCircle$3e$__["XCircle"], {
                                                className: "w-6 h-6 shrink-0 text-red-500/70 translate-y-1"
                                            }, void 0, false, {
                                                fileName: "[project]/zainab-khalil-tyb/yasser-zi/src/components/SansVsAvec.tsx",
                                                lineNumber: 53,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "leading-tight",
                                                children: item
                                            }, void 0, false, {
                                                fileName: "[project]/zainab-khalil-tyb/yasser-zi/src/components/SansVsAvec.tsx",
                                                lineNumber: 54,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, idx, true, {
                                        fileName: "[project]/zainab-khalil-tyb/yasser-zi/src/components/SansVsAvec.tsx",
                                        lineNumber: 52,
                                        columnNumber: 29
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/zainab-khalil-tyb/yasser-zi/src/components/SansVsAvec.tsx",
                                lineNumber: 50,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/zainab-khalil-tyb/yasser-zi/src/components/SansVsAvec.tsx",
                        lineNumber: 40,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            x: 50
                        },
                        whileInView: {
                            opacity: 1,
                            x: 0
                        },
                        viewport: {
                            once: true,
                            margin: "-100px"
                        },
                        transition: {
                            duration: 0.8
                        },
                        className: "bg-gradient-to-br from-[#111] to-[#041a1a] border border-green-500/20 rounded-3xl p-8 lg:p-12 shadow-[0_0_50px_rgba(34,197,94,0.1)] hover:border-green-500/50 transition-colors backdrop-blur-xl relative overflow-hidden",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-gradient-to-t from-green-500/5 to-transparent pointer-events-none"
                            }, void 0, false, {
                                fileName: "[project]/zainab-khalil-tyb/yasser-zi/src/components/SansVsAvec.tsx",
                                lineNumber: 69,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-4 mb-8 relative z-10",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-3xl font-black font-outfit uppercase tracking-wider text-white",
                                    children: "Avec Nous"
                                }, void 0, false, {
                                    fileName: "[project]/zainab-khalil-tyb/yasser-zi/src/components/SansVsAvec.tsx",
                                    lineNumber: 72,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/zainab-khalil-tyb/yasser-zi/src/components/SansVsAvec.tsx",
                                lineNumber: 71,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "space-y-6 relative z-10",
                                children: AVEC_NOUS.map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        className: "flex gap-4 items-start text-gray-200 text-lg font-medium",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$circle$2d$check$2d$big$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CheckCircle$3e$__["CheckCircle"], {
                                                className: "w-6 h-6 shrink-0 text-green-400 translate-y-1 shadow-[0_0_15px_rgba(34,197,94,0.5)] rounded-full"
                                            }, void 0, false, {
                                                fileName: "[project]/zainab-khalil-tyb/yasser-zi/src/components/SansVsAvec.tsx",
                                                lineNumber: 77,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "leading-tight",
                                                children: item
                                            }, void 0, false, {
                                                fileName: "[project]/zainab-khalil-tyb/yasser-zi/src/components/SansVsAvec.tsx",
                                                lineNumber: 78,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, idx, true, {
                                        fileName: "[project]/zainab-khalil-tyb/yasser-zi/src/components/SansVsAvec.tsx",
                                        lineNumber: 76,
                                        columnNumber: 29
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/zainab-khalil-tyb/yasser-zi/src/components/SansVsAvec.tsx",
                                lineNumber: 74,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mt-12 relative z-10",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "https://wa.me/212642638022",
                                    target: "_blank",
                                    rel: "noopener noreferrer",
                                    className: "inline-flex items-center justify-center w-full bg-green-500 text-white font-bold py-4 rounded-full text-lg hover:bg-green-400 transition-colors group shadow-[0_10px_30px_rgba(34,197,94,0.3)] hover:shadow-[0_10px_40px_rgba(34,197,94,0.5)] uppercase font-outfit tracking-wide",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                                            className: "mr-3 w-6 h-6 group-hover:scale-110 transition-transform"
                                        }, void 0, false, {
                                            fileName: "[project]/zainab-khalil-tyb/yasser-zi/src/components/SansVsAvec.tsx",
                                            lineNumber: 90,
                                            columnNumber: 29
                                        }, this),
                                        "Réserver Un Appel"
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/zainab-khalil-tyb/yasser-zi/src/components/SansVsAvec.tsx",
                                    lineNumber: 84,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/zainab-khalil-tyb/yasser-zi/src/components/SansVsAvec.tsx",
                                lineNumber: 83,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/zainab-khalil-tyb/yasser-zi/src/components/SansVsAvec.tsx",
                        lineNumber: 61,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/zainab-khalil-tyb/yasser-zi/src/components/SansVsAvec.tsx",
                lineNumber: 37,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/zainab-khalil-tyb/yasser-zi/src/components/SansVsAvec.tsx",
        lineNumber: 25,
        columnNumber: 9
    }, this);
}
_c = SansVsAvec;
var _c;
__turbopack_context__.k.register(_c, "SansVsAvec");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/zainab-khalil-tyb/yasser-zi/src/components/Portfolio.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Portfolio
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/zainab-khalil-tyb/yasser-zi/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/zainab-khalil-tyb/yasser-zi/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/zainab-khalil-tyb/yasser-zi/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__ = __turbopack_context__.i("[project]/zainab-khalil-tyb/yasser-zi/node_modules/lucide-react/dist/esm/icons/play.js [app-client] (ecmascript) <export default as Play>");
"use client";
;
;
;
;
const PROJECTS = [
    {
        type: "photo",
        src: "https://images.unsplash.com/photo-1542204165-65bf26472b9b?auto=format&fit=crop&q=80&w=800",
        title: "Campagne de Lancement",
        category: "Coaching Pro"
    },
    {
        type: "video",
        src: "https://images.unsplash.com/photo-1579383615410-6ed63b15ad08?auto=format&fit=crop&q=80&w=800",
        title: "Masterclass Immobilière",
        category: "Vente & Conversion"
    },
    {
        type: "photo",
        src: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800",
        title: "Branding Portrait",
        category: "Images de Marques"
    },
    {
        type: "video",
        src: "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&q=80&w=800",
        title: "Webinaire Live",
        category: "Ads & Scaling"
    }
];
const staggerVariants = {
    hidden: {
        opacity: 0,
        y: 30
    },
    visible: (i)=>({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.1,
                duration: 0.6,
                ease: "easeOut"
            }
        })
};
function Portfolio() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-32 bg-background relative px-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto mb-16 px-4 md:px-0 flex flex-col items-center text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "text-4xl md:text-6xl font-black font-outfit uppercase tracking-tight mb-4",
                        children: [
                            "Nos ",
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "text-neon-blue",
                                children: "Réalisations"
                            }, void 0, false, {
                                fileName: "[project]/zainab-khalil-tyb/yasser-zi/src/components/Portfolio.tsx",
                                lineNumber: 52,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/zainab-khalil-tyb/yasser-zi/src/components/Portfolio.tsx",
                        lineNumber: 51,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-400 text-lg md:text-xl max-w-2xl",
                        children: "L'esthétique de haute qualité que vous méritez. Des formats courts dynamiques aux formats longs éducatifs."
                    }, void 0, false, {
                        fileName: "[project]/zainab-khalil-tyb/yasser-zi/src/components/Portfolio.tsx",
                        lineNumber: 54,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/zainab-khalil-tyb/yasser-zi/src/components/Portfolio.tsx",
                lineNumber: 50,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 px-4 md:px-0",
                children: PROJECTS.map((proj, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        custom: i,
                        initial: "hidden",
                        whileInView: "visible",
                        viewport: {
                            once: true,
                            margin: "-100px"
                        },
                        variants: staggerVariants,
                        className: "relative group rounded-3xl overflow-hidden aspect-[4/3] bg-charcoal ring-1 ring-white/5 shadow-2xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 bg-transparent group-hover:bg-neon-blue/20 transition-colors duration-500 z-10 pointer-events-none mix-blend-overlay"
                            }, void 0, false, {
                                fileName: "[project]/zainab-khalil-tyb/yasser-zi/src/components/Portfolio.tsx",
                                lineNumber: 71,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-full h-full relative overflow-hidden",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        src: proj.src,
                                        alt: proj.title,
                                        fill: true,
                                        className: "object-cover group-hover:scale-105 transition-transform duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]",
                                        sizes: "(max-width: 768px) 100vw, 50vw"
                                    }, void 0, false, {
                                        fileName: "[project]/zainab-khalil-tyb/yasser-zi/src/components/Portfolio.tsx",
                                        lineNumber: 75,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-500"
                                    }, void 0, false, {
                                        fileName: "[project]/zainab-khalil-tyb/yasser-zi/src/components/Portfolio.tsx",
                                        lineNumber: 82,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/zainab-khalil-tyb/yasser-zi/src/components/Portfolio.tsx",
                                lineNumber: 74,
                                columnNumber: 25
                            }, this),
                            proj.type === "video" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute inset-0 flex items-center justify-center z-20 opacity-80 group-hover:scale-110 group-hover:opacity-100 transition-all duration-500",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "w-20 h-20 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$play$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Play$3e$__["Play"], {
                                        className: "w-8 h-8 text-white ml-2"
                                    }, void 0, false, {
                                        fileName: "[project]/zainab-khalil-tyb/yasser-zi/src/components/Portfolio.tsx",
                                        lineNumber: 89,
                                        columnNumber: 37
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/zainab-khalil-tyb/yasser-zi/src/components/Portfolio.tsx",
                                    lineNumber: 88,
                                    columnNumber: 33
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/zainab-khalil-tyb/yasser-zi/src/components/Portfolio.tsx",
                                lineNumber: 87,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bottom-0 left-0 w-full p-8 z-20 flex flex-col justify-end translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs font-bold uppercase tracking-widest text-gold mb-2",
                                        children: proj.category
                                    }, void 0, false, {
                                        fileName: "[project]/zainab-khalil-tyb/yasser-zi/src/components/Portfolio.tsx",
                                        lineNumber: 96,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                        className: "text-2xl md:text-3xl font-bold text-white font-outfit uppercase",
                                        children: proj.title
                                    }, void 0, false, {
                                        fileName: "[project]/zainab-khalil-tyb/yasser-zi/src/components/Portfolio.tsx",
                                        lineNumber: 97,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/zainab-khalil-tyb/yasser-zi/src/components/Portfolio.tsx",
                                lineNumber: 95,
                                columnNumber: 25
                            }, this)
                        ]
                    }, i, true, {
                        fileName: "[project]/zainab-khalil-tyb/yasser-zi/src/components/Portfolio.tsx",
                        lineNumber: 61,
                        columnNumber: 21
                    }, this))
            }, void 0, false, {
                fileName: "[project]/zainab-khalil-tyb/yasser-zi/src/components/Portfolio.tsx",
                lineNumber: 59,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/zainab-khalil-tyb/yasser-zi/src/components/Portfolio.tsx",
        lineNumber: 49,
        columnNumber: 9
    }, this);
}
_c = Portfolio;
var _c;
__turbopack_context__.k.register(_c, "Portfolio");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/zainab-khalil-tyb/yasser-zi/src/components/Testimonials.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Testimonials
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/zainab-khalil-tyb/yasser-zi/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/zainab-khalil-tyb/yasser-zi/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$quote$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Quote$3e$__ = __turbopack_context__.i("[project]/zainab-khalil-tyb/yasser-zi/node_modules/lucide-react/dist/esm/icons/quote.js [app-client] (ecmascript) <export default as Quote>");
"use client";
;
;
;
const REVIEWS = [
    {
        text: "Une métamorphose totale de mon image. Grâce aux tournages et aux publicités, je génère 3x plus d'appels qualifiés sans efforts supplémentaires. Mes formations se vendent toutes seules.",
        author: "Marc Dupont",
        role: "Formateur en Investissement"
    },
    {
        text: "Leur approche n'a rien à voir avec une agence classique. C'est du sur-mesure ! Ils ont refait mon studio, la qualité est dingue, et mes webinaires sont enfin rentables après 6 mois de stagnation.",
        author: "Élodie Martin",
        role: "Coach Business & Mindset"
    },
    {
        text: "J'avais un bon produit mais personne ne me faisait confiance. En 30 jours, on a tout rebrandé, lancé des reels premium et mon WhatsApp explose. Le meilleur investissement de l'année.",
        author: "Julien R.",
        role: "Expert en Productivité"
    }
];
const containerVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};
const itemVariants = {
    hidden: {
        opacity: 0,
        y: 30
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.8,
            ease: "easeOut"
        }
    }
};
function Testimonials() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "py-32 bg-background relative px-4 border-y border-white/5",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] bg-neon-blue/5 rounded-full blur-[150px] pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/zainab-khalil-tyb/yasser-zi/src/components/Testimonials.tsx",
                lineNumber: 47,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            y: 20
                        },
                        whileInView: {
                            opacity: 1,
                            y: 0
                        },
                        viewport: {
                            once: true,
                            margin: "-100px"
                        },
                        transition: {
                            duration: 0.8
                        },
                        className: "text-center mb-24",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-4xl md:text-6xl font-black font-outfit uppercase tracking-tight",
                                children: [
                                    "L'",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-neon-blue",
                                        children: "Impact"
                                    }, void 0, false, {
                                        fileName: "[project]/zainab-khalil-tyb/yasser-zi/src/components/Testimonials.tsx",
                                        lineNumber: 58,
                                        columnNumber: 27
                                    }, this),
                                    " Parfait"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/zainab-khalil-tyb/yasser-zi/src/components/Testimonials.tsx",
                                lineNumber: 57,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-400 mt-6 text-xl max-w-2xl mx-auto",
                                children: "Les formateurs qui travaillent avec nous deviennent les leaders de leur thématique."
                            }, void 0, false, {
                                fileName: "[project]/zainab-khalil-tyb/yasser-zi/src/components/Testimonials.tsx",
                                lineNumber: 60,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/zainab-khalil-tyb/yasser-zi/src/components/Testimonials.tsx",
                        lineNumber: 50,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        variants: containerVariants,
                        initial: "hidden",
                        whileInView: "visible",
                        viewport: {
                            once: true,
                            margin: "-100px"
                        },
                        className: "grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10",
                        children: REVIEWS.map((review, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                                variants: itemVariants,
                                className: "bg-charcoal/80 p-10 rounded-3xl border border-white/5 hover:border-neon-blue/20 transition-colors backdrop-blur-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$quote$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Quote$3e$__["Quote"], {
                                        className: "w-10 h-10 text-white/10 mb-6"
                                    }, void 0, false, {
                                        fileName: "[project]/zainab-khalil-tyb/yasser-zi/src/components/Testimonials.tsx",
                                        lineNumber: 78,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-300 text-lg leading-relaxed mb-8 italic",
                                        children: [
                                            '"',
                                            review.text,
                                            '"'
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/zainab-khalil-tyb/yasser-zi/src/components/Testimonials.tsx",
                                        lineNumber: 79,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "w-12 h-12 bg-white/5 rounded-full mr-4 flex items-center justify-center font-bold text-white uppercase text-sm border border-white/10",
                                                children: review.author[0]
                                            }, void 0, false, {
                                                fileName: "[project]/zainab-khalil-tyb/yasser-zi/src/components/Testimonials.tsx",
                                                lineNumber: 83,
                                                columnNumber: 33
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                                        className: "text-white font-bold font-outfit uppercase",
                                                        children: review.author
                                                    }, void 0, false, {
                                                        fileName: "[project]/zainab-khalil-tyb/yasser-zi/src/components/Testimonials.tsx",
                                                        lineNumber: 87,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-neon-blue text-sm",
                                                        children: review.role
                                                    }, void 0, false, {
                                                        fileName: "[project]/zainab-khalil-tyb/yasser-zi/src/components/Testimonials.tsx",
                                                        lineNumber: 88,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/zainab-khalil-tyb/yasser-zi/src/components/Testimonials.tsx",
                                                lineNumber: 86,
                                                columnNumber: 33
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/zainab-khalil-tyb/yasser-zi/src/components/Testimonials.tsx",
                                        lineNumber: 82,
                                        columnNumber: 29
                                    }, this)
                                ]
                            }, i, true, {
                                fileName: "[project]/zainab-khalil-tyb/yasser-zi/src/components/Testimonials.tsx",
                                lineNumber: 73,
                                columnNumber: 25
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/zainab-khalil-tyb/yasser-zi/src/components/Testimonials.tsx",
                        lineNumber: 65,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/zainab-khalil-tyb/yasser-zi/src/components/Testimonials.tsx",
                lineNumber: 49,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/zainab-khalil-tyb/yasser-zi/src/components/Testimonials.tsx",
        lineNumber: 45,
        columnNumber: 9
    }, this);
}
_c = Testimonials;
var _c;
__turbopack_context__.k.register(_c, "Testimonials");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/zainab-khalil-tyb/yasser-zi/src/components/Contact.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Contact
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/zainab-khalil-tyb/yasser-zi/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/zainab-khalil-tyb/yasser-zi/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/zainab-khalil-tyb/yasser-zi/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-client] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__ = __turbopack_context__.i("[project]/zainab-khalil-tyb/yasser-zi/node_modules/lucide-react/dist/esm/icons/mail.js [app-client] (ecmascript) <export default as Mail>");
var __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/zainab-khalil-tyb/yasser-zi/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
"use client";
;
;
;
;
function Contact() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "bg-background pt-32 pb-4 overflow-hidden relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black to-transparent z-0 pointer-events-none"
            }, void 0, false, {
                fileName: "[project]/zainab-khalil-tyb/yasser-zi/src/components/Contact.tsx",
                lineNumber: 10,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "max-w-7xl mx-auto px-4 relative z-10 flex flex-col items-center justify-center text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                        initial: {
                            opacity: 0,
                            scale: 0.9
                        },
                        whileInView: {
                            opacity: 1,
                            scale: 1
                        },
                        viewport: {
                            once: true,
                            margin: "-100px"
                        },
                        transition: {
                            duration: 1
                        },
                        className: "mb-16",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-[10vw] md:text-[120px] font-black font-outfit uppercase tracking-tighter leading-none mb-6",
                                children: [
                                    "PRÊT À ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/zainab-khalil-tyb/yasser-zi/src/components/Contact.tsx",
                                        lineNumber: 22,
                                        columnNumber: 32
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-neon-red",
                                        children: "DOMINER"
                                    }, void 0, false, {
                                        fileName: "[project]/zainab-khalil-tyb/yasser-zi/src/components/Contact.tsx",
                                        lineNumber: 22,
                                        columnNumber: 38
                                    }, this),
                                    " ?"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/zainab-khalil-tyb/yasser-zi/src/components/Contact.tsx",
                                lineNumber: 21,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-gray-400 text-xl max-w-2xl mx-auto mb-12",
                                children: "Réservez un appel gratuit. Nous analyserons votre stratégie actuelle et vous montrerons comment notre dispositif peut multiplier vos ventes."
                            }, void 0, false, {
                                fileName: "[project]/zainab-khalil-tyb/yasser-zi/src/components/Contact.tsx",
                                lineNumber: 24,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: "https://wa.me/212642638022",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "inline-flex items-center justify-center bg-white text-black font-black uppercase font-outfit px-12 py-6 rounded-full text-xl md:text-2xl hover:bg-neon-red hover:text-white transition-all duration-300 transform hover:scale-105 shadow-[0_10px_40px_rgba(255,255,255,0.1)] hover:shadow-[0_10px_50px_rgba(255,51,102,0.4)]",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                                        className: "mr-4 w-8 h-8"
                                    }, void 0, false, {
                                        fileName: "[project]/zainab-khalil-tyb/yasser-zi/src/components/Contact.tsx",
                                        lineNumber: 33,
                                        columnNumber: 25
                                    }, this),
                                    "Parler sur WhatsApp"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/zainab-khalil-tyb/yasser-zi/src/components/Contact.tsx",
                                lineNumber: 27,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/zainab-khalil-tyb/yasser-zi/src/components/Contact.tsx",
                        lineNumber: 14,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-full border-t border-white/10 pt-8 mt-20 flex flex-col md:flex-row items-center justify-between text-gray-500 font-medium",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "mb-4 md:mb-0",
                                children: [
                                    "© ",
                                    new Date().getFullYear(),
                                    " With Khalil. Tous droits réservés.."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/zainab-khalil-tyb/yasser-zi/src/components/Contact.tsx",
                                lineNumber: 40,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-6",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                    href: "mailto:khalilbouslime@gmail.com ",
                                    className: "hover:text-white transition-colors flex items-center gap-2",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$mail$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Mail$3e$__["Mail"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/zainab-khalil-tyb/yasser-zi/src/components/Contact.tsx",
                                            lineNumber: 45,
                                            columnNumber: 29
                                        }, this),
                                        " khalilbouslime@gmail.com "
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/zainab-khalil-tyb/yasser-zi/src/components/Contact.tsx",
                                    lineNumber: 44,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/zainab-khalil-tyb/yasser-zi/src/components/Contact.tsx",
                                lineNumber: 43,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/zainab-khalil-tyb/yasser-zi/src/components/Contact.tsx",
                        lineNumber: 39,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/zainab-khalil-tyb/yasser-zi/src/components/Contact.tsx",
                lineNumber: 12,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/zainab-khalil-tyb/yasser-zi/src/components/Contact.tsx",
        lineNumber: 9,
        columnNumber: 9
    }, this);
}
_c = Contact;
var _c;
__turbopack_context__.k.register(_c, "Contact");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/zainab-khalil-tyb/yasser-zi/src/components/WhatsAppButton.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WhatsAppButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/zainab-khalil-tyb/yasser-zi/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/zainab-khalil-tyb/yasser-zi/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__ = __turbopack_context__.i("[project]/zainab-khalil-tyb/yasser-zi/node_modules/lucide-react/dist/esm/icons/message-circle.js [app-client] (ecmascript) <export default as MessageCircle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/zainab-khalil-tyb/yasser-zi/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
"use client";
;
;
;
;
function WhatsAppButton() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        initial: {
            scale: 0,
            opacity: 0
        },
        animate: {
            scale: 1,
            opacity: 1
        },
        transition: {
            delay: 1,
            type: "spring",
            stiffness: 200,
            damping: 20
        },
        className: "fixed bottom-6 right-6 z-50",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            href: "https://wa.me/212642638022",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "flex items-center justify-center w-14 h-14 bg-green-500 rounded-full text-white shadow-[0_0_20px_rgba(34,197,94,0.3)] hover:scale-110 hover:shadow-[0_0_30px_rgba(34,197,94,0.6)] transition-all duration-300 group",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$message$2d$circle$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__MessageCircle$3e$__["MessageCircle"], {
                    size: 32,
                    className: "relative z-10"
                }, void 0, false, {
                    fileName: "[project]/zainab-khalil-tyb/yasser-zi/src/components/WhatsAppButton.tsx",
                    lineNumber: 21,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$zainab$2d$khalil$2d$tyb$2f$yasser$2d$zi$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"
                }, void 0, false, {
                    fileName: "[project]/zainab-khalil-tyb/yasser-zi/src/components/WhatsAppButton.tsx",
                    lineNumber: 24,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/zainab-khalil-tyb/yasser-zi/src/components/WhatsAppButton.tsx",
            lineNumber: 15,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/zainab-khalil-tyb/yasser-zi/src/components/WhatsAppButton.tsx",
        lineNumber: 9,
        columnNumber: 9
    }, this);
}
_c = WhatsAppButton;
var _c;
__turbopack_context__.k.register(_c, "WhatsAppButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=zainab-khalil-tyb_yasser-zi_src_components_d31a5721._.js.map