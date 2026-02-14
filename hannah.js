

function transfer() {
window.location.href = "hannah.html"
}

const pass = "JumboHotdog6767";

    function checkPassword() {
        const passwordinput = document.getElementById("pass").value;

        if (passwordinput === pass) {
            window.location.href = "hannah2.html";
        } else {
            alert("Wrong passkey babi !! Try again :)   ");
        }
    }

      const button = document.getElementById("no");

  button.addEventListener('click', () => {
  const x = Math.random() * (window.innerWidth - button.offsetWidth);
  const y = Math.random() * (window.innerHeight - button.offsetHeight);

    button.style = 'transform: translate(' + x + 'px, ' + y + 'px)';
});

function yes() {
    window.location.href = "hannah3.html";
}
