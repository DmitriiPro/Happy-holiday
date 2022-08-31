import { createContext, useState } from "react"

export const choicesContext = createContext({})

export const ChoicesContextProvider = ({children}) => {
	const [holiday, setHoliday] = useState('Выбрать праздник')

	return (
		<choicesContext.Provider value={{holiday, setHoliday}}>
			{children}
		</choicesContext.Provider>
	)
}