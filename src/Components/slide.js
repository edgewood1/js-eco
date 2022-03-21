"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var react_1 = require("react");
var Slider_1 = require("@mui/material/Slider");
var styled_1 = require("@emotion/styled");
var index_1 = require("../index");
var sliderCalculator_1 = require("../helperFiles/sliderCalculator");
var SliderTool = styled_1["default"](Slider_1["default"])(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  margin-right: 20px;\n  width: 225px;\n"], ["\n  margin-right: 20px;\n  width: 225px;\n"])));
var maxVal;
/**
 * Manages value changes from Slider
 * @identifier { Event } event - mouse Event
 * @identifier { object } row - data for slider instance
 * @param { number } newVal - the new slider value
 */
function Slide(props) {
    var row = props.row;
    var _a = react_1["default"].useContext(index_1.Context), total = _a[0], data = _a[1], changeData = _a[2], changeTotal = _a[3];
    var _b = react_1["default"].useState(0), value = _b[0], setValue = _b[1];
    // this condition reflects a reset state
    if (value > 0 && total === 0) {
        setValue(0);
    }
    var handleChange = function (event, newVal) {
        // Slider shouldn't move right if grand total has reached 100
        maxVal = 100 - total + value;
        // Only update the slider value & total value if: 
        if (newVal !== value && (maxVal >= newVal || newVal < value)) {
            setValue(newVal);
            // Calculate the total for all 5 entities in light of new value
            var newTotal = sliderCalculator_1.calculateTotal(newVal, row.id);
            if (newTotal <= 100) {
                // calculate the new table data state
                var newData = sliderCalculator_1.calculateData(data, row, newVal);
                // change state
                changeData(newData);
                changeTotal(newTotal);
            }
        }
    };
    return (<SliderTool aria-label="Volume" step={1} value={value} onChange={handleChange}/>);
}
exports["default"] = Slide;
var templateObject_1;
