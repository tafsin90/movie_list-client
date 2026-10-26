(()=>{"use strict";(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/library/CollectionSection.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CollectionSection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fi/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$demoTitles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/demoTitles.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$library$2f$TitleCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/library/TitleCard.jsx [app-client] (ecmascript)");
;
;
;
;
;
function CollectionSection(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(59);
    if ($[0] !== "8018eba32f14277387518439dbcbe937f30d1fd3280f156db7cf77ae7c1033cf") {
        for(let $i = 0; $i < 59; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "8018eba32f14277387518439dbcbe937f30d1fd3280f156db7cf77ae7c1033cf";
    }
    const { section, titles, group, genre, onGenreChange, onGroupReset, onAddTitle, onEditTitle, onRemoveTitle, onToggleWatched } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "eyebrow section-eyebrow",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "eyebrow-line"
                }, void 0, false, {
                    fileName: "[project]/src/components/library/CollectionSection.jsx",
                    lineNumber: 27,
                    columnNumber: 51
                }, this),
                " YOUR COLLECTION"
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/library/CollectionSection.jsx",
            lineNumber: 27,
            columnNumber: 10
        }, this);
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const t2 = section === "watchlist" ? "On your list" : "The ones you\u2019ve seen";
    const t3 = String(titles.length);
    let t4;
    if ($[2] !== t3) {
        t4 = t3.padStart(2, "0");
        $[2] = t3;
        $[3] = t4;
    } else {
        t4 = $[3];
    }
    let t5;
    if ($[4] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "title-count",
            children: t4
        }, void 0, false, {
            fileName: "[project]/src/components/library/CollectionSection.jsx",
            lineNumber: 44,
            columnNumber: 10
        }, this);
        $[4] = t4;
        $[5] = t5;
    } else {
        t5 = $[5];
    }
    let t6;
    if ($[6] !== t2 || $[7] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t1,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    children: [
                        t2,
                        t5
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/library/CollectionSection.jsx",
                    lineNumber: 52,
                    columnNumber: 19
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/library/CollectionSection.jsx",
            lineNumber: 52,
            columnNumber: 10
        }, this);
        $[6] = t2;
        $[7] = t5;
        $[8] = t6;
    } else {
        t6 = $[8];
    }
    let t7;
    if ($[9] !== genre || $[10] !== onGenreChange) {
        t7 = ({
            "CollectionSection[<button>.onClick]": ()=>onGenreChange(genre === "All titles" ? "Drama" : "All titles")
        })["CollectionSection[<button>.onClick]"];
        $[9] = genre;
        $[10] = onGenreChange;
        $[11] = t7;
    } else {
        t7 = $[11];
    }
    let t8;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiSliders"], {}, void 0, false, {
            fileName: "[project]/src/components/library/CollectionSection.jsx",
            lineNumber: 72,
            columnNumber: 10
        }, this);
        $[12] = t8;
    } else {
        t8 = $[12];
    }
    const t9 = genre === "All titles" ? "Filter" : genre;
    let t10;
    if ($[13] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: t9
        }, void 0, false, {
            fileName: "[project]/src/components/library/CollectionSection.jsx",
            lineNumber: 80,
            columnNumber: 11
        }, this);
        $[13] = t9;
        $[14] = t10;
    } else {
        t10 = $[14];
    }
    let t11;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiChevronDown"], {
            size: 13
        }, void 0, false, {
            fileName: "[project]/src/components/library/CollectionSection.jsx",
            lineNumber: 88,
            columnNumber: 11
        }, this);
        $[15] = t11;
    } else {
        t11 = $[15];
    }
    let t12;
    if ($[16] !== t10 || $[17] !== t7) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "sort-button",
            onClick: t7,
            children: [
                t8,
                t10,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/library/CollectionSection.jsx",
            lineNumber: 95,
            columnNumber: 11
        }, this);
        $[16] = t10;
        $[17] = t7;
        $[18] = t12;
    } else {
        t12 = $[18];
    }
    let t13;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "view-toggle selected",
            "aria-label": "Grid view",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiGrid"], {}, void 0, false, {
                fileName: "[project]/src/components/library/CollectionSection.jsx",
                lineNumber: 104,
                columnNumber: 75
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/library/CollectionSection.jsx",
            lineNumber: 104,
            columnNumber: 11
        }, this);
        $[19] = t13;
    } else {
        t13 = $[19];
    }
    let t14;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "view-toggle",
            "aria-label": "Sort",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiFilter"], {}, void 0, false, {
                fileName: "[project]/src/components/library/CollectionSection.jsx",
                lineNumber: 111,
                columnNumber: 61
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/library/CollectionSection.jsx",
            lineNumber: 111,
            columnNumber: 11
        }, this);
        $[20] = t14;
    } else {
        t14 = $[20];
    }
    let t15;
    if ($[21] !== t12) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "collection-tools",
            children: [
                t12,
                t13,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/library/CollectionSection.jsx",
            lineNumber: 118,
            columnNumber: 11
        }, this);
        $[21] = t12;
        $[22] = t15;
    } else {
        t15 = $[22];
    }
    let t16;
    if ($[23] !== t15 || $[24] !== t6) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "section-top",
            children: [
                t6,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/library/CollectionSection.jsx",
            lineNumber: 126,
            columnNumber: 11
        }, this);
        $[23] = t15;
        $[24] = t6;
        $[25] = t16;
    } else {
        t16 = $[25];
    }
    let t17;
    if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "genre-label",
            children: "GENRE"
        }, void 0, false, {
            fileName: "[project]/src/components/library/CollectionSection.jsx",
            lineNumber: 135,
            columnNumber: 11
        }, this);
        $[26] = t17;
    } else {
        t17 = $[26];
    }
    let t18;
    if ($[27] !== genre || $[28] !== onGenreChange) {
        t18 = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$demoTitles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genres"].map({
            "CollectionSection[genres.map()]": (item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: `genre-chip ${genre === item ? "genre-selected" : ""}`,
                    onClick: {
                        "CollectionSection[genres.map() > <button>.onClick]": ()=>onGenreChange(item)
                    }["CollectionSection[genres.map() > <button>.onClick]"],
                    children: item
                }, item, false, {
                    fileName: "[project]/src/components/library/CollectionSection.jsx",
                    lineNumber: 143,
                    columnNumber: 50
                }, this)
        }["CollectionSection[genres.map()]"]);
        $[27] = genre;
        $[28] = onGenreChange;
        $[29] = t18;
    } else {
        t18 = $[29];
    }
    let t19;
    if ($[30] !== t18) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "genre-row",
            children: [
                t17,
                t18
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/library/CollectionSection.jsx",
            lineNumber: 155,
            columnNumber: 11
        }, this);
        $[30] = t18;
        $[31] = t19;
    } else {
        t19 = $[31];
    }
    const t20 = String(titles.length);
    let t21;
    if ($[32] !== t20) {
        t21 = t20.padStart(2, "0");
        $[32] = t20;
        $[33] = t21;
    } else {
        t21 = $[33];
    }
    let t22;
    if ($[34] !== t21) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: [
                "SHOWING ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                    children: t21
                }, void 0, false, {
                    fileName: "[project]/src/components/library/CollectionSection.jsx",
                    lineNumber: 172,
                    columnNumber: 25
                }, this),
                " TITLES"
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/library/CollectionSection.jsx",
            lineNumber: 172,
            columnNumber: 11
        }, this);
        $[34] = t21;
        $[35] = t22;
    } else {
        t22 = $[35];
    }
    let t23;
    if ($[36] === Symbol.for("react.memo_cache_sentinel")) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiGrid"], {
            size: 13
        }, void 0, false, {
            fileName: "[project]/src/components/library/CollectionSection.jsx",
            lineNumber: 180,
            columnNumber: 11
        }, this);
        $[36] = t23;
    } else {
        t23 = $[36];
    }
    const t24 = group === "All titles" ? "All groups" : group;
    let t25;
    if ($[37] !== onGroupReset || $[38] !== t24) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: [
                t23,
                " ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onGroupReset,
                    children: t24
                }, void 0, false, {
                    fileName: "[project]/src/components/library/CollectionSection.jsx",
                    lineNumber: 188,
                    columnNumber: 23
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/library/CollectionSection.jsx",
            lineNumber: 188,
            columnNumber: 11
        }, this);
        $[37] = onGroupReset;
        $[38] = t24;
        $[39] = t25;
    } else {
        t25 = $[39];
    }
    let t26;
    if ($[40] !== t22 || $[41] !== t25) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "result-note",
            children: [
                t22,
                t25
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/library/CollectionSection.jsx",
            lineNumber: 197,
            columnNumber: 11
        }, this);
        $[40] = t22;
        $[41] = t25;
        $[42] = t26;
    } else {
        t26 = $[42];
    }
    let t27;
    if ($[43] !== onAddTitle || $[44] !== onEditTitle || $[45] !== onRemoveTitle || $[46] !== onToggleWatched || $[47] !== titles) {
        t27 = titles.length ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "movie-grid",
            children: titles.map({
                "CollectionSection[titles.map()]": (item_0, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$library$2f$TitleCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        item: item_0,
                        index: index,
                        onEdit: onEditTitle,
                        onRemove: onRemoveTitle,
                        onToggleWatched: onToggleWatched
                    }, item_0.id, false, {
                        fileName: "[project]/src/components/library/CollectionSection.jsx",
                        lineNumber: 207,
                        columnNumber: 63
                    }, this)
            }["CollectionSection[titles.map()]"])
        }, void 0, false, {
            fileName: "[project]/src/components/library/CollectionSection.jsx",
            lineNumber: 206,
            columnNumber: 27
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$library$2f$TitleCard$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EmptyCollection"], {
            onAddTitle: onAddTitle
        }, void 0, false, {
            fileName: "[project]/src/components/library/CollectionSection.jsx",
            lineNumber: 208,
            columnNumber: 54
        }, this);
        $[43] = onAddTitle;
        $[44] = onEditTitle;
        $[45] = onRemoveTitle;
        $[46] = onToggleWatched;
        $[47] = titles;
        $[48] = t27;
    } else {
        t27 = $[48];
    }
    let t28;
    if ($[49] === Symbol.for("react.memo_cache_sentinel")) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: [
                "THAT’S A WRAP FOR NOW ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "footer-star",
                    children: "✳"
                }, void 0, false, {
                    fileName: "[project]/src/components/library/CollectionSection.jsx",
                    lineNumber: 220,
                    columnNumber: 39
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/library/CollectionSection.jsx",
            lineNumber: 220,
            columnNumber: 11
        }, this);
        $[49] = t28;
    } else {
        t28 = $[49];
    }
    let t29;
    if ($[50] === Symbol.for("react.memo_cache_sentinel")) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiChevronRight"], {}, void 0, false, {
            fileName: "[project]/src/components/library/CollectionSection.jsx",
            lineNumber: 227,
            columnNumber: 11
        }, this);
        $[50] = t29;
    } else {
        t29 = $[50];
    }
    let t30;
    if ($[51] !== onGroupReset) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "collection-footer",
            children: [
                t28,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onGroupReset,
                    children: [
                        "VIEW ALL COLLECTIONS ",
                        t29
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/library/CollectionSection.jsx",
                    lineNumber: 234,
                    columnNumber: 51
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/library/CollectionSection.jsx",
            lineNumber: 234,
            columnNumber: 11
        }, this);
        $[51] = onGroupReset;
        $[52] = t30;
    } else {
        t30 = $[52];
    }
    let t31;
    if ($[53] !== t16 || $[54] !== t19 || $[55] !== t26 || $[56] !== t27 || $[57] !== t30) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "collection-section",
            children: [
                t16,
                t19,
                t26,
                t27,
                t30
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/library/CollectionSection.jsx",
            lineNumber: 242,
            columnNumber: 11
        }, this);
        $[53] = t16;
        $[54] = t19;
        $[55] = t26;
        $[56] = t27;
        $[57] = t30;
        $[58] = t31;
    } else {
        t31 = $[58];
    }
    return t31;
}
_c = CollectionSection;
var _c;
__turbopack_context__.k.register(_c, "CollectionSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/library/GroupDialog.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>GroupDialog
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fi/index.mjs [app-client] (ecmascript)");
;
;
;
function GroupDialog(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(24);
    if ($[0] !== "1aefc00ff6807d62efd79b303a902070a2cbbf7e4f8db975358ee82826af1038") {
        for(let $i = 0; $i < 24; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "1aefc00ff6807d62efd79b303a902070a2cbbf7e4f8db975358ee82826af1038";
    }
    const { onClose, onCreate } = t0;
    let t1;
    if ($[1] !== onCreate) {
        t1 = function handleSubmit(event) {
            event.preventDefault();
            onCreate(String(new FormData(event.currentTarget).get("groupName")).trim());
        };
        $[1] = onCreate;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    const handleSubmit = t1;
    let t2;
    if ($[3] !== onClose) {
        t2 = ({
            "GroupDialog[<div>.onMouseDown]": (event_0)=>event_0.target === event_0.currentTarget && onClose()
        })["GroupDialog[<div>.onMouseDown]"];
        $[3] = onClose;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    let t3;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiX"], {}, void 0, false, {
            fileName: "[project]/src/components/library/GroupDialog.jsx",
            lineNumber: 39,
            columnNumber: 10
        }, this);
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    if ($[6] !== onClose) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            className: "modal-close",
            onClick: onClose,
            "aria-label": "Close",
            children: t3
        }, void 0, false, {
            fileName: "[project]/src/components/library/GroupDialog.jsx",
            lineNumber: 46,
            columnNumber: 10
        }, this);
        $[6] = onClose;
        $[7] = t4;
    } else {
        t4 = $[7];
    }
    let t5;
    let t6;
    let t7;
    if ($[8] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "modal-kicker",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiGrid"], {}, void 0, false, {
                    fileName: "[project]/src/components/library/GroupDialog.jsx",
                    lineNumber: 56,
                    columnNumber: 40
                }, this),
                " MAKE IT YOURS"
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/library/GroupDialog.jsx",
            lineNumber: 56,
            columnNumber: 10
        }, this);
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            children: "A new little corner."
        }, void 0, false, {
            fileName: "[project]/src/components/library/GroupDialog.jsx",
            lineNumber: 57,
            columnNumber: 10
        }, this);
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "modal-copy",
            children: "Give your collection a name. Anime, date night, comfort rewatches — anything goes."
        }, void 0, false, {
            fileName: "[project]/src/components/library/GroupDialog.jsx",
            lineNumber: 58,
            columnNumber: 10
        }, this);
        $[8] = t5;
        $[9] = t6;
        $[10] = t7;
    } else {
        t5 = $[8];
        t6 = $[9];
        t7 = $[10];
    }
    let t8;
    if ($[11] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "field-label",
            children: [
                "GROUP NAME",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    required: true,
                    name: "groupName",
                    autoFocus: true,
                    placeholder: "e.g. Documentaries"
                }, void 0, false, {
                    fileName: "[project]/src/components/library/GroupDialog.jsx",
                    lineNumber: 69,
                    columnNumber: 51
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/library/GroupDialog.jsx",
            lineNumber: 69,
            columnNumber: 10
        }, this);
        $[11] = t8;
    } else {
        t8 = $[11];
    }
    let t9;
    if ($[12] !== onClose) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "cancel-button",
            type: "button",
            onClick: onClose,
            children: "Cancel"
        }, void 0, false, {
            fileName: "[project]/src/components/library/GroupDialog.jsx",
            lineNumber: 76,
            columnNumber: 10
        }, this);
        $[12] = onClose;
        $[13] = t9;
    } else {
        t9 = $[13];
    }
    let t10;
    if ($[14] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "add-title-button",
            type: "submit",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiPlus"], {}, void 0, false, {
                    fileName: "[project]/src/components/library/GroupDialog.jsx",
                    lineNumber: 84,
                    columnNumber: 62
                }, this),
                " Create group"
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/library/GroupDialog.jsx",
            lineNumber: 84,
            columnNumber: 11
        }, this);
        $[14] = t10;
    } else {
        t10 = $[14];
    }
    let t11;
    if ($[15] !== t9) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "modal-actions",
            children: [
                t9,
                t10
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/library/GroupDialog.jsx",
            lineNumber: 91,
            columnNumber: 11
        }, this);
        $[15] = t9;
        $[16] = t11;
    } else {
        t11 = $[16];
    }
    let t12;
    if ($[17] !== handleSubmit || $[18] !== t11 || $[19] !== t4) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            className: "modal-card group-modal",
            onSubmit: handleSubmit,
            children: [
                t4,
                t5,
                t6,
                t7,
                t8,
                t11
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/library/GroupDialog.jsx",
            lineNumber: 99,
            columnNumber: 11
        }, this);
        $[17] = handleSubmit;
        $[18] = t11;
        $[19] = t4;
        $[20] = t12;
    } else {
        t12 = $[20];
    }
    let t13;
    if ($[21] !== t12 || $[22] !== t2) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "modal-backdrop",
            onMouseDown: t2,
            children: t12
        }, void 0, false, {
            fileName: "[project]/src/components/library/GroupDialog.jsx",
            lineNumber: 109,
            columnNumber: 11
        }, this);
        $[21] = t12;
        $[22] = t2;
        $[23] = t13;
    } else {
        t13 = $[23];
    }
    return t13;
}
_c = GroupDialog;
var _c;
__turbopack_context__.k.register(_c, "GroupDialog");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/library/IconButton.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>IconButton
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
;
;
function IconButton(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(6);
    if ($[0] !== "87f697407274a6af8d9b6dbad317a779696d091110a98b3bd592d7442d3e79e7") {
        for(let $i = 0; $i < 6; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "87f697407274a6af8d9b6dbad317a779696d091110a98b3bd592d7442d3e79e7";
    }
    const { label, children, onClick, className: t1 } = t0;
    const className = t1 === undefined ? "" : t1;
    const t2 = `icon-button ${className}`;
    let t3;
    if ($[1] !== children || $[2] !== label || $[3] !== onClick || $[4] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            className: t2,
            "aria-label": label,
            title: label,
            onClick: onClick,
            children: children
        }, void 0, false, {
            fileName: "[project]/src/components/library/IconButton.jsx",
            lineNumber: 20,
            columnNumber: 10
        }, this);
        $[1] = children;
        $[2] = label;
        $[3] = onClick;
        $[4] = t2;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    return t3;
}
_c = IconButton;
var _c;
__turbopack_context__.k.register(_c, "IconButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/library/LibraryDashboard.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>LibraryDashboard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$demoTitles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/demoTitles.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$movie$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/movie-utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$library$2f$CollectionSection$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/library/CollectionSection.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$library$2f$GroupDialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/library/GroupDialog.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$library$2f$ProfileDialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/library/ProfileDialog.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$library$2f$Sidebar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/library/Sidebar.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$library$2f$StatsOverview$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/library/StatsOverview.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$library$2f$TitleEditor$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/library/TitleEditor.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$library$2f$Topbar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/library/Topbar.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$library$2f$WelcomeHeader$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/library/WelcomeHeader.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
;
;
;
function LibraryDashboard() {
    _s();
    const [titles, setTitles] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$demoTitles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["demoTitles"]);
    const [customGroups, setCustomGroups] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [section, setSection] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("watchlist");
    const [group, setGroup] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("All titles");
    const [genre, setGenre] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("All titles");
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [modal, setModal] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [editingTitle, setEditingTitle] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [mobileNavOpen, setMobileNavOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const visibleTitles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "LibraryDashboard.useMemo[visibleTitles]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$movie$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["filterTitles"])(titles, {
                section,
                group,
                genre,
                query
            })
    }["LibraryDashboard.useMemo[visibleTitles]"], [
        titles,
        section,
        group,
        genre,
        query
    ]);
    const groups = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "LibraryDashboard.useMemo[groups]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$movie$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getGroups"])(customGroups, titles)
    }["LibraryDashboard.useMemo[groups]"], [
        customGroups,
        titles
    ]);
    const watchedTitles = titles.filter((item)=>item.state === "watched");
    const watchCount = titles.filter((item_0)=>item_0.state === "watchlist").length;
    const watchedCount = watchedTitles.length;
    const averageRating = watchedTitles.reduce((total, item_1)=>total + item_1.rating, 0) / (watchedCount || 1);
    function openTitleEditor(title = null) {
        setEditingTitle(title);
        setModal("title");
    }
    function saveTitle(formData) {
        const currentTitle = editingTitle || {
            id: Date.now(),
            state: section
        };
        const updatedTitle = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$movie$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["saveTitleFromForm"])(formData, currentTitle);
        setTitles((currentTitles)=>editingTitle ? currentTitles.map((item_2)=>item_2.id === editingTitle.id ? updatedTitle : item_2) : [
                updatedTitle,
                ...currentTitles
            ]);
        closeModal();
    }
    function createGroup(name) {
        const exists = [
            "All titles",
            "Movies",
            "Series",
            "Anime",
            ...customGroups
        ].some((existingGroup)=>existingGroup.toLowerCase() === name.toLowerCase());
        if (!name || exists) return;
        setCustomGroups((currentGroups)=>[
                ...currentGroups,
                name
            ]);
        setGroup(name);
        closeModal();
    }
    function removeTitle(title_0) {
        setTitles((currentTitles_0)=>currentTitles_0.filter((item_3)=>item_3.id !== title_0.id));
    }
    function toggleWatched(title_1) {
        setTitles((currentTitles_1)=>currentTitles_1.map((item_4)=>item_4.id === title_1.id ? {
                    ...item_4,
                    state: item_4.state === "watchlist" ? "watched" : "watchlist"
                } : item_4));
    }
    function closeModal() {
        setModal(null);
        setEditingTitle(null);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
        className: "app-shell",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$library$2f$Sidebar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                section: section,
                group: group,
                groups: groups,
                watchCount: watchCount,
                watchedCount: watchedCount,
                titleCount: titles.length,
                mobileOpen: mobileNavOpen,
                onSectionChange: (nextSection)=>{
                    setSection(nextSection);
                    setMobileNavOpen(false);
                },
                onGroupChange: setGroup,
                onCreateGroup: ()=>setModal("group"),
                onProfileOpen: ()=>setModal("profile")
            }, void 0, false, {
                fileName: "[project]/src/components/library/LibraryDashboard.jsx",
                lineNumber: 69,
                columnNumber: 7
            }, this),
            mobileNavOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "mobile-scrim",
                "aria-label": "Close menu",
                onClick: ()=>setMobileNavOpen(false)
            }, void 0, false, {
                fileName: "[project]/src/components/library/LibraryDashboard.jsx",
                lineNumber: 74,
                columnNumber: 25
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "main-panel",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$library$2f$Topbar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        section: section,
                        query: query,
                        onQueryChange: setQuery,
                        onMenuOpen: ()=>setMobileNavOpen(true),
                        onSettingsOpen: ()=>setModal("profile")
                    }, void 0, false, {
                        fileName: "[project]/src/components/library/LibraryDashboard.jsx",
                        lineNumber: 77,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "content-wrap",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$library$2f$WelcomeHeader$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                onAddTitle: ()=>openTitleEditor()
                            }, void 0, false, {
                                fileName: "[project]/src/components/library/LibraryDashboard.jsx",
                                lineNumber: 80,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$library$2f$StatsOverview$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                watchCount: watchCount,
                                watchedCount: watchedCount,
                                averageRating: averageRating
                            }, void 0, false, {
                                fileName: "[project]/src/components/library/LibraryDashboard.jsx",
                                lineNumber: 81,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$library$2f$CollectionSection$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                section: section,
                                titles: visibleTitles,
                                group: group,
                                genre: genre,
                                onGenreChange: setGenre,
                                onGroupReset: ()=>setGroup("All titles"),
                                onAddTitle: ()=>openTitleEditor(),
                                onEditTitle: openTitleEditor,
                                onRemoveTitle: removeTitle,
                                onToggleWatched: toggleWatched
                            }, void 0, false, {
                                fileName: "[project]/src/components/library/LibraryDashboard.jsx",
                                lineNumber: 82,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
                                className: "page-footer",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            "MADE FOR THE LOVE OF THE STORY ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "✳"
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/library/LibraryDashboard.jsx",
                                                lineNumber: 84,
                                                columnNumber: 50
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/library/LibraryDashboard.jsx",
                                        lineNumber: 84,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            "YOUR TASTE. YOUR COLLECTION. ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                                                children: "FRAME."
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/library/LibraryDashboard.jsx",
                                                lineNumber: 85,
                                                columnNumber: 48
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/library/LibraryDashboard.jsx",
                                        lineNumber: 85,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/library/LibraryDashboard.jsx",
                                lineNumber: 83,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/library/LibraryDashboard.jsx",
                        lineNumber: 79,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/library/LibraryDashboard.jsx",
                lineNumber: 76,
                columnNumber: 7
            }, this),
            modal === "title" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$library$2f$TitleEditor$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                title: editingTitle,
                groups: groups,
                selectedGroup: group,
                onClose: closeModal,
                onSave: saveTitle
            }, void 0, false, {
                fileName: "[project]/src/components/library/LibraryDashboard.jsx",
                lineNumber: 90,
                columnNumber: 29
            }, this),
            modal === "group" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$library$2f$GroupDialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onClose: closeModal,
                onCreate: createGroup
            }, void 0, false, {
                fileName: "[project]/src/components/library/LibraryDashboard.jsx",
                lineNumber: 91,
                columnNumber: 29
            }, this),
            modal === "profile" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$library$2f$ProfileDialog$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                onClose: closeModal
            }, void 0, false, {
                fileName: "[project]/src/components/library/LibraryDashboard.jsx",
                lineNumber: 92,
                columnNumber: 31
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/library/LibraryDashboard.jsx",
        lineNumber: 68,
        columnNumber: 10
    }, this);
}
_s(LibraryDashboard, "Rty7IggTA+NEb2Fegk0LjWFuka4=");
_c = LibraryDashboard;
var _c;
__turbopack_context__.k.register(_c, "LibraryDashboard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/library/ProfileDialog.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ProfileDialog
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fi/index.mjs [app-client] (ecmascript)");
;
;
;
function ProfileDialog(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(19);
    if ($[0] !== "bf44fddedad345366e28ea4f55e8a9ba00dfa7664d6a78be184ed2bd486bae17") {
        for(let $i = 0; $i < 19; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "bf44fddedad345366e28ea4f55e8a9ba00dfa7664d6a78be184ed2bd486bae17";
    }
    const { onClose } = t0;
    let t1;
    if ($[1] !== onClose) {
        t1 = ({
            "ProfileDialog[<div>.onMouseDown]": (event)=>event.target === event.currentTarget && onClose()
        })["ProfileDialog[<div>.onMouseDown]"];
        $[1] = onClose;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiX"], {}, void 0, false, {
            fileName: "[project]/src/components/library/ProfileDialog.jsx",
            lineNumber: 26,
            columnNumber: 10
        }, this);
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] !== onClose) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            className: "modal-close",
            onClick: onClose,
            "aria-label": "Close",
            children: t2
        }, void 0, false, {
            fileName: "[project]/src/components/library/ProfileDialog.jsx",
            lineNumber: 33,
            columnNumber: 10
        }, this);
        $[4] = onClose;
        $[5] = t3;
    } else {
        t3 = $[5];
    }
    let t4;
    let t5;
    let t6;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "modal-kicker",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiCommand"], {}, void 0, false, {
                    fileName: "[project]/src/components/library/ProfileDialog.jsx",
                    lineNumber: 43,
                    columnNumber: 40
                }, this),
                " YOUR SPACE"
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/library/ProfileDialog.jsx",
            lineNumber: 43,
            columnNumber: 10
        }, this);
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            children: "Welcome to FRAME."
        }, void 0, false, {
            fileName: "[project]/src/components/library/ProfileDialog.jsx",
            lineNumber: 44,
            columnNumber: 10
        }, this);
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "modal-copy",
            children: "This is your personal film journal. Your collection is saved in this demo session only."
        }, void 0, false, {
            fileName: "[project]/src/components/library/ProfileDialog.jsx",
            lineNumber: 45,
            columnNumber: 10
        }, this);
        $[6] = t4;
        $[7] = t5;
        $[8] = t6;
    } else {
        t4 = $[6];
        t5 = $[7];
        t6 = $[8];
    }
    let t7;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "demo-notice",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiHeart"], {}, void 0, false, {
                    fileName: "[project]/src/components/library/ProfileDialog.jsx",
                    lineNumber: 56,
                    columnNumber: 39
                }, this),
                " Sign-in and syncing can be added when you’re ready."
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/library/ProfileDialog.jsx",
            lineNumber: 56,
            columnNumber: 10
        }, this);
        $[9] = t7;
    } else {
        t7 = $[9];
    }
    let t8;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiCheck"], {}, void 0, false, {
            fileName: "[project]/src/components/library/ProfileDialog.jsx",
            lineNumber: 63,
            columnNumber: 10
        }, this);
        $[10] = t8;
    } else {
        t8 = $[10];
    }
    let t9;
    if ($[11] !== onClose) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "modal-actions",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                className: "add-title-button",
                onClick: onClose,
                children: [
                    "Sounds good ",
                    t8
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/library/ProfileDialog.jsx",
                lineNumber: 70,
                columnNumber: 41
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/library/ProfileDialog.jsx",
            lineNumber: 70,
            columnNumber: 10
        }, this);
        $[11] = onClose;
        $[12] = t9;
    } else {
        t9 = $[12];
    }
    let t10;
    if ($[13] !== t3 || $[14] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "modal-card group-modal",
            children: [
                t3,
                t4,
                t5,
                t6,
                t7,
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/library/ProfileDialog.jsx",
            lineNumber: 78,
            columnNumber: 11
        }, this);
        $[13] = t3;
        $[14] = t9;
        $[15] = t10;
    } else {
        t10 = $[15];
    }
    let t11;
    if ($[16] !== t1 || $[17] !== t10) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "modal-backdrop",
            onMouseDown: t1,
            children: t10
        }, void 0, false, {
            fileName: "[project]/src/components/library/ProfileDialog.jsx",
            lineNumber: 87,
            columnNumber: 11
        }, this);
        $[16] = t1;
        $[17] = t10;
        $[18] = t11;
    } else {
        t11 = $[18];
    }
    return t11;
}
_c = ProfileDialog;
var _c;
__turbopack_context__.k.register(_c, "ProfileDialog");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/library/Sidebar.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Sidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fi/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$demoTitles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/demoTitles.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$library$2f$IconButton$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/library/IconButton.jsx [app-client] (ecmascript)");
;
;
;
;
;
const primaryGroups = [
    "All titles",
    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$demoTitles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultGroups"]
];
function Sidebar(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(60);
    if ($[0] !== "bce40d53edae3a9389b90a46e258ab778347f5c429001a63f502e7ba07a20a87") {
        for(let $i = 0; $i < 60; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "bce40d53edae3a9389b90a46e258ab778347f5c429001a63f502e7ba07a20a87";
    }
    const { section, group, groups, watchCount, watchedCount, titleCount, mobileOpen, onSectionChange, onGroupChange, onCreateGroup, onProfileOpen } = t0;
    const t1 = `sidebar ${mobileOpen ? "sidebar-open" : ""}`;
    let t2;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "brand-mark",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiFilm"], {
                size: 19
            }, void 0, false, {
                fileName: "[project]/src/components/library/Sidebar.jsx",
                lineNumber: 30,
                columnNumber: 38
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/library/Sidebar.jsx",
            lineNumber: 30,
            columnNumber: 10
        }, this);
        $[1] = t2;
    } else {
        t2 = $[1];
    }
    let t3;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "brand",
            children: [
                t2,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: [
                        "FRAME",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            className: "brand-period",
                            children: "."
                        }, void 0, false, {
                            fileName: "[project]/src/components/library/Sidebar.jsx",
                            lineNumber: 37,
                            columnNumber: 48
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/library/Sidebar.jsx",
                    lineNumber: 37,
                    columnNumber: 37
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "brand-edition",
                    children: "YOUR FILM JOURNAL"
                }, void 0, false, {
                    fileName: "[project]/src/components/library/Sidebar.jsx",
                    lineNumber: 37,
                    columnNumber: 94
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/library/Sidebar.jsx",
            lineNumber: 37,
            columnNumber: 10
        }, this);
        $[2] = t3;
    } else {
        t3 = $[2];
    }
    let t4;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "nav-caption",
            children: "YOUR LIBRARY"
        }, void 0, false, {
            fileName: "[project]/src/components/library/Sidebar.jsx",
            lineNumber: 44,
            columnNumber: 10
        }, this);
        $[3] = t4;
    } else {
        t4 = $[3];
    }
    const t5 = `nav-item ${section === "watchlist" ? "active" : ""}`;
    let t6;
    if ($[4] !== onSectionChange) {
        t6 = ({
            "Sidebar[<button>.onClick]": ()=>onSectionChange("watchlist")
        })["Sidebar[<button>.onClick]"];
        $[4] = onSectionChange;
        $[5] = t6;
    } else {
        t6 = $[5];
    }
    let t7;
    let t8;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiFilm"], {}, void 0, false, {
            fileName: "[project]/src/components/library/Sidebar.jsx",
            lineNumber: 63,
            columnNumber: 10
        }, this);
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: "Watchlist"
        }, void 0, false, {
            fileName: "[project]/src/components/library/Sidebar.jsx",
            lineNumber: 64,
            columnNumber: 10
        }, this);
        $[6] = t7;
        $[7] = t8;
    } else {
        t7 = $[6];
        t8 = $[7];
    }
    let t9;
    if ($[8] !== watchCount) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "nav-count",
            children: watchCount
        }, void 0, false, {
            fileName: "[project]/src/components/library/Sidebar.jsx",
            lineNumber: 73,
            columnNumber: 10
        }, this);
        $[8] = watchCount;
        $[9] = t9;
    } else {
        t9 = $[9];
    }
    let t10;
    if ($[10] !== t5 || $[11] !== t6 || $[12] !== t9) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: t5,
            onClick: t6,
            children: [
                t7,
                t8,
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/library/Sidebar.jsx",
            lineNumber: 81,
            columnNumber: 11
        }, this);
        $[10] = t5;
        $[11] = t6;
        $[12] = t9;
        $[13] = t10;
    } else {
        t10 = $[13];
    }
    const t11 = `nav-item ${section === "watched" ? "active" : ""}`;
    let t12;
    if ($[14] !== onSectionChange) {
        t12 = ({
            "Sidebar[<button>.onClick]": ()=>onSectionChange("watched")
        })["Sidebar[<button>.onClick]"];
        $[14] = onSectionChange;
        $[15] = t12;
    } else {
        t12 = $[15];
    }
    let t13;
    let t14;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiCheck"], {}, void 0, false, {
            fileName: "[project]/src/components/library/Sidebar.jsx",
            lineNumber: 103,
            columnNumber: 11
        }, this);
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: "Watched"
        }, void 0, false, {
            fileName: "[project]/src/components/library/Sidebar.jsx",
            lineNumber: 104,
            columnNumber: 11
        }, this);
        $[16] = t13;
        $[17] = t14;
    } else {
        t13 = $[16];
        t14 = $[17];
    }
    let t15;
    if ($[18] !== watchedCount) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "nav-count",
            children: watchedCount
        }, void 0, false, {
            fileName: "[project]/src/components/library/Sidebar.jsx",
            lineNumber: 113,
            columnNumber: 11
        }, this);
        $[18] = watchedCount;
        $[19] = t15;
    } else {
        t15 = $[19];
    }
    let t16;
    if ($[20] !== t11 || $[21] !== t12 || $[22] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: t11,
            onClick: t12,
            children: [
                t13,
                t14,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/library/Sidebar.jsx",
            lineNumber: 121,
            columnNumber: 11
        }, this);
        $[20] = t11;
        $[21] = t12;
        $[22] = t15;
        $[23] = t16;
    } else {
        t16 = $[23];
    }
    let t17;
    if ($[24] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "nav-divider"
        }, void 0, false, {
            fileName: "[project]/src/components/library/Sidebar.jsx",
            lineNumber: 131,
            columnNumber: 11
        }, this);
        $[24] = t17;
    } else {
        t17 = $[24];
    }
    let t18;
    if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "nav-caption",
            children: "YOUR GROUPS"
        }, void 0, false, {
            fileName: "[project]/src/components/library/Sidebar.jsx",
            lineNumber: 138,
            columnNumber: 11
        }, this);
        $[25] = t18;
    } else {
        t18 = $[25];
    }
    let t19;
    if ($[26] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiPlus"], {}, void 0, false, {
            fileName: "[project]/src/components/library/Sidebar.jsx",
            lineNumber: 145,
            columnNumber: 11
        }, this);
        $[26] = t19;
    } else {
        t19 = $[26];
    }
    let t20;
    if ($[27] !== onCreateGroup) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "group-heading",
            children: [
                t18,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$library$2f$IconButton$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    label: "Create a group",
                    onClick: onCreateGroup,
                    children: t19
                }, void 0, false, {
                    fileName: "[project]/src/components/library/Sidebar.jsx",
                    lineNumber: 152,
                    columnNumber: 47
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/library/Sidebar.jsx",
            lineNumber: 152,
            columnNumber: 11
        }, this);
        $[27] = onCreateGroup;
        $[28] = t20;
    } else {
        t20 = $[28];
    }
    let t21;
    if ($[29] !== group || $[30] !== onGroupChange || $[31] !== titleCount) {
        t21 = primaryGroups.map({
            "Sidebar[primaryGroups.map()]": (item, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GroupButton, {
                    name: item,
                    index: index,
                    active: group === item,
                    count: item === "All titles" ? titleCount : undefined,
                    onClick: {
                        "Sidebar[primaryGroups.map() > <GroupButton>.onClick]": ()=>onGroupChange(item)
                    }["Sidebar[primaryGroups.map() > <GroupButton>.onClick]"]
                }, item, false, {
                    fileName: "[project]/src/components/library/Sidebar.jsx",
                    lineNumber: 161,
                    columnNumber: 56
                }, this)
        }["Sidebar[primaryGroups.map()]"]);
        $[29] = group;
        $[30] = onGroupChange;
        $[31] = titleCount;
        $[32] = t21;
    } else {
        t21 = $[32];
    }
    let t22;
    if ($[33] !== group || $[34] !== groups || $[35] !== onGroupChange) {
        let t23;
        if ($[37] !== group || $[38] !== onGroupChange) {
            t23 = ({
                "Sidebar[(anonymous)()]": (item_1)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(GroupButton, {
                        name: item_1,
                        active: group === item_1,
                        onClick: {
                            "Sidebar[(anonymous)() > <GroupButton>.onClick]": ()=>onGroupChange(item_1)
                        }["Sidebar[(anonymous)() > <GroupButton>.onClick]"]
                    }, item_1, false, {
                        fileName: "[project]/src/components/library/Sidebar.jsx",
                        lineNumber: 177,
                        columnNumber: 45
                    }, this)
            })["Sidebar[(anonymous)()]"];
            $[37] = group;
            $[38] = onGroupChange;
            $[39] = t23;
        } else {
            t23 = $[39];
        }
        t22 = groups.filter(_SidebarGroupsFilter).map(t23);
        $[33] = group;
        $[34] = groups;
        $[35] = onGroupChange;
        $[36] = t22;
    } else {
        t22 = $[36];
    }
    let t23;
    if ($[40] === Symbol.for("react.memo_cache_sentinel")) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiPlus"], {
            size: 14
        }, void 0, false, {
            fileName: "[project]/src/components/library/Sidebar.jsx",
            lineNumber: 197,
            columnNumber: 11
        }, this);
        $[40] = t23;
    } else {
        t23 = $[40];
    }
    let t24;
    if ($[41] !== onCreateGroup) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "add-group",
            onClick: onCreateGroup,
            children: [
                t23,
                " New group"
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/library/Sidebar.jsx",
            lineNumber: 204,
            columnNumber: 11
        }, this);
        $[41] = onCreateGroup;
        $[42] = t24;
    } else {
        t24 = $[42];
    }
    let t25;
    if ($[43] === Symbol.for("react.memo_cache_sentinel")) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "sidebar-note",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "note-star",
                    children: "✳"
                }, void 0, false, {
                    fileName: "[project]/src/components/library/Sidebar.jsx",
                    lineNumber: 212,
                    columnNumber: 41
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "note-title",
                    children: "A little more you."
                }, void 0, false, {
                    fileName: "[project]/src/components/library/Sidebar.jsx",
                    lineNumber: 212,
                    columnNumber: 75
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "note-copy",
                    children: "Your collection, your taste, your next great watch."
                }, void 0, false, {
                    fileName: "[project]/src/components/library/Sidebar.jsx",
                    lineNumber: 212,
                    columnNumber: 123
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "note-spark",
                    children: "✳"
                }, void 0, false, {
                    fileName: "[project]/src/components/library/Sidebar.jsx",
                    lineNumber: 212,
                    columnNumber: 203
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/library/Sidebar.jsx",
            lineNumber: 212,
            columnNumber: 11
        }, this);
        $[43] = t25;
    } else {
        t25 = $[43];
    }
    let t26;
    if ($[44] !== t10 || $[45] !== t16 || $[46] !== t20 || $[47] !== t21 || $[48] !== t22 || $[49] !== t24) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "sidebar-scroll",
            children: [
                t4,
                t10,
                t16,
                t17,
                t20,
                t21,
                t22,
                t24,
                t25
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/library/Sidebar.jsx",
            lineNumber: 219,
            columnNumber: 11
        }, this);
        $[44] = t10;
        $[45] = t16;
        $[46] = t20;
        $[47] = t21;
        $[48] = t22;
        $[49] = t24;
        $[50] = t26;
    } else {
        t26 = $[50];
    }
    let t27;
    if ($[51] === Symbol.for("react.memo_cache_sentinel")) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "avatar",
            children: "T"
        }, void 0, false, {
            fileName: "[project]/src/components/library/Sidebar.jsx",
            lineNumber: 232,
            columnNumber: 11
        }, this);
        $[51] = t27;
    } else {
        t27 = $[51];
    }
    let t28;
    let t29;
    if ($[52] === Symbol.for("react.memo_cache_sentinel")) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "profile-name",
            children: [
                "Your space",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "Personal library"
                }, void 0, false, {
                    fileName: "[project]/src/components/library/Sidebar.jsx",
                    lineNumber: 240,
                    columnNumber: 52
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/library/Sidebar.jsx",
            lineNumber: 240,
            columnNumber: 11
        }, this);
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiMoreHorizontal"], {
            className: "profile-more"
        }, void 0, false, {
            fileName: "[project]/src/components/library/Sidebar.jsx",
            lineNumber: 241,
            columnNumber: 11
        }, this);
        $[52] = t28;
        $[53] = t29;
    } else {
        t28 = $[52];
        t29 = $[53];
    }
    let t30;
    if ($[54] !== onProfileOpen) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "profile-row",
            onClick: onProfileOpen,
            children: [
                t27,
                t28,
                t29
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/library/Sidebar.jsx",
            lineNumber: 250,
            columnNumber: 11
        }, this);
        $[54] = onProfileOpen;
        $[55] = t30;
    } else {
        t30 = $[55];
    }
    let t31;
    if ($[56] !== t1 || $[57] !== t26 || $[58] !== t30) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
            className: t1,
            children: [
                t3,
                t26,
                t30
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/library/Sidebar.jsx",
            lineNumber: 258,
            columnNumber: 11
        }, this);
        $[56] = t1;
        $[57] = t26;
        $[58] = t30;
        $[59] = t31;
    } else {
        t31 = $[59];
    }
    return t31;
}
_c = Sidebar;
function _SidebarGroupsFilter(item_0) {
    return !primaryGroups.includes(item_0);
}
function GroupButton(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(13);
    if ($[0] !== "bce40d53edae3a9389b90a46e258ab778347f5c429001a63f502e7ba07a20a87") {
        for(let $i = 0; $i < 13; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "bce40d53edae3a9389b90a46e258ab778347f5c429001a63f502e7ba07a20a87";
    }
    const { name, index, active, count, onClick } = t0;
    const t1 = `nav-item group-item ${active ? "group-active" : ""}`;
    const t2 = `group-dot dot-${index ?? "extra"}`;
    let t3;
    if ($[1] !== t2) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: t2
        }, void 0, false, {
            fileName: "[project]/src/components/library/Sidebar.jsx",
            lineNumber: 290,
            columnNumber: 10
        }, this);
        $[1] = t2;
        $[2] = t3;
    } else {
        t3 = $[2];
    }
    let t4;
    if ($[3] !== name) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: name
        }, void 0, false, {
            fileName: "[project]/src/components/library/Sidebar.jsx",
            lineNumber: 298,
            columnNumber: 10
        }, this);
        $[3] = name;
        $[4] = t4;
    } else {
        t4 = $[4];
    }
    let t5;
    if ($[5] !== count) {
        t5 = count !== undefined && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "nav-count",
            children: count
        }, void 0, false, {
            fileName: "[project]/src/components/library/Sidebar.jsx",
            lineNumber: 306,
            columnNumber: 33
        }, this);
        $[5] = count;
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    if ($[7] !== onClick || $[8] !== t1 || $[9] !== t3 || $[10] !== t4 || $[11] !== t5) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: t1,
            onClick: onClick,
            children: [
                t3,
                t4,
                t5
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/library/Sidebar.jsx",
            lineNumber: 314,
            columnNumber: 10
        }, this);
        $[7] = onClick;
        $[8] = t1;
        $[9] = t3;
        $[10] = t4;
        $[11] = t5;
        $[12] = t6;
    } else {
        t6 = $[12];
    }
    return t6;
}
_c1 = GroupButton;
var _c, _c1;
__turbopack_context__.k.register(_c, "Sidebar");
__turbopack_context__.k.register(_c1, "GroupButton");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/library/StatsOverview.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StatsOverview
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fi/index.mjs [app-client] (ecmascript)");
;
;
;
function StatsOverview(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(34);
    if ($[0] !== "49ddc3920cc6a1548795581045a1251c7a599df502b7bd3c6611000063e6bb5c") {
        for(let $i = 0; $i < 34; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "49ddc3920cc6a1548795581045a1251c7a599df502b7bd3c6611000063e6bb5c";
    }
    const { watchCount, watchedCount, averageRating } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "stat-icon amber",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiBookmark"], {}, void 0, false, {
                fileName: "[project]/src/components/library/StatsOverview.jsx",
                lineNumber: 18,
                columnNumber: 44
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/library/StatsOverview.jsx",
            lineNumber: 18,
            columnNumber: 10
        }, this);
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    const t2 = String(watchCount);
    let t3;
    if ($[2] !== t2) {
        t3 = t2.padStart(2, "0");
        $[2] = t2;
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    let t4;
    if ($[4] !== t3) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "stat-value",
            children: t3
        }, void 0, false, {
            fileName: "[project]/src/components/library/StatsOverview.jsx",
            lineNumber: 34,
            columnNumber: 10
        }, this);
        $[4] = t3;
        $[5] = t4;
    } else {
        t4 = $[5];
    }
    let t5;
    let t6;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "stat-label",
            children: "ON YOUR WATCHLIST"
        }, void 0, false, {
            fileName: "[project]/src/components/library/StatsOverview.jsx",
            lineNumber: 43,
            columnNumber: 10
        }, this);
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "stat-meta",
            children: "Your next movie night"
        }, void 0, false, {
            fileName: "[project]/src/components/library/StatsOverview.jsx",
            lineNumber: 44,
            columnNumber: 10
        }, this);
        $[6] = t5;
        $[7] = t6;
    } else {
        t5 = $[6];
        t6 = $[7];
    }
    let t7;
    if ($[8] !== t4) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "stat-card",
            children: [
                t1,
                t4,
                t5,
                t6
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/library/StatsOverview.jsx",
            lineNumber: 53,
            columnNumber: 10
        }, this);
        $[8] = t4;
        $[9] = t7;
    } else {
        t7 = $[9];
    }
    let t8;
    if ($[10] === Symbol.for("react.memo_cache_sentinel")) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "stat-icon sage",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiCheck"], {}, void 0, false, {
                fileName: "[project]/src/components/library/StatsOverview.jsx",
                lineNumber: 61,
                columnNumber: 43
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/library/StatsOverview.jsx",
            lineNumber: 61,
            columnNumber: 10
        }, this);
        $[10] = t8;
    } else {
        t8 = $[10];
    }
    const t9 = String(watchedCount);
    let t10;
    if ($[11] !== t9) {
        t10 = t9.padStart(2, "0");
        $[11] = t9;
        $[12] = t10;
    } else {
        t10 = $[12];
    }
    let t11;
    if ($[13] !== t10) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "stat-value",
            children: t10
        }, void 0, false, {
            fileName: "[project]/src/components/library/StatsOverview.jsx",
            lineNumber: 77,
            columnNumber: 11
        }, this);
        $[13] = t10;
        $[14] = t11;
    } else {
        t11 = $[14];
    }
    let t12;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "stat-label",
            children: "TITLES WATCHED"
        }, void 0, false, {
            fileName: "[project]/src/components/library/StatsOverview.jsx",
            lineNumber: 85,
            columnNumber: 11
        }, this);
        $[15] = t12;
    } else {
        t12 = $[15];
    }
    let t13;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "stat-meta",
            children: [
                "And counting ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "tiny-spark",
                    children: "✳"
                }, void 0, false, {
                    fileName: "[project]/src/components/library/StatsOverview.jsx",
                    lineNumber: 92,
                    columnNumber: 52
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/library/StatsOverview.jsx",
            lineNumber: 92,
            columnNumber: 11
        }, this);
        $[16] = t13;
    } else {
        t13 = $[16];
    }
    let t14;
    if ($[17] !== t11) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "stat-card",
            children: [
                t8,
                t11,
                t12,
                t13
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/library/StatsOverview.jsx",
            lineNumber: 99,
            columnNumber: 11
        }, this);
        $[17] = t11;
        $[18] = t14;
    } else {
        t14 = $[18];
    }
    let t15;
    if ($[19] === Symbol.for("react.memo_cache_sentinel")) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "stat-icon rose",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiStar"], {}, void 0, false, {
                fileName: "[project]/src/components/library/StatsOverview.jsx",
                lineNumber: 107,
                columnNumber: 44
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/library/StatsOverview.jsx",
            lineNumber: 107,
            columnNumber: 11
        }, this);
        $[19] = t15;
    } else {
        t15 = $[19];
    }
    let t16;
    if ($[20] !== averageRating) {
        t16 = averageRating.toFixed(1);
        $[20] = averageRating;
        $[21] = t16;
    } else {
        t16 = $[21];
    }
    let t17;
    if ($[22] === Symbol.for("react.memo_cache_sentinel")) {
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("small", {
            children: "/5"
        }, void 0, false, {
            fileName: "[project]/src/components/library/StatsOverview.jsx",
            lineNumber: 122,
            columnNumber: 11
        }, this);
        $[22] = t17;
    } else {
        t17 = $[22];
    }
    let t18;
    if ($[23] !== t16) {
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "stat-value",
            children: [
                t16,
                t17
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/library/StatsOverview.jsx",
            lineNumber: 129,
            columnNumber: 11
        }, this);
        $[23] = t16;
        $[24] = t18;
    } else {
        t18 = $[24];
    }
    let t19;
    let t20;
    if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "stat-label",
            children: "YOUR AVERAGE RATING"
        }, void 0, false, {
            fileName: "[project]/src/components/library/StatsOverview.jsx",
            lineNumber: 138,
            columnNumber: 11
        }, this);
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "stat-meta",
            children: "You have great taste."
        }, void 0, false, {
            fileName: "[project]/src/components/library/StatsOverview.jsx",
            lineNumber: 139,
            columnNumber: 11
        }, this);
        $[25] = t19;
        $[26] = t20;
    } else {
        t19 = $[25];
        t20 = $[26];
    }
    let t21;
    if ($[27] !== t18) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "stat-card",
            children: [
                t15,
                t18,
                t19,
                t20
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/library/StatsOverview.jsx",
            lineNumber: 148,
            columnNumber: 11
        }, this);
        $[27] = t18;
        $[28] = t21;
    } else {
        t21 = $[28];
    }
    let t22;
    if ($[29] === Symbol.for("react.memo_cache_sentinel")) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "stat-card stat-quote",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "quote-mark",
                    children: "“"
                }, void 0, false, {
                    fileName: "[project]/src/components/library/StatsOverview.jsx",
                    lineNumber: 156,
                    columnNumber: 49
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "quote-text",
                    children: "Movies touch our hearts and awaken our vision."
                }, void 0, false, {
                    fileName: "[project]/src/components/library/StatsOverview.jsx",
                    lineNumber: 156,
                    columnNumber: 86
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "quote-by",
                    children: "— MARTIN SCORSESE"
                }, void 0, false, {
                    fileName: "[project]/src/components/library/StatsOverview.jsx",
                    lineNumber: 156,
                    columnNumber: 168
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "quote-orbit",
                    children: "✳"
                }, void 0, false, {
                    fileName: "[project]/src/components/library/StatsOverview.jsx",
                    lineNumber: 156,
                    columnNumber: 219
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/library/StatsOverview.jsx",
            lineNumber: 156,
            columnNumber: 11
        }, this);
        $[29] = t22;
    } else {
        t22 = $[29];
    }
    let t23;
    if ($[30] !== t14 || $[31] !== t21 || $[32] !== t7) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "stats-row",
            children: [
                t7,
                t14,
                t21,
                t22
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/library/StatsOverview.jsx",
            lineNumber: 163,
            columnNumber: 11
        }, this);
        $[30] = t14;
        $[31] = t21;
        $[32] = t7;
        $[33] = t23;
    } else {
        t23 = $[33];
    }
    return t23;
}
_c = StatsOverview;
var _c;
__turbopack_context__.k.register(_c, "StatsOverview");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/library/TitleCard.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "EmptyCollection",
    ()=>EmptyCollection,
    "default",
    ()=>TitleCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fi/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$movie$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/movie-utils.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$library$2f$IconButton$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/library/IconButton.jsx [app-client] (ecmascript)");
