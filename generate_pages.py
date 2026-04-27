import os

template = """<!DOCTYPE html>
<html lang="en" dir="ltr">
<head>
  <meta charset="utf-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>DepEd - {title}</title>
  <link href="https://fonts.googleapis.com/css?family=Karla:400,700|Roboto" rel="stylesheet">
  <link href="plugins/material/css/materialdesignicons.min.css" rel="stylesheet" />
  <link href="plugins/simplebar/simplebar.css" rel="stylesheet" />
  <link href="plugins/DataTables/DataTables-1.10.18/css/jquery.dataTables.min.css" rel="stylesheet" />
  <link href="css/style.css" rel="stylesheet" />
  <link href="css/custom.css" rel="stylesheet" />
</head>
<body class="navbar-fixed sidebar-fixed" id="body">
  <div class="wrapper">
    <aside class="left-sidebar sidebar-dark" id="left-sidebar">
      <div id="sidebar" class="sidebar sidebar-with-footer">
        <div class="app-brand">
          <a href="national-insights.html">
            <span class="brand-name">DepEd System</span>
          </a>
        </div>
        <div class="sidebar-left" data-simplebar style="height: 100%;">
          <ul class="nav sidebar-inner" id="sidebar-menu">
            <li class="section-title">Dashboards</li>
            <li><a class="sidenav-item-link" href="national-insights.html"><i class="mdi mdi-chart-line"></i><span class="nav-text">National Insights</span></a></li>
            <li><a class="sidenav-item-link" href="teacher-dashboard.html"><i class="mdi mdi-teach"></i><span class="nav-text">Teacher Dashboard</span></a></li>
            <li><a class="sidenav-item-link" href="parent-dashboard.html"><i class="mdi mdi-account-group"></i><span class="nav-text">Parent Dashboard</span></a></li>
            <li><a class="sidenav-item-link" href="early-warning.html"><i class="mdi mdi-alert-outline"></i><span class="nav-text">Early Warning Risk</span></a></li>
            
            <li class="section-title">Class Management</li>
            <li><a class="sidenav-item-link" href="attendance.html"><i class="mdi mdi-calendar-check"></i><span class="nav-text">Attendance</span></a></li>
            <li><a class="sidenav-item-link" href="gradebook.html"><i class="mdi mdi-book-open-page-variant"></i><span class="nav-text">Gradebook</span></a></li>
            <li><a class="sidenav-item-link" href="online-class.html"><i class="mdi mdi-video"></i><span class="nav-text">Online Class</span></a></li>
            
            <li class="section-title">Learning Materials</li>
            <li><a class="sidenav-item-link" href="lms-catalog.html"><i class="mdi mdi-library"></i><span class="nav-text">LMS Catalog</span></a></li>
            <li><a class="sidenav-item-link" href="course-player.html"><i class="mdi mdi-play-circle"></i><span class="nav-text">Course Player</span></a></li>
            <li><a class="sidenav-item-link" href="ai-tutor.html"><i class="mdi mdi-robot"></i><span class="nav-text">AI Tutor</span></a></li>
            
            <li class="section-title">Administration</li>
            <li><a class="sidenav-item-link" href="lrn-validation.html"><i class="mdi mdi-account-search"></i><span class="nav-text">LRN Validation</span></a></li>
            <li><a class="sidenav-item-link" href="content-factory.html"><i class="mdi mdi-factory"></i><span class="nav-text">Content Factory</span></a></li>
            <li><a class="sidenav-item-link" href="human-review.html"><i class="mdi mdi-shield-check"></i><span class="nav-text">Human Review</span></a></li>
          </ul>
        </div>
      </div>
    </aside>

    <div class="page-wrapper">
      <header class="main-header" id="header">
        <nav class="navbar navbar-expand-lg navbar-light" id="navbar">
          <button id="sidebar-toggler" class="sidebar-toggle">
            <span class="sr-only">Toggle navigation</span>
          </button>
          <span class="page-title">{title}</span>
          <div class="navbar-right ">
            <ul class="nav navbar-nav">
              <li class="dropdown user-menu">
                <button class="dropdown-toggle nav-link" data-toggle="dropdown">
                  <img src="images/user/user-xs-01.jpg" class="user-image rounded-circle" alt="User Image" />
                  <span class="d-none d-lg-inline-block">Admin User</span>
                </button>
                <ul class="dropdown-menu dropdown-menu-right">
                  <li class="dropdown-footer">
                    <a class="dropdown-link-item" href="login.html"> <i class="mdi mdi-logout"></i> Log Out </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
      </header>
      
      <div class="content-wrapper">
        <div class="content">
{content}
        </div>
      </div>
      
      <footer class="footer mt-auto">
        <div class="copyright bg-white">
          <p>&copy; <span id="copy-year"></span> DepEd Integrated Proposal System Prototype</p>
        </div>
        <script>document.getElementById("copy-year").innerHTML = new Date().getFullYear();</script>
      </footer>
    </div>
  </div>
  
  <script src="plugins/jquery/jquery.min.js"></script>
  <script src="plugins/bootstrap/js/bootstrap.bundle.min.js"></script>
  <script src="plugins/simplebar/simplebar.min.js"></script>
  <script src="js/mono.js"></script>
</body>
</html>
"""

