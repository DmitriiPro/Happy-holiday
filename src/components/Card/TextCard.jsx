import { useContext } from "react";
import { textContext } from "../../context/textContext";


const TextCard = ({style}) => {

	const {text} = useContext(textContext);

	return (
	<p className={style.felicitation}>
		{text}
	</p>
)}
export default TextCard;