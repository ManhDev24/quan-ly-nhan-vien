function validateIsNull(id, value) {
  if (value.length > 0) {
    document.querySelector(id).style.display = "none";
    document.querySelector(id).innerHTML = "";
    return true;
  }
  document.querySelector(id).innerHTML = "không được để trống ";
  document.querySelector(id).style.display = "inline-block";
  return false;
}

function validateSize(id, value, min, max) {
  if (value.length >= min && value.length <= max) {
    document.querySelector(id).style.display = "none";
    document.querySelector(id).innerHTML = "";
    return true;
  }
  document.querySelector(id).innerHTML = `tài khoản dài từ [${min}-${max}]`;
  document.querySelector(id).style.display = "inline-block";
  return false;
}

function validateEmployeeName(id, value) {
  const pattern = /^[a-zA-Z ]+$/;
  if (pattern.test(value)) {
    document.querySelector(id).style.display = "none";
    document.querySelector(id).innerHTML = "";
    return true;
  }
  document.querySelector(id).innerHTML = `tên không được có chứa số `;
  document.querySelector(id).style.display = "inline-block";
  return false;
}

function validateEmail(id, value) {
  const pattern =
    /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  if (pattern.test(value)) {
    document.querySelector(id).style.display = "none";
    document.querySelector(id).innerHTML = "";
    return true;
  }
  document.querySelector(id).innerHTML = `không đúng định dạng email`;
  document.querySelector(id).style.display = "inline-block";
  return false;
}

function validatePassword(id, value) {
  const digitRegex = /\d/;
  const uppercaseRegex = /[A-Z]/;
  const specialCharRegex = /[\W_]/;

  if (!digitRegex.test(value)) {
    document.querySelector(
      id
    ).innerHTML = `Mật khẩu phải chứa ít nhất 1 chữ số`;
    document.querySelector(id).style.display = "inline-block";
    return false;
  }
  if (!uppercaseRegex.test(value)) {
    document.querySelector(
      id
    ).innerHTML = `Mật này phải chứa nhất 1 chuỗi in hoặc in hoa`;
    document.querySelector(id).style.display = "inline-block";
    return false;
  }
  if (!specialCharRegex.test(value)) {
    document.querySelector(
      id
    ).innerHTML = `Mật khẩu phải chứa ít nhất 1 ký tự đặc biệt`;
    document.querySelector(id).style.display = "inline-block";
  }
  document.querySelector(id).style.display = "none";
  document.querySelector(id).innerHTML = "";
  return true;
}

function validateDate(id, value) {
  const pattern =
    /^((0?[1-9]|1[012])[- /.](0?[1-9]|[12][0-9]|3[01])[- /.](19|20)?[0-9]{2})*$/;

  if (pattern.test(value)) {
    document.querySelector(id).style.display = "none";
    document.querySelector(id).innerHTML = "";
    return true;
  }
  document.querySelector(id).innerHTML = `không đúng định dạng ngày`;
  document.querySelector(id).style.display = "inline-block";
  return false;
}

function validateLuongCoBan(id, value) {
  if (+value >= 1000000 && +value <= 20000000) {
    document.querySelector(id).style.display = "none";
    document.querySelector(id).innerHTML = "";
    return true;
  }
  document.querySelector(
    id
  ).innerHTML = `Lương cơ bản phải trong [1.000.000 - 20.000.000]`;
  document.querySelector(id).style.display = "inline-block";
  return false;
}

function validateRole(id, value) {
  if (value == "Sếp") {
    document.querySelector(id).innerHTML = ``;
    document.querySelector(id).style.display = "none";
    return true;
  }
  if (value == "Trưởng phòng") {
    document.querySelector(id).innerHTML = ``;
    document.querySelector(id).style.display = "none";
    return true;
  }
  if (value == "Nhân viên") {
    document.querySelector(id).innerHTML = ``;
    document.querySelector(id).style.display = "none";
    return true;
  }
  document.querySelector(id).innerHTML = `chức vụ sai`;
  document.querySelector(id).style.display = "inline-block";
  return false;
}

function validateTotalHourInMonth(id, value) {
  if (+value >= 80 && +value <= 200) {
    document.querySelector(id).innerHTML = ``;
    document.querySelector(id).style.display = "none";
    return true;
  }
  document.querySelector(
    id
  ).innerHTML = `Giờ làm trong tháng phải trong [80 - 200]`;
  document.querySelector(id).style.display = "inline-block";
  return false;
}
