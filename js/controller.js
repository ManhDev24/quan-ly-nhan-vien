function formatCash(str) {
  return str
    .split("")
    .reverse()
    .reduce((prev, next, index) => {
      return (index % 3 ? next : next + ".") + prev;
    });
}

function layThongTinNV() {
  var nv = new employee();
  nv.tk = document.getElementById("tknv").value;
  nv.hoTen = document.getElementById("name").value;
  nv.email = document.getElementById("email").value;
  nv.mk = document.getElementById("password").value;
  nv.ngay = document.getElementById("datepicker").value;
  nv.luong = document.getElementById("luongCB").value;
  nv.chucVu = document.getElementById("chucvu").value;
  nv.gioLam = document.getElementById("gioLam").value;
  return nv;
}

function render(array) {
  var content = "";
  array.forEach(function (nv) {
    var list = `
      <tr>
        <td>${nv.tk}</td>
        <td>${nv.hoTen}</td>
        <td>${nv.email}</td>
        <td>${nv.ngay}</td>
        <td>${nv.chucVu}</td>
        <td>${formatCash(nv.tongLuong().toString())}</td>
        <td>${nv.xepLoai()}</td>
        <td>
        <button  onclick="checkNV('${
          nv.tk
        }')" class="btn btn-primary ">Sửa</button>
        <button onclick="deleteButton('${
          nv.tk
        }')" class="btn btn-danger">Xóa</button>
        </td>
      </tr>`;
    content += list;
  });
  document.querySelector("#tableDanhSach").innerHTML = `${content}`;
}

function deleteNV(id, array) {
  let index = array.findIndex(function (item) {
    return item.tk == id;
  });
  array.splice(index, 1);
}

function show() {
  clearError();
  document.querySelector("#form").reset();
  $("#myModal").modal("show");
  unlockButton("btnThemNV");
  lockButton("btnCapNhat");
  document.querySelector("#tknv").disabled = false;
}
function lockButton(id) {
  document.getElementById(id).style.display = "none";
}
function unlockButton(id) {
  document.getElementById(id).style.display = "block";
}

function clearError() {
  document.querySelector("#tbTKNV").style.display = "none";
  document.querySelector("#tbTKNV").innerHTML = "";

  document.querySelector("#tbTen").style.display = "none";
  document.querySelector("#tbTen").innerHTML = "";

  document.querySelector("#tbEmail").style.display = "none";
  document.querySelector("#tbEmail").innerHTML = "";

  document.querySelector("#tbMatKhau").style.display = "none";
  document.querySelector("#tbMatKhau").innerHTML = "";

  document.querySelector("#tbNgay").style.display = "none";
  document.querySelector("#tbNgay").innerHTML = "";

  document.querySelector("#tbLuongCB").style.display = "none";
  document.querySelector("#tbLuongCB").innerHTML = "";

  document.querySelector("#tbChucVu").style.display = "none";
  document.querySelector("#tbChucVu").innerHTML = "";

  document.querySelector("#tbGiolam").style.display = "none";
  document.querySelector("#tbGiolam").innerHTML = "";
}
