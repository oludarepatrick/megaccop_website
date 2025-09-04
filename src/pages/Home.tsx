import { useHead } from "@unhead/react";

const Home = () => {
    useHead({title: "Home"});
    
    return(
        <div>Home</div>
    )
}
export default Home;