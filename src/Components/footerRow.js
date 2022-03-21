"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var Alert_1 = require("@mui/material/Alert");
var Button_1 = require("@mui/material/Button");
var TextField_1 = require("@mui/material/TextField");
var styled_1 = require("@emotion/styled");
var sliderCalculator_1 = require("../helperFiles/sliderCalculator");
var index_1 = require("../index");
var BottomRow = styled_1["default"].div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 10px;\n  max-width: 700px;\n  width: 100%;\n"], ["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-top: 10px;\n  max-width: 700px;\n  width: 100%;\n"])));
var StyledTextfield = styled_1["default"](TextField_1["default"])(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  width: 85px;\n  \n  margin-right: 10px;\n  background: ", ";\n"], ["\n  width: 85px;\n  \n  margin-right: 10px;\n  background: ", ";\n"])), function (props) { return (props.value == 100 ? "#FFEBCD" : "#F0F8FF"); });
/**
 * FooterRow appends to the table's bottom
 * This single row conains 2 buttons, an alert, and a textfield that displays total for all entities
 * @identifier {boolean} alert - helps define alert lifecycle
 */
function FooterRow() {
    var _a = react_1["default"].useContext(index_1.Context), total = _a[0], data = _a[1], changeData = _a[2], changeTotal = _a[3];
    var _b = react_1["default"].useState(false), alert = _b[0], setAlert = _b[1];
    var clear = function () {
        var clearedData = data.map(function (e) {
            return { id: e.id, value: 0, name: e.name };
        });
        sliderCalculator_1.resetTotal();
        changeData(clearedData);
        changeTotal(0);
    };
    var onSubmit = function () {
        setAlert(true);
    };
    var checkDisabled = function () {
        if (total < 100 && alert)
            setAlert(false);
        return total < 100 || alert;
    };
    return (<BottomRow>
      <div>
        <Button_1["default"] disabled={checkDisabled()} onClick={onSubmit} style={{ marginRight: '20px' }} variant="outlined">
          Submit
        </Button_1["default"]>
        <Button_1["default"] onClick={clear} variant="outlined">
          Reset 
        </Button_1["default"]>
      </div>
      {(total === 100) ?
        <Alert_1["default"]>
          {!alert ? 'You may submit' : 'You\'ve submitted'}
        </Alert_1["default"]> : <></>}
      <StyledTextfield label="total" InputProps={{
        readOnly: true
    }} value={total}/>
    </BottomRow>);
}
exports["default"] = FooterRow;
var templateObject_1, templateObject_2;
