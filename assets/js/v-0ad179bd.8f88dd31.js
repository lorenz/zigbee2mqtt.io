"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[91986],{25831:(e,t,n)=>{n.r(t),n.d(t,{data:()=>a});const a={key:"v-0ad179bd",path:"/devices/ROB_200-009-0.html",title:"ROBB ROB_200-009-0 control via MQTT",lang:"en-US",frontmatter:{title:"ROBB ROB_200-009-0 control via MQTT",description:"Integrate your ROBB ROB_200-009-0 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2021-04-30T16:45:33.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Pairing",slug:"pairing",children:[]}]},{level:2,title:"Options",slug:"options",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Battery (numeric)",slug:"battery-numeric",children:[]},{level:3,title:"Action (enum)",slug:"action-enum",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/ROB_200-009-0.md",git:{updatedTime:1651511344e3}}},36377:(e,t,n)=>{n.r(t),n.d(t,{default:()=>r});var a=n(66252);const i=(0,a.uE)('<h1 id="robb-rob-200-009-0" tabindex="-1"><a class="header-anchor" href="#robb-rob-200-009-0" aria-hidden="true">#</a> ROBB ROB_200-009-0</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>ROB_200-009-0</td></tr><tr><td>Vendor</td><td>ROBB</td></tr><tr><td>Description</td><td>Zigbee 2 button wall switch</td></tr><tr><td>Exposes</td><td>battery, action, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/ROB_200-009-0.jpg" alt="ROBB ROB_200-009-0"></td></tr><tr><td>White-label</td><td>Sunricher SR-ZG9001K2-DIM</td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>First reset. Press and hold the two buttons for 5 seconds until led lights up (continuously blue or green). Then press the &quot;0&quot; 5 times - depending on the model, or in a pace of 2 times per second or in a pace of 5 times per second. Second pair. Press and hold the two buttons for 5 seconds again, until the led turns on. Then press the &quot;|&quot; once. It should now enter pair mode an start blinking - if it does not get connected, just try the second step again.</p><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h2>',6),s=(0,a.Uk)("How to use device type specific configuration"),o=(0,a.uE)('<ul><li><code>simulated_brightness</code>: Simulate a brightness value. If this device provides a brightness_move_up or brightness_move_down action it is possible to specify the update interval and delta. Example:</li></ul><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">simulated_brightness</span><span class="token punctuation">:</span>\n  <span class="token key atrule">delta</span><span class="token punctuation">:</span> <span class="token number">20</span> <span class="token comment"># delta per interval, default = 20</span>\n  <span class="token key atrule">interval</span><span class="token punctuation">:</span> <span class="token number">200</span> <span class="token comment"># interval in milliseconds, default = 200</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="battery-numeric" tabindex="-1"><a class="header-anchor" href="#battery-numeric" aria-hidden="true">#</a> Battery (numeric)</h3><p>Remaining battery in %. Value can be found in the published state on the <code>battery</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>100</code>. The unit of this value is <code>%</code>.</p><h3 id="action-enum" tabindex="-1"><a class="header-anchor" href="#action-enum" aria-hidden="true">#</a> Action (enum)</h3><p>Triggered action (e.g. a button click). Value can be found in the published state on the <code>action</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The possible values are: <code>on_1</code>, <code>off_1</code>, <code>stop_1</code>, <code>brightness_move_up_1</code>, <code>brightness_move_down_1</code>, <code>brightness_stop_1</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',9),d={},r=(0,n(83744).Z)(d,[["render",function(e,t){const n=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.iD)(a.HY,null,[i,(0,a._)("p",null,[(0,a._)("em",null,[(0,a.Wm)(n,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,a.w5)((()=>[s])),_:1})])]),o],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[n,a]of t)e[n]=a;return e}}}]);