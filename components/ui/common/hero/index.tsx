export default function Hero() {
  return (
    <section className="lg:2/6 text-left my-10 md:my-28 bg-white rounded-xl">
      <div className="text-2xl md:text-6xl font-semibold text-gray-900 leading-none text-center md:text-start">
        Grow your career as a developer
      </div>
      <div className="mt-6 text-xl md:text-2xl font-light text-black antialiased text-center md:text-start">
        Learn programming and web development the easy way! Get unlimited access
        to all of our courses.
      </div>
      <div className="mt-5 sm:mt-8 flex md:justify-start justify-center">
        <div className="rounded-md shadow">
          <a
            href="#"
            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
          >
            Get started
          </a>
        </div>
      </div>
    </section>
  );
}
