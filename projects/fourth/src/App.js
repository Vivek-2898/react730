import Child from "./Child";

function App() {
    let photo = (
        <img
            src="https://occ-0-3365-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABURO1L3trQRai2nuUMVdTmqfyeWWrjnwqWrFF-G8f461NYv45nuQlM1GYkBSZ8_ThsKt-0EMJpF1bl1Sm9y_oPG3HMTHKLSySJpHZ0YOZ374RoT9qE4JWWeMkbFMQ19FP10S.jpg?r=4f5"
            alt="viv"
        />
    );

    let photo1 = (
        <img
            src="https://occ-0-3365-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABUmLgKmFrl2Tq5jDmIBIdp-L6_fRFsTE7KslWARHa4Yb8f8q32MOBiACOoYAGFn4k8Pc_1P7QlN-F41Btkx4q8bp2gg0yA4kCWxamkIcyRVtyIoln6PDWQVi1_IAZHe4PALj.jpg?r=326"
            alt="gih"
        />
    );

    let photo2 = (
      <img
          src="https://occ-0-3365-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABSCzyyYPkXXkpm_UKXmLpZYa3DwgTcmfHfonGcPGZRgPKAlN6Ubr02eZMwhOxt_6n65r1Z1c3J2nK6LfL67P726ze_mvUvX7ujtFTOxWnmvbzBVMrNB61yoxMpXtBkPQKewHEeRELp9IiWFxU7P1bB74NO3ly3LCHUxksxO2-2lJKmurvLmMDhGKkrPRz0M.jpg?r=5da"
          alt="hir"
      />
    );

    let photo3 = (
      <img
          src="https://occ-0-3365-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABXjA49NtFBXVR0cbfh8B94osXW1PYYe8wdyJIYrnih4BhVjogjdol48gm-lgbcZxCEw66EH_abCo3yEkM0s9Cv8I9dXsihTG1X7VrzweKAJj6SLlPxhDKs3YFpgWC29gRiub.jpg?r=d7f"
          alt="jdy"
      />
    );

    let photo4 = (
      <img
          src="https://occ-0-3365-2186.1.nflxso.net/dnm/api/v6/Qs00mKCpRvrkl3HZAN5KwEL1kpE/AAAABSgCj-TH2pQ-KPXxbo_G3GVzJ3tQnDzASKKak3SXffQ__TuNOt-qorrI89ej91RS0QYQ7-SaCGOOErxwH5Ta2pTA-v8uGHjy5bIt83JIdrfEyobb-CQ25mzhB-nxD6DF9cfc.jpg?r=cd3"
          alt="kjh"
      />
    );
    let name = "Unicorn Academy",name1 = "Money Heist",name2="The Railway Men",name3="Rana Naidu",name4="Curry and Cyanide"
    return (
        <div className="movies">
            <Child link={photo} name={name}/>
            <Child link={photo1} name={name1}/>
            <Child link={photo2} name={name2}/>
            <Child link={photo3} name={name3}/>
            <Child link={photo4} name={name4}/>
        </div>
    );
}

export default App;
