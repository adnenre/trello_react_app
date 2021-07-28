import React, { useRef, useState } from "react";
import Button from "../Button";
import TextArea from "../TextArea";
import { SPopupContainer, SPopupWrapper } from "./EditPopup.styled";
import useOnClickOutside from "../../hooks/useClickOutside";

const EditPopup = ({
  callback,
  buttonTitle,
  textareaPlaceHolder,
  primaryPopup,
}) => {
  // Create a ref that we add to the element for which we want to detect outside clicks
  const ref = useRef();

  // state for our text in the textarea
  const [textValue, setText] = useState("");

  // State for our Popup
  const [isPopupOpen, setPopupOpen] = useState(false);

  // handle change text
  const handleChangeText = (e) => setText(e.target.value);

  // toggle popup
  const togglePopup = () => {
    setPopupOpen(!isPopupOpen);
  };

  // upload changed text
  const handleUploadText = (e) => {
    e.preventDefault();
    if (textValue) {
      callback(textValue);
      togglePopup();
    }
  };
  // Call hook passing in the ref and a function to call on outside click
  useOnClickOutside(ref, () => setPopupOpen(false));
  return (
    <SPopupWrapper ref={ref}>
      {isPopupOpen ? (
        <SPopupContainer primaryPopup={primaryPopup}>
          <TextArea
            onChange={handleChangeText}
            placeholder={textareaPlaceHolder}
            value={textValue}
          />

          <div style={{ marginTop: "0.5rem" }}>
            <Button primary title={buttonTitle} onClick={handleUploadText} />
            <Button title={"x"} onClick={togglePopup} />
          </div>
        </SPopupContainer>
      ) : (
        <Button
          primary={primaryPopup}
          title={buttonTitle}
          onClick={togglePopup}
        />
      )}
    </SPopupWrapper>
  );
};
EditPopup.defaultProps = {
  textareaPlaceHolder: "Add Task Description ...",
  callback: () => {},
  buttonTitle: "+ Add a Task",
  primaryPopup: false,
};
export default EditPopup;
