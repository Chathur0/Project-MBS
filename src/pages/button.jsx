
export default function button(props) {
  return (
    <div>
      <style>{`.btn-custom{
    color: white;
    font-weight: 900;
    background-color: #3f7b48;
    padding: 5px 50px 5px 50px;
}
.btn-custom:hover{
    color: #3f7b48;
    background-color: white;
    border: 2px solid #3f7b48;
}`}</style>
      <button
        type="button"
        className="btn btn-custom"
        style={{
          display: `${props.displayType}`,
          paddingTop: "8px",
          paddingBottom: "8px",
        }}
      >
        {props.content}
      </button>
    </div>
  );
}
