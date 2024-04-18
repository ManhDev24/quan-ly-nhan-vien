function formatCash(str) {
  return str
    .split("")
    .reverse()
    .reduce((prev, next, index) => {
      return (index % 3 ? next : next + ".") + prev;
    });
}
function render(array) {
  var content = "";
  array.reverse().forEach(function (nv) {
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
