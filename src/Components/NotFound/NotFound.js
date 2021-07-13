import './NotFound.css';

import clapImage from '../../Images/claps.png';

const NotFound = () => {
	return (
		<div class='container'>
			<div class='thankme-header-link'>
				<a href='/' class='header-link'>
					<h2>Thankme</h2>
				</a>
			</div>
			<div class='status-container'>
				<p class='status-code'>404</p>
				<p class='status-message'>Requested page does not exist</p>
			</div>
			<div class='create-profile'>
				<div class='link-container'>
					<button class='button' onclick="window.location = '/';">
						Create your profile now
					</button>
					<p class='profile-message'>&#9889; It's FREE</p>
				</div>
				<div class='img-background'>
					<img src={clapImage} alt='' srcset='' />
				</div>
			</div>
		</div>
	);
};

export default NotFound;
