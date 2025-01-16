import '../styles/globals.css';
import assign1 from '../components/assign1';
import Electronics from '../components/Electronics';
import Mensclothing from '../components/Mensclothing';
import { cards } from '/components/cards.js';
import { cardsmen } from '../components/cardsmen';
import Womensclothing from '../components/Womensclothing';
import { cardswomen } from '../components/cardswomen';
import Branddealsmen from '../components/Branddealsmen';
import {cardbd} from '/components/cardbd'
import carouselData from '../components/carouselData';
import Branddealswomen from '../components/Branddealswomen';
import Login from '../components/Login';
import Createaccount from '../components/Createaccount';
import MainBasicInfo from '../components/MainBasicInfo'
import facebook from '../components/facebook';


function MyApp({ Component, pageProps }) {

	return (
		<>
	
			{ <div>
				
				<h1 className="text-1xl h-30 w-134 font-bold mb-5 mt-4 ml-7 text-decoration-color: red text-decoration: underline hover:underline underline-offset-8 decoration-red-600 border-red-700">MEN'S CLOTHING</h1>
				
				<Mensclothing cards={cardsmen} />
				
			</div> }
			{ <div>
				
				<h1 className="text-1xl h-30 w-134 font-bold mb-5 mt-4 ml-7 text-decoration-color: red text-decoration: underline hover:underline underline-offset-8 decoration-red-600 border-red-700">WOMEN'S CLOTHING</h1>
				
				<Womensclothing cards={cardswomen} />
				
			</div> } 
			
			
			  { <div>
				
			 	<h1 className="text-1xl h-30 w-134 font-bold mb-5 mt-4 ml-7 text-decoration-color: red text-decoration: underline hover:underline underline-offset-8 decoration-red-600 border-red-700">ELECTRONICS</h1>
				
				<Electronics cards={cards} />
				
			 </div>  } 
			  <div>
				<h1 className="text-1xl h-30 w-134 font-bold mb-5 mt-4 ml-7 text-decoration-color: red text-decoration: underline hover:underline underline-offset-8 decoration-red-600 border-red-700">BRAND DEALS FOR WOMEN</h1>
				<Branddealswomen data={carouselData} />
			</div> 
			
			<div>
				<h1 className="text-1xl h-30 w-134 font-bold mb-5 mt-4 ml-7 text-decoration-color: red text-decoration: underline hover:underline underline-offset-8 decoration-red-600 border-red-700">BRAND DEALS FOR MEN</h1>
				<Branddealsmen data={cardbd} /> 
			 </div> 
			 <div><Login/></div>
			 <div><assign1/></div>
			 <div><assign1/></div>
			<div><MainBasicInfo/></div>
			 {/* <div><Createaccount/></div> */}
			<Component {...pageProps} />
		</>
	);
}

export default MyApp;


