import { useAuth0 } from "@auth0/auth0-react";
import axios from "axios";
import { useEffect, useState } from "react";

const Event = () => {
    const { user } = useAuth0();
    const { getAccessTokenSilently } = useAuth0();
    const [events, setEvents] = useState([]);

    useEffect(() => {
        const updateEventList = async () => {
            try {
                const token = await getAccessTokenSilently({
                    authorizationParams: {
                        audience: import.meta.env.VITE_AUDIENCE
                    }
                })
                console.log(token)
                const response = await axios.get(
                    `${import.meta.env.VITE_API_SERVER_URL}`,
                    {
                        headers: {
                            Authorization: `Bearer ${token}`
                        }
                    }
                );
                setEvents(response.data);
                console.error(response.data);
                console.log(user)
            }
            catch (error) {
                console.error(error);
            }
        };
        updateEventList()
    }, [user,getAccessTokenSilently]);

    const isAdmin = () => {
        if (user["https://eventsAPI/roles"][0] == "admin") {
            return true
        }
    }

    return (
        <div className=''>
            {
                isAdmin() &&
                    (
                        <div>
                            <button>Create Events</button>
                        </div>
                    )
            }

            {
                events.map((event) =>
                    <div key={event.id}>
                        <img src={event.image} alt="..." />
                        <div>
                            <h5>Title: {event.title}</h5>
                            <p>{event.description}</p>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Event