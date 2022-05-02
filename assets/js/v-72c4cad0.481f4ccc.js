"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[34597],{60179:(e,t,o)=>{o.r(t),o.d(t,{data:()=>a});const a={key:"v-72c4cad0",path:"/devices/TH1300ZB.html",title:"Sinopé TH1300ZB control via MQTT",lang:"en-US",frontmatter:{title:"Sinopé TH1300ZB control via MQTT",description:"Integrate your Sinopé TH1300ZB via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2020-04-08T17:49:06.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Notes",slug:"notes",children:[{level:3,title:"Pairing",slug:"pairing",children:[]},{level:3,title:"Unpairing",slug:"unpairing",children:[]},{level:3,title:"The following thermostats parameters can be changed trough MQTT",slug:"the-following-thermostats-parameters-can-be-changed-trough-mqtt",children:[]},{level:3,title:"The following status are reported by the thermostat",slug:"the-following-status-are-reported-by-the-thermostat",children:[]}]},{level:2,title:"Options",slug:"options",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Local_temperature (numeric)",slug:"local-temperature-numeric",children:[]},{level:3,title:"Keypad_lockout (enum)",slug:"keypad-lockout-enum",children:[]},{level:3,title:"Power (numeric)",slug:"power-numeric",children:[]},{level:3,title:"Current (numeric)",slug:"current-numeric",children:[]},{level:3,title:"Voltage (numeric)",slug:"voltage-numeric",children:[]},{level:3,title:"Climate",slug:"climate",children:[]},{level:3,title:"Backlight_auto_dim (enum)",slug:"backlight-auto-dim-enum",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/TH1300ZB.md",git:{updatedTime:1651511344e3}}},5875:(e,t,o)=>{o.r(t),o.d(t,{default:()=>s});var a=o(66252);const i=(0,a.uE)('<h1 id="sinope-th1300zb" tabindex="-1"><a class="header-anchor" href="#sinope-th1300zb" aria-hidden="true">#</a> Sinopé TH1300ZB</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>TH1300ZB</td></tr><tr><td>Vendor</td><td>Sinopé</td></tr><tr><td>Description</td><td>Zigbee smart floor heating thermostat</td></tr><tr><td>Exposes</td><td>local_temperature, keypad_lockout, power, current, voltage, climate (occupied_heating_setpoint, local_temperature, system_mode, running_state, pi_heating_demand), backlight_auto_dim, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/TH1300ZB.jpg" alt="Sinopé TH1300ZB"></td></tr></tbody></table><h2 id="notes" tabindex="-1"><a class="header-anchor" href="#notes" aria-hidden="true">#</a> Notes</h2><h3 id="pairing" tabindex="-1"><a class="header-anchor" href="#pairing" aria-hidden="true">#</a> Pairing</h3><p>Press the two buttons simultaneously for 3 seconds. The wireless icon will blink when searching for the Zigbee network and stay steady when paired to it. Repeat if unsuccessful.</p><h3 id="unpairing" tabindex="-1"><a class="header-anchor" href="#unpairing" aria-hidden="true">#</a> Unpairing</h3><p>Press the two buttons simultaneously for 10 seconds and release. The device will restart. The wireless icon will disappear from the display.</p><h3 id="the-following-thermostats-parameters-can-be-changed-trough-mqtt" tabindex="-1"><a class="header-anchor" href="#the-following-thermostats-parameters-can-be-changed-trough-mqtt" aria-hidden="true">#</a> The following thermostats parameters can be changed trough MQTT</h3><h4 id="occupancy-unoccupancy" tabindex="-1"><a class="header-anchor" href="#occupancy-unoccupancy" aria-hidden="true">#</a> Occupancy / Unoccupancy</h4><p>The thermostat can be instructed to use the occupancy or unoccupancy setpoints by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set {&quot;thermostat_occupancy&quot;: &quot;OCCUPANCY&quot;}</code> where <code>OCCUPANCY</code> is one of the following values: <code>occupied</code>, <code>unoccupied</code>. The factory default value is <code>occupied</code>.</p><h4 id="floor-control-mode" tabindex="-1"><a class="header-anchor" href="#floor-control-mode" aria-hidden="true">#</a> Floor control mode</h4><p>The sensor used by the thermostat for temperature regulation can be changed by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set {&quot;floor_control_mode&quot;: &quot;SENSOR&quot;}</code> where <code>SENSOR</code> is one of the following values: <code>ambiant</code>, <code>floor</code>. The factory default value is <code>floor</code>.</p><h4 id="ambient-maximum-heating-setpoint" tabindex="-1"><a class="header-anchor" href="#ambient-maximum-heating-setpoint" aria-hidden="true">#</a> Ambient maximum heating setpoint</h4><p>The maximum ambient temperature setpoint of the thermostat can be changed by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set {&quot;ambiant_max_heat_setpoint&quot;: &quot;TEMPERATURE&quot;}</code> where <code>TEMPERATURE</code> is the desired value (between 5 and 36 Celcius). This feature is disabled by default.</p><h4 id="floor-minimum-heating-setpoint" tabindex="-1"><a class="header-anchor" href="#floor-minimum-heating-setpoint" aria-hidden="true">#</a> Floor minimum heating setpoint</h4><p>The minimum floor temperature setpoint of the thermostat can be changed by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set {&quot;floor_min_heat_setpoint&quot;: &quot;TEMPERATURE&quot;}</code> where <code>TEMPERATURE</code> is the desired value (between 5 and 36 Celcius). This feature is disabled by default.</p><h4 id="floor-maximum-heating-setpoint" tabindex="-1"><a class="header-anchor" href="#floor-maximum-heating-setpoint" aria-hidden="true">#</a> Floor maximum heating setpoint</h4><p>The maximum floor temperature setpoint of the thermostat can be changed by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set {&quot;floor_max_heat_setpoint&quot;: &quot;TEMPERATURE&quot;}</code> where <code>TEMPERATURE</code> is the desired value (between 5 and 36 Celcius). This feature is disabled by default.</p><h4 id="floor-temperature-sensor" tabindex="-1"><a class="header-anchor" href="#floor-temperature-sensor" aria-hidden="true">#</a> Floor temperature sensor</h4><p>The floor thermistor temperature sensor value connected to the thermostat can be changed by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set {&quot;temperature_sensor&quot;: &quot;SENSOR&quot;}</code> where <code>SENSOR</code> is one of the following values: <code>10k</code>, <code>12k</code>. The factory default value is <code>10k</code>.</p><h4 id="display-backlight" tabindex="-1"><a class="header-anchor" href="#display-backlight" aria-hidden="true">#</a> Display backlight</h4><p>The thermostat display can be set to turn on only when a button is pressed or stay on and auto dim by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set {&quot;backlight_auto_dim&quot;: &quot;BACKLIGHT&quot;}</code> where <code>BACKLIGHT</code> is one of the following values: <code>on demand</code>, <code>sensing</code>. The factory default value is <code>sensing</code>.</p><h4 id="time-to-display" tabindex="-1"><a class="header-anchor" href="#time-to-display" aria-hidden="true">#</a> Time to display</h4><p>The time clock value to display on the thermostat can be set by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set {&quot;thermostat_time&quot;: &quot;TIME&quot;}</code> where <code>TIME</code> is the number of seconds since 2000-01-01 or empty. The Zigbee gateway local time will be used when publishing an empty value. By default, the time clock is not displayed.</p><h4 id="time-format-displayed" tabindex="-1"><a class="header-anchor" href="#time-format-displayed" aria-hidden="true">#</a> Time format displayed</h4><p>The time clock format on the thermostat display can be changed by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set {&quot;time_format&quot;: &quot;FORMAT&quot;}</code> where <code>FORMAT</code> is one of the following values: <code>12h</code>, <code>24h</code>. The factory default value is <code>24h</code>.</p><h4 id="enable-outdoor-temperature-display" tabindex="-1"><a class="header-anchor" href="#enable-outdoor-temperature-display" aria-hidden="true">#</a> Enable outdoor temperature display</h4><p>The display of outdoor temperature on the thermostat can be enabled / disabled by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set {&quot;enable_outdoor_temperature&quot;: &quot;ENABLE&quot;}</code> where <code>ENABLE</code> is one of the following values: <code>on</code>, <code>off</code>. <code>on</code> value will set the outdoor temperature refresh timeout to 3 hours. <code>off</code> value will set the outdoor temperature refresh timeout to 30 seconds. When the refresh timeout is expired the thermostat setpoint temperature will be displayed. The outdoor temperature is not displayed by default.</p><h4 id="outdoor-temperature-to-display" tabindex="-1"><a class="header-anchor" href="#outdoor-temperature-to-display" aria-hidden="true">#</a> Outdoor temperature to display</h4><p>The outdoor temperature to display on the thermostat can be changed by publishing to <code>zigbee2mqtt/FRIENDLY_NAME/set {&quot;thermostat_outdoor_temperature&quot;: &quot;TEMPERATURE&quot;}</code> where <code>TEMPERATURE</code> is between -100 to +100.</p><h3 id="the-following-status-are-reported-by-the-thermostat" tabindex="-1"><a class="header-anchor" href="#the-following-status-are-reported-by-the-thermostat" aria-hidden="true">#</a> The following status are reported by the thermostat</h3><h4 id="groud-fault-circuit-indicator-status-gfci" tabindex="-1"><a class="header-anchor" href="#groud-fault-circuit-indicator-status-gfci" aria-hidden="true">#</a> Groud fault circuit indicator status (GFCi)</h4><p>Turns <code>on</code> when the thermostat GFCi detects a ground fault. The status is reported to the device state as <code>gfci_status</code> every hour or when it changes. <code>gfci_status</code> has one of the following values: <code>on</code>, <code>off</code>. The default value is <code>off</code>.</p><h4 id="floor-limit-status" tabindex="-1"><a class="header-anchor" href="#floor-limit-status" aria-hidden="true">#</a> Floor limit status</h4><p>This status is <code>on</code> when the floor temperature exceeds the maximum floor heating setpoint. It is reported to the device state as <code>floor_limit_status</code> every hour or when it changes. <code>floor_limit_status</code> has one of the following values: <code>on</code>, <code>off</code>. The default value is <code>off</code>.</p><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h2>',36),d=(0,a.Uk)("How to use device type specific configuration"),r=(0,a.uE)('<ul><li><p><code>thermostat_unit</code>: Controls the temperature unit of the thermostat (default celsius). The value must be one of <code>celsius</code>, <code>fahrenheit</code></p></li><li><p><code>legacy</code>: Set to false to disable the legacy integration (highly recommended), will change structure of the published payload (default true). The value must be <code>true</code> or <code>false</code></p></li><li><p><code>power_calibration</code>: Calibrates the power value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>current_calibration</code>: Calibrates the current value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>voltage_calibration</code>: Calibrates the voltage value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="local-temperature-numeric" tabindex="-1"><a class="header-anchor" href="#local-temperature-numeric" aria-hidden="true">#</a> Local_temperature (numeric)</h3><p>Current temperature measured on the device. Value can be found in the published state on the <code>local_temperature</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;local_temperature&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The unit of this value is <code>°C</code>.</p><h3 id="keypad-lockout-enum" tabindex="-1"><a class="header-anchor" href="#keypad-lockout-enum" aria-hidden="true">#</a> Keypad_lockout (enum)</h3><p>Enables/disables physical input on the device. Value can be found in the published state on the <code>keypad_lockout</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;keypad_lockout&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;keypad_lockout&quot;: NEW_VALUE}</code>. The possible values are: <code>unlock</code>, <code>lock1</code>, <code>lock2</code>.</p><h3 id="power-numeric" tabindex="-1"><a class="header-anchor" href="#power-numeric" aria-hidden="true">#</a> Power (numeric)</h3><p>Instantaneous measured power. Value can be found in the published state on the <code>power</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>W</code>.</p><h3 id="current-numeric" tabindex="-1"><a class="header-anchor" href="#current-numeric" aria-hidden="true">#</a> Current (numeric)</h3><p>Instantaneous measured electrical current. Value can be found in the published state on the <code>current</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>A</code>.</p><h3 id="voltage-numeric" tabindex="-1"><a class="header-anchor" href="#voltage-numeric" aria-hidden="true">#</a> Voltage (numeric)</h3><p>Measured electrical potential value. Value can be found in the published state on the <code>voltage</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The unit of this value is <code>V</code>.</p><h3 id="climate" tabindex="-1"><a class="header-anchor" href="#climate" aria-hidden="true">#</a> Climate</h3><p>This climate device supports the following features: <code>occupied_heating_setpoint</code>, <code>local_temperature</code>, <code>system_mode</code>, <code>running_state</code>, <code>pi_heating_demand</code>.</p><ul><li><code>occupied_heating_setpoint</code>: Temperature setpoint. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;occupied_heating_setpoint&quot;: VALUE}</code> where <code>VALUE</code> is the °C between <code>7</code> and <code>30</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;occupied_heating_setpoint&quot;: &quot;&quot;}</code>.</li><li><code>local_temperature</code>: Current temperature measured on the device (in °C). To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;local_temperature&quot;: &quot;&quot;}</code>.</li><li><code>system_mode</code>: Mode of this device. To control publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;system_mode&quot;: VALUE}</code> where <code>VALUE</code> is one of: <code>off</code>, <code>auto</code>, <code>heat</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;system_mode&quot;: &quot;&quot;}</code>.</li><li><code>running_state</code>: The current running state. Possible values are: <code>idle</code>, <code>heat</code>. To read send a message to <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;running_state&quot;: &quot;&quot;}</code>.</li></ul><h3 id="backlight-auto-dim-enum" tabindex="-1"><a class="header-anchor" href="#backlight-auto-dim-enum" aria-hidden="true">#</a> Backlight_auto_dim (enum)</h3><p>Control backlight dimming behavior. Value will <strong>not</strong> be published in the state. It&#39;s not possible to read (<code>/get</code>) this value. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;backlight_auto_dim&quot;: NEW_VALUE}</code>. The possible values are: <code>on demand</code>, <code>sensing</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',19),c={},s=(0,o(83744).Z)(c,[["render",function(e,t){const o=(0,a.up)("RouterLink");return(0,a.wg)(),(0,a.iD)(a.HY,null,[i,(0,a._)("p",null,[(0,a._)("em",null,[(0,a.Wm)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,a.w5)((()=>[d])),_:1})])]),r],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[o,a]of t)e[o]=a;return e}}}]);