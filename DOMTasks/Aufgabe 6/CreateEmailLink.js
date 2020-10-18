var convertTextToEmailLink = function () {
    var email = document.getElementById("txtEmail").value;

    let emailLink = document.getElementById("linkEmail");
    emailLink.href = "mailto:" + email;
    emailLink.innerText = email;
}

document.getElementById("btnCreateEmailLink").addEventListener("click", convertTextToEmailLink);

const emailContainers = document.querySelectorAll(".email");

for (const emailContainer of emailContainers) 
{
    const spanElements = emailContainer.querySelectorAll("span");
    const domain = spanElements[0].innerText;
    const userName = spanElements[1].innerText;
    const email = `${userName}@${domain}`;

    emailContainer.innerHTML = `<a href="mailto:${email}">${email}</a>`;
}