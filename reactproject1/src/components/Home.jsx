import React from 'react'
import vg from "../assets/2.webp";
import {
    AiFillGoogleCircle,
    AiFillAmazonCircle,
    AiFillYoutube,
    AiFillInstagram,
} from "react-icons/ai";
const Home = () => {
  return (
    <>
    <div className='home'  >
     <main>
        <h1>
          TechyStar  
        </h1>
        <p>
            Solution to all your problems
        </p>
     </main>
    </div>
    <div className='home2'>
    <img src={vg} alt="Graphics"/>

    <div>
    <p>
           We are your one and only solution to the tech problems you face
            every day. We are leading tech company whose aim is to increase the
            problem solving ability in children.
    </p>
    </div>
    </div>
    <div className="home3" id="about">
       <div>
       <h1>
        Who we are?
       </h1>
       <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Architecto deleniti ipsa explicabo qui, a quaerat reiciendis quo dolorum deserunt, amet nisi vero, maiores veniam quis dolore cum expedita rem tempora.
        Hic quasi harum, corporis totam esse enim omnis alias explicabo doloribus perspiciatis? Eligendi, porro perspiciatis fuga obcaecati enim eveniet dolorum ut officiis ab ducimus non nam in. Quae, pariatur esse!
        Hic reprehenderit ullam voluptas ipsum corporis non eum, eaque qui tenetur perspiciatis earum pariatur aut exercitationem quibusdam alias dolores corrupti ex! Delectus, architecto officiis perferendis non esse sit doloribus totam?
        Vel quos sed repudiandae praesentium vero. 
        Enim ea dignissimos amet velit ipsum impedit ut natus repellendus atque! Cupiditate, enim, reiciendis sed dolores aut dolorum et architecto sequi est maiores ducimus.
        Quibusdam vero fuga, repellat hic odio dolor porro rem commodi incidunt vel quod dicta natus numquam, sapiente explicabo ab accusantium nemo qui amet, quo minima quam. Molestias totam quibusdam laboriosam.
       </p>
       </div>
        
    </div>
    <div className="home4" id="brands">
        <div>
            <h1>
                Brands
            </h1>
            <article>
                <div style ={{
                    animationDelay:"0.3s"
                }}>
                    <AiFillGoogleCircle/>
                    <p>Google</p>
                </div>
                <div style ={{
                    animationDelay:"0.5s"
                }}>
                    <AiFillAmazonCircle/>
                    <p>Amazon</p>
                </div>
                <div style ={{
                    animationDelay:"0.7s"
                }}>
                    <AiFillYoutube/>
                    <p>Youtube</p>
                </div>
                <div style ={{
                    animationDelay:"1s"
                }}>
                    <AiFillInstagram/>
                    <p>Instagram</p>
                </div>
            </article>
        </div>
    </div>
    </>
  );
};

export default Home;