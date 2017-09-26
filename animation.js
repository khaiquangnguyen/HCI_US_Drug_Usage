const background_color = "#1E1E24";
const background_secondary_color = "#444140";
const text_color = "#E5DAD7";
const main_color = "#E54B4B";
const secondary_color = "#FFA987";

function getPosition(el) {
  var xPos = 0;
  var yPos = 0;

  while (el) {
    if (el.tagName == "BODY") {
      // deal with browser quirks with body/window/document and page scroll
      var xScroll = el.scrollLeft || document.documentElement.scrollLeft;
      var yScroll = el.scrollTop || document.documentElement.scrollTop;
      xPos += el.offsetLeft - xScroll + el.clientLeft;
      yPos += el.offsetTop - yScroll + el.clientTop;
    } else {
      // for all other non-BODY elements
      xPos += el.offsetLeft - el.scrollLeft + el.clientLeft;
      yPos += el.offsetTop - el.scrollTop + el.clientTop;
    }
    el = el.offsetParent;
  }
  return {
    x: xPos,
    y: yPos
  };
}

show_all_group_college();

function show_american_map() {
  var x = document.getElementById("myAudio");
  x.volume = 0.01;
  x.play();
  el = document.getElementById("american_map");
  el.style.display = "block";
  var basicTimeline = anime.timeline();
  basicTimeline.add({
    targets: "#american_map path",
    translateX: function() {
      a = anime.random(-6, 6) + "rem";
      return [a, 0];
    },
    translateY: function() {
      a = anime.random(-6, 6) + "rem";
      return [a, 0];
    },
    fill: "#544444	",
    opacity: {
      value: 1,
      duration: 400
    },
    delay: (el, i) => 100 + i * 20,
    duration: 1000,
    easing: "easeOutExpo"
  });

  basicTimeline.add([
    {
      targets: "#us_text",
      translateY: function() {
        a = "-10rem";
        return [a, 0];
      },
      opacity: [0, 1],
      fill: text_color,
      duration: 1000,
      easing: "easeOutExpo",
      offset: "+=1000"
    },
    {
      targets: "#polulation_text",
      translateX: function() {
        a = "10rem";
        return [a, 0];
      },
      opacity: [0, 1],
      fill: text_color,
      duration: 1000,
      offset: "+=2000",
      easing: "easeOutExpo"
    },
    {
      targets: "#average_life_text",
      translateX: function() {
        a = "10rem";
        return [a, 0];
      },
      opacity: [0, 1],
      fill: text_color,
      duration: 1000,
      offset: "+=2000",

      easing: "easeOutExpo"
    },
    {
      targets: "#age_group_text",
      translateX: function() {
        a = "10rem";
        return [a, 0];
      },
      opacity: [0, 1],
      fill: text_color,
      duration: 1000,
      offset: "+=2000",
      easing: "easeOutExpo"
    },
    {
      targets: [
        "#age_group_text",
        "#average_life_text",
        "#polulation_text",
        "#us_text"
      ],
      translateX: "5rem",
      duration: 2000,
      offset: "+=3000",
      opacity: [1, 0],
      complete: function() {
        document.getElementById("age_group_text").style.display = "none";
        document.getElementById("average_life_text").style.display = "none";
        document.getElementById("polulation_text").style.display = "none";
        document.getElementById("us_text").style.display = "none";
      }
    }
  ]);

  setTimeout(function() {
    // anime();
    shrink_american_map();
  }, 18000);
}

function shrink_american_map() {
  anime({
    targets: "#american_map path",
    translateX: [{ value: 30 }],
    scale: [{ value: 0.5 }],
    delay: (el, i) => 200 + i * 8,
    fill: text_color,
    duration: 2500
  });
  setTimeout(show_demographic_chart, 2200);
}

function show_demographic_chart() {
  chart = document.getElementById("demographic_chart");
  for (var i = 12; i < 22; i++) {
    var el = document.createElement("div");
    el.innerHTML = i.toString();
    el.setAttribute("class", "demographic_chart_bar");
    el.setAttribute("id", String.fromCharCode(65 + i));
    el.style.left = ((i - 12) * 5 + 8).toString() + "rem";
    switch (i) {
      case 12:
        el.style.height = "311px";
        break;
      case 13:
        el.style.height = "310px";
        break;
      case 14:
        el.style.height = "314px";
        break;
      case 15:
        el.style.height = "315px";
        break;
      case 16:
        el.style.height = "319px";
        break;
      case 17:
        el.style.height = "321px";
        break;
      case 18:
        el.style.height = "319px";
        break;
      case 19:
        el.style.height = "325px";
        break;
      case 20:
        el.style.height = "332px";
        break;
      case 21:
        el.style.height = "340px";
        break;
      case 22:
        el.style.height = "349px";
        break;
    }
    chart.appendChild(el);
  }
  anime({
    targets: ".demographic_chart_bar",
    translateY: [300, 0],
    scale: [0, 1],
    background: text_color,
    delay: (el, i) => 100 + i * 40,
    duration: 2500,
    easing: "easeOutExpo"
  });
  setTimeout(balance_demographic_graph, 2000);
}

function balance_demographic_graph() {
  anime({
    targets: ".demographic_chart_bar",
    height: 310,
    duration: 2500,
    easing: "easeOutExpo"
  });
  setTimeout(function() {
    chart = document.getElementById("demographic_chart");
    var el = document.createElement("div");
    el.innerHTML = "4,000,000";
    el.setAttribute("class", "demographic_chart_bar");
    el.setAttribute("id", "fourmil");
    el.style.left = ((22 - 12) * 5 + 8).toString() + "rem";
    el.style.fontSize = "50px";
    el.style.marginBottom = "9rem";
    el.style.color = text_color;
    chart.appendChild(el);
    anime({
      targets: "#fourmil",
      opacity: [, 1],
      easing: "easeOutExpo"
    });
  }, 1000);
  setTimeout(remove_american_map, 4000);
}

