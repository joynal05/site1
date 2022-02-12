import React from 'react'
import heroImage from '../assets/image/home.png'

const Home = () => {
  return (
    <div className="main-area flex-middle">
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className="flex-middle">
                        <div className="home-content" style={{marginBottom:100}}>
                            <h6>Hello i'am</h6>
                            <h2>Joynal Abedin</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores temporibus pariatur architecto autem rerum a, expedita culpa! Quisquam, architecto. Veniam.</p>
                        </div>
   
                    </div>
                </div>
                <div className="col">
                    <div className="home-image text-right">
                        <img src={heroImage} alt="" />
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Home