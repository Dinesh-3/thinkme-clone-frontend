import prof from '../../Images/DEFAULTPROFILE.jpeg';
import thanks from '../../Images/thankyou .png';
import prof1 from '../../Images/prof1.png';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { HttpRequest } from '../../utils/HttpRequest';

import './Page.css';

const Page = () => {
	const location = useLocation();
	const history = useHistory();
	const [pageDetail, setPageDetail] = useState({ page_id: '', page_title: '' });
	const [notes, setNotes] = useState([
		{
			note_id: 0,
			page_id: '',
			content: '',
			created_at: '',
			updated_at: '',
		},
	]);
  const [scrollType, setScrollType] = useState("overflowY-hidden")

	useEffect(() => {
		const pageId = location.pathname.split('/')[2];
		console.log({ pageId });
		if (pageId) getPageDetail(pageId);
		else history.push('/');
	}, []);

	useEffect(() => {
		console.log({ notes });
	}, [notes]);

	const getPageDetail = async (pageId) => {
		const requestObj = {
			path: `/page/${pageId}`,
			method: 'GET',
		};

		const response = await HttpRequest(requestObj);
		console.log({ response });
		if (response.data) {
			setPageDetail(response.data);
			setNotes(response.data?.notes || []);
			return true;
		}

		history.push('/');
	};

	const handleCopyClipboard = async () => {
		console.log(window.location.href);
		const url = window.location.href;
		await navigator.clipboard.writeText(url);
		alert('Link Copied');
	};

	return (
		<div className='page-container'>
			<div className='profile-container'>
				<div className='propic'>
					<img src={prof} width='55px' alt='' />
					<h6 style={{ display: 'inline-block', paddingLeft: '20px' }}>{pageDetail.page_title}</h6>
					<br />
					<div
						style={{
							paddingLeft: '75px',
							fontSize: '12px',
							textDecoration: 'none',
							cursor: 'pointer',
							color: 'blue',
						}}
						onClick={() => handleCopyClipboard()}
					>
						COPY PROFILE LINK
					</div>
				</div>
				<div className='descrip'>
					<p>{pageDetail.page_title} has been very kind. Step up and express your gratitude!</p>
				</div>
				<div className='form-group'>
					<textarea
						className='form-control'
						id='exampleFormControlTextarea1'
						rows='3'
						style={{ borderRadius: '15px' }}
						placeholder='What are you grateful for?'
					></textarea>
				</div>
				<div>
					<button
						type='submit'
						className='btn btn-primary'
						style={{ padding: '0.5rem 1rem', borderRadius: '10px', width: '100%' }}
					>
						SUBMIT
					</button>
				</div>
				<form style={{ backgroundColor: '#F5FCFF', padding: '1rem' }}>
					<div className='own'>
						<h5 className=''>🎉 Create your own page</h5>

						<p className='' style={{ color: '#5E6176' }}>
							Make your own page like this one, and share with your friend whom you helped.
						</p>
						<div className='d-flex gap-2 justify-content-center align-items-center'>
							<img src={prof1} className='' style={{ width: '6rem' }} />
							<Link to='/'>
								<button
									type='button'
									className='btn btn-light'
									style={{ borderColor: '#0057DA', color: '#0057DA' }}
								>
									CREATE PAGE
								</button>
							</Link>
						</div>
					</div>
				</form>
			</div>
			<div className='notes-container'>
				{notes.length === 0 && (
					<div className='thank' style={{}}>
						<h5 className='' style={{ color: '#AA9393' }}>
							Be the first one to thank {pageDetail.page_title}
						</h5>
						<img src={thanks} alt='' />
					</div>
				)}

				{notes[0] && (
					<div className="d-flex flex-column">
						<p>
							🎉 {notes.length} people thanked {pageDetail.page_title} for being kind!
						</p>
						<div className={`card-container ${scrollType}`}>
							{notes.map((item) => (
								<div
									className='note-card'
									style={{
										backgroundColor: `#${Math.floor(Math.random() * 16777215).toString(16)}`,
									}}
								>
									<p>{item.content}</p>
								</div>
							))}
						</div>
						<button
							type='button'
							className='btn btn-light'
							style={{ borderColor: '#0057DA', color: '#0057DA', margin: "1rem", width: "10rem"}}
							onClick={() => setScrollType('overflowY-scroll')}
						>
							LOAD MORE
						</button>
					</div>
				)}
			</div>
		</div>
	);
};

export default Page;