pages = {
    "attendance.html": {
        "title": "Attendance Monitoring",
        "content": """
          <div class="row">
            <div class="col-12">
              <div class="card card-default">
                <div class="card-header">
                  <h2>Daily Student Attendance</h2>
                </div>
                <div class="card-body">
                  <table class="table table-hover table-product" style="width:100%">
                    <thead>
                      <tr>
                        <th>Student Name</th>
                        <th>LRN</th>
                        <th>Grade/Section</th>
                        <th>Status (Today)</th>
                        <th>Absences (Month)</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Juan Dela Cruz</td>
                        <td>101234567890</td>
                        <td>Grade 10 - Rizal</td>
                        <td><span class="badge badge-success">Present</span></td>
                        <td>1</td>
                        <td><button class="btn btn-sm btn-outline-primary">View</button></td>
                      </tr>
                      <tr>
                        <td>Maria Clara</td>
                        <td>101234567891</td>
                        <td>Grade 10 - Rizal</td>
                        <td><span class="badge badge-danger">Absent</span></td>
                        <td><span class="badge badge-warning">4 (Chronic)</span></td>
                        <td><button class="btn btn-sm btn-outline-primary">View</button></td>
                      </tr>
                      <tr>
                        <td>Jose Rizal</td>
                        <td>101234567892</td>
                        <td>Grade 10 - Rizal</td>
                        <td><span class="badge badge-success">Present</span></td>
                        <td>0</td>
                        <td><button class="btn btn-sm btn-outline-primary">View</button></td>
                      </tr>
                      <tr>
                        <td>Andres Bonifacio</td>
                        <td>101234567893</td>
                        <td>Grade 10 - Rizal</td>
                        <td><span class="badge badge-warning">Late</span></td>
                        <td>2</td>
                        <td><button class="btn btn-sm btn-outline-primary">View</button></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
"""
    },
    "online-class.html": {
        "title": "Class Online Meeting",
        "content": """
          <div class="row">
            <div class="col-xl-8">
              <div class="card card-default">
                <div class="card-header">
                  <h2>Main Presentation Area (Low Bandwidth Mode)</h2>
                  <span class="badge badge-primary">Audio Only</span>
                </div>
                <div class="card-body text-center bg-light" style="min-height: 400px; display: flex; align-items: center; justify-content: center; flex-direction: column;">
                  <i class="mdi mdi-presentation text-primary" style="font-size: 100px;"></i>
                  <h4>Teacher is currently sharing: "Chapter 4: History of the Philippines"</h4>
                  <div class="mt-4">
                    <button class="btn btn-outline-danger"><i class="mdi mdi-microphone-off"></i> Mute</button>
                    <button class="btn btn-outline-secondary"><i class="mdi mdi-hand-back-left"></i> Raise Hand</button>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-4">
              <div class="card card-default">
                <div class="card-header">
                  <h2>Participants (42)</h2>
                </div>
                <div class="card-body" style="max-height: 200px; overflow-y: auto;">
                  <ul class="list-group">
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                      Teacher Jane (Host)
                      <i class="mdi mdi-microphone text-success"></i>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                      Juan Dela Cruz
                      <i class="mdi mdi-microphone-off text-danger"></i>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                      Maria Clara
                      <i class="mdi mdi-microphone-off text-danger"></i>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="card card-default mt-4">
                <div class="card-header bg-primary text-white">
                  <h2 class="text-white">Quick Quiz</h2>
                </div>
                <div class="card-body">
                  <p><strong>Question 1:</strong> Who is the national hero of the Philippines?</p>
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="quiz" id="q1a">
                    <label class="form-check-label" for="q1a">Andres Bonifacio</label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="quiz" id="q1b">
                    <label class="form-check-label" for="q1b">Jose Rizal</label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="quiz" id="q1c">
                    <label class="form-check-label" for="q1c">Emilio Aguinaldo</label>
                  </div>
                  <button class="btn btn-primary mt-3 btn-block">Submit Answer</button>
                </div>
              </div>
            </div>
          </div>
"""
    },
    "lrn-validation.html": {
        "title": "LRN Validation & Deduplication",
        "content": """
          <div class="row">
            <div class="col-12">
              <div class="card card-default">
                <div class="card-header">
                  <h2>LRN Validation & Deduplication</h2>
                </div>
                <div class="card-body">
                  <div class="row">
                    <div class="col-md-5">
                      <div class="card bg-light">
                        <div class="card-body">
                          <h4 class="mb-3">Applicant Data (New Entry)</h4>
                          <p><strong>Name:</strong> Mark Santos</p>
                          <p><strong>DOB:</strong> 2005-10-12</p>
                          <p><strong>Region:</strong> NCR</p>
                          <p><strong>Submitted LRN:</strong> 109876543210</p>
                        </div>
                      </div>
                    </div>
                    
                    <div class="col-md-2 d-flex align-items-center justify-content-center">
                      <i class="mdi mdi-swap-horizontal text-primary" style="font-size: 50px;"></i>
                    </div>

                    <div class="col-md-5">
                      <div class="card border-warning">
                        <div class="card-body">
                          <h4 class="mb-3">National Master Record Match</h4>
                          <p><strong>Name:</strong> Mark Anthony Santos <span class="badge badge-warning">Partial Match</span></p>
                          <p><strong>DOB:</strong> 2005-10-12 <span class="badge badge-success">Exact Match</span></p>
                          <p><strong>Region:</strong> NCR <span class="badge badge-success">Exact Match</span></p>
                          <p><strong>Master LRN:</strong> 109876543210 <span class="badge badge-success">Exact Match</span></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div class="row mt-4">
                    <div class="col-12 text-center">
                      <div class="alert alert-warning" role="alert">
                        <strong>Potential Duplicate Detected!</strong> Please review the records before confirming enrollment.
                      </div>
                      <button class="btn btn-success"><i class="mdi mdi-check"></i> Approve Match</button>
                      <button class="btn btn-danger"><i class="mdi mdi-close"></i> Reject</button>
                      <button class="btn btn-secondary"><i class="mdi mdi-account-search"></i> Manual Review</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
"""
    },
    "teacher-dashboard.html": {
        "title": "Teacher Dashboard",
        "content": """
          <div class="row">
            <div class="col-xl-3 col-sm-6">
              <div class="card card-default card-mini">
                <div class="card-header">
                  <h2>2</h2>
                  <div class="sub-title">
                    <span class="mr-1">Pending Grading Tasks</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-sm-6">
              <div class="card card-default card-mini">
                <div class="card-header">
                  <h2>5</h2>
                  <div class="sub-title">
                    <span class="mr-1">Attendance Gaps</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-sm-6">
              <div class="card card-default card-mini">
                <div class="card-header">
                  <h2>42</h2>
                  <div class="sub-title">
                    <span class="mr-1">Total Students</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-sm-6">
              <div class="card card-default card-mini">
                <div class="card-header">
                  <h2>95%</h2>
                  <div class="sub-title">
                    <span class="mr-1">Avg Class Attendance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="row">
            <div class="col-12">
              <div class="card card-default">
                <div class="card-header">
                  <h2>Student Risk Alerts</h2>
                </div>
                <div class="card-body">
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                      <span><strong>Maria Clara</strong> - Consecutive absences (3 days)</span>
                      <span class="badge badge-danger badge-pill">High Risk</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                      <span><strong>Juan Dela Cruz</strong> - Failing Math quiz scores</span>
                      <span class="badge badge-warning badge-pill">Medium Risk</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
"""
    },
    "gradebook.html": {
        "title": "Gradebook",
        "content": """
          <div class="row">
            <div class="col-12">
              <div class="card card-default">
                <div class="card-header d-flex justify-content-between align-items-center">
                  <h2>Class Gradebook (Grade 10 - Rizal)</h2>
                  <span class="badge badge-success"><i class="mdi mdi-lock"></i> Audit Trail Active (Immutable)</span>
                </div>
                <div class="card-body">
                  <div class="table-responsive">
                    <table class="table table-bordered table-striped" style="width:100%">
                      <thead class="bg-light">
                        <tr>
                          <th>Student Name</th>
                          <th>Quiz 1 (15%)</th>
                          <th>Quiz 2 (15%)</th>
                          <th>Project (30%)</th>
                          <th>Exam (40%)</th>
                          <th>Final Grade</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Juan Dela Cruz</td>
                          <td><input type="number" class="form-control form-control-sm" value="85"></td>
                          <td><input type="number" class="form-control form-control-sm" value="88"></td>
                          <td><input type="number" class="form-control form-control-sm" value="90"></td>
                          <td><input type="number" class="form-control form-control-sm" value="87"></td>
                          <td><strong>87.75</strong></td>
                        </tr>
                        <tr>
                          <td>Maria Clara</td>
                          <td><input type="number" class="form-control form-control-sm" value="92"></td>
                          <td><input type="number" class="form-control form-control-sm" value="95"></td>
                          <td><input type="number" class="form-control form-control-sm" value="98"></td>
                          <td><input type="number" class="form-control form-control-sm" value="96"></td>
                          <td><strong>95.85</strong></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div class="mt-3">
                    <button class="btn btn-primary">Save Grades</button>
                    <button class="btn btn-outline-secondary">Export to Excel</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
"""
    },
    "lms-catalog.html": {
        "title": "LMS Content Catalog",
        "content": """
          <div class="row">
            <div class="col-md-4">
              <div class="card mb-4">
                <div class="card-img-top bg-secondary text-center py-5">
                  <i class="mdi mdi-calculator text-white" style="font-size: 50px;"></i>
                </div>
                <div class="card-body">
                  <h5 class="card-title">Mathematics 10</h5>
                  <p class="card-text">Comprehensive guide to algebra, geometry, and basic statistics for Grade 10 students.</p>
                  <span class="badge badge-success mb-3"><i class="mdi mdi-wifi-off"></i> Offline-Ready</span>
                  <br>
                  <a href="course-player.html" class="btn btn-primary">Start Course</a>
                </div>
              </div>
            </div>
            
            <div class="col-md-4">
              <div class="card mb-4">
                <div class="card-img-top bg-info text-center py-5">
                  <i class="mdi mdi-earth text-white" style="font-size: 50px;"></i>
                </div>
                <div class="card-body">
                  <h5 class="card-title">Araling Panlipunan 10</h5>
                  <p class="card-text">Understanding contemporary issues in the Philippines and the world.</p>
                  <span class="badge badge-success mb-3"><i class="mdi mdi-wifi-off"></i> Offline-Ready</span>
                  <br>
                  <a href="course-player.html" class="btn btn-primary">Start Course</a>
                </div>
              </div>
            </div>
            
            <div class="col-md-4">
              <div class="card mb-4">
                <div class="card-img-top bg-warning text-center py-5">
                  <i class="mdi mdi-flask text-white" style="font-size: 50px;"></i>
                </div>
                <div class="card-body">
                  <h5 class="card-title">Science 10</h5>
                  <p class="card-text">Earth and space, forces and motion, and living things and their environment.</p>
                  <span class="badge badge-success mb-3"><i class="mdi mdi-wifi-off"></i> Offline-Ready</span>
                  <br>
                  <a href="course-player.html" class="btn btn-primary">Start Course</a>
                </div>
              </div>
            </div>
          </div>
"""
    },
    "course-player.html": {
        "title": "Course Player",
        "content": """
          <div class="row">
            <div class="col-xl-8">
              <div class="card card-default">
                <div class="card-header">
                  <h2>Lesson 1: Introduction to Algebra</h2>
                </div>
                <div class="card-body">
                  <h4>Transcript & Lesson Text</h4>
                  <p class="text-justify" style="font-size: 1.1em; line-height: 1.6;">
                    Algebra is a branch of mathematics dealing with symbols and the rules for manipulating those symbols. In elementary algebra, those symbols (today written as Latin and Greek letters) represent quantities without fixed values, known as variables.
                    <br><br>
                    Just as sentences describe relationships between specific words, in algebra, equations describe relationships between variables.
                  </p>
                  <hr>
                  <div class="alert alert-info mt-4">
                    <strong>Interactive Checkpoint:</strong> What do letters in algebra represent?
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="check1" id="c1a">
                    <label class="form-check-label" for="c1a">Fixed numbers</label>
                  </div>
                  <div class="form-check">
                    <input class="form-check-input" type="radio" name="check1" id="c1b">
                    <label class="form-check-label" for="c1b">Variables without fixed values</label>
                  </div>
                  <button class="btn btn-sm btn-primary mt-2">Check Answer</button>
                </div>
              </div>
            </div>
            <div class="col-xl-4">
              <div class="card card-default">
                <div class="card-header">
                  <h2>Course Modules</h2>
                </div>
                <div class="card-body p-0">
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item bg-light text-primary"><i class="mdi mdi-play-circle-outline"></i> Lesson 1: Introduction to Algebra</li>
                    <li class="list-group-item"><i class="mdi mdi-lock-outline text-muted"></i> Lesson 2: Linear Equations</li>
                    <li class="list-group-item"><i class="mdi mdi-lock-outline text-muted"></i> Lesson 3: Quadratic Equations</li>
                    <li class="list-group-item"><i class="mdi mdi-lock-outline text-muted"></i> Quiz 1</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
"""
    },
    "content-factory.html": {
        "title": "Content Ingestion & Structure Detection",
        "content": """
          <div class="row">
            <div class="col-12">
              <div class="card card-default">
                <div class="card-header">
                  <h2>Upload Curriculum File</h2>
                </div>
                <div class="card-body">
                  <div class="border-dashed border-2 border-primary text-center py-5 mb-4" style="border-style: dashed; border-width: 2px; background: #f8f9fa; cursor: pointer;">
                    <i class="mdi mdi-cloud-upload text-primary" style="font-size: 50px;"></i>
                    <h4>Drag and drop files here to upload</h4>
                    <p class="text-muted">Support for PDF, DOCX, PPTX</p>
                    <button class="btn btn-outline-primary mt-2">Browse Files</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="row">
            <div class="col-12">
              <div class="card card-default">
                <div class="card-header">
                  <h2>AI Extraction & Mapping</h2>
                </div>
                <div class="card-body">
                  <div class="table-responsive">
                    <table class="table table-bordered">
                      <thead class="bg-light">
                        <tr>
                          <th>Extracted Text / Concept</th>
                          <th>Detected DepEd Curriculum Code</th>
                          <th>Confidence Score</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>"Understanding the basic laws of motion..."</td>
                          <td><span class="badge badge-info">S8FE-Ib-15</span> (Science 8)</td>
                          <td><span class="badge badge-success">98%</span></td>
                        </tr>
                        <tr>
                          <td>"Identifying geometric sequences..."</td>
                          <td><span class="badge badge-info">M10AL-Id-1</span> (Math 10)</td>
                          <td><span class="badge badge-success">95%</span></td>
                        </tr>
                        <tr>
                          <td>"Philippine History from 1521 to 1898..."</td>
                          <td><span class="badge badge-warning">Pending Review</span></td>
                          <td><span class="badge badge-warning">65%</span></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <button class="btn btn-primary mt-3">Submit for Human Review</button>
                </div>
              </div>
            </div>
          </div>
"""
    },
    "human-review.html": {
        "title": "Human Review & Escalation",
        "content": """
          <div class="row">
            <div class="col-12">
              <div class="card card-default">
                <div class="card-header">
                  <h2>Moderation Queue</h2>
                </div>
                <div class="card-body">
                  <table class="table table-hover table-product" style="width:100%">
                    <thead>
                      <tr>
                        <th>Material Title</th>
                        <th>AI Proposed Subject/Grade</th>
                        <th>AI Confidence</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Module 1: Basic Calculus</td>
                        <td>Math 11 - STEM</td>
                        <td><span class="badge badge-success">92%</span></td>
                        <td><span class="badge badge-warning">Pending</span></td>
                        <td>
                          <button class="btn btn-sm btn-success">Approve</button>
                          <button class="btn btn-sm btn-danger">Reject</button>
                          <button class="btn btn-sm btn-secondary">Escalate</button>
                        </td>
                      </tr>
                      <tr>
                        <td>Interactive Reading - Noli Me Tangere</td>
                        <td>Filipino 10</td>
                        <td><span class="badge badge-warning">78%</span></td>
                        <td><span class="badge badge-warning">Pending</span></td>
                        <td>
                          <button class="btn btn-sm btn-success">Approve</button>
                          <button class="btn btn-sm btn-danger">Reject</button>
                          <button class="btn btn-sm btn-secondary">Escalate</button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
"""
    },
    "ai-tutor.html": {
        "title": "AI Tutor Session",
        "content": """
          <div class="row justify-content-center">
            <div class="col-xl-8">
              <div class="card card-default">
                <div class="card-header d-flex justify-content-between align-items-center">
                  <h2>DepEd AI Study Assistant</h2>
                  <button class="btn btn-danger"><i class="mdi mdi-human-greeting"></i> Connect to Human Teacher</button>
                </div>
                <div class="card-body" style="height: 400px; overflow-y: auto; background-color: #f5f6fa;">
                  <!-- Chat messages -->
                  <div class="media mb-4">
                    <img src="images/user/user-xs-01.jpg" class="mr-3 rounded-circle" alt="Student">
                    <div class="media-body bg-white p-3 rounded shadow-sm">
                      <p class="mb-0">I don't understand how to solve for X in the equation 2x + 5 = 15.</p>
                    </div>
                  </div>
                  
                  <div class="media mb-4 flex-row-reverse">
                    <div class="bg-primary text-center text-white rounded-circle ml-3" style="width: 40px; height: 40px; line-height: 40px;"><i class="mdi mdi-robot"></i></div>
                    <div class="media-body bg-primary text-white p-3 rounded shadow-sm">
                      <p class="mb-0">I can help with that! Think of the equation as a balanced scale. We want to get 'x' by itself. What happens if we subtract 5 from both sides?</p>
                    </div>
                  </div>
                  
                  <div class="media mb-4">
                    <img src="images/user/user-xs-01.jpg" class="mr-3 rounded-circle" alt="Student">
                    <div class="media-body bg-white p-3 rounded shadow-sm">
                      <p class="mb-0">Then it becomes 2x = 10?</p>
                    </div>
                  </div>
                  
                  <div class="media mb-4 flex-row-reverse">
                    <div class="bg-primary text-center text-white rounded-circle ml-3" style="width: 40px; height: 40px; line-height: 40px;"><i class="mdi mdi-robot"></i></div>
                    <div class="media-body bg-primary text-white p-3 rounded shadow-sm">
                      <p class="mb-0">Exactly! Now, since x is being multiplied by 2, what should we do to both sides to isolate x?</p>
                    </div>
                  </div>
                </div>
                <div class="card-footer bg-light">
                  <div class="input-group">
                    <input type="text" class="form-control" placeholder="Type your answer...">
                    <div class="input-group-append">
                      <button class="btn btn-primary" type="button"><i class="mdi mdi-send"></i> Send</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
"""
    },
    "early-warning.html": {
        "title": "Early Warning Risk Dashboard",
        "content": """
          <div class="row">
            <div class="col-12">
              <div class="card card-default">
                <div class="card-header">
                  <h2>Counselor Early Warning System</h2>
                </div>
                <div class="card-body">
                  <div class="alert alert-danger" role="alert">
                    <strong>Critical:</strong> 5 students require immediate counselor intervention.
                  </div>
                  
                  <table class="table table-striped mt-4">
                    <thead>
                      <tr>
                        <th>Student Name</th>
                        <th>Grade Level</th>
                        <th>Risk Factors</th>
                        <th>Calculated Risk Score</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Miguel Santos</td>
                        <td>Grade 8</td>
                        <td>Chronic Absenteeism (12 days), Failing 3 subjects</td>
                        <td>
                          <div class="progress mb-2" style="height: 20px;">
                            <div class="progress-bar bg-danger" role="progressbar" style="width: 95%;" aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">95% (Critical)</div>
                          </div>
                        </td>
                        <td><button class="btn btn-sm btn-primary">Schedule Meeting</button></td>
                      </tr>
                      <tr>
                        <td>Anna Reyes</td>
                        <td>Grade 10</td>
                        <td>Sudden drop in grades, Missed last 2 assignments</td>
                        <td>
                          <div class="progress mb-2" style="height: 20px;">
                            <div class="progress-bar bg-warning" role="progressbar" style="width: 65%;" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100">65% (Moderate)</div>
                          </div>
                        </td>
                        <td><button class="btn btn-sm btn-primary">Schedule Meeting</button></td>
                      </tr>
                      <tr>
                        <td>Pedro Cruz</td>
                        <td>Grade 7</td>
                        <td>Multiple disciplinary reports</td>
                        <td>
                          <div class="progress mb-2" style="height: 20px;">
                            <div class="progress-bar bg-warning" role="progressbar" style="width: 50%;" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">50% (Elevated)</div>
                          </div>
                        </td>
                        <td><button class="btn btn-sm btn-primary">Schedule Meeting</button></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
"""
    },
    "parent-dashboard.html": {
        "title": "Parent Dashboard",
        "content": """
          <div class="row justify-content-center">
            <div class="col-xl-6 col-lg-8">
              <!-- Profile Card -->
              <div class="card card-default">
                <div class="card-body text-center">
                  <h3 class="mb-1">Student: Maria Clara</h3>
                  <p class="text-muted">Grade 10 - Rizal | LRN: 101234567891</p>
                </div>
              </div>

              <!-- Alerts -->
              <h4 class="mt-4 mb-3">Real-time Alerts</h4>
              <div class="alert alert-danger" role="alert">
                <i class="mdi mdi-alert-circle mr-1"></i> <strong>Attendance Alert:</strong> Maria was marked absent today (Oct 15).
              </div>
              <div class="alert alert-warning" role="alert">
                <i class="mdi mdi-file-document mr-1"></i> <strong>Action Required:</strong> Please sign the Q2 Field Trip Consent Form.
                <br><button class="btn btn-sm btn-warning mt-2">Sign Form Now</button>
              </div>
              <div class="alert alert-success" role="alert">
                <i class="mdi mdi-check-circle mr-1"></i> <strong>Academic Update:</strong> Maria scored 95/100 on her recent Math Project!
              </div>

              <!-- Summary Stats -->
              <div class="row mt-4">
                <div class="col-6">
                  <div class="card bg-primary text-white text-center p-3">
                    <h3>92%</h3>
                    <p class="mb-0">Attendance Rate</p>
                  </div>
                </div>
                <div class="col-6">
                  <div class="card bg-success text-white text-center p-3">
                    <h3>88.5</h3>
                    <p class="mb-0">Current GPA</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
"""
    },
    "national-insights.html": {
        "title": "National Insights",
        "content": """
          <div class="row">
            <div class="col-xl-3 col-sm-6">
              <div class="card card-default card-mini">
                <div class="card-header">
                  <h2>28.5M</h2>
                  <div class="sub-title">
                    <span class="mr-1">Total Enrolled Students</span> |
                    <span class="mx-1">2%</span>
                    <i class="mdi mdi-arrow-up-bold text-success"></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-sm-6">
              <div class="card card-default card-mini">
                <div class="card-header">
                  <h2>890K</h2>
                  <div class="sub-title">
                    <span class="mr-1">Active Teachers</span> |
                    <span class="mx-1">1.5%</span>
                    <i class="mdi mdi-arrow-up-bold text-success"></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-sm-6">
              <div class="card card-default card-mini">
                <div class="card-header">
                  <h2>47K</h2>
                  <div class="sub-title">
                    <span class="mr-1">Public Schools Connected</span> |
                    <span class="mx-1">12%</span>
                    <i class="mdi mdi-arrow-up-bold text-success"></i>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-xl-3 col-sm-6">
              <div class="card card-default card-mini">
                <div class="card-header">
                  <h2>94.2%</h2>
                  <div class="sub-title">
                    <span class="mr-1">National Attendance Rate</span> |
                    <span class="mx-1">0.8%</span>
                    <i class="mdi mdi-arrow-down-bold text-danger"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div class="row">
            <div class="col-xl-8">
              <div class="card card-default">
                <div class="card-header">
                  <h2>Enrollment Trends (2018 - 2024)</h2>
                </div>
                <div class="card-body" style="height: 350px; background-color: #f8f9fa; display: flex; justify-content: center; align-items: center;">
                  <h4 class="text-muted"><i class="mdi mdi-chart-areaspline" style="font-size: 80px; display: block; text-align: center;"></i>[Interactive Spline Chart Placeholder]</h4>
                </div>
              </div>
            </div>
            <div class="col-xl-4">
              <div class="card card-default">
                <div class="card-header">
                  <h2>Regional Distribution</h2>
                </div>
                <div class="card-body" style="height: 350px; background-color: #f8f9fa; display: flex; justify-content: center; align-items: center;">
                  <h4 class="text-muted"><i class="mdi mdi-chart-pie" style="font-size: 80px; display: block; text-align: center;"></i>[Doughnut Chart Placeholder]</h4>
                </div>
              </div>
            </div>
          </div>
"""
    }
}

for filename, data in pages.items():
    content = template.replace("{title}", data["title"]).replace("{content}", data["content"])
    with open(filename, "w") as f:
        f.write(content)
    print(f"Generated {filename}")
