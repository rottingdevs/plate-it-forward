import "mapbox-gl/dist/mapbox-gl.css";

import NavBar from "../Components/NavBar";

import { getUserInfo } from "../api";

import "../App.css";

const fetchFromApi = async () => {
    const response = await getUserInfo("bobiscool");
    return response;
}

function MyListingsPage() {

    const [response, setResponse] = useState(null);

    useEffect(() => {
        fetchFromApi().then((data) => setResponse(data));
    }, [])
    

  return (
    <>
        <NavBar />
        <h1>Thanks for reducing food waste, </h1>
        {/* <p>{getUserInfo("bobiscool").username}</p> */}
        <p>{response}</p>
    </>
  );
}

export default MyListingsPage;
