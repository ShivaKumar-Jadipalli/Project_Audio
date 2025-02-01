interface AuthHeaderProps {
  title?: string;
  lead?: string;
}

function AuthHeader({ title, lead }: AuthHeaderProps) {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-indigo-600 py-7 lg:py-8 pt-9">
      <div className="container mx-auto text-center mb-7">
        <div className="flex justify-center">
          <div className="px-5 lg:w-2/5 md:w-3/5 xl:w-1/4">
            {title && <h1 className="text-white text-2xl font-bold">{title}</h1>}
            {lead && <p className="text-white text-lg">{lead}</p>}
          </div>
        </div>
      </div>
    </div>
  );
}

function Pricing() {
  return (
    <>
      <AuthHeader title="Choose the best plan for your business" lead="" />
      <div className="container mx-auto mt-8 pb-5">
        <div className="flex flex-col md:flex-row justify-center mb-3">
          {/* Bravo Pack */}
          <div className="border-0 text-center mb-4 bg-white shadow-lg rounded-lg">
            <div className="bg-transparent py-3">
              <h4 className="text-xl font-bold text-blue-600 uppercase">Bravo Pack</h4>
            </div>
            <div className="px-7">
              <div className="text-4xl font-extrabold">$49</div>
              <span className="text-gray-500">per application</span>
              <ul className="list-none mt-4 space-y-3">
                <li className="flex items-center space-x-2">
                  <div className="bg-blue-500 text-white p-2 rounded-full">
                    <i className="fas fa-terminal"></i>
                  </div>
                  <span>Complete documentation</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="bg-blue-500 text-white p-2 rounded-full">
                    <i className="fas fa-pen-fancy"></i>
                  </div>
                  <span>Working materials in Sketch</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="bg-blue-500 text-white p-2 rounded-full">
                    <i className="fas fa-hdd"></i>
                  </div>
                  <span>2GB cloud storage</span>
                </li>
              </ul>
              <button className="bg-blue-600 text-white px-4 py-2 rounded mt-4">
                Start free trial
              </button>
            </div>
            <div className="bg-transparent py-2">
              <a href="#" className="text-blue-600 underline">
                Request a demo
              </a>
            </div>
          </div>

          {/* Alpha Pack */}
          <div className="bg-gradient-to-r from-green-500 to-green-700 text-white text-center shadow-lg rounded-lg p-4">
            <div className="bg-transparent py-3">
              <h4 className="text-xl font-bold uppercase">Alpha Pack</h4>
            </div>
            <div className="px-7">
              <div className="text-5xl font-extrabold">$199</div>
              <span className="text-white">per application</span>
              <ul className="list-none mt-4 space-y-3">
                <li className="flex items-center space-x-2">
                  <div className="bg-white text-gray-700 p-2 rounded-full">
                    <i className="fas fa-terminal"></i>
                  </div>
                  <span>Complete documentation</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="bg-white text-gray-700 p-2 rounded-full">
                    <i className="fas fa-pen-fancy"></i>
                  </div>
                  <span>Working materials in Sketch</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="bg-white text-gray-700 p-2 rounded-full">
                    <i className="fas fa-hdd"></i>
                  </div>
                  <span>2GB cloud storage</span>
                </li>
              </ul>
              <button className="bg-gray-800 text-white px-4 py-2 rounded mt-4">
                Start free trial
              </button>
            </div>
            <div className="bg-transparent py-2">
              <a href="#" className="underline">
                Contact sales
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Pricing;
