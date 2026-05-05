export const parentNavSections = [
  {
    title: "Dashboards",
    items: [
      {
        label: "Parent Dashboard",
        icon: "mdi mdi-account-group",
        path: "/parents",
      },
      {
        label: "Early Warning Risk",
        icon: "mdi mdi-alert-outline",
        path: "/parents/early-warning",
      },
    ],
  },
  {
    title: "Communication",
    items: [
      { label: "Announcements", icon: "mdi mdi-bullhorn-outline", path: "/parents/announcements" },
      {
        label: "Message Teacher",
        icon: "mdi mdi-message-text-outline",
        path: "/parents/messages",
      },
      {
        label: "School Forms",
        icon: "mdi mdi-file-document-outline",
        path: "/parents/school-forms",
      },
    ],
  },
  {
    title: "Learning",
    items: [
      {
        label: "Learning Materials",
        icon: "mdi mdi-book-open-variant",
        href: "lms-catalog.html",
      },
      {
        label: "Offline Packages",
        icon: "mdi mdi-download-box",
        href: "offline-packages.html",
      },
    ],
  },
];

export const teacherNavSections = [
  {
    title: "Dashboards",
    items: [
      { label: "Teacher Dashboard", icon: "mdi mdi-teach", path: "/teachers" },
      {
        label: "Early Warning Risk",
        icon: "mdi mdi-alert-outline",
        path: "/teacher/early-earning",
      },
    ],
  },
  {
    title: "Class Management",
    items: [
      {
        label: "SMEA/PIR",
        icon: "mdi mdi-chart-box-outline",
        href: "smea-pir.html",
      },
      {
        label: "PMES/OPCRF",
        icon: "mdi mdi-clipboard-text-outline",
        href: "pmes-opcrf.html",
      },
      {
        label: "Attendance",
        icon: "mdi mdi-calendar-check",
        href: "attendance.html",
      },
      {
        label: "Gradebook",
        icon: "mdi mdi-book-open-page-variant",
        href: "gradebook.html",
      },
      {
        label: "School Forms",
        icon: "mdi mdi-file-document-outline",
        href: "school-forms.html",
      },
      {
        label: "Online Class",
        icon: "mdi mdi-video",
        href: "online-class.html",
      },
      {
        label: "AI Lesson Plan",
        icon: "mdi mdi-creation",
        href: "content-factory.html",
      },
    ],
  },
  {
    title: "AI LMS",
    items: [
      {
        label: "Resource Library",
        icon: "mdi mdi-library",
        href: "lms-catalog.html",
      },
      {
        label: "Interactive Lessons",
        icon: "mdi mdi-play-circle",
        href: "course-player.html",
      },
      {
        label: "Learning Progress",
        icon: "mdi mdi-chart-line-variant",
        href: "learning-progress.html",
      },
      {
        label: "Offline Packages",
        icon: "mdi mdi-download-box",
        href: "offline-packages.html",
      },
    ],
  },
  {
    title: "AI SUPPORT",
    items: [
      { label: "AI Tutor", icon: "mdi mdi-robot", href: "ai-tutor.html" },
    ],
  },
  {
    title: "School Management",
    items: [
      {
        label: "School Forms",
        icon: "mdi mdi-file-document-outline",
        href: "school-forms.html",
      },
    ],
  },
  {
    title: "AI Tools",
    items: [
      { label: "AI lesson plan review", icon: "mdi mdi-creation", href: "#" },
      { label: "AI support monitor", icon: "mdi mdi-robot-outline", href: "#" },
    ],
  },
];
