import React from 'react';
import gratitude from '../Images/gratitude.png';
import man from '../Images/man_avatar.png';
import woman from '../Images/woman_avatar.png';
import './home.css';
function Home() {
	return (
		<div style={{ background: '100% #F4FFF5' }}>
			<div className='container-fluid pt-5 ml-5'>
				<div
					className='headertag '
					style={{
						border: '1px solid #D3DCD4',
						borderRadius: '30px',
						width: '150px',
						padding: '12px',
					}}
				>
					<a href='#' style={{ textDecoration: 'none', paddingLeft: '15px', fontWeight: '600' }}>
						Thankme.in
					</a>
				</div>
				<div className='row'>
					<div className='gratitude pt-4 col-5 '>
						<h1 style={{ fontWeight: 'bold', fontSize: '35px' }}>
							Let's celebrate{' '}
							<h1
								style={{ color: 'blue', display: 'inline', fontSize: '35px', fontWeight: 'bold' }}
							>
								gratitude.
							</h1>
						</h1>
						<h1 style={{ fontWeight: 'bold', fontSize: '35px' }}>Let the humanity win.</h1>
						<p style={{ color: '#9c9a95', fontWeight: '550', fontSize: '18px' }}>
							We know that a lot of people have helped each other during these hard times. Create a
							thankme page for yourself/ your friend/colleagues/company and share it in public!{' '}
						</p>
						<img src={gratitude} style={{ width: '100%', height: '40%' }} />
						<p
							className='pt-5 pb-4'
							style={{ color: '#9c9a95', fontWeight: '550', fontSize: '16px' }}
						>
							Proudly made in India with <span style={{ color: 'red' }}>♥</span>
							<br />
							By Ankit Dubey, Kartik Dhaduk, Harshit Vavaiya <br />
							<a href='#'>Contact Us</a>
						</p>
					</div>
					<img
						src={man}
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
								<label for='exampleInputEmail1' style={{ fontSize: '15px' }}>
									Creating Page for
								</label>
								<input
									type='email'
									class='form-control'
									id='exampleInputEmail1'
									aria-describedby='emailHelp'
									style={{ borderRadius: '10px' }}
								/>
							</div>
							<div class='form-group'>
								<label for='exampleInputPassword1' style={{ fontSize: '15px' }}>
									Pagename (Keep it unique)
								</label>
								<input
									type='password'
									class='form-control'
									id='exampleInputPassword1'
									style={{ borderRadius: '10px' }}
								/>
							</div>
							<div style={{ paddingBottom: '50px' }}>
								<button
									type='submit'
									class='btn btn-primary'
									style={{ padding: '5px 93px', borderRadius: '10px' }}
								>
									CREATE PAGE
								</button>
							</div>
						</form>
					</div>
					<img
						src={woman}
						style={{ width: '10%', height: '2%', paddingTop: '350px', marginLeft: '-30px' }}
					/>
				</div>
			</div>
		</div>
	);
}

export default Home;
