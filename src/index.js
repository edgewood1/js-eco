"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var react_dom_1 = require("react-dom");
var Toolbar_1 = require("@mui/material/Toolbar");
var styled_1 = require("@emotion/styled");
var table_1 = require("./Components/table");
var footerRow_1 = require("./Components/footerRow");
var data_1 = require("./helperFiles/data");
var StyledToolbar = styled_1["default"](Toolbar_1["default"])(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  background: lightblue;\n  marginBottom: 20px;\n  color: gray;\n"], ["\n  background: lightblue;\n  marginBottom: 20px;\n  color: gray;\n"])));
var InnerWrapper = styled_1["default"].div(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 10vh;\n"], ["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-top: 10vh;\n"])));
exports.Context = react_1["default"].createContext(null);
/**
 * App creates basic layout and distributes table row data / total
 * @identifier {number} total - total values for all 5 rows
 * @identifier {object} data - defined by AppData
 */
function App() {
    var _a = react_1["default"].useState(0), total = _a[0], changeTotal = _a[1];
    var _b = react_1["default"].useState(data_1["default"]), data = _b[0], changeData = _b[1];
    var resources = [total, data, changeData, changeTotal];
    return (<div style={{ width: '100%', height: '100%' }}>
      <StyledToolbar> Build Your Own Portfolio </StyledToolbar>
      <InnerWrapper>
        <exports.Context.Provider value={resources}>
          <table_1["default"] />
          <footerRow_1["default"] />
          </exports.Context.Provider>
      </InnerWrapper>
    </div>);
}
react_dom_1.render(<App />, document.getElementById('root'));
var templateObject_1, templateObject_2;
