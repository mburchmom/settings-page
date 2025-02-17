// Show Modal with Settings Section
function showSection(sectionId) {
    let content = "";
    
    if (sectionId === "profile") {
        content = `
            <h3>Profile Settings</h3>
            <label>Name:</label> <input type="text" placeholder="Your Name">
            <label>Profile Picture:</label> <input type="file">
        `;
    } else if (sectionId === "account") {
        content = `
            <h3>Account Settings</h3>
            <label>Email:</label> <input type="email" value="user@example.com">
            <label>Password:</label> <button>Change Password</button>
        `;
    } else if (sectionId === "notifications") {
        content = `
            <h3>Notifications</h3>
            <label>Email Alerts:</label> <input type="checkbox" checked>
            <label>Push Notifications:</label> <input type="checkbox">
        `;
    } else if (sectionId === "family") {
        content = `<h3>Family & Connections</h3><button>Add Family Member</button>`;
    } else if (sectionId === "billing") {
        content = `<h3>Subscription & Billing</h3><p>Current Plan: Free</p><button>Upgrade</button>`;
    }

    document.getElementById("modal-body").innerHTML = content;
    document.getElementById("settings-modal").style.display = "flex";
}

// Close Modal
function closeModal() {
    document.getElementById("settings-modal").style.display = "none";
}

// Navigate Between Tabs
function navigate(page) {
    alert(`Navigating to ${page}...`);
}
