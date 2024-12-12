import ProductCard from "../ProductCard"

const FeaturedProducts = () => {
    return (
        <div className="lg:flex gap-4 m-3 items-center justify-center">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </div>
    )
}

export default FeaturedProducts