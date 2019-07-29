let dataBtn = document.getElementById("data-btn");
dataBtn.addEventListener("click", function() {
  document.getElementById(
    "info"
  ).innerHTML = `<p>Our pre-work is mandatory. When you become an 
  official student, you're given access to 60 hours of online 
  learning content on the fundamentals of command line, Git, Python, MySQL, 
  and statistical analysis. Completing the pre-work is essential for you to be 
  familiarized with the basic topics in programming and statistics, which are 
  prerequisites for learning data analytics. You will learn those essential 
  topics remotely prior to learning on campus, but you will not be fighting alone 
  in the pre-work thanks to our Slack channel through which you have access to learning 
  peers and academic staff. By the end of the pre-work, you will be ready to take 
  on a fast pace in the on-campus course!</p>`;
});

let webBtn = document.getElementById("web-btn");
webBtn.addEventListener("click", function() {
  document.getElementById(
    "info"
  ).innerHTML = `<p>When you become an official student, you're given access to 60 hours of online web development content on our student platform. This pre-work will take you through the fundamentals of programming with JavaScript, HTML and CSS. During the Prework you will have our awesome Teachers Assistants available to clarify any doubt through Email or Slack channel. Completing and fully understand the pre-work is essential for our students to prepare themselves for the bootcamp. By the end of the remote-prep pre-work, you will be ready to take on the fast pace of our on-campus learning!</p>`;
});

let uxBtn = document.getElementById("ux-btn");
uxBtn.addEventListener("click", function() {
  document.getElementById(
    "info"
  ).innerHTML = `<p>60-hour course focused on giving prospective students the fundamental skills to hit the groud running and make the most out of the Bootcamp. From basic setup of your environment to a crash course of most demanded tools in the market, Sketch App. Ironhack's Prework course covers the basics of Design Thinking, Usability, Visual Design and a light intro to Front-end Development.</p>`;
});
