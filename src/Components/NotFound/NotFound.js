import './NotFound.css';

import clapImage from '../../Images/claps.png';
import { Link } from 'react-router-dom';

const NotFound = () => {
	return (
		<div className='container'>
			<div className='thankme-header-link'>
				<Link to={'/'}>
					<h2>Thankme</h2>
				</Link>
			</div>
			<div className='status-container'>
				<p className='status-code'>404</p>
				<p className='status-message'>Requested page does not exist</p>
			</div>
			<div className='create-profile'>
				<div className='link-container'>
					<Link to={'/'}>
						<button className='button'>Create your profile now</button>
					</Link>
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
