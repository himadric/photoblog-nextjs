import Head from 'next/head'
import BlogList from '../components/BlogList'
import Banner from '../components/Banner'
import MessageBlock from '../components/MessageBlock'
import TopicCardContainer from '../components/TopicCardContainer'

const BANNER = {
    "image": "/img/banner_large.jpg",
    "imgAlt": "Banner",
    "title": "Photography Blog",
    "heading": "Taking Photos",
    "subHeading": "Let's talk about photograpy and camera"
}
const TOPICS = [
  {
    "id": 1,
    "image": "/img/photography.jpg",
    "imgAlt": "Photography",
    "link": "/photography",
    "buttonText": "Photography"
  },
  {
    "id": 2,
    "image": "/img/photographer.jpg",
    "imgAlt": "Photographer",
    "link": "/photographer",
    "buttonText": "Photographer"
  },
  {
    "id": 3,
    "image": "/img/camera.jpg",
    "imgAlt": "Camera",
    "link": "/camera",
    "buttonText": "Camera"
  },
  {
    "id": 4,
    "image": "/img/designer.jpg",
    "imgAlt": "Designer",
    "link": "/camera-designer",
    "buttonText": "Designer"
  }
]
const BLOGLIST = [
  {
    "id": 1,
    "publishDate": "7th June, 2021",
    "readTime": "3 min",
    "image": "/img/photoblog1.webp",
    "imgAlt": "photoblog1",
    "link": "/photography/1/",
    "title": "Short walk at Short North District, Columbus",
    "shortDescription": "Cupidatat in veniam tempor minim adipisicing excepteur sint. Exercitation eu dolore in aliquip mollit cupidatat dolor fugiat.",
    "noOfViews": 3,
    "noOfComments": 0,
    "noOfFavorites": 3
  },
  {
    "id": 2,
    "publishDate": "7th June, 2021",
    "readTime": "3 min",
    "image": "/img/photoblog1.webp",
    "imgAlt": "photoblog1",
    "link": "/photography/2/",
    "title": "Short walk at Short North District, Columbus",
    "shortDescription": "Cupidatat in veniam tempor minim adipisicing excepteur sint. Exercitation eu dolore in aliquip mollit cupidatat dolor fugiat.",
    "noOfViews": 6,
    "noOfComments": 0,
    "noOfFavorites": 1
  },
  {
    "id": 3,
    "publishDate": "7th June, 2021",
    "readTime": "3 min",
    "image": "/img/photoblog1.webp",
    "imgAlt": "photoblog1",
    "link": "/photography/3/",
    "title": "Short walk at Short North District, Columbus",
    "shortDescription": "Cupidatat in veniam tempor minim adipisicing excepteur sint. Exercitation eu dolore in aliquip mollit cupidatat dolor fugiat.",
    "noOfViews": 10,
    "noOfComments": 0,
    "noOfFavorites": 2
  }
]
export default function Home() {
  return (
      <>  
        <Head>
          <title>My Photo Blog</title>
          <meta name="description" content="My Photo Blog" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <Banner 
        image={BANNER.image}
        imgAlt={BANNER.imgAlt}
        title={BANNER.title}
        heading={BANNER.heading}
        subHeading={BANNER.subHeading} />
        <div className='container'>
        <MessageBlock
          heading=""
          message = {<>Thanks for visiting my photography blog website. I am a semi professional photographer with avid interest
              in taking photos, photographers, camera equipments and work of camera designers. I like to travel and take
              photos. I have created this blog to share my travel experience and share my love about camera, work of famous
              photographers and camera designers. If you would like see my work please visit my &nbsp;
              <a href="https://www.himadriphoto.com/" aria-label="Photography site" target="blank">photography site</a>.</>} />
          <TopicCardContainer topics={TOPICS} />
          <BlogList blogs={BLOGLIST} />
        </div>
    </>
  )
}
