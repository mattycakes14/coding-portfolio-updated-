import "./App.css";
const WorkBox = ({ logo, title, desc, duration }) => {
  return (
    <div className="workBoxContainer">
      <figure>
        <img className="workLogo" src={logo} alt="work icon"></img>
      </figure>
      <div className="workTitle">{title}</div>
      <div className="duration">{duration}</div>
      <div className="workDescription">{desc}</div>
    </div>
  );
};

export default WorkBox;
