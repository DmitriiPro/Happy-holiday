import { useContext } from "react"
import { imgContext } from "../../context/imgContext";
import card from '../../img/card-bg.png'

const ImageCard = ({style}) => {
	const {urlImg} = useContext(imgContext)

	return (
		<img className={style.img} src={urlImg || card} alt="image card" />
	)
}

export default ImageCard;