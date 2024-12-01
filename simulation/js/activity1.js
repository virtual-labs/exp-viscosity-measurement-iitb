let maindiv = (document.getElementById('pannelcreate'));
let act1_div;
function activity1() {
    let text = `
    <div class='divide'>
        <div style='margin-top: 2vw;'>
            <br>
            <h4 class="center-text fs-20px fw-600">Fluid Mechanics: Viscousity Measurement</h4>
            <br>
            <button class='btn btn-info std-btn' style='position: relative; left: 50vw;' onclick='start_act1();' id='temp-btn-1' >Next</button>
        </div>
    </div>`;
    maindiv.innerHTML = text;
    setTimeout(() => {
        MathJax.typeset();
    }, 300);
    internal_calculation1();
}
function start_act1() {
    let temp_btn = (document.getElementById('temp-btn-1'));
    if (temp_btn) {
        temp_btn.remove();
    }
    let btn_text = get_collapse_btn_text('Activity 1', 'act1-div');
    let text = `
   ${btn_text}
   <div class='collapse center-text divide fs-18px fb-500' style='margin-top: 2vw; margin: auto;' id='act1-div'>
      <h3>Activity 1</h3>
      <h4>Capillary Tube Method</h4>
      <br>
      <br>
      <img src="./images/fig1.png" style="width:40%">
      <br>
      <br>
      <p style="text-align:left">
         The viscousity of an oil of specific gravity ${sp_gr_a1} is measured by capillary tube of diameter ${D_a1 * 1000} mm. <br>
         The difference of pressure head between two points ${L_a1} m apart is ${h_a1} m of water. <br>
         The mass of oil collected in a measuring tank is ${M_a1} kg in ${t_a1} seconds. <br>
         Find the viscousity of the oil.
      </p>
      <br>

      <p class="fs-24px fb-600" style="text-align:left;">
         Mass Flow Rate
      </p>

      <div id="act1-mass-fl-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-2">
               $$\\dot{m} = \\frac{M}{t} =  $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input  type='number' style="margin:0 5px; width:70%" id='act1-mass-fl-inp' class='form-control fs-16px' /><span style="display:contents;"> kg/s</span>
            </div>
         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='a1_verify_m_fl();' id='act1-vf-btn1'>Verify</button>
      </div>
   </div>`;
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
    setTimeout(() => {
        show_step('act1-div');
    }, 150);
    act1_div = document.getElementById('act1-div');
}
function internal_calculation1() {
    sp_gr_a1 = parseFloat(random(0.8, 0.9).toFixed(2));
    rho_a1 = sp_gr_a1 * 1000;
    D_a1 = random1(45, 56) / 1000;
    L_a1 = parseFloat(random(1.8, 2.1).toFixed(1));
    h_a1 = parseFloat(random(0.45, 0.55).toFixed(2));
    M_a1 = random1(58, 63);
    t_a1 = random1(95, 106);
    mass_fl_rt_a1 = M_a1 / t_a1;
    Q_a1 = mass_fl_rt_a1 / rho_a1;
    mu_a1 = (Math.PI * rho_a1 * g * h_a1 * Math.pow(D_a1, 4)) / (128 * Q_a1 * L_a1);
    console.log('sp_gr_a1', sp_gr_a1);
    console.log('rho_a1', rho_a1);
    console.log('D_a1', D_a1);
    console.log('L_a1', L_a1);
    console.log('h_a1', h_a1);
    console.log('M_a1', M_a1);
    console.log('t_a1', t_a1);
    console.log('mass_fl_rt_a1', mass_fl_rt_a1);
    console.log('Q_a1', Q_a1);
    console.log('mu_a1', mu_a1);
}
function a1_verify_m_fl() {
    let inp = (document.getElementById('act1-mass-fl-inp'));
    console.log(mass_fl_rt_a1);
    if (!verify_values(parseFloat(inp.value), mass_fl_rt_a1)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act1-mass-fl-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$\\dot{m} = \\frac{M}{t}=  ${parseFloat(mass_fl_rt_a1.toFixed(3))} \\ kg/s $$
      </p>
      <br>
   `;
    act1_div.innerHTML += `
      <p class="fs-24px fb-600" style="text-align:left;">
         Discharge
      </p>
      <div id="act1-Q-div">
         <div class="fs-16px" style="color:red;">
            Note: enter value till 6 decimal places.
         </div>
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-2">
               $$Q = \\frac{\\dot{m}}{\\rho} = $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input  type='number' style="margin:0 5px; width:70%" id='act1-Q-inp' class='form-control fs-16px' /><span style="display:contents;"> m<sup>3</sup>/s</span>
            </div>
            
         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='a1_verify_Q();' id='act1-vf-btn2'>Verify</button>
      </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function a1_verify_Q() {
    let inp = (document.getElementById('act1-Q-inp'));
    console.log(Q_a1);
    if (!verify_values(parseFloat(inp.value), Q_a1)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act1-Q-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$Q = \\frac{\\dot{m}}{\\rho}  =  ${parseFloat(Q_a1.toFixed(6))} \\ m^3/s $$
      </p>
      <br>
   `;
    act1_div.innerHTML += `
      <p class="fs-24px fb-600" style="text-align:left;">
         Viscousity
      </p>
      <div id="act1-mu-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-3">
               $$\μ = \\frac{\π \ρ ghD^4}{128QL} = $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input  type='number' style="margin:0 5px; width:70%" id='act1-mu-inp' class='form-control fs-16px' /><span style="display:contents;"> Ns/m<sup>2</sup></span>
            </div>
         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='a1_verify_mu();' id='act1-vf-btn3'>Verify</button>
      </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function a1_verify_mu() {
    let inp = (document.getElementById('act1-mu-inp'));
    console.log(mu_a1);
    if (!verify_values(parseFloat(inp.value), mu_a1)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act1-mu-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$\μ = \\frac{\π \ρ ghD^4}{128QL} =  ${parseFloat(mu_a1.toFixed(4))} \\ Ns/m^2 $$
      </p>
      <br>
   `;
    act1_div.innerHTML += `

         <button class='btn btn-info btn-sm std-btn' onclick='activity2(this);' id='act1-btn1'>Next</button>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function activity_completed(btn) {
    btn && btn.remove();
    alert('Experiment Completed');
}
activity1();
//# sourceMappingURL=activity1.js.map