var listOfEmployee = [];

var data = localStorage.getItem("listOfEmployee");

if (data != null) {
  var dataRaw = JSON.parse(data);
  for (let index = 0; index < dataRaw.length; index++) {
    var nv = new employee(
      dataRaw[index].tk,
      dataRaw[index].hoTen,
      dataRaw[index].email,
      dataRaw[index].mk,
      dataRaw[index].ngay,
      dataRaw[index].luong,
      dataRaw[index].chucVu,
      dataRaw[index].gioLam
    );
    listOfEmployee.push(nv);
  }
  render(listOfEmployee);
}
function addNV() {
  var nv = layThongTinNV();
  listOfEmployee.push(nv);
  var data = JSON.stringify(listOfEmployee);
  localStorage.setItem("listOfEmployee", data);
  document.querySelector("#form").reset();
  render(listOfEmployee);
}

function deleteButton(id) {
  Swal.fire({
    title: "Are you sure?",
    text: "You won't be able to revert this!",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, delete it!",
  }).then((result) => {
    if (result.isConfirmed) {
      deleteNV(id, listOfEmployee);
      var data = JSON.stringify(listOfEmployee);
      localStorage.setItem("listOfEmployee", data);
      render(listOfEmployee);
      Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success",
      });
    }
  });
}

function checkNV(id) {
  var index = listOfEmployee.findIndex(function (item) {
    return item.tk == id;
  });
  show();
  lockButton("btnThemNV");
  unlockButton("btnCapNhat");
  document.querySelector("#tknv").value = listOfEmployee[index].tk;
  document.querySelector("#name").value = listOfEmployee[index].hoTen;
  document.querySelector("#email").value = listOfEmployee[index].email;
  document.querySelector("#password").value = listOfEmployee[index].mk;
  document.querySelector("#datepicker").value = listOfEmployee[index].ngay;
  document.querySelector("#luongCB").value = listOfEmployee[index].luong;
  document.querySelector("#chucvu").value = listOfEmployee[index].chucVu;
  document.querySelector("#gioLam").value = listOfEmployee[index].gioLam;
  document.querySelector("#tknv").disabled = true;
}

function updateNV() {
  var sv = layThongTinNV();
  var index = listOfEmployee.findIndex(function (item) {
    return item.tk == sv.tk;
  });
  listOfEmployee[index] = sv;
  var data = JSON.stringify(listOfEmployee);
  localStorage.setItem("listOfEmployee", data);
  render(listOfEmployee);
}

function search() {
  let valueSearch = document.querySelector("#searchName").value;
  let searchResult = listOfEmployee.filter(function (item) {
    return item.xepLoai().toLowerCase().includes(valueSearch.toLowerCase());
  });
  console.log(searchResult);
  render(searchResult);
}
