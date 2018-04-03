import React from "react";
import $ from "jQuery";
import iconCSS from "../icon.less";
import colors from "../../rules/colors.js";
class CirSelect extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    if (!this.path) return;
    const props = this.props;
    $(this.path).attr(
      "fill",
      `${props.fillcolor ? colors[props.fillcolor] : "currentColor"}`
    );
    $(this.svg)
      .removeClass()
      .addClass(iconCSS.icon);
  }
  render() {
    const props = this.props;
    return (
      <svg
        ref={svg => (this.svg = svg)}
        className="icon"
        viewBox="0 0 1024 1024"
        width={props.size ? props.size : "20px"}
        height={props.size ? props.size : "20px"}
        {...props}
      >
        <defs />
        <path
          ref={path => (this.path = path)}
          d="M512 65.983C266.08 65.983 65.983 266.08 65.983 512c0 245.952 200.065 446.017 446.017 446.017S958.017 757.952 958.017 512c0-245.92-200.065-446.017-446.017-446.017zm215.231 372.45L471.008 697.438c-.064.064-.193.096-.257.193-.096.063-.096.192-.192.256-2.05 1.984-4.576 3.2-6.945 4.545-1.183.672-2.143 1.696-3.392 2.176-3.84 1.536-7.904 2.336-11.967 2.336-4.096 0-8.225-.8-12.097-2.4-1.28-.543-2.303-1.632-3.52-2.303-2.368-1.344-4.831-2.529-6.88-4.545-.064-.063-.097-.192-.16-.256-.064-.096-.193-.096-.256-.193L299.325 567.745c-12.32-12.673-12.033-32.928.64-45.248 12.673-12.288 32.895-12.064 45.248.64l103.263 106.112 233.28-235.84c12.417-12.576 32.705-12.703 45.248-.256 12.516 12.448 12.644 32.703.227 45.28z"
        />
      </svg>
    );
  }
}
export default CirSelect;
