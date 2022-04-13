dayjs.extend(window.dayjs_plugin_utc)
dayjs.extend(window.dayjs_plugin_timezone)
dayjs.extend(window.dayjs_plugin_advancedFormat)
const colors=[[255,0,0],[0,0,255],[0,255,0],[254,255,0],[0,254,255],[255,0,254],[255,127,127],[127,127,255],[127,255,127],[254,255,127],[127,254,255],[255,127,254],[127,0,0],[0,0,127],[0,127,0],[127,127,0],[0,127,127],[127,0,127],];const getColor=(index,opacity)=>{let color=colors[index];return'rgb('+color[0]+', '+color[1]+', '+color[2]+', '+opacity+')';};const commits=[{hash:'161059dd981b18a3f6b9babc922539adc52dab70',message:"Add support for extended precision FP",date:dayjs.unix(5591),},{hash:'a1ea3e015b1c07e740e9b69e7625dcafce4a23c7',message:"Move built-in formatter specialization to core",date:dayjs.unix(5592),},{hash:'70de324aa801eaf52e94c402d526a3849797c620',message:"Apply 2746 fix for NVidia compiler also (#2770)",date:dayjs.unix(5593),},{hash:'6a1346405949ca1cf5befc5e83c6c66c86e4f9d1',message:"Include 128-bit with other signed integers in specifier\ncheck",date:dayjs.unix(5594),},{hash:'ce93a66dfbf99fe270bca0b6eaf50ce6bbbbc740',message:"Implement a fallback uint128_t",date:dayjs.unix(5595),},{hash:'ae25f7968efca30a6483ad7802ccfa5419f6330a',message:"add ability to build Apple framework using CMAKE_FRAMEWORK",date:dayjs.unix(5596),},{hash:'d8e1dd4ab291862498e40542b74c91124c5aa06e',message:"improve installing headers",date:dayjs.unix(5597),},{hash:'532a69a6397e908fe97d23963ee48efe47f76f3c',message:"Fix handling of 96-bit long double with -m32",date:dayjs.unix(5598),},{hash:'15c2a3baccf4271cf60d47cc8db3d2e525c49cd8',message:"int128_t -\u003e int128_opt",date:dayjs.unix(5599),},{hash:'d38f72aff28d234cd6b379510a98480162a9141c',message:"Refactor fallback ints",date:dayjs.unix(5600),},{hash:'4ddab8901cb7d8bafb7ad6fe15bab46635734e32',message:"Merge accumulator into int128_fallback",date:dayjs.unix(5601),},{hash:'47da218cc33c631326b9d77194a6853ea9d568b0',message:"Remove uintptr_fallback",date:dayjs.unix(5602),},{hash:'05432e570e70dd2f64d0ada048f1f473003fa353',message:"Use consistent indentation",date:dayjs.unix(5603),},{hash:'b6d56170fc1a062d331d972ad959334bb0959642',message:"Remove unnecessary inline",date:dayjs.unix(5604),},{hash:'2c8cd2db34f2dc8fad9f62361368bd04bc794c59',message:"Fix handling of zero precision",date:dayjs.unix(5605),},{hash:'a0b43bfae20d2cf3c7980cf20446e317abd65706',message:"Add support for 96-bit long double",date:dayjs.unix(5606),},{hash:'7b96420961002a1026dcd5ba8f4d0def94fa0699',message:"Remove unused include",date:dayjs.unix(5607),},{hash:'af5d8004fc42b56ceb8204d9911aea2be600c879',message:"Limit Dragonbox to supported FP formats",date:dayjs.unix(5608),},{hash:'1319719a5ee916dbdafc1173b2ae3ec1cd1ffa2e',message:"Add underlying_t",date:dayjs.unix(5609),},{hash:'aad44f28396b8cf9722d74027b94840820f7c3dc',message:"Add fmt::enums::format_as",date:dayjs.unix(5610),},{hash:'ea3d326c636a8bb22cec94ebc75273982548143a',message:"Fix clang -Wliteral-range warning (#2779)",date:dayjs.unix(5611),},{hash:'cbc59ca893f35fcdd82438ef816d16a512d9c7f5',message:"Clear moved from memory buffer",date:dayjs.unix(5612),},{hash:'70dc3de053b6814c023faebbd21525aab575d25d',message:"Update format.h",date:dayjs.unix(5613),},{hash:'cf940ae82e24cb67ace3d32ba3176ee772da5483',message:"Simplify to_decimal",date:dayjs.unix(5614),},{hash:'4fcacea3543609f9637c21ed04a58d6bd20011ba',message:"Parameterized fp on significand type",date:dayjs.unix(5615),},{hash:'1a18a2f3dd6c76e78e2e98f6147e71736f752bdb',message:"Fixing \"C4127: conditional expression is constant\" Visual\nStudio 2022 warning in pedantic mode (#2783)",date:dayjs.unix(5616),},{hash:'ea6f0bf0e555c744fccbc0f6aa0e52b0429964cd',message:"Minor cleanup",date:dayjs.unix(5617),},{hash:'f607e3e970fe0dc0e71b04e4a65f50e90aac74df',message:"Add __float128 support",date:dayjs.unix(5681),},{hash:'22d31b31f0e9b4e4654ba67ee881f3564c2cc297',message:"Add a __float128 test",date:dayjs.unix(5682),},{hash:'a935ac3e60306f9220ed983eac97cb44a492171c',message:"MSVC CMake generation optimization (#2852)",date:dayjs.unix(5683),},{hash:'c55175a58906934416adf5fc5b820fcbb60ea6d1',message:"Add an issue template",date:dayjs.unix(5684),},{hash:'8751a03a042850854c6cdfbab510758e7f9d0f89',message:"Fix Unicode handling when writing to an ostream",date:dayjs.unix(5685),},{hash:'ce7ecdb7afb207dadf55c8ae457e14aa44e7f537',message:"Replace conditional compilation with SFINAE",date:dayjs.unix(5686),},{hash:'fc429d18b6d3c7587ae66cce27504871d4f49962',message:"Avoid overhead on sensible platforms",date:dayjs.unix(5687),},{hash:'395cf0f03ecaa35c24faaaca42d481e316f00422',message:"Fix detection of unformattable pointers",date:dayjs.unix(5688),},{hash:'192f79aaae0940c420cffd6c17c66770e502f039',message:"Fix handling of locale separators in FP formatting",date:dayjs.unix(5689),},{hash:'86e27ccb41c2708e17ba264359223ef664d9bb78',message:"Suppress a warning",date:dayjs.unix(5690),},];const data={labels:[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,],datasets:[{label:'none',data:[308.1627758514582,308.26130255195756,308.2611961025694,309.2019013186798,308.57126784041435,308.88221637986436,308.90402994852724,308.448776151353,309.03830252191375,308.564853753621,308.6095391868171,308.9606432339529,308.5147168058991,308.4237377687692,307.2809274954361,307.5303151467983,307.4890006610251,307.0520895052233,307.0215863171757,307.1686481955565,307.4461435219351,307.0096529572676,307.2780415462743,307.3353002198905,307.38024640519285,307.42314590524876,307.30887712494285,309.0650762481129,308.97421965697674,309.0353443868755,309.47934457218133,308.7351263635393,308.6511058602778,309.3421001118309,309.3850581706395,308.2680968872604,308.5445795429683,],fill:false,cubicInterpolationMode:'monotone',tension:0.4,radius:0,borderColor:getColor(0,1.0),backgroundColor:getColor(0,0.5),},{label:'locale',data:[773.6750338868632,770.7003049505253,769.951317544098,769.8949835816808,768.2818037383404,771.0700164257727,766.052394730747,770.7225633214626,768.5501551543479,770.3424559487352,766.7825833881931,769.3421813747633,769.0723802263255,770.6704065759819,762.2727842272275,744.7513657144658,778.5005451246799,767.9368328340112,767.347750163744,749.0711224813609,754.5584820422276,759.260426793227,758.7672711486866,753.8602709786568,766.5298957615702,766.1762301746635,749.4319834662573,805.6727624411501,790.975107293264,798.03904994946,793.0064300146347,801.9045118740395,804.8743664607499,790.2334077965488,803.2937433246174,791.2263110710031,782.2401847269239,],fill:false,cubicInterpolationMode:'monotone',tension:0.4,radius:0,borderColor:getColor(1,1.0),backgroundColor:getColor(1,0.5),},{label:'hex_upper',data:[240.14039092882823,239.8858881775736,239.84463584737273,240.00290066537437,239.9326641145714,240.202562399523,240.15931932997924,239.6797219699814,239.66858522279617,240.12485236509949,240.15362127414963,240.20414677223275,239.65947707921973,240.12858888479636,240.03397407912948,240.3161324334222,240.23831452770858,239.944346578964,239.92949224741662,240.1949393088048,240.19422454328287,239.91568930488128,239.94707269824494,239.95842136473428,239.9166258461613,239.90027445151637,240.20846544758123,240.5296790530625,240.700344135126,240.49117301963565,240.97140222902758,240.9234253792731,240.87183128275214,240.74302151625798,240.9518523371618,241.19053594996709,241.14771638260905,],fill:false,cubicInterpolationMode:'monotone',tension:0.4,radius:0,borderColor:getColor(2,1.0),backgroundColor:getColor(2,0.5),},{label:'hex_lower',data:[240.18453170426986,239.92372228024996,239.9176285187942,239.97601450799814,240.01728035696792,240.1369405683016,240.16736948551468,239.64321289115466,239.64009114191768,240.1553374663342,240.18641299696935,240.15197024260615,239.75687787596357,240.1738489308137,240.0458239938699,240.38564246800766,240.28615073406525,239.9056619271624,239.95010218306228,240.20260573966164,240.17275708301963,239.94105345096315,240.01982188377883,239.98673186702055,239.973036489517,239.9637414525902,240.2065579442718,240.5215551545809,240.76135612164958,240.57257540184935,241.05438437176497,241.00081930766865,240.8648456538456,240.77409499274617,240.9821849659153,240.9709006993647,240.9781569911312,],fill:false,cubicInterpolationMode:'monotone',tension:0.4,radius:0,borderColor:getColor(3,1.0),backgroundColor:getColor(3,0.5),},{label:'oct',data:[242.68921147469038,242.43365129226785,242.198599619569,241.83198718116694,241.8206561216656,242.0637955700456,242.07004263711147,241.583567379311,241.55249429060117,241.9582873846605,242.03528725409055,242.04239303222258,241.52816223599868,242.0273590960394,240.52933906725696,241.15752099107377,240.28894624368718,241.10755599238846,240.26861433367176,241.34363814919809,241.65856627158965,240.7486569125472,240.7658344096651,241.18360067160936,240.69814047574542,241.4506371338346,241.26378213266162,241.91887522822387,242.1771850914835,241.7946788532371,242.4358261140135,242.42836841359906,242.57623408600605,242.24599629558404,242.15129365934527,242.2248118132641,242.30359624927033,],fill:false,cubicInterpolationMode:'monotone',tension:0.4,radius:0,borderColor:getColor(4,1.0),backgroundColor:getColor(4,0.5),},{label:'dec',data:[288.5362773682455,288.728874695166,288.53573070994906,288.9772323750529,289.1097047309288,289.21112737602385,288.87568068367506,288.92909772880495,289.07287273111126,289.24026020619254,288.9795835840276,289.07474154941,288.7581454877586,288.975957261018,288.11370029147685,287.72065261803425,288.074682687962,287.6311232600051,288.07065534651406,288.07438405198167,287.86027264338145,287.7452620380082,287.78775887450877,287.8229763646084,288.0824607408195,287.804339128256,288.1428177596656,289.2050481532142,289.89086079586974,289.4672228306943,290.15760397873925,289.67147025732083,289.79986688145954,290.0903180599176,289.18736536997744,289.468744239032,289.43635828697865,],fill:false,cubicInterpolationMode:'monotone',tension:0.4,radius:0,borderColor:getColor(5,1.0),backgroundColor:getColor(5,0.5),},{label:'bin_upper',data:[256.5581303365443,256.54673604958543,256.50182239213245,256.64788332261406,256.6158740812129,256.7078782271506,256.89739666206896,256.485121893903,256.5722455601801,256.7492193805538,256.6742881445341,256.6661126413638,256.4708021996828,256.7169425275783,256.6497696814834,256.78761238931787,256.6410386614491,256.775795171103,256.69738004873244,256.7077097148735,256.8049305367474,256.67143925906873,256.6223640931222,256.6496580262262,256.67541699342445,256.63993506291246,256.66543790762677,257.5486473551896,256.761764376867,256.5234115078386,256.72342437475294,256.6905015870631,257.7973373872589,256.8750069437511,256.70094976563354,256.5700502822286,256.62985129473,],fill:false,cubicInterpolationMode:'monotone',tension:0.4,radius:0,borderColor:getColor(6,1.0),backgroundColor:getColor(6,0.5),},{label:'bin_lower',data:[256.5956612010773,256.5448909124173,256.4786642592455,256.5701015165669,256.5990101899046,256.6257328861532,256.7348275518038,256.43000397944576,256.5118699156663,257.15648959049616,256.6936636944211,256.6663163783043,256.50985615405256,256.66358303590386,256.63105477758387,256.8713548475362,256.5669205471061,256.61602915018756,256.6786117053984,256.7327521272218,256.60199476243787,256.65415927582154,256.64907333715087,256.5649803371987,256.59203697956633,256.62872610629245,256.72688213498213,262.0488781735087,262.93859545835807,263.4331654824103,263.667174018778,261.82764344614003,263.98176639780326,263.6553266169069,263.37178539273725,269.4579024269553,269.67917173815385,],fill:false,cubicInterpolationMode:'monotone',tension:0.4,radius:0,borderColor:getColor(7,1.0),backgroundColor:getColor(7,0.5),},]};const getCommitMessage=(tooltipItems)=>{let index=tooltipItems[0].dataIndex;let commit=commits[index];return commit.message;};const getCommitInfo=(tooltipItems)=>{let index=tooltipItems[0].dataIndex;let commit=commits[index];return commit.hash+'\n'+commit.date.format('YYYY-MM-DD HH:mm:ss z');};const htmlToElement=(html)=>{let template=document.createElement('template');html=html.trim();template.innerHTML=html;return template.content.firstChild;};const getCommitLink=(commitHash)=>{return"https://github.com/fmtlib/fmt/commit/"+commitHash;};const createAlert=(isSuccessful,commitHash)=>{return htmlToElement('\
    <div class="user-select-none alert alert-'+(isSuccessful?'success':'warning')+'" role="alert">\
      Commit hash '+(isSuccessful?'is':'couldn\'t be')+' copied to clipboard!\
      <a class="alert-link">Open it on Github</a>.\
    </div>');};const createToast=(isSuccessful,commitHash)=>{let toastsContainer=document.getElementById('toasts');let alertEl=createAlert(isSuccessful,commitHash);return Toastify({node:alertEl,duration:3000,destination:getCommitLink(commitHash),newWindow:true,close:false,stopOnFocus:true,selector:toastsContainer,callback:()=>{alertEl.remove();}});};const onChartClick=(event,elements,chart)=>{if(elements.length>0){let index=elements[0].index;let commit=commits[index];navigator.clipboard.writeText(commit.hash).then(function(){createToast(true,commit.hash).showToast();},function(){createToast(false,commit.hash).showToast();});}};const config={type:'line',data:data,options:{responsive:true,maintainAspectRatio:false,interaction:{intersect:false,mode:'index',},scales:{x:{ticks:{display:false,},grid:{display:false,}},},plugins:{tooltip:{callbacks:{title:getCommitMessage,beforeBody:getCommitInfo,}},title:{display:true,text:"fmt::format_to() with format string with argument type specs for integer",}},onClick:onChartClick,}};let ctx=document.getElementById('benchmarkChart');let bnchChart=new Chart(ctx,config);