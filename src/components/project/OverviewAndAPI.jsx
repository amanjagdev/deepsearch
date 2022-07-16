import { IoCopyOutline } from "react-icons/io5";
const OverviewAndAPI = () => {
	return (
		<main className="OverviewAndAPI">
			<div className="heading">Your API Overview {`&`} Routes</div>
			<div className="description">
				Lorem ipsum dolor, sit amet consectetur adipisicing elit.
				Similique esse facilis cupiditate necessitatibus libero modi ab
				repudiandae, iure cum temporibus!
			</div>
			<div className="content">
				<section>
					<div className="sub-heading">Your API URL</div>
					<div className="code">
						<pre className="code-text">
							https://youtube-music-ajdkww7fy8h43.deepsearch.io
						</pre>
						<div className="icon">
							<IoCopyOutline size={18} />
						</div>
					</div>
				</section>
				<section>
					<div className="sub-heading">
						/search/q={`{`}query{`}`}
					</div>
					<div className="code">
						<pre className="code-text">
							https://youtube-music-ajdkww7fy8h43.deepsearch.io
						</pre>
						<div className="icon">
							<IoCopyOutline size={18} />
						</div>
					</div>
				</section>
			</div>
			
		</main>
	);
};

export default OverviewAndAPI;