function remove_american_map() {
  anime({
    targets: "#american_map path",
    opacity: [1, 0],
    fill: "#F9C100",
    delay: 100,
    duration: 1000,
    easing: "easeOutExpo"
  });
  setTimeout(function() {
    var el = document.getElementById("american_map");
    el.style.display = "none";
    show_buildings();
  }, 1000);
}

function show_buildings() {
  el = document.getElementById("buildings");
  el.style.display = "flex";
  anime({
    targets: "#buildings",
    translateY: ["-15rem", 0],
    fill: text_color,
    delay: (el, i) => 100,
    duration: 1200,
    delay: (el, i) => i * 500,
    easing: "easeOutExpo"
  });
  anime({
    targets: "#fourmil",
    opacity: [1, 0],
    easing: "easeOutExpo"
  });
  setTimeout(move_graph_to_building, 4000);
}

function move_graph_to_building() {
  document.getElementById("fourmil").style.display = "none";
  var building = "secondary_building";
  for (var i = 12; i < 22; i++) {
    if (i <= 14) {
      building = "secondary_building";
    } else if (i <= 17) {
      building = "highschool_building";
    } else {
      building = "college_building";
    }
    anime({
      targets: "#" + String.fromCharCode(65 + i),
      translateX: {
        value: function(el) {
          var target = document.getElementById(building);
          var distance =
            target.getBoundingClientRect().left +
            target.getBoundingClientRect().width / 2 -
            el.getBoundingClientRect().left;
          return distance;
        },
        delay: (i - 12) * 200,
        duration: 1000
      },
      opacity: {
        value: 0,
        delay: 800 + (i - 12) * 200,
        duration: 500
      },
      translateY: {
        value: function(el) {
          var target = document.getElementById(building);
          var distance =
            target.getBoundingClientRect().top - el.getBoundingClientRect().top;
          return distance;
        },
        delay: 500 + (i - 12) * 200,
        duration: 1000
      },
      scaleY: {
        value: 0,
        delay: 500 + (i - 12) * 200,
        duration: 100,
        easing: "easeOutExpo"
      },
      color: "#767661",
      scaleX: {
        value: 0,
        delay: 500 + (i - 12) * 200,
        duration: 100,
        easing: "easeOutExpo"
      },
      delay: (i - 11) * 200,
      duration: 1000,
      easing: "easeOutExpo",
      update: function(animation) {
        var el = document.getElementById("secondary_building_text");
        var d = Math.round((animation.progress - 17) * 12000000 / 23);
        d = Math.max(d, 0);
        d = Math.min(d, 12000000);
        el.innerHTML = d.toString();
        el = document.getElementById("highschool_building_text");
        d = Math.round((animation.progress - 25) * 12000000 / 30);
        d = Math.max(d, 0);
        d = Math.min(d, 12000000);
        el.innerHTML = d.toString();
        el = document.getElementById("college_building_text");
        d = Math.round((animation.progress - 32) * 16000000 / 40);
        d = Math.max(d, 0);
        d = Math.min(d, 16000000);
        el.innerHTML = d.toString();
      }
    });
  }
  setTimeout(function() {
    var el = document.getElementById("demographic_chart");
    el.style.display = "none";
    show_human_figure();
  }, 7000);
}

function show_human_figure() {
  var child = document.getElementById("the_child");
  child.style.display = "block";
  var highschooler = document.getElementById("the_highschooler");
  highschooler.style.display = "block";
  var colleger = document.getElementById("the_colleger");
  colleger.style.display = "block";
  var word = document.getElementById("people_equivalent");
  word.style.display = "block";
  timeline = anime.timeline();
  timeline.add([
    {
      targets: child,
      opacity: [0, 1],
      scale: [0, 1],
      duration: 400,
      easing: "easeOutExpo"
    },
    {
      targets: highschooler,
      opacity: [0, 1],
      scale: [0, 1],
      duration: 400,
      easing: "easeOutExpo"
    },
    {
      targets: colleger,
      opacity: [0, 1],
      scale: [0, 1],
      duration: 400,
      easing: "easeOutExpo"
    },
    {
      targets: word,
      opacity: [0, 1],
      scale: [0, 1],
      duration: 700,
      easing: "easeOutExpo"
    },
    {
      targets: [word, child, highschooler, colleger],
      opacity: [1, 0],
      scale: [1, 0],
      offset: "+=2500",
      duration: 3000,
      easing: "easeOutExpo"
    }
  ]);
  timeline.complete = function() {
    child.style.display = "none";
    highschooler.style.display = "none";
    colleger.style.display = "none";
    word.style.display = "none";
  };
  setTimeout(show_drug_figure, 10000);
}

function show_drug_figure() {
  var child = document.getElementById("wine_botle");
  child.style.display = "block";
  var highschooler = document.getElementById("mari_leaf");
  highschooler.style.display = "block";
  timeline = anime.timeline();
  timeline.add([
    {
      targets: child,
      opacity: [0, 1],
      scale: [0, 1],
      duration: 400,
      easing: "easeOutExpo"
    },
    {
      targets: highschooler,
      opacity: [0, 1],
      scale: [0, 1],
      duration: 400,
      easing: "easeOutExpo"
    },
    {
      targets: [highschooler, child],
      opacity: [1, 0],
      scale: [1, 0],
      offset: "+=2500",
      duration: 3000,
      easing: "easeOutExpo"
    }
  ]);
  timeline.complete = function() {
    child.style.display = "none";
    highschooler.style.display = "none";
  };
  setTimeout(create_drug_chart, 10000);
}

