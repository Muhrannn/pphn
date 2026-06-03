// =====================================
// O2
// =====================================

function toggleO2(){

    const value =
    document.getElementById(
        "o2_type"
    ).value;

    const box =
    document.getElementById(
        "ventilator_box"
    );

    if(value === "Ventilator"){

        box.style.display =
        "inline-block";

    }

    else{

        box.style.display =
        "none";

    }

}

// =====================================
// ASD
// =====================================

function toggleASD(){

    const ias =
    document.querySelector(
        'input[name="ias"]:checked'
    ).value;

    const box =
    document.getElementById(
        "asd-box"
    );

    if(ias === "3"){

        box.style.display = "flex";

    }

    else{

        box.style.display = "none";

    }

}

// =====================================
// VSD
// =====================================

function toggleVSD(){

    const ivs =
    document.querySelector(
        'input[name="ivs"]:checked'
    ).value;

    const box =
    document.getElementById(
        "vsd-box"
    );

    if(ivs === "2"){

        box.style.display = "flex";

    }

    else{

        box.style.display = "none";

    }

}

// =====================================
// PULMONARY VEIN
// =====================================

function togglePulmonaryVein(){

    const value =
    document.getElementById(
        "pulmonary_vein"
    ).value;

    const tapvd =
    document.getElementById(
        "tapvd_type"
    );

    if(value === "TAPVD"){

        tapvd.style.display =
        "inline-block";

    }

    else{

        tapvd.style.display =
        "none";

    }

}

// =====================================
// AORTA
// =====================================

function toggleAorta(){

    const value =
    document.getElementById(
        "aorta_type"
    ).value;

    const coarc =
    document.getElementById(
        "coarc_box"
    );

    const iaa =
    document.getElementById(
        "iaa_box"
    );

    coarc.style.display =
    "none";

    iaa.style.display =
    "none";

    if(value === "Coarctation"){

        coarc.style.display =
        "inline-block";

    }

    else if(value === "IAA"){

        iaa.style.display =
        "inline-block";

    }

}

// =====================================
// MITRAL
// =====================================

function toggleMV(){

    const value =
    document.querySelector(
        'input[name="mv"]:checked'
    ).value;

    const pgBox =
    document.getElementById(
        "mv_pg_box"
    );

    if(value === "normal"){

        pgBox.style.display =
        "none";

    }

    else{

        pgBox.style.display =
        "inline-block";

    }

}

// =====================================
// TRICUSPID
// =====================================

function toggleTV(){

    const value =
    document.querySelector(
        'input[name="tv"]:checked'
    ).value;

    const pgBox =
    document.getElementById(
        "tv_pg_box"
    );

    if(value === "normal"){

        pgBox.style.display =
        "none";

    }

    else{

        pgBox.style.display =
        "inline-block";

    }

}

// =====================================
// PDA
// =====================================

function togglePDA(){

    const value =
    document.getElementById(
        "pda"
    ).value;

    const box =
    document.getElementById(
        "pda_box"
    );

    if(value === "PDA"){

        box.style.display =
        "inline-block";

    }

    else{

        box.style.display =
        "none";

    }

}


function togglePVFlow(){

    const value =
    document.getElementById(
        "pv_flow"
    ).value;

    const box =
    document.getElementById(
        "pv_velocity_box"
    );

    if(value === "Pulsatile"){

        box.style.display =
        "inline-block";

    }

    else{

        box.style.display =
        "none";

    }

}


// =====================================
// AORTIC
// =====================================

function toggleAVV(){

    const value =
    document.querySelector(
        'input[name="avv"]:checked'
    ).value;

    const pgBox =
    document.getElementById(
        "avv_pg_box"
    );

    if(value === "normal"){

        pgBox.style.display =
        "none";

    }

    else{

        pgBox.style.display =
        "inline-block";

    }

}

// =====================================
// PULMONARY VALVE
// =====================================

function togglePV(){

    const value =
    document.querySelector(
        'input[name="pv"]:checked'
    ).value;

    const pgBox =
    document.getElementById(
        "pv_pg_box"
    );

    if(value === "normal"){

        pgBox.style.display =
        "none";

    }

    else{

        pgBox.style.display =
        "inline-block";

    }

}

// =====================================
// MPA
// =====================================

