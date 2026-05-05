export const teacherNavSections = [
  {
    title: "Dashboards",
    items: [
      { label: "Teacher Dashboard", icon: "mdi mdi-teach", path: "/teachers" },
      {
        label: "Early Warning Risk",
        icon: "mdi mdi-alert-outline",
        path: "/teachers/early-warning",
      },
    ],
  },
  {
    title: "Class Management",
    items: [
      {
        label: "SMEA/PIR",
        icon: "mdi mdi-chart-box-outline",
        path: "/teachers/smea-pir",
      },
      {
        label: "Attendance",
        icon: "mdi mdi-calendar-check",
        path: "/teachers/attendance",
      },
      {
        label: "Gradebook",
        icon: "mdi mdi-book-open-page-variant",
        path: "/teachers/gradebook",
      },
      {
        label: "School Forms",
        icon: "mdi mdi-file-document-outline",
        path: "/teachers/school-forms",
      },
      {
        label: "PMES/OPCRF",
        icon: "mdi mdi-clipboard-text-outline",
        path: "/teachers/pmes-opcrf",
      },
      {
        label: "AI Lesson Plan",
        icon: "mdi mdi-creation",
        path: "/teachers/ai-lesson-plan",
      },
    ],
  },
  {
    title: "AI LMS",
    items: [
      {
        label: "Resource Library",
        icon: "mdi mdi-library",
        path: "/teachers/lms-catalog",
      },
      {
        label: "Interactive Lessons",
        icon: "mdi mdi-play-circle",
        path: "/teachers/course-player",
      },
      {
        label: "Learning Progress",
        icon: "mdi mdi-chart-line-variant",
        path: "/teachers/learning-progress",
      },
      {
        label: "Offline Packages",
        icon: "mdi mdi-download-box",
        path: "/teachers/offline-packages",
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
