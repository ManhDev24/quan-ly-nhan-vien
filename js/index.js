var listOfEmployee = [];
var data = localStorage.getItem("listOfEmployee");

if (data != null) {
  var dataRaw = JSON.parse(data);
  for (let index = dataRaw.length - 1; index >= 0; index--) {
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

  var isTKNVValid =
    validateIsNull("#tbTKNV", nv.tk) && validateSize("#tbTKNV", nv.tk, 4, 6);

  var isTenValid =
    validateIsNull("#tbTen", nv.hoTen) &&
    validateEmployeeName("#tbTen", nv.hoTen);

  var isEmailValid =
    validateIsNull("#tbEmail", nv.email) && validateEmail("#tbEmail", nv.email);

  var isMatKhauValid =
    validateIsNull("#tbMatKhau", nv.mk) &&
    validateSize("#tbMatKhau", nv.mk, 6, 10) &&
    validatePassword("#tbMatKhau", nv.mk);

  var isDateValid =
    validateIsNull("#tbNgay", nv.ngay) && validateDate("#tbNgay", nv.ngay);
  var isLuongValid =
    validateIsNull("#tbLuongCB", nv.luong) &&
    validateLuongCoBan("#tbLuongCB", nv.luong);
  var isRoleValid =
    validateRole("#tbChucVu", nv.chucVu) &&
    validateIsNull("#tbChucVu", nv.chucVu);
  var isHourValid =
    validateIsNull("#tbGiolam", nv.gioLam) &&
    validateTotalHourInMonth("#tbGiolam", nv.gioLam);
  var check =
    isTKNVValid &&
    isTenValid &&
    isEmailValid &&
    isMatKhauValid &&
    isDateValid &&
    isLuongValid &&
    isRoleValid &&
    isHourValid;

  if (!check) {
    return;
  }
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
  var nv = layThongTinNV();
  var isTKNVValid =
    validateIsNull("#tbTKNV", nv.tk) && validateSize("#tbTKNV", nv.tk, 4, 6);

  var isTenValid =
    validateIsNull("#tbTen", nv.hoTen) &&
    validateEmployeeName("#tbTen", nv.hoTen);

  var isEmailValid =
    validateIsNull("#tbEmail", nv.email) && validateEmail("#tbEmail", nv.email);

  var isMatKhauValid =
    validateIsNull("#tbMatKhau", nv.mk) &&
    validateSize("#tbMatKhau", nv.mk, 6, 10) &&
    validatePassword("#tbMatKhau", nv.mk);

  var isDateValid =
    validateIsNull("#tbNgay", nv.ngay) && validateDate("#tbNgay", nv.ngay);
  var isLuongValid =
    validateIsNull("#tbLuongCB", nv.luong) &&
    validateLuongCoBan("#tbLuongCB", nv.luong);
  var isRoleValid =
    validateRole("#tbChucVu", nv.chucVu) &&
    validateIsNull("#tbChucVu", nv.chucVu);
  var isHourValid =
    validateIsNull("#tbGiolam", nv.gioLam) &&
    validateTotalHourInMonth("#tbGiolam", nv.gioLam);
  var check =
    isTKNVValid &&
    isTenValid &&
    isEmailValid &&
    isMatKhauValid &&
    isDateValid &&
    isLuongValid &&
    isRoleValid &&
    isHourValid;

  if (!check) {
    return;
  }
  var index = listOfEmployee.findIndex(function (item) {
    return item.tk == nv.tk;
  });
  listOfEmployee[index] = nv;
  var data = JSON.stringify(listOfEmployee);
  localStorage.setItem("listOfEmployee", data);
  render(listOfEmployee);
}

function search() {
  let valueSearch = document.querySelector("#searchName").value;
  let searchResult = listOfEmployee.filter(function (item) {
    return item.xepLoai().toLowerCase().includes(valueSearch.toLowerCase());
  });
  render(searchResult);
}