function toggleMPA(){

    const value =
    document.getElementById(
        "mpa"
    ).value;

    const mm =
    document.getElementById(
        "mpa_mm_box"
    );

    if(value === "Stenotic"){

        mm.style.display =
        "inline-block";

    }

    else{

        mm.style.display =
        "none";

    }

}

// =====================================
// RPA
// =====================================

function toggleRPA(){

    const value =
    document.getElementById(
        "rpa"
    ).value;

    const extra =
    document.getElementById(
        "rpa_extra"
    );

    if(value === "Stenotic"){

        extra.style.display =
        "inline-block";

    }

    else{

        extra.style.display =
        "none";

    }

}

function toggleRPAMM(){

    const value =
    document.getElementById(
        "rpa_position"
    ).value;

    const mm =
    document.getElementById(
        "rpa_mm"
    );

    if(value === "Proximal"){

        mm.style.display =
        "inline-block";

    }

    else{

        mm.style.display =
        "none";

    }

}

function toggleAorta(){

    const value =
    document.getElementById(
        "aorta_type"
    ).value;

    const coarc =
    document.getElementById(
        "coarc_box"
    );

    const iaa =
    document.getElementById(
        "iaa_box"
    );

    coarc.style.display = "none";
    iaa.style.display = "none";

    if(value === "Coarctation"){

        coarc.style.display =
        "inline-block";

    }

    else if(value === "IAA"){

        iaa.style.display =
        "inline-block";

    }

}

function toggleMPA(){

    const value =
    document.getElementById(
        "mpa"
    ).value;

    const mm =
    document.getElementById(
        "mpa_mm_box"
    );

    if(value === "Stenotic"){

        mm.style.display =
        "inline-block";

    }

    else{

        mm.style.display =
        "none";

    }

}

function toggleRPA(){

    const value =
    document.getElementById(
        "rpa"
    ).value;

    const extra =
    document.getElementById(
        "rpa_extra"
    );

    if(value === "Stenotic"){

        extra.style.display =
        "inline-block";

    }

    else{

        extra.style.display =
        "none";

    }

}

function toggleRPAMM(){

    const value =
    document.getElementById(
        "rpa_position"
    ).value;

    const mm =
    document.getElementById(
        "rpa_mm"
    );

    if(value === "Proximal"){

        mm.style.display =
        "inline-block";

    }

    else{

        mm.style.display =
        "none";

    }

}

// =====================================
// LPA
// =====================================

function toggleLPA(){

    const value =
    document.getElementById(
        "lpa"
    ).value;

    const extra =
    document.getElementById(
        "lpa_extra"
    );

    if(value === "Stenotic"){

        extra.style.display =
        "inline-block";

    }

    else{

        extra.style.display =
        "none";

    }

}

function toggleLPAMM(){

    const value =
    document.getElementById(
        "lpa_position"
    ).value;

    const mm =
    document.getElementById(
        "lpa_mm"
    );

    if(value === "Proximal"){

        mm.style.display =
        "inline-block";

    }

    else{

        mm.style.display =
        "none";

    }

}

// =====================================
// DUCTUS
// =====================================

function toggleDuctus(){

    const value =
    document.getElementById(
        "ductus"
    ).value;

    console.log(value);

}

// =====================================
// GENERATE REPORT
// =====================================

