import { useMemo } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import gratitude from '../../Images/gratitude.png';
import man from '../../Images/man_avatar.png';
import woman from '../../Images/woman_avatar.png';
import { HttpRequest } from '../../utils/HttpRequest';
import { isValidForm } from '../../utils/IsValidForm';
import './home.css';

function Home() {

  const history = useHistory();
  const [form, setForm] = useState({pageName: "", pageId: ""})
  const [error, setError] = useState({ pageName: "", pageId: "" });

  const formPattern = useMemo(
		() => ({
			pageName: {
				pattern: /^[0-9a-zA-Z]{4}/,
				message: 'Page Name at least have 4 character',
			},
			pageId: {
				pattern: /^[0-9a-zA-Z]{4}/,
				message: 'Page Id must be between 4 to 14 character long',
			},
		}),
		[]
	);

  useEffect(() => {
    console.log({form, error});
  }, [form, error])
	const handleChange = ({ key, value }) => {
		console.log({ key, value });
		setForm((prev) => ({ ...prev, [key]: value }));
		if (formPattern[key].pattern.test(value)) setError((prev) => ({ ...prev, [key]: false }));
		else setError((prev) => ({ ...prev, [key]: formPattern[key].message }));
	};

	const handleCreatePage = async (event) => {
    event.preventDefault();
    if (!isValidForm(error)) return;
    const requestObj = {
			path: `/page/check/${form.pageId}`,
			method: 'POST'
		};

    const response = await HttpRequest(requestObj);

    if(response["data"] === true) return setError(prev => ({...prev, pageId: "Page Name Already Exist"})) 
		
    const createPage = {
			path: `/page`,
			method: 'POST',
			body: {
				page_id: form.pageId,
				page_title: form.pageName,
			},
		};

    const createPageResponse = await HttpRequest(createPage);
    console.log({ createPageResponse });
    if(createPageResponse["status"] === true) return history.push({
			pathname: '/creation',
			state: {
				...form,
			},
		});
    alert("Error Try again!!")
	};

	return (
		<div style={{ background: '100% #F4FFF5' }}>
			<div className='container-fluid pt-4 ml-5'>
				<div
					className='headertag '
					style={{
						border: '1px solid #D3DCD4',
						borderRadius: '30px',
						width: '150px',
						padding: '12px',
					}}
				>
					<a href='/' style={{ textDecoration: 'none', paddingLeft: '15px', fontWeight: '600' }}>
						Thankme.in
					</a>
				</div>
				<div className='row'>
					<div className='gratitude pt-4 col-5 '>
						<h1 style={{ fontWeight: 'bold', fontSize: '35px' }}>Let's celebrate </h1>
						<h1 style={{ color: 'blue', display: 'inline', fontSize: '35px', fontWeight: 'bold' }}>
							gratitude.
						</h1>
						<h1 style={{ fontWeight: 'bold', fontSize: '35px' }}>Let the humanity win.</h1>
						<p style={{ color: '#9c9a95', fontWeight: '550', fontSize: '18px' }}>
							We know that a lot of people have helped each other during these hard times. Create a
							thankme page for yourself/ your friend/colleagues/company and share it in public!{' '}
						</p>
						<img src={gratitude} alt={'Clap'} style={{ width: '100%', height: '40%' }} />
						<p
							className='pt-4 pb-4'
							style={{ color: '#9c9a95', fontWeight: '550', fontSize: '16px' }}
						>
							Proudly made in India with <span style={{ color: 'red' }}>♥</span>
							<br />
							By Ankit Dubey, Kartik Dhaduk, Harshit Vavaiya <br />
							<a href='/'>Contact Us</a>
						</p>
					</div>
					<img
						src={man}
						alt='man'
						style={{
							width: '10%',
							height: '2%',
							position: 'sticky',
							marginRight: '-50px',
							paddingTop: '40px',
						}}
					/>

					<div
						className='create-form col-3'
						style={{
							backgroundColor: 'white',
							marginLeft: '10px',
							height: '60%',
							marginTop: '80px',
							borderRadius: '15px',
						}}
					>
						<form>
							<div className='form-group' style={{ paddingTop: '50px' }}>
								<p style={{ fontWeight: '600', fontSize: '18px' }}>
									Create a page for anyone in seconds and share it with your friends!
								</p>
								<label htmlFor='pageName' style={{ fontSize: '15px' }}>
									Creating Page for
								</label>
								<input
									className='form-control'
									type='text'
									id='pageName'
									name='pageName'
									value={form.pageName}
									onChange={(event) =>
										handleChange({ key: event.target.name, value: event.target.value })
									}
									style={{ borderRadius: '10px' }}
								/>
								{error.pageName && <p style={{ color: 'red' }}>{error.pageName}</p>}
							</div>
							<div className='form-group'>
								<label htmlFor='pageId' style={{ fontSize: '15px' }}>
									Pagename (Keep it unique)
								</label>
								<input
									type='text'
									className='form-control'
									name='pageId'
									value={form.pageId}
									onChange={(event) =>
										handleChange({ key: event.target.name, value: event.target.value })
									}
									id='pageId'
									style={{ borderRadius: '10px' }}
								/>
								{error.pageId && <p style={{ color: 'red' }}>{error.pageId}</p>}
							</div>
							<div style={{ paddingBottom: '50px' }}>
								<button
									type='submit'
									className='btn btn-primary'
									style={{ padding: '5px 93px', borderRadius: '10px' }}
									onClick={handleCreatePage}
								>
									CREATE PAGE
								</button>
							</div>
						</form>
					</div>
					<img
						src={woman}
						alt='women'
						style={{ width: '10%', height: '2%', paddingTop: '350px', marginLeft: '-30px' }}
					/>
				</div>
			</div>
		</div>
	);
}

export default Home;
