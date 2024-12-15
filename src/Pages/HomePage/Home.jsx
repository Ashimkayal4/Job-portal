import AllJobs from "./AllJobs";
import Banner from "./Banner";

const Home = () => {
    return (
        <div>
            <section>
                <Banner></Banner>
            </section>
            <section>
                <AllJobs></AllJobs>
            </section>
        </div>
    );
};

export default Home;