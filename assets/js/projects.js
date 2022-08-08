var project_data = [
  {
    "个人项目|Personal Projects": [
      {
        name: "FedHF",
        description: "🔨 A Flexible Federated Learning Simulator.",
        url: "https://github.com/beiyuouo/fedhf",
        image:
          "https://raw.githubusercontent.com/beiyuouo/fedhf/main/docs/assets/logo.svg",
        tags: ["federated-learning", "deep-learning", "python"],
        badge:
          "https://img.shields.io/github/stars/beiyuouo/fedhf?style=flat-square",
      },
      {
        name: "arxiv-daily",
        description:
          "🎓 Automatically Update Some Fields Papers Daily using Github Actions",
        url: "https://github.com/beiyuouo/arxiv-daily",
        tags: ["arxiv", "spider", "python"],
        badge:
          "https://img.shields.io/github/stars/beiyuouo/arxiv-daily?style=flat-square",
      },
      {
        name: "hcaptcha-model-factory",
        description: "🏗 hCAPTCHA binary classification model factory",
        url: "https://github.com/beiyuouo/hcaptcha-model-factory",
        tags: ["deep-learning", "python", "hcaptcha"],
        badge:
          "https://img.shields.io/github/stars/beiyuouo/hcaptcha-model-factory?style=flat-square",
      },
      {
        name: "ezkfg",
        description: "🍕 Easy Configuration",
        url: "https://github.com/beiyuouo/ezkfg",
        tags: ["python"],
        badge:
          "https://img.shields.io/github/stars/beiyuouo/ezkfg?style=flat-square",
      },
      {
        name: "凌空画笔",
        description: "🎨 凌空画笔 - 手势识别 + 手指识别跟踪实现空中绘画",
        url: "https://github.com/beiyuouo/mid-air-draw",
        tags: ["python", "yolov5"],
        badge:
          "https://img.shields.io/github/stars/beiyuouo/mid-air-draw?style=flat-square",
      },
    ],
    // "开源项目(主持)|Personal Projects(Host)": [],
    "开源项目(参与)|Open Source Projects(Participation)": [
      {
        name: "FedML",
        description:
          "FedML - The federated learning and distributed training library enabling machine learning anywhere at any scale.",
        url: "https://github.com/FedML-AI/FedML",
        image:
          "https://github.com/FedML-AI/FedML/raw/master/doc/img/fedml_logo_light_mode.png",
        tags: ["federated-learning", "python"],
        badge:
          "https://img.shields.io/github/stars/FedML-AI/FedML?style=flat-square",
      },
      {
        name: "AI-Paper-Collector",
        description: "Fully-automated scripts for collecting AI-related papers",
        url: "https://github.com/MLNLP-World/AI-Paper-Collector",
        image:
          "https://github.com/MLNLP-World/AI-Paper-Collector/raw/main/pics/icon/ai.png",
        tags: ["spider", "python", "vercel"],
        badge:
          "https://img.shields.io/github/stars/MLNLP-World/AI-Paper-Collector?style=flat-square",
      },
      {
        name: "hcaptcha-challenger",
        description:
          "🥂 Gracefully face hCaptcha challenge with YOLOv6(ONNX) embedded solution",
        url: "https://github.com/QIN2DIM/hcaptcha-challenger",
        tags: ["spider", "python", "hcatpcha"],
        badge:
          "https://img.shields.io/github/stars/QIN2DIM/hcaptcha-challenger?style=flat-square",
      },
    ],
    "其他项目|Other Projects": [],
    "Awesome List|Awesome List": [
      {
        name: "Hainanu-Application",
        description: "📘 海南大学飞跃手册",
        url: "https://github.com/Hainanu-Application/Hainanu-Application.github.io",
        tags: ["document", "python", "docsify"],
        badge:
          "https://img.shields.io/github/stars/Hainanu-Application/Hainanu-Application.github.io?style=flat-square",
      },
      {
        name: "awesome-AFL",
        description: "📦 Collect some Asynchronous Federated Learning papers",
        url: "https://github.com/beiyuouo/awesome-asynchronous-federated-learning",
        tags: ["deep-learning", "federated-learning", "python"],
        badge:
          "https://img.shields.io/github/stars/beiyuouo/awesome-asynchronous-federated-learning?style=flat-square",
      },
      {
        name: "hainanu-course-comments",
        description: "🎩 海南大学课程攻略共享计划！",
        url: "https://github.com/beiyuouo/hainanu-course-comments",
        tags: ["document", "python", "mkdocs"],
        badge:
          "https://img.shields.io/github/stars/beiyuouo/hainanu-course-comments?style=flat-square",
      },
    ],
  },
];

icon_list = [
  "/assets/images/fries.svg",
  "/assets/images/cheese.svg",
  "/assets/images/donut.svg",
  "/assets/images/ice-cream.svg",
  "/assets/images/noodle.svg",
];

function getDefaultIcon() {
  // random icon
  return icon_list[Math.floor(Math.random() * icon_list.length)];
}

function openWin(page_path) {
  window.open(page_path, "", "width=800,height=600");
}

$(document).ready(function () {
  var projects = $("#projects");
  var projects_html = "";
  for (var i = 0; i < project_data.length; i++) {
    // console.log(project_data[0]);
    for (category in project_data[i]) {
      var category_en = category.split("|")[1];
      var category_zh = category.split("|")[0];
      var projects_in_category = project_data[i][category];
      projects_html += "<div class='project-group'>\n";
      projects_html += "<h2><span class='lang-zh'>" + category_zh + "</span>";
      projects_html +=
        "<span class='lang-en'>" + category_en + "</span></h2>\n";
      for (var j = 0; j < projects_in_category.length; j++) {
        var project = projects_in_category[j];
        var project_name = project["name"];
        var project_url = project["url"];
        var project_image = project["image"] || getDefaultIcon();
        var project_description = project["description"];
        var project_tags = project["tags"];
        var project_badge = project["badge"];

        projects_html += "<a href='" + project_url + "' target='_blank'>";
        projects_html +=
          "<div class='project-item' style='background-image: url(" +
          project_image +
          ");'>";
        projects_html += "<div class='project-item-info'>";
        projects_html += "<h4>" + project_name;
        projects_html += "<img src='" + project_badge + "' />" + "</h4>";
        projects_html += "<p>" + project_description + "</p>";

        // projects_html += "<div class='project-tags'>\n";
        // for (var k = 0; k < project_tags.length; k++) {
        //   var tag = project_tags[k];
        //   projects_html += "<span class='tag'>" + tag + "</span>\n";
        // }
        // projects_html += "</div>\n";
        projects_html += "</div>";
        projects_html += "</div>";
        projects_html += "</a>";
      }
      projects_html += "</div>\n";
    }
  }
  projects.html(projects_html);
  changeLanguage();
  changeLanguage();
});
