import { useContext } from "react"
import { imgContext } from "../../context/imgContext";


const ImageCard = ({card, style}) => {
	const img = useContext(imgContext)
	console.log(img);

	return (
		<img className={style.img} src={card} alt="image card" />
	)
}

export default ImageCard;