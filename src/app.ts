var list = [];
var listStd = [];
var listEmploy = [];

class human {
  name: string;
  age: number;
  gender: number;
  address: string;

  constructor(name: string, age: number, gender: number, address: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
    this.address = address;
  }
  showInfo() {
    var table = document.querySelector("#table");
    let myElm = document.createElement("tr");

    if (list.length > 0) {
      for (let i = 0; i < list.length; i++) {
        if (list[i].name == this.name) {
          myElm.innerHTML = "";
        } else {
          table.appendChild(myElm);
          myElm.innerHTML = `<td></td> <td>name : ${this.name}</td>
        <td>age : ${this.age}</td>
        <td>gender : ${this.checkGender()}</td>
        <td>address : ${this.address}</td>`;
        }
      }
    } else {
      table.appendChild(myElm);
      myElm.innerHTML = `<th>Human</th>
        <td>name : ${this.name}</td>
        <td>age : ${this.age}</td>
        <td>gender : ${this.checkGender()}</td>
        <td>address : ${this.address}</td>`;
    }
    list.push(this);
  }

  checkGender(): string {
    if (this.gender == 0) return "bede";
    else if (this.gender == 1) return "nam";
    else if (this.gender == 2) return "nu";
  }
}

class student extends human {
  codeStd: string;
  maths: number;
  physics: number;
  chemistry: number;
  constructor(
    name: string,
    age: number,
    gender: number,
    address: string,
    codeStd: string,
    maths: number,
    physics: number,
    chemistry: number
  ) {
    super(name, age, gender, address);
    this.codeStd = codeStd;
    this.maths = maths;
    this.physics = physics;
    this.chemistry = chemistry;
  }

  Average = (): number => {
    return (this.maths + this.chemistry + this.physics) / 3;
  };

  CheckAverage = (): string => {
    let average = this.Average();
    if (average < 5) {
      var innerRating = "kém";
    } else if (average < 8) {
      var innerRating = "khá";
    } else var innerRating = "xuất sắc";
    return innerRating;
  };

  ShowInfoStd(): void {
    var table = document.querySelector("#table2");
    let myElm = document.createElement("tr");
    if (listStd.length > 0) {
      for (let i = 0; i < listStd.length; i++) {
        if (listStd[i].codeStd == this.codeStd) {
          myElm.innerHTML = "";
          alert("duplicate code");
        } else {
          table.appendChild(myElm);
          myElm.innerHTML = `<td></td>
                      <td>codeStd : ${this.codeStd}</td>
                      <td>name : ${this.name}</td>
                      <td>age : ${this.age}</td>
                      <td>gender : ${this.checkGender()}</td>
                      <td>address : ${this.address}</td>
                      <td>average : ${this.Average()}</td>
                      <td>xếp loại : ${this.CheckAverage()}</td>`;
        }
      }
    } else {
      table.appendChild(myElm);
      myElm.innerHTML = `<th>Student</th>
                      <td>codeStd : ${this.codeStd}</td>   
                      <td>name : ${this.name}</td>
                      <td>age : ${this.age}</td>
                      <td>gender : ${this.checkGender()}</td>
                      <td>address : ${this.address}</td>
                      <td>average : ${this.Average()}</td>
                      <td>xếp loại : ${this.CheckAverage()}</td>`;
    }
    listStd.push(this);
  }
}

class employee extends human {
  codeEmploy: string;
  wage: number;
  dayWork: number;
  constructor(
    name: string,
    age: number,
    gender: number,
    address: string,
    codeEmploy: string,
    wage: number,
    dayWork: number
  ) {
    super(name, age, gender, address);
    this.codeEmploy = codeEmploy;
    this.wage = wage;
    this.dayWork = dayWork;
  }

  calcSalary() {
    return this.dayWork * this.wage;
  }
  CheckSalary = (): string => {
    let average = this.calcSalary();
    if (average < 50000) {
      var innerRating = "kém";
    } else if (average < 80000) {
      var innerRating = "khá";
    } else var innerRating = "xuất sắc";
    return innerRating;
  };
  showInfoEmploy() {
    var table = document.querySelector("#table3");
    let myElm = document.createElement("tr");
    if (listEmploy.length > 0) {
      for (let i = 0; i < listEmploy.length; i++) {
        if (listEmploy[i].codeEmploy == this.codeEmploy) {
          myElm.innerHTML = "";
          alert("duplicate code");
        } else {
          table.appendChild(myElm);
          myElm.innerHTML = `<td></td>
                      <td>codeEmploy : ${this.codeEmploy}</td>
                      <td>name : ${this.name}</td>
                      <td>age : ${this.age}</td>
                      <td>gender : ${this.checkGender()}</td>
                      <td>address : ${this.address}</td>
                      <td>salary : ${this.calcSalary()}</td>
                      <td>xếp loại : ${this.CheckSalary()}</td>`;
        }
      }
    } else {
      table.appendChild(myElm);
      myElm.innerHTML = `<th>Employee</th>
                      <td>codeEmploy : ${this.codeEmploy}</td>   
                      <td>name : ${this.name}</td>
                      <td>age : ${this.age}</td>
                      <td>gender : ${this.checkGender()}</td>
                      <td>address : ${this.address}</td>
                      <td>salary : ${this.calcSalary()}</td>
                      <td>xếp loại : ${this.CheckSalary()}</td>`;
    }
    listEmploy.push(this);
  }
}

var human2 = new human("phuoc1", 21, 0, "hai phong");
var human4 = new human("sondang", 26, 1, "hai phong");
var human5 = new human("huy", 25, 1, "hai phong");
human2.showInfo();
human4.showInfo();
human5.showInfo();

var student1 = new student("tu", 20, 1, "hp", "1b", 10, 10, 10);
student1.ShowInfoStd();
var student2 = new student("quyen", 20, 1, "hp", "2b", 10, 10, 10);
student2.ShowInfoStd();
var student3 = new student("linh", 20, 1, "hp", "23b", 10, 10, 10);
student3.ShowInfoStd();

var employee1 = new employee("nga", 30, 0, "hanoi", "32b", 200, 30);
employee1.showInfoEmploy();
var employee2 = new employee("nguuu", 35, 2, "hue", "364b", 2000, 30);
employee2.showInfoEmploy();
var employee3 = new employee("nguuuu", 35, 2, "hue", "363b", 2000, 30);
employee3.showInfoEmploy();
