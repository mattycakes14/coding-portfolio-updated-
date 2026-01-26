const Tool = ({ icon, name }) => {
  return (
    <div className="smallerToolContainer">
      <i className={`${icon} colored`}></i>
      <span
        style={{ marginLeft: 9, fontFamily: "'JetBrains Mono', monospace" }}
      >
        {name}
      </span>
    </div>
  );
};

export default Tool;
