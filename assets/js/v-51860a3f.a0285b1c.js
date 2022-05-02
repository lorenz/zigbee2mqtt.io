"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[68294],{36383:(e,t,i)=>{i.r(t),i.d(t,{data:()=>a});const a={key:"v-51860a3f",path:"/devices/550D6001.html",title:"Schneider Electric 550D6001 control via MQTT",lang:"en-US",frontmatter:{title:"Schneider Electric 550D6001 control via MQTT",description:"Integrate your Schneider Electric 550D6001 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2021-07-01T18:17:29.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Pairing",slug:"pairing",children:[]},{level:3,title:"Resetting",slug:"resetting",children:[]},{level:3,title:"Battery",slug:"battery",children:[]},{level:3,title:"ELKO Smart",slug:"elko-smart",children:[]},{level:3,title:"Troubleshooting",slug:"troubleshooting",children:[]},{level:3,title:"Additional resources",slug:"additional-resources",children:[]}]},{level:2,title:"Options",slug:"options",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Action (enum)",slug:"action-enum",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/550D6001.md",git:{updatedTime:1651511344e3}}},86070:(e,t,i)=>{i.r(t),i.d(t,{default:()=>p});var a=i(66252);const n=(0,a.uE)('<h1 id="schneider-electric-550d6001" tabindex="-1"><a class="header-anchor" href="#schneider-electric-550d6001" aria-hidden="true">#</a> Schneider Electric 550D6001</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>550D6001</td></tr><tr><td>Vendor</td><td>Schneider Electric</td></tr><tr><td>Description</td><td>LK FUGA wiser wireless battery 4 button switch</td></tr><tr><td>Exposes</td><td>action, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/550D6001.jpg" alt="Schneider Electric 550D6001"></td></tr><tr><td>White-label</td><td>Elko EKO07117</td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><ul><li>Short press (&lt; 0.5 seconds) the upper left button three times.</li></ul><h3 id="resetting" tabindex="-1"><a class="header-anchor" href="#resetting" aria-hidden="true">#</a> Resetting</h3><ul><li>Short press (&lt; 0.5 seconds) the upper left button three times and hold for 10 seconds, until the LED blinks red. After releasing the LED will stop blinking once the device is reset.</li></ul><h3 id="battery" tabindex="-1"><a class="header-anchor" href="#battery" aria-hidden="true">#</a> Battery</h3><p>The battery used is a standard CR2032. The battery can be replaced by pulling off the button keys along with the horizontal bar in the middle of the switch.</p><h3 id="elko-smart" tabindex="-1"><a class="header-anchor" href="#elko-smart" aria-hidden="true">#</a> ELKO Smart</h3><p>This device is also used by the EKO07117 SmartSwitch Push Wireless in the ELKO Smart range (ELKO is a subsidiary of Schneider Electric).</p><h3 id="troubleshooting" tabindex="-1"><a class="header-anchor" href="#troubleshooting" aria-hidden="true">#</a> Troubleshooting</h3><h4 id="led-blinking-green-and-red" tabindex="-1"><a class="header-anchor" href="#led-blinking-green-and-red" aria-hidden="true">#</a> LED blinking green and red</h4><p>Device is unable to communicate with gateway. Press the reset button quickly three times, then hold for 20 seconds, until the LED blinks red. After this the device will reboot and should be ready for pairing.</p><h3 id="additional-resources" tabindex="-1"><a class="header-anchor" href="#additional-resources" aria-hidden="true">#</a> Additional resources</h3>',15),r={href:"https://www.productinfo.schneider-electric.com/wiser_dk/wiser_system_user_guide/English/Wiser%20System%20User%20Guide%20-%20Tuya%20EU%20LK%20(BOOKMAP)_0000482918.xml",target:"_blank",rel:"noopener noreferrer"},s=(0,a.Uk)("Wiser system user guide"),o={href:"https://www1.lk.dk/katalog/vejledning/GDE7031801-04.pdf",target:"_blank",rel:"noopener noreferrer"},d=(0,a.Uk)("LK FUGA® Wiser wireless battery 4 button switch manual"),l=(0,a._)("h2",{id:"options",tabindex:"-1"},[(0,a._)("a",{class:"header-anchor",href:"#options","aria-hidden":"true"},"#"),(0,a.Uk)(" Options")],-1),c=(0,a.Uk)("How to use device type specific configuration"),h=(0,a.uE)('<ul><li><code>simulated_brightness</code>: Simulate a brightness value. If this device provides a brightness_move_up or brightness_move_down action it is possible to specify the update interval and delta. Example:</li></ul><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">simulated_brightness</span><span class="token punctuation">:</span>\n  <span class="token key atrule">delta</span><span class="token punctuation">:</span> <span class="token number">20</span> <span class="token comment"># delta per interval, default = 20</span>\n  <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">200</span> <span class="token comment"># interval in milliseconds, default = 200</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum" aria-hidden="true">#</a> Action (enum)</h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>on_top</code>, <code>off_top</code>, <code>on_bottom</code>, <code>off_bottom</code>, <code>brightness_move_up_top</code>, <code>brightness_stop_top</code>, <code>brightness_move_down_top</code>, <code>brightness_stop_top</code>, <code>brightness_move_up_bottom</code>, <code>brightness_stop_bottom</code>, <code>brightness_move_down_bottom</code>, <code>brightness_stop_bottom</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',7),u={},p=(0,i(83744).Z)(u,[["render",function(e,t){const i=(0,a.up)("OutboundLink"),u=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.iD)(a.HY,null,[n,(0,a._)("ul",null,[(0,a._)("li",null,[(0,a._)("a",r,[s,(0,a.Wm)(i)])]),(0,a._)("li",null,[(0,a._)("a",o,[d,(0,a.Wm)(i)])])]),l,(0,a._)("p",null,[(0,a._)("em",null,[(0,a.Wm)(u,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,a.w5)((()=>[c])),_:1})])]),h],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[i,a]of t)e[i]=a;return e}}}]);