function create_drug_chart() {
  var el = document.getElementById("secondary_demo_text");
  el.style.display = "flex";
  el = document.getElementById("drug_chart");
  el.style.display = "flex";
  var maxElements = 25;
  var colors = [main_color, secondary_color];
  var createElements = (function() {
    var sectionEl = document.getElementById("graph_secondary_alcohol");
    for (var i = 0; i < maxElements; i++) {
      var t = document.getElementById("the_child");
      var el = t.cloneNode(true);
      el.style.display = "block";
      el.setAttribute("id", "");
      // var el = document.createElement("div");
      // el.appendChild(m);
      if (i <= 3) {
        el.setAttribute(
          "class",
          "graph_block secondary_block alcohol " + String.fromCharCode(65 + 12)
        );
      } else if (i <= 10) {
        el.setAttribute(
          "class",
          "graph_block secondary_block alcohol " + String.fromCharCode(65 + 13)
        );
      } else {
        el.setAttribute(
          "class",
          "graph_block secondary_block alcohol " + String.fromCharCode(65 + 14)
        );
      }
      el.style.fill = colors[0];
      sectionEl.appendChild(el);
    }
    maxElements = 11;
    sectionEl = document.getElementById("graph_secondary_mari");
    for (var i = 0; i < maxElements; i++) {
      var t = document.getElementById("the_child");
      var el = t.cloneNode(true);
      el.style.display = "block";
      el.setAttribute("id", "");
      if (i < 1) {
        el.setAttribute(
          "class",
          "graph_block secondary_block mari " + String.fromCharCode(65 + 12)
        );
      } else if (i <= 3) {
        el.setAttribute(
          "class",
          "graph_block secondary_block mari " + String.fromCharCode(65 + 13)
        );
      } else {
        el.setAttribute(
          "class",
          "graph_block secondary_block mari " + String.fromCharCode(65 + 14)
        );
      }
      el.style.fill = colors[1];
      sectionEl.appendChild(el);
    }
  })();
  anime({
    targets: "#secondary_demo_text",
    opacity: [0, 1],
    duration: 3000
  });
  anime({
    targets: ".secondary_block",
    translateX: function(el, i) {
      target = document.getElementById("secondary_building");
      return [
        target.getBoundingClientRect().left +
          target.getBoundingClientRect().width / 2 -
          el.getBoundingClientRect().left,
        0
      ];
    },
    translateY: function(el, i) {
      target = document.getElementById("secondary_building");
      return [
        target.getBoundingClientRect().top +
          target.getBoundingClientRect().height / 2 -
          el.getBoundingClientRect().top,
        0
      ];
    },
    delay: function(el, index) {
      return index * 50;
    },
    easing: "easeOutExpo",
    duration: 600,
    scale: [0.6, 1],
    opacity: [0, 1],
    update: function(animation) {
      var el = document.getElementById("secondary_demo_text");
      var al = Math.round(animation.progress * 1200000 / 100);
      al = Math.max(al, 0);
      al = Math.min(al, 1200000);
      var mari = Math.round(animation.progress * 520000 / 100);
      mari = Math.max(mari, 0);
      mari = Math.min(mari, 520000);
      var inner_html =
        "Alcohol: " +
        al.toString() +
        "<br />" +
        "Marijuana: " +
        mari.toString();
      el.innerHTML = inner_html.toString();
    }
  });

  setTimeout(function() {
    anime({
      targets: [
        "#highschool_building",
        "#college_building",
        "#graph_highschool",
        "#graph_college",
        "#secondary_demo_text"
      ],
      opacity: [1, 0],
      duration: 3000
    });
  }, 3000);
  setTimeout(function() {
    show_young_people_graph();
  }, 4000);
}

