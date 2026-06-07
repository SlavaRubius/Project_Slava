
var buttons = document.querySelectorAll('.menu-btn');

for (var i = 0; i < buttons.length; i++) {    

    buttons[i].onclick = function() {
        
        if (this.id === 'logoutBtn') return;

        for (var j = 0; j < buttons.length; j++) {
            buttons[j].classList.remove('active');
        }

        var tabs = document.querySelectorAll('.tab-content');
        for (var k = 0; k < tabs.length; k++) {
            tabs[k].classList.remove('active');
        }
  
        this.classList.add('active');

        var tabName = this.getAttribute('data-tab');

        var targetTab = document.getElementById('tab-' + tabName);
        if (targetTab) {
            targetTab.classList.add('active');
        }
    };
}

var logoutBtn = document.getElementById('logoutBtn');
if (logoutBtn) {
    logoutBtn.onclick = function() {
        var confirmExit = confirm("Вы действительно хотите выйти из аккаунта?");
        if (confirmExit) {
            window.location.href = "index.html";
        }
    };
}

function previewImage(event) {
    var input = event.target;
    var preview = document.getElementById('userAvatar');

    if (input.files && input.files[0]) {
        preview.src = URL.createObjectURL(input.files[0]);
    }
}

