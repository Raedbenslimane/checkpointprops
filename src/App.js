import "./App.css";
import Profile from "./Components/profile";

function App() {
  return (
    <div className="App">
      <Profile name="Raed" adresse="bsraed@gmail.com">
        <img
          src="https://www.photo-paysage.com/albums/Paysages/Lac-riviere-cascade/thumb_croatie-lacs-plitvice-cascades-7.jpg"
          alt="img"
        />
      </Profile>
    </div>
  );
}

export default App;
