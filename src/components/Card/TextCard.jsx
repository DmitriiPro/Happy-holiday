import { useSelector } from "react-redux";


const TextCard = ({style}) => {
	const {text, loading} = useSelector(state => state.text)

	return (
	<p className={style.felicitation}>
		{loading === 'loading' ? 'Загрузка...' : text === '' ? 'Выберите повод для поздравления!' : text}
	</p>
)}
export default TextCard;