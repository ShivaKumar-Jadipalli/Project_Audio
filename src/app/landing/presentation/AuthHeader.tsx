interface AuthHeaderProps {
  title?: string;
  lead?: string;
}

function AuthHeader({ title, lead }: AuthHeaderProps) {
  return (
    <>
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 py-7 lg:py-8 pt-9">
        <div className="container mx-auto">
          <div className="text-center mb-7">
            <div className="flex justify-center">
              <div className="px-5 lg:w-2/5 md:w-3/5 xl:w-1/4">
                {title && <h1 className="text-white text-2xl font-bold">{title}</h1>}
                {lead && <p className="text-white text-lg">{lead}</p>}
              </div>
            </div>
          </div>
        </div>
        <div className="relative -z-10">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            className="w-full h-10 fill-current text-gray-100"
          >
            <polygon points="2560 0 2560 100 0 100" />
          </svg>
        </div>
      </div>
    </>
  );
}

export default AuthHeader;
