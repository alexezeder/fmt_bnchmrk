dayjs.extend(window.dayjs_plugin_utc)
dayjs.extend(window.dayjs_plugin_timezone)
dayjs.extend(window.dayjs_plugin_advancedFormat)
const colors=[[255,0,0],[0,0,255],[0,255,0],[254,255,0],[0,254,255],[255,0,254],[255,127,127],[127,127,255],[127,255,127],[254,255,127],[127,254,255],[255,127,254],[127,0,0],[0,0,127],[0,127,0],[127,127,0],[0,127,127],[127,0,127],];const getColor=(index,opacity)=>{let color=colors[index];return'rgb('+color[0]+', '+color[1]+', '+color[2]+', '+opacity+')';};const commits=[{hash:'161059dd981b18a3f6b9babc922539adc52dab70',message:"Add support for extended precision FP",date:dayjs.unix(5591),},{hash:'a1ea3e015b1c07e740e9b69e7625dcafce4a23c7',message:"Move built-in formatter specialization to core",date:dayjs.unix(5592),},{hash:'70de324aa801eaf52e94c402d526a3849797c620',message:"Apply 2746 fix for NVidia compiler also (#2770)",date:dayjs.unix(5593),},{hash:'6a1346405949ca1cf5befc5e83c6c66c86e4f9d1',message:"Include 128-bit with other signed integers in specifier\ncheck",date:dayjs.unix(5594),},{hash:'ce93a66dfbf99fe270bca0b6eaf50ce6bbbbc740',message:"Implement a fallback uint128_t",date:dayjs.unix(5595),},{hash:'ae25f7968efca30a6483ad7802ccfa5419f6330a',message:"add ability to build Apple framework using CMAKE_FRAMEWORK",date:dayjs.unix(5596),},{hash:'d8e1dd4ab291862498e40542b74c91124c5aa06e',message:"improve installing headers",date:dayjs.unix(5597),},{hash:'532a69a6397e908fe97d23963ee48efe47f76f3c',message:"Fix handling of 96-bit long double with -m32",date:dayjs.unix(5598),},{hash:'15c2a3baccf4271cf60d47cc8db3d2e525c49cd8',message:"int128_t -\u003e int128_opt",date:dayjs.unix(5599),},{hash:'d38f72aff28d234cd6b379510a98480162a9141c',message:"Refactor fallback ints",date:dayjs.unix(5600),},{hash:'4ddab8901cb7d8bafb7ad6fe15bab46635734e32',message:"Merge accumulator into int128_fallback",date:dayjs.unix(5601),},{hash:'47da218cc33c631326b9d77194a6853ea9d568b0',message:"Remove uintptr_fallback",date:dayjs.unix(5602),},{hash:'05432e570e70dd2f64d0ada048f1f473003fa353',message:"Use consistent indentation",date:dayjs.unix(5603),},{hash:'b6d56170fc1a062d331d972ad959334bb0959642',message:"Remove unnecessary inline",date:dayjs.unix(5604),},{hash:'2c8cd2db34f2dc8fad9f62361368bd04bc794c59',message:"Fix handling of zero precision",date:dayjs.unix(5605),},{hash:'a0b43bfae20d2cf3c7980cf20446e317abd65706',message:"Add support for 96-bit long double",date:dayjs.unix(5606),},{hash:'7b96420961002a1026dcd5ba8f4d0def94fa0699',message:"Remove unused include",date:dayjs.unix(5607),},{hash:'af5d8004fc42b56ceb8204d9911aea2be600c879',message:"Limit Dragonbox to supported FP formats",date:dayjs.unix(5608),},{hash:'1319719a5ee916dbdafc1173b2ae3ec1cd1ffa2e',message:"Add underlying_t",date:dayjs.unix(5609),},{hash:'aad44f28396b8cf9722d74027b94840820f7c3dc',message:"Add fmt::enums::format_as",date:dayjs.unix(5610),},{hash:'ea3d326c636a8bb22cec94ebc75273982548143a',message:"Fix clang -Wliteral-range warning (#2779)",date:dayjs.unix(5611),},{hash:'cbc59ca893f35fcdd82438ef816d16a512d9c7f5',message:"Clear moved from memory buffer",date:dayjs.unix(5612),},{hash:'70dc3de053b6814c023faebbd21525aab575d25d',message:"Update format.h",date:dayjs.unix(5613),},{hash:'cf940ae82e24cb67ace3d32ba3176ee772da5483',message:"Simplify to_decimal",date:dayjs.unix(5614),},{hash:'4fcacea3543609f9637c21ed04a58d6bd20011ba',message:"Parameterized fp on significand type",date:dayjs.unix(5615),},{hash:'1a18a2f3dd6c76e78e2e98f6147e71736f752bdb',message:"Fixing \"C4127: conditional expression is constant\" Visual\nStudio 2022 warning in pedantic mode (#2783)",date:dayjs.unix(5616),},{hash:'ea6f0bf0e555c744fccbc0f6aa0e52b0429964cd',message:"Minor cleanup",date:dayjs.unix(5617),},{hash:'f607e3e970fe0dc0e71b04e4a65f50e90aac74df',message:"Add __float128 support",date:dayjs.unix(5681),},{hash:'22d31b31f0e9b4e4654ba67ee881f3564c2cc297',message:"Add a __float128 test",date:dayjs.unix(5682),},{hash:'a935ac3e60306f9220ed983eac97cb44a492171c',message:"MSVC CMake generation optimization (#2852)",date:dayjs.unix(5683),},{hash:'c55175a58906934416adf5fc5b820fcbb60ea6d1',message:"Add an issue template",date:dayjs.unix(5684),},{hash:'8751a03a042850854c6cdfbab510758e7f9d0f89',message:"Fix Unicode handling when writing to an ostream",date:dayjs.unix(5685),},{hash:'ce7ecdb7afb207dadf55c8ae457e14aa44e7f537',message:"Replace conditional compilation with SFINAE",date:dayjs.unix(5686),},{hash:'fc429d18b6d3c7587ae66cce27504871d4f49962',message:"Avoid overhead on sensible platforms",date:dayjs.unix(5687),},{hash:'395cf0f03ecaa35c24faaaca42d481e316f00422',message:"Fix detection of unformattable pointers",date:dayjs.unix(5688),},{hash:'192f79aaae0940c420cffd6c17c66770e502f039',message:"Fix handling of locale separators in FP formatting",date:dayjs.unix(5689),},{hash:'86e27ccb41c2708e17ba264359223ef664d9bb78',message:"Suppress a warning",date:dayjs.unix(5690),},];const data={labels:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,],datasets:[{label:'std_string_view',data:[99.53291101635718,99.53303730648186,99.53097352311845,99.5331441848279,99.5867775499412,99.56187742548019,99.70372275226252,99.59826307769639,99.5817987792398,99.63811388969764,99.65463408762788,99.60390964345504,99.55440846799536,99.59795694679069,99.6324411988145,99.66827201501837,99.51769596695875,99.66791567928077,99.51311431925188,99.54184679636518,99.52724187713234,99.69915667136634,99.57793579123484,99.62733221545928,99.54346260984487,99.67200926869099,99.60407203508167,99.53102954535365,99.58076761950485,99.5801039702887,99.60641986187888,99.67000046223329,99.63590985121436,99.57791037244324,99.54400212912583,99.52112889203437,99.62373167770706,],fill:false,cubicInterpolationMode:'monotone',tension:0.4,radius:0,borderColor:getColor(0,1.0),backgroundColor:getColor(0,0.5),},{label:'std_string',data:[99.53698347686714,99.5540491766833,99.53571245870687,99.54742405795372,99.6104944466004,99.60207741352644,99.70778229157378,99.61720432817265,99.59560760492114,99.65701753170147,99.6635591572247,99.623825972418,99.55917465278542,99.60491040741027,99.62538694593142,99.65727504769335,99.55053457065326,99.6175557591004,99.50445739244931,99.51499320569006,99.50379814172906,99.67319235952863,99.55481255649401,99.61714042573236,99.50896994522937,99.61629442976509,99.57449755356043,99.55129283188948,99.59648253673093,99.58576341915197,99.62251090684795,99.64958185285127,99.63201144214469,99.5866827764609,99.54896948516136,99.55517124985334,99.64062293973113,],fill:false,cubicInterpolationMode:'monotone',tension:0.4,radius:0,borderColor:getColor(1,1.0),backgroundColor:getColor(1,0.5),},{label:'char_array',data:[121.6428190413336,121.48833610310878,121.63093109905942,121.58725578607819,121.52045447612609,121.67059772908156,121.92453898998524,121.58177300481981,121.76921611411406,121.53357357945244,121.7031673613459,121.71729783137384,121.21473090158746,121.63849954886824,121.34638438833359,121.32453697764862,121.28203980442181,121.29795278383695,121.5803398561571,121.65677883793684,121.24063201847196,121.58523324252293,121.84009378780381,121.97385792450659,121.25806175539127,121.31010874080864,121.56369019117581,119.91594775550043,119.72613430579214,120.12666382059439,120.3314975726882,120.06896502860371,120.1554031538194,120.08189894678526,119.96698096663228,119.73851084786556,120.20382789423628,],fill:false,cubicInterpolationMode:'monotone',tension:0.4,radius:0,borderColor:getColor(2,1.0),backgroundColor:getColor(2,0.5),},{label:'char_type',data:[65.60531411761313,65.64970793611919,65.61400471412337,65.6129859377687,65.55490197031997,65.56058785828199,65.55381644870691,65.56854304315063,65.61514649608661,65.59282215361249,65.55900699132978,65.6030931690897,65.53337212491364,65.58578525402173,65.54057049764286,65.55549976561055,65.55198569096102,65.54986126206167,65.53157874631914,65.59713698212296,65.58956174915333,65.54207411864192,65.58264577732484,65.5902791249404,65.62014371511914,65.55570507638593,65.54743586827891,65.5723411031508,65.57513458644274,65.58227029952776,65.58050804889238,65.5330563514371,65.53149125172148,65.60641537491948,65.58512740884642,65.58765833041143,65.6002602408904,],fill:false,cubicInterpolationMode:'monotone',tension:0.4,radius:0,borderColor:getColor(3,1.0),backgroundColor:getColor(3,0.5),},]};const getCommitMessage=(tooltipItems)=>{let index=tooltipItems[0].dataIndex;let commit=commits[index];return commit.message;};const getCommitInfo=(tooltipItems)=>{let index=tooltipItems[0].dataIndex;let commit=commits[index];return commit.hash+'\n'+commit.date.format('YYYY-MM-DD HH:mm:ss z');};const htmlToElement=(html)=>{let template=document.createElement('template');html=html.trim();template.innerHTML=html;return template.content.firstChild;};const getCommitLink=(commitHash)=>{return"https://github.com/fmtlib/fmt/commit/"+commitHash;};const createAlert=(isSuccessful,commitHash)=>{return htmlToElement('\
    <div class="user-select-none alert alert-'+(isSuccessful?'success':'warning')+'" role="alert">\
      Commit hash '+(isSuccessful?'is':'couldn\'t be')+' copied to clipboard!\
      <a class="alert-link">Open it on Github</a>.\
    </div>');};const createToast=(isSuccessful,commitHash)=>{let toastsContainer=document.getElementById('toasts');let alertEl=createAlert(isSuccessful,commitHash);return Toastify({node:alertEl,duration:3000,destination:getCommitLink(commitHash),newWindow:true,close:false,stopOnFocus:true,selector:toastsContainer,callback:()=>{alertEl.remove();}});};const onChartClick=(event,elements,chart)=>{if(elements.length>0){let index=elements[0].index;let commit=commits[index];navigator.clipboard.writeText(commit.hash).then(function(){createToast(true,commit.hash).showToast();},function(){createToast(false,commit.hash).showToast();});}};const config={type:'line',data:data,options:{responsive:true,maintainAspectRatio:false,interaction:{intersect:false,mode:'index',},scales:{x:{ticks:{display:false,},grid:{display:false,}},},plugins:{tooltip:{callbacks:{title:getCommitMessage,beforeBody:getCommitInfo,}},title:{display:true,text:"fmt::format_to() with \"{}\" format string and string (or char) argument",}},onClick:onChartClick,}};let ctx=document.getElementById('benchmarkChart');let bnchChart=new Chart(ctx,config);