const primaryData = [
  {
    id: 1,
    isChecked: false,
    isStarred: false,
    title: "LinkedIn",
    subject: "Exciting Opportunities Await: Join Our Team Today!",
  },
  {
    id: 2,
    isChecked: false,
    isStarred: false,
    title: "GitHub",
    subject: "Explore New Features in our Latest Update",
  },
  {
    id: 3,
    isChecked: false,
    isStarred: false,
    title: "StackOverflow",
    subject: "Join the Community: Share Your Expertise",
  },
  {
    id: 4,
    isChecked: false,
    isStarred: false,
    title: "Google Workspace",
    subject: "Important Announcement: New Security Measures",
  },
  {
    id: 5,
    isChecked: false,
    isStarred: false,
    title: "Microsoft Azure",
    subject: "Discover the Power of Cloud Computing",
  },
  {
    id: 6,
    isChecked: false,
    isStarred: false,
    title: "Amazon Web Services",
    subject: "Build Scalable Solutions with AWS",
  },
  {
    id: 7,
    isChecked: false,
    isStarred: false,
    title: "Apple Developer",
    subject: "Latest Updates: Enhance Your App Development Experience",
  },
  {
    id: 8,
    isChecked: false,
    isStarred: false,
    title: "Mozilla Developer Network",
    subject: "Stay Updated with the Latest Web Technologies",
  },
  {
    id: 9,
    isChecked: false,
    isStarred: false,
    title: "Twitter Developer",
    subject: "New APIs Released: Expand Your App's Capabilities",
  },
  {
    id: 10,
    isChecked: false,
    isStarred: false,
    title: "Facebook for Developers",
    subject: "Connect with Developers Worldwide: Join our Community",
  },
  {
    id: 11,
    isChecked: false,
    isStarred: false,
    title: "Apple Developer",
    subject: "Announcing Swift 6: The Future of iOS Development",
  },
  {
    id: 12,
    isChecked: false,
    isStarred: false,
    title: "Google Cloud Platform",
    subject: "Unlock New Possibilities with GCP",
  },
  {
    id: 13,
    isChecked: false,
    isStarred: false,
    title: "Twitter Developer",
    subject: "Optimize Your App's Performance with Real-time Data",
  },
  {
    id: 14,
    isChecked: false,
    isStarred: false,
    title: "Microsoft Developer",
    subject: "Empower Your Apps with AI: Learn Azure AI",
  },
  {
    id: 15,
    isChecked: false,
    isStarred: false,
    title: "Google Workspace",
    subject: "Collaborate Seamlessly: New Updates for Workspace",
  },
  // {
  //   id: 16,
  //   isChecked: false,
  //   isStarred: false,
  //   title: "Apple Developer",
  //   subject: "Introducing SwiftUI 3: Transform Your UIs",
  // },
  // {
  //   id: 17,
  //   isChecked: false,
  //   isStarred: false,
  //   title: "Microsoft Azure",
  //   subject: "Scale Your Business with Azure: Explore New Solutions",
  // },
  // {
  //   id: 18,
  //   isChecked: false,
  //   isStarred: false,
  //   title: "Amazon Web Services",
  //   subject: "Secure Your Cloud Environment: Best Practices",
  // },
  // {
  //   id: 19,
  //   isChecked: false,
  //   isStarred: false,
  //   title: "Mozilla Developer Network",
  //   subject: "Web Accessibility Matters: Build Inclusive Websites",
  // },
  // {
  //   id: 20,
  //   isChecked: false,
  //   isStarred: false,
  //   title: "Facebook for Developers",
  //   subject: "New Features: Enhance User Engagement",
  // },
];

const promotionsData = [
  {
    id: 100,
    isChecked: false,
    isStarred: false,
    title: "DataCamp",
    subject: "₹6,401 Off: Take your career to the next level!",
  },
  {
    id: 101,
    isChecked: false,
    isStarred: false,
    title: "DataCamp Insights",
    subject: "New Course: Introduction to BigQuery",
  },
  {
    id: 102,
    isChecked: false,
    isStarred: false,
    title: "Naukri",
    subject: "Show your Javascript expertise to recruiters!",
  },
  {
    id: 103,
    isChecked: false,
    isStarred: false,
    title: "Medium Daily Digest",
    subject: "Store JWT in cookie or localstorage ?",
  },
];

const mainContentContainer = document.querySelector(".mails-list-container");
const inboxItemsContainer = document.querySelector(".inbox-items-container");
const sidebarList = document.getElementById("sidebar-list");
const composeButton = document.querySelector(".compose-icon-container");
const composeMailContainer = document.querySelector(
  ".compose-mail-content-container"
);
const closeIcon = document.getElementById("close");

const closeComposeMailContainer = () => {
  composeMailContainer.classList.toggle("d-none");
};

composeButton.addEventListener("click", () => {
  closeComposeMailContainer();
});

closeIcon.addEventListener("click", () => {
  closeComposeMailContainer();
});

const quill = new Quill("#editor", {
  theme: "snow",
});

const createMailItem = (item) => {
  const div = document.createElement("div");
  const checkbox = document.createElement("input");
  checkbox.setAttribute("type", "checkbox");
  checkbox.style.marginRight = "10px";

  const img = document.createElement("img");
  img.setAttribute("src", "./public/star.svg");
  img.style.width = "15px";
  img.style.height = "15px";

  const span = document.createElement("span");
  span.textContent = item.title;
  span.style.width = "250px";

  const span2 = document.createElement("span");
  span2.textContent = item.subject;
  span2.style.overflow = "hidden";

  div.appendChild(checkbox);
  div.appendChild(img);
  div.appendChild(span);
  div.appendChild(span2);
  div.classList.add("d-flex", "mail-item");

  mainContentContainer.appendChild(div);
};

const data = {
  primary: primaryData,
  promotions: promotionsData,
};

inboxItemsContainer.addEventListener("click", (e) => {
  const activeId = e.target.id;

  Array.from(inboxItemsContainer.children).forEach((child) => {
    if (child.id !== e.target.id) {
      child.classList.remove("selected");
    } else {
      child.classList.add("selected");
    }
  });

  mainContentContainer.innerHTML = "";

  if (data[activeId]?.length > 0) {
    data[activeId].forEach((item) => {
      createMailItem(item);
    });
  }
});

sidebarList.addEventListener("click", (e) => {
  const activeId = e.target.id;
  Array.from(sidebarList.children).forEach((child) => {
    if (child.id !== activeId) {
      child.classList.remove("selected-sidebar-item");
    } else {
      child.classList.add("selected-sidebar-item");
    }
  });
});

sidebarList.children[0].click();
inboxItemsContainer.children[0].click();
