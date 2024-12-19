import React from 'react';
import "./css/Home.css"
import { Button } from './ui/button';
import Navbar from "./shared/Navbar";
import Header from './shared/Header';


const Home = ()=>{
    return (
        <div className='home'>
            <Header />
            
            <div className='firstpart'>
            <div className='bodyphoto'>
                <img src='https://cdn.asce.org/asce-conferences/asce-ictd.org/hero-images/ictd-2025-glendale-az-hero.jpg?VersionId=hdWHFlwcEBvqjtdjzVSvbUkoKbjkNNx_'
                alt="Glendale"
                className='bodyphoto' />
            </div>
            <section id= "block" >
                <article>
                    <div>
                        <div className='content'>
                            <p className='text-black'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium recusandae eos iste consequatur dolore tenetur debitis in aperiam sit rem. Sint facilis laborum libero eaque vel natus reprehenderit, delectus explicabo!</p>
                            <p className='text-black'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque deleniti a laudantium est accusantium dolorum. Dolorem totam aperiam excepturi voluptates, dolores ipsam tempore neque molestiae. Qui neque doloremque libero ipsum?</p>

                        </div>
                        <h2>contribute to conference</h2>
                        <Button variant="outline">Button</Button>
                        <h2>coference co-chairs</h2>
                        <div className='aboutpeople'>
                            <img src= 
                            'https://cdn.asce.org/asce-conferences/asce-ictd.org/hero-images/ictd-2025-glendale-az-hero.jpg?VersionId=hdWHFlwcEBvqjtdjzVSvbUkoKbjkNNx_'
                            alt="Glendale"
                            className='aboutpeople'
                            width="189"
                            height="189" />
                            <em className='text'>director , erizona</em>


                        </div>
                    </div>
                </article>
            </section>
            </div>
            <div>
                <img src="https://cdn.asce.org/asce-conferences/asce-ictd.org/venue/renaissance-hotel-glendale-az.jpg?VersionId=cXo0U_E5D_dXnAjKZfSH6P9ByebuV8vS"
                alt="pic"
                className='pic' />
                
            </div>
        </div>
    )
} 
export default  Home;  //exporting the component to use it in other files
