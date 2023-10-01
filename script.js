	// Отправка данных на сервер
	function send(event, php){
	console.log("Отправка запроса");
	event.preventDefault ? event.preventDefault() : event.returnValue = false;
	var req = new XMLHttpRequest();
	req.open('POST', php, true);
	req.onload = function() {
		if (req.status >= 200 && req.status < 400) {
		json = JSON.parse(this.response); // Ебанный internet explorer 11
      console.log(json);
        
      // ЗДЕСЬ УКАЗЫВАЕМ ДЕЙСТВИЯ В СЛУЧАЕ УСПЕХА ИЛИ НЕУДАЧИ
      if (json.result == "success") {
        // Если сообщение отправлено
        alert("Сообщение отправлено");
      } else {
        // Если произошла ошибка
        alert("Ошибка. Сообщение не отправлено");
      }
	    // Если не удалось связаться с php файлом
    } else {alert("Ошибка сервера. Номер: "+req.status);}}; 

	// Если не удалось отправить запрос. Стоит блок на хостинге
	req.onerror = function() {alert("Ошибка отправки запроса");};
	req.send(new FormData(event.target));
	}

// Прокрутка страницы до главной
const mainElement = document.getElementById("0");
const mainBtn = document.getElementById('main');

function mainScrolling() {
  mainElement.scrollIntoView({ behavior: "smooth" });
}

mainBtn.addEventListener("click", mainScrolling);


// прокрутка до опыта работы
const experienceElement = document.getElementById("a");
const experienceBtn = document.getElementById('experience');

function experienceScrolling() {
  experienceElement.scrollIntoView({ behavior: "smooth" });
}

experienceBtn.addEventListener("click", experienceScrolling);


// Прокрутка страницы до образования
const educationElement = document.getElementById("b");
const educationBtn = document.getElementById('education');

function educationScrolling() {
  educationElement.scrollIntoView({ behavior: "smooth" });
}

educationBtn.addEventListener("click", educationScrolling);


// Прокрутка до контактов 
const contactsElement = document.getElementById("c");
const contactsBtn = document.getElementById('contacts');

function contactsScrolling() {
  contactsElement.scrollIntoView({ behavior: "smooth" });
}

contactsBtn.addEventListener("click", contactsScrolling);



