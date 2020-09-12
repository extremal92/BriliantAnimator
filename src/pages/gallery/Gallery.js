import React from 'react'
import './gallery.scss'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
import ReactFancyBox from 'react-fancybox'
import 'react-fancybox/lib/fancybox.css'
//Images
import img1 from '../../image/gallery/1.jpg';
import img2 from '../../image/gallery/2.jpg';
import img3 from '../../image/gallery/3.jpg';
import img4 from '../../image/gallery/4.jpg';


export class Gallery extends React.Component {
    items = [img1, img2, img3, img4]

    state = {
      galleryItems: this.items.map((i) => <img src={i} key={i}/>),
    }

    responsive = {
        0: { items: 1 },
        1024: { items: 1 },
    }

    thumbItem = (item, i) => (
        <div className='navItem'>
            <img src={item} key={item} onClick={() => this.Carousel.slideTo(i)}/>
        </div>
    )

    render() {
      return (
        <div className='container'>
            <h1>Наши Работы</h1>

            <div className='gallery'>
            <AliceCarousel
                dotsDisabled={true}
                buttonsDisabled={true}
                items={this.state.galleryItems}
                ref={(el) => (this.Carousel = el)}
                duration={500}
                autoPlayInterval={4000}
                fadeOutAnimation={true}
                swipeDisabled={true}
                autoPlayDirection="rtl"
                autoPlay={true}
                infinite={true}
            />

            <nav>{this.items.map(this.thumbItem)}</nav>
            <button className='navButtons navPrev' onClick={() => this.Carousel.slidePrev()}><i class="fas fa-angle-left"/></button>
            <button className='navButtons navNext' onClick={() => this.Carousel.slideNext()}><i class="fas fa-angle-right"/></button>
            </div>
        </div>
      )
    }
  }
