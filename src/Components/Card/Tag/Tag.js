import "./Tag.css";

const Tag = (props) => {
  return (
    <div className="tag">
      <div className="tag-text">{props.text}</div>
    </div>
  );
};

export default Tag;
