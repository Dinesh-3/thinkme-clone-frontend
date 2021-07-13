import './NotFound.css';

import clapImage from '../../Images/claps.png';

const NotFound = () => {
	return (
		<div className='container'>
			<div className='thankme-header-link'>
				<a href='/' className='header-link'>
					<h2>Thankme</h2>
				</a>
			</div>
			<div className='status-container'>
				<p className='status-code'>404</p>
				<p className='status-message'>Requested page does not exist</p>
			</div>
			<div className='create-profile'>
				<div className='link-container'>
					<button className='button' onclick="window.location = '/';">
						Create your profile now
					</button>
					<p className='profile-message'>&#9889; It's FREE</p>
				</div>
				<div className='img-background'>
					<img src={clapImage} alt='' srcset='' />
				</div>
			</div>
		</div>
	);
};

export default NotFound;
