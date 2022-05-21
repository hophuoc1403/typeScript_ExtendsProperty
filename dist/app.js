var list = [];
var listStd = [];
var listEmploy = [];
class human {
    constructor(name, age, gender, address) {
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
                }
                else {
                    table.appendChild(myElm);
                    myElm.innerHTML = `<td></td> <td>name : ${this.name}</td>
        <td>age : ${this.age}</td>
        <td>gender : ${this.checkGender()}</td>
        <td>address : ${this.address}</td>`;
                }
            }
        }
        else {
            table.appendChild(myElm);
            myElm.innerHTML = `<th>Human</th>
        <td>name : ${this.name}</td>
        <td>age : ${this.age}</td>
        <td>gender : ${this.checkGender()}</td>
        <td>address : ${this.address}</td>`;
        }
        list.push(this);
    }
    checkGender() {
        if (this.gender == 0)
            return "bede";
        else if (this.gender == 1)
            return "nam";
        else if (this.gender == 2)
            return "nu";
    }
}
class student extends human {
    constructor(name, age, gender, address, codeStd, maths, physics, chemistry) {
        super(name, age, gender, address);
        this.Average = () => {
            return (this.maths + this.chemistry + this.physics) / 3;
        };
        this.CheckAverage = () => {
            let average = this.Average();
            if (average < 5) {
                var innerRating = "kém";
            }
            else if (average < 8) {
                var innerRating = "khá";
            }
            else
                var innerRating = "xuất sắc";
            return innerRating;
        };
        this.codeStd = codeStd;
        this.maths = maths;
        this.physics = physics;
        this.chemistry = chemistry;
    }
    ShowInfoStd() {
        var table = document.querySelector("#table");
        let myElm = document.createElement("tr");
        if (listStd.length > 0) {
            for (let i = 0; i < listStd.length; i++) {
                if (listStd[i].codeStd == this.codeStd) {
                    myElm.innerHTML = "";
                    alert("duplicate code");
                }
                else {
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
        }
        else {
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
    constructor(name, age, gender, address, codeEmploy, wage, dayWork) {
        super(name, age, gender, address);
        this.CheckSalary = () => {
            let average = this.calcSalary();
            if (average < 50000) {
                var innerRating = "kém";
            }
            else if (average < 80000) {
                var innerRating = "khá";
            }
            else
                var innerRating = "xuất sắc";
            return innerRating;
        };
        this.codeEmploy = codeEmploy;
        this.wage = wage;
        this.dayWork = dayWork;
    }
    calcSalary() {
        return this.dayWork * this.wage;
    }
    showInfoEmploy() {
        var table = document.querySelector("#table");
        let myElm = document.createElement("tr");
        if (listEmploy.length > 0) {
            for (let i = 0; i < listEmploy.length; i++) {
                if (listEmploy[i].codeEmploy == this.codeEmploy) {
                    myElm.innerHTML = "";
                    alert("duplicate code");
                }
                else {
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
        }
        else {
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
var human3 = new human("phuoc", 25, 0, "hai phong");
var human4 = new human("phuoc", 26, 1, "hai phong");
var human5 = new human("huy", 25, 1, "hai phong");
human2.showInfo();
human3.showInfo();
human4.showInfo();
human5.showInfo();
var student1 = new student("tu", 20, 1, "hp", "1b", 10, 10, 10);
student1.ShowInfoStd();
var student2 = new student("phuoc", 20, 1, "hp", "2b", 10, 10, 10);
student2.ShowInfoStd();
var employee1 = new employee("nga", 30, 0, "hanoi", "32b", 200, 30);
employee1.showInfoEmploy();
var employee2 = new employee("nguuuu", 35, 2, "hue", "32b", 2000, 30);
employee2.showInfoEmploy();