function generateReport(){

    // =================================
    // SITUS
    // =================================

    // =================================
// PATIENT INFO
// =================================

const patientName =
document.getElementById(
    "patient_name"
).value;

const nrm =
document.getElementById(
    "nrm"
).value;

const bloodPressure =
document.getElementById(
    "blood_pressure"
).value;

const o2Type =
document.getElementById(
    "o2_type"
).value;

let o2Result = "";

if(o2Type === "Ventilator"){

    const peep =
    document.getElementById(
        "peep"
    ).value;

    const fio2 =
    document.getElementById(
        "fio2"
    ).value;

    const flow =
    document.getElementById(
        "flow"
    ).value;

    o2Result =
    `Ventilator PEEP ${peep}, FiO2 ${fio2}, Flow ${flow}`;

}

else{

    o2Result =
    o2Type;

}

const indication =
document.getElementById(
    "indication"
).value;

const dob =
document.getElementById(
    "dob"
).value;

const weight =
document.getElementById(
    "weight"
).value;

const height =
document.getElementById(
    "height"
).value;

const o2Sat =
document.getElementById(
    "o2_sat"
).value;

const hr =
document.getElementById(
    "hr"
).value;



    const situsChoice =
    document.querySelector(
        'input[name="situs"]:checked'
    ).value;

    let situs = "";

    if(situsChoice === "1"){

        situs =
        "Situs Solitus";

    }

    else if(situsChoice === "2"){

        situs =
        "Ambiguous";

    }

    else{

        situs =
        "Inversus";

    }

    // =================================
    // AV
    // =================================

    const avChoice =
    document.querySelector(
        'input[name="av"]:checked'
    ).value;

    let av = "";

    if(avChoice === "1"){

        av =
        "AV Concordance";

    }

    else{

        av =
        "Discordance";

    }

    // =================================
    // IAS
    // =================================

    const iasChoice =
    document.querySelector(
        'input[name="ias"]:checked'
    ).value;

    let ias = "";

    if(iasChoice === "1"){

        ias =
        "Intact";

    }

    else if(iasChoice === "2"){

        ias =
        "PFO";

    }

    else{

        const type =
        document.getElementById(
            "asd_type"
        ).value;

        const from =
        document.getElementById(
            "asd_from"
        ).value;

        const to =
        document.getElementById(
            "asd_to"
        ).value;

        ias =
        `${type} ASD ${from} to ${to} Shunt`;

    }

    // =================================
    // IVS
    // =================================

    const ivsChoice =
    document.querySelector(
        'input[name="ivs"]:checked'
    ).value;

    let ivs = "";

    if(ivsChoice === "1"){

        ivs =
        "Intact";

    }

    else{

        const type =
        document.getElementById(
            "vsd_type"
        ).value;

        const from =
        document.getElementById(
            "vsd_from"
        ).value;

        const to =
        document.getElementById(
            "vsd_to"
        ).value;

        ivs =
        `${type} VSD ${from} to ${to} Shunt`;

    }

    const mv =
document.querySelector(
    'input[name="mv"]:checked'
).value;

let mitral = "";

if(mv === "normal"){

    mitral = "Normal";

}

else if(mv === "stenotic"){

    const pg =
    document.getElementById(
        "mv_pg"
    ).value;

    mitral =
    `Stenotic Valvar PG ${pg} mmHG`;

}

else if(mv === "sub"){

    const pg =
    document.getElementById(
        "mv_pg"
    ).value;

    mitral =
    `Sub Valvar PG ${pg} mmHG`;

}

else{

    const pg =
    document.getElementById(
        "mv_pg"
    ).value;

    mitral =
    `Insufficiency PG ${pg} mmHG`;

}

    const tv =
document.querySelector(
    'input[name="tv"]:checked'
).value;

let tricuspid = "";

if(tv === "normal"){

    tricuspid = "Normal";

}

else if(tv === "stenotic"){

    const pg =
    document.getElementById(
        "tv_pg"
    ).value;

    tricuspid =
    `Stenotic Valvar PG ${pg} mmHG`;

}

else if(tv === "sub"){

    const pg =
    document.getElementById(
        "tv_pg"
    ).value;

    tricuspid =
    `Sub Valvar PG ${pg} mmHG`;

}

else{

    const pg =
    document.getElementById(
        "tv_pg"
    ).value;

    tricuspid =
    `Insufficiency PG ${pg} mmHG`;

}

    const avv =
document.querySelector(
    'input[name="avv"]:checked'
).value;

let aorticValve = "";

if(avv === "normal"){

    aorticValve = "Normal";

}

else if(avv === "stenotic"){

    const pg =
    document.getElementById(
        "avv_pg"
    ).value;

    aorticValve =
    `Stenotic Valvar PG ${pg} mmHG`;

}

else if(avv === "sub"){

    const pg =
    document.getElementById(
        "avv_pg"
    ).value;

    aorticValve =
    `Sub Valvar PG ${pg} mmHG`;

}

else{

    const pg =
    document.getElementById(
        "avv_pg"
    ).value;

    aorticValve =
    `Insufficiency PG ${pg} mmHG`;

}

const pv =
document.querySelector(
    'input[name="pv"]:checked'
).value;

let pulmonaryValve = "";

if(pv === "normal"){

    pulmonaryValve = "Normal";

}

else if(pv === "stenotic"){

    const pg =
    document.getElementById(
        "pv_pg"
    ).value;

    pulmonaryValve =
    `Stenotic Valvar PG ${pg} mmHG`;

}

else if(pv === "sub"){

    const pg =
    document.getElementById(
        "pv_pg"
    ).value;

    pulmonaryValve =
    `Sub Valvar PG ${pg} mmHG`;

}

else{

    const pg =
    document.getElementById(
        "pv_pg"
    ).value;

    pulmonaryValve =
    `Insufficiency PG ${pg} mmHG`;

}

const svc =
document.getElementById(
    "svc"
).value;

const ivc =
document.getElementById(
    "ivc"
).value;

const pulmonaryVein =
document.getElementById(
    "pulmonary_vein"
).value;

let pvResult = "";

if(pulmonaryVein === "TAPVD"){

    const type =
    document.getElementById(
        "tapvd_type"
    ).value;

    pvResult =
    `TAPVD (${type})`;

}

else{

    pvResult =
    pulmonaryVein;

}

const arch =
document.getElementById(
    "arch"
).value;

const aortaType =
document.getElementById(
    "aorta_type"
).value;

let aorta = "";

if(aortaType === "Normal Branching"){

    aorta =
    `${arch} Arch, Normal Branching`;

}

else if(aortaType === "Coarctation"){

    const coarc =
    document.getElementById(
        "coarc_type"
    ).value;

    aorta =
    `${arch} Arch, Coarctation (${coarc})`;

}

else{

    const iaa =
    document.getElementById(
        "iaa_type"
    ).value;

    aorta =
    `${arch} Arch, IAA Type ${iaa}`;

}

const mpa =
document.getElementById(
    "mpa"
).value;

let mpaResult = "";

if(mpa === "Stenotic"){

    const mm =
    document.querySelector(
        '#mpa_mm_box input'
    ).value;

    mpaResult =
    `Stenotic (${mm} mm)`;

}

else{

    mpaResult = mpa;

}

const paBranch =
document.getElementById(
    "pa_branch"
).value;

const rpa =
document.getElementById(
    "rpa"
).value;

let rpaResult = "";

if(rpa === "Stenotic"){

    const pos =
    document.getElementById(
        "rpa_position"
    ).value;

    if(pos === "Proximal"){

        const mm =
        document.querySelector(
            '#rpa_mm input'
        ).value;

        rpaResult =
        `Stenotic ${pos} (${mm} mm)`;

    }

    else{

        rpaResult =
        `Stenotic ${pos}`;

    }

}

else{

    rpaResult = rpa;

}

const lpa =
document.getElementById(
    "lpa"
).value;

let lpaResult = "";

if(lpa === "Stenotic"){

    const pos =
    document.getElementById(
        "lpa_position"
    ).value;

    if(pos === "Proximal"){

        const mm =
        document.querySelector(
            '#lpa_mm input'
        ).value;

        lpaResult =
        `Stenotic ${pos} (${mm} mm)`;

    }

    else{

        lpaResult =
        `Stenotic ${pos}`;

    }

}

else{

    lpaResult = lpa;

}

const ductus =
document.getElementById(
    "ductus"
).value;


const rvlv =
document.getElementById(
    "rvlv"
).value;

const septal =
document.getElementById(
    "septal"
).value;

const lvsei =
document.getElementById(
    "lvsei"
).value;

const tvAnnulus =
document.getElementById(
    "tv_annulus"
).value;

const mvAnnulus =
document.getElementById(
    "mv_annulus"
).value;

const ef =
document.getElementById(
    "ef"
).value;

const fs =
document.getElementById(
    "fs"
).value;

const tapse =
document.getElementById(
    "tapse"
).value;

const sdRatio =
document.getElementById(
    "sd_ratio"
).value;

const fac =
document.getElementById(
    "fac"
).value;

const mpi =
document.getElementById(
    "mpi"
).value;

const paatRvet =
document.getElementById(
    "paat_rvet"
).value;

const lvFree =
document.getElementById(
    "lv_freewall"
).value;

const lvSeptal =
document.getElementById(
    "lv_septal"
).value;

const lvGlobal =
document.getElementById(
    "lv_global"
).value;

const rvFree =
document.getElementById(
    "rv_freewall"
).value;

const rvSeptal =
document.getElementById(
    "rv_septal"
).value;

const rvGlobal =
document.getElementById(
    "rv_global"
).value;

const pda =
document.getElementById(
    "pda"
).value;

let pdaResult = "";

if(pda === "No PDA"){

    pdaResult =
    "No PDA";

}

else{

    const mm =
    document.getElementById(
        "pda_mm"
    ).value;

    const flow =
    document.getElementById(
        "pda_flow"
    ).value;

    const pg =
    document.getElementById(
        "pda_pg"
    ).value;

    const vmax =
    document.getElementById(
        "pda_vmax"
    ).value;

    pdaResult =
    `${mm} mm, Flow ${flow}, PG ${pg} mmHG, Vmax ${vmax} M/s`;

}



const laAo =
document.getElementById(
    "la_ao"
).value;

const ivrt =
document.getElementById(
    "ivrt"
).value;

const mvea =
document.getElementById(
    "mvea"
).value;

const pvFlow =
document.getElementById(
    "pv_flow"
).value;

let pvFlowResult = "";

if(pvFlow === "Non Pulsatile"){

    pvFlowResult =
    "Non Pulsatile";

}

else{

    const velocity =
    document.getElementById(
        "pv_flow_velocity"
    ).value;

    pvFlowResult =
    `Pulsatile ${velocity} cm/s`;

}

const pvVelocity =
document.getElementById(
    "pv_flow_velocity"
).value;


const peakVelocity =
document.getElementById(
    "peak_velocity"
).value;

const endVelocity =
document.getElementById(
    "end_velocity"
).value;

const paFlowType =
document.getElementById(
    "pa_flow_type"
).value;

const other =
document.getElementById(
    "other_findings"
).value;

    // =================================
    // REPORT
    // =================================

    const report = `
Patient Name : ${patientName}

NRM : ${nrm}

DOB (Age) : ${dob}

Body Weight / Height : ${weight} kg / ${height} cm

Blood Pressure : ${bloodPressure}

O2 Saturation / HR : ${o2Sat} / ${hr}

O2 Supplementation : ${o2Result}

Indication : ${indication}

========================================

STRUCTURAL

Abdominal Situs : ${situs}

Atrioventricular Relationship : ${av}

Interatrial Septum : ${ias}

Interventricular Septum : ${ivs}

Valvular :

Mitral Valve : ${mitral}

Tricuspid Valve : ${tricuspid}

Aortic Valve : ${aorticValve}

Pulmonary Valve : ${pulmonaryValve}

Systemic Vein : SVC ${svc}, IVC ${ivc}

Pulmonary Vein : ${pvResult}

Aorta : ${aorta}

Pulmonary Artery :
MPA ${mpaResult}
PA Branch ${paBranch}
RPA ${rpaResult}
LPA ${lpaResult}

Ductus Arteriosus : ${ductus}

========================================
HEMODYNAMIC
========================================

Chambers :
${rvlv} RV/LV,
Septal ${septal},
LV-sEI ${lvsei}

TV Annulus ${tvAnnulus} mm,
MV Annulus ${mvAnnulus} mm

Contractility :
EF ${ef}%,
FS ${fs}%,
TAPSE ${tapse} mm,
S/D Ratio ${sdRatio},
FAC ${fac}%,
MPI ${mpi},
PAAT/RVET ${paatRvet}

Strain :
LV GLS :
FW ${lvFree}%,
Septal ${lvSeptal}%,
Global ${lvGlobal}%

RV GLS :
FW ${rvFree}%,
Septal ${rvSeptal}%,
Global ${rvGlobal}%

PDA :
${pdaResult}

Left Heart Volume Load :
LA/AO ${laAo},
IVRT ${ivrt},
MV E/A ${mvea}

Pulmonary Venous Flow :
${pvFlowResult}

Pulmonary Artery Flow :
Peak ${peakVelocity} cm/s,
End ${endVelocity} cm/s,
${paFlowType}

Other :
${other}

`;

    document.getElementById(
        "report"
    ).value = report;

}

// =====================================
// COPY REPORT
// =====================================

function copyReport(){

    const report =
    document.getElementById(
        "report"
    );

    report.select();

    navigator.clipboard.writeText(
        report.value
    );

    alert(
        "Report Copied!"
    );

}