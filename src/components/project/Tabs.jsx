const Tabs = ({ tab, setTab }) => {
	return (
		<aside className="navigation">
			<div className={`navigation__item ${tab === 0 && "selected"}`}>
				<div className="text">
					<div className="circle">1</div>
					<div className="text-content">Connect Services</div>
				</div>
				<div className="elements">
					<div className="elements__item-1 elements__item" />
					<div className="elements__item-2 elements__item" />
					<div className="elements__item-3 elements__item" />
				</div>
			</div>
			<div className={`navigation__item ${tab === 1 && "selected"}`}>
				<div className="text">
					<div className="circle">2</div>
					<div className="text-content">Redefine Data</div>
				</div>
				<div className="elements">
					<div className="elements__item-1 elements__item" />
					<div className="elements__item-2 elements__item" />
					<div className="elements__item-3 elements__item" />
				</div>
			</div>
			<div className={`navigation__item ${tab === 2 && "selected"}`}>
				<div className="text">
					<div className="circle">3</div>
					<div className="text-content">Define Constraints</div>
				</div>
				<div className="elements">
					<div className="elements__item-1 elements__item" />
					<div className="elements__item-2 elements__item" />
					<div className="elements__item-3 elements__item" />
				</div>
			</div>
			<div className={`navigation__item ${tab === 3 && "selected"}`}>
				<div className="text">
					<div className="circle">4</div>
					<div className="text-content">Overview & API</div>
				</div>
				<div className="elements">
					<div className="elements__item-2 elements__item" />
					<div className="elements__item-3 elements__item" />
				</div>
			</div>
		</aside>
	);
};

export default Tabs;
