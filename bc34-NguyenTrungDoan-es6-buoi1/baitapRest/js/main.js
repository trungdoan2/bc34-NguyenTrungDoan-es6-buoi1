


function tongDiem(...diemMon) {
    let tongDiem = 0;
    for (let index = 0; index < diemMon.length; index++) {
        tongDiem += diemMon[index];
    }
    console.log(tongDiem);
    return tongDiem
}

document.getElementById('btnKhoi1').onclick = function trungBinh1() {
    let Toan = document.getElementById('inpToan').value * 1;
    let Ly = document.getElementById('inpLy').value *1;
    let Hoa = document.getElementById('inpHoa').value *1;

    let tong = tongDiem(Toan,Ly,Hoa);
    let diemTb1 = tong /3;
    let result = Math.round(diemTb1 * 100) / 100 ;

    console.log(tong);
    console.log(diemTb1);

    document.getElementById('tbKhoi1').innerHTML = result;

}

document.getElementById('btnKhoi2').onclick = function trungBinh2() {
    let Van = document.getElementById('inpVan').value *1;
    let Su = document.getElementById('inpSu').value *1;
    let Dia = document.getElementById('inpDia').value *1;
    let English = document.getElementById('inpEnglish').value *1;

    let tong = tongDiem(Van,Su,Dia,English);
    let diemTb2 = tong /4;
    

 

    document.getElementById('tbKhoi2').innerHTML = diemTb2;

}








