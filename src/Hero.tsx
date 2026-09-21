function Hero() {
  return (
    <section className="bg-[#edf1ff] px-10 py-20">
      <div className="max-w-7xl mx-auto grid grid-cols-2 gap-10 items-center">

        {/* Left side */}
        <div>

          <h1 className="text-6xl font-bold leading-tight tracking-tight text-[#102764]">
            There’s a better
            <br />
            way to <span className="text-[#3156f5]">assess</span>
            <br />
            developers
          </h1>

          <p className="mt-7 max-w-xl text-lg leading-8 text-[#092864]">
            Codejudge is #1 tech hiring platform that enables you to
            source, assess, interview and hire top developers remotely.
          </p>

        </div>

        {/* Right side */}
        <div className="relative h-[500px]">

          {/* Background browser */}
          <div className="absolute right-0 top-0 h-[430px] w-[650px] rounded-md bg-[#eef0f9] shadow-lg">

            {/* Browser top bar */}
            <div className="flex h-14 items-center gap-2 border-b bg-white px-4">

              <span className="h-2 w-2 rounded-full bg-orange-300"></span>
              <span className="h-2 w-2 rounded-full bg-green-300"></span>
              <span className="h-2 w-2 rounded-full bg-red-300"></span>

              <div className="ml-3 h-4 w-3/4 rounded bg-[#f4f5fb]"></div>

            </div>

          </div>

          {/* Candidate card */}
          <div className="absolute left-0 top-20 z-10 w-[57%] rounded-2xl bg-white p-7 shadow-lg">

            <div className="flex items-center gap-4">

              <div className="h-16 w-16 rounded-full bg-gradient-to-br from-[#d8e9cc] to-[#8eae7e]"></div>

              <div>
                <p className="text-sm font-bold text-[#4661ce]">
                  Top Performers
                </p>

                <h3 className="mt-1 text-xl font-bold text-[#172860]">
                  Thomas Anderson
                </h3>

                <p className="text-xs text-gray-500">
                  thomasanderson80@contact.in
                </p>
              </div>

            </div>

            {/* Scores */}
            <div className="mt-7 grid grid-cols-2 gap-3">

              <div className="rounded-xl bg-[#fff9ed] p-5 text-center">

                <div className="mx-auto grid h-[74px] w-[74px] place-items-center rounded-full border-[11px] border-[#ffca63] border-l-[#fff1d0] text-sm font-bold">
                  83.5%
                </div>

                <p className="mt-4 text-sm">
                  Assessment Score
                </p>

              </div>

              <div className="rounded-xl bg-[#f2faf3] p-5 text-center">

                <div className="mx-auto grid h-[74px] w-[74px] place-items-center rounded-full border-[11px] border-[#9bd49f] border-l-[#edf8ed] text-sm font-bold text-[#398846]">
                  96.6%
                </div>

                <p className="mt-4 text-sm">
                  Code Quality
                </p>

              </div>

            </div>

            {/* Time */}
            <div className="mt-7 rounded-xl bg-[#0b2464] p-5 text-center text-3xl font-bold text-[#ffd86b]">
              3h : 42m : 30s

              <span className="mt-2 block text-sm font-normal text-white">
                Time Taken
              </span>
            </div>

          </div>

          {/* Information card */}
          <div className="absolute right-0 top-20 z-20 w-[39%] rounded-2xl bg-white p-5 text-[#172860] shadow-lg">

            <div className="flex justify-between border-b pb-3 text-[11px] text-gray-400">
              <span>Details</span>
              <span>Timeline</span>
              <span className="font-bold text-[#546be4]">
                Information
              </span>
              <span>Proctor</span>
            </div>

            <p className="mt-5 text-xs text-gray-400">
              • Educational Details
            </p>

            <h3 className="mt-1 text-sm font-bold">
              Neo engineering college
            </h3>

            <p className="mt-1 text-[11px]">
              B.Tech • 2015 Graduation Year • 75% Score
            </p>

            <hr className="my-4 border-gray-100" />

            <p className="text-xs text-gray-400">
              • Professional Details
            </p>

            <h3 className="mt-1 text-sm font-bold">
              Software Engineer
            </h3>

            <p className="mt-1 text-[11px]">
              Autocafe • 1 Year experience • $ 52500 CTC
            </p>

          </div>

          {/* Programming results */}
          <div className="absolute right-8 top-[370px] z-30 w-[37%] rounded-xl bg-white p-5 shadow-lg">

            <p className="text-sm font-bold text-[#4661ce]">
              Programming Results
            </p>

            <div className="mt-4 rounded-lg bg-[#fff9e9] p-3 text-xs">
              <span className="font-bold text-[#b77a00]">
                1
              </span>

              <span className="ml-2">
                Question
              </span>

              <strong className="mt-1 block">
                Thames is Back
              </strong>
            </div>

            <div className="mt-4 flex justify-between text-[9px] text-gray-500">

              <span>
                Score
                <br />
                <b className="text-gray-800">100 / 100</b>
              </span>

              <span>
                Time taken
                <br />
                <b className="text-gray-800">1h 22m</b>
              </span>

              <span>
                Plagiarized
                <br />
                <b className="text-green-600">No</b>
              </span>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;