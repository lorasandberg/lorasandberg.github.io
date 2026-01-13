import self_image from './assets/self.png';

function Profile() {


    return <div className="profile">
        <div className="profile-bg">
            <img className='self_image' src={self_image} />

            <p><strong>Hi!</strong></p>
            <p>I'm Lora Sandberg, a software developer from Finland living in Québec. I started doing web development in 2007 and loved it since. I'm passionate about pretty much everything digital and interactive, and I have experience in developing frontend, backend, native apps, mobile, 3D, games, VR, and more. What drives me is putting my skills in use to make the world a bit better place, be it with better and more reliable digital services, data analysis to improve our understanding of the workings of our society, or simply small games to brighten someone's day somewhere.
            </p>
            <p>I'm an open-minded person, a team player, and always willing to learn something new and tackle new challenges. I adapt well in changing environment and put pride in the quality of my work. I also think that programming is essentially communication; we don't only write code to make computers do what we want, but also to make it easily understood and extended by our team or our future selves. 
            </p>
            <p>In my free time, I enjoy reading, playing digital and board games, learning nature photography, and cooking. Naturally, programming is also a beloved hobby of mine. </p>

        </div>
    </div>
}

export default Profile