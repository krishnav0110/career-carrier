import * as React from "react";

function MyComponent(props) {
  return (
    <div className="flex flex-col px-12 pt-6 pb-12 bg-white max-md:px-5">
      <div className="flex flex-col max-w-full w-[797px]">
        <div className="flex gap-5 justify-between w-full max-md:flex-wrap max-md:max-w-full">
          <div className="text-2xl font-black leading-10 text-indigo-900">
            Career
            <br />
            Carrier
          </div>
          <div className="flex gap-5 justify-between self-start mt-3 text-sm leading-6 text-slate-500 max-md:flex-wrap max-md:max-w-full">
            <div>Careers</div>
            <div>About</div>
            <div>Contact</div>
            <div className="text-slate-500">Help</div>
            <div className="flex-auto text-slate-500">Take Test</div>
          </div>
        </div>
        <div className="self-end mt-8 text-4xl font-medium leading-10 whitespace-nowrap text-slate-900">
          Our Community
        </div>
      </div>
      <div className="mt-16 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
          <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow pt-8 pr-2.5 pb-4 pl-8 mx-auto w-full bg-zinc-100 max-md:pl-5 max-md:mt-10">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e4fdc35e59e5a4bb1a81e58901dcd6fd33f4181b03cf2eafa3e9b0e0f8e2aa4c?apiKey=d105f6bd6bb4472bba21449537e0b092&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4fdc35e59e5a4bb1a81e58901dcd6fd33f4181b03cf2eafa3e9b0e0f8e2aa4c?apiKey=d105f6bd6bb4472bba21449537e0b092&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4fdc35e59e5a4bb1a81e58901dcd6fd33f4181b03cf2eafa3e9b0e0f8e2aa4c?apiKey=d105f6bd6bb4472bba21449537e0b092&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4fdc35e59e5a4bb1a81e58901dcd6fd33f4181b03cf2eafa3e9b0e0f8e2aa4c?apiKey=d105f6bd6bb4472bba21449537e0b092&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4fdc35e59e5a4bb1a81e58901dcd6fd33f4181b03cf2eafa3e9b0e0f8e2aa4c?apiKey=d105f6bd6bb4472bba21449537e0b092&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4fdc35e59e5a4bb1a81e58901dcd6fd33f4181b03cf2eafa3e9b0e0f8e2aa4c?apiKey=d105f6bd6bb4472bba21449537e0b092&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4fdc35e59e5a4bb1a81e58901dcd6fd33f4181b03cf2eafa3e9b0e0f8e2aa4c?apiKey=d105f6bd6bb4472bba21449537e0b092&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4fdc35e59e5a4bb1a81e58901dcd6fd33f4181b03cf2eafa3e9b0e0f8e2aa4c?apiKey=d105f6bd6bb4472bba21449537e0b092&"
                className="max-w-full aspect-[1.11] w-[329px]"
              />
              <div className="self-center mt-2.5 text-5xl font-black text-black whitespace-nowrap">
                Arjun Patel
              </div>
              <div className="self-center mt-1.5 text-xl text-black">
                Product Manager
              </div>
              <div className="mt-4 text-base leading-7 text-center text-slate-500">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridimassa
                quis enim.
              </div>
              <div className="flex gap-5 justify-between mt-5 w-full whitespace-nowrap">
                <div className="flex gap-5 justify-between self-start">
                  <div className="flex flex-col flex-1">
                    <div className="text-2xl font-extrabold leading-6 text-indigo-950">
                      415K+
                    </div>
                    <div className="mt-2 text-xs font-light leading-6 text-blue-900">
                      FOLLOWERS
                    </div>
                  </div>
                  <div className="flex flex-col flex-1">
                    <div className="text-2xl font-extrabold leading-6 text-indigo-950">
                      2.1M
                    </div>
                    <div className="mt-2 text-xs font-light leading-6 text-blue-900">
                      LIKES
                    </div>
                  </div>
                </div>
                <div className="grow justify-center px-10 py-3 text-base font-medium leading-7 text-center text-white rounded-sm bg-indigo-950 max-md:px-5">
                  FOLLOW
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow pt-8 pr-10 pb-4 mx-auto w-full bg-zinc-100 max-md:mt-10">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e4fdc35e59e5a4bb1a81e58901dcd6fd33f4181b03cf2eafa3e9b0e0f8e2aa4c?apiKey=d105f6bd6bb4472bba21449537e0b092&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4fdc35e59e5a4bb1a81e58901dcd6fd33f4181b03cf2eafa3e9b0e0f8e2aa4c?apiKey=d105f6bd6bb4472bba21449537e0b092&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4fdc35e59e5a4bb1a81e58901dcd6fd33f4181b03cf2eafa3e9b0e0f8e2aa4c?apiKey=d105f6bd6bb4472bba21449537e0b092&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4fdc35e59e5a4bb1a81e58901dcd6fd33f4181b03cf2eafa3e9b0e0f8e2aa4c?apiKey=d105f6bd6bb4472bba21449537e0b092&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4fdc35e59e5a4bb1a81e58901dcd6fd33f4181b03cf2eafa3e9b0e0f8e2aa4c?apiKey=d105f6bd6bb4472bba21449537e0b092&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4fdc35e59e5a4bb1a81e58901dcd6fd33f4181b03cf2eafa3e9b0e0f8e2aa4c?apiKey=d105f6bd6bb4472bba21449537e0b092&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4fdc35e59e5a4bb1a81e58901dcd6fd33f4181b03cf2eafa3e9b0e0f8e2aa4c?apiKey=d105f6bd6bb4472bba21449537e0b092&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4fdc35e59e5a4bb1a81e58901dcd6fd33f4181b03cf2eafa3e9b0e0f8e2aa4c?apiKey=d105f6bd6bb4472bba21449537e0b092&"
                className="max-w-full aspect-[1.11] w-[329px]"
              />
              <div className="self-center mt-2.5 text-5xl font-black text-black whitespace-nowrap">
                Arjun Patel
              </div>
              <div className="self-center mt-1.5 text-xl text-black">
                Product Manager
              </div>
              <div className="mt-4 text-base leading-7 text-center text-slate-500">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridimassa
                quis enim.
              </div>
              <div className="flex gap-5 justify-between mt-5 w-full whitespace-nowrap">
                <div className="flex gap-5 justify-between self-start">
                  <div className="flex flex-col flex-1">
                    <div className="text-2xl font-extrabold leading-6 text-indigo-950">
                      415K+
                    </div>
                    <div className="mt-2 text-xs font-light leading-6 text-blue-900">
                      FOLLOWERS
                    </div>
                  </div>
                  <div className="flex flex-col flex-1">
                    <div className="text-2xl font-extrabold leading-6 text-indigo-950">
                      2.1M
                    </div>
                    <div className="mt-2 text-xs font-light leading-6 text-blue-900">
                      LIKES
                    </div>
                  </div>
                </div>
                <div className="grow justify-center px-10 py-3 text-base font-medium leading-7 text-center text-white rounded-sm bg-indigo-950 max-md:px-5">
                  FOLLOW
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow pt-8 pr-2.5 pb-4 pl-8 mx-auto w-full bg-zinc-100 max-md:pl-5 max-md:mt-10">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e4fdc35e59e5a4bb1a81e58901dcd6fd33f4181b03cf2eafa3e9b0e0f8e2aa4c?apiKey=d105f6bd6bb4472bba21449537e0b092&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4fdc35e59e5a4bb1a81e58901dcd6fd33f4181b03cf2eafa3e9b0e0f8e2aa4c?apiKey=d105f6bd6bb4472bba21449537e0b092&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4fdc35e59e5a4bb1a81e58901dcd6fd33f4181b03cf2eafa3e9b0e0f8e2aa4c?apiKey=d105f6bd6bb4472bba21449537e0b092&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4fdc35e59e5a4bb1a81e58901dcd6fd33f4181b03cf2eafa3e9b0e0f8e2aa4c?apiKey=d105f6bd6bb4472bba21449537e0b092&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4fdc35e59e5a4bb1a81e58901dcd6fd33f4181b03cf2eafa3e9b0e0f8e2aa4c?apiKey=d105f6bd6bb4472bba21449537e0b092&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4fdc35e59e5a4bb1a81e58901dcd6fd33f4181b03cf2eafa3e9b0e0f8e2aa4c?apiKey=d105f6bd6bb4472bba21449537e0b092&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4fdc35e59e5a4bb1a81e58901dcd6fd33f4181b03cf2eafa3e9b0e0f8e2aa4c?apiKey=d105f6bd6bb4472bba21449537e0b092&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4fdc35e59e5a4bb1a81e58901dcd6fd33f4181b03cf2eafa3e9b0e0f8e2aa4c?apiKey=d105f6bd6bb4472bba21449537e0b092&"
                className="max-w-full aspect-[1.11] w-[329px]"
              />
              <div className="self-center mt-2.5 text-5xl font-black text-black whitespace-nowrap">
                Arjun Patel
              </div>
              <div className="self-center mt-1.5 text-xl text-black">
                Product Manager
              </div>
              <div className="mt-4 text-base leading-7 text-center text-slate-500">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridimassa
                quis enim.
              </div>
              <div className="flex gap-5 justify-between mt-5 w-full whitespace-nowrap">
                <div className="flex gap-5 justify-between self-start">
                  <div className="flex flex-col flex-1">
                    <div className="text-2xl font-extrabold leading-6 text-indigo-950">
                      415K+
                    </div>
                    <div className="mt-2 text-xs font-light leading-6 text-blue-900">
                      FOLLOWERS
                    </div>
                  </div>
                  <div className="flex flex-col flex-1">
                    <div className="text-2xl font-extrabold leading-6 text-indigo-950">
                      2.1M
                    </div>
                    <div className="mt-2 text-xs font-light leading-6 text-blue-900">
                      LIKES
                    </div>
                  </div>
                </div>
                <div className="grow justify-center px-10 py-3 text-base font-medium leading-7 text-center text-white rounded-sm bg-indigo-950 max-md:px-5">
                  FOLLOW
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-16 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0 max-md:">
          <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow pt-8 pr-2.5 pb-4 pl-8 mx-auto w-full bg-zinc-100 max-md:pl-5 max-md:mt-10">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e4fdc35e59e5a4bb1a81e58901dcd6fd33f4181b03cf2eafa3e9b0e0f8e2aa4c?apiKey=d105f6bd6bb4472bba21449537e0b092&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4fdc35e59e5a4bb1a81e58901dcd6fd33f4181b03cf2eafa3e9b0e0f8e2aa4c?apiKey=d105f6bd6bb4472bba21449537e0b092&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4fdc35e59e5a4bb1a81e58901dcd6fd33f4181b03cf2eafa3e9b0e0f8e2aa4c?apiKey=d105f6bd6bb4472bba21449537e0b092&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4fdc35e59e5a4bb1a81e58901dcd6fd33f4181b03cf2eafa3e9b0e0f8e2aa4c?apiKey=d105f6bd6bb4472bba21449537e0b092&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4fdc35e59e5a4bb1a81e58901dcd6fd33f4181b03cf2eafa3e9b0e0f8e2aa4c?apiKey=d105f6bd6bb4472bba21449537e0b092&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4fdc35e59e5a4bb1a81e58901dcd6fd33f4181b03cf2eafa3e9b0e0f8e2aa4c?apiKey=d105f6bd6bb4472bba21449537e0b092&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4fdc35e59e5a4bb1a81e58901dcd6fd33f4181b03cf2eafa3e9b0e0f8e2aa4c?apiKey=d105f6bd6bb4472bba21449537e0b092&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4fdc35e59e5a4bb1a81e58901dcd6fd33f4181b03cf2eafa3e9b0e0f8e2aa4c?apiKey=d105f6bd6bb4472bba21449537e0b092&"
                className="max-w-full aspect-[1.11] w-[329px]"
              />
              <div className="self-center mt-2.5 text-5xl font-black text-black whitespace-nowrap">
                Arjun Patel
              </div>
              <div className="self-center mt-1.5 text-xl text-black">
                Product Manager
              </div>
              <div className="mt-4 text-base leading-7 text-center text-slate-500">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridimassa
                quis enim.
              </div>
              <div className="flex gap-5 justify-between mt-5 w-full whitespace-nowrap">
                <div className="flex gap-5 justify-between self-start">
                  <div className="flex flex-col flex-1">
                    <div className="text-2xl font-extrabold leading-6 text-indigo-950">
                      415K+
                    </div>
                    <div className="mt-2 text-xs font-light leading-6 text-blue-900">
                      FOLLOWERS
                    </div>
                  </div>
                  <div className="flex flex-col flex-1">
                    <div className="text-2xl font-extrabold leading-6 text-indigo-950">
                      2.1M
                    </div>
                    <div className="mt-2 text-xs font-light leading-6 text-blue-900">
                      LIKES
                    </div>
                  </div>
                </div>
                <div className="grow justify-center px-10 py-3 text-base font-medium leading-7 text-center text-white rounded-sm bg-indigo-950 max-md:px-5">
                  FOLLOW
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow pt-8 pr-2.5 pb-4 pl-8 mx-auto w-full bg-zinc-100 max-md:pl-5 max-md:mt-10">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e4fdc35e59e5a4bb1a81e58901dcd6fd33f4181b03cf2eafa3e9b0e0f8e2aa4c?apiKey=d105f6bd6bb4472bba21449537e0b092&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4fdc35e59e5a4bb1a81e58901dcd6fd33f4181b03cf2eafa3e9b0e0f8e2aa4c?apiKey=d105f6bd6bb4472bba21449537e0b092&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4fdc35e59e5a4bb1a81e58901dcd6fd33f4181b03cf2eafa3e9b0e0f8e2aa4c?apiKey=d105f6bd6bb4472bba21449537e0b092&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4fdc35e59e5a4bb1a81e58901dcd6fd33f4181b03cf2eafa3e9b0e0f8e2aa4c?apiKey=d105f6bd6bb4472bba21449537e0b092&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4fdc35e59e5a4bb1a81e58901dcd6fd33f4181b03cf2eafa3e9b0e0f8e2aa4c?apiKey=d105f6bd6bb4472bba21449537e0b092&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4fdc35e59e5a4bb1a81e58901dcd6fd33f4181b03cf2eafa3e9b0e0f8e2aa4c?apiKey=d105f6bd6bb4472bba21449537e0b092&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4fdc35e59e5a4bb1a81e58901dcd6fd33f4181b03cf2eafa3e9b0e0f8e2aa4c?apiKey=d105f6bd6bb4472bba21449537e0b092&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4fdc35e59e5a4bb1a81e58901dcd6fd33f4181b03cf2eafa3e9b0e0f8e2aa4c?apiKey=d105f6bd6bb4472bba21449537e0b092&"
                className="max-w-full aspect-[1.11] w-[329px]"
              />
              <div className="self-center mt-2.5 text-5xl font-black text-black whitespace-nowrap">
                Arjun Patel
              </div>
              <div className="self-center mt-1.5 text-xl text-black">
                Product Manager
              </div>
              <div className="mt-4 text-base leading-7 text-center text-slate-500">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridimassa
                quis enim.
              </div>
              <div className="flex gap-5 justify-between mt-5 w-full whitespace-nowrap">
                <div className="flex gap-5 justify-between self-start">
                  <div className="flex flex-col flex-1">
                    <div className="text-2xl font-extrabold leading-6 text-indigo-950">
                      415K+
                    </div>
                    <div className="mt-2 text-xs font-light leading-6 text-blue-900">
                      FOLLOWERS
                    </div>
                  </div>
                  <div className="flex flex-col flex-1">
                    <div className="text-2xl font-extrabold leading-6 text-indigo-950">
                      2.1M
                    </div>
                    <div className="mt-2 text-xs font-light leading-6 text-blue-900">
                      LIKES
                    </div>
                  </div>
                </div>
                <div className="grow justify-center px-10 py-3 text-base font-medium leading-7 text-center text-white rounded-sm bg-indigo-950 max-md:px-5">
                  FOLLOW
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow pt-8 pr-2.5 pb-4 pl-8 mx-auto w-full bg-zinc-100 max-md:pl-5 max-md:mt-10">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e4fdc35e59e5a4bb1a81e58901dcd6fd33f4181b03cf2eafa3e9b0e0f8e2aa4c?apiKey=d105f6bd6bb4472bba21449537e0b092&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4fdc35e59e5a4bb1a81e58901dcd6fd33f4181b03cf2eafa3e9b0e0f8e2aa4c?apiKey=d105f6bd6bb4472bba21449537e0b092&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4fdc35e59e5a4bb1a81e58901dcd6fd33f4181b03cf2eafa3e9b0e0f8e2aa4c?apiKey=d105f6bd6bb4472bba21449537e0b092&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4fdc35e59e5a4bb1a81e58901dcd6fd33f4181b03cf2eafa3e9b0e0f8e2aa4c?apiKey=d105f6bd6bb4472bba21449537e0b092&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4fdc35e59e5a4bb1a81e58901dcd6fd33f4181b03cf2eafa3e9b0e0f8e2aa4c?apiKey=d105f6bd6bb4472bba21449537e0b092&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4fdc35e59e5a4bb1a81e58901dcd6fd33f4181b03cf2eafa3e9b0e0f8e2aa4c?apiKey=d105f6bd6bb4472bba21449537e0b092&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4fdc35e59e5a4bb1a81e58901dcd6fd33f4181b03cf2eafa3e9b0e0f8e2aa4c?apiKey=d105f6bd6bb4472bba21449537e0b092&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e4fdc35e59e5a4bb1a81e58901dcd6fd33f4181b03cf2eafa3e9b0e0f8e2aa4c?apiKey=d105f6bd6bb4472bba21449537e0b092&"
                className="max-w-full aspect-[1.11] w-[329px]"
              />
              <div className="self-center mt-2.5 text-5xl font-black text-black whitespace-nowrap">
                Arjun Patel
              </div>
              <div className="self-center mt-1.5 text-xl text-black">
                Product Manager
              </div>
              <div className="mt-4 text-base leading-7 text-center text-slate-500">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa. Cum sociis natoque
                penatibus et magnis dis parturient montes, nascetur ridimassa
                quis enim.
              </div>
              <div className="flex gap-5 justify-between mt-5 w-full whitespace-nowrap">
                <div className="flex gap-5 justify-between self-start">
                  <div className="flex flex-col flex-1">
                    <div className="text-2xl font-extrabold leading-6 text-indigo-950">
                      415K+
                    </div>
                    <div className="mt-2 text-xs font-light leading-6 text-blue-900">
                      FOLLOWERS
                    </div>
                  </div>
                  <div className="flex flex-col flex-1">
                    <div className="text-2xl font-extrabold leading-6 text-indigo-950">
                      2.1M
                    </div>
                    <div className="mt-2 text-xs font-light leading-6 text-blue-900">
                      LIKES
                    </div>
                  </div>
                </div>
                <div className="grow justify-center px-10 py-3 text-base font-medium leading-7 text-center text-white rounded-sm bg-indigo-950 max-md:px-5">
                  FOLLOW
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


