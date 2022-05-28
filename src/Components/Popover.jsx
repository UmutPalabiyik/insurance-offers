import { BsQuestion } from "react-icons/bs";

const Popover = ({ popoverContent }) => {
  const { Title, Description } = popoverContent[0];
  console.log(popoverContent[0])

  return (
    <div className="popover">
      <BsQuestion className="popover__svg" size=".85rem" />
      <div className="popover__content">
        <div className="popover__content-title">{Title}</div>
        <div className="popover__content-description">{Description}</div>
      </div>
    </div>
  );
};

export default Popover;
