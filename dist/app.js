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
        table.appendChild(myElm);
        myElm.innerHTML = ` <td> ${this.name}</td>
        <td> ${this.age}</td>
        <td>${this.checkGender()}</td>
        <td> ${this.address}</td>`;
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
        var table = document.querySelector("#table2");
        let myElm = document.createElement("tr");
        if (listStd.length > 0) {
            for (let i = 0; i < listStd.length; i++) {
                if (listStd[i].codeStd == this.codeStd) {
                    myElm.innerHTML = "";
                    alert("duplicate code");
                }
                else {
                    table.appendChild(myElm);
                    myElm.innerHTML = `
                      <td> ${this.codeStd}</td>
                      <td> ${this.name}</td>
                      <td> ${this.age}</td>
                      <td>${this.checkGender()}</td>
                      <td> ${this.address}</td>
                      <td> ${this.Average()}</td>
                      <td> ${this.CheckAverage()}</td>`;
                }
            }
        }
        else {
            table.appendChild(myElm);
            myElm.innerHTML = `
                      <td> ${this.codeStd}</td>   
                      <td> ${this.name}</td>
                      <td> ${this.age}</td>
                      <td>${this.checkGender()}</td>
                      <td> ${this.address}</td>
                      <td> ${this.Average()}</td>
                      <td> ${this.CheckAverage()}</td>`;
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
        var table = document.querySelector("#table3");
        let myElm = document.createElement("tr");
        if (listEmploy.length > 0) {
            for (let i = 0; i < listEmploy.length; i++) {
                if (listEmploy[i].codeEmploy == this.codeEmploy) {
                    myElm.innerHTML = "";
                    alert("duplicate code");
                }
                else {
                    table.appendChild(myElm);
                    myElm.innerHTML = `
                      <td>${this.codeEmploy}</td>
                      <td> ${this.name}</td>
                      <td> ${this.age}</td>
                      <td>${this.checkGender()}</td>
                      <td> ${this.address}</td>
                      <td> ${this.calcSalary()}</td>
                      <td> ${this.CheckSalary()}</td>`;
                }
            }
        }
        else {
            table.appendChild(myElm);
            myElm.innerHTML = `
                      <td>${this.codeEmploy}</td>   
                      <td> ${this.name}</td>
                      <td> ${this.age}</td>
                      <td>${this.checkGender()}</td>
                      <td> ${this.address}</td>
                      <td> ${this.calcSalary()}</td>
                      <td> ${this.CheckSalary()}</td>`;
        }
        listEmploy.push(this);
    }
}
var human2 = new human("phuoc1", 21, 0, "hai phong");
var human4 = new human("sondang", 26, 1, "hai phong");
var human5 = new human("huy", 25, 1, "ha noi");
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
var employee2 = new employee("ngun", 35, 2, "đà nẵng", "364b", 2000, 30);
employee2.showInfoEmploy();
var employee3 = new employee("nguy", 45, 2, "hue", "363b", 8000, 30);
employee3.showInfoEmploy();
