import "./button.css";

export default function button(props) {
  return (
    <div>
      <button
        type="button"
        className="btn btn-custom"
        style={{ display: "none" }}
      >
        {props.content}
      </button>
    </div>
  );
}
