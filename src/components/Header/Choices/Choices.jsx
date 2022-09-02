import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import style from './Choices.module.css'
import { fetchHolidays, setHoliday } from '../../../store/holidaysSlice'
import { fetchText } from '../../../store/textSlice'

const Choices = () => {
	const [openChoices, setOpenChoices] = useState(false)
	const {holiday, holidays, loading} = useSelector(state => state.holidays)
	const dispatch = useDispatch()

	const toggleChoices = () => {
		if (loading !== 'success') return
		setOpenChoices(!openChoices)
	}

	useEffect(() => {
		dispatch(fetchHolidays())
	}, [dispatch])

	return(
		<div className={style.wrapper}>
			<button onClick={toggleChoices}  className={style.button}>
			{loading !== 'success' ? 
				'Загрузка...' :
				holidays[holiday] || 'Выбрать праздник'
			}
			</button>
			{openChoices && (
				<ul className={style.list}>
					{Object.entries(holidays).map(item => (
						<li 
							onClick={() => {
								dispatch(setHoliday(item[0]))
								dispatch(fetchText(item[0]))
								toggleChoices()
							}} 
							className={style.item} 
							key={item[0]}
						>
							{item[1]}
						</li>
					))}
				</ul>
			)}
		</div>
	)
}

export default Choices