import React from 'react';
import picture from "../images/logo.png"


class HeaderComponent extends React.Component {
	render() {
		return (
			<>
				<header>
					<div className="container">
						<div className="header-container">
							<div className="main-logo">
								<img className="main-logo-img" src={picture} alt="main-Logo" />
							</div>
								<nav className="main-nav">
									<ul className="main-nav-list">
										<li className="main-nav-item"  tabindex="2">
												<a href="#OVERVIEW" className="main-nav-link" aria-label="overview">OVERVIEW</a>
											</li>
											<li className="main-nav-item"  tabindex="2">
												<a href="#FEATURES" className="main-nav-link" aria-label="features">FEATURES</a>
											</li>
											<li className="main-nav-item"  tabindex="2">
												<a href="#TECHNOLOGY" className="main-nav-link" aria-label="technology">TECHNOLOGY</a>
											</li>
											<li className="main-nav-item"  tabindex="2">
												<a href="#CONTACTS" className="main-nav-link" aria-label="contacts">CONTACTS</a>
											</li>
											<li className="main-nav-item"  tabindex="2">
												<a href="#SIGN UP" className="main-nav-link">SIGN UP</a>
											</li>							
									</ul>
								</nav>
							</div>
					</div>
				</header>
			</>
		)
	}
}

export default HeaderComponent

