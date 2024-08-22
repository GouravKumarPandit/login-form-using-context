import './App.css'
import DarkLightSwitcherProvider from './Provider/DarkLightSwitcherProvider'
import HomeComponent from "./Components/HomeComponent"

function App() {
	
	return (
		<DarkLightSwitcherProvider>
			<HomeComponent />
		</DarkLightSwitcherProvider>
	)
}

export default App;
