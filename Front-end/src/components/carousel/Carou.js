import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import Carousel from 'react-bootstrap/Carousel';




const Carou = () => {

  return (
    <div style={{ display: 'block', width: 1500, padding: 30, marginLeft:120 }}>
       <Carousel>
         
      <Carousel.Item interval={1500}>
        <img
          className="d-block w-100"
          src="https://img.etimg.com/thumb/msid-90795051,width-1070,height-580,imgsize-45456,overlay-economictimes/photo.jpg"
          alt="Image"
        />
        <Carousel.Caption>
          <h3>Modi says India read...</h3>
          <p>Prime Minister Narendra Modi on Tuesday said that during his talk with US President Joe Biden , he o...</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={1500}>
        <img
          className="d-block w-100"
          src="https://static.toiimg.com/thumb/msid-90698833,width-1070,height-580,overlay-toi_sw,pt-32,y_pad-40,resizemode-75,imgsize-825503/90698833.jpg"
          alt="Image"
        />
        <Carousel.Caption>
          <h3>What's World Health ...</h3>
          <p>Today is #WorldHealthDay! Environmental factors - including climate change - claim 13 million lives...</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={1500}>
        <img
          className="d-block w-100"
          src="https://venturebeat.com/wp-content/uploads/2022/04/horizon-worlds.jpg?w=1200&strip=all"
          alt="Image"
        />
        <Carousel.Caption>
          <h3>Mark Zuckerberg says...</h3>
          <p>GamesBeat Summit 2022 returns with its largest event for leaders in gaming on April 26-28th. Reserve...</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={1500}>
        <img
          className="d-block w-100"
          src="https://observer.ug/images2/companies/mtn/Somdev-Sen-MTN-Uganda-Chief-Marketing-Officer-launches-Nsindika-Njake.jpg"
          alt="Image"
        />
        <Carousel.Caption>
          <h3>MTN unveils youth en...</h3>
          <p>Somdev Sen, MTN Uganda Chief Marketing Officer launches Nsindika Njake MTN Uganda, in partnership wi...</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img
          className="d-block w-100"
          src="https://www.monitor.co.ug/resource/image/3774616/landscape_ratio3x2/1200/800/f23a6d0f73fcc8281efea7c0bbf4dc48/Lv/comm02pix.jpg"
          alt="Image"
        />
        <Carousel.Caption>
          <h3>Fuel prices: What is...</h3>
          <p>Uganda has a 30 million litre fuel storage facility in Jinja. It holds reserves equivalent to 4.6 da...</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1500}>
        <img
          className="d-block w-100"
          src="https://www.monitor.co.ug/resource/image/3779052/landscape_ratio3x2/1200/800/e9bd536ff6873210659a73400e3cbd1f/UP/com001pix.jpg"
          alt="Image"
        />
        <Carousel.Caption>
          <h3>Annual milk producti...</h3>
          <p>Milk production increased to 2.81 billion litres in the period ended July 2021, according to a repor...</p>
        </Carousel.Caption>
      </Carousel.Item>
    
    </Carousel>
 
  </div>
  )
}

export default Carou