import Card from './components/Card/Card'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import { TextContextProvider } from './context/textContext'
import { ImgContextProvider } from './context/imgContext'
import { ChoicesContextProvider } from './context/choicesContext'


const wrapper = {
  display: 'flex',
  flexDirection: 'column',
  height: '100vh'
}

const App = () => {
  return (
    <div style={wrapper}>
    <ChoicesContextProvider>
      <ImgContextProvider>
          <TextContextProvider>
            <Header />
            <Card />
            <Footer />
          </TextContextProvider>
        </ImgContextProvider>
      </ChoicesContextProvider>
    </div>
  )
}

export default App
