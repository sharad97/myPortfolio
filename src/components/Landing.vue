<template>
<body>
  <div id="map-container" class="svg-container"></div>
  <div class="self">
    <h2 class="myname">{{Name}}</h2>
    <h2 class="mail">sharadstha7@gmail.com</h2>
    <h2 class="tel">+1(707)-529-0738</h2>
    <a class="web" href="https://sharadportfolio.netlify.com">https://sharadportfolio.netlify.com</a>
  </div>
  
  <div class="edu">
    <h1 class="school">Education:</h1>
    <br>
    <h2 class="ri">{{ Education }}</h2>
    <h2>Bachelor's Degree in Computer Science</h2>
  </div>  
  
  <div class="exp" ><h1 class="exper">Experience:</h1> 
    
    <br>

    <div class="exp1">
      <ul>
        <li class="title">QA Engineer</li>
        <ul>
          <h2 class="company">Apple</h2>
          <h2 class="location">Sunnyvale, CA</h2>
          <h2 class="lenght">February 2018 – June 2019 (1 Year 5 months)</h2>
          <br>
          <h3 class="project_desc">Worked closely with manager, test leads, testers, business analyst, and developer to ensure no bug exists in Apple's website and quality remains same throughout different browsers and devices. Most projects were focused on the main events of Apple. 
          </h3>
          <br>
          <h3 class="work_desc"></h3>
          <dd>- Attended daily Scrum stand up meetings.
          </dd>
          <dd>- Worked with test leads to understand the requirements for a test environment setup.
          </dd>
          <dd>- Participated in weekly project status meeting and updated the testing Progress.
          </dd> 
          <dd>- Verified requirements coverage by conducting walk through meetings of Test plan and scenarios with business analysts, project manager and test leads.
          </dd>
          <dd>- Assisted test leads with creating and adding new test cases in existing pools of test cases.
          </dd>
          <dd>- Performed regression, smoke, functional, black box, white box, gray box, positive, negative, sanity, API and A/B tests manually and using automation tools such as Selenium grid.
          </dd>
          <dd>- Performed cross browser testing on PC, Mac, and different devices including iPhone, iPad, iPod touch, iPad, and certified android devices to ensure the applications’ compatibility against different environments. 
          </dd>
          <dd>- Tested Analytics to see if it tracks traffic and output information correctly.
          </dd>
        </ul>
      </ul>
    </div>
    
    <br>
    
    <div class="exp2">
      <ul>
        <li class="title">Java Software/QA Automation Engineer Trainee</li>
        <ul>
          <h2 class="company">Agama Solutions Inc.</h2>
          <h2 class="location">Fremont, CA</h2>
          <h2 class="lenght">November 2018 – January 2018 (3 months)</h2>
          <br>
          <h3 class="work_desc"></h3>
          <dd>- Received hands-on training on Core Java, Selenium, Bugzilla, Jira, Clear Quest, MySQL, Maven, Jenkins, and SOAP-UI.
          </dd>
          <dd>- Learned and worked throughout Software Development Life Cycle using Waterfall and Agile (Scrum) model.
          </dd>
          <dd>- Assisted in creating Test Plan, Test Scenarios/ Test Cases, and Execution of Test Cases.
          </dd> 
          <dd>- Created MySQL database and write SQL queries.
          </dd>
          <dd>- Learned to write effective Defect Reports.
          </dd>
        </ul>
      </ul>
    </div>
    
    <br>
    
    <div class="exp3">
      <ul>
        <li class="title">Software Engineer Intern</li>
        <ul>
          <h2 class="company">FileOpen Systems Inc.</h2>
          <h2 class="location">Santa Cruz, CA</h2>
          <h2 class="lenght">June 2017 – August 2017 (3 months)</h2>
          <br>
          <h3 class="work_desc">Job description: Analyze data and create optimal data visualization using d3.js and integrate into Vue.js.
          </h3>
          <br>
          <h3 class="project_desc">Worked on a separate link in the FileOpen website that allows authors, individuals who send their files to FileOpen to be encrypted and shared via a separate link, to see the analytics behind the file being shared.
          </h3>
          <br>
          <h3 class="work_desc">Accomplished:</h3>
          <dd>- Created an interactive geomap visualization which shows the locations of where users opened the document. When a user opens a file it will show on the map. Each user has a different color and displayed as circles (nodes) on the map. It has a search function which filters users. I also added force simulation, drag, and zoom functionality for better visualization. It also has the tooltip which shows information about the user when the mouse is move over the nodes. Data is pulled from API which is in JSON file.
          </dd>
          <dd>- Created an interactive cluster bubble chart which shows the number of times a document was opened per user and categorizes it by email domain. Data is pulled from API which is in JSON file. It has force simulation, drag, and zoom functionality for better visualization. I added on-click event button which calls a function to categorize user by email domain. I used force simulation while categorizing user which make more satisfying for client and interactive. I also added a dynamic legend, tooltips, and hint for more information.
          </dd>
        </ul>
      </ul>
    </div>
    
    <br>
    
    <div class="exp4">
      <ul>
        <li class="title">Software Engineer Intern</li>
        <ul>
          <h2 class="company">SEADS-Smart Energy Analytic Disaggregation System</h2>
          <h2 class="location">Santa Cruz, CA</h2>
          <h2 class="lenght">January 2017 – April 2017 (4 months)</h2>
          <br>
          <h3 class="project_desc">SEADS is a non-profit organization with the goal to design and build smart sensors powered by intelligent software capable of collecting and disaggregating information regarding energy usage from individual appliances in real-time.
          </h3>
          <br>
          <h3 class="work_desc">Responsible for creating data visualization using d3.js, edit data, use API, and integrate visualization into SEADS' website.
          </h3>
        </ul>
      </ul>
    </div>
    <br>
  </div>
  <div class="skills"><h1 class="skill">Skills:</h1> 
    <div id="chart" class="skills_chart"></div>
  </div>
