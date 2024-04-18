function employee(_tk, _hoTen, _email, _mk, _ngay, luong, chucVu, _gioLam) {
  this.tk = _tk;
  this.hoTen = _hoTen;
  this.email = _email;
  this.mk = _mk;
  this.ngay = _ngay;
  this.luong = luong;
  this.chucVu = chucVu;
  this.gioLam = _gioLam;
  this.tongLuong = function () {
    if (this.chucVu == "Sếp") {
      return this.luong * 3;
    } else if (this.chucVu == "Trưởng phòng") {
      return this.luong * 2;
    } else {
      return this.luong;
    }
  };
  this.xepLoai = function () {
    if (this.gioLam >= 192) {
      return "nhân viên xuất sắc";
    } else if (this.gioLam >= 176) {
      return "nhân viên giỏi";
    } else if (this.gioLam >= 160) {
      return "nhân viên khá";
    } else {
      return "nhân viên trung bình";
    }
  };
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