function show_young_people_graph() {
  var el = document.getElementById("secondary_demo_text");
  chart = document.getElementById("young_people_graph");
  var el;
  for (var i = 12; i < 15; i++) {
    var t = document.createElement("div");
    t.setAttribute("class", "bar_container");
    var m = document.createElement("div");
    m.setAttribute("class", "text_area text_area1");
    m.setAttribute("id", "info_" + i.toString());
    m.style.display = "flex";
    m.innerHTML =
      "Age: " +
      i.toString() +
      "<br />" +
      "Alcohol: 0" +
      "<br />" +
      "Marijuana: 0";
    el = document.createElement("div");
    el.setAttribute("class", "young_graph_bar");
    el.setAttribute("id", "bar" + String.fromCharCode(65 + i) + "alcohol");
    t.appendChild(m);
    t.appendChild(el);
    el = document.createElement("div");
    el.setAttribute("class", "young_graph_bar");
    el.setAttribute("id", "bar" + String.fromCharCode(65 + i) + "mari");
    t.appendChild(el);
    chart.appendChild(t);
  }
  var square = document.getElementsByClassName(String.fromCharCode(65 + 12));
  var block_index = 0;
  function move_block() {
    anime({
      targets: square[0],
      translateX: {
        value: function(ele, i) {
          if (ele.classList.contains("alcohol")) {
            var left_pos = ele.getBoundingClientRect().left;
            el = document.getElementById(
              "bar" + String.fromCharCode(65 + 12) + "alcohol"
            );
          }
          if (ele.classList.contains("mari")) {
            el = document.getElementById(
              "bar" + String.fromCharCode(65 + 12) + "mari"
            );
          }
          el.appendChild(ele);
          return [left_pos - ele.getBoundingClientRect().left, 0];
        }
      },
      translateY: function(ele, i) {
        var a;
        if (ele.classList.contains("alcohol")) {
          a = document.getElementById("graph_secondary_alcohol");
        } else {
          a = document.getElementById("graph_secondary_mari");
        }
        var b = document.getElementById("young_people_graph");
        var dis = a.getBoundingClientRect().top - b.getBoundingClientRect().top;
        return [dis, 0];
      },
      delay: function(el, index) {
        return index * 150;
      },
      duration: 1000,
      easing: "easeOutExpo",
      update: function(animation) {
        var m = document.getElementById("info_12");
        var al = Math.round(animation.progress * 120000 / 100);
        al = Math.max(al, 0);
        al = Math.min(al, 120000);
        var mari = Math.round(animation.progress * 40000 / 100);
        mari = Math.max(mari, 0);
        mari = Math.min(mari, 40000);
        var inner_html =
          "Age: 12" +
          "<br />" +
          "Alcohol: " +
          al.toString() +
          "<br />" +
          "Marijuana: " +
          mari.toString();
        m.innerHTML = inner_html.toString();
      }
    });
    if (block_index < square.length - 1) {
      block_index += 1;
      setTimeout(move_block, 50);
    }
  }
  var ell;
  var square2 = document.getElementsByClassName(String.fromCharCode(65 + 13));
  var block_index2 = 0;
  function move_block2() {
    anime({
      targets: square2[0],
      translateX: {
        value: function(ele, i) {
          var left_pos = ele.getBoundingClientRect().left;
          if (ele.classList.contains("alcohol")) {
            ell = document.getElementById(
              "bar" + String.fromCharCode(65 + 13) + "alcohol"
            );
          }
          if (ele.classList.contains("mari")) {
            ell = document.getElementById(
              "bar" + String.fromCharCode(65 + 13) + "mari"
            );
          }
          ell.appendChild(ele);
          return [left_pos - ele.getBoundingClientRect().left, 0];
        }
      },
      translateY: function(ele, i) {
        var a;
        if (ele.classList.contains("alcohol")) {
          a = document.getElementById("graph_secondary_alcohol");
        } else {
          a = document.getElementById("graph_secondary_mari");
        }
        var b = document.getElementById("young_people_graph");
        var dis = a.getBoundingClientRect().top - b.getBoundingClientRect().top;
        return [dis, 0];
      },
      delay: function(el, index) {
        return index * 150;
      },
      duration: 1000,
      easing: "easeOutExpo",
      update: function(animation) {
        var m = document.getElementById("info_13");
        var al = Math.round(animation.progress * 340000 / 100);
        al = Math.max(al, 0);
        al = Math.min(al, 340000);
        var mari = Math.round(animation.progress * 136000 / 100);
        mari = Math.max(mari, 0);
        mari = Math.min(mari, 136000);
        var inner_html =
          "Age: 13" +
          "<br />" +
          "Alcohol: " +
          al.toString() +
          "<br />" +
          "Marijuana: " +
          mari.toString();
        m.innerHTML = inner_html.toString();
      }
    });
    if (block_index2 < square2.length - 1) {
      block_index2 += 1;
      setTimeout(move_block2, 50);
    }
  }
  var elll;
  var square3 = document.getElementsByClassName(String.fromCharCode(65 + 14));
  var block_index3 = 0;
  function move_block3() {
    anime({
      targets: square3[0],
      translateX: {
        value: function(ele, i) {
          var left_pos = ele.getBoundingClientRect().left;
          if (ele.classList.contains("alcohol")) {
            elll = document.getElementById(
              "bar" + String.fromCharCode(65 + 14) + "alcohol"
            );
          }
          if (ele.classList.contains("mari")) {
            elll = document.getElementById(
              "bar" + String.fromCharCode(65 + 14) + "mari"
            );
          }
          elll.appendChild(ele);
          return [left_pos - ele.getBoundingClientRect().left, 0];
        }
      },
      translateY: function(ele, i) {
        var a;
        if (ele.classList.contains("alcohol")) {
          a = document.getElementById("graph_secondary_alcohol");
        } else {
          a = document.getElementById("graph_secondary_mari");
        }
        var b = document.getElementById("young_people_graph");
        var dis = a.getBoundingClientRect().top - b.getBoundingClientRect().top;
        return [dis, 0];
      },
      delay: function(el, index) {
        return index * 150;
      },
      duration: 1000,
      easing: "easeOutExpo",
      update: function(animation) {
        var m = document.getElementById("info_14");
        var al = Math.round(animation.progress * 724000 / 100);
        al = Math.max(al, 0);
        al = Math.min(al, 724000);
        var mari = Math.round(animation.progress * 348000 / 100);
        mari = Math.max(mari, 0);
        mari = Math.min(mari, 348000);
        var inner_html =
          "Age: 14" +
          "<br />" +
          "Alcohol: " +
          al.toString() +
          "<br />" +
          "Marijuana: " +
          mari.toString();
        m.innerHTML = inner_html.toString();
      }
    });
    if (block_index3 < square3.length - 1) {
      block_index3 += 1;
      setTimeout(move_block3, 50);
    }
  }
  move_block();
  move_block2();
  move_block3();
  anime({
    targets: ".text_area1",
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 3500
  });
  setTimeout(function() {
    anime({
      targets: ".text_area1",
      opacity: [1, 0],
      easing: "easeOutExpo",
      duration: 3500
    });
  }, 2000);
  setTimeout(back_to_one, 4000);
}

