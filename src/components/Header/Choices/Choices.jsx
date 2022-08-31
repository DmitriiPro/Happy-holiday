import React, { useState, useContext } from 'react'
import { choicesContext } from '../../../context/choicesContext'
import style from './Choices.module.css'

const holidays = {
	newyear: 'Новый год',
	birthdayWomen: 'День рождения Ж',
	birthdayMen: 'День рождения М',
	womenday: '8 марта',
	knowledgeday: 'День знаний'
}

const Choices = () => {
	const [openChoices, setOpenChoices] = useState(false)
	
	const {holiday, setHoliday} = useContext(choicesContext)

	const toggleChoices = () => {
		setOpenChoices(!openChoices)
	}

	const changeHoliday = title => {
		setHoliday(title)
		toggleChoices()
	}

	return(
		<div className={style.wrapper}>
			<button onClick={toggleChoices}  className={style.button}>{holiday}</button>
			{openChoices && (
				<ul className={style.list}>
					{Object.entries(holidays).map(item => (
						<li 
							onClick={() => {changeHoliday(item[1])}} 
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