import prof from '../../Images/DEFAULTPROFILE.jpeg';
import thanks from '../../Images/thankyou .png';
import prof1 from '../../Images/prof1.png';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';
import { HttpRequest } from '../../utils/HttpRequest';
import { capitalize } from 'lodash';

import './Page.css';
import NotesContainer from './NotesContainer/NotesContainer';
import { isValidForm } from '../../utils/IsValidForm';

const Page = ({ match, history }) => {
	const [pageDetail, setPageDetail] = useState({ page_id: '', page_title: '' });
	const [notes, setNotes] = useState([
		// {
		// 	note_id: 0,
		// 	page_id: '',
		// 	content: '',
		// 	created_at: '',
		// 	updated_at: '',
		// },
	]);
	const [form, setForm] = useState({ content: '' });
	const [error, setError] = useState({ content: '' });

	const formPattern = useMemo(
		() => ({
			content: {
				pattern: /^[0-9a-zA-Z]{1}/,
				message: 'Content at least have 1 character',
			},
		}),
		[]
	);

	useEffect(() => {
		const pageId = match.params.id;
		if (pageId) getPageDetail(pageId);
		else history.push('/');
	}, []);

	const getPageDetail = async (pageId) => {
		const requestObj = {
			path: `/page/${pageId}`,
			method: 'GET',
		};

		const response = await HttpRequest(requestObj);
		if (response.data) {
			setPageDetail(response.data);
			setNotes(response.data?.notes || []);
			document.title = capitalize(pageId);
			return true;
		}

		history.push('/');
	};

	const handleCopyClipboard = async () => {
		const url = window.location.href;
		await navigator.clipboard.writeText(url);
		alert('Link Copied');
	};

	const handleChange = ({ key, value }) => {
		setForm((prev) => ({ ...prev, [key]: value }));
		if (formPattern[key].pattern.test(value)) setError((prev) => ({ ...prev, [key]: false }));
		else setError((prev) => ({ ...prev, [key]: formPattern[key].message }));
	};

	const handleAddComment = async (event) => {
		event.preventDefault();
		if (!isValidForm(error)) return;
		const requestObj = {
			path: `/note`,
			method: 'POST',
			body: {
				page_id: pageDetail.page_id,
				content: form.content,
				color: (Math.random() * 360).toFixed(2),
			},
		};

		const response = await HttpRequest(requestObj);

		if (response.status === true) setNotes((prev) => [...prev, response.data]);

		setForm({ content: '' });
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
						name='content'
						value={form.content}
						onChange={(event) =>
							handleChange({ key: event.target.name, value: event.target.value })
						}
						style={{ borderRadius: '15px' }}
						placeholder='What are you grateful for?'
					></textarea>
					{error.content && <p style={{ color: 'red' }}>{error.content}</p>}
				</div>
				<div>
					<button
						type='submit'
						className='btn btn-primary'
						style={{ padding: '0.5rem 1rem', borderRadius: '10px', width: '100%' }}
						onClick={handleAddComment}
					>
						SUBMIT
					</button>
				</div>
				<form style={{ backgroundColor: '#F5FCFF', padding: '1rem', marginTop: '1rem' }}>
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
					<div className='thank' style={{ height: '100vh', width: '100%', margin: 'auto' }}>
						<h5 className='' style={{ color: '#AA9393' }}>
							Be the first one to thank {pageDetail.page_title}
						</h5>
						<img src={thanks} alt='' />
					</div>
				)}
				{notes[0] && <NotesContainer notes={notes} pageDetail={pageDetail} />}
			</div>
		</div>
	);
};

export default Page;
