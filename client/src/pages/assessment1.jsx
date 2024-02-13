import * as React from "react";

function MyComponent(props) {
  return (
    <div className="flex flex-col pt-2.5 pr-16 pb-12 pl-6 bg-white max-md:px-5">
      <div className="flex gap-5 justify-between max-w-full whitespace-nowrap w-[579px] max-md:flex-wrap">
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
      <div className="self-center mt-36 w-full max-w-[1284px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
          <div className="flex flex-col w-[42%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col mt-24 max-md:mt-10 max-md:max-w-full">
              <div className="text-4xl font-medium leading-10 text-slate-900 max-md:max-w-full">
                Assesment
              </div>
              <div className="flex flex-col justify-between p-11 mt-8 text-lg bg-white rounded-3xl max-md:px-5 max-md:max-w-full">
                <div className="flex gap-5 justify-between text-white whitespace-nowrap">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/6b2da68832ab11719659a7465aae46471c83f198b96cccbe767d4347746f356d?apiKey=d105f6bd6bb4472bba21449537e0b092&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/6b2da68832ab11719659a7465aae46471c83f198b96cccbe767d4347746f356d?apiKey=d105f6bd6bb4472bba21449537e0b092&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6b2da68832ab11719659a7465aae46471c83f198b96cccbe767d4347746f356d?apiKey=d105f6bd6bb4472bba21449537e0b092&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/6b2da68832ab11719659a7465aae46471c83f198b96cccbe767d4347746f356d?apiKey=d105f6bd6bb4472bba21449537e0b092&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/6b2da68832ab11719659a7465aae46471c83f198b96cccbe767d4347746f356d?apiKey=d105f6bd6bb4472bba21449537e0b092&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/6b2da68832ab11719659a7465aae46471c83f198b96cccbe767d4347746f356d?apiKey=d105f6bd6bb4472bba21449537e0b092&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/6b2da68832ab11719659a7465aae46471c83f198b96cccbe767d4347746f356d?apiKey=d105f6bd6bb4472bba21449537e0b092&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/6b2da68832ab11719659a7465aae46471c83f198b96cccbe767d4347746f356d?apiKey=d105f6bd6bb4472bba21449537e0b092&"
                    className="aspect-[1.39] w-[47px]"
                  />
                  <div className="justify-center self-start px-6 py-1.5 bg-green-600 rounded-3xl max-md:px-5">
                    Free
                  </div>
                </div>
                <div className="mt-5 text-3xl font-medium text-black">
                  Question 1
                </div>
                <div className="shrink-0 mt-6 bg-zinc-300 h-[30px]" />
                <div className="shrink-0 mt-6 bg-zinc-300 h-[30px]" />
                <div className="shrink-0 mt-5 bg-zinc-300 h-[30px]" />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/c177a27d40e14219da4d24a14fc6d2037290728dc8aa8e3e8c45d3799a4e38a9?apiKey=d105f6bd6bb4472bba21449537e0b092&"
                  className="mt-5 w-full aspect-[100] stroke-[1.419px] stroke-gray-200"
                />
                <div className="flex gap-3.5 justify-between mt-5 text-neutral-700">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/69188fe48f62e62e8c10acd3d59329b97692fb30bf21857816608bb0de4c7524?apiKey=d105f6bd6bb4472bba21449537e0b092&"
                    className="aspect-square w-[68px]"
                  />
                  <div className="flex-auto my-auto">29 Mb / Sec</div>
                </div>
                <div className="mt-5 text-base font-medium leading-10 text-center text-slate-500">
                  skip question
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[58%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/8c1dd68f5bfdabd6cb92377c4f50c22da3c9c5137376b9977ca4b93c92a7e426?apiKey=d105f6bd6bb4472bba21449537e0b092&"
              className="grow w-full aspect-[1.04] max-md:mt-10 max-md:max-w-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
}


