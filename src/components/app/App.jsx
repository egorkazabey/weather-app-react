import Info from '../info/Info.jsx'
import Forms from '../forms/forms.jsx'

import './App.css'

const API_KEY = '5e8f0afbfabeebdf641986448c1eb261'

const App = () => {
	
	const gettingWeather = async (e) => {
		e.preventDefault()
		const api_url = await
			fetch(`https://api.openweathermap.org/data/2.5/weather?q=Kiev,ua&appid=${API_KEY}&units=metric`)
		const data = await api_url.json()
		console.log(data)
	}
	
	return (
		<main>
			<Info  />
			<Forms weatherMethod={gettingWeather} />
		</main>
	)
}

export default App;