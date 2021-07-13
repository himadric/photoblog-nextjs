import Head from 'next/head'
import BlogList from '../../components/BlogList'
import MessageBlock from '../../components/MessageBlock'

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
export default function Photography() {
  return (
      <>  
        <Head>
          <title>My Photo Blog - Photography</title>
          <meta name="description" content="My Photo Blog - Photography" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className='container'>
          <MessageBlock
            heading="Camera Designer"
            message = {<>Thanks for visiting my photography blog website. I am a semi professional photographer with avid interest
                in taking photos, photographers, camera equipments and work of camera designers. I like to travel and take
                photos. I have created this blog to share my travel experience and share my love about camera, work of famous
                photographers and camera designers. If you would like see my work please visit my &nbsp;
                <a href="https://www.himadriphoto.com/" aria-label="Photography site" target="blank">photography site</a>.</>} />
          <BlogList blogs={BLOGLIST} />
        </div>
    </>
  )
}
