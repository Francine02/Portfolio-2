import { Header } from "../components/Header/Header";
import { Hero } from "../components/Hero";

export function Home() {
    return (
        <div className="px-7 md:px-12 lg:px-24 2xl:px-72">
            <Header />
            <Hero />
        </div>
    )
}