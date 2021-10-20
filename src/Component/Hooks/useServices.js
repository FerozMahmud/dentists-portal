import { useEffect, useState } from "react"

const useServices = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch("https://ferozmahmud.github.io/services-data/Services.JSON")
            .then((res) => res.json())
            .then((data) => setServices(data));
    }, [])
    return {
        services
    }
}
export default useServices;