function back_to_one() {
  var el = document.getElementById("secondary_demo_text");
  el.style.display = "flex";
  var square = document.getElementsByClassName("secondary_block alcohol");
  var block_index = 0;
  anime({
    targets: [
      "#highschool_building",
      "#college_building",
      "#graph_highschool",
      "#graph_college",
      "#secondary_demo_text"
    ],
    visibilitY: "true",
    opacity: [0, 1],
    duration: 2000
  });
  var el = document.getElementById("graph_secondary_alcohol");
  function move_block() {
    anime({
      targets: square[block_index],
      translateX: {
        value: function(ele, i) {
          var left_pos = ele.getBoundingClientRect().left;
          el.appendChild(ele);
          return [left_pos - ele.getBoundingClientRect().left, 0];
        }
      },
      translateY: function(ele, i) {
        var a = document.getElementById("graph_secondary");
        var b = document.getElementById("young_people_graph");
        var dis = b.getBoundingClientRect().top - a.getBoundingClientRect().top;
        return [dis, 0];
      },
      delay: function(el, index) {
        return index * 150;
      },
      duration: 1000,
      easing: "easeOutExpo"
    });
    if (block_index < square.length - 1) {
      block_index += 1;
      setTimeout(move_block, 50);
    } else {
      el = document.getElementById("graph_secondary_mari");
      square = document.getElementsByClassName("secondary_block mari");
      block_index = 0;
      move_block_mari();
    }
  }
  function move_block_mari() {
    anime({
      targets: square[block_index],
      translateX: {
        value: function(ele, i) {
          var left_pos = ele.getBoundingClientRect().left;
          el.appendChild(ele);
          return [left_pos - ele.getBoundingClientRect().left, 0];
        }
      },
      translateY: function(ele, i) {
        var a = document.getElementById("graph_secondary");
        var b = document.getElementById("young_people_graph");
        var dis = b.getBoundingClientRect().top - a.getBoundingClientRect().top;
        return [dis, 0];
      },
      delay: function(el, index) {
        return index * 150;
      },
      duration: 1000,
      easing: "easeOutExpo"
    });
    if (block_index < square.length - 1) {
      block_index += 1;
      setTimeout(move_block_mari, 50);
    }
  }
  move_block();
  setTimeout(function() {
    show_all_group_highschool();
  }, 6000);
}

function show_all_group_highschool() {
  var el = document.getElementById("highschool_demo_text");
  el.style.display = "flex";

  el = document.getElementById("drug_chart");
  var colors = ["#FF324A", "#31FFA6", "#206EFF", "#FFFF99"];
  el.style.display = "flex";
  var maxElements = 99;
  var createElements = (function() {
    var sectionEl = document.getElementById("graph_highschool_alcohol");
    for (var i = 0; i < maxElements; i++) {
      var t = document.getElementById("the_highschooler");
      var el = t.cloneNode(true);
      el.style.display = "block";
      el.setAttribute("id", "");
      if (i <= 24) {
        el.setAttribute(
          "class",
          "graph_block highschool_block highschool_block_alcohol " +
            String.fromCharCode(65 + 15)
        );
      } else if (i <= 57) {
        el.setAttribute(
          "class",
          "graph_block highschool_block highschool_block_alcohol " +
            String.fromCharCode(65 + 16)
        );
      } else {
        el.setAttribute(
          "class",
          "graph_block highschool_block highschool_block_alcohol " +
            String.fromCharCode(65 + 17)
        );
      }
      el.style.fill = colors[0];
      sectionEl.appendChild(el);
    }
    maxElements = 54;
    sectionEl = document.getElementById("graph_highschool_mari");
    for (var i = 0; i < maxElements; i++) {
      var t = document.getElementById("the_highschooler");
      var el = t.cloneNode(true);
      el.style.display = "block";
      el.setAttribute("id", "");
      if (i < 12) {
        el.setAttribute(
          "class",
          "graph_block highschool_block highschool_block_mari " +
            String.fromCharCode(65 + 15)
        );
      } else if (i <= 31) {
        el.setAttribute(
          "class",
          "graph_block highschool_block highschool_block_mari " +
            String.fromCharCode(65 + 16)
        );
      } else {
        el.setAttribute(
          "class",
          "graph_block highschool_block highschool_block_mari " +
            String.fromCharCode(65 + 17)
        );
      }
      el.style.fill = colors[1];
      sectionEl.appendChild(el);
    }
  })();

  anime({
    targets: ".highschool_block_alcohol",
    easing: "easeOutExpo",
    duration: 1500,
    scale: [0.6, 1],
    opacity: [0, 1],
    translateX: function(el, i) {
      target = document.getElementById("highschool_building");
      return [
        target.getBoundingClientRect().left +
          target.getBoundingClientRect().width / 2 -
          el.getBoundingClientRect().left,
        0
      ];
    },
    translateY: function(el, i) {
      target = document.getElementById("highschool_building");
      return [
        target.getBoundingClientRect().top +
          target.getBoundingClientRect().height / 2 -
          el.getBoundingClientRect().top,
        0
      ];
    },
    delay: function(el, index) {
      return index * 30;
    }
  });
  chart = document.getElementById("young_people_graph");
  chart.innerHTML = "";
  anime({
    targets: ".highschool_block_mari",
    easing: "easeOutExpo",
    duration: 1500,
    scale: [0.6, 1],
    opacity: [0, 1],
    translateX: function(el, i) {
      target = document.getElementById("highschool_building");
      return [
        target.getBoundingClientRect().left +
          target.getBoundingClientRect().width / 2 -
          el.getBoundingClientRect().left,
        0
      ];
    },
    translateY: function(el, i) {
      target = document.getElementById("highschool_building");
      return [
        target.getBoundingClientRect().top +
          target.getBoundingClientRect().height / 2 -
          el.getBoundingClientRect().top,
        0
      ];
    },
    delay: function(el, index) {
      return index * 30;
    },
    update: function(animation) {
      var el = document.getElementById("highschool_demo_text");
      var al = Math.round(animation.progress * 4744000 / 100);
      al = Math.max(al, 0);
      al = Math.min(al, 4744000);
      var mari = Math.round(animation.progress * 2600000 / 100);
      mari = Math.max(mari, 0);
      mari = Math.min(mari, 2600000);
      var inner_html =
        "Alcohol: " +
        al.toString() +
        "<br />" +
        "Marijuana: " +
        mari.toString();
      el.innerHTML = inner_html.toString();
    }
  });
  anime({
    targets: ["#highschool_demo_text"],
    visibilitY: "true",
    opacity: [0, 1],
    duration: 2000
  });
  setTimeout(show_all_group_college, 400);
}

