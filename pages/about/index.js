import Head from 'next/head'
import Image from 'next/image'
import BlogList from '../../components/BlogList'
import MessageBlock from '../../components/MessageBlock'

const MESSAGE = {
  "heading": "Photographer",
  "message": `Thanks for visiting my photography blog website. I am a semi professional photographer with avid interest
  in taking photos, photographers, camera equipments and work of camera designers. I like to travel and take
  photos. I have created this blog to share my travel experience and share my love about camera, work of famous
  photographers and camera designers. If you would like see my work please visit my 
  <a href="https://www.himadriphoto.com/" aria-label="Photography site" target="_blank">photography site</a>.`
}

export default function About(props) {
  return (
      <>  
        <Head>
          <title>My Photo Blog - About</title>
          <meta name="description" content="My Photo Blog - About" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div className='container'>
        <MessageBlock
          heading={props.message.heading}
          message ={props.message.message} />
          <Image src="/img/himadri.jpg" width='1038' height='692' alt="Himadri Chakrabarti" />
        </div>
    </>
  )
}
export async function getStaticProps() {
  //fetch data from external source
  return {
    props: {
      message: MESSAGE
    },
    revalidate: 86400
  }
}