import style from './Card.module.css'
import card from '../../img/card-bg.png'
import ImageCard from './ImageCard'
import TextCard from './TextCard'

const Card = () => (
	<div className={style.card}>
		<div className={style.wrapper}>
			<div className={style.image}>
				<ImageCard card={card} style={style}/>
				<TextCard style={style}/>
			</div>
		</div>
	</div>
)

export default Card