function show_all_group_college() {
  el = document.getElementById("drug_chart");
  el.style.display = "flex";
  var maxElements = 237;
  var colors = ["#FF324A", "#31FFA6", "#206EFF", "#FFFF99"];
  var createElements = (function() {
    var sectionEl = document.getElementById("graph_college_alcohol");
    for (var i = 0; i < maxElements; i++) {
      var t = document.getElementById("the_colleger");
      var el = t.cloneNode(true);
      el.style.display = "block";
      el.setAttribute("id", "");
      if (i <= 49) {
        el.setAttribute(
          "class",
          "graph_block college_block_alcohol alcohol " +
            String.fromCharCode(65 + 18)
        );
      } else if (i <= 104) {
        el.setAttribute(
          "class",
          "graph_block college_block_alcohol alcohol " +
            String.fromCharCode(65 + 19)
        );
      } else if (i <= 164) {
        el.setAttribute(
          "class",
          "graph_block college_block_alcohol alcohol " +
            String.fromCharCode(65 + 20)
        );
      } else {
        el.setAttribute(
          "class",
          "graph_block college_block_alcohol alcohol " +
            String.fromCharCode(65 + 21)
        );
      }
      el.style.fill = colors[0];
      sectionEl.appendChild(el);
    }
    maxElements = 114;
    var sectionEl = document.getElementById("graph_college_mari");
    for (var i = 0; i < maxElements; i++) {
      var t = document.getElementById("the_colleger");
      var el = t.cloneNode(true);
      el.style.display = "block";
      el.setAttribute("id", "");
      if (i < 28) {
        el.setAttribute(
          "class",
          "graph_block college_block_mari mari " + String.fromCharCode(65 + 18)
        );
      } else if (i <= 56) {
        el.setAttribute(
          "class",
          "graph_block college_block_mari mari " + String.fromCharCode(65 + 19)
        );
      } else if (i <= 85) {
        el.setAttribute(
          "class",
          "graph_block college_block_mari mari " + String.fromCharCode(65 + 20)
        );
      } else {
        el.setAttribute(
          "class",
          "graph_block college_block_mari mari " + String.fromCharCode(65 + 21)
        );
      }
      el.style.fill = colors[1];
      sectionEl.appendChild(el);
    }
  })();

  anime({
    targets: ".college_block_alcohol",
    easing: "easeOutExpo",
    duration: 1500,
    scale: [0.6, 1],
    opacity: [0, 1],
    translateX: function(el, i) {
      target = document.getElementById("college_building");
      return [
        target.getBoundingClientRect().left +
          target.getBoundingClientRect().width / 2 -
          el.getBoundingClientRect().left,
        0
      ];
    },
    translateY: function(el, i) {
      target = document.getElementById("college_building");
      return [
        target.getBoundingClientRect().top +
          target.getBoundingClientRect().height / 2 -
          el.getBoundingClientRect().top,
        0
      ];
    },
    delay: function(el, index) {
      return index * 30;
    }
  });
  anime({
    targets: ".college_block_mari",
    easing: "easeOutExpo",
    duration: 1500,
    scale: [0.6, 1],
    opacity: [0, 1],
    translateX: function(el, i) {
      target = document.getElementById("college_building");
      return [
        target.getBoundingClientRect().left +
          target.getBoundingClientRect().width / 2 -
          el.getBoundingClientRect().left,
        0
      ];
    },
    translateY: function(el, i) {
      target = document.getElementById("college_building");
      return [
        target.getBoundingClientRect().top +
          target.getBoundingClientRect().height / 2 -
          el.getBoundingClientRect().top,
        0
      ];
    },
    delay: function(el, index) {
      return index * 30;
    },
    update: function(animation) {
      var el = document.getElementById("college_demo_text");
      var al = Math.round(animation.progress * 11000000 / 100);
      al = Math.max(al, 0);
      al = Math.min(al, 11000000);
      var mari = Math.round(animation.progress * 5360000 / 100);
      mari = Math.max(mari, 0);
      mari = Math.min(mari, 5360000);
      var inner_html =
        "Alcohol: " +
        al.toString() +
        "<br />" +
        "Marijuana: " +
        mari.toString();
      el.innerHTML = inner_html.toString();
    }
  });
  anime({
    targets: ["#college_demo_text"],
    visibilitY: "true",
    opacity: [0, 1],
    duration: 2000
  });
  setTimeout(show_college_people_graph, 5000);
}

