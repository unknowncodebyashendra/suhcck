function submitForm() {
    // Retrieve form data
    var ID = document.getElementById('id').value;
    var code = document.getElementById('code').value;

    // Perform redirection based on ID
    switch(ID) {
        case "KAT_C01":
            window.location.href = "A.html";
            break;
        case "KAT_V02":
            window.location.href = "B.html";
            break;
        case "KAT_B03":
            window.location.href = "C.html";
            break;
        case "KAT_G04":
            window.location.href = "D.html";
            break;
        case "KAT_T05":
            window.location.href = "E.html";
            break;
        case "KAT_G06":
            window.location.href = "F.html";
            break;
        case "PAN_B07":
            window.location.href = "G.html";
            break;
        case "PAN_S08":
            window.location.href = "H.html";
            break;
        case "PAN_S09":
            window.location.href = "I.html";
            break;
        case "PAN_P10":
            window.location.href = "J.html";
            break;
        case "PAN_C11":
            window.location.href = "K.html";
            break;
        case "PAN_A12":
            window.location.href = "L.html";
            break;
        case "KAT_H13":
            window.location.href = "M.html";
            break;
        case "PAN_P14":
            window.location.href = "N.html";
            break;
        case "PAN_P15":
            window.location.href = "O.html";
            break;
        case "PAN_J14":
            window.location.href = "P.html";
            break;
        case "KAT_S15":
            window.location.href = "Q.html";
            break;
        case"KAT_S14":
            window.location.href = "R.html";
            break;
        default:
            window.location.href = "main.html";
            break;
    }
}