import { useState, useEffect } from 'react';
import gratitude from '../../Images/gratitude.png';
import man from '../../Images/man_avatar.png';
import woman from '../../Images/woman_avatar.png';
import done from "../../Images/done.png";
import { useHistory, useLocation, Link } from 'react-router-dom';

function Creation() {
  const location = useLocation();
  const history = useHistory();
  const [pageDetail, setPageDetail] = useState({pageId: "", pageName: ""});

  useEffect(() => {
    if(location.state) setPageDetail(location.state);
    else history.push("/")
  },[])

  const handleCopyClipboard = async () => {
    const url = `${window.location.href}/${pageDetail.pageId}`;
    await navigator.clipboard.writeText(url);
    alert("Link Copied")
  }

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
							<div className='form-group' style={{ paddingTop: '30px' }}>
								<img className="center" style={{display:"block",marginLeft:"auto",marginRight:"auto"}} src={done} />

                                <p className="col-12 " style={{textAlign:"center"}}>Amazing! You just created a kindness page.</p>
                                <p className="col-12" style={{textAlign:"center"}}>Now go ahead and share it with your friends on Instagram, Facebook and literally everywhere!</p>
                                <div className="thanklink" style={{
						            border: '1px solid #F0F4FB',
						            borderRadius: '30px',
						            width: '150px',
						            padding: '6px',
                                    paddingLeft:"25px",
                                    marginLeft:"50px",
                                    backgroundColor:"#F0F4FB",
                                    width:"200px"
                                    
                                }}>
                                <Link to={`/page/${pageDetail.pageId}`} style={{ textDecoration: 'none', paddingLeft: '20px'}}>
                                  {`thankme.in/${pageDetail.pageId}`}
                                </Link>
                              </div>
							</div>
                            <div style={{ paddingBottom: '50px',paddingLeft:"80px", cursor: "pointer", color: "blue"}} onClick={() => handleCopyClipboard()}>
                              <span className="material-icons" style={{color:"#0057DA"}}>
                                content_copy
                              </span>
                            COPY LINK
                            
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

export default Creation;