function show_college_people_graph() {
  anime({
    targets: [
      "#highschool_building",
      "#secondary_building",
      "#graph_highschool",
      "#graph_secondary",
      "#highschool_demo_text",
      "#college_demo_text"
    ],
    visibilitY: "hidden",
    opacity: [1, 0],
    duration: 3000
  });
  chart = document.getElementById("young_people_graph");
  chart.innerHTML = "";
  var el;
  for (var i = 18; i < 22; i++) {
    var t = document.createElement("div");
    t.setAttribute("class", "bar_container");
    var m = document.createElement("div");
    m.setAttribute("class", "text_area text_area1");
    m.setAttribute("id", "info_" + i.toString());
    m.style.display = "flex";
    m.innerHTML =
      "Age: " +
      i.toString() +
      "<br />" +
      "Alcohol: 0" +
      "<br />" +
      "Marijuana: 0";
    el = document.createElement("div");
    el.setAttribute("class", "young_graph_bar");
    el.setAttribute("id", "bar" + String.fromCharCode(65 + i) + "alcohol");
    t.appendChild(m);
    t.appendChild(el);
    el = document.createElement("div");
    el.setAttribute("class", "young_graph_bar");
    el.setAttribute("id", "bar" + String.fromCharCode(65 + i) + "mari");
    t.appendChild(el);
    chart.appendChild(t);
  }
  el = document.getElementById(
    "bar" + String.fromCharCode(65 + 18) + "alcohol"
  );
  var square = document.getElementsByClassName(String.fromCharCode(65 + 18));
  var block_index = 0;
  function move_block() {
    anime({
      targets: square[0],
      translateX: {
        value: function(ele, i) {
          console.log(ele);
          var left_pos = ele.getBoundingClientRect().left;
          if (ele.classList.contains("alcohol")) {
            el = document.getElementById(
              "bar" + String.fromCharCode(65 + 18) + "alcohol"
            );
          }
          if (ele.classList.contains("mari")) {
            el = document.getElementById(
              "bar" + String.fromCharCode(65 + 18) + "mari"
            );
          }
          el.appendChild(ele);
          return [left_pos - ele.getBoundingClientRect().left, 0];
        }
      },
      translateY: function(ele, i) {
        var a = document.getElementById("graph_college");
        var b = document.getElementById("young_people_graph");
        var dis = a.getBoundingClientRect().top - b.getBoundingClientRect().top;
        return [dis, 0];
      },
      delay: function(el, index) {
        return index * 50;
      },
      duration: 1000,
      easing: "easeOutExpo",
      update: function(animation) {
        var m = document.getElementById("info_18");
        var al = Math.round(block_index * 2400000 / 50);
        al = Math.max(al, 0);
        al = Math.min(al, 2400000);
        var mari = Math.round(block_index * 1300000 / 130);
        mari = Math.max(mari, 0);
        mari = Math.min(mari, 1300000);
        var inner_html =
          "Age: 18" +
          "<br />" +
          "Alcohol: " +
          al.toString() +
          "<br />" +
          "Marijuana: " +
          mari.toString();
        m.innerHTML = inner_html.toString();
      }
    });
    if (block_index < square.length - 1) {
      block_index += 1;
      setTimeout(move_block, 30);
    }
  }
  var ell = document.getElementById(
    "bar" + String.fromCharCode(65 + 19) + "alcohol"
  );
  var square2 = document.getElementsByClassName(String.fromCharCode(65 + 19));
  var block_index2 = 0;
  function move_block2() {
    anime({
      targets: square2[0],
      translateX: {
        value: function(ele, i) {
          var left_pos = ele.getBoundingClientRect().left;
          if (ele.classList.contains("alcohol")) {
            ell = document.getElementById(
              "bar" + String.fromCharCode(65 + 19) + "alcohol"
            );
          }
          if (ele.classList.contains("mari")) {
            ell = document.getElementById(
              "bar" + String.fromCharCode(65 + 19) + "mari"
            );
          }
          ell.appendChild(ele);
          return [left_pos - ele.getBoundingClientRect().left, 0];
        }
      },
      translateY: function(ele, i) {
        var a = document.getElementById("graph_college");
        var b = document.getElementById("young_people_graph");
        var dis = a.getBoundingClientRect().top - b.getBoundingClientRect().top;
        return [dis, 0];
      },
      delay: function(el, index) {
        return index * 50;
      },
      duration: 1000,
      easing: "easeOutExpo",
      update: function(animation) {
        var m = document.getElementById("info_19");
        var al = Math.round( block_index2* 2600000 / 50);
        al = Math.max(al, 0);
        al = Math.min(al, 2600000);
        var mari = Math.round(block_index2 * 1300000 / 50);
        mari = Math.max(mari, 0);
        mari = Math.min(mari, 1300000);
        var inner_html =
          "Age: 19" +
          "<br />" +
          "Alcohol: " +
          al.toString() +
          "<br />" +
          "Marijuana: " +
          mari.toString();
        m.innerHTML = inner_html.toString();
      }
    });
    if (block_index2 < square2.length - 1) {
      block_index2 += 1;
      setTimeout(move_block2, 40);
    }
  }
  var elll = document.getElementById(
    "bar" + String.fromCharCode(65 + 20) + "alcohol"
  );
  var square3 = document.getElementsByClassName(String.fromCharCode(65 + 20));
  var block_index3 = 0;
  function move_block3() {
    anime({
      targets: square3[0],
      translateX: {
        value: function(ele, i) {
          var left_pos = ele.getBoundingClientRect().left;
          if (ele.classList.contains("alcohol")) {
            elll = document.getElementById(
              "bar" + String.fromCharCode(65 + 20) + "alcohol"
            );
          }
          if (ele.classList.contains("mari")) {
            elll = document.getElementById(
              "bar" + String.fromCharCode(65 + 20) + "mari"
            );
          }
          elll.appendChild(ele);
          return [left_pos - ele.getBoundingClientRect().left, 0];
        }
      },
      translateY: function(ele, i) {
        var a = document.getElementById("graph_college");
        var b = document.getElementById("young_people_graph");
        var dis = a.getBoundingClientRect().top - b.getBoundingClientRect().top;
        return [dis, 0];
      },
      delay: function(el, index) {
        return index * 50;
      },
      duration: 1000,
      easing: "easeOutExpo",
      update: function(animation) {
        var m = document.getElementById("info_20");
        var al = Math.round(block_index3 * 2800000 / 50);
        al = Math.max(al, 0);
        al = Math.min(al, 2800000);
        var mari = Math.round(block_index3 * 1300000 / 50);
        mari = Math.max(mari, 0);
        mari = Math.min(mari, 1300000);
        var inner_html =
          "Age: 20" +
          "<br />" +
          "Alcohol: " +
          al.toString() +
          "<br />" +
          "Marijuana: " +
          mari.toString();
        m.innerHTML = inner_html.toString();
      }
    });
    if (block_index3 < square3.length - 1) {
      block_index3 += 1;
      setTimeout(move_block3, 30);
    }
  }
  var ellll = document.getElementById(
    "bar" + String.fromCharCode(65 + 21) + "alcohol"
  );
  var square4 = document.getElementsByClassName(String.fromCharCode(65 + 21));
  var block_index4 = 0;
  function move_block4() {
    anime({
      targets: square4[0],
      translateX: {
        value: function(ele, i) {
          var left_pos = ele.getBoundingClientRect().left;
          if (ele.classList.contains("alcohol")) {
            ellll = document.getElementById(
              "bar" + String.fromCharCode(65 + 21) + "alcohol"
            );
          }
          if (ele.classList.contains("mari")) {
            ellll = document.getElementById(
              "bar" + String.fromCharCode(65 + 21) + "mari"
            );
          }
          ellll.appendChild(ele);
          return [left_pos - ele.getBoundingClientRect().left, 0];
        }
      },
      translateY: function(ele, i) {
        var a = document.getElementById("graph_college");
        var b = document.getElementById("young_people_graph");
        var dis = a.getBoundingClientRect().top - b.getBoundingClientRect().top;
        return [dis, 0];
      },
      delay: function(el, index) {
        return index * 50;
      },
      duration: 1000,
      easing: "easeOutExpo",
      update: function(animation) {
        var m = document.getElementById("info_21");
        var al = Math.round(block_index3 * 3300000 / 50);
        al = Math.max(al, 0);
        al = Math.min(al, 3300000);
        var mari = Math.round(block_index3 * 1300000 / 50);
        mari = Math.max(mari, 0);
        mari = Math.min(mari, 1300000);
        var inner_html =
          "Age: 21" +
          "<br />" +
          "Alcohol: " +
          al.toString() +
          "<br />" +
          "Marijuana: " +
          mari.toString();
        m.innerHTML = inner_html.toString();
      }
    });
    if (block_index4 < square4.length - 1) {
      block_index4 += 1;
      setTimeout(move_block4, 30);
    }
  }
  move_block();
  move_block2();
  move_block3();
  move_block4();
  setTimeout(function() {
    anime({
      targets: ".text_area1",
      opacity: [0, 1],
      easing: "easeOutExpo",
      duration: 2000
    });
  }, 0);
  setTimeout(function() {
    anime({
      targets: ".text_area1",
      opacity: [1, 0],
      easing: "easeOutExpo",
      duration: 2000
    });
    anime({
      targets: "#young_people_graph",
      opacity: [1, 0],
      duration: 4000,
      easing: "easeOutExpo"
    });
    anime({
      targets: "#buildings",
      opacity: [1, 0],
      duration: 4000,
      easing: "easeOutExpo"
    });
  }, 14000);
  setTimeout(function() {
    var ele = document.getElementById("young_people_graph");
    ele.style.display = "none";
    var ele = document.getElementById("buildings");
    ele.style.display = "none";
    show_proportion();
  }, 15000);
}

