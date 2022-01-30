import Profile from "./profile/component/profile"
function App() {
  
  const cardContainer = {
    backgroundColor: "#707B7C",
    borderRadius: "30px",
    color: "#EAEDED",
    paddingTop: "10px",
    position: "relative",
    width: "400px",
    maxWidth: "100%",
    textAlign: "center",
  };

  const round = {
    border: "1px solid #1ABC9C",
    borderRadius: "75%",
    padding: "5px",
    height:"150px",
    width:"150px"
  };

  const App = {
    backgroundColor: "#DC7633",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",

    minHeight: "100vh",
    margin: "0",
  };

   
     let handleName=()=>{
       alert('Mazen haggui');
     };
    return (
    <div style={App}>
      <div style={cardContainer}>
        <Profile name="Mazen haggui" data={handleName} pro="Fullstack Developer"  bio="This is a bio" >
          <img
            src="./Mazen.jpg"
            alt="profile.pic"
            style={round}
          /></Profile>
      </div>
    </div>
  );
}

export default App;
