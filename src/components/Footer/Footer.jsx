import Container from '../Container/Container'
import style from './Footer.module.css'
import {ReactComponent as Vk} from './../../img/vk.svg'
import {ReactComponent as Tg} from './../../img/tg.svg'
import {ReactComponent as Stumbleupon} from './../../img/stumbleupon.svg'
import {ReactComponent as Pinterest} from './../../img/pinterest.svg'

const Footer = () => (
	<footer className={style.footer}>
		<Container>
			<div className={style.wrapper}>
				<div className={style.contacts}>
					<p>Design: <a href='https://t.me/Mrshamallowww'>Anastasia Ilina</a></p>
					<p>Сoder: <a href='#'>Dmitrii Proskurin</a></p>
					<p>© HBCard, 2022</p>
				</div>

				<ul className={style.social}>
					<li className={style.item}>
						<a href="https://vk.com/methed" className={style.link}>
							<Vk />
						</a>
					</li>
					<li className={style.item}>
						<a href="https://t.me/methed_chat_fronted" className={style.link}>
							<Tg/>
						</a>
					</li>
					<li className={style.item}>
						<a href="https://pinterest.com" className={style.link}>
							<Stumbleupon />
						</a>
					</li>
					<li className={style.item}>
						<a href="https://stumbleupon.com" className={style.link}>
							<Pinterest />
						</a>
					</li>
				</ul>
			</div>
		</Container>
	</footer>
)
	

export default Footer