</body>
</template>

<style scoped="true">
    ul  {
    list-style: square inside;
}
  
  .self {
    padding-top: 0px;
	padding-left:11px;
	padding-right:11px;
	padding-bottom:36px;
	margin-left:50px;
    margin-right:50px;
	float:left;
    font-size: 20px;
    font-weight: bold;
	
}
  .edu {
	padding-left:11px;
	padding-right:11px;
	padding-bottom:36px;
	margin-left:50px;
    margin-right:50px;
	float:left;
	
}
  .exp {
	padding-left:11px;
	padding-right:11px;
	padding-bottom:36px;
	margin-left:50px;
    margin-right:50px;
	float:left;
	
}
    .skill {
	padding-left:11px;
	padding-right:11px;
	margin-left:50px;
    margin-right:50px;
	float:left;
	
}
  .skills_chart{
    padding-left:11px;
	padding-right:11px;
	padding-bottom:36px;
	margin-left:50px;
    margin-right:50px;
    
  }

  h1{
    font-size: 20px;
    text-decoration: underline;
    font-weight: bold;
    
  }
   h2{
    font-size: 16px;
    font-style: oblique; 
  }
  .web{
    font-weight: normal;
    font-size:16px;
  }

</style>

<style>
.bar rect {
    stroke: #fff;
    shape-rendering: crispEdges;
}

.bar rect.background {
    fill: #eee;
}

.bar rect.percent {
    fill: #74c476;
}

.bar:hover rect.percent {
    fill: #a1d99b;
}

.bar text {
    font-size: 12px;
    fill: #333;
}

.axis line {
    stroke: #ccc;
    stroke-width: 1;
}

line.median {
    stroke: #777;
    stroke-width: 1;
}
.tooltip {
	width: auto;
    height: auto;
    font: 14px sans-serif;
    font-weight: bold;
    border-radius: 5px;
    padding: 3px 3px 3px 3px;
	position:absolute;			
    background: SeaGreen;	
  	border: solid black 2px;
    border-radius: 8px;			
    pointer-events: none;
    margin-left: 15px;
    color:white;
}
</style>

<script>
import * as d3 from 'd3';

