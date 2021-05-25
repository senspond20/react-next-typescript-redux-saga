import styled from "styled-components";
import {AiOutlineCloseCircle} from "react-icons/ai";
import {HiOutlineClipboardCopy} from "react-icons/hi";

const ClickIcon = styled(HiOutlineClipboardCopy)`
  font-size: 20px;
`
const ClickAndCloseIcon = styled(AiOutlineCloseCircle)`
  cursor: pointer;
  font-size: 35px;
  color: rgba(23, 158, 229, 0.4);

  :hover {
    color: rgba(23, 158, 229, 0.8);
    //color: rgba(138, 15, 223, 0.8);
  }
`;

export {
    ClickAndCloseIcon,
    ClickIcon,
}