
// class Counter {
// 	constructor(count=0){
// 		this.count=count;
// 	}
	
// 	increment(){
// 		this.count++;
// 	}
	
// 	decrement(){
// 		this.count--;
// 	}

// 	getValue(){
// 		console.log(`${this.count}`)
// 	}
// }

// class TodoList {
// 	constructor(tasks=[]){
// 		this.tasks=tasks;
// 	}
	
// 	addTask(task){
// 		this.tasks.push(task)
// 	}
	
// 	removeTask(task){
// 		this.tasks = this.tasks.filter(t=>t!=task)
// 	}
	
// 	listTasks(){
// 		this.tasks.forEach((task,i)=>{
// 			console.log(`${i+1}. ${task}`)
// 		})
// 	}
// }

// class Animal{
// 	constructor(){
// 	console.log("Sonido genérico")
// 	}
	
// 	Dog(){
// 		makeSound(){
// 		console.log(`Guau guau`)
// 		}

// 		fetch(){
// 		console.log(`El perro trae la pelota`)
// 		}
// 	}

// }

// class LibraryItem{
// 	constructor(title,year){
// 		this.title=title;
// 		this.year=year;
// 	}
// 	getSummary(){
// 		console.log(´Title: ${this.title}, Year: ${this.year}´)
// 	}
// }

// class Book extends LibraryItem{
// 	constructor(title,year,author){
// 	super(title,year);
// 	this.author=author;
// 	}
	
// 	getSummary(){
// 		console.log(`Title: ${this.title}, Author: ${this.author},Year: ${this.year}`)
// 	}
// }

// class Magazine extends LibraryItem{
// 	constructor(title,year, issueNumber){
// 	super(title,year);
// 	this.issueNumber= issueNumber;
// 	}
	
// 	getSummary(){
// 		console.log(`Title: ${this.title}, Year: ${this.year}, Issue: ${this.issueNumber}`)
// 	}	
// }

// class Student{
// 	constructor(name, grades=[]){
// 		this.name=name;
// 		this.grades=grades;
// 	}
	
// 	addGrade(grade){
// 		this.grades.push(grade)
// 	}

// 	getAverage(){
// 		this.grades.reduce((acum,nota)=>acum+nota,0)
// 	}
// }

// class HonorsStudent extends Student{
// 	isHonor(){
// 		if(getAverage>9){
// 			console.log(`El estudiante de honor`)
// 		}
// 	}
// }

////////////////////////////// PRODUCTO
class Product{
	constructor(name, price){
        this.name=name;
        this.price=price;
	}
    getPrice(){
        console.log(`Precio: ${this.price}`);
    }
}

class DigitalProduct extends Product{
    constructor(name,price,fileSize){
        super(name,price);
        this.fileSize=fileSize; 
    }
    download(){
        console.log(`Descargando ${this.fileSize}MB`);
    }
}

class PhysicalProduct extends Product{
    constructor(name,price,weight){
        super(name, price);
        this.weight=weight;
    }
    ship(){
        console.log(`Enviando producto de ${this.weight} kg`);
    }
}

const prod1=new Product("cartuchera", 12);
const prod2=new DigitalProduct("lapiz", 11, 20);
const prod3=new PhysicalProduct("plumon", 22, 4);

prod1.getPrice();
prod2.download();
prod3.ship();

///////////////////////////////////USer

class User{
    constructor(name, email){
        this.name=name;
        this.email=email;
    }
    getInfo(){
        console.log(`Name: ${this.name}, Email: ${this.email}`)
    }
}

class AdminUser extends User{
    constructor(name, email, role){
        super(name, email);
        this.role=role;
    }
    getInfo(){
        console.log(`Admin: ${this.name}, Email: ${this.email}, Role: ${this.role}`)
    }
    deleteUser(){
        console.log(`Usuario eliminado`)
    }
}

class Store{
    constructor(products=[]){
        this.products=products;
    }
    addProduct(product){
        this.products.push(product);
    }
    listProducts(){
        this.products.forEach((name,i)=>console.log(`${i}. ${name}`))
    }
}

const producto1=new Product("papel", 12);
const producto2=new Product("cuchillo", 11);

producto1.addProduct()
producto2.addProduct()