let act3_div;
function activity3(btn) {
    btn && btn.remove();
    internal_calculation3();
    let btn_text = get_collapse_btn_text('Activity 3', 'act3-div');
    let text = `
   ${btn_text}
   <div class='collapse center-text divide fs-18px fb-500' style='margin-top: 2vw; margin: auto;' id='act3-div'>
      <h3>Activity 3</h3>
      <h4>Rotating Cylinder Method</h4>
      <br>
      <br>
      <img src="./images/fig3.png" style="width:40%">
      <br>
      <br>
      <p style="text-align:left">
         The viscousity of a liquid is determined by Rotating Cylinder Method, inner diameter of cylinder is ${D1_a3} cm and is stationary. <br>
         The outer cylinder diameter is ${D2_a3} cm contains liquid upto height of ${Math.round(H1_a3 * 100)} cm.<br>
         The clearance at the bottom of the two cylinders in ${h_a3 * 100} cm. <br>
         The outer cylinder is roatated at ${N_a3} rpm. The torque registered on the torsion meter attatched to the inner cylinder is ${T_a3} Nm. <br>
         Find the viscousity.
      </p>
      <br>
      <p style="text-align:left">
         Height of the liquid from bottom of the outer cylinder, H<sub>1</sub> = ${Math.round(H1_a3 * 100)} cm.
      </p>
      <p style="text-align:left">
         Clearance at the bottom, h = ${h_a3 * 100} cm.
      </p>

      <p class="fs-24px fb-600" style="text-align:left;">
         Height of inner cylinder immersed in liquid
      </p>

      <div id="act3-H-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-3">
               $$H = H_1 - h =  $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input  type='number' style="margin:0 5px; width:70%" id='act3-H-inp' class='form-control fs-16px' /><span style="display:contents;"> m</span>
            </div>
         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='a3_verify_H();' id='act3-vf-btn1'>Verify</button>
      </div>
   </div>`;
    maindiv.innerHTML += text;
    hide_all_steps();
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
    setTimeout(() => {
        show_step('act3-div');
    }, 150);
    act3_div = document.getElementById('act3-div');
}
function internal_calculation3() {
    D1_a3 = random1(18, 23);
    D2_a3 = D1_a3 + 0.5;
    R1_a3 = D1_a3 / 100;
    R2_a3 = D2_a3 / 100;
    H1_a3 = random1(28, 33) / 100;
    N_a3 = random1(380, 411);
    T_a3 = parseFloat(random(5.8, 5.9).toFixed(3));
    H_a3 = H1_a3 - h_a3;
    w_a3 = (2 * Math.PI * N_a3) / 60;
    mu_a3 =
        (2 * (R2_a3 - R1_a3) * h_a3 * T_a3) /
            (Math.PI *
                Math.pow(R1_a3, 2) *
                w_a3 *
                (4 * H_a3 * h_a3 * R2_a3 + Math.pow(R1_a3, 2) * (R2_a3 - R1_a3)));
    console.log('D1_a3 in cm ', D1_a3);
    console.log('D2_a3 in cm ', D2_a3);
    console.log('R1_a3 in m ', R1_a3);
    console.log('R2_a3 in m ', R2_a3);
    console.log('H1_a3 in m ', H1_a3);
    console.log('N_a3 ', N_a3);
    console.log('T_a3 ', T_a3);
    console.log('H_a3 ', H_a3);
    console.log('w_a3 ', w_a3);
    console.log('mu_a3 ', mu_a3);
}
function a3_verify_H() {
    let inp = (document.getElementById('act3-H-inp'));
    console.log(H_a3);
    if (!verify_values(parseFloat(inp.value), H_a3)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act3-H-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$H = H_1 - h  =  ${parseFloat(H_a3.toFixed(3))} \\ m $$
      </p>
      <br>
   `;
    act3_div.innerHTML += `
      <p class="fs-24px fb-600" style="text-align:left;">
         Speed of outer cylinder
      </p>
      <div id="act3-w-div">
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-3">
               $$\ω = \\frac{2\π N}{60} = $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input  type='number' style="margin:0 5px; width:70%" id='act3-w-inp' class='form-control fs-16px' /><span style="display:contents;"> rad/s</span>
            </div>
            
         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='a3_verify_speed();' id='act3-vf-btn2'>Verify</button>
      </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function a3_verify_speed() {
    let inp = (document.getElementById('act3-w-inp'));
    console.log(w_a3);
    if (!verify_values(parseFloat(inp.value), w_a3)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act3-w-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$\ω = \\frac{2\π N}{60} =  ${parseFloat(w_a3.toFixed(3))} \\ rad/s $$
      </p>
      <br>
   `;
    act3_div.innerHTML += `
      <p class="fs-24px fb-600" style="text-align:left;">
         Viscousity
      </p>
      <div id="act3-mu-div">
         $$\μ = \\frac{2\\left(R_2 - R_1\\right)\× hT}{\π R_1^2 \\omega\\left[4HhR_2 + R_1^2\\left(R_2 - R_1\\right)\\right]} $$
         <div class="row justify-content-center" style="align-items:center;">
            <div class="col-md-2">
               $$\μ  = $$
            </div>
            <div class="row justify-content-center col-md-3" style="flex-wrap:nowrap; align-items:center;">
               <input  type='number' style="margin:0 5px; width:70%" id='act3-mu-inp' class='form-control fs-16px' /><span style="display:contents;"> Ns/m<sup>2</sup></span>
            </div>
            
         </div>
         <br>
         <button class='btn btn-info btn-sm std-btn' onclick='a3_verify_mu();' id='act3-vf-btn3'>Verify</button>
      </div>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
function a3_verify_mu() {
    let inp = (document.getElementById('act3-mu-inp'));
    console.log(mu_a3);
    if (!verify_values(parseFloat(inp.value), mu_a3)) {
        inp.style.border = '1px solid red';
        alert('Incorrect value');
        return;
    }
    else {
        inp.style.border = '1px solid #ced4da';
        inp.disabled = true;
    }
    alert('Great!! Your calculation is correct.');
    let div = (document.getElementById('act3-mu-div'));
    div.innerHTML = '';
    div.innerHTML = `
      <p>
         $$\μ = \\frac{2\\left(R_2 - R_1\\right)\× hT}{\π R_1^2 \\omega\\left[4HhR_2 + R_1^2\\left(R_2 - R_1\\right)\\right]} =  ${parseFloat(mu_a3.toFixed(3))} \\ Ns/m^2 $$
      </p>
      <br>
   `;
    act3_div.innerHTML += `
      
         <button class='btn btn-info btn-sm std-btn' onclick='activity_completed(this);' id='act3-btn1'>Next</button>
   `;
    setTimeout(() => {
        MathJax.typeset();
    }, 100);
}
// activity3();
//# sourceMappingURL=activity3.js.map