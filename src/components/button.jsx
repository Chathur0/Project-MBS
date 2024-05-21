import "./button.css";

export default function button(props) {
  return (
    <div>
      <button
        type="button"
        className="btn btn-custom"
        style={{ display: `${props.displayType}`,paddingTop: "8px",paddingBottom: "8px" }}
      >
        {props.content}
      </button>
    </div>
  );
}
