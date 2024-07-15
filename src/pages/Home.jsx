import { Header } from "../components/Header";
import { Hero } from "../components/Hero";

export function Home ()  {
    return (
        <div className="px-7 md:px-12 lg:px-24">
            <Header/>
            <Hero/>
        </div>
    )
}