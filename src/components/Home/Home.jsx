import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import CatagoryList from "../CatagoryList/CatagoryList";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>
                    CareerHub | Home
                </title>
            </Helmet>
            <Banner></Banner>
            <CatagoryList></CatagoryList>
            <FeaturedJobs></FeaturedJobs>
        </div>
    );
};

export default Home;