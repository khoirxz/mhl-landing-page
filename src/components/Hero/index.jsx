let malang = [
  "##     ##    ###    ##          ###    ##    ##  ######   ",
  "###   ###   ## ##   ##         ## ##   ###   ## ##    ##  ",
  "#### ####  ##   ##  ##        ##   ##  ####  ## ##        ",
  "## ### ## ##     ## ##       ##     ## ## ## ## ##   #### ",
  "##     ## ######### ##       ######### ##  #### ##    ##  ",
  "##     ## ##     ## ##       ##     ## ##   ### ##    ##  ",
  "##     ## ##     ## ######## ##     ## ##    ##  ######   ",
].join("\n");

let hacker = [
  "##     ##    ###     ######  ##    ## ######## ########  ",
  "##     ##   ## ##   ##    ## ##   ##  ##       ##     ## ",
  "##     ##  ##   ##  ##       ##  ##   ##       ##     ## ",
  "######### ##     ## ##       #####    ######   ########  ",
  "##     ## ######### ##       ##  ##   ##       ##   ##   ",
  "##     ## ##     ## ##    ## ##   ##  ##       ##    ##  ",
  "##     ## ##     ##  ######  ##    ## ######## ##     ## ",
].join("\n");

let link = [
  "##       #### ##    ## ##    ## ",
  "##        ##  ###   ## ##   ## ",
  "##        ##  ####  ## ##  ##  ",
  "##        ##  ## ## ## #####    ",
  "##        ##  ##  #### ##  ##   ",
  "##        ##  ##   ### ##   ##  ",
  "######## #### ##    ## ##    ## ",
].join("\n");

const Hero = () => {
  return (
    <header>
      <div className="mb-5">
        <p>
          <span className="text-green-500">root@device-988:~$</span>{" "}
          ./install.sh
        </p>
        <p className="my-8">Welcome User988</p>
        <pre className="md:text-ascii mb-5 text-ascii-mobile">{malang}</pre>
        <pre className="md:text-ascii mb-5 text-ascii-mobile">{hacker}</pre>
        <pre className="md:text-ascii text-ascii-mobile">{link}</pre>
        <div className="w-full border-b-4 border-dashed border-white my-3"></div>
        <p className="mt-5">type "-help" for help</p>
        <p className="mt-8">
          <span className="text-green-500 ">root@device-988:~$</span> mhl{" "}
          <span className="hover:bg-white hover:text-black font-bold cursor-pointer text-red-500">
            -help
          </span>
        </p>
      </div>
    </header>
  );
};

export default Hero;
