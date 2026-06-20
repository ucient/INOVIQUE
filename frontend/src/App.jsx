import React from "react";
import "./App.css";
import logo from "./assets/logo.jpg";

const App = () => {
  const content = [
    {
      title: "about us",
      subtext1:
        "Inovique is a consumer-driven innovation platform focused on identifying real-world frustrations, exploring potential solutions, and sharing product concepts with the community.",
      subtext2:
        "We believe that every meaningful innovation begins with a problem worth solving.",
    },
    {
      title: "mission",
      subtext1:
        "To discover unmet consumer needs and inspire innovative solutions through research, community insights, and strategic thinking.",
    },
    {
      title: "vision",
      subtext1:
        "To become a trusted platform where everyday frustrations become tomorrow's opportunities.",
    },
  ];
  return (
    <main className="min-h-screen bg-[url('https://images.unsplash.com/photo-1648071343677-fac075603d3c?q=80&w=2957&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center">
      <div className="w-full max-w-7xl mx-auto px-4 bg-blue-400">
        {/* Header Section */}
        <section className="h-screen flex flex-col gap-80 py-20">
          <header className="flex items-center gap-5">
            <div className="w-40 h-40 flex items-center justify-center bg-black rounded-full">
              <img src={logo} className="w-20 h-20 object-cover" />
            </div>
            <h3 className="uppercase text-white text-3xl">inovique</h3>
          </header>
          <section>
            <div className="w-fit flex flex-col">
              <h3 className="uppercase text-white font-medium text-[8rem] leading-tight tracking-widest">
                inovique
              </h3>

              <div className="flex justify-end text-2xl">
                <h6 className="text-white">Begins with Frustration</h6>
              </div>
            </div>
          </section>
        </section>

        {/* About us section */}
        <section className="h-screen flex flex-col gap-60 py-30 text-2xl">
          <div className="flex flex-col gap-15 text-white">
            {content.map((item, idx) => (
              <div key={idx} className="flex flex-col gap-5">
                <h4 className="uppercase">{item.title}</h4>
                <p>{item.lable}</p>
                <p className="p-3 bg-black">{item.subtext1}</p>
                {item.subtext2 && (
                  <p className="p-3 bg-black">{item.subtext2}</p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* 2 boxes */}
        <section className="h-screen flex flex-col gap-60 py-50 text-2xl">
          <div className="h-full flex justify-between text-white">
            <div className="p-10 flex flex-col justify-between bg-black">
              <h3>What We Do</h3>
              <div>
                <p>Collect consumer problems</p>
                <p>Research unmet needs</p>
                <p>Explore product opportunities</p>
                <p>Validate concepts through community feedback</p>
                <p>Publish innovation concepts</p>
              </div>
            </div>
            <div className="p-10 flex flex-col justify-between bg-black">
              <h3>What We Do</h3>
              <div>
                <p>Collect consumer problems</p>
                <p>Research unmet needs</p>
                <p>Explore product opportunities</p>
                <p>Validate concepts through community feedback</p>
                <p>Publish innovation concepts</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default App;
