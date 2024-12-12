import Accordion from "../components/home/Accordion";
import FeaturedProducts from "../components/home/FeaturedProducts"
import UserReview from "../components/home/UserReview";
import Banner from './../components/home/Banner';


const Home = () => {
    return (
        <div>
            <Banner />
            <div className="container mx-auto">
                <h1 className="text-2xl font-bold text-center mb-16 mt-10">Featured Products</h1>
                <FeaturedProducts />
                <h1 className="text-2xl font-bold text-center mb-16 mt-10">User Reviews</h1>
                <UserReview />
                <h1 className="text-2xl font-bold text-center mb-16 mt-10">Asked Questions</h1>
                <Accordion />
            </div>
        </div>
    )
}

export default Home