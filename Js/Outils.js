function calculateMaleRate4AS () {
    //Calculate general rate for 4AS's males.
    var mt1=parseFloat(document.getElementById('mt1').value);
        mt2=parseFloat(document.getElementById('mt2').value),
        mt3=parseFloat(document.getElementById('mt3').value),

        ar1=parseFloat(document.getElementById('ar1').value),
        ar2=parseFloat(document.getElementById('ar2').value),
        ar3=parseFloat(document.getElementById('ar3').value),

        ir1=parseFloat(document.getElementById('ir1').value),
        ir2=parseFloat(document.getElementById('ir2').value),
        ir3=parseFloat(document.getElementById('ir3').value),

        fr1=parseFloat(document.getElementById('fr1').value),
        fr2=parseFloat(document.getElementById('fr2').value),
        fr3=parseFloat(document.getElementById('fr3').value),

        sn1=parseFloat(document.getElementById('sn1').value),
        sn2=parseFloat(document.getElementById('sn2').value),
        sn3=parseFloat(document.getElementById('sn3').value),
 
        pc1=parseFloat(document.getElementById('pc1').value),
        pc2=parseFloat(document.getElementById('pc2').value),
        pc3=parseFloat(document.getElementById('pc3').value),

        hg1=parseFloat(document.getElementById('hg1').value),
        hg2=parseFloat(document.getElementById('hg2').value),
        hg3=parseFloat(document.getElementById('hg3').value),

        ic1=parseFloat(document.getElementById('ic1').value),
        ic2=parseFloat(document.getElementById('ic2').value),
        ic3=parseFloat(document.getElementById('ic3').value),

        an1=parseFloat(document.getElementById('an1').value),   
        an2=parseFloat(document.getElementById('an2').value),
        an3=parseFloat(document.getElementById('an3').value),

        eps1=parseFloat(document.getElementById('eps1').value),
        eps2=parseFloat(document.getElementById('eps2').value),
        eps3=parseFloat(document.getElementById('eps3').value);
        
    
    var devRate=((((mt1+mt2)/2)*5)+(((ar1+ar2)/2)*5)+(((ir1+ir2)/2)*3)+(((fr1+fr2)/2)*3)+
    (((pc1+pc2)/2)*2)+(((sn1+sn2)/2)*2)+(((hg1+hg2)/2)*2)+((ic1+ic2)/2)+((an1+an2)/2)+
    ((eps1+eps2)/2))/25,

       comRate=((mt3*5)+(ar3*5)+(ir3*3)+(fr3*3)+(sn3*2)+(pc3*2)+(hg3*2)+(ic3+an3+eps3))/25,
    
       generalRate=((devRate*3)+comRate)/4;

    document.getElementById('rate').innerHTML=generalRate;
    document.getElementById('percentage').value=(generalRate*100)/20;
    document.getElementById('percent').innerHTML=(generalRate*100)/20+"%";
    document.getElementById('percentage').style.display='inline-block';
    document.getElementById('percentage').max="100";
    document.getElementById('percentage').min="0";
    document.getElementById('percentage').low="60";
    document.getElementById('percentage').high="0";
    document.getElementById('percentage').optimum="100";

    document.getElementById('percentage3').style.display='none';
    document.getElementById('percentage2').style.display='none';
}
function calculateFemaleRate4AS () {
    //Calculate general rate for 4AS's females.
    var mt1=parseFloat(document.getElementById('mt1').value);
        mt2=parseFloat(document.getElementById('mt2').value),
        mt3=parseFloat(document.getElementById('mt3').value),

        ar1=parseFloat(document.getElementById('ar1').value),
        ar2=parseFloat(document.getElementById('ar2').value),
        ar3=parseFloat(document.getElementById('ar3').value),

        ir1=parseFloat(document.getElementById('ir1').value),
        ir2=parseFloat(document.getElementById('ir2').value),
        ir3=parseFloat(document.getElementById('ir3').value),

        fr1=parseFloat(document.getElementById('fr1').value),
        fr2=parseFloat(document.getElementById('fr2').value),
        fr3=parseFloat(document.getElementById('fr3').value),

        sn1=parseFloat(document.getElementById('sn1').value),
        sn2=parseFloat(document.getElementById('sn2').value),
        sn3=parseFloat(document.getElementById('sn3').value),
 
        pc1=parseFloat(document.getElementById('pc1').value),
        pc2=parseFloat(document.getElementById('pc2').value),
        pc3=parseFloat(document.getElementById('pc3').value),

        hg1=parseFloat(document.getElementById('hg1').value),
        hg2=parseFloat(document.getElementById('hg2').value),
        hg3=parseFloat(document.getElementById('hg3').value),

        ic1=parseFloat(document.getElementById('ic1').value),
        ic2=parseFloat(document.getElementById('ic2').value),
        ic3=parseFloat(document.getElementById('ic3').value),

        an1=parseFloat(document.getElementById('an1').value),   
        an2=parseFloat(document.getElementById('an2').value),
        an3=parseFloat(document.getElementById('an3').value);
        
    
    var devRate=((((mt1+mt2)/2)*5)+(((ar1+ar2)/2)*5)+(((ir1+ir2)/2)*3)+(((fr1+fr2)/2)*3)+
    (((pc1+pc2)/2)*2)+(((sn1+sn2)/2)*2)+(((hg1+hg2)/2)*2)+((ic1+ic2)/2)+((an1+an2)/2))/24,

       comRate=((mt3*5)+(ar3*5)+(ir3*3)+(fr3*3)+(sn3*2)+(pc3*2)+(hg3*2)+(ic3+an3))/24,
    
       generalRate=((devRate*3)+comRate)/4;

    document.getElementById('rate').innerHTML=generalRate;
    document.getElementById('percentage').value=(generalRate*100)/20;
    document.getElementById('percent').innerHTML=(generalRate*100)/20+"%";
    document.getElementById('percentage').style.display='inline-block';
    document.getElementById('percentage').max="100";
    document.getElementById('percentage').min="0";
    document.getElementById('percentage').low="60";
    document.getElementById('percentage').high="0";
    document.getElementById('percentage').optimum="100";

    document.getElementById('percentage2').style.display='none';
    document.getElementById('percentage3').style.display='none';
}
function calculateMaleRate6C(){
    //Calculate general rate for 6C's males.
    var mt1=parseFloat(document.getElementById('6C-mt1').value),
        mt2=parseFloat(document.getElementById('6C-mt2').value),
        mt3=parseFloat(document.getElementById('6C-mt3').value),

        ar1=parseFloat(document.getElementById('6C-ar1').value),
        ar2=parseFloat(document.getElementById('6C-ar2').value),
        ar3=parseFloat(document.getElementById('6C-ar3').value),

        ir1=parseFloat(document.getElementById('6C-ir1').value),
        ir2=parseFloat(document.getElementById('6C-ir2').value),
        ir3=parseFloat(document.getElementById('6C-ir3').value),

        fr1=parseFloat(document.getElementById('6C-fr1').value),
        fr2=parseFloat(document.getElementById('6C-fr2').value),
        fr3=parseFloat(document.getElementById('6C-fr3').value),

        sn1=parseFloat(document.getElementById('6C-sn1').value),
        sn2=parseFloat(document.getElementById('6C-sn2').value),
        sn3=parseFloat(document.getElementById('6C-sn3').value),
 
        pc1=parseFloat(document.getElementById('6C-pc1').value),
        pc2=parseFloat(document.getElementById('6C-pc2').value),
        pc3=parseFloat(document.getElementById('6C-pc3').value),

        hg1=parseFloat(document.getElementById('6C-hg1').value),
        hg2=parseFloat(document.getElementById('6C-hg2').value),
        hg3=parseFloat(document.getElementById('6C-hg3').value),

        ph1=parseFloat(document.getElementById('6C-ph1').value),
        ph2=parseFloat(document.getElementById('6C-ph2').value),
        ph3=parseFloat(document.getElementById('6C-ph3').value),

        an1=parseFloat(document.getElementById('6C-an1').value),   
        an2=parseFloat(document.getElementById('6C-an2').value),
        an3=parseFloat(document.getElementById('6C-an3').value), 

        eps1=parseFloat(document.getElementById('6C-eps1').value),
        eps2=parseFloat(document.getElementById('6C-eps2').value),
        eps3=parseFloat(document.getElementById('6C-eps3').value);
        
    
    var devRate=((((mt1+mt2)/2)*7)+(((ar1+ar2)/2)*3)+(((ir1+ir2)/2)*2)+(((fr1+fr2)/2)*3)+
    (((pc1+pc2)/2)*6)+(((sn1+sn2)/2)*3)+(((hg1+hg2)/2)*2)+(((ph1+ph2)/2)*2)+(((an1+an2)/2)*2)+
    ((eps1+eps2)/2))/31,

    comRate=((mt3*7)+(ar3*3)+(ir3*2)+(fr3*3)+(sn3*3)+(pc3*6)+(hg3*2)+((ph3)*2)+((an3)*2)+eps3)/31,

    generalRate=((devRate*3)+comRate)/4;

    document.getElementById('rate2').innerHTML=generalRate;
    document.getElementById('percentage2').value=(generalRate*100)/20;
    document.getElementById('percent2').innerHTML=(generalRate*100)/20+"%";
    document.getElementById('percentage2').style.display='inline-block';
    document.getElementById('percentage2').max="100";
    document.getElementById('percentage2').min="0";
    document.getElementById('percentage2').low="60";
    document.getElementById('percentage2').high="0";
    document.getElementById('percentage2').optimum="100";

    document.getElementById('percentage').style.display='none';
    document.getElementById('percentage3').style.display='none';
}
function calculateFemaleRate6C(){
    //Calculate general rate for 6C's females.
    var mt1=parseFloat(document.getElementById('6C-mt1').value),
        mt2=parseFloat(document.getElementById('6C-mt2').value),
        mt3=parseFloat(document.getElementById('6C-mt3').value),

        ar1=parseFloat(document.getElementById('6C-ar1').value),
        ar2=parseFloat(document.getElementById('6C-ar2').value),
        ar3=parseFloat(document.getElementById('6C-ar3').value),

        ir1=parseFloat(document.getElementById('6C-ir1').value),
        ir2=parseFloat(document.getElementById('6C-ir2').value),
        ir3=parseFloat(document.getElementById('6C-ir3').value),

        fr1=parseFloat(document.getElementById('6C-fr1').value),
        fr2=parseFloat(document.getElementById('6C-fr2').value),
        fr3=parseFloat(document.getElementById('6C-fr3').value),

        sn1=parseFloat(document.getElementById('6C-sn1').value),
        sn2=parseFloat(document.getElementById('6C-sn2').value),
        sn3=parseFloat(document.getElementById('6C-sn3').value),
 
        pc1=parseFloat(document.getElementById('6C-pc1').value),
        pc2=parseFloat(document.getElementById('6C-pc2').value),
        pc3=parseFloat(document.getElementById('6C-pc3').value),

        hg1=parseFloat(document.getElementById('6C-hg1').value),
        hg2=parseFloat(document.getElementById('6C-hg2').value),
        hg3=parseFloat(document.getElementById('6C-hg3').value),

        ph1=parseFloat(document.getElementById('6C-ph1').value),
        ph2=parseFloat(document.getElementById('6C-ph2').value),
        ph3=parseFloat(document.getElementById('6C-ph3').value),

        an1=parseFloat(document.getElementById('6C-an1').value),   
        an2=parseFloat(document.getElementById('6C-an2').value),
        an3=parseFloat(document.getElementById('6C-an3').value);

        
    
    var devRate=((((mt1+mt2)/2)*7)+(((ar1+ar2)/2)*3)+(((ir1+ir2)/2)*2)+(((fr1+fr2)/2)*3)+
    (((pc1+pc2)/2)*6)+(((sn1+sn2)/2)*3)+(((hg1+hg2)/2)*2)+(((ph1+ph2)/2)*2)+(((an1+an2)/2)*2))/30,

    comRate=((mt3*7)+(ar3*3)+(ir3*2)+(fr3*3)+(sn3*3)+(pc3*6)+(hg3*2)+((ph3)*2)+((an3)*2))/30,

    generalRate=((devRate*3)+comRate)/4;

    document.getElementById('rate2').innerHTML=generalRate;
    document.getElementById('percentage2').value=(generalRate*100)/20;
    document.getElementById('percent2').innerHTML=(generalRate*100)/20+"%";
    document.getElementById('percentage2').style.display='inline-block';
    document.getElementById('percentage2').max="100";
    document.getElementById('percentage2').min="0";
    document.getElementById('percentage2').low="60";
    document.getElementById('percentage2').high="0";
    document.getElementById('percentage2').optimum="100";

    document.getElementById('percentage').style.display='none';
    document.getElementById('percentage3').style.display='none';
}
function calculateMaleRate5C(){
    //Calculate general rate for 6C's males.
    var mt1=parseFloat(document.getElementById('5C-mt1').value),
        mt2=parseFloat(document.getElementById('5C-mt2').value),
        mt3=parseFloat(document.getElementById('5C-mt3').value),

        ar1=parseFloat(document.getElementById('5C-ar1').value),
        ar2=parseFloat(document.getElementById('5C-ar2').value),
        ar3=parseFloat(document.getElementById('5C-ar3').value),

        ir1=parseFloat(document.getElementById('5C-ir1').value),
        ir2=parseFloat(document.getElementById('5C-ir2').value),
        ir3=parseFloat(document.getElementById('5C-ir3').value),

        fr1=parseFloat(document.getElementById('5C-fr1').value),
        fr2=parseFloat(document.getElementById('5C-fr2').value),
        fr3=parseFloat(document.getElementById('5C-fr3').value),

        sn1=parseFloat(document.getElementById('5C-sn1').value),
        sn2=parseFloat(document.getElementById('5C-sn2').value),
        sn3=parseFloat(document.getElementById('5C-sn3').value),
 
        pc1=parseFloat(document.getElementById('5C-pc1').value),
        pc2=parseFloat(document.getElementById('5C-pc2').value),
        pc3=parseFloat(document.getElementById('5C-pc3').value),

        hg1=parseFloat(document.getElementById('5C-hg1').value),
        hg2=parseFloat(document.getElementById('5C-hg2').value),
        hg3=parseFloat(document.getElementById('5C-hg3').value),

        ph1=parseFloat(document.getElementById('5C-ph1').value),
        ph2=parseFloat(document.getElementById('5C-ph2').value),
        ph3=parseFloat(document.getElementById('5C-ph3').value),

        an1=parseFloat(document.getElementById('5C-an1').value),   
        an2=parseFloat(document.getElementById('5C-an2').value),
        an3=parseFloat(document.getElementById('5C-an3').value), 

        ic1=parseFloat(document.getElementById('5C-ic1').value),   
        ic2=parseFloat(document.getElementById('5C-ic2').value),
        ic3=parseFloat(document.getElementById('5C-ic3').value),

        eps1=parseFloat(document.getElementById('5C-eps1').value),
        eps2=parseFloat(document.getElementById('5C-eps2').value),
        eps3=parseFloat(document.getElementById('5C-eps3').value);
        
    
    var devRate=((((mt1+mt2)/2)*6)+(((ar1+ar2)/2)*3)+(((ir1+ir2)/2)*2)+(((fr1+fr2)/2)*3)+
    (((pc1+pc2)/2)*5)+(((sn1+sn2)/2)*3)+(((hg1+hg2)/2)*2)+(((ph1+ph2)/2)*2)+(((an1+an2)/2)*2)+
    ((eps1+eps2)/2)+((ic1+ic2)/2))/30,

    comRate=((mt3*6)+(ar3*3)+(ir3*2)+(fr3*3)+(sn3*3)+(pc3*5)+(hg3*2)+((ph3)*2)+((an3)*2)+eps3+ic3)/30,

    generalRate=((devRate*3)+comRate)/4;

    document.getElementById('rate3').innerHTML=generalRate;
    document.getElementById('percentage3').value=(generalRate*100)/20;
    document.getElementById('percent3').innerHTML=(generalRate*100)/20+"%";
    document.getElementById('percentage3').style.display='inline-block';
    document.getElementById('percentage3').max="100";
    document.getElementById('percentage3').min="0";
    document.getElementById('percentage3').low="60";
    document.getElementById('percentage3').high="0";
    document.getElementById('percentage3').optimum="100";
    
    document.getElementById('percentage').style.display='none';
    document.getElementById('percentage2').style.display='none';

}
function calculateFemaleRate5C(){
    //Calculate general rate for 6C's males.
    var mt1=parseFloat(document.getElementById('5C-mt1').value),
        mt2=parseFloat(document.getElementById('5C-mt2').value),
        mt3=parseFloat(document.getElementById('5C-mt3').value),

        ar1=parseFloat(document.getElementById('5C-ar1').value),
        ar2=parseFloat(document.getElementById('5C-ar2').value),
        ar3=parseFloat(document.getElementById('5C-ar3').value),

        ir1=parseFloat(document.getElementById('5C-ir1').value),
        ir2=parseFloat(document.getElementById('5C-ir2').value),
        ir3=parseFloat(document.getElementById('5C-ir3').value),

        fr1=parseFloat(document.getElementById('5C-fr1').value),
        fr2=parseFloat(document.getElementById('5C-fr2').value),
        fr3=parseFloat(document.getElementById('5C-fr3').value),

        sn1=parseFloat(document.getElementById('5C-sn1').value),
        sn2=parseFloat(document.getElementById('5C-sn2').value),
        sn3=parseFloat(document.getElementById('5C-sn3').value),
 
        pc1=parseFloat(document.getElementById('5C-pc1').value),
        pc2=parseFloat(document.getElementById('5C-pc2').value),
        pc3=parseFloat(document.getElementById('5C-pc3').value),

        hg1=parseFloat(document.getElementById('5C-hg1').value),
        hg2=parseFloat(document.getElementById('5C-hg2').value),
        hg3=parseFloat(document.getElementById('5C-hg3').value),

        ph1=parseFloat(document.getElementById('5C-ph1').value),
        ph2=parseFloat(document.getElementById('5C-ph2').value),
        ph3=parseFloat(document.getElementById('5C-ph3').value),

        an1=parseFloat(document.getElementById('5C-an1').value),   
        an2=parseFloat(document.getElementById('5C-an2').value),
        an3=parseFloat(document.getElementById('5C-an3').value), 

        ic1=parseFloat(document.getElementById('5C-ic1').value),   
        ic2=parseFloat(document.getElementById('5C-ic2').value),
        ic3=parseFloat(document.getElementById('5C-ic3').value);
        
    
    var devRate=((((mt1+mt2)/2)*6)+(((ar1+ar2)/2)*3)+(((ir1+ir2)/2)*2)+(((fr1+fr2)/2)*3)+
    (((pc1+pc2)/2)*5)+(((sn1+sn2)/2)*3)+(((hg1+hg2)/2)*2)+(((ph1+ph2)/2)*2)+(((an1+an2)/2)*2)+((ic1+ic2)/2))/29,

    comRate=((mt3*6)+(ar3*3)+(ir3*2)+(fr3*3)+(sn3*3)+(pc3*5)+(hg3*2)+((ph3)*2)+((an3)*2)+ic3)/29,

    generalRate=((devRate*3)+comRate)/4;

    document.getElementById('rate3').innerHTML=generalRate;
    document.getElementById('percentage3').value=(generalRate*100)/20;
    document.getElementById('percent3').innerHTML=(generalRate*100)/20+"%";
    document.getElementById('percentage3').style.display='inline-block';
    document.getElementById('percentage3').max="100";
    document.getElementById('percentage3').min="0";
    document.getElementById('percentage3').low="60";
    document.getElementById('percentage3').high="0";
    document.getElementById('percentage3').optimum="100";

    document.getElementById('percentage').style.display='none';
    document.getElementById('percentage2').style.display='none';
}
function show4AS(){
    /*When you click on the 4AS's button, this function will show all hidden elements for 4AS.*/
    document.getElementById('content').style.display='block';
    document.getElementById('calculate-btn-male').style.display='inline';
    document.getElementById('calculate-btn-female').style.display='inline';
    document.getElementById('moyenne').style.display='block';
    document.getElementById('footer').style.display='none';

    document.getElementById('content2').style.display='none';
    document.getElementById('calculate-btn-male2').style.display='none';
    document.getElementById('calculate-btn-female2').style.display='none';
    document.getElementById('moyenne2').style.display='none';
    document.getElementById('footer2').style.display='none';
    
    document.getElementById('content3').style.display='none';
    document.getElementById('calculate-btn-male3').style.display='none';
    document.getElementById('calculate-btn-female3').style.display='none';
    document.getElementById('moyenne3').style.display='none';
    document.getElementById('rate3').style.display='none';
    document.getElementById('footer').style.display='none';
    
}
function show6C(){
    /*When you click on the 6C's button, this function will show all hidden elements for 6C.*/
    document.getElementById('content').style.display='none';
    document.getElementById('calculate-btn-male').style.display='none';
    document.getElementById('calculate-btn-female').style.display='none';
    document.getElementById('moyenne').style.display='none';
    document.getElementById('rate').style.display='none';
    document.getElementById('footer').style.display='none';  

    document.getElementById('content3').style.display='none';
    document.getElementById('calculate-btn-male3').style.display='none';
    document.getElementById('calculate-btn-female3').style.display='none';
    document.getElementById('moyenne3').style.display='none';
    document.getElementById('rate3').style.display='none';
    document.getElementById('footer').style.display='none';
    
    document.getElementById('content2').style.display='block';
    document.getElementById('calculate-btn-male2').style.display='inline';
    document.getElementById('calculate-btn-female2').style.display='inline';
    document.getElementById('moyenne2').style.display='block';
    document.getElementById('footer2').style.display='none';
}
function show5C(){
    /*When you click on the 6C's button, this function will show all hidden elements for 6C.*/
    document.getElementById('content').style.display='none';
    document.getElementById('calculate-btn-male').style.display='none';
    document.getElementById('calculate-btn-female').style.display='none';
    document.getElementById('moyenne').style.display='none';
    document.getElementById('rate').style.display='none';
    document.getElementById('footer').style.display='none';  

    document.getElementById('content3').style.display='block';
    document.getElementById('calculate-btn-male3').style.display='inline';
    document.getElementById('calculate-btn-female3').style.display='inline';
    document.getElementById('moyenne3').style.display='block';
    document.getElementById('footer').style.display='none';
    
    document.getElementById('content2').style.display='none';
    document.getElementById('calculate-btn-male2').style.display='none';
    document.getElementById('calculate-btn-female2').style.display='none';
    document.getElementById('moyenne2').style.display='none';
    document.getElementById('footer2').style.display='none';
}