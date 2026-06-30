function form(){
    let fname, sname, day, month, year, gender, mno, pass;
    fname=document.getElementById("fname").value;
    sname=document.getElementById("sname").value;
    day=document.getElementById("day").value;
    month=document.getElementById("month").value;
    year=document.getElementById("year").value;
    gender=document.getElementById("gender").value;
    mno=document.getElementById("mno").value;
    pass=document.getElementById("pass").value;
    console.log(`First Name=${fname}`);
    console.log(`Last Name=${sname}`);
    console.log(`DAy=${day}`);
    console.log(`Month=${month}`);
    console.log(`Year=${year}`);
    console.log(`Gender=${gender}`);
    console.log(`Mobile/Phone No.=${mno}`);
    console.log(`Password=${pass}`);

}
