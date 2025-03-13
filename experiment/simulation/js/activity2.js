let act2_div;
function activity2(btn) {
    btn && btn.remove();
    internal_calculation2();
    let btn_text = get_collapse_btn_text('Activity 2', 'act2-div');
    let text = `
   ${btn_text}
   <div class='collapse center-text divide fs-18px fb-500' style='margin-top: 2vw; margin: auto;' id='act2-div'>
      <h3>Activity 2</h3>
      <h4>Falling Sphere Resistance Method</h4>
      <br>
      <br>
      <img src="./images/fig2.png" style="width:40%">
      <br>
      <br>
      <p style="text-align:left">
         A sphere of diameter ${d_a2 * 1000} mm falls ${dist_a2 * 1000} mm in ${t_a2} seconds in viscous liquid.<br>
         The density of the sphere is ${rho_s_a2} kg/m<sup>3</sup> and of liquid is ${rho_f_a2} kg/m<sup>3</sup>.<br>
         Find the viscousity of the liquid.
      </p>
      <br>

      <p class="fs-24px fb-600" style="text-align:left;">
         Velocity of sphere
      </p>

      <div id="act2-u-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-3">
               $$U = \\frac{\\text{Distance}}{t} =  $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input  type='number' style="margin:0 5px; width:70%" id='act2-u-inp' class='form-control fs-16px' /><span style="display:contents;"> m/s</span>
            </div>
         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='a2_verify_u();' id='act2-vf-btn1'>Verify</button>
      </div>
   </div>`;
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
    setTimeout(() => {
        show_step('act2-div');
    }, 150);
    act2_div = document.getElementById('act2-div');
}
function internal_calculation2() {
    dist_a2 = random1(145, 156) / 1000;
    rho_s_a2 = random1(7400, 7601);
    rho_f_a2 = random1(800, 901);
    U_a2 = dist_a2 / t_a2;
    mu_a2 = ((g * Math.pow(d_a2, 2)) / (18 * U_a2)) * (rho_s_a2 - rho_f_a2);
    console.log('dist_a2', dist_a2);
    console.log('rho_s_a2', rho_s_a2);
    console.log('rho_f_a2', rho_f_a2);
    console.log('U_a2', U_a2);
    console.log('mu_a2', mu_a2);
}
function a2_verify_u() {
    let inp = (document.getElementById('act2-u-inp'));
    console.log(U_a2);
    if (!verify_values(parseFloat(inp.value), U_a2)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act2-u-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$U = \\frac{\\text{Distance}}{t} =  ${parseFloat(U_a2.toFixed(3))} \\ m/s $$
      </p>
      <br>
   `;
    act2_div.innerHTML += `
      <p class="fs-24px fb-600" style="text-align:left;">
         Viscousity
      </p>
      <div id="act2-mu-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-4">
               $$\\mu = \\frac{gd^2}{18U}\\left[\\rho_s - \\rho_f\\right] = $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input  type='number' style="margin:0 5px; width:70%" id='act2-mu-inp' class='form-control fs-16px' /><span style="display:contents;"> Ns/m<sup>2</sup></span>
            </div>
            
         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='a2_verify_mu();' id='act2-vf-btn2'>Verify</button>
      </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function a2_verify_mu() {
    let inp = (document.getElementById('act2-mu-inp'));
    console.log(mu_a2);
    if (!verify_values(parseFloat(inp.value), mu_a2)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act2-mu-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$\\mu = \\frac{gd^2}{18U}\\left[\\rho_s - \\rho_f\\right] =  ${parseFloat(mu_a2.toFixed(3))} \\ Ns/m^2 $$
      </p>
      <br>
   `;
    act2_div.innerHTML += `
         <button class='btn btn-info btn-sm std-btn' onclick='activity3(this);' id='act2-btn1'>Next</button>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
// activity2();
//# sourceMappingURL=activity2.js.map