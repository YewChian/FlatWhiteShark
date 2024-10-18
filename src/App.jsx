import FWSIcon from './assets/FWSIcon.png'
import BabyThrowingSimulatorVideo from './videos/BabyThrowingSimulatorVideo.mp4'
import FirestormFarmingVideo from './videos/FirestormFarmingVideo.mp4'
import CatMayorsVideo from './videos/FirestormFarmingVideo.mp4'
import './App.css'

function App() {

  return (
    <div className="app-container">
      <div className="header">
        <a href="https://react.dev">
          <img className="logo" src={FWSIcon}/>
        </a>
      </div>
			<div className="container">

				<a className="card" href="/src/BabyThrowingSimulatorIsolated/index.html" target="_blank">
					<h2>Baby Throwing Simulator</h2>
					<video loop autoPlay muted onClick="/src/BabyThrowingSimulatorIsolated/index.html">
						<source 
							src={BabyThrowingSimulatorVideo}
							type="video/mp4"
						/>
					</video>
					<h3>Defend your house against persistent suitors in this projectile-slinging roguelike</h3>
				</a>
				<a className="card" href="/src/FirestormFarming/index.html" target="_blank">
					<h2>Firestorm Farming</h2>
					<video loop autoPlay muted>
						<source 
							src={FirestormFarmingVideo}
							type="video/mp4"
						/>
					</video>
					<h3>Submission for Brackey's Game Jam 2024.2. Manage your income while planting crops, then burn them down as efficiently as possible</h3>
				</a>
				<a className="card" href="/src/CatMayors/index.html" target="_blank">
					<h2>Cat Mayors</h2>
					<video loop autoPlay muted>
						<source 
							src={CatMayorsVideo}
							type="video/mp4"
						/>
					</video>
					<h3>2-player cat-themed building sim. Tutorial in progress.</h3>
				</a>
			</div>
    </div>
  )
}

export default App
