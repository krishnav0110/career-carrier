import * as React from "react";

function MyComponent(props) {
  return (
    <div className="flex flex-col items-center px-12 pt-6 pb-12 whitespace-nowrap bg-white max-md:px-5">
      <div className="flex gap-5 justify-between self-start max-w-full w-[579px] max-md:flex-wrap">
        <div className="text-2xl font-black leading-10 text-indigo-900">
          Career
          <br />
          Carrier
        </div>
        <div className="flex gap-5 justify-between self-start mt-3 text-sm leading-6 text-slate-500 max-md:flex-wrap max-md:max-w-full">
          <div className="grow">Careers</div>
          <div>About</div>
          <div>Contact</div>
          <div className="text-slate-500">Help</div>
          <div className="grow text-slate-500">Take Test</div>
        </div>
      </div>
      <div className="flex justify-center items-center px-16 py-9 mt-48 max-w-full text-3xl bg-[radial-gradient(164.42%_139.2%_at_0%_3.17%,rgba(0,150,255,0.32)_0%,rgba(255,222,106,0.26)_100%)] rounded-[50px] text-neutral-600 w-[800px] max-md:px-5 max-md:mt-10">
        <div className="flex flex-col max-w-full w-[400px]">
          <div className="self-center">Feedback Form</div>
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/b36b9571b73743bde4c077bb72bfe3dac126fb3fb624d9e509129d774e5c0ff3?apiKey=d105f6bd6bb4472bba21449537e0b092&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/b36b9571b73743bde4c077bb72bfe3dac126fb3fb624d9e509129d774e5c0ff3?apiKey=d105f6bd6bb4472bba21449537e0b092&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b36b9571b73743bde4c077bb72bfe3dac126fb3fb624d9e509129d774e5c0ff3?apiKey=d105f6bd6bb4472bba21449537e0b092&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/b36b9571b73743bde4c077bb72bfe3dac126fb3fb624d9e509129d774e5c0ff3?apiKey=d105f6bd6bb4472bba21449537e0b092&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/b36b9571b73743bde4c077bb72bfe3dac126fb3fb624d9e509129d774e5c0ff3?apiKey=d105f6bd6bb4472bba21449537e0b092&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/b36b9571b73743bde4c077bb72bfe3dac126fb3fb624d9e509129d774e5c0ff3?apiKey=d105f6bd6bb4472bba21449537e0b092&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/b36b9571b73743bde4c077bb72bfe3dac126fb3fb624d9e509129d774e5c0ff3?apiKey=d105f6bd6bb4472bba21449537e0b092&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/b36b9571b73743bde4c077bb72bfe3dac126fb3fb624d9e509129d774e5c0ff3?apiKey=d105f6bd6bb4472bba21449537e0b092&"
            className="mt-9 w-full aspect-[0.71]"
          />
        </div>
      </div>
      <div className="justify-center px-5 py-3 mt-11 text-base font-medium leading-7 text-center rounded-sm border-2 border-solid border-[color:var(--Colour-Main-Blue-900,#091133)] text-slate-900 max-md:mt-10">
        Discover our community
      </div>
    </div>
  );
}


