"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var react_native_1 = require("react-native");
var styles = react_native_1.StyleSheet.create({
    container: {
        position: "absolute",
        bottom: 0,
        left: 0,
        backgroundColor: "#486550",
        height: 50,
        width: "100%"
    },
    row: {
        paddingHorizontal: 30,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        flex: 1
    },
    timeText: {
        fontSize: 18,
        color: "#fff"
    },
    x: {
        fontSize: 30,
        color: "#b2a1a1"
    },
    line: {
        height: 3,
        backgroundColor: "#ff0"
    }
});
exports.WorkoutTimer = function (_a) {
    var onXPress = _a.onXPress, currentTime = _a.currentTime, percent = _a.percent;
    return (React.createElement(react_native_1.View, { style: styles.container },
        React.createElement(react_native_1.View, { style: [styles.line, { width: percent }] }),
        React.createElement(react_native_1.View, { style: styles.row },
            React.createElement(react_native_1.Text, { style: styles.timeText }, currentTime),
            React.createElement(react_native_1.TouchableOpacity, { onPress: onXPress },
                React.createElement(react_native_1.Text, { style: styles.x }, "X")))));
};
