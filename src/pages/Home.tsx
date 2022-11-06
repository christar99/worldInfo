import { getCookie, setCookie } from "common/Cookies";
import Loading from "components/units/Loading";
import { useState, useEffect } from "react";

const Home = () => {
    const [firstLoad, setFirstLoad] = useState<string>(getCookie('firstLoad'));
    useEffect(() => {
        if(firstLoad !== 'Y') {
            setTimeout(() => {
                setCookie('firstLoad', 'Y');
                setFirstLoad(getCookie('firstLoad'));
            }, 1500);
        }
    }, [firstLoad])
    
    return (
        <>
            {
                firstLoad !== 'Y' ? <Loading /> : <div>asdasdsad</div>
            }
        </>
    )
}

export default Home;