export default {
  name: 'Landing',
  data() {
    return {
      Name: 'Sharad Shrestha',
      Education: 'University of California, Santa Cruz - Jack Baskin School Of Engineering'
    }
  },
  mounted: function () {
    var margin = {top: 30, right: 10, bottom: 30, left: 10};
    var height = 240;
    var width = 240;
    var chart1 = d3.select('div#map-container')
        .append('svg')
        .attr('width', width)
        .attr('height', height)
        .append('g');

    var defs = chart1.append('defs');
    var size = 150;
    var circles = [1];
    var color = d3.scale.category10();
    //  console.log(d3.schemeCategory10);
    var imgId = 'img_';
    var imgUrl = 'url(#img_)';

    var tooltip = d3.select('body').append('div')
    .attr('class', 'tooltip')
    .style('opacity', 0);

    defs.selectAll('pattern')
      .data(circles)
      .enter()
      .append('pattern')
      .attr('id', imgId)
      .attr('width', 1)
      .attr('height', 1)
      .attr('patternUnits', 'objectBoundingBox')
      .append('image')
      .attr('x', 0)
      .attr('y', 0)
      .attr('width', size)
      .attr('height', size)
      .attr('xlink:href', 'https://s3-us-west-1.amazonaws.com/12webimage/webimage/profpic.jpg');

    chart1.selectAll('circle')
      .data(circles)
      .enter()
      .append('circle')
      .attr('cx', 130)
      .attr('cy', 130)
      .attr('r', size / 2)
      .style('fill', imgUrl)
      .style('stroke-width', '10')
      .style('stroke', color)
      .on('mouseover', function (d) {
        tooltip.transition()
          .duration(200)
          .style('opacity', 0.9);
        tooltip.html('<table>' +
                     "<tr><td align='left'>About Me</td><td align='center'>:</td><td align='right'>I love programming. Passion for learning new technologies and self-motivated Computer Science undergrad with 2+ years of progressive IT experience as an Automation/Manual tester and a Software Developer with strong background in developing Website, Data Visualization, Automation Scripts, Automation framework, and performing Functional and Regression Testing.</td></tr>" +
                     "<tr><td align='left'>Website Created By</td><td align='center'>:</td><td align='right'>Sharad Shrestha</td></tr>" + '</table>')
          .style('left', (d3.event.pageX + 0) + 'px')
          .style('top', (d3.event.pageY - 28) + 'px');
      })
      .on('mouseout', function (d) {
        tooltip.transition()
          .duration(500)
          .style('opacity', 0);
      });

    var width1 = parseInt(d3.select('#chart').style('width'), 10);
    width1 = width1 - margin.left - margin.right;

    var barHeight = 20;
    var spacing = 3;
    var percent = d3.format('%');

    // scales and axes
    var x = d3.scale.linear()
        .range([0, width1])
        .domain([0, 10]); // hard-coding this because I know the data

    var y = d3.scale.ordinal();

    var xAxis = d3.svg.axis()
        .scale(x)
        .ticks(4);
    // create the chart
    var chart = d3.select('#chart').append('svg')
        .style('width', (width1 + margin.left + margin.right) + 'px')
        .append('g')
        .attr('transform', 'translate(' + [margin.left, margin.top] + ')');

    var data = [
      {
        'Name': 'd3.js',
        'ID': '1',
        'Total': 8
      },
      {
        'Name': 'Vue.js',
        'ID': '2',
        'Total': 7
      },
      {
        'Name': 'C++',
        'ID': '3',
        'Total': 7
      },
      {
        'Name': 'C#',
        'ID': '4',
        'Total': 7
      },
      {
        'Name': 'Java',
        'ID': '5',
        'Total': 8
      },
      {
        'Name': 'Selenium',
        'ID': '6',
        'Total': 8
      },
      {
        'Name': 'Radar',
        'ID': '7',
        'Total': 10
      },
      {
        'Name': 'Jira',
        'ID': '7',
        'Total': 9
      }
    ];

    data.forEach(function(d, i) {
      d.Name = d.Name;
      d.percent = d.Total;
      return d;
    });

    y.domain(d3.range(data.length)).rangeBands([0, data.length * barHeight]);

        // set height based on data
    height = y.rangeExtent()[1];
    d3.select(chart.node().parentNode)
            .style('height', (height + margin.top + margin.bottom) + 'px')

        // render the chart

        // add top and bottom axes
    chart.append('g')
            .attr('class', 'x axis top')
            .call(xAxis.orient('top'));

    chart.append('g')
            .attr('class', 'x axis bottom')
            .attr('transform', 'translate(0,' + height + ')')
            .call(xAxis.orient('bottom'));

    var bars = chart.selectAll('.bar')
          .data(data)
          .enter().append('g')
          .attr('class', 'bar')
          .attr('transform', function(d, i) { return 'translate(0,' + y(i) + ')'; });

    bars.append('rect')
            .attr('class', 'background')
            .attr('height', y.rangeBand())
            .attr('width', width1);

    bars.append('rect')
            .attr('class', 'percent')
            .attr('height', y.rangeBand())
            .attr('width', function(d) { return x(d.percent); })
            .on('mouseover', function (d) {
              tooltip.transition()
                .duration(200)
                .style('opacity', 0.9);
              tooltip.html(d.percent)
                .style('left', (d3.event.pageX + 0) + 'px')
                .style('top', (d3.event.pageY - 28) + 'px');
            })
            .on('mouseout', function (d) {
              tooltip.transition()
                .duration(500)
                .style('opacity', 0);
            });

    bars.append('text')
            .text(function(d) { return d.Name; })
            .attr('class', 'name')
            .attr('y', y.rangeBand() - 5)
            .attr('x', spacing);

        // add median ticks
    var median = d3.median(data, function(d) { return d.percent; });

    d3.select('span.median').text(percent(median));

    bars.append('line')
            .attr('class', 'median')
            .attr('x1', x(median))
            .attr('x2', x(median))
            .attr('y1', 1)
            .attr('y2', y.rangeBand() - 1);

    // resize
    d3.select(window).on('resize', resize);

    function resize() {
        // update width
      width1 = parseInt(d3.select('#chart').style('width'), 10);
      width1 = width1 - margin.left - margin.right;

        // resize the chart
      x.range([0, width1]);
      d3.select(chart.node().parentNode)
            .style('height', (y.rangeExtent()[1] + margin.top + margin.bottom) + 'px')
            .style('width', (width1 + margin.left + margin.right) + 'px');

      chart.selectAll('rect.background')
            .attr('width', width1);

      chart.selectAll('rect.percent')
            .attr('width', function(d) { return x(d.percent); });

        // update median ticks
      var median = d3.median(chart.selectAll('.bar').data(), function(d) { return d.percent; });

      chart.selectAll('line.median')
            .attr('x1', x(median))
            .attr('x2', x(median));

        // update axes
      chart.select('.x.axis.top').call(xAxis.orient('top'));
      chart.select('.x.axis.bottom').call(xAxis.orient('bottom'));
    }
  }
}
</script>
