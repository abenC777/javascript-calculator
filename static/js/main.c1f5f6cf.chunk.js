(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,,,function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,"a",(function(){return Calculator}));var C_Users_marco_OneDrive_Documents_web_dev_react_template_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(3),C_Users_marco_OneDrive_Documents_web_dev_react_template_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(4),C_Users_marco_OneDrive_Documents_web_dev_react_template_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(2),C_Users_marco_OneDrive_Documents_web_dev_react_template_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(6),C_Users_marco_OneDrive_Documents_web_dev_react_template_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(5),react__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(1),react__WEBPACK_IMPORTED_MODULE_5___default=__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__),_Calculator_css__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(18),_Calculator_css__WEBPACK_IMPORTED_MODULE_6___default=__webpack_require__.n(_Calculator_css__WEBPACK_IMPORTED_MODULE_6__),_Buttons__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(10),_Output__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(11),_Formula__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(12),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__(0),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10___default=__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__),isOperator=/[x/+\u2011]/,endsWithOperator=/[x+\u2011/]$/,endsWithNegativeSign=/\d[x/+\u2011]{1}\u2011$/,Calculator=function(_Component){Object(C_Users_marco_OneDrive_Documents_web_dev_react_template_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__.a)(Calculator,_Component);var _super=Object(C_Users_marco_OneDrive_Documents_web_dev_react_template_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_4__.a)(Calculator);function Calculator(e){var _;return Object(C_Users_marco_OneDrive_Documents_web_dev_react_template_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.a)(this,Calculator),(_=_super.call(this,e)).state={currentVal:"0",prevVal:"0",formula:"",currentSign:"pos",lastClicked:""},_.maxDigitWarning=_.maxDigitWarning.bind(Object(C_Users_marco_OneDrive_Documents_web_dev_react_template_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.a)(_)),_.handleOperators=_.handleOperators.bind(Object(C_Users_marco_OneDrive_Documents_web_dev_react_template_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.a)(_)),_.handleEvaluate=_.handleEvaluate.bind(Object(C_Users_marco_OneDrive_Documents_web_dev_react_template_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.a)(_)),_.initialize=_.initialize.bind(Object(C_Users_marco_OneDrive_Documents_web_dev_react_template_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.a)(_)),_.handleDecimal=_.handleDecimal.bind(Object(C_Users_marco_OneDrive_Documents_web_dev_react_template_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.a)(_)),_.handleNumbers=_.handleNumbers.bind(Object(C_Users_marco_OneDrive_Documents_web_dev_react_template_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__.a)(_)),_}return Object(C_Users_marco_OneDrive_Documents_web_dev_react_template_my_app_node_modules_babel_preset_react_app_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__.a)(Calculator,[{key:"maxDigitWarning",value:function(){var e=this;this.setState({currentVal:"Digit Limit Met",prevVal:this.state.currentVal}),setTimeout((function(){return e.setState({currentVal:e.state.prevVal})}),1e3)}},{key:"handleEvaluate",value:function handleEvaluate(){if(!this.state.currentVal.includes("Limit")){for(var expression=this.state.formula;endsWithOperator.test(expression);)expression=expression.slice(0,-1);expression=expression.replace(/x/g,"*").replace(/\u2011/g,"-").replace("--","+0+0+0+0+0+0+");var answer=Math.round(1e12*eval(expression))/1e12;this.setState({currentVal:answer.toString(),formula:expression.replace(/\*/g,"\u22c5").replace(/-/g,"\u2011").replace("+0+0+0+0+0+0+","\u2011-").replace(/(x|\/|\+)\u2011/,"$1-").replace(/^\u2011/,"-")+"="+answer,prevVal:answer,evaluated:!0})}}},{key:"handleOperators",value:function(e){if(!this.state.currentVal.includes("Limit")){var _=e.target.value,t=this.state,a=t.formula,r=t.prevVal,s=t.evaluated;this.setState({currentVal:_,evaluated:!1}),s?this.setState({formula:r+_}):endsWithOperator.test(a)?endsWithNegativeSign.test(a)?"\u2011"!==_&&this.setState({formula:r+_}):this.setState({formula:(endsWithNegativeSign.test(a+_)?a:r)+_}):this.setState({prevVal:a,formula:a+_})}}},{key:"handleNumbers",value:function(e){if(!this.state.currentVal.includes("Limit")){var _=this.state,t=_.currentVal,a=_.formula,r=_.evaluated,s=e.target.value;this.setState({evaluated:!1}),t.length>21?this.maxDigitWarning():r?this.setState({currentVal:s,formula:"0"!==s?s:""}):this.setState({currentVal:"0"===t||isOperator.test(t)?s:t+s,formula:"0"===t&&"0"===s?""===a?s:a:/([^.0-9]0|^0)$/.test(a)?a.slice(0,-1)+s:a+s})}}},{key:"handleDecimal",value:function(){!0===this.state.evaluated?this.setState({currentVal:"0.",formula:"0.",evaluated:!1}):this.state.currentVal.includes(".")||this.state.currentVal.includes("Limit")||(this.setState({evaluated:!1}),this.state.currentVal.length>21?this.maxDigitWarning():endsWithOperator.test(this.state.formula)||"0"===this.state.currentVal&&""===this.state.formula?this.setState({currentVal:"0.",formula:this.state.formula+"0."}):this.setState({currentVal:this.state.formula.match(/(-?\d+\.?\d*)$/)[0]+".",formula:this.state.formula+"."}))}},{key:"initialize",value:function(){this.setState({currentVal:"0",prevVal:"0",formula:"",currentSign:"pos",lastClicked:"",evaluated:!1})}},{key:"render",value:function(){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("div",{className:"wrapper",children:Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div",{className:"calculator",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)("div",{className:"screen",children:[Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_Formula__WEBPACK_IMPORTED_MODULE_9__.a,{formula:this.state.formula.replace(/x/g,"\u22c5")}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_Output__WEBPACK_IMPORTED_MODULE_8__.a,{currentValue:this.state.currentVal})]}),Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_Buttons__WEBPACK_IMPORTED_MODULE_7__.a,{decimal:this.handleDecimal,evaluate:this.handleEvaluate,initialize:this.initialize,numbers:this.handleNumbers,operators:this.handleOperators})]})})}}]),Calculator}(react__WEBPACK_IMPORTED_MODULE_5__.Component)},function(e,_,t){"use strict";var a=t(3),r=t(4),s=t(6),i=t(5),n=t(1),l=t.n(n),c=t(0),u=function(e){Object(s.a)(t,e);var _=Object(i.a)(t);function t(){return Object(a.a)(this,t),_.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("button",{className:"clear",id:"clear",onClick:this.props.initialize,value:"AC",children:"AC"}),Object(c.jsx)("button",{id:"divide",className:"divide",onClick:this.props.operators,value:"/",children:"/"}),Object(c.jsx)("button",{id:"multiply",className:"multiply",onClick:this.props.operators,value:"x",children:"x"}),Object(c.jsx)("button",{id:"seven",className:"seven",onClick:this.props.numbers,value:"7",children:"7"}),Object(c.jsx)("button",{id:"eight",className:"eight",onClick:this.props.numbers,value:"8",children:"8"}),Object(c.jsx)("button",{id:"nine",className:"nine",onClick:this.props.numbers,value:"9",children:"9"}),Object(c.jsx)("button",{id:"subtract",className:"subtract",onClick:this.props.operators,value:"\u2011",children:"\u2011"}),Object(c.jsx)("button",{id:"four",className:"four",onClick:this.props.numbers,value:"4",children:"4"}),Object(c.jsx)("button",{id:"five",className:"five",onClick:this.props.numbers,value:"5",children:"5"}),Object(c.jsx)("button",{id:"six",className:"six",onClick:this.props.numbers,value:"6",children:"6"}),Object(c.jsx)("button",{id:"add",className:"add",onClick:this.props.operators,value:"+",children:"+"}),Object(c.jsx)("button",{id:"one",className:"one",onClick:this.props.numbers,value:"1",children:"1"}),Object(c.jsx)("button",{id:"two",className:"two",onClick:this.props.numbers,value:"2",children:"2"}),Object(c.jsx)("button",{id:"three",className:"three",onClick:this.props.numbers,value:"3",children:"3"}),Object(c.jsx)("button",{className:"zero",id:"zero",onClick:this.props.numbers,value:"0",children:"0"}),Object(c.jsx)("button",{id:"decimal",className:"decimal",onClick:this.props.decimal,value:".",children:"."}),Object(c.jsx)("button",{id:"equals",className:"equals",onClick:this.props.evaluate,value:"=",children:"="})]})}}]),t}(l.a.Component);_.a=u},function(e,_,t){"use strict";var a=t(3),r=t(4),s=t(6),i=t(5),n=t(1),l=t.n(n),c=t(0),u=function(e){Object(s.a)(t,e);var _=Object(i.a)(t);function t(){return Object(a.a)(this,t),_.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return Object(c.jsx)("div",{className:"display-2",id:"display",children:this.props.currentValue})}}]),t}(l.a.Component);_.a=u},function(e,_,t){"use strict";var a=t(3),r=t(4),s=t(6),i=t(5),n=t(1),l=t.n(n),c=t(0),u=function(e){Object(s.a)(t,e);var _=Object(i.a)(t);function t(){return Object(a.a)(this,t),_.apply(this,arguments)}return Object(r.a)(t,[{key:"render",value:function(){return Object(c.jsx)("div",{className:"display-1",children:this.props.formula})}}]),t}(l.a.Component);_.a=u},,,,,function(e,_,t){},function(e,_,t){},,function(e,_,t){"use strict";t.r(_);var a=t(1),r=t.n(a),s=t(8),i=t.n(s),n=(t(17),t(9)),l=t(0);var c=function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsx)("header",{className:"App-header",children:Object(l.jsx)(n.a,{})})})};i.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(c,{})}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.c1f5f6cf.chunk.js.map