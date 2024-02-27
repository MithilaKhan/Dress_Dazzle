
import Banner from "./Banner/Banner";
import CustomarSay from "./CustomarSay/CustomarSay";
import Featured from "./Featured/Featured";
import FeaturedCollection from "./FeaturedCollection/FeaturedCollection";
import HolidayFrame from "./HolidayFrame/HolidayFrame";
import Services from "./Services/Services";
import Trending from "./Trending/Trending";


const HomePage =()=> {
  return (
    <main className="max-w-[1580px] mx-auto font-[Poppins] p-10">
     <Banner/> 
     <FeaturedCollection/>     
   <Featured/>
   <Trending/> 
   <HolidayFrame/>
  <Services/>  
  <CustomarSay/>
    </main>
  )
}
export default HomePage;