function show_proportion() {
  var child = document.getElementById("the_colleger");
  child.style.display = "block";
  child.style.margin = "auto";
  var highschooler = document.getElementById("the_colleger2");
  highschooler.style.display = "block";
  highschooler.style.margin = "auto";
  var colleger = document.getElementById("the_colleger3");
  colleger.style.display = "block";
  colleger.style.margin = "auto";

  timeline = anime.timeline();
  timeline.add([
    {
      targets: child,
      opacity: [0, 1],
      scale: [0, 2],
      duration: 700,
      easing: "easeOutExpo"
    },
    {
      targets: highschooler,
      opacity: [0, 1],
      scale: [0, 2],
      duration: 700,
      easing: "easeOutExpo"
    },
    {
      targets: colleger,
      opacity: [0, 1],
      scale: [0, 2],
      fill: "#123456",
      duration: 700,
      easing: "easeOutExpo"
    },

    {
      targets: [child, highschooler, colleger],
      opacity: [1, 0],
      scale: [1, 0],
      offset: "+=2000",
      duration: 3000,
      easing: "easeOutExpo"
    }
  ]);
}
// var createElements = (function() {
//   var sectionEl = document.createElement('section');
//   for (var i = 0; i < maxElements; i++) {
//     var el = document.createElement('div');
//     el.style.background = colors[anime.random(0, 3)];
//     sectionEl.appendChild(el);
//   }
//   document.body.appendChild(sectionEl);
// })();

// anime({
//   targets: 'div',
//   translateX: function(el, i){
//       return (300 - el.getBoundingClientRect().left);
//   },
//   translateY: function(el, i){
//       return (100 - el.getBoundingClientRect().top);
//   },
//   delay: function(el, index) {
//     return index * 80;
//   },
//   direction: 'reverse',
//   loop: true
// });

// ///////////////////////////////////

// anime({
//   targets: 'path',
//   strokeDashoffset: function(el) {
//     var pathLength = el.getTotalLength();
//     el.setAttribute('stroke-dasharray', pathLength);
//     return [-pathLength, 0];
//   },
//   stroke: {
//     value: function(el, i) {
//       return 'rgb(200,'+ i * 8 +',150)';
//     },
//     easing: 'linear',
//     duration: 2000,
//   },
//   strokeWidth: {
//     value: 6,
//     easing: 'linear',
//     delay: function(el, i) {
//       return 1200 + (i * 40);
//     },
//     duration: 800,
//   },
//   delay: function(el, i) {
//     return i * 60;
//   },
//   duration: 1200,
//   easing: 'easeOutExpo',
//   loop: true,
//   direction: 'alternate'
// });
