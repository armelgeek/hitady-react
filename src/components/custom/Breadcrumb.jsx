import React, { useEffect } from 'react';
import { getLanguage } from 'react-multi-lang';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumb = ({ items }) => {
	const location = useLocation()
	return (
		<div className="container-fluid">
			<nav ariaLabel="breadcrumb">
				<ol className="breadcrumb">
					{
						items.map(item => (
							<li className={`breadcrumb-item  ${location.pathname === item.to
								? 'active'
								: ''
								}`}>
								{location.pathname === item.to
									?
									<> {getLanguage() == 'fr' ? item.fr : item.en}</>
									: <Link key={getLanguage() == 'fr' ? item.fr : item.en} to={item.to}>{getLanguage() == 'fr' ? item.fr : item.en}</Link>
								}
							</li>
						))
					}
				</ol>
			</nav>
		</div>
	);
};
export default Breadcrumb;