;
;
;
;
;
function TitleCard(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(75);
    if ($[0] !== "e1a2e64e833842f7b7976c1c62a4f08de2414c8425b10e8f2408b577689509fd") {
        for(let $i = 0; $i < 75; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e1a2e64e833842f7b7976c1c62a4f08de2414c8425b10e8f2408b577689509fd";
    }
    const { item, index, onEdit, onRemove, onToggleWatched } = t0;
    const isWatchlist = item.state === "watchlist";
    const t1 = `${index * 55}ms`;
    let t2;
    if ($[1] !== t1) {
        t2 = {
            "--card-delay": t1
        };
        $[1] = t1;
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    let t3;
    if ($[3] !== item.image) {
        t3 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$movie$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPosterUrl"])(item.image);
        $[3] = item.image;
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    const t4 = `linear-gradient(180deg, rgba(18,17,16,.05) 22%, rgba(18,17,16,.82) 100%), url('${t3}')`;
    let t5;
    if ($[5] !== item.tint || $[6] !== t4) {
        t5 = {
            backgroundImage: t4,
            "--poster-tint": item.tint
        };
        $[5] = item.tint;
        $[6] = t4;
        $[7] = t5;
    } else {
        t5 = $[7];
    }
    let t6;
    if ($[8] !== item.label) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "poster-label",
            children: item.label
        }, void 0, false, {
            fileName: "[project]/src/components/library/TitleCard.jsx",
            lineNumber: 55,
            columnNumber: 10
        }, this);
        $[8] = item.label;
        $[9] = t6;
    } else {
        t6 = $[9];
    }
    const t7 = `poster-rating ${isWatchlist ? "unrated" : ""}`;
    let t8;
    if ($[10] !== isWatchlist || $[11] !== item.rating) {
        t8 = isWatchlist ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiHeart"], {}, void 0, false, {
                    fileName: "[project]/src/components/library/TitleCard.jsx",
                    lineNumber: 64,
                    columnNumber: 26
                }, this),
                " SAVED"
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/library/TitleCard.jsx",
            lineNumber: 64,
            columnNumber: 24
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiStar"], {}, void 0, false, {
                    fileName: "[project]/src/components/library/TitleCard.jsx",
                    lineNumber: 64,
                    columnNumber: 51
                }, this),
                " ",
                item.rating.toFixed(1)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/library/TitleCard.jsx",
            lineNumber: 64,
            columnNumber: 49
        }, this);
        $[10] = isWatchlist;
        $[11] = item.rating;
        $[12] = t8;
    } else {
        t8 = $[12];
    }
    let t9;
    if ($[13] !== t7 || $[14] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: t7,
            children: t8
        }, void 0, false, {
            fileName: "[project]/src/components/library/TitleCard.jsx",
            lineNumber: 73,
            columnNumber: 10
        }, this);
        $[13] = t7;
        $[14] = t8;
        $[15] = t9;
    } else {
        t9 = $[15];
    }
    let t10;
    if ($[16] !== item.kind) {
        t10 = item.kind.toUpperCase();
        $[16] = item.kind;
        $[17] = t10;
    } else {
        t10 = $[17];
    }
    let t11;
    if ($[18] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: "·"
        }, void 0, false, {
            fileName: "[project]/src/components/library/TitleCard.jsx",
            lineNumber: 90,
            columnNumber: 11
        }, this);
        $[18] = t11;
    } else {
        t11 = $[18];
    }
    let t12;
    if ($[19] !== item.year || $[20] !== t10) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "poster-meta",
            children: [
                t10,
                " ",
                t11,
                " ",
                item.year
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/library/TitleCard.jsx",
            lineNumber: 97,
            columnNumber: 11
        }, this);
        $[19] = item.year;
        $[20] = t10;
        $[21] = t12;
    } else {
        t12 = $[21];
    }
    let t13;
    if ($[22] !== item.title) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            children: item.title
        }, void 0, false, {
            fileName: "[project]/src/components/library/TitleCard.jsx",
            lineNumber: 106,
            columnNumber: 11
        }, this);
        $[22] = item.title;
        $[23] = t13;
    } else {
        t13 = $[23];
    }
    let t14;
    if ($[24] !== item.genres) {
        t14 = item.genres.map(_TitleCardItemGenresMap);
        $[24] = item.genres;
        $[25] = t14;
    } else {
        t14 = $[25];
    }
    let t15;
    if ($[26] !== t14) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "poster-tags",
            children: t14
        }, void 0, false, {
            fileName: "[project]/src/components/library/TitleCard.jsx",
            lineNumber: 122,
            columnNumber: 11
        }, this);
        $[26] = t14;
        $[27] = t15;
    } else {
        t15 = $[27];
    }
    let t16;
    if ($[28] !== t12 || $[29] !== t13 || $[30] !== t15) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "poster-bottom",
            children: [
                t12,
                t13,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/library/TitleCard.jsx",
            lineNumber: 130,
            columnNumber: 11
        }, this);
        $[28] = t12;
        $[29] = t13;
        $[30] = t15;
        $[31] = t16;
    } else {
        t16 = $[31];
    }
    const t17 = isWatchlist ? "Move to watched" : "Move to watchlist";
    let t18;
    if ($[32] !== item || $[33] !== onToggleWatched) {
        t18 = ({
            "TitleCard[<IconButton>.onClick]": ()=>onToggleWatched(item)
        })["TitleCard[<IconButton>.onClick]"];
        $[32] = item;
        $[33] = onToggleWatched;
        $[34] = t18;
    } else {
        t18 = $[34];
    }
    let t19;
    if ($[35] !== isWatchlist) {
        t19 = isWatchlist ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiCheck"], {}, void 0, false, {
            fileName: "[project]/src/components/library/TitleCard.jsx",
            lineNumber: 152,
            columnNumber: 25
        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiBookmark"], {}, void 0, false, {
            fileName: "[project]/src/components/library/TitleCard.jsx",
            lineNumber: 152,
            columnNumber: 39
        }, this);
        $[35] = isWatchlist;
        $[36] = t19;
    } else {
        t19 = $[36];
    }
    let t20;
    if ($[37] !== t17 || $[38] !== t18 || $[39] !== t19) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$library$2f$IconButton$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            label: t17,
            onClick: t18,
            children: t19
        }, void 0, false, {
            fileName: "[project]/src/components/library/TitleCard.jsx",
            lineNumber: 160,
            columnNumber: 11
        }, this);
        $[37] = t17;
        $[38] = t18;
        $[39] = t19;
        $[40] = t20;
    } else {
        t20 = $[40];
    }
    let t21;
    if ($[41] !== item || $[42] !== onEdit) {
        t21 = ({
            "TitleCard[<IconButton>.onClick]": ()=>onEdit(item)
        })["TitleCard[<IconButton>.onClick]"];
        $[41] = item;
        $[42] = onEdit;
        $[43] = t21;
    } else {
        t21 = $[43];
    }
    let t22;
    if ($[44] === Symbol.for("react.memo_cache_sentinel")) {
        t22 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiSliders"], {}, void 0, false, {
            fileName: "[project]/src/components/library/TitleCard.jsx",
            lineNumber: 181,
            columnNumber: 11
        }, this);
        $[44] = t22;
    } else {
        t22 = $[44];
    }
    let t23;
    if ($[45] !== t21) {
        t23 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$library$2f$IconButton$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            label: "Edit title",
            onClick: t21,
            children: t22
        }, void 0, false, {
            fileName: "[project]/src/components/library/TitleCard.jsx",
            lineNumber: 188,
            columnNumber: 11
        }, this);
        $[45] = t21;
        $[46] = t23;
    } else {
        t23 = $[46];
    }
    let t24;
    if ($[47] !== item || $[48] !== onRemove) {
        t24 = ({
            "TitleCard[<IconButton>.onClick]": ()=>onRemove(item)
        })["TitleCard[<IconButton>.onClick]"];
        $[47] = item;
        $[48] = onRemove;
        $[49] = t24;
    } else {
        t24 = $[49];
    }
    let t25;
    if ($[50] === Symbol.for("react.memo_cache_sentinel")) {
        t25 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiX"], {}, void 0, false, {
            fileName: "[project]/src/components/library/TitleCard.jsx",
            lineNumber: 207,
            columnNumber: 11
        }, this);
        $[50] = t25;
    } else {
        t25 = $[50];
    }
    let t26;
    if ($[51] !== t24) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$library$2f$IconButton$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            label: "Remove title",
            onClick: t24,
            children: t25
        }, void 0, false, {
            fileName: "[project]/src/components/library/TitleCard.jsx",
            lineNumber: 214,
            columnNumber: 11
        }, this);
        $[51] = t24;
        $[52] = t26;
    } else {
        t26 = $[52];
    }
    let t27;
    if ($[53] !== t20 || $[54] !== t23 || $[55] !== t26) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "card-actions",
            children: [
                t20,
                t23,
                t26
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/library/TitleCard.jsx",
            lineNumber: 222,
            columnNumber: 11
        }, this);
        $[53] = t20;
        $[54] = t23;
        $[55] = t26;
        $[56] = t27;
    } else {
        t27 = $[56];
    }
    let t28;
    if ($[57] !== t16 || $[58] !== t27 || $[59] !== t5 || $[60] !== t6 || $[61] !== t9) {
        t28 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "poster",
            style: t5,
            children: [
                t6,
                t9,
                t16,
                t27
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/library/TitleCard.jsx",
            lineNumber: 232,
            columnNumber: 11
        }, this);
        $[57] = t16;
        $[58] = t27;
        $[59] = t5;
        $[60] = t6;
        $[61] = t9;
        $[62] = t28;
    } else {
        t28 = $[62];
    }
    let t29;
    if ($[63] === Symbol.for("react.memo_cache_sentinel")) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiClock"], {
            size: 13
        }, void 0, false, {
            fileName: "[project]/src/components/library/TitleCard.jsx",
            lineNumber: 244,
            columnNumber: 11
        }, this);
        $[63] = t29;
    } else {
        t29 = $[63];
    }
    let t30;
    if ($[64] !== item.length) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: [
                t29,
                " ",
                item.length
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/library/TitleCard.jsx",
            lineNumber: 251,
            columnNumber: 11
        }, this);
        $[64] = item.length;
        $[65] = t30;
    } else {
        t30 = $[65];
    }
    let t31;
    if ($[66] !== item.progress) {
        t31 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: item.progress
        }, void 0, false, {
            fileName: "[project]/src/components/library/TitleCard.jsx",
            lineNumber: 259,
            columnNumber: 11
        }, this);
        $[66] = item.progress;
        $[67] = t31;
    } else {
        t31 = $[67];
    }
    let t32;
    if ($[68] !== t30 || $[69] !== t31) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "card-footer",
            children: [
                t30,
                t31
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/library/TitleCard.jsx",
            lineNumber: 267,
            columnNumber: 11
        }, this);
        $[68] = t30;
        $[69] = t31;
        $[70] = t32;
    } else {
        t32 = $[70];
    }
    let t33;
    if ($[71] !== t2 || $[72] !== t28 || $[73] !== t32) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
            className: "movie-card",
            style: t2,
            children: [
                t28,
                t32
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/library/TitleCard.jsx",
            lineNumber: 276,
            columnNumber: 11
        }, this);
        $[71] = t2;
        $[72] = t28;
        $[73] = t32;
        $[74] = t33;
    } else {
        t33 = $[74];
    }
    return t33;
}
_c = TitleCard;
function _TitleCardItemGenresMap(genre) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
        children: genre
    }, genre, false, {
        fileName: "[project]/src/components/library/TitleCard.jsx",
        lineNumber: 287,
        columnNumber: 10
    }, this);
}
function EmptyCollection(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(7);
    if ($[0] !== "e1a2e64e833842f7b7976c1c62a4f08de2414c8425b10e8f2408b577689509fd") {
        for(let $i = 0; $i < 7; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "e1a2e64e833842f7b7976c1c62a4f08de2414c8425b10e8f2408b577689509fd";
    }
    const { onAddTitle } = t0;
    let t1;
    let t2;
    let t3;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "empty-icon",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiFilm"], {}, void 0, false, {
                fileName: "[project]/src/components/library/TitleCard.jsx",
                lineNumber: 304,
                columnNumber: 38
            }, this)
        }, void 0, false, {
            fileName: "[project]/src/components/library/TitleCard.jsx",
            lineNumber: 304,
            columnNumber: 10
        }, this);
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
            children: "Nothing on this reel yet"
        }, void 0, false, {
            fileName: "[project]/src/components/library/TitleCard.jsx",
            lineNumber: 305,
            columnNumber: 10
        }, this);
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: "Try a different search or genre, or add a title you love."
        }, void 0, false, {
            fileName: "[project]/src/components/library/TitleCard.jsx",
            lineNumber: 306,
            columnNumber: 10
        }, this);
        $[1] = t1;
        $[2] = t2;
        $[3] = t3;
    } else {
        t1 = $[1];
        t2 = $[2];
        t3 = $[3];
    }
    let t4;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: "＋"
        }, void 0, false, {
            fileName: "[project]/src/components/library/TitleCard.jsx",
            lineNumber: 317,
            columnNumber: 10
        }, this);
        $[4] = t4;
    } else {
        t4 = $[4];
    }
    let t5;
    if ($[5] !== onAddTitle) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "empty-state",
            children: [
                t1,
                t2,
                t3,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "add-title-button",
                    onClick: onAddTitle,
                    children: [
                        t4,
                        " Add a title"
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/library/TitleCard.jsx",
                    lineNumber: 324,
                    columnNumber: 51
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/library/TitleCard.jsx",
            lineNumber: 324,
            columnNumber: 10
        }, this);
        $[5] = onAddTitle;
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    return t5;
}
_c1 = EmptyCollection;
var _c, _c1;
__turbopack_context__.k.register(_c, "TitleCard");
__turbopack_context__.k.register(_c1, "EmptyCollection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/library/TitleEditor.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TitleEditor
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fi/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$demoTitles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/data/demoTitles.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$movie$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/movie-utils.js [app-client] (ecmascript)");
;
;
;
;
;
function TitleEditor(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(69);
    if ($[0] !== "ccef40688c38f29763291eac7de0d8d9abea1d57304ecd3edae48a9a69e7a24a") {
        for(let $i = 0; $i < 69; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "ccef40688c38f29763291eac7de0d8d9abea1d57304ecd3edae48a9a69e7a24a";
    }
    const { title, groups, selectedGroup, onClose, onSave } = t0;
    let t1;
    if ($[1] !== groups) {
        t1 = new Set([
            ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$demoTitles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["defaultGroups"],
            ...groups
        ]);
        $[1] = groups;
        $[2] = t1;
    } else {
        t1 = $[2];
    }
    let t2;
    if ($[3] !== t1) {
        t2 = [
            ...t1
        ];
        $[3] = t1;
        $[4] = t2;
    } else {
        t2 = $[4];
    }
    const collectionOptions = t2;
    let t3;
    if ($[5] !== onSave) {
        t3 = function handleSubmit(event) {
            event.preventDefault();
            onSave(new FormData(event.currentTarget));
        };
        $[5] = onSave;
        $[6] = t3;
    } else {
        t3 = $[6];
    }
    const handleSubmit = t3;
    let t4;
    if ($[7] !== onClose) {
        t4 = ({
            "TitleEditor[<div>.onMouseDown]": (event_0)=>event_0.target === event_0.currentTarget && onClose()
        })["TitleEditor[<div>.onMouseDown]"];
        $[7] = onClose;
        $[8] = t4;
    } else {
        t4 = $[8];
    }
    let t5;
    if ($[9] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiX"], {}, void 0, false, {
            fileName: "[project]/src/components/library/TitleEditor.jsx",
            lineNumber: 61,
            columnNumber: 10
        }, this);
        $[9] = t5;
    } else {
        t5 = $[9];
    }
    let t6;
    if ($[10] !== onClose) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            type: "button",
            className: "modal-close",
            onClick: onClose,
            "aria-label": "Close",
            children: t5
        }, void 0, false, {
            fileName: "[project]/src/components/library/TitleEditor.jsx",
            lineNumber: 68,
            columnNumber: 10
        }, this);
        $[10] = onClose;
        $[11] = t6;
    } else {
        t6 = $[11];
    }
    let t7;
    if ($[12] === Symbol.for("react.memo_cache_sentinel")) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "modal-kicker",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiFilm"], {}, void 0, false, {
                    fileName: "[project]/src/components/library/TitleEditor.jsx",
                    lineNumber: 76,
                    columnNumber: 40
                }, this),
                " YOUR PERSONAL COLLECTION"
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/library/TitleEditor.jsx",
            lineNumber: 76,
            columnNumber: 10
        }, this);
        $[12] = t7;
    } else {
        t7 = $[12];
    }
    const t8 = title ? "Edit this title" : "Add to your collection";
    let t9;
    if ($[13] !== t8) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
            children: t8
        }, void 0, false, {
            fileName: "[project]/src/components/library/TitleEditor.jsx",
            lineNumber: 84,
            columnNumber: 10
        }, this);
        $[13] = t8;
        $[14] = t9;
    } else {
        t9 = $[14];
    }
    let t10;
    if ($[15] === Symbol.for("react.memo_cache_sentinel")) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            className: "modal-copy",
            children: "Keep a little note of the stories you love."
        }, void 0, false, {
            fileName: "[project]/src/components/library/TitleEditor.jsx",
            lineNumber: 92,
            columnNumber: 11
        }, this);
        $[15] = t10;
    } else {
        t10 = $[15];
    }
    const t11 = title?.title || "";
    let t12;
    if ($[16] !== t11) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "field-label",
            children: [
                "TITLE",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    required: true,
                    name: "title",
                    placeholder: "What are we watching?",
                    defaultValue: t11
                }, void 0, false, {
                    fileName: "[project]/src/components/library/TitleEditor.jsx",
                    lineNumber: 100,
                    columnNumber: 47
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/library/TitleEditor.jsx",
            lineNumber: 100,
            columnNumber: 11
        }, this);
        $[16] = t11;
        $[17] = t12;
    } else {
        t12 = $[17];
    }
    const t13 = title?.year || "";
    let t14;
    if ($[18] !== t13) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "field-label",
            children: [
                "YEAR",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    name: "year",
                    type: "number",
                    placeholder: "2024",
                    defaultValue: t13
                }, void 0, false, {
                    fileName: "[project]/src/components/library/TitleEditor.jsx",
                    lineNumber: 109,
                    columnNumber: 46
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/library/TitleEditor.jsx",
            lineNumber: 109,
            columnNumber: 11
        }, this);
        $[18] = t13;
        $[19] = t14;
    } else {
        t14 = $[19];
    }
    const t15 = title?.kind || "Movie";
    let t16;
    let t17;
    let t18;
    let t19;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            children: "Movie"
        }, void 0, false, {
            fileName: "[project]/src/components/library/TitleEditor.jsx",
            lineNumber: 121,
            columnNumber: 11
        }, this);
        t17 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            children: "Series"
        }, void 0, false, {
            fileName: "[project]/src/components/library/TitleEditor.jsx",
            lineNumber: 122,
            columnNumber: 11
        }, this);
        t18 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            children: "Anime"
        }, void 0, false, {
            fileName: "[project]/src/components/library/TitleEditor.jsx",
            lineNumber: 123,
            columnNumber: 11
        }, this);
        t19 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
            children: "Documentary"
        }, void 0, false, {
            fileName: "[project]/src/components/library/TitleEditor.jsx",
            lineNumber: 124,
            columnNumber: 11
        }, this);
        $[20] = t16;
        $[21] = t17;
        $[22] = t18;
        $[23] = t19;
    } else {
        t16 = $[20];
        t17 = $[21];
        t18 = $[22];
        t19 = $[23];
    }
    let t20;
    if ($[24] !== t15) {
        t20 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "field-label",
            children: [
                "FORMAT",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                    name: "kind",
                    defaultValue: t15,
                    children: [
                        t16,
                        t17,
                        t18,
                        t19
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/library/TitleEditor.jsx",
                    lineNumber: 137,
                    columnNumber: 48
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/library/TitleEditor.jsx",
            lineNumber: 137,
            columnNumber: 11
        }, this);
        $[24] = t15;
        $[25] = t20;
    } else {
        t20 = $[25];
    }
    let t21;
    if ($[26] !== t14 || $[27] !== t20) {
        t21 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "field-pair",
            children: [
                t14,
                t20
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/library/TitleEditor.jsx",
            lineNumber: 145,
            columnNumber: 11
        }, this);
        $[26] = t14;
        $[27] = t20;
        $[28] = t21;
    } else {
        t21 = $[28];
    }
    const t22 = title?.group || (selectedGroup === "All titles" ? "Movies" : selectedGroup);
    let t23;
    if ($[29] !== collectionOptions) {
        t23 = collectionOptions.map(_TitleEditorCollectionOptionsMap);
        $[29] = collectionOptions;
        $[30] = t23;
    } else {
        t23 = $[30];
    }
    let t24;
    if ($[31] !== t22 || $[32] !== t23) {
        t24 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "field-label",
            children: [
                "COLLECTION",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                    name: "group",
                    defaultValue: t22,
                    children: t23
                }, void 0, false, {
                    fileName: "[project]/src/components/library/TitleEditor.jsx",
                    lineNumber: 163,
                    columnNumber: 52
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/library/TitleEditor.jsx",
            lineNumber: 163,
            columnNumber: 11
        }, this);
        $[31] = t22;
        $[32] = t23;
        $[33] = t24;
    } else {
        t24 = $[33];
    }
    const t25 = title?.rating || "";
    let t26;
    if ($[34] !== t25) {
        t26 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "field-label",
            children: [
                "YOUR RATING",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    name: "rating",
                    type: "number",
                    min: "0",
                    max: "5",
                    step: "0.1",
                    placeholder: "4.5",
                    defaultValue: t25
                }, void 0, false, {
                    fileName: "[project]/src/components/library/TitleEditor.jsx",
                    lineNumber: 173,
                    columnNumber: 53
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/library/TitleEditor.jsx",
            lineNumber: 173,
            columnNumber: 11
        }, this);
        $[34] = t25;
        $[35] = t26;
    } else {
        t26 = $[35];
    }
    let t27;
    if ($[36] !== t24 || $[37] !== t26) {
        t27 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "field-pair",
            children: [
                t24,
                t26
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/library/TitleEditor.jsx",
            lineNumber: 181,
            columnNumber: 11
        }, this);
        $[36] = t24;
        $[37] = t26;
        $[38] = t27;
    } else {
        t27 = $[38];
    }
    let t28;
    if ($[39] !== title) {
        t28 = title ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$movie$2d$utils$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getPosterUrl"])(title.image) : "";
        $[39] = title;
        $[40] = t28;
    } else {
        t28 = $[40];
    }
    let t29;
    if ($[41] !== t28) {
        t29 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "field-label",
            children: [
                "POSTER IMAGE URL",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                    name: "image",
                    placeholder: "Paste an image link (optional)",
                    defaultValue: t28
                }, void 0, false, {
                    fileName: "[project]/src/components/library/TitleEditor.jsx",
                    lineNumber: 198,
                    columnNumber: 58
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/library/TitleEditor.jsx",
            lineNumber: 198,
            columnNumber: 11
        }, this);
        $[41] = t28;
        $[42] = t29;
    } else {
        t29 = $[42];
    }
    let t30;
    if ($[43] === Symbol.for("react.memo_cache_sentinel")) {
        t30 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("legend", {
            className: "field-label",
            children: [
                "GENRES ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    children: "CHOOSE ALL THAT FIT"
                }, void 0, false, {
                    fileName: "[project]/src/components/library/TitleEditor.jsx",
                    lineNumber: 206,
                    columnNumber: 50
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/library/TitleEditor.jsx",
            lineNumber: 206,
            columnNumber: 11
        }, this);
        $[43] = t30;
    } else {
        t30 = $[43];
    }
    let t31;
    if ($[44] !== title?.genres) {
        t31 = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$data$2f$demoTitles$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["genres"].slice(1).map({
            "TitleEditor[(anonymous)()]": (item_0)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "checkbox",
                            name: "genres",
                            value: item_0,
                            defaultChecked: title?.genres.includes(item_0)
                        }, void 0, false, {
                            fileName: "[project]/src/components/library/TitleEditor.jsx",
                            lineNumber: 214,
                            columnNumber: 67
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                            children: item_0
                        }, void 0, false, {
                            fileName: "[project]/src/components/library/TitleEditor.jsx",
                            lineNumber: 214,
                            columnNumber: 169
                        }, this)
                    ]
                }, item_0, true, {
                    fileName: "[project]/src/components/library/TitleEditor.jsx",
                    lineNumber: 214,
                    columnNumber: 47
                }, this)
        }["TitleEditor[(anonymous)()]"]);
        $[44] = title?.genres;
        $[45] = t31;
    } else {
        t31 = $[45];
    }
    let t32;
    if ($[46] !== t31) {
        t32 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("fieldset", {
            className: "genre-field",
            children: [
                t30,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "genre-options",
                    children: t31
                }, void 0, false, {
                    fileName: "[project]/src/components/library/TitleEditor.jsx",
                    lineNumber: 223,
                    columnNumber: 50
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/library/TitleEditor.jsx",
            lineNumber: 223,
            columnNumber: 11
        }, this);
        $[46] = t31;
        $[47] = t32;
    } else {
        t32 = $[47];
    }
    let t33;
    if ($[48] !== onClose) {
        t33 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "cancel-button",
            type: "button",
            onClick: onClose,
            children: "Cancel"
        }, void 0, false, {
            fileName: "[project]/src/components/library/TitleEditor.jsx",
            lineNumber: 231,
            columnNumber: 11
        }, this);
        $[48] = onClose;
        $[49] = t33;
    } else {
        t33 = $[49];
    }
    let t34;
    if ($[50] === Symbol.for("react.memo_cache_sentinel")) {
        t34 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiPlus"], {}, void 0, false, {
            fileName: "[project]/src/components/library/TitleEditor.jsx",
            lineNumber: 239,
            columnNumber: 11
        }, this);
        $[50] = t34;
    } else {
        t34 = $[50];
    }
    const t35 = title ? "Save changes" : "Add title";
    let t36;
    if ($[51] !== t35) {
        t36 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "add-title-button",
            type: "submit",
            children: [
                t34,
                " ",
                t35
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/library/TitleEditor.jsx",
            lineNumber: 247,
            columnNumber: 11
        }, this);
        $[51] = t35;
        $[52] = t36;
    } else {
        t36 = $[52];
    }
    let t37;
    if ($[53] !== t33 || $[54] !== t36) {
        t37 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "modal-actions",
            children: [
                t33,
                t36
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/library/TitleEditor.jsx",
            lineNumber: 255,
            columnNumber: 11
        }, this);
        $[53] = t33;
        $[54] = t36;
        $[55] = t37;
    } else {
        t37 = $[55];
    }
    let t38;
    if ($[56] !== handleSubmit || $[57] !== t12 || $[58] !== t21 || $[59] !== t27 || $[60] !== t29 || $[61] !== t32 || $[62] !== t37 || $[63] !== t6 || $[64] !== t9) {
        t38 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
            className: "modal-card",
            onSubmit: handleSubmit,
            children: [
                t6,
                t7,
                t9,
                t10,
                t12,
                t21,
                t27,
                t29,
                t32,
                t37
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/library/TitleEditor.jsx",
            lineNumber: 264,
            columnNumber: 11
        }, this);
        $[56] = handleSubmit;
        $[57] = t12;
        $[58] = t21;
        $[59] = t27;
        $[60] = t29;
        $[61] = t32;
        $[62] = t37;
        $[63] = t6;
        $[64] = t9;
        $[65] = t38;
    } else {
        t38 = $[65];
    }
    let t39;
    if ($[66] !== t38 || $[67] !== t4) {
        t39 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "modal-backdrop",
            onMouseDown: t4,
            children: t38
        }, void 0, false, {
            fileName: "[project]/src/components/library/TitleEditor.jsx",
            lineNumber: 280,
            columnNumber: 11
        }, this);
        $[66] = t38;
        $[67] = t4;
        $[68] = t39;
    } else {
        t39 = $[68];
    }
    return t39;
}
_c = TitleEditor;
function _TitleEditorCollectionOptionsMap(item) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
        children: item
    }, item, false, {
        fileName: "[project]/src/components/library/TitleEditor.jsx",
        lineNumber: 290,
        columnNumber: 10
    }, this);
}
var _c;
__turbopack_context__.k.register(_c, "TitleEditor");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/library/Topbar.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Topbar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fi/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$library$2f$IconButton$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/library/IconButton.jsx [app-client] (ecmascript)");
;
;
;
;
function Topbar(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(28);
    if ($[0] !== "4af10464c800741f945e6cd1f5fdaff38f57637a2e3e5716983c3817a19855aa") {
        for(let $i = 0; $i < 28; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "4af10464c800741f945e6cd1f5fdaff38f57637a2e3e5716983c3817a19855aa";
    }
    const { section, query, onQueryChange, onMenuOpen, onSettingsOpen } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiGrid"], {}, void 0, false, {
            fileName: "[project]/src/components/library/Topbar.jsx",
            lineNumber: 21,
            columnNumber: 10
        }, this);
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    let t2;
    if ($[2] !== onMenuOpen) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
            className: "mobile-menu",
            onClick: onMenuOpen,
            "aria-label": "Open menu",
            children: t1
        }, void 0, false, {
            fileName: "[project]/src/components/library/Topbar.jsx",
            lineNumber: 28,
            columnNumber: 10
        }, this);
        $[2] = onMenuOpen;
        $[3] = t2;
    } else {
        t2 = $[3];
    }
    let t3;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            children: "/"
        }, void 0, false, {
            fileName: "[project]/src/components/library/Topbar.jsx",
            lineNumber: 36,
            columnNumber: 10
        }, this);
        $[4] = t3;
    } else {
        t3 = $[4];
    }
    const t4 = section === "watchlist" ? "WATCHLIST" : "WATCHED";
    let t5;
    if ($[5] !== t4) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "breadcrumb",
            children: [
                "LIBRARY ",
                t3,
                " ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("b", {
                    children: t4
                }, void 0, false, {
                    fileName: "[project]/src/components/library/Topbar.jsx",
                    lineNumber: 44,
                    columnNumber: 51
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/library/Topbar.jsx",
            lineNumber: 44,
            columnNumber: 10
        }, this);
        $[5] = t4;
        $[6] = t5;
    } else {
        t5 = $[6];
    }
    let t6;
    if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiSearch"], {
            size: 16
        }, void 0, false, {
            fileName: "[project]/src/components/library/Topbar.jsx",
            lineNumber: 52,
            columnNumber: 10
        }, this);
        $[7] = t6;
    } else {
        t6 = $[7];
    }
    let t7;
    if ($[8] !== onQueryChange) {
        t7 = ({
            "Topbar[<input>.onChange]": (event)=>onQueryChange(event.target.value)
        })["Topbar[<input>.onChange]"];
        $[8] = onQueryChange;
        $[9] = t7;
    } else {
        t7 = $[9];
    }
    let t8;
    if ($[10] !== query || $[11] !== t7) {
        t8 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
            placeholder: "Find a title...",
            value: query,
            onChange: t7
        }, void 0, false, {
            fileName: "[project]/src/components/library/Topbar.jsx",
            lineNumber: 69,
            columnNumber: 10
        }, this);
        $[10] = query;
        $[11] = t7;
        $[12] = t8;
    } else {
        t8 = $[12];
    }
    let t9;
    if ($[13] === Symbol.for("react.memo_cache_sentinel")) {
        t9 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("kbd", {
            children: "⌘ K"
        }, void 0, false, {
            fileName: "[project]/src/components/library/Topbar.jsx",
            lineNumber: 78,
            columnNumber: 10
        }, this);
        $[13] = t9;
    } else {
        t9 = $[13];
    }
    let t10;
    if ($[14] !== t8) {
        t10 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
            className: "searchbox",
            children: [
                t6,
                t8,
                t9
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/library/Topbar.jsx",
            lineNumber: 85,
            columnNumber: 11
        }, this);
        $[14] = t8;
        $[15] = t10;
    } else {
        t10 = $[15];
    }
    let t11;
    if ($[16] === Symbol.for("react.memo_cache_sentinel")) {
        t11 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "top-divider"
        }, void 0, false, {
            fileName: "[project]/src/components/library/Topbar.jsx",
            lineNumber: 93,
            columnNumber: 11
        }, this);
        $[16] = t11;
    } else {
        t11 = $[16];
    }
    let t12;
    if ($[17] === Symbol.for("react.memo_cache_sentinel")) {
        t12 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiSettings"], {}, void 0, false, {
            fileName: "[project]/src/components/library/Topbar.jsx",
            lineNumber: 100,
            columnNumber: 11
        }, this);
        $[17] = t12;
    } else {
        t12 = $[17];
    }
    let t13;
    if ($[18] !== onSettingsOpen) {
        t13 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$library$2f$IconButton$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
            label: "Settings",
            onClick: onSettingsOpen,
            children: t12
        }, void 0, false, {
            fileName: "[project]/src/components/library/Topbar.jsx",
            lineNumber: 107,
            columnNumber: 11
        }, this);
        $[18] = onSettingsOpen;
        $[19] = t13;
    } else {
        t13 = $[19];
    }
    let t14;
    if ($[20] === Symbol.for("react.memo_cache_sentinel")) {
        t14 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "tiny-avatar",
            children: "T"
        }, void 0, false, {
            fileName: "[project]/src/components/library/Topbar.jsx",
            lineNumber: 115,
            columnNumber: 11
        }, this);
        $[20] = t14;
    } else {
        t14 = $[20];
    }
    let t15;
    if ($[21] !== t10 || $[22] !== t13) {
        t15 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "top-actions",
            children: [
                t10,
                t11,
                t13,
                t14
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/library/Topbar.jsx",
            lineNumber: 122,
            columnNumber: 11
        }, this);
        $[21] = t10;
        $[22] = t13;
        $[23] = t15;
    } else {
        t15 = $[23];
    }
    let t16;
    if ($[24] !== t15 || $[25] !== t2 || $[26] !== t5) {
        t16 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
            className: "topbar",
            children: [
                t2,
                t5,
                t15
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/library/Topbar.jsx",
            lineNumber: 131,
            columnNumber: 11
        }, this);
        $[24] = t15;
        $[25] = t2;
        $[26] = t5;
        $[27] = t16;
    } else {
        t16 = $[27];
    }
    return t16;
}
_c = Topbar;
var _c;
__turbopack_context__.k.register(_c, "Topbar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/library/WelcomeHeader.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>WelcomeHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/compiler-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fi/index.mjs [app-client] (ecmascript)");
;
;
;
function WelcomeHeader(t0) {
    const $ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$compiler$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["c"])(9);
    if ($[0] !== "92abd5bf372f787f9bcface34f56e59d1af3e91068ee7e4027f9a6236c290e21") {
        for(let $i = 0; $i < 9; $i += 1){
            $[$i] = Symbol.for("react.memo_cache_sentinel");
        }
        $[0] = "92abd5bf372f787f9bcface34f56e59d1af3e91068ee7e4027f9a6236c290e21";
    }
    const { onAddTitle } = t0;
    let t1;
    if ($[1] === Symbol.for("react.memo_cache_sentinel")) {
        t1 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "eyebrow-line"
        }, void 0, false, {
            fileName: "[project]/src/components/library/WelcomeHeader.jsx",
            lineNumber: 16,
            columnNumber: 10
        }, this);
        $[1] = t1;
    } else {
        t1 = $[1];
    }
    let t2;
    if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
        t2 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "eyebrow",
            children: [
                t1,
                " MONDAY, OCTOBER 26 ",
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                    className: "eyebrow-dot",
                    children: "·"
                }, void 0, false, {
                    fileName: "[project]/src/components/library/WelcomeHeader.jsx",
                    lineNumber: 23,
                    columnNumber: 59
                }, this),
                " A GOOD DAY FOR A MOVIE"
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/library/WelcomeHeader.jsx",
            lineNumber: 23,
            columnNumber: 10
        }, this);
        $[2] = t2;
    } else {
        t2 = $[2];
    }
    let t3;
    if ($[3] === Symbol.for("react.memo_cache_sentinel")) {
        t3 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {
            className: "mobile-break"
        }, void 0, false, {
            fileName: "[project]/src/components/library/WelcomeHeader.jsx",
            lineNumber: 30,
            columnNumber: 10
        }, this);
        $[3] = t3;
    } else {
        t3 = $[3];
    }
    let t4;
    if ($[4] === Symbol.for("react.memo_cache_sentinel")) {
        t4 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            children: [
                t2,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                    children: [
                        "Your next great",
                        t3,
                        " ",
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                            children: "watch"
                        }, void 0, false, {
                            fileName: "[project]/src/components/library/WelcomeHeader.jsx",
                            lineNumber: 37,
                            columnNumber: 43
                        }, this),
                        " is waiting."
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/library/WelcomeHeader.jsx",
                    lineNumber: 37,
                    columnNumber: 19
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "welcome-copy",
                    children: "A little corner of the internet for everything you love to watch."
                }, void 0, false, {
                    fileName: "[project]/src/components/library/WelcomeHeader.jsx",
                    lineNumber: 37,
                    columnNumber: 74
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/library/WelcomeHeader.jsx",
            lineNumber: 37,
            columnNumber: 10
        }, this);
        $[4] = t4;
    } else {
        t4 = $[4];
    }
    let t5;
    if ($[5] === Symbol.for("react.memo_cache_sentinel")) {
        t5 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FiPlus"], {}, void 0, false, {
            fileName: "[project]/src/components/library/WelcomeHeader.jsx",
            lineNumber: 44,
            columnNumber: 10
        }, this);
        $[5] = t5;
    } else {
        t5 = $[5];
    }
    let t6;
    if ($[6] === Symbol.for("react.memo_cache_sentinel")) {
        t6 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
            className: "button-shortcut",
            children: "⌘ I"
        }, void 0, false, {
            fileName: "[project]/src/components/library/WelcomeHeader.jsx",
            lineNumber: 51,
            columnNumber: 10
        }, this);
        $[6] = t6;
    } else {
        t6 = $[6];
    }
    let t7;
    if ($[7] !== onAddTitle) {
        t7 = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
            className: "welcome-row",
            children: [
                t4,
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    className: "add-title-button",
                    onClick: onAddTitle,
                    children: [
                        t5,
                        " Add a title ",
                        t6
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/library/WelcomeHeader.jsx",
                    lineNumber: 58,
                    columnNumber: 47
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/library/WelcomeHeader.jsx",
            lineNumber: 58,
            columnNumber: 10
        }, this);
        $[7] = onAddTitle;
        $[8] = t7;
    } else {
        t7 = $[8];
    }
    return t7;
}
_c = WelcomeHeader;
var _c;
__turbopack_context__.k.register(_c, "WelcomeHeader");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/data/demoTitles.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "defaultGroups",
    ()=>defaultGroups,
    "demoTitles",
    ()=>demoTitles,
    "genres",
    ()=>genres
]);
const demoTitles = [
    {
        id: 1,
        title: "Dune: Part Two",
        year: 2024,
        kind: "Movie",
        rating: 4.8,
        length: "2h 46m",
        group: "Movies",
        genres: [
            "Sci-Fi",
            "Adventure"
        ],
        state: "watchlist",
        image: "photo-1446776811953-b23d57bd21aa",
        tint: "#d4a277",
        label: "DESERT / PROPHECY",
        progress: "Highly anticipated"
    },
    {
        id: 2,
        title: "Severance",
        year: 2022,
        kind: "Series",
        rating: 4.7,
        length: "2 seasons",
        group: "Series",
        genres: [
            "Sci-Fi",
            "Thriller"
        ],
        state: "watched",
        image: "photo-1519608487953-e999c86e7455",
        tint: "#a4b0c0",
        label: "THE OUTSIDE / THE INNIE",
        progress: "S2 · E10"
    },
    {
        id: 3,
        title: "Spirited Away",
        year: 2001,
        kind: "Movie",
        rating: 4.9,
        length: "2h 5m",
        group: "Anime",
        genres: [
            "Fantasy",
            "Adventure"
        ],
        state: "watched",
        image: "photo-1470252649378-9c29740c9fa8",
        tint: "#b0c89c",
        label: "A WORLD BEYOND / THE SPIRITS",
        progress: "Rewatch soon"
    },
    {
        id: 4,
        title: "The Bear",
        year: 2022,
        kind: "Series",
        rating: 4.5,
        length: "3 seasons",
        group: "Series",
        genres: [
            "Drama",
            "Comedy"
        ],
        state: "watchlist",
        image: "photo-1559339352-11d035aa65de",
        tint: "#e78642",
        label: "EVERY SECOND COUNTS",
        progress: "Ready when you are"
    },
    {
        id: 5,
        title: "Past Lives",
        year: 2023,
        kind: "Movie",
        rating: 4.6,
        length: "1h 46m",
        group: "Movies",
        genres: [
            "Romance",
            "Drama"
        ],
        state: "watched",
        image: "photo-1519608487953-e999c86e7455",
        tint: "#b8c6d5",
        label: "WHAT MIGHT HAVE BEEN",
        progress: "Watched last month"
    },
    {
        id: 6,
        title: "Blue Eye Samurai",
        year: 2023,
        kind: "Series",
        rating: 4.7,
        length: "1 season",
        group: "Anime",
        genres: [
            "Action",
            "Drama"
        ],
        state: "watchlist",
        image: "photo-1470252649378-9c29740c9fa8",
        tint: "#b65a48",
        label: "A SWORD FOR REVENGE",
        progress: "8 episodes"
    },
    {
        id: 7,
        title: "Everything Everywhere All at Once",
        year: 2022,
        kind: "Movie",
        rating: 4.6,
        length: "2h 19m",
        group: "Movies",
        genres: [
            "Sci-Fi",
            "Comedy"
        ],
        state: "watched",
        image: "photo-1462331940025-496dfbfc7564",
        tint: "#bd8bd8",
        label: "THE MULTIVERSE IS YOU",
        progress: "A favorite"
    },
    {
        id: 8,
        title: "The Last of Us",
        year: 2023,
        kind: "Series",
        rating: 4.4,
        length: "1 season",
        group: "Series",
        genres: [
            "Drama",
            "Thriller"
        ],
        state: "watchlist",
        image: "photo-1470770841072-f978cf4d019e",
        tint: "#99aa78",
        label: "WHEN YOU'RE LOST IN THE DARK",
        progress: "9 episodes"
    }
];
const defaultGroups = [
    "Movies",
    "Series",
    "Anime"
];
const genres = [
    "All titles",
    "Sci-Fi",
    "Drama",
    "Adventure",
    "Thriller",
    "Fantasy",
    "Comedy",
    "Action",
    "Romance"
];
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/movie-utils.js [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "filterTitles",
    ()=>filterTitles,
    "getGroups",
    ()=>getGroups,
    "getPosterUrl",
    ()=>getPosterUrl,
    "saveTitleFromForm",
    ()=>saveTitleFromForm
]);
function getPosterUrl(image) {
    if (image?.startsWith("http")) return image;
    return `https://images.unsplash.com/${image}?auto=format&fit=crop&w=900&q=85`;
}
function filterTitles(titles, { section, group, genre, query }) {
    const normalizedQuery = query.trim().toLowerCase();
    return titles.filter((item)=>{
        const matchesSection = item.state === section;
        const matchesGroup = group === "All titles" || item.group === group;
        const matchesGenre = genre === "All titles" || item.genres.includes(genre);
        const matchesQuery = item.title.toLowerCase().includes(normalizedQuery);
        return matchesSection && matchesGroup && matchesGenre && matchesQuery;
    });
}
function getGroups(customGroups, titles) {
    return [
        ...new Set([
            ...customGroups,
            ...titles.map((item)=>item.group)
        ])
    ];
}
function saveTitleFromForm(formData, currentTitle) {
    return {
        ...currentTitle,
        title: String(formData.get("title")).trim(),
        year: Number(formData.get("year")) || new Date().getFullYear(),
        kind: formData.get("kind"),
        rating: Number(formData.get("rating")) || 0,
        length: String(formData.get("length") || "Feature film"),
        group: formData.get("group"),
        genres: formData.getAll("genres"),
        image: String(formData.get("image") || "photo-1518709268805-4e9042af9f23"),
        tint: "#9a8d7b",
        label: "ADDED TO YOUR COLLECTION",
        progress: currentTitle.progress || "Just added"
    };
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);})()

//# sourceMappingURL=src_1kksfw9ltt4nr._.js.map