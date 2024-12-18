
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "block";
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    modal.style.display = "none";
}

// 当用户点击模态框外部时，关闭模态框
window.onclick = function (event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach((modal) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
};