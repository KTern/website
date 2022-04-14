import Nineth from "./first10";
import Twelveth from "./first11";
import Thirteenth from "./first12";
import Fourteenth from "./first13";
import Fiftheenth from "./first14";
import First from "./first2";
import Second from "./first3";
import Third from "./first4";
import Fourth from "./first5";
import Fifth from "./first6";
import Sixth from "./first7";
import Seventh from "./first8";
import Eighth from "./first9";


export default function FeaturedResources({ data, stream }) {
	return (
		<>
			<div className="py-12 bg-white radius-for-skewed">
				<div className="container mx-auto px-4">
					<div className="mb-16 text-center">
						<span
							className={`p-1 text-xs rounded tag-${stream} text-white font-semibold inline-block py-px px-2 mb-4 text-xs leading-5 uppercase rounded-full shadow-sm`}
						>
							{data.Tag}
						</span>
						<h3 className="mb-4 text-3xl md:text-5xl leading-tight font-bold ibm-plex">{data.SectionTitle}</h3>
					</div>
					<div className="flex flex-wrap justify-center -mx-3">
						<div className="flex flex-wrap w-full lg:w-1/2">
							{/* Large Card */}
							<div className="w-full px-3 mb-5">
								{data.Resource[0].OpenNewTab ? (
									<First data={data} stream = {stream}></First>
								) : (
								<Second data = {data} stream = {stream}></Second>
								)}
							</div>
							{/* / Large Card */}
							{/* Small Card */}
							{/* Card 2 */}
							<div className="w-full lg:w-1/2 px-3 mb-5 sm:hidden">
								{data.Resource[1].OpenNewTab ? (
									<Third data={data} stream = {stream}></Third>
								) : (
									<Fourth data={data} stream = {stream}></Fourth>
								)}
							</div>
							<div className="w-1/2 lg:w-1/2 px-3 mb-5 md:hidden lg:hidden xl:hidden 2xl:hidden">
								{data.Resource[1].OpenNewTab ? (
									<Fifth></Fifth>
								) : (
									<Sixth data={data} stream = {stream}></Sixth>
								)}
							</div>
							{/* Card 2  */}
							<div className="w-full lg:w-1/2 px-3 mb-5 sm:hidden">
								{data.Resource[2].OpenNewTab ? (
									<Seventh  data={data} stream = {stream}></Seventh>
								) : (
									<Eighth data={data} stream = {stream}></Eighth>
								)}
							</div>
							
							{/* Small Card */}
						</div>
						<div className="flex flex-wrap w-full lg:w-1/2">
							{/* Small Card */}
							{/* Card 2 */}
							<div className="w-full lg:w-1/2 px-3 mb-5 sm:hidden">
								{data.Resource[3].OpenNewTab ? (
									<Nineth data={data} stream = {stream}></Nineth>
								) : (
									<Twelveth data={data} stream = {stream}></Twelveth>
								)}
							</div>
							
							{/* Card 2  */}
							<div className="w-full lg:w-1/2 px-3 mb-5 sm:hidden">
								{data.Resource[4].OpenNewTab ? (
									<Thirteenth data={data} stream = {stream}></Thirteenth>
								) : (
									<Fourteenth data={data} stream = {stream}></Fourteenth>
								)}
							</div>
							
							{/* Small Card */}
							{/* Large Card */}
							<div className="w-full px-3 mb-5">
								{data.Resource[5].OpenNewTab ? (
								<Fourteenth data={data} stream = {stream}></Fourteenth>
								) : (
									<Fiftheenth data={data} stream = {stream}></Fiftheenth>
								)}
							</div>
							{/* / Large Card */}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
