import Head from 'next/head'; // Head is a React Component that is built into Next.js. It allows you to modify the <head> of a page.
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';
import { SiBootstrap, SiDocker, SiGo, SiJavascript, SiMongodb, SiMysql, SiNextDotJs, SiPostgresql, SiRedis, SiTypescript } from 'react-icons/si';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import SimpleReactLightbox from "simple-react-lightbox";

export default function Home() {
  return (
    <SimpleReactLightbox>
      <main className="absolute md:relative">

        <Head>
          <meta name="description" content="Portfolio" />
          <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
          <link rel="manifest" href="/site.webmanifest" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css" integrity="sha512-1cK78a1o+ht2JcaW6g8OXYwqpev9+6GqOkz9xmBN9iUUhIndKtxwILGWYOSibOKjLsEdjyjZvYDq/cZwNeak0w==" crossOrigin="anonymous" />

        </Head>

        {/* Nav */}
        <nav className="absolute top-0 z-50 flex flex-wrap items-center justify-between w-full px-2 py-3 navbar-expand-lg">
          <div className="container flex flex-wrap items-center justify-between px-4 mx-auto">
            {/* <!-- Social Media Icons --> */}
            <div className="flex text-5xl text-gray-100 md:ml-auto">
              <a target='_blank' href='https://www.linkedin.com/in/andrewkolbe/' className='mx-2'><AiFillLinkedin /></a>
              <a target='_blank' href='https://github.com/andkolbe' className='mx-2'><AiFillGithub /></a>
              <a target='_blank' href='mailto:kolbe1129@gmail.com' className='mx-2'><AiOutlineMail /></a>
            </div>
          </div>
        </nav>

        {/* Hero */}
        <div className='relative flex items-center content-center justify-center pt-16 pb-32'
          style={{
            minHeight: '95vh'
          }}>
          <div className='absolute top-0 w-full h-full bg-gray-900 bg-center bg-cover'></div>
          <div className='container relative mx-auto'>
            <div className='flex flex-wrap items-center'>
              <div className='w-full px-4 ml-auto mr-auto text-center lg:w-6/12'>
                <div data-aos='fade-in'>
                  <h1 className='font-semibold text-gray-100 text-7xl lg:text-8xl'>
                    Andrew Kolbe
                  </h1>
                  <p className='mt-4 text-gray-100 text-3xl lg:text-2xl'>
                    Back End Web Developer | Birmingham, AL
              </p>
                </div>
              </div>
            </div>
          </div>
          
        </div>

        {/* About Me */}
        <section className='pb-20 -mt-20 bg-gray-300'>
          <div className='container px-4 mx-auto' >
            <div className='flex flex-wrap'></div>
            <div className='flex flex-wrap items-center mt-32'>
              <div className='w-full px-4 ml-auto mr-auto md:w-5/12' data-aos='fade-right'>
                <h2 className='my-6 md:my-2 text-5xl lg:text-4xl font-semibold leading-normal text-center md:text-left'>
                  About Me
          </h2>
                <p className='mt-4 mb-4 text-xl lg:text-lg leading-relaxed text-gray-900'>
                  Hello! I'm Andrew, a pastry chef turned web developer from Texas who recently moved to Birmingham.
          </p>
                <p className='mt-4 mb-4 text-xl lg:text-lg leading-relaxed text-gray-900'>
                  I specialize in Javascript and Go, and I am interested in learning more about all things server side development.
          </p>
                <p className='mt-0 mb-4 text-xl lg:text-lg leading-relaxed text-gray-900'>
                  I have years of experience working in high stress, collaborative, and technically challenging environments. I love growing with and learning from a team and helping other motivated people reach their potential.
          </p>
                <p className='mt-0 mb-4 text-xl lg:text-lg leading-relaxed text-gray-900'>
                  In my free time, I enjoy cooking and learning about new cuisines and cultures, listening to obscure metal, and spending time with my lazy dog.
          </p>
                
          <a target='_blank' href='https://ak-portfolio.s3.amazonaws.com/Web+Developer+Resume.pdf' className='mt-0 mb-4 text-xl lg:text-lg text-center md:text-left leading-relaxed font-bold text-gray-900'>View Resume</a>

              </div>
              {/* My Picture */}
              <div className='px-4 pt-4 ml-auto mr-auto xl:w-1/3 lg:w-2/5 w-2/3' data-aos='fade-left'>
                <img
                  alt='...'
                  src='https://get-the-dish.s3.amazonaws.com/1612647627489.jpg'
                  className='min-w-0 mb-6 align-middle rounded-lg rounded-t-lg shadow-lg lg:w-3/5'
                />
              </div>
            </div>
          </div>
          {/* Skills */}
          <div className='container px-4 mx-auto mt-16' data-aos='fade-up'>
            <div className='flex flex-wrap items-center'>
              <div className='lg:w-3/5 md:px-4 px-2 ml-auto mr-auto md:pr-12'>
                <h2 className='text-xl lg:text-lg font-semibold mb-2 text-center'>Tech I Am Currently Using</h2>
                <div className='flex justify-center text-2xl lg:text-xl mb-10'>
                  <h6 className='mx-3'>Go</h6>
                  <h6 className='mx-3'>Javascript</h6>
                  <h6 className='mx-3'>Express</h6>
                  <h6 className='mx-3'>MySQL</h6>
                  <h6 className='mx-3'>PostgreSQL</h6>
                  <h6 className='mx-3'>MongoDB</h6>
                  <h6 className='mx-3'>React</h6>
                </div>
                <h2 className='text-xl lg:text-lg font-semibold mb-2 text-center'>Topics I Am Interested In Learning More About</h2>
                <div className='flex justify-center text-2xl lg:text-xl mb-12'>
                  <h6 className='mx-3'>Microservices</h6>
                  <h6 className='mx-3'>Pub Sub</h6>
                  <h6 className='mx-3'>Database Design</h6>
                  <h6 className='mx-3'>Redis</h6>
                </div>

              </div>
            </div>
          </div>
        </section>


        {/* Projects */}
        <section className='relative py-20 bg-gray-100'>

          {/* Polygon */}
          <div
            className='absolute top-0 left-0 right-0 bottom-auto w-full -mt-20 overflow-hidden pointer-events-none'
            style={{ height: '80px', transform: 'translateZ(0)' }}
          >
            <svg
              className='absolute bottom-0 overflow-hidden'
              xmlns='http://www.w3.org/2000/svg'
              preserveAspectRatio='none'
              version='1.1'
              viewBox='0 0 2560 100'
              x='0'
              y='0'
            >
              <polygon
                className='text-gray-100 fill-current'
                points='2560 0 2560 100 0 100'
              ></polygon>
            </svg>
          </div>

          {/* Content */}

          <div className='container px-4 mx-auto md:mb-10'>
            <div className='flex flex-wrap items-center'>
              <div className='lg:w-3/5 md:px-4 px-2 ml-auto mr-auto md:pr-12'>
                <h2 className='text-5xl lg:text-4xl font-semibold mb-20 text-center' data-aos='fade-left'>Projects</h2>

                {/* Get The Dish */}
                <div class='mb-40' data-aos='fade-left'>
                  <h4 className='text-4xl lg:text-3xl text-gray-700 text-left'>Get The Dish</h4>
                  <hr className='border-black mt-2 mb-4 w-1/4' />
                  <h6 className='text-lg lg:text-md'>A social networking service that allows users to create a profile, upload photos and restaurant information, and post about their favorite dishes they've eaten recently. Users can leave likes and comments on other users' dishes.</h6>
                  <div className='text-2xl lg:text-xl mt-4'>Tech Used</div>
                  <div className='flex justify-center mt-4 text-5xl lg:text-4xl text-black'>
                    <SiTypescript className='mx-5' />
                    <FaNodeJs className='mx-5' />
                    <SiMysql className='mx-5' />
                    <FaReact className='mx-5' />
                    <SiBootstrap className='mx-5' />
                  </div>
                  
                  <div className='text-xl lg:text-lg mt-10'>Full stack CRUD application from scratch</div>
                  <div className='text-xl lg:text-lg'>Images are hosted using AWS</div>
                  <div className='text-xl lg:text-lg'>Comments are updated real time with Socket.IO</div>
                  <div className='text-xl lg:text-lg'>Authentication via Passport JWT</div>
                  <div className='text-xl lg:text-lg'>Integrated a custom password reset workflow</div>
                  <div className='text-xl lg:text-lg'>3rd Party API integration with Stripe, Mailgun, and Yelp Fusion</div>
                  <div className='text-xl lg:text-lg'>Deployed with Heroku</div>
                  
                  <div className='flex flex-col md:flex-row text-3xl lg:text-2xl my-12 font-bold justify-center'>
                    <a target='_blank' href='https://get-the-dish.herokuapp.com/' className='mr-20'>View Site</a>
                    <a target='_blank' href='https://github.com/andkolbe/get-the-dish' className='my-10 md:my-0 mr-20'>View Source Code</a>
                    <a target='_blank' href='https://ak-portfolio.s3.amazonaws.com/Get-The-Dish-Design-Document.pdf' className='md:my-0'>Design Document</a>
                  </div>
                </div>

                {/* Get The Tix */}
                <div class='mb-40' data-aos='fade-right'>
                  <h4 className='text-4xl lg:text-3xl text-gray-700 text-left'>Get The Tix</h4>
                  <hr className='border-black mt-2 mb-4 w-1/4' />
                  <h6 className='text-lg lg:text-md'>A ticket exchange and resell app that allows users to sign up, and sell and buy tickets to events</h6>
                  <div className='text-2xl lg:text-xl mt-4'>Tech Used</div>
                  <div className='flex justify-center mt-4 text-5xl lg:text-4xl text-black'>
                    <SiTypescript className='mx-5' />
                    <FaNodeJs className='mx-5' />
                    <SiMongodb className='mx-5' />
                    <SiRedis className='mx-5' />
                    <SiNextDotJs className='mx-5' />
                    <SiDocker className='mx-5' />
                    <SiBootstrap className='mx-5' />
                  </div>
                  <div className='text-xl lg:text-lg mt-10'>Full stack Microservices application</div>
                  <div className='text-xl lg:text-lg'>Written in NextJS and Express</div>
                  <div className='text-xl lg:text-lg'>Services are managed using Docker, Kubernetes, Ingress Nginx, and NATS Streaming Server</div>
                  <div className='text-xl lg:text-lg'>3rd Party API integration with Stripe</div>
                  <div className='text-xl lg:text-lg'>All services tested with Jest</div>
                  <div className='text-xl lg:text-lg'>Deployed with Digital Ocean</div>
                  
                  <div className='flex flex-col md:flex-row text-3xl lg:text-2xl my-12 font-bold justify-center'>
                    <a target='_blank' href='http://www.get-the-tix.xyz/' className='mr-20'>View Site</a>
                    <a target='_blank' href='https://github.com/andkolbe/get-the-tix' className='my-10 md:my-0 mr-20'>View Source Code</a>
                    <a target='_blank' href='https://ak-portfolio.s3.amazonaws.com/Get-The-Tix-Design-Document.pdf' className='md:my-0'>Design Document</a>
                  </div>
                </div>

                {/* Go Websockets */}
                <div className='mb-40' data-aos='fade-left'>
                  <h4 className='text-4xl lg:text-3xl text-gray-700 text-left'>Go Websockets</h4>
                  <hr className='border-black mt-2 mb-4 w-1/4' />
                  <h6 className='text-lg lg:text-md'>A chat room app that lets users sign up and chat with their friends in real time using Websockets</h6>
                  <div className='text-2xl lg:text-xl mt-4'>Tech Used</div>
                  <div className='flex justify-center mt-4 text-5xl lg:text-4xl text-black'>
              
                    <SiGo className='mx-5' />
                    <SiJavascript className='mx-5' />
                    <SiMysql className='mx-5' />
                    <SiBootstrap className='mx-5' />
                  </div>
                  
                  <div className='text-xl lg:text-lg mt-10'>Backend written in Go</div>
                  <div className='text-xl lg:text-lg'>Frontend written in Javascript</div>
                  <div className='text-xl lg:text-lg'>Unit and Table Tests in all packages</div>
                  <div className='text-xl lg:text-lg'>Websockets implemented with Gorilla Websockets</div>
                  <div className='text-xl lg:text-lg'>Users and Sessions saved in MySQL</div>
                  <div className='text-xl lg:text-lg'>Deployed with Heroku</div>
                  
                  <div className='flex flex-col md:flex-row text-3xl lg:text-2xl my-12 font-bold justify-center'>
                    <a target='_blank' href='https://go-websocket.herokuapp.com/' className='mr-20'>View Site</a>
                    <a target='_blank' href='https://github.com/andkolbe/go-websockets' className='my-10 md:my-0 mr-20'>View Source Code</a>
                    <a target='_blank' href='https://ak-portfolio.s3.amazonaws.com/Go-Websockets-Design-Document.pdf' className='md:my-0'>Design Document</a>
                  </div>
                </div>


                
                {/* Chirper
                <div class='mb-40' data-aos='fade-right'>
                  <h4 className='text-4xl lg:text-3xl text-gray-700 text-left'>Chirper</h4>
                  <hr className='border-black mt-2 mb-4 w-1/4' />
                  <h6 className='text-lg lg:text-md'>A social networking service that allows users to post and interact with messages. Registered users can post chirps, but unregistered users can only read them.</h6>
                  <div className='text-2xl lg:text-xl mt-4'>Tech Used</div>
                  <div className='flex justify-center mt-4 text-5xl lg:text-4xl text-black'>
                    <FaNodeJs className='mx-5' />
                    <SiMongodb className='mx-5' />
                    <SiRedis className='mx-5' />
                    <SiBootstrap className='mx-5' />
                  </div>
                  <div className='text-xl lg:text-lg mt-10'>Mongoose ODM Library</div>
                  <div className='text-xl lg:text-lg'>Sessions stored on MongoDB Atlas</div>
                  <div className='text-xl lg:text-lg'>Authentication via Passport Google and Twitter OAuth</div>
                  <div className='text-xl lg:text-lg'>Caching with Redis</div>
                  <div className='text-xl lg:text-lg'>Integration Testing with Jest and Puppeteer</div>
                  <div className='text-xl lg:text-lg'>Deployed with Heroku</div>
                  
                  <div className='flex flex-col md:flex-row text-3xl lg:text-2xl my-12 font-bold justify-center'>
                    <a target='_blank' href='https://chirper-handlebars.herokuapp.com/' className='mr-20'>View Site</a>
                    <a target='_blank' href='https://github.com/andkolbe/Chirper-Mongo' className='my-4 md:my-0 mr-20'>View Source Code</a>
                    <a target='_blank' href='' className='md:my-0'>Design Document</a>
                  </div>
                </div> */}

                



              </div>
            </div>
          </div>
        </section>

        {/* Contact Me */}
        <section className='relative block bg-black'>

          {/* Polygon */}
          <div
            className='absolute top-0 left-0 right-0 bottom-auto w-full -mt-20 overflow-hidden pointer-events-none'
            style={{ height: '80px', transform: 'translateZ(0)' }}
          >
            <svg
              className='absolute bottom-0 overflow-hidden'
              xmlns='http://www.w3.org/2000/svg'
              preserveAspectRatio='none'
              version='1.1'
              viewBox='0 0 2560 100'
              x='0'
              y='0'
            >
              <polygon
                className='text-black fill-current'
                points='2560 0 2560 100 0 100'
              ></polygon>
            </svg>
          </div>



          {/* Content */}
          <div className='container px-4 py-10 mx-auto lg:pt-14'>
            <div className='flex flex-wrap justify-center text-center' >
              <div className='w-full px-4 lg:w-7/12'>
                <h2 className='text-5xl lg:text-4xl font-semibold text-gray-100'>
                  Contact Me
          </h2>
                <p className='mt-6 mb-4 text-xl lg:text-lg leading-relaxed text-gray-500'>
                  If you'd like to work together, contact me at
        <a className='font-bold emailText' href='mailto:kolbe1129@gmail.com' rel='noreferrer' target='_blank'> kolbe1129@gmail.com </a>
        or at any of the links below
          </p>
              </div>
            </div>
            <div className='flex justify-center mt-6 text-7xl lg:text-6xl text-gray-100'>
              <a target='_blank' href='https://www.linkedin.com/in/andrewkolbe/' className='mx-5'><AiFillLinkedin /></a>
              <a target='_blank' href='https://github.com/andkolbe' className='mx-5'><AiFillGithub /></a>
              <a target='_blank' href='mailto:kolbe1129@gmail.com' className='mx-5'><AiOutlineMail /></a>
            </div>
          </div>
        </section>
        {/* Nav */}


        <div className='text-center bg-black py-4 text-xl lg:text-lg'>
          <p className='text-gray-100'>Designed with NextJS and Tailwind<a className='font-bold pl-10' target='_blank' href='https://github.com/andkolbe/Portfolio'> View Source Code </a></p>
        </div>


      </main>
    </SimpleReactLightbox>
  );
}

