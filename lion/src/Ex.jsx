import "./App.css";

function PropsPractice({ props }) {
  return (
    <div>
      {props.id}
      {props.pw}
    </div>
  );
}

export default PropsPractice;
