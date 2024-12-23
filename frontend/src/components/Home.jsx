import React from 'react';
import { Card, CardContent } from '../components/ui/card';
import Poster from '../assets/poster.png'

const Home = () => {
  return (
    <div className="min-h-screen bg-[#fff8e6]">
      <div className="w-full py-8">
        <img 
          src={Poster}
          className="w-[90%] h-auto mx-auto mt-16 mb-16 block object-cover border border-black rounded-lg" 
          alt="Ideathon Poster"
        />
      </div>

      {/* About Virina Section */}
      <section className="py-16 bg-[#fff8e6] relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#2d2d2d]">
            About Virina
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center relative">
            <div className="text-[#2d2d2d] mb-8 leading-relaxed">
              <p>Your paragraph about Virina goes here. Add your content describing Virina, its mission, values, and any other relevant information that you want to showcase.</p>
            </div>
            <div className="text-center">
              <img 
                src={Poster}
                className="w-full h-auto rounded-lg shadow-lg"
                alt="About Virina"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Ideathon Section */}
      <section className="py-16 bg-[#fff8e6] relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#2d2d2d]">
            About the Ideathon
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center relative">
            <div>
              <h3 className="text-2xl text-[#b8860b] mb-4 font-semibold">
                Transform Your Ideas Into Reality
              </h3>
              <p className="text-[#2d2d2d] mb-8 leading-relaxed">
                Join us for an exciting journey of innovation and creativity. Our ideathon brings together brilliant minds to solve real-world challenges through technological solutions.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <Card className="bg-[#fffdf7] shadow-md border border-[#daa52019]">
                  <CardContent className="p-6 text-center">
                    <h4 className="text-2xl text-[#b8860b] font-bold mb-2">$10,000</h4>
                    <p>Prize Pool</p>
                  </CardContent>
                </Card>
                <Card className="bg-[#fffdf7] shadow-md border border-[#daa52019]">
                  <CardContent className="p-6 text-center">
                    <h4 className="text-2xl text-[#b8860b] font-bold mb-2">48 Hours</h4>
                    <p>of Innovation</p>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { title: "Mentorship", desc: "Get guidance from industry experts" },
                { title: "Networking", desc: "Connect with like-minded innovators" },
                { title: "Workshops", desc: "Learn new skills and technologies" },
                { title: "Resources", desc: "Access to tools and platforms" }
              ].map((feature, idx) => (
                <Card 
                  key={idx} 
                  className="bg-[#fffdf7] shadow-md border border-[#daa52019] transition-transform duration-200 hover:-translate-y-1"
                >
                  <CardContent className="p-6">
                    <h4 className="text-lg text-[#b8860b] font-semibold mb-2">{feature.title}</h4>
                    <p className="text-[#2d2d2d]">{feature.desc}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Sponsors Section */}
      <section className="py-16 bg-[#fff8e6] my-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-[#2d2d2d]">
            Our Sponsors
          </h2>
          <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-8">
            {[1, 2, 3, 4].map((num) => (
              <Card 
                key={num}
                className="bg-white shadow-md border border-[#daa52019] h-24 flex items-center justify-center transition-transform duration-200 hover:-translate-y-1"
              >
                <CardContent className="p-6 flex items-center justify-center">
                  <img 
                    src={`/api/placeholder/120/60`}
                    className="max-h-16 w-auto object-contain"
                    alt={`Sponsor ${num}`}
                  />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;